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
