'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {botonJugar} from "./jugabilidad.js";

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
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email, password)
    .then(function(user) {

        botonJugar();
        let login = document.getElementById('cont');
        let p = document.createElement('h3');
        p.textContent=`BIENVENIDO HEROE`;
        p.style="color:#fff;";
        login.appendChild(p);
        
    })
    .catch(function(error) { 
        menuJugar(1);
    });
}

function registro() {
    var email = document.getElementById("email").value;;
    var password = document.getElementById('password').value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email, password)
    .then(function(user) {        
        let login = document.getElementById('login');
        let p = document.createElement('p');
        p.textContent="Usuario Registrado correctamente";
        p.style="color:green";
        login.appendChild(p);
    })
    .catch(function(error) {
            menuJugar(2);
    });
}




export{registro,inicioSesion}

