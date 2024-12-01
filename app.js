document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    // Alternar menu
    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('show');
    });

    // Fechar o menu ao clicar em um link
    sideMenu.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            sideMenu.classList.remove('show');
        }
    });
});

// Função para carregar o conteúdo no iframe
function loadContent(page) {
    const iframe = document.getElementById('content-frame');
    iframe.src = page;
}
