//Ejercicio 1
// Introduce por teclado un numero de segundos.
// Introduce por teclado un mensaje.
// Dicho mensaje debe aparecer por alert transcurrido esos segundos
function ejercicio1(){
    const segundos = parseInt(window.prompt("Introduce el numero de segundos"));
    const mensaje = window.prompt("Introduce un mensaje");
    setTimeout(()=>window.alert(mensaje), segundos*1000);
}

//ejercicio1();

//Ejercicio 2
//Modifica el ejercicio anterior para que mientras muestra el 
// mensaje se muestre por consola la cuenta atrás antes de 
// pintarse el mensaje
//setInterval() + clearInterval().
function ejercicio2(){
    const segundos = parseInt(window.prompt("Introduce el numero de segundos"));
    const mensaje = window.prompt("Introduce un mensaje");
    let contador = segundos;
    
    const interval = setInterval(()=> {
        console.log(contador);
        contador--;
    }, 1000);

    setTimeout(()=>{
        window.alert(mensaje);
        clearInterval(interval);
    }, segundos*1000);
}

//ejercicio2();

//Ejercicio 3
// Pide por pormpt una URL y redirige la página a la misma
function ejercicio3(){
    window.location.href = window.prompt("Introduce una URL");
    //window.location.assign(window.prompt("Introduce una URL"));
}

//ejercicio3();

//Ejercicio 4
//Muestra un menú con varias opciones. 
//a. Ir atrás
//b. Ir hacia adelante
//c. Ir a una dirección (entonces la solicitará)
//d. Mostrar la dirección actual
//e. Actualizar página
//f. No hacer nada. Salir
function ejercicio4(){
    const opt = window.prompt("Introduce una opción: \n"
        + "a. Ir atrás \n"
        + "b. Ir hacia adelante \n"
        + "c. Ir a una dirección \n"
        + "d. Mostrar la dirección actual \n"
        + "e. Actualizar página \n"
        + "f. No hacer nada. Salir \n");

    switch(opt){
        case 'a':
            window.history.back();
            //window.history.go(-1);
            break;
        case 'b':
            window.history.forward();
            //window.history.go(1);
            break;
        case 'c':
            ejercicio3();
            break;
        case 'd':
            console.log(window.location.href);
            break;
        case 'e':
            window.location.reload();
            break;
        case 'f':
            break;
        default:
            console.error("Introduce un valor correcto");
            break;
    }
}

ejercicio4();

//Ejercicio 5
//Al cargar la pagina consulta el nombre de usuario (username) 
// almacenado en el localStorage. Si existe saluda, si no lo pide.

//Ejercicio 6
//Contador de recargas. Cada vez que el usuario abra la página,
//acceda o actualice debe incrementar el numero de visitas.