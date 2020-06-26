document.getElementById('mostrarSolucion').addEventListener('click', () => {
    let cuadro = document.getElementById('cuadro');
    let caja = document.getElementById('cajaSolucion');

    for (let i = 0; i <= 10; i++) {
        let columna = document.createElement('td');
        columna.innerHTML = i;
        cuadro.appendChild(columna);
    }

    for (let i = 1; i <= 10; i++) {
        let fila = document.createElement('tr');
        let index = document.createElement('td');

        index.innerHTML = i;

        fila.appendChild(index);

        for (let j = 1; j <= 10; j++) {
            let columna = document.createElement('td');

            columna.innerHTML = i * j;

            fila.appendChild(columna);
        }
        cuadro.appendChild(fila);
    }
    caja.style.display = 'block';
});