'use strict'

import { registro,inicioSesion } from "./firebase.js";


let x,y,z,t;
let cas1,cas2,cas3,cas4;
let negi,posi,negj,posj;
let tiradas = "0";


function finPartida(params) {

    let tablero = document.getElementById('tablero');
    tablero.innerHTML="";
    tablero.classList="tablero1";
    let dado = document.getElementById('dado');
    dado.innerHTML="";
    dado.classList="dado1";
    let div = document.createElement('div');
    div.id="fin";

    let h1 = document.createElement('h1');
    h1.innerHTML="VICTORIA";
    div.appendChild(h1);

    let div1 = document.createElement('div');
    div.appendChild(div1);

    div1.addEventListener("click", ()=>{

        crearTablero("0");
        crearDado();
    });

    let h2 = document.createElement('h1');
    h2.innerHTML="VOLVER A JUGAR";
    div1.appendChild(h2);
    

    let tab = document.createElement("table");
    tab.setAttribute("id","tab1");
    tablero.appendChild(tab);
    tablero.appendChild(div);


    for (let i = 0; i < 5; i++) {

        let tr = document.createElement("tr");
        tab.appendChild(tr);

        for (let j = 0; j < 5; j++) {

            let td = document.createElement("td");
            tr.appendChild(td);
        
        }
    }
    tablero.appendChild(tab);

}

function mover(pulsado){
    


    if(pulsado == 99) 
    {
        finPartida();
    }
    else
    {
        let tab = document.getElementById("tab");
        tab.innerHTML="";

        for (let i = 0; i < 10; i++) {

            let tr = document.createElement("tr");
            tab.appendChild(tr);
    
            for (let j = 0; j < 10; j++) {
    
                let td = document.createElement("td");
                td.setAttribute("id",`${i}${j}`);
                td.setAttribute("ocupada",`0`);
                tr.appendChild(td);
            
            }
        }

        let casilla = document.getElementById(`${pulsado}`);
        casilla.style= "background-color: blue;"
        casilla.setAttribute("ocupada","1");

    
        let casilla1 = document.getElementById("99");
        casilla1.style= "background-color: green;"
        casilla1.setAttribute("ocupada","0"); 
    }
    
        
       

}
function movimiento(pasos){


    for (let i = 0; i < 10; i++) {

        for (let j = 0; j < 10; j++) {

            let casilla = document.getElementById(`${i}${j}`);
            if(casilla.getAttribute("ocupada") == 1)
            {
                cas1=`${i+pasos}${j}`;
                cas2=`${i-pasos}${j}`;
                cas3=`${i}${j+pasos}`;
                cas4=`${i}${j-pasos}`;
                negi = i-pasos;
                posi= i+pasos;
                negj=j-pasos;
                posj=j+pasos;

                if(negi>= 0 )
                {
                    let casilla1 = document.getElementById(`${cas2}`);
                    casilla1.style= "background-color: red;"
                    casilla1.addEventListener("click", ()=>{ mover(`${cas2}`)})
                }
                if( posi < 10 )
                {
                    let casilla2 = document.getElementById(`${cas1}`);
                    casilla2.style= "background-color: red;"
                    casilla2.addEventListener("click",()=>{ mover(`${cas1}`)})
                }
                    
                if( negj >= 0 )
                {
                    let casilla3 = document.getElementById(`${cas4}`);
                    casilla3.style= "background-color: red;"
                    casilla3.addEventListener("click",()=>{ mover(`${cas4}`)})
                }
                if(posj < 10 )
                {
                    let casilla4 = document.getElementById(`${cas3}`);
                    casilla4.style= "background-color: red;"
                    casilla4.addEventListener("click",()=>{ mover(`${cas3}`)})
                }

            }
        }
    }

        
       

}
function crearTablero(pro) {
   

        let login = document.getElementById('login');
        login.innerHTML="";

    if(pro == 1){
        
        let tablero = document.getElementById('t');
        tablero.id="tablero";
        tablero.classList="tablero";
    }
    else
    {
        let tablero = document.getElementById('tablero');
        tablero.innerHTML="";
    }
    


    let tab = document.createElement("table");
    tab.setAttribute("id","tab");
    tab.setAttribute("border","1");
    tablero.appendChild(tab);


    for (let i = 0; i < 10; i++) {

        let tr = document.createElement("tr");
        tab.appendChild(tr);

        for (let j = 0; j < 10; j++) {

            let td = document.createElement("td");
            td.setAttribute("id",`${i}${j}`);
            td.setAttribute("ocupada",`0`);

            if(i == 0 && j == 0)
            {
                td.style= "background-color: blue;"
                td.setAttribute("ocupada",`1`);
                
            }
            if(i == 9 && j == 9)
            {
                td.style= "background-color: green;"
            }
            tr.appendChild(td);
        
        }
    }
    tablero.appendChild(tab);

}

function tirarDado() {
    

    return Math.round(Math.random()* (6-1)+1);
}

function crearDado() {

    let dado= document.getElementById('d');
    dado.id="dado";
    dado.classList="dado";

    let con = document.createElement('div');
    con.setAttribute("class",`con`);
    con.setAttribute("id",`con`);
    dado.appendChild(con);

    let bn= document.createElement('input');
    bn.type="button";
    bn.value = "TIRAR";
    bn.id = "tirar";
    con.appendChild(bn);

    let h1 = document.createElement('h3');
    h1.setAttribute("id",`h1`);
    h1.textContent=`Numero de tiradas: ${tiradas}`;
    con.appendChild(h1);

    let div1 = document.createElement('div');
    div1.setAttribute("class",`sprite1 sprite1-1`);
    div1.setAttribute("id",`c1`);
    con.appendChild(div1);

    let div2 = document.createElement('div');
    div2.setAttribute("class",`sprite1 sprite1-2`);
    div2.setAttribute("id",`c2`);
    con.appendChild(div2);
    
    let div3 = document.createElement('div');
    div3.setAttribute("class",`sprite1 sprite1-3`);
    div3.setAttribute("id",`c3`);
    con.appendChild(div3);

    let div4 = document.createElement('div');
    div4.setAttribute("class",`sprite1 sprite1-4`);
    div4.setAttribute("id",`c4`);
    con.appendChild(div4);

    let div5 = document.createElement('div');
    div5.setAttribute("class",`sprite1 sprite1-5`);
    div5.setAttribute("id",`c5`);
    con.appendChild(div5);

    let div6 = document.createElement('div');
    div6.setAttribute("class",`sprite1 sprite1-6`);
    div6.setAttribute("id",`c6`);
    con.appendChild(div6);


    bn.addEventListener("click", (ev)=>{
        tiradas++;

        let img = document.getElementById('c1');

        let h1 = document.getElementById('h1');
        h1.textContent=``;
        h1.textContent=`Numero de tiradas: ${tiradas}`;

        let numD = tirarDado();
        img.setAttribute("class",`sprite1 sprite1-${numD}`);

        movimiento(numD);


    });

}


function menuJugar(fallo){

    let login = document.getElementById('login');
    login.innerHTML="";

    let div = document.createElement('div');
    div.id="cont";
    div.classList= "form-container cont";
    login.appendChild(div);

    
    
    
    let h3 = document.createElement('h3');
    h3.textContent="Chess-RPG";
    div.appendChild(h3);


    let form = document.createElement('form');
    div.appendChild(form);

    let correo = document.createElement('input');
    correo.type="text";
    correo.id="email";
    correo.classList="form-control";
    correo.placeholder="Correo...";
    div.appendChild(correo);

    let contra = document.createElement('input');
    contra.type="password";
    contra.id="password";
    contra.placeholder="Contraseña...";
    contra.classList="form-control";
    div.appendChild(contra);

    let div2 = document.createElement('div');
    div2.id="botones";
    div2.classList= "botones";
    div.appendChild(div2);
    let reg = document.createElement('input');
    reg.type="button";
    reg.value="Registro";
    reg.classList="btn btn-secondary";
    div2.appendChild(reg);

    let log = document.createElement('input');
    log.type="button";
    log.value="Iniciar sesión";
    log.classList="btn btn-primary"
    div2.appendChild(log);

    reg.addEventListener("click", ()=> registro());
    log.addEventListener("click", ()=> inicioSesion());
    
    if (fallo == 1) {
        let p = document.createElement('p');
        p.textContent="Usuario o contraseña incorrecto";
        p.style="color:red";
        login.appendChild(p);
        console.log("1");
    }
    if (fallo == 2){
        let p = document.createElement('p');
        p.textContent="Formato de correo o contraseña fallido \n Correo debe incluir @ \n Contraseña de al menos 6 caracteres";
        p.style="color:red";
        login.appendChild(p);
        console.log("2");
    }
    
    
}

function inicio(){
    menuJugar(0);
}

export{crearDado,crearTablero,menuJugar}

window.onload=inicio;