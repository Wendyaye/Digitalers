console.log('Listo para la accion!!');

let email = document.getElementById( "email").value;

/* capturamos el valor del input del password */

let password = document.getElementById("password").value;

console.log(email);
console.log(password);

/* concatenar informacion con variables */
console.log("El email del usuario es: " + email);

/* Puedo concatenar con comillas simples */
console.log("El password del usuario es: " + password);

/* interpolar las variables */
console.log(`El usuario envio el email: ${email} y el password: ${password} `);

