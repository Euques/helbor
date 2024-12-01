async function loadPage(page) {
  const section = document.querySelector('section');
  const menu = document.querySelector('#menu'); // Selecionando o menu, se necessário

  try {
    // Carregar a página HTML dinamicamente
    const response = await fetch(`${page}.html`);
    if (!response.ok) throw new Error('Página não encontrada');
    const content = await response.text();

    // Inserir o conteúdo no elemento <section>
    section.innerHTML = content;

    // Carregar e executar o script da página dinamicamente
    const script = document.createElement('script');
    script.src = `${page}.js`; // Isso assume que você tem um arquivo home.js, contato.js, etc.
    script.type = 'module'; // Se o script for um módulo, mantenha
    script.onload = () => {
      console.log(`${page}.js carregado com sucesso!`);
    };
    document.body.appendChild(script);

    // Reexecutar a lógica do menu, se necessário
    if (menu) {
      addMenuListeners();  // Função para re-adicionar os listeners do menu
    }

  } catch (error) {
    section.innerHTML = '<p class="text-danger text-center">Página não encontrada.</p>';
    console.error(error);
  }
}

// Função para adicionar os listeners ao menu (caso o menu esteja dentro de cada página)
function addMenuListeners() {
  const menuLinks = document.querySelectorAll('#menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('href').substring(1); // Pega o nome da página
      loadPage(page); // Chama a função para carregar a página
    });
  });
}

// Carregar a página inicial (home) ao carregar o site
loadPage('home');
