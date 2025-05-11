const sprite = document.getElementById("fireSprite");
const frameWidth = 166.66;
const frameHeight = 166.66;
const cols = 3;
const totalFrames = 9;

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
