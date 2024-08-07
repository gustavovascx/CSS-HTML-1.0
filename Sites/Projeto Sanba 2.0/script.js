//                              FUNÇÕES DO TEMA CLARO/ESCURO

const toggleSwitch = document.getElementById('toggleSwitch');
const statusText = document.getElementById('status');

var img1 = document.querySelector('#img01');
var img2 = document.querySelector('#img02');
var img3 = document.querySelector('#img03');

// var toggleS = document.querySelector('#toggleSwitch');
// var statusT = document.querySelector('#statusText');

// Adiciona um listener de evento para detectar mudanças no estado do switch
toggleSwitch.addEventListener('change', function() {
    let t2 = document.getElementsByClassName('h22')[0];
    t2.style.color = '#f3f3f3';
    
    if (toggleSwitch.checked) {
        statusText.textContent = 'Modo Escuro';
        document.body.style.backgroundColor = '#000000'; 
        document.body.style.color = '#f3f3f3';
        document.querySelector('main').style.color = '#f3f3f3';
        img1.src = './imagens/Pessoa modo escuro.png';
        img2.src = './imagens/Flecha modo escuro.png'; // Ajuste o caminho conforme necessário
        img3.src = './imagens/seta modo escuro.png'; // Ajuste o caminho conforme necessário
    } else {
        statusText.textContent = 'Modo Claro';
        document.body.style.backgroundColor = '#f3f3f3'; 
        document.body.style.color = '#000000';
        document.querySelector('main').style.color = '#000000';
        t2.style.color = '#000000';
        img1.src = './imagens/vista-da-rua.png';
        img2.src = './imagens/seta-de-alvo.png'; // Ajuste o caminho conforme necessário
        img3.src = './imagens/alinhamento-do-grafico.png'; // Ajuste o caminho conforme necessário
    }
});


//                                  FUNÇÕES DO CARROSEL
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
// 