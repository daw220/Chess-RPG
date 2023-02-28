'use strict'
/*Importaciones de las funciones implementadas en los demas js */
import { registro,inicioSesion,record} from "./firebase.js";
import { dibujar } from "./dado.js";

/*Variables */
let cas1,cas2,cas3,cas4;
let negi,posi,negj,posj;
let tiradas = "0";
let nombre;
let jugadas = [];
let ini;

/* Funcion la cual desencadena el final de parida en la cual se borra toda la pantalla y se hace display 
    a la tabla de puntuacion y se hacen las interaciones con la base de datos de Firebase. */
function finPartida() {
    let tablero = document.getElementById('tablero');
    tablero.innerHTML="";
    tablero.classList="tablero1";
    let dado = document.getElementById('dado');
    dado.innerHTML="";
    dado.classList="dado1";
    let div = document.createElement('div');
    div.id="fin";

    let div1 = document.createElement('div');
    div1.classList="retry";
    div.appendChild(div1);

    let div2= document.createElement('div');
    div2.classList="retry";
    div.appendChild(div2);

    div1.addEventListener("click", ()=>{
        tiradas = 0;
        jugadas = [];
        crearTablero(1);
        crearDado(1);
    });

    div2.addEventListener("click", ()=>{
        tiradas = 0;
        nombre="";
        jugadas = [];
        let dado= document.getElementById('dado');
        dado.id="d";
        dado.classList="d";
        let cuerpo = document.getElementById('cuerpo');
        cuerpo.id="cuerpo";
        cuerpo.classList="cuerpo1";
        
        let tablero = document.getElementById('tablero');
        tablero.innerHTML="";
        tablero.id="t";
        tablero.classList="t";
        inicio();
    });

    let h2 = document.createElement('h1');
    h2.innerHTML="VOLVER A JUGAR";
    div1.appendChild(h2);

    let h3 = document.createElement('h1');
    h3.innerHTML="SALIR";
    div2.appendChild(h3);
    

    let tab = document.createElement("table");
    tab.setAttribute("id","tab1");
    tablero.appendChild(tab);
    tablero.appendChild(div);

    let h1 = document.createElement('h1');
    h1.id="record";
    record(tiradas);

   
    div.appendChild(h1);
    tablero.appendChild(tab);

}

/*Funcion el la cual se comprueba la posicion la cual se a elegido para el movimiento y mueve al heroe a esta casiila.
 Si esta casilla en la meta llama a la funcion finPartida.*/
function mover(pulsado){

    jugadas.push(pulsado);

    let bn = document.getElementById("tirar");
    bn.disabled=false;

    

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
                td.classList="ft";
            }
        }

        let casilla = document.getElementById(`${pulsado}`);
        casilla.classList="heroe";
        casilla.setAttribute("ocupada","1");

    
        let casilla1 = document.getElementById("99");
        casilla1.classList="cofre";
        casilla1.setAttribute("ocupada","0"); 
    }
    
        
       

}
/*Funcion en la que se implementan los calculos para que con la referencia de la posicion que ocupa el heroe 
calcula las posibles posiciones que puede ocupar el heroe tras la tirada y coloca listeners. */
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

                let lados=0;

                if(negi>= 0 )
                {
                    let casilla1 = document.getElementById(`${cas2}`);
                    casilla1.classList="indicador"
                    casilla1.addEventListener("click", ()=>{ mover(`${cas2}`)})
                }
                else{
                    lados++;
                }
                if( posi < 10 )
                {
                    let casilla2 = document.getElementById(`${cas1}`);
                    casilla2.classList="indicador"
                    casilla2.addEventListener("click",()=>{ mover(`${cas1}`)})
                }
                else{
                    lados++;
                }
                    
                if( negj >= 0 )
                {
                    let casilla3 = document.getElementById(`${cas4}`);
                    casilla3.classList="indicador"
                    casilla3.addEventListener("click",()=>{ mover(`${cas4}`)})
                }
                else{
                    lados++;
                }
                if(posj < 10 )
                {
                    let casilla4 = document.getElementById(`${cas3}`);
                    casilla4.classList="indicador"
                    casilla4.addEventListener("click",()=>{ mover(`${cas3}`)})
                }
                else{
                    lados++;
                }

                if(lados == 4)
                {
                    let bn = document.getElementById("tirar");
                    bn.disabled=false;
                }
            }
        }
    }
}
/*Funcion que genera la tabla en la cual se desarrolla el juego y se pinta la forma inicial del tablero. */
function crearTablero(pro) {
   

        let login = document.getElementById('login');
        login.innerHTML="";

    if(pro == 0){
        let cuerpo = document.getElementById('cuerpo');
        cuerpo.id="cuerpo";
        cuerpo.classList="cuerpo";
        
        let tablero = document.getElementById('t');
        tablero.id="tablero";
        tablero.classList="tablero";
    }
    else
    {
        let tablero = document.getElementById('tablero');
        tablero.innerHTML="";
        tablero.classList="tablero";
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
            td.classList="ft";
            if(i == 0 && j == 0)
            {
                td.classList="heroe";
                td.setAttribute("ocupada",`1`);
                
            }
            if(i == 9 && j == 9)
            {
                td.classList="cofre";
            }
            tr.appendChild(td);
        
        }
    }
    tablero.appendChild(tab);

}
/*Funcion que genera un numero aleatorio entre 1 y 6 */
function tirarDado() {   
  return Math.round(Math.random()* (6-1)+1);
}

/*Funcion la cual genera el dado y la funcionalidad para que este adquiera la animacion y el valor de la cara a mostrar. */
function crearDado(opt) {
    if(opt == 0)
    {
        let dado= document.getElementById('d');
        dado.id="dado";
        dado.classList="dado";
    }
    else
    {
        let dado= document.getElementById('dado');
        dado.id="dado";
        dado.classList="dado";
    }

    

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
    h1.textContent=`Tiradas: ${tiradas}`;
    con.appendChild(h1);

    let e3 = document.createElement('div');
    e3.setAttribute("class",`e3`);
    e3.setAttribute("id",`e3`);
    con.appendChild(e3);

    let d3 = document.createElement('div');
    d3.setAttribute("class",`d3`);
    d3.setAttribute("id",`d3`);
    e3.appendChild(d3);


    let div1 = document.createElement('aside');
    div1.setAttribute("class",`da cara1`);
    div1.setAttribute("id",`c1`);
    d3.appendChild(div1);
    
    let div2 = document.createElement('aside');
    div2.setAttribute("class",`da cara2`);
    div2.setAttribute("id",`c2`);
    d3.appendChild(div2);
    
    let div3 = document.createElement('aside');
    div3.setAttribute("class",`da cara3`);
    div3.setAttribute("id",`c3`);
    d3.appendChild(div3);

    let div4 = document.createElement('aside');
    div4.setAttribute("class",`da cara4`);
    div4.setAttribute("id",`c4`);
    d3.appendChild(div4);

    let div5 = document.createElement('aside');
    div5.setAttribute("class",`da cara5`);
    div5.setAttribute("id",`c5`);
    d3.appendChild(div5);

    let div6 = document.createElement('aside');
    div6.setAttribute("class",`da cara6`);
    div6.setAttribute("id",`c6`);
    d3.appendChild(div6);

    dibujar("1");

    bn.addEventListener("click", (ev)=>{
        tiradas++;

        let h1 = document.getElementById('h1');
        h1.textContent=``;
        h1.textContent=`Tiradas: ${tiradas}`;

        let d3 = document.getElementById('d3');
        d3.classList.add("animacion");

        let numD = tirarDado();
        
        window.setTimeout(()=>{dibujar(numD)},2000);

        window.setTimeout(()=>{
            movimiento(numD)
            d3.classList.remove("animacion");
        },3000);
        bn.disabled=true;

    });

}
/*Funcion la cual deshabilita el formulario y habilita el boton jugar con un mensaje para el usuario. */
function botonJugar(){

    let email = document.getElementById('email');
    email.disabled=true;
    let password = document.getElementById('password');
    password.disabled=true;
    let reg = document.getElementById('reg');
    reg.disabled=true;
    let log = document.getElementById('log');
    log.classList="btn btn-secondary";
    log.disabled=true;
    let jugar = document.getElementById('jugar');
    jugar.classList="btn btn-primary"
    jugar.disabled=false;

    jugar.addEventListener("click", ()=>{
        let login = document.getElementById('login');
        login.classList="";
        crearTablero(0);
        crearDado(0);
        ini = new Date().toISOString();
    })


}

/*Funcion la cual crea el login completo, en la cual se integran las funciones de firebase.js registro e iniciarSesion.
En este tambien se hacen las comprobaciones de los formatos de correo y contraseña. */
function menuJugar(fallo){

    let login = document.getElementById('login');
    login.innerHTML="";

    let div = document.createElement('div');
    div.id="cont";
    div.classList= "form-container cont";
    login.appendChild(div);

    let h3 = document.createElement('div');
    h3.classList="logo";
    div.appendChild(h3);

    let form = document.createElement('form');
    div.appendChild(form);

    let correo = document.createElement('input');
    correo.type="text";
    correo.id="email";
    correo.classList="form-control";
    correo.placeholder="Correo...";
    form.appendChild(correo);

    let contra = document.createElement('input');
    contra.type="password";
    contra.id="password";
    contra.autocomplete=true;
    contra.placeholder="Contrasena...";
    contra.classList="form-control";
    form.appendChild(contra);

    let div2 = document.createElement('div');
    div2.id="botones";
    div2.classList= "botones";
    form.appendChild(div2);

    let reg = document.createElement('input');
    reg.type="button";
    reg.value="Registro";
    reg.id="reg";
    reg.classList="btn btn-secondary";
    div2.appendChild(reg);

    let log = document.createElement('input');
    log.type="button";
    log.value="Iniciar sesion";
    log.id="log";
    log.classList="btn btn-primary"
    div2.appendChild(log);
    
    let jugar = document.createElement('input');
    jugar.id=  "jugar";
    jugar.type="button";
    jugar.value="JUGAR";
    jugar.disabled="true";
    jugar.classList="btn btn-secondary";
    div.appendChild(jugar);

    reg.addEventListener("click", ()=> {
        var password = document.getElementById("password");
        var email = document.getElementById("email");
        if(email.value.includes("@") || password.length >= 6)
        {
            registro()
        }
        else
        {
            menuJugar(1);
        }
    });
    log.addEventListener("click", ()=> {
        var password = document.getElementById("password");
        var email = document.getElementById("email");
        nombre= email.value;
        if(email.value.includes("@") || password.value.length >= 6)
        {
            inicioSesion()
        }
        else
        {
            menuJugar(2);
        }
    });
    
    if (fallo == 1) {
        let p = document.createElement('p');
        p.textContent="Usuario o contraseña incorrecto";
        p.style="color:red";
        div.appendChild(p);
    }
    if (fallo == 2){
        let p = document.createElement('p');
        p.textContent="Formato de correo o contraseña fallido "; 
        div.appendChild(p);
        let p1 = document.createElement('p');
        p1.textContent=" Correo debe incluir @ ";
        p1.style="color:red";
        div.appendChild(p1);
        let p2= document.createElement('p');
        p2.textContent="Contraseña de al menos 6 caracteres";
        p2.style="color:red";
        div.appendChild(p2);
    }
    if(fallo == 3)
    {
        let login = document.getElementById('login');
        let p = document.createElement('p');
        p.textContent="Usuario Registrado correctamente";
        p.style="color:green";
        login.appendChild(p);
    }
    
}
/*Funcion que ejecuta la funcion  menuJugar tras cargar la pagina completamente. */
function inicio(){
    menuJugar(0);
}

/*Exportacion  de funiones y variables para utilizarlas en firebase.js */
export{botonJugar,menuJugar,tiradas,jugadas,nombre,ini}

window.onload=inicio;