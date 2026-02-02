const poeticLines = [
    "Always you… 🌙",
    "Every heartbeat whispers your name… ❤️",
    "In the quiet, I feel you near… 💫",
    "I choose you again and again… 🌙",
    "Your laughter is my home… 💛",
    "Even silence feels like your voice… 💖",
    "Hamesha layi sirf tera. ❤️",
    "Loving you feels effortless… ❤️",
    "The world may sleep, but my heart stays awake for you… 🌙"
];

function hideWelcome() {
    const overlay = document.getElementById('welcome-overlay');
    if (overlay) overlay.classList.add('fade-out');
}

function initStars() {
    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
        document.body.appendChild(star);
    }
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 50 + "%";
    star.style.right = "0px";
    star.style.width = Math.random() * 150 + 50 + "px";
    const duration = Math.random() * 2 + 1;
    star.style.animation = `shoot ${duration}s linear forwards`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), duration * 1000);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.3 });

function createFloatingLine() {
    const line = document.createElement('div');
    line.className = 'floating-line';
    line.innerText = poeticLines[Math.floor(Math.random() * poeticLines.length)];
    const fromRight = Math.random() > 0.5;
    line.style.bottom = "-50px"; 
    fromRight ? line.style.right = "5%" : line.style.left = "5%";
    document.body.appendChild(line);
    setTimeout(() => {
        line.style.opacity = "1";
        line.style.transform = `translateY(-80vh) translateX(${fromRight ? '-15vw' : '15vw'})`;
        line.style.transition = "transform 18s linear, opacity 6s ease";
    }, 100);
    setTimeout(() => line.remove(), 20000);
}

window.addEventListener('load', () => {
    initStars();
    document.querySelectorAll('.story-section').forEach(s => observer.observe(s));
    setInterval(() => { if (Math.random() > 0.7) createShootingStar(); }, 5000);
    // 5-second delay
    setTimeout(hideWelcome, 5000); 
});

document.getElementById('welcome-overlay').addEventListener('click', hideWelcome);
window.addEventListener('scroll', () => { if (Math.random() > 0.985) createFloatingLine(); });
