let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    var password = 'admin19';

    do {
        var passwordIngresada = prompt('Digite la contraseña: ', '');
    } while (passwordIngresada != password);

    imprimir('Hola');
}

function imprimir(string) {
    var caja = document.getElementById('cajaSolucion');
    var span = document.getElementById('spanSolucion');

    span.innerHTML = string;

    caja.style.display = 'block';
}