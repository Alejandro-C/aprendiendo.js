let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    document.getElementById('spanSolucion').innerHTML = '';

    let contador = 0;

    do {
        contador++;

        imprimir(contador);
    } while (contador < 5);
}

function imprimir(numero) {
    let caja = document.getElementById('cajaSolucion');
    let span = document.getElementById('spanSolucion');

    span.innerHTML += numero + ' ';

    caja.style.display = 'block';
}