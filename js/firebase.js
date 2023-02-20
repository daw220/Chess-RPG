'use strict'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs, updateDoc , doc, orderBy, limit,query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import {botonJugar,menuJugar} from "./jugabilidad.js";

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
const db = getFirestore(app);


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
    .then(function(user) 
    {        
        menuJugar(3);
    })
    .catch(function(error) 
    {
            menuJugar(2);
    });
}
async function anhadir(tir,nom,jug,ini){

    await addDoc(collection(db, "partidas"),{
        tiradas:tir,
        nombre:nom,
        jugadas:jug,
        inicio:ini,
        fin: new Date().toISOString()
    })

};

async function tablaFin(){
    console.log("tabla");
    let aux = 1;
    
    const querySnapshot = await getDocs(query((collection(db, "partidas")),orderBy("tiradas","asc"),limit(5)));
        querySnapshot.forEach((doc) => {
            let tab = document.getElementById("tab1");
            let tr = document.createElement("tr");
            tab.appendChild(tr);
            for (let j = 0; j < 3; j++) {
    
                let td = document.createElement("td");
                if(j == 0) {
                    td.innerHTML = `${aux}º`
                }
                if(j == 1) {
                    td.innerHTML = `${doc.data().nombre}`
                }
                if(j == 2) {
                    td.innerHTML = `${doc.data().tiradas}`
                }
                tr.appendChild(td);
            }
            aux++;
        }); 
        return aux;
}

async function record(tiradas){
    let aux = 0;
    
    const querySnapshot = await getDocs(query((doc(db, "partidas","record")), where("tiradas", "<", tiradas)));
        querySnapshot.forEach((doc) => {
            
            return doc.data().tiradas;
            
        }); 
    return aux;
}

async function actuRecord(tiradas){
    await updateDoc((doc(db, "partidas","record")),{tiradas:tiradas});
}




export{registro,inicioSesion, anhadir, tablaFin,record, actuRecord}

