let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    var span = document.getElementById('spanSolucion');
    var suma = 0;
    var primerNumro = true;

    span.innerHTML = '';

    do {
        var numero = parseFloat(prompt('Digite un numero:', ''));

        if (isNaN(numero)) {
            alert("Digite solo numeros");
        } else {
            suma += numero;

            if (primerNumro) {
                primerNumro = false;

                imprimir(`${numero}`);

                continue;
            }
            numero != 0 ? imprimir(` + ${numero}`) : imprimir(' = ');
        }

    } while (numero != 0);

    span.innerHTML += suma;
}

function imprimir(string) {
    var caja = document.getElementById('cajaSolucion');
    var span = document.getElementById('spanSolucion');

    span.innerHTML += string;

    caja.style.display = 'block';
}