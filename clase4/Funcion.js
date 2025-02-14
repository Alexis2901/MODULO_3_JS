//funcion tradicional 
// sin parametro para que nos muestre algo
function saludar(){
    console.log("hola mundo");  
}
saludar();

//Funcion con parametros
function saludaralguien(nombre){
    console.log("hola", nombre);   
}
saludaralguien("Alexis");

//funcion por defecto
function saludarinvitado(nombre = "Invitado"){
console.log("hola seas bienvenido ", nombre);
}
saludarinvitado("Alexis");

//funcion que retorna
function multiplicar(a, b){
    return a * b;
}
let resultado = multiplicar(63, 5);
console.log(resultado);
