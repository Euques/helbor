document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    function loadPage(page) {
        fetch(`${page}.html`)
            .then(response => {
                if (!response.ok) throw new Error("Página não encontrada");
                return response.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;

                // Carregar JS específico da página de contato
                if (page === "contato") {
                    const script = document.createElement("script");
                    script.src = "contato.js";
                    document.body.appendChild(script);
                }
            })
            .catch(error => {
                contentDiv.innerHTML = "<p>Erro ao carregar a página.</p>";
                console.error(error);
            });
    }

    // Carregar a página inicial
    loadPage("home");

    // Eventos de navegação
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            loadPage(page);
        });
    });
});
