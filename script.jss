document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile (Hamburguer)
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar o menu ao clicar em qualquer link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // 2. Animação de entrada nos elementos ao rolar a página (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona cartões e seções para aplicar o efeito
    const elementsToAnimate = document.querySelectorAll('.card, .hero-content, .cta-box');
    elementsToAnimate.forEach(el => {
        el.classList.add('reveal-hidden');
        revealObserver.observe(el);
    });

    // 3. Efeito no Header ao rolar a página
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header?.classList.add('header-scrolled');
        } else {
            header?.classList.remove('header-scrolled');
        }
    });
});
