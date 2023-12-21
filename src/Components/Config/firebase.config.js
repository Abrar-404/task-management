// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiJJs2BwQoxxb0-vhcQh7jG56SW-pu-BQ',
  authDomain: 'task-management-cfbc8.firebaseapp.com',
  projectId: 'task-management-cfbc8',
  storageBucket: 'task-management-cfbc8.appspot.com',
  messagingSenderId: '11265781740',
  appId: '1:11265781740:web:688962d1ade070f1055ac9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
