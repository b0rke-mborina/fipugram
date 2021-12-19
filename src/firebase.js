import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";

// Web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD_4zjVRwruHlc-0L4Uq2DvRSxs_6Kkjjs",
	authDomain: "fipugram-a9d3b.firebaseapp.com",
	projectId: "fipugram-a9d3b",
	storageBucket: "fipugram-a9d3b.appspot.com",
	messagingSenderId: "753759794122",
	appId: "1:753759794122:web:b4e5a3f0bae7d690ce1533"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { firebase };