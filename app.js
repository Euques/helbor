async function loadPage(page) {
  const section = document.querySelector('section');

  try {
    const response = await fetch(`${page}.html`);
    if (!response.ok) throw new Error('Página não encontrada');
    const content = await response.text();

    // Insere o conteúdo na página
    section.innerHTML = content;

    // Carrega o script correspondente
    if (page === 'home') {
      const script = document.createElement('script');
      script.src = 'home.js'; // Caminho para o script da página
      script.type = 'module'; // Se for usar imports/export
      document.body.appendChild(script);
    }
  } catch (error) {
    section.innerHTML = '<p class="text-danger text-center">Página não encontrada.</p>';
    console.error(error);
  }
}
