/* GF Nexus — landing page. JS mínimo: menu mobile + nav que reage ao scroll. */
(function () {
  "use strict";

  // ---- Menu mobile ----
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    // Fecha ao clicar num link
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // ---- Sombra do nav ao rolar ----
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 20) {
        nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,.6)";
      } else {
        nav.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();

