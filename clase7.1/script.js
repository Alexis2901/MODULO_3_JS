document.getElementById("generar").addEventListener("click", generarContraseña);
document.getElementById("longitud").addEventListener("input", actualizarLongitud);

function actualizarLongitud() {
    document.getElementById("valorLongitud").textContent = document.getElementById("longitud").value;
}

function generarContraseña() {
    const longitud = document.getElementById("longitud").value;
    const usarMayusculas = document.getElementById("mayusculas").checked;
    const usarMinusculas = document.getElementById("minusculas").checked;
    const usarNumeros = document.getElementById("numeros").checked;
    const usarSimbolos = document.getElementById("simbolos").checked;

    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresSimbolos = "!@#$%^&*()_+{}[]<>?";

    let todosCaracteres = "";
    if (usarMayusculas) todosCaracteres += caracteresMayusculas;
    if (usarMinusculas) todosCaracteres += caracteresMinusculas;
    if (usarNumeros) todosCaracteres += caracteresNumeros;
    if (usarSimbolos) todosCaracteres += caracteresSimbolos;

    let contraseña = "";
    for (let i = 0; i < longitud; i++) {
        contraseña += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
    }

    document.getElementById("contraseña").value = contraseña;

    evaluarSeguridad(contraseña);
}

function evaluarSeguridad(contraseña) {
    let nivel = "Débil";
    let color = "red";

    const tieneMayusculas = /[A-Z]/.test(contraseña);
    const tieneMinusculas = /[a-z]/.test(contraseña);
    const tieneNumeros = /[0-9]/.test(contraseña);
    const tieneSimbolos = /[!@#$%^&*()_+{}\[\]<>?]/.test(contraseña);
    const longitud = contraseña.length;

    let puntos = 0;
    if (tieneMayusculas) puntos++;
    if (tieneMinusculas) puntos++;
    if (tieneNumeros) puntos++;
    if (tieneSimbolos) puntos++;

    if (longitud >= 10) puntos++;
    if (longitud >= 20) puntos++;

    if (puntos <= 2) {
        nivel = "Débil";
        color = "red";
    } else if (puntos === 3) {
        nivel = "Media";
        color = "orange";
    } else if (puntos === 4) {
        nivel = "Fuerte";
        color = "green";
    } else if (puntos === 5) {
        nivel = "Muy Fuerte";
        color = "blue";
    }

    const nivelSeguridad = document.getElementById("nivelSeguridad");
    nivelSeguridad.textContent = nivel;
    nivelSeguridad.style.color = color;
}

function copiarContraseña() {
    const campoContraseña = document.getElementById("contraseña");
    campoContraseña.select();
    document.execCommand("copy");
}
