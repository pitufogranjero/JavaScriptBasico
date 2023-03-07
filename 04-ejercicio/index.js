let nombre = "Javier"
console.log(nombre)

let apellido = "Amat"
console.log(apellido)

let estudiante = nombre.concat(" ",apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let letras = estudiante.length
console.log(letras)

let primera = nombre.charAt(0)
console.log(primera)

let ultima = apellido.charAt(apellido.length-1)
console.log(ultima)

let estudiante2 = estudiante.replace(" ","")
console.log(estudiante2)

let booleana = estudiante.includes(nombre)
console.log(booleana)
