//1. Definicion clásica
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


//2. Definición funcional
const suma_flecha = (a, b) => a + b;
const producto_flecha = (a, b) => a * b;

//En result se almacena el RESULTADO de la funcion
let result2 = suma_flecha(10,50);
console.log(result2);

//DEFINICION de la funcion
console.log(suma_flecha);

//(8*5) + 10
console.log(suma_clasica(producto_clasico(8,5), 10));
console.log(suma_flecha(producto_flecha(8,5),10));


//(8+5) + 10
function operacion(callback, a,b,c){
    return callback(a,b) + c;
}

console.log("Operacion " + operacion(suma_flecha, 8,5,10));

//(20/10)+9
console.log(operacion((a,b)=>a/b,20,10,9));


window.setTimeout(()=>console.log("HOLA"),2000);

let nuevo = ["Paco", "Luis","Sara"].filter((persona)=>persona.charAt(0)=='P');
console.log(nuevo);



/*setInterval(()=>{
    const horas = new Date().getHours();
    const minutos = new Date().getMinutes();
    const segundos = new Date().getSeconds();

    window.document.body.textContent= `${horas}:${minutos}:${segundos}`;
}, 1000);*/


console.log(window.location.href);