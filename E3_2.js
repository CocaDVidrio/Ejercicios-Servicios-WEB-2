//Dado let precios = [10, 20, 30, 40], usa .reduce() para obtener el total de la suma de los precios.

let precios = [10, 20, 30, 40];

let PreciosReduce = precios.reduce((acumulador, numero) => acumulador+numero,0);
console.log(PreciosReduce);

