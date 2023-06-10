let colors = [];
let cuadros = document.querySelectorAll("div[class='square']");
let texto = document.getElementById("colorDisplay");
let facil = document.getElementById("easyButton");
let dificil = document.getElementById("hardButton");

facil.addEventListener("click", generateRandomColors(3));
dificil.addEventListener("click", generateRandomColors(6));

function changeColors(pint) {
  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = pint;
  }
}

function pikColor() {
  let random = Math.floor(Math.random() * 6);
  return random;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")"
}
console.log(randomColor());

function generateRandomColors(num) {
  for (let i = 0; i < 6; i++) {
    colors.push(randomColor());
  }
  return colors;
}
let pickedColor = colors[pikColor()];
texto.textContent = pickedColor;

for (let i = 0; i < cuadros.length; i++) {
  cuadros[i].style.backgroundColor = colors[i]; //Esto sirve para darle un color del arreglo a cada cuadro
  cuadros[i].addEventListener("click", function () {
    let clickedColor = cuadros[i].style.backgroundColor;
    if (clickedColor == pickedColor) {
      this.style.background = "none";
      cuadros[i].innerHTML = "<h3>¡Correcto!</h3>";
      texto.style.color = clickedColor;
      changeColors(clickedColor);
    } else {
      this.style.background = "none";
      cuadros[i].innerHTML = "<h3>Intentalo nuevamente</h3>";
    }
  });
}
// for (let i = 0; i < cuadros.length; i++) {
//     let cuadro = cuadros[i].style.backgroundColor;
//     console.log(cuadro);

// }
