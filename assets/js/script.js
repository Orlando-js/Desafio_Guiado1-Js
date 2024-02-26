function ciclo() {
    let numero = +prompt("Ingresa tu número entre el 1 y 20: ");
    while (numero > 20 || numero < 1) {
        numero = +prompt("Numero fuera de rango (1 al 20). Vuelve a ingresarlo: ");
    }
    return numero;
}

document.getElementById("boton-jugar").addEventListener("click", function () {
    let rango = ciclo();

    for (let i = 1; i <= rango; i++) {
        console.log(`${i} x ${rango} = ${i * rango}`);
    }

    for (let j = 1; j <= rango; j++) {
        let factorial = 1;
        for (let k = 1; k <= j; k++) {
            factorial = factorial * k;
        }
        console.log(`Factorial de ${j} es: ${factorial}`);
    }
});