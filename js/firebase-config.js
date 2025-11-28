// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSxD-HhWrxu5ZRf9vFkIOq3Z9ivAS5SrA",
    authDomain: "tasklogger-798b9.firebaseapp.com",
    projectId: "tasklogger-798b9",
    storageBucket: "tasklogger-798b9.firebasestorage.app",
    messagingSenderId: "649384365786",
    appId: "1:649384365786:web:e3c7ae4684608f9c6e1fe3",
    measurementId: "G-YMFTRDMGJN"
  };

// Check if Firebase is already initialized
let app;
let auth;
let db;

try {
    if (!firebase.apps.length) {
        app = firebase.initializeApp(firebaseConfig);
        console.log('Firebase initialized successfully');
    } else {
        app = firebase.app();
        console.log('Using existing Firebase app');
    }
    
    // Initialize services
    auth = firebase.auth();
    db = firebase.firestore();
    
    // Configure Firestore settings
    db.settings({
        cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    });
    
    // Enable offline persistence
    db.enablePersistence()
      .then(() => {
          console.log('Firestore persistence enabled');
      })
      .catch((err) => {
          console.log('Firestore persistence error:', err);
      });
      
} catch (error) {
    console.error('Firebase initialization error:', error);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, auth, db };

}

