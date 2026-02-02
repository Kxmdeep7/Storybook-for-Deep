const linesPerScroll = [
  [
    "Even silence feels like your voice… 🌙",
    "Every heartbeat whispers your name… 💛",
    "I choose you again and again… 💫"
  ],
  [
    "The night holds you gently in my thoughts… 🌌",
    "Soft whispers drift like ink across my heart… ✨"
  ],
  [
    "You are the poetry my soul hums… ❤️",
    "I feel you in the quiet spaces… 🌿"
  ],
  [
    "Sleep peacefully, knowing you are loved… 🌙",
    "In every heartbeat, you are there… 💖"
  ]
];

function createFloatingLine(pageIndex) {
  const line = document.createElement('div');
  line.className = 'floating-line handwriting';
  const lines = linesPerScroll[pageIndex];
  line.innerText = lines[Math.floor(Math.random() * lines.length)];

  line.style.top = (window.scrollY + Math.random() * window.innerHeight) + "px";
  line.style.left = Math.random() > 0.5 ? "-300px" : "100%";

  document.body.appendChild(line);

  const direction = line.style.left === "-300px" ? 'left' : 'right';
  line.style.transition = "all 6s linear";
  setTimeout(() => {
    if(direction === 'left') line.style.left = "100%";
    else line.style.left = "-300px";
    line.style.opacity = 1;
  }, 50);

  setTimeout(() => line.remove(), 6000);
}

window.addEventListener('scroll', () => {
  let pageIndex = 0;
  if(window.location.href.includes('page2')) pageIndex = 1;
  else if(window.location.href.includes('page3')) pageIndex = 2;
  else if(window.location.href.includes('page4')) pageIndex = 3;

  if(Math.random() > 0.7) createFloatingLine(pageIndex);
});
