document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    var hamburger = document.getElementById("hamburger-menu");
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

// Cerrar menú al hacer clic en cualquier enlace
document.querySelectorAll(".top-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    var nav = document.querySelector(".top-nav");
    var hamburger = document.getElementById("hamburger-menu");
    nav.classList.remove("show");
    hamburger.classList.remove("active");
  });
});
