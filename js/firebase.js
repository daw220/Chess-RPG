'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {crearDado,crearTablero,menuJugar} from "./jugabilidad.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqN1LPAyvwSK5nRV0gkZzawiuXzSLsMIM",
  authDomain: "chess-rpg-b8a32.firebaseapp.com",
  databaseURL: "https://chess-rpg-b8a32-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chess-rpg-b8a32",
  storageBucket: "chess-rpg-b8a32.appspot.com",
  messagingSenderId: "602424605552",
  appId: "1:602424605552:web:70ce3e42190604e622edb5",
  measurementId: "G-SPC1NF2WKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function inicioSesion() {
    console.log("LOGIN");
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
    .then(function(user) {
        console.log("User logged in: ", user);
        let login = document.getElementById('login');
        login.innerHTML="";
        crearTablero("1");
        crearDado();
        
    })
    .catch(function(error) {
        
        console.log("Error logging in: ", error);
        
        if(error == "FirebaseError: Firebase: Error (auth/user-not-found)")
        {
            menuJugar(1);
        }

        if(error == "FirebaseError: Firebase: Error (auth/invalid-email)")
        {
            menuJugar(1);
        }


        
    });
}

function registro() {
  console.log("REGISTER");
    var email = document.getElementById("email").value;;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, password)
    .then(function(user) {
        console.log("User registered: ", user);
        
        let login = document.getElementById('login');
        let p = document.createElement('p');
        p.textContent="Usuario Registrado correctamente";
        p.style="color:green";
        login.appendChild(p);
    })
    .catch(function(error) {
        console.log("Error registering: ", error);
        if(error == "FirebaseError: Firebase: Error (auth/invalid-email)")
        {
            menuJugar(2);
        }
        if(error == "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)")
        {
            menuJugar(2);
        }
        
    });
}




export{registro,inicioSesion}

