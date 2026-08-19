
// ==============================
// AGRINHO - SCRIPT.JS
// ==============================

// Aguarda o carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    // ===== MENU MOBILE =====

    const menu = document.querySelector("nav ul");
    const header = document.querySelector("header");

    // Cria botão do menu caso exista uma navegação
    if (menu && header) {
        const menuButton = document.createElement("button");

        menuButton.innerHTML = "☰";
        menuButton.classList.add("menu-button");

        menuButton.style.display = "none";
        menuButton.style.background = "none";
        menuButton.style.border = "none";
        menuButton.style.color = "white";
        menuButton.style.fontSize = "28px";
        menuButton.style.cursor = "pointer";

        header.insertBefore(menuButton, menu);

        menuButton.addEventListener("click", () => {
            menu.classList.toggle("menu-aberto");
        });

        // Fecha o menu ao clicar em um link
        const links = menu.querySelectorAll("a");

        links.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("menu-aberto");
            });
        });

        // Exibe o botão somente em telas pequenas
        function verificarTela() {
            if (window.innerWidth <= 768) {
                menuButton.style.display = "block";
            } else {
                menuButton.style.display = "none";
                menu.classList.remove("menu-aberto");
            }
        }

        verificarTela();
        window.addEventListener("resize", verificarTela);
    }


    // ===== ANIMAÇÃO AO ROLAR =====

    const elementos = document.querySelectorAll(".card, section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visivel");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    elementos.forEach(elemento => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(30px)";
        elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(elemento);
    });


    // ===== BOTÃO VOLTAR AO TOPO =====

    const topo = document.createElement("button");

    topo.innerHTML = "↑";
    topo.title = "Voltar ao topo";

    topo.style.position = "fixed";
    topo.style.bottom = "25px";
    topo.style.right = "25px";
    topo.style.width = "45px";
    topo.style.height = "45px";
    topo.style.border = "none";
    topo.style.borderRadius = "50%";
    topo.style.backgroundColor = "#2e7d32";
    topo.style.color = "white";
    topo.style.fontSize = "22px";
    topo.style.cursor = "pointer";
    topo.style.display = "none";
    topo.style.zIndex = "999";

    document.body.appendChild(topo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            topo.style.display = "block";
        } else {
            topo.style.display = "none";
        }
    });

    topo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // ===== ANIMAÇÃO DOS CARDS =====

    document.querySelectorAll(".card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.02)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

    });

});
