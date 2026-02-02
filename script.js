// Poetic Lines for the "Shooting Star" effect
const poeticLines = [
    "Written in the stars...",
    "Under the same moonlight.",
    "A galaxy in your eyes.",
    "The night is quiet, but my heart is loud.",
    "Tracing constellations of us.",
    "Always looking up, always finding you.",
    "Mon cœur t'appartient."
];

// 1. Generate Twinkling Stars
function initStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size, position, and animation delay
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        
        // Twinkle speed
        const duration = Math.random() * 3 + 2 + 's';
        star.style.animation = `twinkle ${duration} infinite ease-in-out`;
        star.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(star);
    }
}

// 2. Observer for Fade-in Sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.story-section').forEach(section => observer.observe(section));

// 3. Floating Poetic Lines on Scroll
window.addEventListener('scroll', () => {
    if (Math.random() > 0.985) createFloatingLine();
});

function createFloatingLine() {
    const line = document.createElement('div');
    line.className = 'floating-line';
    line.innerText = poeticLines[Math.floor(Math.random() * poeticLines.length)];
    line.style.top = Math.random() * 80 + 10 + "%";
    line.style.right = "-350px";
    document.body.appendChild(line);

    setTimeout(() => {
        line.style.transform = "translateX(-115vw)";
        line.style.transition = "transform 18s linear, opacity 12s ease";
    }, 100);

    setTimeout(() => { line.style.opacity = "0"; }, 8000);
    setTimeout(() => { line.remove(); }, 20000);
}

// Run star init on load
window.onload = initStars;
