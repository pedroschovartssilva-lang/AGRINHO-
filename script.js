"use strict";

/* MENU MOBILE */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}

/* ANO AUTOMÁTICO */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* BOTÃO VOLTAR AO TOPO */

const backTop = document.getElementById("backTop");

if (backTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            backTop.classList.add("visible");
        } else {
            backTop.classList.remove("visible");
        }
    });

    backTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

/* FORMULÁRIO */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name");

        const name = nameInput
            ? nameInput.value.trim()
            : "";

        if (name.length === 0) {
            formMessage.textContent =
                "Digite seu nome antes de enviar.";

            return;
        }

        formMessage.textContent =
            `Obrigado, ${name}! Sua mensagem foi registrada no formulário.`;

        contactForm.reset();
    });
}
