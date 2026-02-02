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

// 1. Stars initialization
function initStars() {
    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 'px';
        star.style.width = size; star.style.height = size;
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.position = 'fixed';
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out`;
        document.body.appendChild(star);
    }
}

// 2. Shooting Stars Logic
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 50 + "%";
    star.style.right = "0px";
    star.style.width = Math.random() * 150 + 50 + "px";
    const duration = Math.random() * 2 + 1;
    star.style.animation = `shoot ${duration}s linear forwards`;
    document.body.appendChild(star);
    setTimeout(() => { star.remove(); }, duration * 1000);
}

setInterval(() => {
    if (Math.random() > 0.7) createShootingStar();
}, 5000);

// 3. Welcome Message Timer
window.addEventListener('load', () => {
    initStars();
    setTimeout(() => {
        const overlay = document.getElementById('welcome-overlay');
        if(overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => { overlay.style.display = 'none'; }, 2500);
        }
    }, 4500); 
});

// 4. Section Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.story-section').forEach(s => observer.observe(s));

// 5. Calm Rising Lines from Corners
window.addEventListener('scroll', () => {
    if (Math.random() > 0.985) createFloatingLine();
});

function createFloatingLine() {
    const line = document.createElement('div');
    line.className = 'floating-line';
    line
