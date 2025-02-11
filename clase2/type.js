//string
let mensaje = "Hola mundo";
console.log(mensaje.toUpperCase());

let nombre = "Alexis"
console.log(`hola ${nombre}`)
console.log('hola ' + nombre + ' ¿comó estas? ')
console.log("hola", nombre, 'como estas?')

//Boolean
let esmayor = true
console.log(esmayor && false);

// arrays
let alumnos = ["adelina", "randi", "saul", "maria"];
console.log(alumnos[3]);
// Modificar con asignacion
alumnos[2] = "IAN";
console.log(alumnos);

// añadir
alumnos.push("natalia")
console.log(alumnos);

alumnos.unshift("scarlet")
console.log(alumnos);
console.log(alumnos.length); //cuenta el numero de caracteres que conforman el array
//OPERADORES BASICOS

//numeros
let x = 2;
x += 5;
console.log(x);
let division = 0;
console.log(division/0);

