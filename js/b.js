function añadirTarea() {
    const inputTarea = document.getElementById("inputTarea")
    const salidaTarea = document.getElementById("tareas")
    if (inputTarea != "") {
        salidaTarea.innerHTML = "<div>" + inputTarea.value + "<button>X</button></div>"
    }
}