function menuShow(){
    let ul = document.querySelector('.navbar ul');

    if(ul.classList.contains("open")) {
        ul.classList.remove("open");
    }
    else {
        ul.classList.add("open");
    }
}

const box = document.querySelector(".container");
const imagens = document.querySelectorAll(".container img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let contador = 0;

function slider() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }
    updateSlider();
}

function updateSlider() {
    box.style.transform = `translateX(${-contador * 800}px)`;
}

function showPrevImage() {
    contador--;
    if (contador < 0) {
        contador = imagens.length - 1;
    }
    updateSlider();
}

function showNextImage() {
    contador++;
    if (contador > imagens.length - 1) {
        contador = 0;
    }
    updateSlider();
}

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

setInterval(slider, 6000);
