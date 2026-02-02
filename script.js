function initStars() {
    const starCount = 150;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
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
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.4 });

document.querySelectorAll('.story-section').forEach(s => observer.observe(s));

// Floating surprise line: "You are my masterpiece" in French
function createFloatingFrench() {
    if (Math.random() > 0.99) {
        const line = document.createElement('div');
        line.className = 'floating-line';
        line.innerText = "Tu es mon chef-d'œuvre.";
        line.style.top = Math.random() * 80 + 10 + "%";
        line.style.right = "-200px";
        document.body.appendChild(line);
        setTimeout(() => {
            line.style.transform = "translateX(-110vw)";
            line.style.transition = "transform 15s linear, opacity 10s ease";
        }, 100);
        setTimeout(() => line.remove(), 16000);
    }
}

window.addEventListener('scroll', createFloatingFrench);
window.onload = initStars;
