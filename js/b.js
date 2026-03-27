function añadirTarea() {
    const inputTarea = document.getElementById("inputTarea")
    const salidaTarea = document.getElementById("tareas")
    if (inputTarea.value != "") {
        salidaTarea.innerHTML += `
        <div class="tareas">
        ${inputTarea.value}
        <button>X</button>
        </div>
        `

        inputTarea.value = ""
    }
}