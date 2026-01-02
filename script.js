gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".hero h1", {
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".hero p", {
  opacity: 0,
  y: 20,
  delay: 0.3,
  duration: 1
});

/* SECTION REVEALS */
gsap.utils.toArray(".section").forEach(section => {
  gsap.from(section.querySelectorAll("h2, h3, p, .capability, .btn"), {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 24,
    stagger: 0.12,
    duration: 0.8,
    ease: "power2.out"
  });
});

/* THEME TOGGLE + LOGO SWITCH */
const toggleBtn = document.getElementById("themeToggle");
const logoImg = document.getElementById("siteLogo");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    toggleBtn.textContent = "☀️ Light";
    logoImg.src = "assets/lightlogo.png";
  } else {
    toggleBtn.textContent = "🌙 Dark";
    logoImg.src = "assets/logo.png";
  }
});

/* SMOOTH SCROLL BUTTONS */
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("capabilities").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactBtn").addEventListener("click", () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
