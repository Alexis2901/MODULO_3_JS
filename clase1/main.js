console.log('Hola mundo');
//TIPO DE DATO PRIMITIVO
let nombre = "IVAN";//STRING
let edad = 23;//NUMBER
let esmayordeedad = true;//BOOLEANOS
let saldo;//UNDEFINED
let cuenta = null;//NULL
let = Symbol("id");//SYMBOL
let numerogrande = 1234566890098n;//BIGINT

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof esmayordeedad);
console.log(typeof saldo);
console.log(typeof cuenta);
console.log(typeof id);
console.log(typeof numerogrande);

//DATOS DE REFERENCIA (OTROS)
let persona = {
    nombre: "ivan",
    edad: 23,
    nacionalidad: "Mexicano",
};
let numeros =[1,2,3,4,5];
let suma = function suma (a,b) {return a + b};
let fecha = new Date();

console.log(persona);
console.log(numeros);
console.log(suma(2,5));
console.log(fecha);
