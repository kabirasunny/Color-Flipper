const colors = ["green", "red", "purple", "pink", "rgb(37, 150, 194)", "rgb(37, 153, 190)", "rgb(22, 100, 190)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
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


