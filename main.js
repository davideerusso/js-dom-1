//lampadinaspenta
//btn

const lampadinaSpenta = document.querySelector(".lampadinaspenta");
const button = document.querySelector(".btn");

console.log(lampadinaSpenta);
console.log(button);

button.addEventListener("click", () => {
  button.classList.replace("btn-secondary", "btn-primary");
  button.innerHTML = "Acceso";
  lampadinaSpenta.src = "./img/yellow_lamp.png";
});

console.log(this);
