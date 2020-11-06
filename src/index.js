import cipher from './cipher.js';

document.getElementById("btn-codificar").addEventListener("click", () => btnSelecionado("encode"));
document.getElementById("btn-descodificar").addEventListener("click", () => btnSelecionado("decode"));
//() => arrow function utilizada no ES6

function btnSelecionado(btnClicado) {
  if (btnClicado === "encode") {
    document.getElementById("codificado").value = cipher.encode();
  } else {
    document.getElementById("descodificado").value = cipher.decode();
  }
}
