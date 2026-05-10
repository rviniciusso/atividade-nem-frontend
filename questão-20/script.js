// Alternador de Tema
const themeBtn = document.getElementById('theme-btn');
const body = document.documentElement;

themeBtn.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});

// Manipulação do Formulário
const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    
    // Simulação de envio
    alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi "enviada" com sucesso.`);
    
    form.reset(); // Limpa os campos
});

// Efeito interativo nos botões dos cards
const cards = document.querySelectorAll('.btn-card');
cards.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Detalhes do projeto em breve!");
    });
});