console.log(document.documentElement);//nodo html
console.log(document.head)//nodo head

let titulo = document.getElementById("titulo")
titulo.innerText = "Don quijote de la mancha"
titulo.style.color = "pink";

let nuevoParrafo = document.createElement("p")
nuevoParrafo.innerText = "Es de las mejores historias que he leído en mi vida"

document.body.appendChild(nuevoParrafo)

function retraso() {
    setTimeout(() => {
        let parrafoSecundario = document.createElement("p")
        parrafoSecundario.innerText = "Voy a aparecer 3s después"
        document.body.appendChild(parrafoSecundario)
    }, 3000)
}

retraso()

document.getElementById('boton').addEventListener("click", function(){
    alert("¡Botón presionado!");
})
