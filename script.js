/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

/* THEME TOGGLE + LOGO */
const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("siteLogo");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "☀️";
    logo.src = "assets/lightlogo.png";
  } else {
    themeToggle.textContent = "🌙";
    logo.src = "assets/logo.png";
  }
});

/* SCROLL BUTTONS */
document.getElementById("exploreBtn")?.addEventListener("click", () => {
  document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn")?.addEventListener("click", () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
});
