// Fecha de hoy
let hoy = new Date();

// Fecha de nacimiento
let nacimiento = new Date('1978-9-31');

// Comprobar si hoy es más tarde que la fecha de nacimiento
let esMasTarde = hoy > nacimiento;

// Día de nacimiento
let diaNacimiento = nacimiento.getDate();

// Mes de nacimiento (recuerda que Enero es mes 0)
let mesNacimiento = nacimiento.getMonth() + 1;

// Año de nacimiento (con 4 dígitos)
let anioNacimiento = nacimiento.getFullYear();

console.log(hoy); 
console.log(nacimiento); 
console.log(esMasTarde);
console.log(diaNacimiento);
console.log(mesNacimiento);
console.log(anioNacimiento);