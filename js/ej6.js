function agregarElemento() {
    const lista = document.getElementById('miLista');  // Selecciona la lista
    const nuevoElemento = document.createElement('li'); // Crea un nuevo <li>
    nuevoElemento.textContent = 'Nuevo elemento';       // Agrega el texto
    lista.appendChild(nuevoElemento);                   // Lo añade a la lista
  }
  