```javascript
// =========================================
// MENU MOBILE
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", (event) => {
        if (
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    });
}


// =========================================
// ANO AUTOMÁTICO NO FOOTER
// =========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================
// HEADER AO ROLAR A PÁGINA
// =========================================

const header = document.querySelector("header");

if (header) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}


// =========================================
// ANIMAÇÃO DOS ELEMENTOS AO APARECEREM
// =========================================

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-in, .slide-left, .slide-right"
);

animatedElements.forEach((element) => {
    observer.observe(element);
});
```
