import cipher from './cipher.js';

const botoncifrado = document.getElementById("cifrar");
const botondescifrado = document.getElementById("descifrar");
//const reiniciar = document.getElementById("reiniciar");
//const form = document.getElementById ("#form");

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


