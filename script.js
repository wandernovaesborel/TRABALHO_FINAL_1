    // JavaScript para o menu móvel
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Altera o ícone dinamicamente
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Fecha o menu ao clicar em um link (opcional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // JavaScript para o FAQ
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.toggle-icon');
            
            answer.classList.toggle('active');
            
            if (answer.classList.contains('active')) {
                icon.textContent = '-';
            } else {
                icon.textContent = '+';
            }
        });
    });

        // Área para os alunos adicionarem mais funcionalidades JavaScript
    console.log('Os alunos podem adicionar mais scripts aqui para personalizar a página');