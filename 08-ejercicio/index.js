// Función que devuelve siempre "true"
function alwaysTrue() {
    return true;
    }
    console.log(alwaysTrue())

  // Función asíncrona que pasa por consola un mensaje después de 5 segundos
async function delayedGreeting() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
    }

  // Función generadora de índices pares
function* evenIndexGenerator() {
    let index = 0;
    while (true) {
        yield index;
        index += 2;
        }
    }


const gen = evenIndexGenerator();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())