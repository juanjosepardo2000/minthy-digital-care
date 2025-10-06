import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Tu configuración de Firebase (obtén estos datos de Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDdrtkxVWXJ_7-Kh8fgZgN77clCn-nUwU4",
  authDomain: "minthy-c63d3.firebaseapp.com",
  databaseURL: "https://minthy-c63d3-default-rtdb.firebaseio.com",
  projectId: "minthy-c63d3",
  storageBucket: "minthy-c63d3.firebasestorage.app",
  messagingSenderId: "618919377373",
  appId: "1:618919377373:web:6f6e6dda4478a7027c9e34",
  measurementId: "G-PYH5V766BE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
export const db = getFirestore(app);