/*
// Ejercicio #1
let mensaje = "¡Bienvenida y Bienvenido a nuestro sitio web!";
alert(mensaje);

// Ejercicio #2,3,4 y 5
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;

// Ejercicio #6
alert("¡Error! Completa todos los campos");

// Ejercicio #7 
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// Ejercicio #8 y #9
let nombre2 = prompt("¿Cual es tu nombre?");
let edad2 = prompt("¿Cual es tu edad?");

// Ejercio # 10
if (edad2 >= 18){
    alert("¡Puedes obtener tu licencia de conducir!");
} 
*/




/*
// Desafio # 2

// Ejercicio # 1
let respuesta = prompt("¿Que dia de la semana es hoy?");

if (respuesta == "sabado"){
    alert("!Buen fin de semana¡");
}else if (respuesta == "domingo"){
    alert("!Buen fin de semana¡");
}else { 
    alert("!Buena Semana¡");
}

// Ejercicio # 2

let numeroIngresado = prompt("Ingresa un numero");
console.log(numeroIngresado);

if (numeroIngresado > 0){
    alert("El numero ingresado es " + numeroIngresado + ", y es positivo");
}else if(numeroIngresado < 0){
    alert("El numero ingresado es " + numeroIngresado + ", y es negativo");
}else{
    alert("El numero es igual a 0, digite otro numero diferente de cero");
}

// Ejercicio # 3

let puntuacion = Math.random() * 150;
console.log(puntuacion);

if (puntuacion >= 100){
    alert("Felicidades, has ganado. Tu puntuacion es: " + puntuacion);
}else{
    alert("Perdiste, tu puntuacion es: " + puntuacion + ", intentalo nuevamente");
}

// Ejercicio # 4

let saldoCuenta = 1000000;
console.log(saldoCuenta);

alert(`El saldo de se cuenta es de ${saldoCuenta}`);

// Ejercicio # 5

let nombreUsuario = prompt("Por favor, ingrese su nombre: ");
alert("Bienvenido a nuestra pagina web " + nombreUsuario);
*/


// Desafios # 03
/*
let contador = 1;

while(contador <= 10){
    console.log(contador);
    // incrementar contador
    contador++;
}

*/


// Ejercicio # 2

/* 
contador = 10;

while(contador >= 0){
    console.log(contador);
    alert("El numero es " + contador);
    contador--;
} 
*/

// Ejercicio #3

/*let contador = 0;
let numeroUsuario = parseInt(prompt("Ingrese el numero para el conteo"));

while(contador <= numeroUsuario){
    console.log(contador);
    contador = contador + 1;
}
*/


// 09 Desafio: Hora de practicar
// Ejercicio 1

/* console.log("Bienvenidos al curso de JavaScript"); */

// Ejercicio 2

/* let nombre = "Juan";
console.log(`!Hola ${nombre}¡`); */
/* 
// Ejercicio 3

let nombre = "Juan";
alert(`Hola, ${nombre}`);

// Ejercicio 4

let variable = prompt("¿Cuel es el lenguaje de programacion que mas te gusta?");
console.log(variable); */

/* // Ejercicio 5

let valor1 = 4;
let valor2 = 8;

let resultado = valor1 + valor2;

console.log(`El resultado de sumar ${valor1} y ${valor2} es igual a ${resultado}`); */
/* 
// Ejercicio 6

let valor1 = 4;
let valor2 = 2;

let resultado = valor1 - valor2;

console.log(`El resultado de restar ${valor1} y ${valor2} es igual a ${resultado}`); */

/* // Ejercicio 7

let edad = prompt("Ingrese su edad: ");

if (edad >= 18){
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
} */

/* // Ejercicio 8

let numero = prompt("Ingrese un numero: ");

if (numero > 0){
    console.log("El numero eso positivo");
} else if (numero < 0){
    console.log("El numero eso negativo");
} else if (numero == 0){
    console.log("El numero es igual a cero");
} else {
    console.log("El valor ingresado no es valido");
} */

/* // Ejercicio 9

let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador += 1;
} */

/* // Ejercicio 10

let nota = 4;

if (nota >= 7){
    console.log(`Su nota es ${nota}, Aprobado`);
} else {
    console.log(`Su nota es ${nota}, Desaprobado`);
}
 */

/* // Ejercicio 11

let numero = parseInt(Math.random() * 10);  // Genera numero de 0-9 el 10 no esta incluido ya que mathrandom va de 0-0.9999999
console.log(numero); */

/* // Ejercicio 12

let numero = Math.floor(Math.random() * 10) + 1;  // Este si genera de 1-10 incluido
console.log(numero); */

// Ejercicio 13

let numero = Math.floor(Math.random() * 1000) + 1;
console.log(numero);