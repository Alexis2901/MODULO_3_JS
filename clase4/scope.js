//global
var globlaVar = "soy una variable global"
function saludar(){
    console.log(globlaVar);
}
saludar();


//local
//funcion scope
//son accesibles solo dentro de esta funcion
function saludar (){
    let mensaje ="hola mundo";
    console.log(mensaje);
}
saludo()
console.log(mensaje);

//block scope (for while, if else, etc) solo van a existir las variables dentro del bloque
if (true){
let blockScope = "solo existe en este bloque"
console.log(blockScope);
}

console.log(blockScope);




console.log(variable);
var variable ="hola!"

//Ejercicios Palindromo (palabras o frases que se leen igual al rechero y al reves)
function palindromo (texto){
    const limpiartext = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    return limpiartext === limpiartext.split("").reverse().join("");
}

console.log(palindromo("Ana"));
console.log(palindromo("Pedro"));

//filtrar los numeros mayores a 15

//funcion que saque el area de un circulo

