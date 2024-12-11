import { initializeApp } from "firebase/app";
import{ createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCOO6RtZ3_BU5BuA7afT7CHObpDE9bvRJA",
  authDomain: "netflix-clone-46a91.firebaseapp.com",
  projectId: "netflix-clone-46a91",
  storageBucket: "netflix-clone-46a91.firebasestorage.app",
  messagingSenderId: "1084375028117",
  appId: "1:1084375028117:web:009bc4e4b87ba6d3b0a69c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
       try {
           const res = await createUserWithEmailAndPassword(auth, email, password);
           const user = res.user;
           await addDoc(collection(db, "user"), {
              uid: user.uid,
              name,
              authProviderL: "local",
              email,
           });
       } catch (error) {
              console.log(error);
              toast.error(error.code.split('/')[1].split('-').join(" "));
       }
}


const login = async (email, password) => {
       try {
            await signInWithEmailAndPassword(auth, email, password);
       } catch (error) {
              console.log(error);
              toast.error(error.code.split('/')[1].split('-').join(" "));
       }
}

const logout = () => {
       signOut(auth);
}

export {auth, db, login, signup, logout};