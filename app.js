// Função para carregar o conteúdo no iframe
function loadContent(page) {
    const iframe = document.getElementById('content-frame');
    iframe.src = page;

    // Fecha o menu se estiver aberto
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: true
        });
    }
}
