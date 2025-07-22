/* imprime en la consola una informacion para user */
console.log("1. Estoy en el archivo externo de js");

/* JS: lenguaje de programacion interpretado */
/* tiiene palabras reservadas */
/* if, for, const, let */

/*Variables: son espacios e memoria para guardar informacion que usamos despues  */
let nombre; /* declaracion de una variable: crear un espacio de memoria para info */

/* asignacion de una variable */
nombre = "Pepe"; /* el punto y coma es opcional, variable de tipo string */

console.log(nombre);

var saldo = 3500;/* la declaracion y asignacion de la variable */

saldo = 1000;/* variable de tipo numerica */



console.log("============================================================");

// ventanas en js

//1.Alert: lanza una info al user
alert('Bienvenido a nuestra App de Digitalers')

// 2. Confirm: lanza una pregunta que requiere una repuesta
var repuesta = confirm("Esta seguro de cerrar sesion")
// me responde con variables buleanas: true o false

//Imprimo en la consola la respuesta del user
console.log(repuesta);


// 3. Prompt: sirve para introducir datos al sistema
//JS es casesensiive: reconoce mayusculas y minusculas
var nombrE = prompt("Introduce tu nombre por favor")

//imprimimos la info del user
console.log(nombrE);


console.log("==================================================================");

//Ejecucion de js con el comando node nombre del archivo. ej node index.js
//No se ejecuta JS en la terminal cuando tiene funcionalidades del navegador

//constante:no cambia el valor durante la ejecucion de la aplicacion
const DNI = 123456789;
//Las constantes no se pueden reasignar
//DNI - 254896314; // tira un error en ejecucion