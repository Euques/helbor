// Script para controlar o menu sanduíche
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    // Toggle para abrir e fechar o menu
    if (menu.style.transform === 'translateX(0px)') {
        menu.style.transform = 'translateX(-250px)';
    } else {
        menu.style.transform = 'translateX(0px)';
    }
});

// Função para carregar o conteúdo no iframe
function loadContent(page) {
    document.getElementById('content-frame').src = page;
}
