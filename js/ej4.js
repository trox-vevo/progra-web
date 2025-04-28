const boton = document.getElementById("button");
const text = document.getElementById("p");


boton.addEventListener('click',function() {
    text.textContent = 'Texto Modificado';
});
