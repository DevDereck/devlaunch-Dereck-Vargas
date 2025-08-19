/*
Escribe un programa simple en JavaScript que evalúe el valor de una variable llamada 'n'.
Verifica si el número es positivo, negativo o cero, y muestra un mensaje correspondiente
basado en la siguiente evaluación:

Si el número es mayor que 0, imprime 'Positivo'.
Si el número es menor que 0, imprime 'Negativo'.
Si el número es exactamente 0, imprime 'Cero'.

Si la variable no es un número, imprime un mensaje de error: 'Por favor, introduce un número'.
*/
const prompt = require ('prompt-sync') ()

const n = parseInt(prompt('Please enter a number: '));
const standardNumber = 0;

if (n > standardNumber) {
    console.log('Positive Number')
}else if (n < standardNumber ) {
    console.log ('Negative Number')
}else if (n === standardNumber){
    console.log('Zero')
}else{
    console.log('Please enter a valid number... ')
}