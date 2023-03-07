//- Una variable que contenga tu altura en centímetros (entero)

let altura = 169
console.log(altura)

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.69
console.log(alturaMetros)

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 68.5
console.log(peso)

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaUp = Math.ceil(alturaMetros)
console.log(alturaUp)

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoDown = Math.floor(peso)
console.log(pesoDown)

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const maxNumber = Number.MAX_VALUE;
const maxPlusOne = maxNumber + 1;

if (maxPlusOne === Infinity) {
    console.log("El máximo valor que se puede obtener en JavaScript + 1 es igual a Infinity");
} else {
    console.log("El máximo valor que se puede obtener en JavaScript + 1 NO es igual a Infinity");
}
