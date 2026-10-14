window.document.getElementById("url").textContent = window.location.href;
window.document.getElementById("info").textContent = window.navigator.userAgent;
window.document.getElementById("tam").textContent = `Alto: ${window.screen.availHeight} px - Acho: ${window.screen.availWidth} px`;
window.document.getElementById("idioma").textContent = window.navigator.language;

function mostrar_dimensiones(){
    window.alert(`Las dimensiones de la ventana son: ${window.screen.height} x ${window.screen.width}`);
    window.alert(`La zona visible de la ventana es: ${window.innerHeight} x ${window.innerWidth}`);
}

function volver(){
    window.history.back();
}

function recargar(){
    window.location.reload();
}

let intervalo;

function iniciar(){
    let contador = 5;
    intervalo = window.setInterval(()=>{
        window.document.getElementById("contador").textContent = contador--;
        if(contador == 0){
            detener();
        }
    }, 1000);
}

function detener(){
    window.document.getElementById("contador").textContent = "La cuenta ha llegado a su fin";
    window.clearInterval(intervalo);
}

function abrir_ventana(){
    window.open("https://www.google.es");
}

function cerrar_ventana(){
    window.close();
}

function cambiar_fondo(){
    if(window.confirm("Desea cambiar el fondo?")){
        do{
            var color = window.prompt("Introduce un color");
        }while(!color);
        window.document.body.style.backgroundColor = color;
    }
}

function solicita_info(){
    let nombre = window.prompt("Como te llamas");
    if(nombre){
        window.alert(`Hola ${nombre}`); 
    }else{
        window.alert(`No has introducido nada`); 
    }
}

function comprueba_tam(){
    const tam = window.innerWidth;
    window.alert(tam < 768? `Ventana pequeña ${tam}` : `Ventana grande ${tam}`);
}

