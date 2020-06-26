let boton = document.getElementById('mostrarSolucion');


boton.addEventListener('click', () => {
    document.getElementById('spanSolucion').innerHTML = '';

    let caja = document.getElementById('cajaSolucion');
    let span = document.getElementById('spanSolucion');
    let numeroTablas = document.getElementById('numeroTablas').value;
    let limiteTabla = document.getElementById('limiteTabla').value;

    if (numeroTablas == '' || limiteTabla == '' || numeroTablas <= 0 || limiteTabla <= 0) return alert("Llena los campos con numeros mayores a 1");

    for (let i = 1; i <= numeroTablas; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        div.setAttribute('class', 'tarjeta-tabla');

        for (let j = 1; j <= limiteTabla; j++) {
            p.innerHTML += `${i} x ${j} = ${(i * j)} <br>`;
        }

        div.appendChild(p);
        span.appendChild(div);
    }
    caja.style.display = 'block';
});