// //Creacion y asignacion de valor a una variable

// var nombre;
// nombre = 'Fernando';

// var userName = "Judith";


// // Strings 

// var pais = 'Mexico';
// var fraseSecreta = 'Primer perrito';
// var letra = 'f';
// var mainName = '';


// //Las variables se pueden cambiar sin declararlas

// pais = 'Canada';
// letra = 'X';

// //Mostrar los datos que hay en una varible 

// console.log(pais);

// //number

// var edad = 25;
// var telefono = 556677;

// //Reasignar variables
// edad = 35;

// Variables

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// "Quiero mucho a mis mascotas mascota1 y mascota2"

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable
// Muestra el contenido de esta variable en consola
// Muestra el TIPO DE DATO de esta variable en consola
// Transforma la variable de string a number
// Muestra nuevamente el contenido de esta variable en consola
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?

var perico = 'Pedrito';
var perrito = 'Rufo';
var gatito = 'Chancla';

console.log('Mis mascotas son '+ perico + ', ' + perrito + ', ' + gatito + '. Los quiero mucho' );
console.log(`Mis mascotas son ${perico}, ${perrito}, ${gatito}. Los quiero mucho` );

var name1 = prompt('Como se llama tu mascota?');
var name2 = prompt('Y la otra?');

console.log(`Quiero mucho a mis mascotas: ${name1} y ${name2}`);

var cien = '100';
 console.log(cien);
 console.log(typeof(cien));

 cien = 100;
 console.log(cien);
 console.log(typeof(cien));

