const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const copyEmailButton = document.querySelector(".copy-email");

const musicToggle = document.querySelector("#music-toggle");
const musicLabel = document.querySelector("#music-label");
const backgroundMusic = document.querySelector("#background-music");

musicToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    await backgroundMusic.play();
    musicLabel.textContent = "Pause music";
    musicToggle.setAttribute("aria-label", "Pause background music");
    musicToggle.setAttribute("aria-pressed", "true");
  } else {
    backgroundMusic.pause();
    musicLabel.textContent = "Play music";
    musicToggle.setAttribute("aria-label", "Play background music");
    musicToggle.setAttribute("aria-pressed", "false");
  }
});

copyEmailButton.addEventListener("click", async () => {
  const email = copyEmailButton.dataset.email;

  try {
    await navigator.clipboard.writeText(email);
    copyEmailButton.textContent = "Copied";
    setTimeout(() => {
      copyEmailButton.textContent = "Copy email";
    }, 1800);
  } catch {
    copyEmailButton.textContent = "Copy failed";
  }
});
