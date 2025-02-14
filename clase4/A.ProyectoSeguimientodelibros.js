let LibrosLeidos = [];

function AgregarLibro(titulo) {
    LibrosLeidos.push(titulo);
}

function MostrarLibrosLeidos() {
    console.log(LibrosLeidos.length ? LibrosLeidos.join("\n") : "No se a registrado ningun libro");
}

// Agregar libros leídos
AgregarLibro("° " + "Sobre natural - Joe Dispenza");
AgregarLibro("° " + "Necronomicón - Lovecraft");
AgregarLibro("° " + "Proyección Astral: El Manual del Psiconauta - Thomas Karlsson");
AgregarLibro("° " + "Qabalah, Qlifot & Magia Goética - Thomas Karlsson");
MostrarLibrosLeidos();
