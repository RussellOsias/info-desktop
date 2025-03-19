import { auth } from '../firebase-config.js';

export const setupDashboard = (showAuth) => {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      showAuth(); 
    }
  });
};