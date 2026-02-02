function initStars() {
    const starCount = 80;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.style.position = 'fixed';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.opacity = Math.random();
        document.body.appendChild(star);
    }
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.top = Math.random() * 40 + "%";
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

window.onload = () => {
    initStars();
    document.querySelectorAll('.story-section').forEach(s => observer.observe(s));
    setInterval(() => { if (Math.random() > 0.7) createShootingStar(); }, 5000);
};

// Tap to skip greeting immediately
document.getElementById('welcome-overlay').addEventListener('click', function() {
    this.style.display = 'none';
});
