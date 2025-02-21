document.getElementById("comentFormulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let comentText = document.getElementById("comentEntrada").value.trim();
    if (!comentText) return;

    let comentDiv = document.createElement("div");
    comentDiv.classList.add("comment");

    let tiempomarc = new Date().toLocaleString();
    comentDiv.innerHTML = `<p><strong>${tiempomarc}</strong></p><p>${comentText}</p>`;

    let botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Eliminar";
    botonBorrar.classList.add("boton-borrar");

    botonBorrar.addEventListener("click", function() {
        comentDiv.remove();
    });

    comentDiv.appendChild(botonBorrar);
    document.getElementById("contenedorComent").appendChild(comentDiv);
    document.getElementById("comentEntrada").value = "";
});
