// Page navigation with fade
function go(page) {
  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = page;
  }, 400);
}

// Move dodging "No" button
function moveButton(btn) {
  btn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  btn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

// Floating hearts in background
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart-bg";
  heart.innerText = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}, 600);

// 💥 Heart explosion function
function heartExplosion(x, y) {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "explode-heart";
    heart.innerText = "💖";

    const offsetX = (Math.random() - 0.5) * 200 + "px";
    const offsetY = (Math.random() - 0.5) * 200 + "px";

    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.setProperty("--x", offsetX);
    heart.style.setProperty("--y", offsetY);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1200);
  }
}

// =======================================================
// Handle heart explosion + delayed navigation for "No 💕"
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("click", (e) => {
      // Get tap/click coordinates (desktop + mobile safe)
      let x = e.clientX || window.innerWidth / 2;
      let y = e.clientY || window.innerHeight / 2;

      // Trigger heart explosion
      heartExplosion(x, y);

      // Delay page change so hearts are visible
      setTimeout(() => {
        go('music.html');
      }, 5000); // 500ms delay
    });
  }
});
