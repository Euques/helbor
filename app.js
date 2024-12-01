// Função para abrir e fechar o menu
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
    // Fecha o menu após a seleção
    var menu = document.getElementById('menu');
    menu.style.transform = 'translateX(-250px)';
}
