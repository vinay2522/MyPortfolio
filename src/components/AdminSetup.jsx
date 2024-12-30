import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaEnvelope, FaLock } from 'react-icons/fa';

const AdminSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSetup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4">
        <div className="bg-gradient-to-b from-gray-800 to-black p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
          <div className="flex items-center justify-center mb-8">
            <FaUserShield className="text-5xl text-cyan-500" />
          </div>
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Admin Setup</h2>
          {error && (
            <div className="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          <form onSubmit={handleSetup} className="space-y-6">
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
                  minLength="6"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-md hover:scale-105 duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? 'Creating...' : 'Create Admin Account'}
            </button>
          </form>
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/admin')}
              className="text-cyan-500 hover:text-cyan-400 text-sm"
            >
              Already have an account? Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetup;
