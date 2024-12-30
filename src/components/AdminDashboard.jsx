import React, { useState, useEffect } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { FaUserShield, FaEnvelope, FaLock, FaSignOutAlt, FaEye, FaGlobe, FaMobile, FaDesktop } from 'react-icons/fa';

const AdminDashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [visitors, setVisitors] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
    browsers: {},
    countries: {},
    referrers: {}
  });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        fetchVisitors();
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchVisitors = async () => {
    try {
      const visitsRef = collection(db, 'visits');
      const q = query(visitsRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const visitorData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate()
      }));
      setVisitors(visitorData);

      // Calculate statistics
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const newStats = {
        total: visitorData.length,
        today: visitorData.filter(v => v.timestamp >= today).length,
        devices: { Mobile: 0, Desktop: 0, Tablet: 0 },
        browsers: {},
        countries: {},
        referrers: {}
      };

      visitorData.forEach(visitor => {
        // Count devices
        if (visitor.device?.type) {
          newStats.devices[visitor.device.type] = (newStats.devices[visitor.device.type] || 0) + 1;
        }

        // Count browsers
        if (visitor.device?.browser) {
          newStats.browsers[visitor.device.browser] = (newStats.browsers[visitor.device.browser] || 0) + 1;
        }

        // Count countries
        if (visitor.location?.country) {
          newStats.countries[visitor.location.country] = (newStats.countries[visitor.location.country] || 0) + 1;
        }

        // Count referrers
        const referrer = visitor.referrer || 'Direct';
        newStats.referrers[referrer] = (newStats.referrers[referrer] || 0) + 1;
      });

      setStats(newStats);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError('Invalid credentials. If you haven\'t set up an admin account yet, please use the setup link below.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4">
          <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
            <div className="flex items-center justify-center mb-8">
              <FaUserShield className="text-5xl text-cyan-500" />
            </div>
            <h2 className="text-4xl font-bold text-center mb-8 text-white">Admin Login</h2>
            {error && (
              <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <div className="flex items-center bg-gray-700/30 rounded border border-gray-600 px-3">
                  <FaEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 bg-transparent outline-none text-white"
                    placeholder="Admin Email"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center bg-gray-700/30 rounded border border-gray-600 px-3">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-transparent outline-none text-white"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-md hover:scale-105 duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? 'Signing in...' : 'Login'}
              </button>
            </form>
            <div className="mt-6 text-center">
              <button
                onClick={() => navigate('/admin-setup')}
                className="text-cyan-500 hover:text-cyan-400 text-sm"
              >
                Need to set up an admin account? Click here
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <FaEye className="text-4xl text-cyan-500 mr-4" />
            <h1 className="text-4xl font-bold text-white">Portfolio Analytics</h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-md hover:scale-105 duration-300"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold mb-2 text-cyan-500">Total Visits</h3>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold mb-2 text-cyan-500">Today's Visits</h3>
            <p className="text-3xl font-bold">{stats.today}</p>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold mb-2 text-cyan-500">Mobile Users</h3>
            <p className="text-3xl font-bold">{stats.devices.Mobile || 0}</p>
          </div>
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-lg font-semibold mb-2 text-cyan-500">Desktop Users</h3>
            <p className="text-3xl font-bold">{stats.devices.Desktop || 0}</p>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Countries */}
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500 flex items-center">
              <FaGlobe className="mr-2" /> Top Countries
            </h3>
            <div className="space-y-3">
              {Object.entries(stats.countries)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([country, count]) => (
                  <div key={country} className="flex justify-between items-center">
                    <span>{country}</span>
                    <span className="text-cyan-500">{count}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Browsers */}
          <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
            <h3 className="text-xl font-semibold mb-4 text-cyan-500 flex items-center">
              <FaDesktop className="mr-2" /> Top Browsers
            </h3>
            <div className="space-y-3">
              {Object.entries(stats.browsers)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 5)
                .map(([browser, count]) => (
                  <div key={browser} className="flex justify-between items-center">
                    <span>{browser}</span>
                    <span className="text-cyan-500">{count}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Recent Visits Table */}
        <div className="bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700 p-6">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-500">Recent Visitors</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-3 text-left text-cyan-500">Time</th>
                  <th className="px-4 py-3 text-left text-cyan-500">Location</th>
                  <th className="px-4 py-3 text-left text-cyan-500">Device</th>
                  <th className="px-4 py-3 text-left text-cyan-500">Browser</th>
                  <th className="px-4 py-3 text-left text-cyan-500">Referrer</th>
                </tr>
              </thead>
              <tbody>
                {visitors.slice(0, 10).map((visitor) => (
                  <tr key={visitor.id} className="border-b border-gray-700 hover:bg-gray-800/50">
                    <td className="px-4 py-3">
                      {visitor.timestamp?.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      {visitor.location?.city}, {visitor.location?.country}
                    </td>
                    <td className="px-4 py-3">
                      {visitor.device?.type}
                    </td>
                    <td className="px-4 py-3">
                      {visitor.device?.browser}
                    </td>
                    <td className="px-4 py-3">
                      {visitor.referrer || 'Direct'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
