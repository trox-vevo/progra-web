
const boton = document.getElementById("button");
const text = document.getElementById("p");

boton.addEventListener('click', function() {
    if (text.style.display === 'none') {
        text.style.display = 'block'; // Mostrar
    } else {
        text.style.display = 'none'; // Ocultar
    }
});