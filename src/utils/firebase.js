// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy2fG31_4UVECXe90ndLxOWHfvDWFUa4w",
  authDomain: "gptnetflix-1e506.firebaseapp.com",
  projectId: "gptnetflix-1e506",
  storageBucket: "gptnetflix-1e506.appspot.com",
  messagingSenderId: "304658099333",
  appId: "1:304658099333:web:956115e2c9157f4fff4dec",
  measurementId: "G-W3821NGF0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);