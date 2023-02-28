import {useState,useEffect} from 'react'
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {getFirestore, collection} from 'firebase/firestore' 
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU14AUkQJ6SlyXAEHlzqU_SSpUK2pquhM",
  authDomain: "petgal-24bd9.firebaseapp.com",
  projectId: "petgal-24bd9",
  storageBucket: "petgal-24bd9.appspot.com",
  messagingSenderId: "319331852634",
  appId: "1:319331852634:web:44e4b59186188f27da5363",
  databaseURL: "https://petgal-24bd9-default-rtdb.asia-southeast1.firebasedatabase.app/",
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



