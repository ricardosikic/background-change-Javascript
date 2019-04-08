import "./styles.css";

//accedo a los elementos del DOM
let html = document.querySelector("html");
let titulo = document.getElementById("titulo");

html.addEventListener("click", changeColor);

function changeColor() {
  let listaColores = ["#ff5733", " #7a0d7e", " #5db915", " #15b3cf"];
  let colores = listaColores[Math.floor(Math.random() * listaColores.length)];
  html.style.background = colores;
}
