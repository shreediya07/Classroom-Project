document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector("#menuBtn");
  const nav = document.querySelector("#mainNav");

  // Hide navigation on mobile when page loads
  if (window.innerWidth <= 600) {
    nav.classList.add("hidden");
  }

  // Menu button click
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("hidden");

    const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.setAttribute("aria-expanded", !isExpanded);

    menuBtn.textContent = isExpanded ? "Menu" : "Close";
  });

  // Escape key closes the menu on mobile
  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      !nav.classList.contains("hidden") &&
      window.innerWidth <= 600
    ) {
      nav.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    }

  });

  // Show navigation when resized to desktop
  window.addEventListener("resize", () => {

    if (window.innerWidth > 600) {
      nav.classList.remove("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "Menu";
    }

  });

});

