// Objeto simple
const persona = {
    nombre:"Alexis",
    edad: 23,
    ciudad: "Puebla"
}
console.log(persona.nombre)

// Modificación de valores
persona.ciudad = "Orizaba"
console.log(persona);

//añadir valores
persona.genero = "Masculino"
persona.estatura = 1.60
console.log(persona);

//eliminar propiedades
persona.estatura
console.log(persona);

//Objetos con metodos
const coche ={
    marca: "chevrolet",
    modelo: "Aveo 2025",
    color: "gris",

    arrancar: function(){
        console.log("El coche esta andando");
        
    }
}
coche.arrancar();

//metodo abreviado
const calculadora = {
    suma(x, y){
        return x+y
    }
}
console.log(calculadora.suma(70,24));
//objetos anidados
const trabajo ={
    nombre: "Bbva",
    puesto: "Financiero",
    ubicacion: {
        ciudad: "Mexico",
        calle: "Reforma",
        país: "Mexico"
    }
}
console.log(trabajo.nombre);
console.log(trabajo.ubicacion.ciudad);
console.log(trabajo["ubicacion"]["pais"]);

trabajo.ubicacion.calle = "Reforma, cuauthemoc"
console.log(trabajo.ubicacion.calle);

const usuario ={
    nombre:"Alexis",
    saludar: function () {
        console.log(`Hola soy ${this.nombre}`);    
    }
}
usuario.saludar();

class Persona{
    constructor(nombre,edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    }
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`);
        
    }
}
const personaAlexis = new Persona("Alexis",23)
personaAlexis.saludar()

const personaIvan = new Persona("Ivan",23)
personaIvan.saludar()

class Estudiante extends Persona{
    constructor(nombre,edad,genero,carrera,promedio){
        super(nombre,edad,genero)
        this.carrera = carrera;
        this.promedio = promedio;
    }
    estudiar(){
        console.log(`${this.nombre} esta estudiando en ${this.carrera}`);
        
    }
}

const AnaPaola = new Estudiante("Ana", 24, "Femenica", "Enfermeria", 10)
AnaPaola.estudiar()