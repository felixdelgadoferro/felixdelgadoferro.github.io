// ===============================
// NAVBAR RESPONSIVE
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });
  }
});

// ===============================
// DARK MODE TOGGLE (OPCIONAL)
// ===============================
document.addEventListener("DOMContentLoaded", function () {
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
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
  }

  // Evento toggle
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark-mode");
      setDarkMode(!isDark);
    });
  }
});

// ===============================
// ANIMACIONES SUAVES EN SCROLL
// ===============================
document.addEventListener("DOMContentLoaded", function () {
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