//Tabla de multiplicar
const numero = 6;
for(let i = 0; i <= 10; i++) {
    console.log(i*numero);    
}
//contar los digitos de un número WHILE
function contardigitos(numero){
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        throw TypeError('debe pasar como argumento un numero');  
    }
    let contador = 0;

    while (numero >= 1) {
        ++contador;

        numero /= 10;
    }
    return contador;
}
try {
    console.log("Tiene: " + contardigitos(156189860568481) + " digitos");
    
} catch (e) {
    console.log(`error: ${e.message}`);   
}
