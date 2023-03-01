import {useState,useEffect} from 'react'
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {getFirestore, collection} from 'firebase/firestore' 
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ixWmtapD1aYgqwgih-2vhOI9qGJ0d0E",
  authDomain: "ktpthtw.firebaseapp.com",
  databaseURL: "https://ktpthtw-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ktpthtw",
  storageBucket: "ktpthtw.appspot.com",
  messagingSenderId: "587887115631",
  appId: "1:587887115631:web:a50fefba14f16dad86fc9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const colRef = collection(db,'users')
export const auth = getAuth(app);
export const storage = getStorage(app);


export function useAuth(){
  const [currentUser,setCurrentUser] = useState();
  
  
  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,user =>setCurrentUser(user) );
    return unsub;
  },[])

  return currentUser;
}



