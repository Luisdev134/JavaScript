let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    estaVivo: false,
    edad: 40, 
    coords: {
        let: 34.034,
        lng: -118.70
    },
    trajes:  ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip:'10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log(personaje)
console.log('Nombre', personaje.nombre)
console.log(personaje.trajes.length)
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1])

//Mas detalles 

//Eliminar un objeto
delete personaje.edad;
console.log(personaje)

//Cambiar los objetos por arreglos 

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

//Acceder unicamente a los obejtos, mas no lo que está dentro de los objetos osea los valores

const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);

//Acceder unicamente a los valores. 

const valores = Object.values(personaje);
console.log(valores);