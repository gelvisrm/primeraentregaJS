//Selección de respuesta correcta
const respuestaCorrecta = "Madrid";
const respuesta = prompt("¿Cuál es la capital de España?");

if (respuesta === respuestaCorrecta) {
    console.log("¡Correcto! Madrid es la capital de España.");
} else {
    console.log("Respuesta incorrecta. La capital de España es Madrid.");
}


// calculo de la nota final de alumnos ingresados.

const numeroAlumnos = parseInt(prompt("Ingrese el número de alumnos:"));
let sumaNotas = 0;

if (numeroAlumnos > 0) {
    for (let i = 1; i <= numeroAlumnos; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota del alumno ${i}:`));
        sumaNotas += nota;
    }
    const notaFinal = sumaNotas / numeroAlumnos;
    console.log(`La nota final promedio de los alumnos es: ${notaFinal}`);
} else {
    console.log("El número de alumnos debe ser mayor que cero.");
}
