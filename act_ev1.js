let num_operaciones = 0;
let gasto_total = 0;
let gasto_mayor = -Infinity;
let gasto_menor = Infinity;

do{
    //Introducción de valores
    let precio = 0;
    do{
        precio = parseFloat(window.prompt("Introduce el precio"));
    }while(precio < 0 || isNaN(precio));
  
    let cant = 0;
    do{
        parseInt(window.prompt("Introduce la cantidad"));
    }while(cant <= 0 || isNaN(cant));

    const importe_inicial = precio*cant;
    console.log(`El precio incial (sin descuento ni iva es): ${importe_inicial.toFixed(2)}`);

    const importe_dto = aplica_descuento(importe_inicial);
    console.log(`El precio con descuento es: ${importe_dto.toFixed(2)}`);

    const importe_iva = calcula_iva(importe_dto);
    console.log(`El precio final (con IVA) es ${importe_iva.toFixed(2)}`);

    //Calculo de estadísticas
    num_operaciones++;
    gasto_total += importe_iva;
    gasto_mayor = (importe_iva > gasto_mayor)? importe_iva : gasto_mayor;
    gasto_menor = (importe_iva < gasto_menor)? importe_iva : gasto_menor;

}while(window.confirm("¿Desea continuar?"));

console.log(`Numero de operaciones realizadas: ${num_operaciones}`);
console.log(`Gasto total realizado ${gasto_total}`);
console.log(`Gasto medio: ${(gasto_total/num_operaciones).toFixed(2)}`);
console.log(`Gasto mayor: ${gasto_mayor}`);
console.log(`Gasto menor: ${gasto_menor}`);

function aplica_descuento(importe){

    if(importe >= 50 && importe < 100){
        importe *= 0.95;
    }else if(importe >= 100 && importe < 200){
        importe *= 0.9;
    }else if(importe >= 200){
        importe *= 0.85;
    }

    return importe;
}

function calcula_iva(importe){
    return importe * 1.21;
}