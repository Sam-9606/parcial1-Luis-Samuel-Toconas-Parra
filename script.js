let contador=0

function solicitarServicio() {
    contador++

    alert("Servicios solicitados: " + contador)

}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value
    let apellidos = document.getElementById("apellidos").value
    let edad = document.getElementById("edad").value
    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (apellidos == "") {
        alert("apellidos obligatorio")
    }

    if (edad > 120){
        alert("edad invalida")
    }else if (edad < 5){
        alert("edad invalida")
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