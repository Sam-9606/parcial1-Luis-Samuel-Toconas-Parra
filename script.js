let contador=0

function solicitarServicio() {
    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (regex.test = correo) {
        alert("Correo inválido")
    }

}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})