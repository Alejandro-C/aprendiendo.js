document.getElementById('btnSolucion').addEventListener('click', (e) => {
    e.preventDefault();

    let contenedor = document.getElementById('contenedorSolucion');
    let span = document.getElementById('spanSolucion');
    let numeroA = document.getElementById('numeroA').value;
    let numeroB = document.getElementById('numeroB').value;
    let suma = resta = producto = divicion = 0;

    numeroA = parseFloat(numeroA);
    numeroB = parseFloat(numeroB);

    if (isNaN(numeroA) || isNaN(numeroB)) return alert('Digite solo numeros');

    suma = numeroA + numeroB;
    resta = numeroA - numeroB;
    producto = numeroA * numeroB;
    numeroB == 0 ? divicion = 'No se puede dividir entre cero' : divicion = numeroA / numeroB;

    span.innerHTML = `
        Suma = ${suma} <br>
        Resta = ${resta} <br>
        Multiplicasion = ${producto} <br>
        Divicion = ${divicion}
    `;
    contenedor.style.display = 'block';
});