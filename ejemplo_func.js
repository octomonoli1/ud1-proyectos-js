//1. Definiciones clásicas
//------------------------
function suma_clasica(a, b){
    return a + b;
}

function producto_clasico(a, b){
    return a*b;
}

//En result se almacena el RESULTADO de la funcion
let result = suma_clasica(10,50);
console.log(result);

//DEFINICION de la funcion
console.log(suma_clasica);


//2. Definiciónes funcionales
//----------------------------
const suma_flecha = (a, b) => a + b;
const producto_flecha = (a, b) => a * b;

//En result se almacena el RESULTADO de la funcion
let result2 = suma_flecha(10,50);
console.log(result2);

//DEFINICION de la funcion
console.log(suma_flecha);

//(8*5) + 10 (Sin callback. Ejecutando el resultados de las funciones en orden natural)
console.log(suma_clasica(producto_clasico(8,5), 10));
console.log(suma_flecha(producto_flecha(8,5),10));

//3. Definimos operacion con un parametro callback (Para alterar el orden ejecución)
// ------------------------------------------------

function operacion(callback, a,b,c){
    //Sabemos que al resultado de calback se le suma c.
    //Pero aún no sabemos que hace.
    return callback(a,b) + c;
}

//(8+5) + 10 (Llamando a la definición porque ya existe la suma)
console.log("Operacion (8+5) + 10: " + operacion(suma_flecha, 8,5,10));

//(20/10)+9 (Definiendolo directamente en la llamada porque no existe la division)
console.log("Operacion (8+5) + 10: " + operacion((a,b)=>a/b,20,10,9));

//4. Funciones callback predefinidas:

//Tiemout (Ejecuta alguna definición pasado N segundos)
window.setTimeout(()=>console.log("HOLA"),2000);

//Set Interval (Ejecuta alguna defiicion cada N segundos)
setInterval(()=>{
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();

    window.document.body.textContent= `${horas}:${minutos}:${segundos}`;
}, 1000);

//Filter (Filtra un array dado una definición e función que devuelve true/false)
let nuevo = ["Paco", "Luis","Sara"].filter((persona)=>persona.charAt(0)=='P');
console.log(nuevo);