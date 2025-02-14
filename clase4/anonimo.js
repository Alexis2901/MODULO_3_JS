//no tiene un valor asignado (no tiene nombre)
//en casos donde no es necesario tener el nombre
//funcion anonima
const anonima = function(){
    console.log("hola a todos!");
}
anonima();

// callback
setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera");  
}, 5000)

//funciones flecha (escribe funciones anonimas de forma mas corta)
const arrowFunction = () => {
    console.log("Hola es una flecha =>"); 
}

arrowFunction();

document.getElementById("button").addEventListener("click"), function(){
    alert("hola mundo!")
}