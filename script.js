mostrarPresentacion()
document.querySelector("#btnPresentacion").addEventListener("click", mostrarPresentacion)
document.querySelector("#btnEstudios").addEventListener("click", mostrarEstudios)
document.querySelector("#btnTecnologias").addEventListener("click", mostrarTecnologias)
document.querySelector("#btnProyectos").addEventListener("click", mostrarProyectos)

function ocultarSection(idSection) {
    document.getElementById(idSection).style.display = "none"
}

function ocultarTodo() {
    ocultarSection("presentacion")
    ocultarSection("estudios")
    ocultarSection("tecnologias")
    ocultarSection("proyectos")
}

function mostrarSection(idSection) {
    document.getElementById(idSection).style.display = "block"
}

function mostrarPresentacion() {
    ocultarTodo()
    mostrarSection("presentacion")
}
function mostrarEstudios() {
    ocultarTodo()
    mostrarSection("estudios")
}
function mostrarTecnologias() {
    ocultarTodo()
    mostrarSection("tecnologias")
}
function mostrarProyectos() {
    ocultarTodo()
    mostrarSection("proyectos")
}
