const cipher = {
  encode:function(desplazamiento,mensaje){
    if(typeof desplazamiento!=="number"||typeof mensaje!=="string"){throw new TypeError("argumentos invalidos");
    }
    let mensajecifrado=""
    for (let A=0;A<mensaje.length;A++){
      const codigoLetra=mensaje.charCodeAt(A);
      const codigoLetraMasDesplazamiento = codigoLetra+desplazamiento;
      const mayusculal=codigoLetra>=65&&codigoLetra<=90;
      if(mayusculal){
        const codigoLetraForm=((codigoLetraMasDesplazamiento-65)%26)+65;
        const codigoLetraResul=String.fromCharCode(codigoLetraForm);
        mensajecifrado+=codigoLetraResul;
      }
      else{mensajecifrado+=mensaje[A];
      } 
    }
    return mensajecifrado;

  },
  decode:function(desplazamiento,mensaje){
    if(typeof desplazamiento!=="number"||typeof mensaje!=="string"){throw new TypeError("argumentos invalidos");
    }
    let mensajedescifrado=""
    for (let A=0;A<mensaje.length;A++){
      const codigoLetra=mensaje.charCodeAt(A);
      const codigoLetraMasDesplazamiento = codigoLetra-desplazamiento;
      const mayusculal=codigoLetra>=65&&codigoLetra<=90;
      if(mayusculal){
        const codigoLetraForm=((codigoLetraMasDesplazamiento+65)%26)+65;
        const codigoLetraResul=String.fromCharCode(codigoLetraForm);
        mensajedescifrado+=codigoLetraResul
      }
      else{mensajedescifrado+=mensaje[A]
      }          
    }
    return mensajedescifrado
  }
};
export default cipher;