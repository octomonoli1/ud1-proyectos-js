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

ejercicio6();