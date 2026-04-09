// ===============================
// DARK MODE TOGGLE (persistente)
// ===============================
const darkToggle = document.getElementById("dark-mode-toggle");

function setDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
  }
});

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
}

// ===============================
// SIDEBAR TOGGLE MÓVIL
// ===============================
const sidebar = document.getElementById("sidebar");

// Crear botón hamburguesa solo en móvil
function createMenuToggle() {
  if (!document.querySelector(".menu-toggle")) {
    const button = document.createElement("button");
    button.classList.add("menu-toggle");
    button.innerHTML = "☰";
    document.body.appendChild(button);

    button.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

// Ejecutar al cargar y redimensionar
function handleResponsiveMenu() {
  if (window.innerWidth <= 768) {
    createMenuToggle();
  } else {
    // cerrar sidebar automáticamente en escritorio
    sidebar.classList.remove("open");
  }
}

window.addEventListener("load", handleResponsiveMenu);
window.addEventListener("resize", handleResponsiveMenu);

// ===============================
// ANIMACIONES FADE-IN EN SCROLL
// ===============================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===============================
// SCROLL SUAVE PARA ANCLAS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});