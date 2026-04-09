// ===============================
// DARK MODE TOGGLE (PERSISTENTE)
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

// Cargar estado guardado
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Evento toggle
if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
}

// ===============================
// SIDEBAR RESPONSIVE
// ===============================
const sidebar = document.querySelector("#sidebar");
const toggleBtn = document.querySelector('#sidebar-toggle');
const mainContent = document.querySelector('main');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  sidebar.classList.toggle('closed');
  mainContent.classList.toggle('expanded');
});

// Crear botón hamburguesa en móvil
function createMenuToggle() {
  const button = document.createElement("button");
  button.innerHTML = "☰";
  button.classList.add("menu-toggle");
  document.body.appendChild(button);

  button.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Solo en móvil
function handleResponsiveMenu() {
  if (window.innerWidth <= 768 && !document.querySelector(".menu-toggle")) {
    createMenuToggle();
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener("load", handleResponsiveMenu);
window.addEventListener("resize", handleResponsiveMenu);

// ===============================
// ANIMACIONES SUAVES EN SCROLL
// ===============================
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.style.opacity = 1;
    entry.target.style.transform = "translateY(0)";
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = 0;
  fader.style.transform = "translateY(20px)";
  fader.style.transition = "all 0.6s ease-out";
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
