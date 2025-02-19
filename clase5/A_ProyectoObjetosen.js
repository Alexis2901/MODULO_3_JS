class Libros {
    constructor(titulo, autor, año, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
    }
    descripcionLibro(){
        console.log(`Título del libro: ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el libro se está: ${this.estado}.`);   
    }
}
const libro1 = new Libros("Sekhem Apep: Magia Vampyrica Tifoniana", "Michael W. Ford", 2008, "disponible");
const libro2 = new Libros("Liber HVHI: La Magia del Adversario", "Michael W. Ford", 2005, "prestado");
const libro3 = new Libros("El Gran Grimorio de los Pactos Infernales", "Michael W. Ford", 2015, "disponible");

libro1.descripcionLibro();
libro2.descripcionLibro();
libro3.descripcionLibro();

