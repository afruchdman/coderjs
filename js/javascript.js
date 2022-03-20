//definiciónn de variables///
let edad;
let examenPista = false;
let examenTeorico = false;
let notaExamenPista = 00;
let notaExamenTeorico = 00;
let fechaAsignacion;
let fechaCaducidad;
let cantAlumnos = 0;


// comienzo de funciones//

cantAlumnos = prompt("ingrese la cantidad de aspirantes al registro de conducir")
for (let i = 1; i <= cantAlumnos; i++) {
    do {
        edad = ((prompt(`ingrese la edad del aspirante nro ${i}`)));
    } while (isNaN(edad)) {
        if (edad > 18) {
            alert(`OK! Sos mayor de edad, porque tu edad es: ${edad}`);
            examenPista = prompt("Ya ha realizado la prueba de pista")
            if ((examenPista.toUpperCase() != "S" && examenPista.toUpperCase() != "SI")) {
                alert("Tiene pendiente la prueba de Pista aún!! vuelva luego")
            } else {
                do {
                    notaExamenPista = prompt("Ingrese la nota del examen Pista");
                } while (isNaN(notaExamenPista)) {
                    examenTeorico = prompt("Ya ha realizado la prueba Teorica")
                    if ((examenTeorico.toUpperCase() != "S" && examenTeorico.toUpperCase() != "SI")) {
                        alert("Tiene pendiente la prueba Teorica aún!! vuelva luego")
                    } else {
                        do {
                            notaExamenTeorico = prompt("Ingrese la nota del examen Teorico");
                        } while (isNaN(notaExamenTeorico)) {
                            if (notaExamenPista <= 4 || notaExamenTeorico <= 4) {
                                alert("Ustede no ha aprobado")
                                fechaAsignacion = null;
                                fechaCaducidad = null
                            } else {
                                alert("Excelente Ustede ha aprobado")
                                fechaAsignacion = Date.now();
                                fechaCaducidad = Date.now() + 365
                                alert(`la fecha desde es ${fechaAsignacion} y caduca el ${fechaCaducidad}`)
                            }
                        }
                    }
                }
            }
        } else {
            alert(`NO sos mayor de edad, tu edad es: ${edad}`);
        }
    }
}