let contador = 0;

const boton = document.getElementById("button");
const cont = document.getElementById("contador");

boton.addEventListener('click', function() {
    contador++;
    cont.textContent = 'numero de clicks: ' + contador;
    
    if (contador >= 5) {
        cont.style.color = 'peru';
    } 
    if (contador >= 10) {
        cont.style.color = 'red';
    }
});