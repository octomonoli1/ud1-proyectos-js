function ejercicio1(){
    const nombre = "Octavio";
    const edad = 36;
    const ciudad = "Mairena del alcor";

    console.log(`Hola ${nombre}. Tienes ${edad} años y eres natural de ${ciudad}`);
}

//ejercicio1();

function ejercicio2(){
    const base = 10;
    const altura = 15;
    const area = base*altura/2;
    console.log(`El area del trinagulo de base ${base} y altura ${altura} es ${area} centimetros.`);
}

//ejercicio2();

function ejercicio3(){
    const gradosC = parseFloat(window.prompt("Introduce la temperatura en ºC"));
    const gradosF = (gradosC * 9/5) + 32;

    console.log(`El valor en farnheits de ${gradosC} es ${gradosF}`);

}

//ejercicio3();

function ejercicio4(){
    const precio = parseFloat(window.prompt("Introduce el precio del producto"));
    const cantidad = parseInt(window.prompt("Introduce la cantidad"));
    const total = precio*cantidad;

    console.log(`El total de su compra es ${total}`);
}

//ejercicio4();

function ejercicio5(){
    const salarioBruto = parseFloat(window.prompt("Introduce tu salario bruto"));
    const retencion = 15;
    const salarioNeto = salarioBruto * (1 - (retencion/100));

    console.log(`Para tu salario bruto ${salarioBruto} el neto es ${salarioNeto}`);
}

//ejercicio5();

function ejercicio6(){
    const total_segundos = parseInt(window.prompt("Introduce un numero de segundos"));

    const num_horas = Math.floor(total_segundos/3600);
    const resto_num_horas = total_segundos%3600;
    
    const num_minutos = Math.floor(resto_num_horas/60);
    const rest_num_minutos = resto_num_horas%60;
    
    const num_segundos = rest_num_minutos;

    console.log(`${total_segundos} segundos son: ${num_horas} horas, 
        ${num_minutos} minutos y ${num_segundos} segundos`);
}

//ejercicio6();

function ejercicio7(){
    let a = 10;
    let b = 8;
    console.log(`Valores originales ${a} y ${b}`);

    let aux = a;
    a = b;
    b = aux;
    console.log(`Valores intercambiados ${a} y ${b}`);
}

//ejercicio7();

function ejercicio8(){
    const edad = parseInt(window.prompt("Introduce una edad"));
    const mensaje = edad>=18? "Eres mayor de edad" : "Eres menor de edad";

    console.log(mensaje);
}

//ejercicio8();

function ejercicio9(){
    const num = parseInt(window.prompt("Introduce un numero"));
    if(num == 0){
        console.log("El numero es 0");
    }else if(num < 0){
        console.log("El nuermo es mayor que 0");
    }else{
        console.log("El numero es menor que 0");
    }
}

//ejercicio9();

function ejercicio10(){
    
    const num = parseInt(window.prompt("Introduce un numero"));
    const num2 = parseInt(window.prompt("Introduce otro numero"));

    if(num == num2){
        console.log("El numero es 0");
    }else if(num > num2){
        console.log("El nuermo 1 es mayor que el 2");
    }else{
        console.log("El numero 1 es menor que el 2");
    }
}

//ejercicio10();

function ejercicio11(){
    const nota = parseFloat(window.prompt("Introduce una nota"));
    let notaTexto;
    switch(true){
        case nota >= 0 && nota < 5:
            notaTexto = "Suspenso";
            break;
        case nota >= 5 && nota < 6:
            notaTexto = "Aprobado";
            break;
        case nota >= 6 && nota < 7:
            notaTexto = "Bien";
            break;
        case nota >= 7 && nota < 9: 
            notaTexto = "Notable";
            break;
        case nota >= 9 && nota <= 10:
            notaTexto = "Sobresaliente";
            break;
        default:
            notaTexto = "Nota introducida no válida";
            break;
    }

    console.log(notaTexto);
}

//ejercicio11();

function ejercicio12(){
    const anyo = parseInt(window.prompt("Introduce un año"));
    const es_no = ((anyo % 4 == 0 && anyo % 100 != 0) || anyo % 400 == 0) ? "es": "no es";

    console.log(`El año ${anyo} ${es_no} bisiesto`);
}

//ejercicio12();

function ejercicio13(){
    const num = parseInt(window.prompt("Introduce un numero"));
    const num2 = parseInt(window.prompt("Introduce otro numero"));
    const opc = window.prompt("Introduce una opción: +, -, *, /");
    let result;
    
    switch(opc){
        case '+':
            result = num + num2;
            break;
        case '-':
            result = num - num2;
            break;
        case '*':
            result = num * num2;
            break;
        case '/':
            result = num / num2;
            break;
        default:
            console.error("La operación introducida no es correcta");
    }

    console.log(`El resultado es ${result}`);
}

//ejercicio13();

function ejercicio14(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

//ejercicio14();

function ejercicio15(){
    for(let i = 1; i <= 100; i++){
        if(i%2==0){
            console.log(`${i}`);
        }
    }
}

//ejercicio15();

function ejercicio16(){
    const num = parseInt(window.prompt("Introduce un numero"));
    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

//ejercicio16();

function ejercicio17(){
    const num = parseInt(window.prompt("Introduce un numero"));
    let result = 0;
    for(let i = num; i > 0; i--){
        result += i;
    }
    console.log(result);
}

//ejercicio17();

function ejercicio20(){
    let nombre = "Pepe";
    saluda(nombre);
}

function saluda(nombre){
    console.log(`Hola ${nombre}`);
}

//ejercicio20();

//Ejercicio 31: Sistema de calificaciones
function ejercicio31(){
    let num_notas = parseInt(window.prompt("Introduce el numero de notas"));
    let acum_notas = 0;

    for(let i = 1 ; i <= num_notas; i++){
        let nota = parseFloat(window.prompt(`Introduce la nota ${i}`));
        acum_notas += nota;
    }

    const nota_final = acum_notas/num_notas;
    console.log(`Tu nota final es ${nota_final} ${calificacion_final(nota_final)}`);

}

function calificacion_final(nota){
    let result;
    switch(true){
        case nota >= 0 && nota < 5:
            result = "SUSPENSO";
            break;
        case nota >= 5 && nota < 6:
            result = "APROBADO";
            break;
        case nota >= 6 && nota < 7:
            result = "BIEN";
            break;
        case nota >= 7 && nota < 9:
            result = "NOTABLE";
            break;
        case nota >= 0 && nota < 5:
            result = "SORESALIENTE";
            break;
        default:
            result = "NOTA NO VALIDA";
            break;
    }

    return result;
}

//ejercicio31();

function ejercicio32(){
    let saldo = 1000.0;
    let opc;
    do{
        opc = parseInt(window.prompt("Introduce una opción: \n"
            + "1. Consulta tu saldo\n"
            + "2. Retirar dinero\n"
            + "3. Ingresar dinero\n"
            + "4. Salir"));

        switch(opc){
            case 1: 
                console.log(`Su saldo actual es ${saldo}`)
                break;
            case 2: 
                const retirar = parseFloat(window.prompt("Cuanto vas a retirar"));
                saldo = retirar_dinero(saldo, retirar);
                break;
            case 3: 
                const ingresar = parseFloat(window.prompt("Cuanto vas a ingresar"));
                saldo = ingresar_dinero(saldo, ingresar);
                break;
            case 4: 
                console.log("Gracias por utilizar nuestro cajero");
                break;
            default:
                console.error("Debe introducir una opc correcta");
                break;
        }
    }while(opc != 4);
}

function retirar_dinero(saldo, retirar){

    let result = saldo; 

    if(saldo < retirar){
        console.log("No se puede retirar mas dinero del que hay");
    }else if(retirar <= 0){
        console.log("Debes retirar una cantidad positiva");
    }else if(isNaN(retirar)){
        console.log("Debes introducir una cantidad valida");
    }else{
        result = saldo - retirar;
    }

    return result;

}

function ingresar_dinero(saldo, ingresar){

    let result = saldo; 

    if(ingresar <= 0){
        console.log("Debes ingresar una cantidad positiva");
    }else if(isNaN(ingresar)){
        console.log("Debes introducir una cantidad valida");
    }else{
        result = saldo + ingresar;
    }

    return result;

}

ejercicio32();