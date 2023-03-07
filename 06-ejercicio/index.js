// Definir una variable con la lista de la compra
let listaCompra = ["Leche", "Pan", "Huevos", "Frutas", "Verduras"];
console.log(listaCompra);

// Añadir "Aceite de Girasol" a la lista de la compra
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);
console.log(listaCompra);

// Definir una lista de tus 3 películas favoritas
let peliculasFavoritas = [
    {
        titulo: "El Gran Hotel Budapest",
        director: "Wes Anderson",
        fecha: 2014
    },
    {
        titulo: "Interstellar",
        director: "Christopher Nolan",
        fecha: 2014
    },
    {
        titulo: "Whiplash",
        director: "Damien Chazelle",
        fecha: 2014
    }
];

// Filtrar las películas posteriores al 1 de enero de 2010
let peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha > 2010);
console.log(peliculasPosteriores2010);

// Obtener una lista de los directores de las películas
let directores = peliculasFavoritas.map(pelicula => pelicula.director);
console.log(directores);

// Obtener una lista de los títulos de las películas
let titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);
console.log(titulos);

// Concatenar la lista de directores y la lista de títulos utilizando concat
let listaConcatenada = directores.concat(titulos);
console.log(listaConcatenada);

// Concatenar la lista de directores y la lista de títulos utilizando el operador de propagación (spread operator)
let listaConcatenadaSpread = [...directores, ...titulos];
console.log(listaConcatenadaSpread);
