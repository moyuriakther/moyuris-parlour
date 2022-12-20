import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2W1BO2hLGegdUmZk9oXVxvBB0ANsARxc",
  authDomain: "moyuris-parlour.firebaseapp.com",
  projectId: "moyuris-parlour",
  storageBucket: "moyuris-parlour.appspot.com",
  messagingSenderId: "972647422969",
  appId: "1:972647422969:web:cb0c0f308674c442d4fb28",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
