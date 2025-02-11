let valorAletorio = Math.floor (Math.random() * 101)
console.log(valorAletorio);

let nota = valorAletorio;
if (nota < 59) {
    console.log("Estudiante reprobado");
} else if (nota >= 60 && nota <= 74) {
    console.log("Suficiente");
} else if (nota >= 75 && nota <= 89) {
    console.log("Bien");    
} if (nota >= 90) {
    console.log("Excelente");
}