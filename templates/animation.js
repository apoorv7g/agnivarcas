const sprite = document.getElementById("fireSprite");
const frameWidth = 166.66;
const frameHeight = 166.66;
const cols = 3;
const totalFrames = 9;

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll("input.theme-controller");
  const savedTheme = localStorage.getItem("theme") || "theme-l";

  // Apply saved theme
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggles.forEach((toggle) => {
    toggle.checked = savedTheme === "theme-d";
  });

  // Listen for changes on any toggle
  toggles.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      const isDark = e.target.checked;
      const newTheme = isDark ? "theme-d" : "theme-l";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Sync all toggles to the same state
      toggles.forEach((t) => {
        if (t !== e.target) t.checked = isDark;
      });
    });
  });
});
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const frameIndex = Math.floor(scrollTop) % totalFrames;

  const x = (frameIndex % cols) * frameWidth;
  const y = Math.floor(frameIndex / cols) * frameHeight;

  sprite.style.backgroundPosition = `-${x}px -${y}px`;
});

sprite.addEventListener("mouseover", () => {
  let frameIndex = 0;

  function animate() {
    frameIndex = (frameIndex + 1) % totalFrames;

    const x = (frameIndex % cols) * frameWidth;
    const y = Math.floor(frameIndex / cols) * frameHeight;

    sprite.style.backgroundPosition = `-${x}px -${y}px`;

    if (sprite.matches(":hover")) {
      setTimeout(animate, 100);
    }
  }

  animate();
});
sprite.addEventListener("mouseover", () => {
  function animateGlow() {
    const glowSize = 5 + Math.random() * 3;
    const offsetX = -2 + Math.random() * 4;
    const offsetY = -2 + Math.random() * 4;
    const color = `rgba(255, ${150 + Math.random() * 50}, 0, 1)`;

    sprite.style.filter = `drop-shadow(${offsetX}px ${offsetY}px ${glowSize}px ${color})`;

    if (sprite.matches(":hover")) {
      requestAnimationFrame(animateGlow);
    }
  }

  animateGlow();
});

sprite.addEventListener("mouseout", () => {
  sprite.style.filter = "none";
});

const glowSize = 5 + Math.random() * 3;
const offsetX = -2 + Math.random() * 4;
const offsetY = -2 + Math.random() * 4;
const color = `rgba(255, ${150 + Math.random() * 50}, 0, 1)`;

sprite.style.filter = `drop-shadow(${offsetX}px ${offsetY}px ${glowSize}px ${color})`;

// Scroll to top functionality
document
  .getElementById("scroll-to-top-btn")
  .addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

// Show/hide buttons based on scroll position
const scrollButtons = document.getElementById("scroll-buttons");

function checkScrollPosition() {
  if (window.scrollY > 200) {
    scrollButtons.style.opacity = "1";
  } else {
    scrollButtons.style.opacity = "0";
  }
}

// Check on scroll
window.addEventListener("scroll", checkScrollPosition);

// Initial check
checkScrollPosition();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rotatingImage = document.getElementById("rotatingImage");

  window.addEventListener("scroll", function () {
    const rotation = window.scrollY / 1; // Lower number will -> faster rotation
    rotatingImage.style.transform = `translate(-50%, -40%) rotate(${rotation}deg)`;
  });
});
