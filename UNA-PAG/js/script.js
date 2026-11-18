document.addEventListener("DOMContentLoaded", () => {
    // 1. Animaciones al hacer scroll (Intersection Observer)
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Se anima una sola vez para mayor fluidez
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Sombra dinámica en la barra de navegación al bajar
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = "0 6px 20px rgba(20, 37, 61, 0.12)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
});

// 3. Funciones para el visor de fotos (Lightbox)
function openLightbox(element) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    const img = element.querySelector("img");
    const caption = element.querySelector("span").innerText;

    lightboxImg.src = img.src;
    lightboxCaption.innerText = caption;
    lightbox.classList.add("active");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("active");
}

// Cerrar el visor con la tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeLightbox();
    }
});