const themes = ['default', 'light', 'dark', 'retro', 'neon', 'cyberpunk', 'pastel', 'noir']; // whatever you want
function setTheme(theme) {
  if (!themes.includes(theme)) return;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  swapImages(theme);
}

function getCurrentTheme() {
  const stored = localStorage.getItem('theme');
  return themes.includes(stored) ? stored : 'default';
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


}


document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = getCurrentTheme();
  setTheme(currentTheme); // Also calls swapImages
});


function insertPageParts() {



  function insertHeader() {
    const headerHTML = `
 

      <header>
             <div class="theme-selector">
      <button onclick="setTheme('light')">⚪</button>
      <button onclick="setTheme('dark')">🔵</button>
      <button onclick="setTheme('retro')">🟠</button>
      <button onclick="setTheme('neon')">🟡</button>
      <button onclick="setTheme('cyberpunk')">🟢</button>
      <button onclick="setTheme('pastel')">🟣</button>
      <button onclick="setTheme('noir')">🔴</button>
      </div>
    <div class="navbar">
   
         <div class="home">
      <a href="index.html" class="active">Robert Calvin Marketing</a>
      <button class="menu-toggle" id="menuToggle">☰</button>
    </div>
    <div class="nav" id="navLinks">
      <a href="https://github.com/robert-calvin-dev" target="_blank">GitHub</a>
      <a href="https://robert-calvin-dev.github.io/quickaddpro/" target="_blank">Quick Add Pro</a>
      <a href="blog.html">Blog</a>
      <a href="#contactForm" class="contact-button" id="openModal">Contact</a>
    </div>
    </div>
    
  
  </header>
    `;
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('headerContainer').innerHTML = headerHTML;
    });
  }
  insertHeader();
  function insertFooter() {
    const footerHTML = `
     <footer>
<br>
    <a href="tel:+1234567890">236 339 1498</a>
    <p><a href="mailto:robert.calvin.dev@gmail.com">robert.calvin.dev@gmail.com</a></p>
    <section class="gif-links-container">
      <a href="https://robert-calvin-dev.github.io/mysticclock/personlization.html" target="_blank">
        <img src="images/mysticclock.gif" alt="Mystic Clock" class="gif-link">
      </a>
      <a href="https://robert-calvin-dev.github.io/the-pour-choice/" target="_blank">
        <img src="images/pourchoice.gif" alt="The Pour Choice" class="gif-link">
      </a>
      <a href="https://robert-calvin-dev.github.io/quickaddpro/" target="_blank">
        <img src="images/quickaddpro.gif" alt="Quick Add Pro" class="gif-link">
      </a>
      <a href="https://glitterqueencreative.ca" target="_blank">
        <img src="images/gq.gif" alt="Glitter Queen" class="gif-link">
      </a>
      <a href="https://robert-calvin-dev.github.io/UncleJimboPad/djmixer.html" target="_blank">
        <img src="images/ujdjpad.gif" alt="Uncle Jimbo DJ Pad" class="gif-link">
      </a>
    </section>
    <p>Connect with me:</p>
    <div style="margin: 1rem 0;">
      <a href="https://www.facebook.com/robbie.calvin.2025" target="_blank" rel="noopener noreferrer" style="margin: 0 1rem; text-decoration: none; ">
        Facebook
      </a>
      |
      <a href="https://www.linkedin.com/in/robert-mitchell-694207316/" target="_blank" rel="noopener noreferrer" style="margin: 0 1rem; text-decoration: none; ">
        LinkedIn
      </a>
    </div>
    <p>&copy; 2025 Robert Calvin. All rights obliterated.</p>
  </footer>
    `;
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('footerContainer').innerHTML = footerHTML;
  });

}
insertFooter();

function insertHero() {
  const heroHTML = `
    <section class="hero">
    <img class=profile data-image-key="profile" src="images/light/profile.png">
      <div class="textbox">
        <p class="statement"><strong>Hi, I’m Robert Calvin — <br>a graphic designer, writer, web developer and problem
            solver.</strong><br><br>I help individuals and brands tell their story beautifully and effectively — online
          and on paper. From striking visuals to persuasive copy to clean, responsive websites, I deliver cohesive
          creative that feels as good as it looks.
       
      </div>
    </section>
  `;
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('heroContainer').innerHTML = heroHTML;

})
}

insertHero();


}
insertPageParts();



