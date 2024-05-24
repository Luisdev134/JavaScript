let juegos = ['Mario', 'Minecraft','Roblox'];
console.log('Largo:',juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length -1];

console.log({primero, ultimo});


//barrer todo lo que esta dentro del areglo 
juegos. forEach(  (elemento, indice, arr) => {
    console.log(elemento, indice, arr);
});
//Para añadir algo en la ultima posición
let nuevaLongitud = juegos.push('F-Zero'); 
console.log(nuevaLongitud);

//Para añadir algo en la primera posición
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log(nuevaLongitud, juegos);

//Para borrar algo que esté en la ultima posición
let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

