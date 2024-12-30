import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

const VISITORS_COLLECTION = 'visitors';

export const trackVisit = async () => {
  try {
    const visitorData = {
      timestamp: Timestamp.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'Direct',
    };
    
    await addDoc(collection(db, VISITORS_COLLECTION), visitorData);
  } catch (error) {
    console.error('Error tracking visit:', error);
  }
};

export const getVisitorStats = async () => {
  try {
    const q = query(
      collection(db, VISITORS_COLLECTION),
      orderBy('timestamp', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp.toDate()
    }));
  } catch (error) {
    console.error('Error getting visitor stats:', error);
    return [];
  }
};
