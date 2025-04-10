function insertHeader() {
 const headerHTML = `
 <br>
  <nav>
  <ul class=navbar>
    <li><h3><a href="about.html">About</a></h3></li>
    <li><h3><a href="projects.html">Projects</a></h3></li>
    <li><h3><a href="blog.html">Blog</a></h3></li>
    <li><h3><a href="contact.html">Contact</a></h3></li>
  </ul>
  </nav>
  <a href="/index.html"><img class="logo" data-image-key="logo" src="/images/light/logo.png" alt="Robert Calvin Marketing Logo"></a>
  <img class="headerimage" data-image-key="robot" src="images/light/robot.gif" alt="Robot">
  <br>
  <header id="theme-header">
    <div class="themes">
      <button class="themebutton" onclick="setTheme('light')">⚪</button>
      <button class="themebutton" onclick="setTheme('dark')">⚫</button>
      <button class="themebutton" onclick="setTheme('retro')">🔴</button>
    </div>
  </header>
  <br>
 `;
 const headerContainer = document.getElementById("headerContainer").innerHTML = headerHTML;}

function insertFooter() {
 const footerHTML = `
  <br>
  <footer>
  <br>
    <p><a href="mailto:robert.calvin.dev@gmail.com">robert.calvin.dev@gmail.com</a></p>
    <p><a href="https://github.com/robert-calvin-dev" target="_blank">github.com/robert-calvin-dev</a></p>
    <p>&copy; 2025 Robert Calvin. All rights obliterated.</p>
  </footer>
<br>
 `;
 const footerContainer = document.getElementById("footerContainer").innerHTML = footerHTML;}

function insertServices() {
 const servicesHTML = `
     <section class="services">
      <h2>How can I help?</h2>
      <div class="servicecards">
        <div class="service">
          <h3><a href="contact.html">Graphic Design</a></h3>
        

<img class="serviceicon" data-image-key="graphicd" src="images/light/graphicd.png" alt="Graphic Design Icon">
          <p>Logos, Event Flyers, Social Media Content, Album Art, Digital Marketing</p>
        </div>
        <div class="service">
          <h3><a href="contact.html">Web Design</a></h3>
          <img class="serviceicon" data-image-key="web" src="images/light/web.png" alt="Web Design Icon">
          <p>Wordpress, Wix, E-commerce, Blogs, SEO, Custom Themes, Content Creation</p>
        </div>
        <div class="service">
          <h3><a href="contact.html">Resume Upgrade</a></h3>
            <img class="serviceicon" data-image-key="resumes" src="/images/light/resumes.png" alt="Resume Ipgrade Icon">
          <p>Custom Templates, Streamlined Content, Modern & Sophisticated</p><br>
        </div>
      </div>
    </section>
 `;
 const servicesContainer = document.getElementById('servicesContainer').innerHTML = servicesHTML;}

function insertContactForm() {
 const contactFormHTML = `
 <form action="https://formspree.io/f/mqapwbdo" method="POST" class="contact-form" style="max-width: 600px; margin: 3rem auto; display: flex; flex-direction: column; gap: 1.5rem;">
    <h2>Start Your Project</h2>
  
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required placeholder="Your full name" style="padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
  
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required placeholder="you@example.com" style="padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
  
    <label for="service">Type of Service</label>
    <select id="service" name="service" required style="padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;">
      <option value="" disabled selected>Select a service</option>
      <option value="Graphic Design">Graphic Design</option>
      <option value="Web Design">Web Design</option>
      <option value="Resume Upgrades">Resume Upgrades</option>
      <option value="App Development">App Development</option>
      <option value="Other">Other</option>
    </select>
  
    <label for="details">Details (optional)</label>
    <textarea id="details" name="details" placeholder="Describe your project in a few sentences" rows="5" style="padding: 0.75rem; border: 1px solid #ccc; border-radius: 6px;"></textarea>
  
    <button type="submit" style="background: var(--accent); color: #fff; padding: 0.75rem 1.5rem; font-weight: bold; border: none; border-radius: 8px; cursor: pointer;">
      SUBMIT
    </button>
  </form>
 `;
 const contactForm = document.getElementById("contactForm").innerHTML = contactFormHTML;}

function insertBlog() {
 const blogHTML = `
 <section class="blog">
    <div class="blog-card">
     <h3><a href="/blog/how-i-built-my-digital-sandbox.html">How I Built My Digital Python Sandbox</a></h3>
    
     <div class="card">
       <div class="card-overview">
         <p>A deep dive into building a browser-based Python environment using Pyodide, with no backend or server dependencies. Learn how to load the runtime, run user code safely, and integrate the results into your UI.</p>
         <div class="skills-used">
           <ul>
             <li>Python</li>
             <li>Pyodide</li>
             <li>WebAssembly</li>
             <li>JavaScript</li>
             <li>Frontend Architecture</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <div class="blog-card">
    <h3><a href="/blog/how-i-built-my-digital-sandbox.html">How I Built My Digital Python Sandbox</a></h3>
    <div class="card">
      <div class="card-overview">
        <p>A deep dive into building a browser-based Python environment using Pyodide, with no backend or server dependencies. Learn how to load the runtime, run user code safely, and integrate the results into your UI.</p>
        <div class="skills-used">
          <ul>
            <li>Python</li>
            <li>Pyodide</li>
            <li>WebAssembly</li>
            <li>JavaScript</li>
            <li>Frontend Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="blog-card">
   <h3><a href="/blog/how-i-built-my-digital-sandbox.html">How I Built My Digital Python Sandbox</a></h3>
   <div class="card">
     <div class="card-overview">
       <p>A deep dive into building a browser-based Python environment using Pyodide, with no backend or server dependencies. Learn how to load the runtime, run user code safely, and integrate the results into your UI.</p>
       <div class="skills-used">
         <ul>
           <li>Python</li>
           <li>Pyodide</li>
           <li>WebAssembly</li>
           <li>JavaScript</li>
           <li>Frontend Architecture</li>
         </ul>
       </div>
     </div>
   </div>
 </div>
   </section>
 `;
 const blogContainer = document.getElementById("blogContainer").innerHTML = blogHTML;}

function insertFeatured() {
 const featuredHTML = `
 
 `;
 const featuredContainer = document.getElementById("featuredContainer").innerHTML = featuredHTML;}
insertHeader();
insertFooter();
insertServices();
insertContactForm();
insertBlog();
insertFeatured();