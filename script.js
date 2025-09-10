// Typing animation
const typingText = document.querySelector(".typing");
const words = ["Web Developer", "UI/UX Designer", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 400);
  } else {
    setTimeout(type, isDeleting ? 60 : 120);
  }
}
if (typingText) type();

// Theme toggle with emoji 🌙/☀️
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = document.getElementById("theme-toggle-icon");
  const body = document.body;

  // Default
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggleIcon.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    toggleIcon.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Dashboard navigation
  const dashboardCards = document.querySelectorAll(".dashboard-card.selectable");
  dashboardCards.forEach(card => {
    card.addEventListener("click", () => {
      dashboardCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      const section = card.getAttribute("data-section");
      const sections = document.querySelectorAll(
        ".dashboard-section, .projects-section, .certificates-section, .about-section, .education-section, .skills-section"
      );
      sections.forEach(sec => (sec.style.display = "none"));

      if (section === "projects") {
        document.querySelector(".projects-section").style.display = "";
      } else if (section === "skills") {
        document.querySelector(".skills-section").style.display = "";
      } else if (section === "certificates") {
        document.querySelector(".certificates-section").style.display = "";
      }

      document.querySelector(".dashboard-section").style.display = "";
    });
  });
});
