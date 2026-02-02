const poeticLines = [
    "A brushstroke of fate.",
    "Colors bleeding into one another.",
    "Sketching a future with you.",
    "The art of being known.",
    "Our story is my masterpiece.",
    "Fine lines and soft shadows.",
    "Chaque jour est un nouveau départ.", /* French: Every day is a new beginning */
    "Tu es mon chef-d'œuvre." /* French: You are my masterpiece */
];

// Add splashes
document.querySelectorAll('.page').forEach(page => {
    if (!page.classList.contains('flip-container')) {
        const splash = document.createElement('div');
        splash.className = 'watercolor-splash';
        page.appendChild(splash);
    }
});

// Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            if(entry.target.id === 'page4') {
                setTimeout(() => {
                    document.getElementById('finalPage').classList.add('flipped');
                }, 3000);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.page').forEach(page => observer.observe(page));

// Random Floating Lines
window.addEventListener('scroll', () => {
    if (Math.random() > 0.985) createFloatingLine();
});

function createFloatingLine() {
    const line = document.createElement('div');
    line.className = 'floating-line';
    line.innerText = poeticLines[Math.floor(Math.random() * poeticLines.length)];
    line.style.top = Math.random() * 80 + 10 + "%";
    line.style.right = "-300px";
    document.body.appendChild(line);

    setTimeout(() => {
        line.style.transform = "translateX(-95vw)";
        line.style.transition = "transform 12s linear, opacity 10s ease";
    }, 100);

    setTimeout(() => { line.style.opacity = "0"; }, 6000);
    setTimeout(() => { line.remove(); }, 13000);
}
