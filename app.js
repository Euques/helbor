// Script para controlar o menu sanduíche
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

// Função para carregar o conteúdo no iframe
function loadContent(page) {
    document.getElementById('content-frame').src = page;
}
