const poeticLines = [
    "Always you… 🌙",
    "Every heartbeat whispers your name… ❤️",
    "In the quiet, I feel you near… 💫",
    "I choose you again and again… 🌙",
    "Your laughter is my home… 💛",
    "Even silence feels like your voice… 💖",
    "I feel you in every breath… 🌙",
    "A heartbeat keeps calling your name… 💫",
    "Loving you feels effortless… ❤️",
    "The world may sleep, but my heart stays awake for you… 🌙"
];

function initStars() {
    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
        document.body.appendChild(star);
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Hide welcome overlay on first scroll
            document.getElementById('welcome-overlay').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('welcome-overlay').style.display = 'none';
            }, 2000);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.story-section').forEach(s => observer.observe(s));

window.addEventListener('scroll', () => {
    if (Math.random() > 0.98) createFloatingLine();
});

function createFloatingLine() {
    const line = document.createElement('div');
    line.className = 'floating-line';
    line.innerText = poeticLines[Math.floor(Math.random() * poeticLines.length)];
    line.style.top = Math.random() * 80 + 10 + "%";
    line.style.right = "-300px";
    document.body.appendChild(line);

    setTimeout(() => {
        line.style.transform = "translateX(-120vw)";
        line.style.transition = "transform 15s linear, opacity 10s ease";
    }, 100);

    setTimeout(() => { line.style.opacity = "0"; }, 7000);
    setTimeout(() => { line.remove(); }, 18000);
}

window.onload = initStars;
