let contador = 0;
// sintaxis while
while (contador <10) {
    console.log(contador);
    contador++;   
}

// sintaxis do while
let numero = 0;
do{
    console.log("Ejecuto mi programa al menos una vez");
    numero++;
} while(numero <1)

// sintaxis for
let variable = 0;
for( let i = 1; i <10; i++){
    variable += i
}
console.log("La suma total es: ", variable);


//ejemplo for
const numeros = [10,15,47,80,25];
for(let num of numeros)
    console.log(num);

//do while
let respuesta;
do{
    respuesta = parseInt(prompt("Porfavor ingresa un número mayor a 20"));
} while(respuesta <= 20);
 alert("el número es: "+ respuesta);
 
 //while 
 let text = "Este modulo es increible por que estoy aprendiendo a programar!!!"
 let vocal = "aAeEiIoOuU"
 let counter = 0;
 let i =0;
 while(i < text.length){
    if(vocal.includes(text[i])){
        counter++;
    }
    i++;
 }
 console.log("el texto tiene: ", counter,"vocales");
 