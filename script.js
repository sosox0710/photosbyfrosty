// script.js - Kawaii Animations

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".photo-card");
  
    cards.forEach((card, index) => {
      card.style.animation = `popIn 0.6s ease ${(index + 1) * 0.2}s forwards`;
      card.style.opacity = 0;
    });
  });
  
  // Cute animation on load
  const style = document.createElement("style");
  style.textContent = `
  @keyframes popIn {
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }`;
  document.head.appendChild(style);
  