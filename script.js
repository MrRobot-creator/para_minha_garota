document.getElementById('nao').addEventListener('mouseover', function() {
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.getElementById('nao').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão
    const button = this;
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.getElementById('sim').addEventListener('click', function() {
    document.getElementById('resposta').textContent = 'Você se tornou a Mulher mais feliz do mundo❤';
});

document.getElementById('sim').addEventListener('click', function() {
    window.location.href = 'resposta-sim.html'; // Redireciona para a nova página
});