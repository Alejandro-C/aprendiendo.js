let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    var span = document.getElementById('spanSolucion');
    var numero = document.getElementById('numero').value;
    var resultado = contador = 1;

    span.innerHTML = numero + '! = ';

    do {
        resultado *= (contador * numero);
        numero -= contador;
    } while (contador <= numero);

    imprimir(resultado);
}

function imprimir(string) {
    var caja = document.getElementById('cajaSolucion');
    var span = document.getElementById('spanSolucion');

    span.innerHTML += string;

    caja.style.display = 'block';
}