// si aprobe o reprobe
let nota = 7;
const notaAprobatoria = 6;
if (nota >= notaAprobatoria){
    console.log("estas aprobado");  
} else{
    console.log("estas reprobado");   
}

 let temp = 50;
 if (temp > 30){
    console.log("te estas derritiendo de calor");
} else if (temp >= 21 && temp <= 29) {
    console.log("esta haciendo un clima agradable");
} else{
    console.log("te estas congelando");
}

let edad = 23;
let resultado = (edad >= 18) ? "es mayor de edad" : "Es menor de edad";
console.log(resultado);

if (nota >= notaAprobatoria)
    console.log("estas aprobado");  
 else
    console.log("estas reprobado"); 

    console.log(1 === '1');
    console.log(1 == '1');
    console.log(1 == '1' || '1' === '1');

    let dia ="jueves"
    switch (dia) {
        case "lunes":
            console.log('Inicio de semana');
            break;
            case 'jueves':
                console.log('jueves chido');
                break;
                default:
                    console.log("NO SE QUE DIA ES HOY");
                  }
    
// valor aletorio
let valorRandom = Math.floor (Math.random() * 101)
console.log(valorRandom);

