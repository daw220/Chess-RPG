'use strict'

function dibujar(){
    let canvas;
    //Unidad basica de construccion de canvas
    canvas = document.getElementById("dado1");
    canvas.classList.add("dado1");
    if(canvas.getContext){
        console.log("dibujo");
        let ctx = canvas.getContext("2d");
        let x = canvas.width*0.5;
        let y = canvas.height*0.5;
        let r = canvas.height*0.125;
        ctx.beginPath();
        ctx.arc(x,y,r,0,2*Math.PI);
        ctx.fillStyle="black";
        ctx.fill();
    }

}
export{dibujar}