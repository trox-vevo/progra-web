let butOnClick = function() {
    // pintamos color peru en el h1
    let h1 = document.getElementById("titulo")
    h1.setAttribute("class", "fondo_peru")

    // agregar texto al final
    let divContenido = document.getElementById("contenido")

    let divHijo = document.createElement("div")
    divHijo.innerText = "Este es un mensaje al final"

    divContenido.appendChild(divHijo)
}


let butOk = document.getElementById("but_ok")
butOk.addEventListener("click",butOnClick)

