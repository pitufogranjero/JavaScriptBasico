// Objeto con mis datos personales
let misDatos = {
    nombre: 'Javi',
    apellido: 'Amat',
    edad: 45,
    altura: 1.69,
    eresDesarrollador: true
};

// Obtener mi edad a partir del objeto anterior
let miEdad = misDatos.edad;
console.log(miEdad)

// Lista con objetos de datos personales
let listaDatos = [
    misDatos,
    {
        nombre: 'Juan',
        apellido: 'Garcia',
        edad: 32,
        altura: 1.80,
        eresDesarrollador: false
    },
    {
        nombre: 'Pedro',
        apellido: 'Lopez',
        edad: 28,
        altura: 1.70,
        eresDesarrollador: true
    }
];

  // Lista ordenada por edad, de mayor a menor
let listaOrdenadaPorEdad = listaDatos.sort((a,b) => a.edad - b.edad);

console.log(miEdad); 
console.log(listaDatos); 
console.log(listaOrdenadaPorEdad); 
