// Fade-in sections
const pages = document.querySelectorAll('.page');

function checkVisible() {
  const triggerBottom = window.innerHeight * 0.85;

  pages.forEach(page => {
    const pageTop = page.getBoundingClientRect().top;

    if (pageTop < triggerBottom) {
      page.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible);

// Floating lines
const floatingContainer = document.getElementById('floating-lines');
const floatingTexts = [
  "Always you… 🌙",
  "I choose you again and again… 💫",
  "Even silence feels like your voice… ❤️",
  "A heartbeat whispers your name… 💛",
  "I feel you in the quiet spaces… 🌿"
];

function createFloatingLine() {
  const line = document.createElement('div');
  line.className = 'floating-line';
  line.innerText = floatingTexts[Math.floor(Math.random() * floatingTexts.length)];

  const startTop = window.scrollY + Math.random() * window.innerHeight;
  line.style.top = startTop + 'px';

  floatingContainer.appendChild(line);

  // Animate floating line: appear + stop at left
  line.style.opacity = 1;
  line.style.transition = 'transform 2s ease-out, opacity 2s ease-out';
  line.style.transform = 'translateX(20px)'; // stops slightly to the right for "fixed" left effect

  // Remove after 6s
  setTimeout(() => {
    line.remove();
  }, 6000);
}

// Randomly create floating lines while scrolling
window.addEventListener('scroll', () => {
  if (Math.random() > 0.85) {
    createFloatingLine();
  }

  // Check if we reached last section for page flip
  const lastPage = document.getElementById('final-page');
  const lastPageTop = lastPage.getBoundingClientRect().top;

  if (lastPageTop < window.innerHeight * 0.3) {
    document.getElementById('page-flip').classList.add('active');
  }

// Page flip effect for last section
window.addEventListener('scroll', () => {
    if (Math.random() > 0.85) createFloatingLine();

    const lastPage = document.getElementById('final-page');
    const lastPageTop = lastPage.getBoundingClientRect().top;

    if (lastPageTop < window.innerHeight * 0.3) {
        document.getElementById('page-flip').classList.add('active');
    }
});

  

});
