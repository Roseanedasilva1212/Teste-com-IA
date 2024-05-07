// Função para mostrar/esconder menus suspensos
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Adicionar eventos de clique aos botões do menu
const menuButtons = document.querySelectorAll('nav li');
menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const menuId = button.firstChild.getAttribute('href');
        toggleMenu(menuId);
    });
});

// Adicionar validação ao formulário de contato (opcional)
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Validação básica dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Simulação de envio de dados (substitua por sua lógica real)
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    // Limpar o formulário
    form.reset();

    // Mostrar mensagem de sucesso (opcional)
    alert('Sua mensagem foi enviada com sucesso!');
});
