document.querySelectorAll('nav li').forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'rgba(255, 255, 255, 0.534)';
        event.target.style.borderRadius = '20px';
        event.target.style.border = 'solid 2px rgba(0, 0, 0, 0.233)';
    });

    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = '';
        event.target.style.borderRadius = '';
        event.target.style.border = '2px solid transparent';
    });
});


document.getElementById('changeTextButton').addEventListener('click', () => {
    document.getElementById('learnMoreText').innerText = 'Agora você sabe que o Bugdroid foi inspirado nas figuras que indicam os banheiros. Continue explorando para aprender mais!';
});


document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        alert('Você clicou em uma imagem!');
    });
});