let contador=0

function solicitarServicio() {
    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let apellidos = document.getElementById("apellidos").value
    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (apellidos == "") {
        alert("Nombre obligatorio")
    }

    if (correo == "") {
        alert("Correo obligatorio")
    }else if (regex.test == correo) {
        alert("Correo inválido")
    }

}

document.getElementById("modoBtn").addEventListener("click", function() {

    document.body.classList.toggle("dark")

})

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})