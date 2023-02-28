import cipher from './cipher.js';

const botoncifrado = document.getElementById("cifrar");
const botondescifrado = document.getElementById("descifrar");

botoncifrado.addEventListener ("click", function(){
  const mensaje = document.getElementById ("mensaje1").value;
  const desplazamiento = document.getElementById ("desplazamiento").value;
  const mensaje2 = cipher.encode(parseInt(desplazamiento),mensaje);
  document.getElementById("mensaje2").value= mensaje2;
});

botondescifrado.addEventListener ("click", function(){
  const mensaje = document.getElementById("mensaje1").value;
  const desplazamiento = document.getElementById("desplazamiento").value;
  const mensaje2 = cipher.decode(parseInt(desplazamiento),mensaje);
  document.getElementById("mensaje2").value= mensaje2;
});

//console.log(cipher);
//Declaro variables que utilizare en el DOM
//const cifrar = document.getElementById("cifrar").value;//RESULTADO
//const descifrar = document.getElementById("descifrar").value;//RESULTADO

//cifrar.addEventListener ("click", function(){
//  const desplazamiento = document.getElementById("desplazamiento").value;
//  const mensaje1 = document.getElementById("mensaje1").value;
//  const mensaje2 = cipher.encode(+desplazamiento,mensaje1);
//  document.getElementById("mensaje2").value= mensaje2;
//});
//descifrar.addEventListener ("click", function(){
//  const desplazamiento = document.getElementById("desplazamiento").value;
//  const mensaje1 = document.getElementById("mensaje1").value;
//  const mensaje2 = cipher.decode(+desplazamiento,mensaje1);
//  document.getElementById("mensaje2").value= mensaje2;
//})

