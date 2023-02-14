'use strict'

function dibujar(aleatorio){
    let aside;
    switch (parseInt(aleatorio)) {
        case 1:
            
            aside = document.getElementById("c1");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1");
            aside.classList.add("sprite1-6");
            break;
    
        case 2:
            aside = document.getElementById("c1");
            aside.classList.add("sprite1 sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1 sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1 sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1 sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1 sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1 sprite1-6");
            break;
        case 3:
            aside = document.getElementById("c1");
            aside.classList.add("sprite1 sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1 sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1 sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1 sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1 sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1 sprite1-6");
            break;
        case 4:
            aside = document.getElementById("c1");
            aside.classList.add("sprite1 sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1 sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1 sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1 sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1 sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1 sprite1-6");
            break;
        case 5:
            aside = document.getElementById("c1");
            aside.classList.add("sprite1 sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1 sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1 sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1 sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1 sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1 sprite1-6");
            break;
        case 6:
            aside = document.getElementById("c1");
            aside.classList.add("sprite1 sprite1-1");
            aside = document.getElementById("c2");
            aside.classList.add("sprite1 sprite1-2");
            aside = document.getElementById("c3");
            aside.classList.add("sprite1 sprite1-3");
            aside = document.getElementById("c4");
            aside.classList.add("sprite1 sprite1-4");
            aside = document.getElementById("c5");
            aside.classList.add("sprite1 sprite1-5");
            aside = document.getElementById("c6");
            aside.classList.add("sprite1 sprite1-6");
            break;
        default:
            console.log("Algo salio mal");
            break;
    }
    
    

}
export{dibujar}