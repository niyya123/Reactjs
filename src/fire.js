import {useState,useEffect} from 'react'
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth"
import {getFirestore, collection} from 'firebase/firestore' 
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3p4zTTKbmkeoWE-1tB-ok4jEzOEm0bdk",
  authDomain: "ktpt-a85a6.firebaseapp.com",
  projectId: "ktpt-a85a6",
  storageBucket: "ktpt-a85a6.appspot.com",
  messagingSenderId: "995884297068",
  appId: "1:995884297068:web:9204942f30292ba66e2149"
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



