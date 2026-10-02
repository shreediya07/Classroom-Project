
document.addEventListener("DOMContentLoaded", () => {

  // Elements
  const searchInput = document.querySelector("#searchInput");
  const toggleDetailsBtn = document.querySelector("#toggleDetailsBtn");
  const courseDetails = document.querySelector("#courseDetails");
  const cards = document.querySelectorAll("#searchGrid .card");
  const searchStatus = document.querySelector("#searchStatus");

  const nameInput = document.querySelector("#nameInput");
  const charCount = document.querySelector("#charCount");
  const trimCount = document.querySelector("#trimCount");


  // ==========================================
  // 1. TOGGLE COURSE DETAILS
  // ==========================================

  toggleDetailsBtn.addEventListener("click", () => {

    courseDetails.classList.toggle("hidden");

    const isHidden = courseDetails.classList.contains("hidden");

    toggleDetailsBtn.textContent = isHidden
      ? "Show Details"
      : "Hide Details";

    toggleDetailsBtn.setAttribute(
      "aria-expanded",
      String(!isHidden)
    );
  });


  // ==========================================
  // 2. LIVE SEARCH
  // ==========================================

  function filterCards() {

    const query = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    cards.forEach(card => {

      // Read data attributes using dataset
      const name = card.dataset.name.toLowerCase();
      const tags = card.dataset.tags.toLowerCase();

      const matches =
        query === "" ||
        name.includes(query) ||
        tags.includes(query);

      if (matches) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Update search status
    if (query === "") {
      searchStatus.textContent = "";
    } else {
      searchStatus.textContent =
        `${visibleCount} results for ${query}`;
    }
  }


  searchInput.addEventListener("keydown", (event) => {

    // Escape clears search
    if (event.key === "Escape") {
      searchInput.value = "";
      filterCards();
    }

    // Enter shows Searching message
    if (event.key === "Enter") {
      event.preventDefault();
      searchStatus.textContent = "Searching...";
    }
  });


  searchInput.addEventListener("keyup", (event) => {

    // Ignore special keys
    if (
      event.key === "Shift" ||
      event.key === "Control" ||
      event.key === "Alt" ||
      event.key === "Enter" ||
      event.key === "Escape"
    ) {
      return;
    }

    filterCards();
  });


  // ==========================================
  // 3. CHARACTER COUNT
  // ==========================================

  nameInput.addEventListener("input", () => {

    const value = nameInput.value;
    const trimmedValue = value.trim();

    charCount.textContent = value.length;
    trimCount.textContent = trimmedValue.length;

    // Show red when input contains only spaces
    if (value.length > 0 && trimmedValue.length === 0) {
      charCount.style.color = "red";
    } else {
      charCount.style.color = "blue";
    }
  });

});

