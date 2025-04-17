const themes = ['light', 'dark', 'retro'];

function setTheme(theme) {
  if (!themes.includes(theme)) return;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  swapImages(theme);
}

function getCurrentTheme() {
  const stored = localStorage.getItem('theme');
  return themes.includes(stored) ? stored : 'light';
}

function cycleTheme() {
  const current = getCurrentTheme();
  const nextIndex = (themes.indexOf(current) + 1) % themes.length;
  setTheme(themes[nextIndex]);
}

function swapImages(theme) {
  // Swap <img> tags
  const images = document.querySelectorAll('[data-image-key]');
  images.forEach(img => {
    const key = img.getAttribute('data-image-key');
    if (!key) return;
    const ext = img.src.split('.').pop().split('?')[0];
    img.src = `images/${theme}/${key}.${ext}`;
  });

  // Swap header background
  const container = document.getElementById('container');
  if (container) {
    container.style.backgroundImage = `url('images/${theme}/htmlbg.png')`;
  }
  const footer = document.getElementById('container');
  if (container) {
    container.style.backgroundImage = `url('images/${theme}/htmlbg.png')`;
  }

}


document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = getCurrentTheme();
  setTheme(currentTheme); // Also calls swapImages
});



