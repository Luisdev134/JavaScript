// function saludar(nombre) {
//     console.log('Hola ' + nombre);
// }
 
// // Forma correcta de hacer funciones
// const saludar2 = function(nombre) {
//     console.log('Hola ' + nombre);
//  }

// const saludarFlecha = (nombre) => {
//     console.log('Hola ' + nombre);
// }


// saludar('Luis');
// saludar2('Samir');
// saludarFlecha('Gianna');


//Return 

function sumar(a,b){
    return a + b;
}

console.log( sumar(7,3) );

//Funcion con flechas 

const sumar2 = (a,b) =>{
    return a + b;
}

console.log(sumar2(2,1));

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

//Hacer una funcion con flechas sin usar llaves 

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());