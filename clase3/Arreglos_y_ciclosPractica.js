const frutas = [
    { nombre: "Kiwi", tipo: "ácidas" }, { nombre: "Limón", tipo: "ácidas" }, { nombre: "Pomelo", tipo: "ácidas" }, { nombre: "Naranja", tipo: "ácidas" }, { nombre: "Manzana", tipo: "ácidas" }, { nombre: "Uva", tipo: "ácidas" },
    { nombre: "Arándano", tipo: "ácidas" }, { nombre: "Piña", tipo: "ácidas" },

    { nombre: "Fresa", tipo: "semiácidas" },{ nombre: "Membrillo", tipo: "semiácidas" }, { nombre: "Níspero", tipo: "semiácidas" }, { nombre: "Ciruela", tipo: "semiácidas" },
    { nombre: "Melocotón", tipo: "semiácidas" }, { nombre: "Mango", tipo: "semiácidas" }, { nombre: "Mandarina", tipo: "semiácidas" },
    { nombre: "Frambuesa", tipo: "semiácidas" }, 
    
    { nombre: "Coco", tipo: "neutras" }, { nombre: "Aguacate", tipo: "neutras" }, { nombre: "Aceituna", tipo: "neutras" }, { nombre: "Almendra", tipo: "neutras" }, { nombre: "Avellana", tipo: "neutras" },
    { nombre: "Cacahuate", tipo: "neutras" }, { nombre: "Nuez", tipo: "neutras" }, 
    
    { nombre: "Plátano", tipo: "dulces" }, { nombre: "Cereza", tipo: "dulces" }, { nombre: "Higo", tipo: "dulces" }, { nombre: "Melón", tipo: "dulces" },
    { nombre: "Sandía", tipo: "dulces" }, { nombre: "Pera", tipo: "dulces" }, { nombre: "Granada", tipo: "dulces" },
    { nombre: "Chirimoya", tipo: "dulces" },
];

let contarFrutas = {
    ácidas:0,
    semiácidas:0,
    neutras:0,
    dulces:0,
};

let i = 0;

while (i < frutas.length) {
    contarFrutas[frutas[i].tipo]++;
    i++;
}

console.log(contarFrutas);
