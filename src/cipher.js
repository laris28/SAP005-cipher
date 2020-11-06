const cipher = {
  encode(){
    let fraseFinal = "";
    const fraseCodificar = document.getElementById("codificar").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const numeroPrimeiraLetra = 65;
    const tamanhoDoAlfabeto = 26;

    for (let i=0; i<=fraseCodificar.length; i++) {
      let resultado1 = (fraseCodificar.charCodeAt(i)+deslocamento-numeroPrimeiraLetra)%tamanhoDoAlfabeto;
      let resultado2 = resultado1 + numeroPrimeiraLetra;
      let imprimir = String.fromCharCode(resultado2);
      fraseFinal += imprimir;
    }
    return fraseFinal;
  },
  decode(){
    let fraseFinal = "";
    const fraseDescodificar = document.getElementById("descodificar").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const numeroPrimeiraLetra = 65;
    const tamanhoDoAlfabeto = 26;

    for (let i=0; i<=fraseDescodificar.length; i++) {
      let resultado1 = (fraseDescodificar.charCodeAt(i)-deslocamento+numeroPrimeiraLetra)%tamanhoDoAlfabeto;
      let resultado2 = resultado1 + numeroPrimeiraLetra;
      let imprimir = String.fromCharCode(resultado2);
      fraseFinal += imprimir;
    }
    return fraseFinal;
  }
};

export default cipher;
