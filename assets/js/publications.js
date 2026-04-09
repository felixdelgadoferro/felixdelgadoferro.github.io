// Filtrado dinámico de publicaciones
const yearFilter = document.getElementById("year-filter");
const publications = document.querySelectorAll(".publication-item");

if (yearFilter) {
  yearFilter.addEventListener("change", () => {
    const selected = yearFilter.value;

    publications.forEach(pub => {
      const year = pub.getAttribute("data-year");
      if (selected === "all" || year === selected) {
        pub.style.display = "block";
      } else {
        pub.style.display = "none";
      }
    });
  });
}