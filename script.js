function initStars() {
    const starCount = 80; // Slightly fewer stars for better mobile performance
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
        }
    });
}, { threshold: 0.2 }); // Trigger earlier on mobile

document.querySelectorAll('.story-section').forEach(s => observer.observe(s));

window.onload = initStars;
