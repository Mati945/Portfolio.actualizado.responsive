const button = document.querySelector('.btn'); 
let isLight = true; // Variable para alternar entre los dos colores

// Comprobar si ya existe un color guardado en localStorage
if (localStorage.getItem('isLight') === 'false') {
    document.body.style.backgroundColor = '#000000'; // Fondo negro
    isLight = false; // Establecer el estado inicial como oscuro
} else {
    document.body.style.backgroundColor = '#E0DACE'; // Fondo color claro
}

// Función para cambiar el color de fondo
button.addEventListener('click', () => {
    if (isLight) {
        document.body.style.backgroundColor = '#000000'; // Fondo negro
        localStorage.setItem('isLight', 'false'); // Guardar el estado como oscuro
    } else {
        document.body.style.backgroundColor = '#E0DACE'; // Fondo color claro
        localStorage.setItem('isLight', 'true'); // Guardar el estado como claro
    }
    
    isLight = !isLight; // Alternar el estado
});



