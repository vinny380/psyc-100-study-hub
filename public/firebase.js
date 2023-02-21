// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getFirestore, collection, addDoc, doc, setDoc, serverTimestamp, query, where, getDocs, orderBy } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCROvxY1HYd191SCFuvYtRAQWIeTo9TzIQ",
  authDomain: "psyc-100-script.firebaseapp.com",
  projectId: "psyc-100-script",
  storageBucket: "psyc-100-script.appspot.com",
  messagingSenderId: "858334841785",
  appId: "1:858334841785:web:979e71a0d1852352170468",
  measurementId: "G-KWL357HFNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();


export function GoogleSignIn(){
  signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export function googleSignOut(){
  signOut(auth).then(() => {
  }).catch((error) => {
    alert(error)
  });
}

  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut')


export function AuthState(whenSignedIn, whenSignedOut, div1){
  auth.onAuthStateChanged(user => {
      if (user) {
        // whenSignedOut.hidden=true;
        document.getElementById(whenSignedOut).style.display = "none";
        document.getElementById(whenSignedIn).style.display = "inline";

        // div1.innerHTML= `<h4>Welcome ${user.displayName}</h1>`;
        // alert(user.displayName)
      }
      else {
        document.getElementById(whenSignedIn).style.display = "none";
        document.getElementById(whenSignedOut).style.display = "flex";

      }
    }
  )
}