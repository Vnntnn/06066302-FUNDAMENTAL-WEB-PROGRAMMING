const numberRow = document.querySelector(".numbers");
const btn = document.querySelector("button");
const numsImgs = [
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/0.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/1.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/2.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/3.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/4.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/5.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/6.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/7.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/8.png",
    "http://webdev.it.kmitl.ac.th/labdocs/lab3/images/9.png",
];

function randomSixNumbers() {
    numberRow.innerHTML = "";
    const frag = document.createDocumentFragment();

    for (let i = 0; i < 6; i++) {
        const randNum = Math.floor(Math.random() * 10);
        const chip = document.createElement("span");
        chip.className = "chip";

        const img = document.createElement("img");
        img.src = numsImgs[randNum];

        chip.appendChild(img);
        frag.appendChild(chip);
    }

    numberRow.appendChild(frag);
}

btn.addEventListener("click", randomSixNumbers);
randomSixNumbers();