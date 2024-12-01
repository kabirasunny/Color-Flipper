
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  console.log(hexColor);

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// for dark mode=======================================

const iconbtn = document.querySelector(".iconbtn");
const nav = document.getElementsByTagName("nav")[0];
iconbtn.addEventListener('click', () => {
  nav.classList.toggle('dark-mode');

  if (nav.classList.contains('dark-mode')) {
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("src", "/icons/dark.svg");
    img.style.color = "white"
    img.style.filter = "invert(1)"
    nav.style.backgroundColor = "black";
    document.querySelectorAll(".link").forEach(item => {
      item.style.color = "white"
    })
  } else {
    let img = document.getElementsByTagName("img")[0];
    img.setAttribute("src", "/icons/light.svg");
    img.style.filter = "invert(0)"
    nav.style.backgroundColor = "white";
    document.querySelectorAll(".link").forEach(item => {
      item.style.color = "black"
    })
  }
})


