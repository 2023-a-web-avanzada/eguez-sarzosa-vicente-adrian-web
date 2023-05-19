// 01-javascript
//  01-variables.js
// Mutables e Inmutables
// Mutables  (re asignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

// Inmutables  (re asignadas)
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';
// vamos a preferir CONST > LET > VAR (mejor no usar)

// Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Adrian' // string
const apellidos = "Eguez" // string
const casado = true; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof casado);
console.log(typeof hijos);
console.log(typeof zapatos);

// Truty y Falsy
if(true){
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}
if(""){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // FALSY
}
if("Adrian"){ // string vacio
    console.log('Es verdadero'); // TRUTY
} else {
    console.log('Es falso');
}
if(-1){
    console.log('Es verdadero -1'); // Verdadero
} else {
    console.log('Es falso -1');
}
if(0){
    console.log('Es verdadero 0');
} else {
    console.log('Es falso 0'); // Falso
}
if(1){ // string vacio
    console.log('Es verdadero 1'); // Verdadero
} else {
    console.log('Es falso 1');
}

if(null){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}
if(undefined){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}

const adrian = {
    "nombre": "Adrian",
    'apellido': 'Eguez',
    edad: 32,
    hijos: null,
    casado: true,
    zapados: undefined,
    ropa: {
        color: 'plomo',
        talla: 40,
    },
    mascotas: ['Cache', 'Pequi', 'Pandi'],
};
console.log(adrian);
// Acceder a las propiedades
adrian.nombre // "Adrian"
adrian.apellido // "Eguez"
adrian["nombre"] // "Adrian"
// Modificar valores
adrian.nombre = "Vicente";
adrian["nombre"] = "Adrian";
// Crear atributos
adrian.sueldo; // undefined
console.log(adrian.sueldo); // undefined
adrian.sueldo = 1.2;
console.log(adrian.sueldo); // 1.2
adrian["gastos"] = 0.8;
console.log(adrian.gastos);
console.log(adrian);
// Eliminar propiedades
adrian.nombre = undefined;
console.log(adrian);
console.log(Object.keys(adrian));
console.log(Object.values(adrian));
delete adrian.nombre;
console.log(Object.keys(adrian));
console.log(adrian);

// Variables por valor o por referencia
// Variables por valor
// Primitivas: number string boolean
let edadAdrian = 33;
let edadVicente = edadAdrian;
console.log(edadAdrian); //32
console.log(edadVicente); //32
edadAdrian = edadAdrian + 1;
console.log(edadAdrian); //33
console.log(edadVicente); //32
// Variables por referencia
// Object: {} []
let notas = {
    total: 10,
};
let notasSegundoBimestre = notas; // IGUALACION REFERENCIA
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas); // 11
console.log(notasSegundoBimestre); // 11
// Como clonar objetos
let notasTercerBimestre = Object.assign({}, notas);
// Object.assign([], arreglo);
notasTercerBimestre.total = notasTercerBimestre.total + 1;
console.log(notas); // 11
console.log(notasSegundoBimestre); // 11
console.log(notasTercerBimestre); // 12













