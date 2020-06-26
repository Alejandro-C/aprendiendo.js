document.querySelector('#solucion').addEventListener('click', () => {
    document.querySelector('#spanSolucion').innerHTML = '';

    let numeroA = document.querySelector('#numeroA').value;
    let numeroB = document.querySelector('#numeroB').value;

    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('Digita un numero');
        return;
    }

    if (!validarNumeros(numeroA, numeroB)) return;

    if (numeroA > numeroB) {
        let contador = numeroB;

        while (contador < numeroA) {
            contador++;
            if (contador != numeroA) imprimir(contador);
        }
    } else {
        let contador = numeroA;

        while (contador < numeroB) {
            contador++;
            if (contador != numeroB) imprimir(contador);
        }
    }
});

function validarNumeros(numeroA, numeroB) {
    if (numeroA == numeroB) {
        alert("Los numeros son iguales, por lo tanto no hay numeros entre ellos");
        return false;
    }

    numeroA++;
    if (numeroA == numeroB) {
        alert("No hay numeros entre ellos");
        return false;
    }

    numeroA -= 2;
    if (numeroA == numeroB) {
        alert("No hay numeros entre ellos");
        return false;
    }

    return true;
}

function imprimir(numero) {
    let contenedor = document.getElementById('contenedorSolucion');
    let span = document.getElementById('spanSolucion');

    span.innerHTML += numero + ' ';
    contenedor.style.display = 'block';
}