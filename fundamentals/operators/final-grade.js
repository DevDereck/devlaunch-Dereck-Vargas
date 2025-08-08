/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
en una escuela. Como parte de este desafío, primero configuras el entorno para recibir
entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una
lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80
*/

const prompt = require ('prompt-sync') ()

const grade1 = parseFloat(prompt('¿Cuál es la primer nota a ingresar?: ')) 
const grade2 = parseFloat(prompt('¿Cuál es la segunda nota a ingresar?: ')) 
const grade3 = parseFloat(prompt('¿Cuál es la tercera nota a ingresar?: ')) 

const averageGrade = (grade1 + grade2 + grade3) / 3

console.log(`The Final Average is: ${averageGrade.toFixed(2)}`);