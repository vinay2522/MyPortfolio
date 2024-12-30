import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const VISITORS_COLLECTION = 'visits';

export const trackVisit = async () => {
  try {
    // Get visitor's IP and location data
    const response = await fetch('https://api.ipify.org?format=json');
    const { ip } = await response.json();
    
    const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const geoData = await geoResponse.json();

    // Get device and browser info
    const userAgent = navigator.userAgent;
    const deviceType = getDeviceType(userAgent);
    const browserInfo = getBrowserInfo(userAgent);
    
    // Get referrer info
    const referrer = document.referrer || 'Direct';
    
    // Get session duration tracking
    const visitStartTime = new Date().toISOString();
    
    // Create visit data object
    const visitData = {
      timestamp: serverTimestamp(),
      ip,
      location: {
        country: geoData.country_name || 'Unknown',
        city: geoData.city || 'Unknown',
        region: geoData.region || 'Unknown'
      },
      device: {
        type: deviceType,
        browser: browserInfo,
        platform: navigator.platform,
        language: navigator.language
      },
      referrer,
      visitStartTime,
      screenResolution: {
        width: window.screen.width,
        height: window.screen.height
      },
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Save to Firestore
    const visitsRef = collection(db, VISITORS_COLLECTION);
    await addDoc(visitsRef, visitData);

    // Set session storage to prevent duplicate counts in same session
    sessionStorage.setItem('visitLogged', 'true');
    
  } catch (error) {
    console.error('Error tracking visit:', error);
  }
};

// Helper function to determine device type
const getDeviceType = (userAgent) => {
  if (/mobile/i.test(userAgent)) return 'Mobile';
  if (/tablet/i.test(userAgent)) return 'Tablet';
  if (/ipad/i.test(userAgent)) return 'Tablet';
  return 'Desktop';
};

// Helper function to get browser information
const getBrowserInfo = (userAgent) => {
  const browsers = {
    chrome: /chrome/i,
    safari: /safari/i,
    firefox: /firefox/i,
    opera: /opera/i,
    edge: /edge/i,
    ie: /msie|trident/i
  };

  for (const [browser, regex] of Object.entries(browsers)) {
    if (regex.test(userAgent)) return browser.charAt(0).toUpperCase() + browser.slice(1);
  }
  
  return 'Unknown';
};
