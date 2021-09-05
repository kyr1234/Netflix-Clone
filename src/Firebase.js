import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1HcqcneYv7hvv9D-eCYa0CZc-SnwtzF8",
  authDomain: "netflix-44aff.firebaseapp.com",
  projectId: "netflix-44aff",
  storageBucket: "netflix-44aff.appspot.com",
  messagingSenderId: "790793022040",
  appId: "1:790793022040:web:277acea54b7cd1bbf0782d",
  measurementId: "G-KHQ4E5DB7M"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);