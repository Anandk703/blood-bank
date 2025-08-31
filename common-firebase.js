
  // Use the Firebase modular SDK via CDN
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  // <-- REPLACE with your config from Firebase console
  const firebaseConfig = {
    apiKey: "AIzaSyAVgmIYTi421frp93j9E-EsFeHgphnGVWY",
    authDomain: "blood-bank-bc166.firebaseapp.com",
    projectId: "blood-bank-bc166",
    storageBucket: "blood-bank-bc166.firebasestorage.app",
    messagingSenderId: "958524635543",
    appId: "1:958524635543:web:906255f1e2a8f88d05ecd2",
    measurementId: "G-JVDFV9R9RN"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const timestamp = serverTimestamp;
