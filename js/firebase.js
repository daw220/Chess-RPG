'use strict'
/*Importacion de modulos necesarios de firebase y de js jugabilidad. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, addDoc, collection, getDocs, updateDoc , doc, orderBy, limit,query, where } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import {botonJugar,menuJugar,tiradas,jugadas,nombre,ini} from "./jugabilidad.js";

/*Datos de configuracion de firebase */
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

/*Funcion que comprueba si los datos que se proporcionan en el formulario de la pagina de inicio 
existen en la base de datos de usuarios registrados en la aplicacion de firebase */
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

/*Funcion que crear un usuario en la plataforma firebase con los datos del formulario de la pagina de inicio.  */
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

/*Funcion el cual añade un documento nuevo con los datos de la partida en curso */
async function anhadir(){

    await addDoc(collection(db, "partidas"),{
        tiradas:tiradas,
        nombre:nombre,
        jugadas:jugadas,
        inicio:ini,
        fin: new Date().toISOString()
    })

};

/*Funcion el cual contruye una tabla de 5 registros con los datos almacenados en la base de datos
de firebase a modo de top puntuaciones del juego. */
async function tablaFin(){
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

/*Funcion el cual consulta la base de datos de Firebase para comprobar si se ha realizado un nuevo record 
de tiradas en la partida en curso. Ademas, se utilizan los Funcions anhadir  y tablaFin. */
async function record(){
    let res=[];
    const querySnapshot = await getDocs(query(collection(db, "partidas")));
        querySnapshot.forEach((doc) => {
            res.push(doc.data().tiradas);
        }); 
        
        res.sort((a,b)=>{return a - b;})

        let h1 = document.getElementById("record");
        if(res[0] > tiradas)
        {
            h1.innerHTML=`Heroe, has establecido un record de tiradas con ${tiradas} tiradas.`;
            anhadir();
            tablaFin();
        }
        else
        {
            anhadir();
            tablaFin();
            h1.innerHTML=`Record no superado, el actual record es de ${res[0]} tiradas.`;
        }s
}



/*Exportacion de los Funcions utilizados en el js jugabilidad. */
export{registro,inicioSesion,record}