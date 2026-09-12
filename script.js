```javascript
// =========================================
// MENU MOBILE
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const setMenuState = (isOpen) => {

    navLinks.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

};

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
        setMenuState(!isOpen);

    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 900) {
            setMenuState(false);
        }

    });

}


// Fecha o menu depois de clicar em uma opção

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 900) {
            setMenuState(false);
        }

    });

});


// =========================================
// ANO AUTOMÁTICO
// =========================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================================
// HEADER AO ROLAR
// =========================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 5px 25px rgba(30, 45, 35, 0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});


// =========================================
// ANIMAÇÃO DOS ELEMENTOS
// =========================================

const animatedElements = document.querySelectorAll(
    ".service-card, .advantage, .section-content, .section-image, .period-content, .hero-content, .hero-image"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// =========================================
// FECHAR MENU AO CLICAR FORA
// =========================================

document.addEventListener("click", (event) => {

    if (!menuBtn || !navLinks) return;

    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedButton =
        menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedButton && window.innerWidth <= 900) {

        setMenuState(false);

    }

});
```
