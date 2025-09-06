
function verificarPassword() {
  let d1 = document.getElementById("select1").value;
  let d2 = document.getElementById("select2").value;
  let d3 = document.getElementById("select3").value;

  let password = d1 + d2 + d3;
  let resultado = document.getElementById("resultado");

  if (password === "911") {
    resultado.innerText = "password 1 correcto";
  } else if (password === "714") {
    resultado.innerText = "password 2 correcto";
  } else {
    resultado.innerText = "password incorrecto";
  }
}
