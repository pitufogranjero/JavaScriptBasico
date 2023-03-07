let n = 10;
let factorial = 1;
while (true) {
    factorial *= n;
    n--;
    if (n === 1) {
        break;
    }
}
console.log(factorial);