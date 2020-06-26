let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    document.getElementById('spanSolucion').innerHTML = '';

    let numero = document.getElementById('numero').value;
    let contador = 0;
    let producto = 0;

    do {
        contador++;

        producto = numero * contador;

        imprimir(`${numero} x ${contador} = ${producto}`);
    } while (contador < 10);
}

function imprimir(string) {
    let caja = document.getElementById('cajaSolucion');
    let span = document.getElementById('spanSolucion');

    span.innerHTML += string + '<br>';

    caja.style.display = 'block';
}