let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', solucion);


function solucion() {
    document.getElementById('spanSolucion').innerHTML = '';

    var impar = primero = true;
    var producto = 1;

    do {
        var numero = parseFloat(prompt("Digite un numero impar:"));

        if (isNaN(numero)) {
            alert("Digite solo numeros");
        } else {
            if (numero % 2 == 0) {
                impar = false;
            } else {
                if (primero) {
                    primero = false;
                    producto *= numero;

                    imprimir(`${numero} `);
                } else {
                    producto *= numero;

                    imprimir(`x ${numero} `);
                }
            }
        }
    } while (impar);

    if (!primero) imprimir(`= ${producto}`);
}

function imprimir(string) {
    var caja = document.getElementById('cajaSolucion');
    var span = document.getElementById('spanSolucion');

    span.innerHTML += string;

    caja.style.display = 'block';
}