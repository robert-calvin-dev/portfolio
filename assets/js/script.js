function insertHeader() {
 const headerHTML = `

<div style="text-align: right; margin-bottom:25px;" class="nav"><a href="/" class="btn"><i class="fas fa-home"
   style="margin-right: 0.5rem;"></i>Home </a><a href="/about/" class="btn"><i class="fas fa-user"
   style="margin-right: 0.5rem;"></i>About</a><a href="/seoservices/" class="btn"><i class="fas fa-globe"
   style="margin-right: 0.5rem;"></i>SEO Services</a><a href="/quickseo/" class="btn"><i class="fas fa-bolt"
   style="margin-right: 0.5rem;"></i>Try Quick SEO</a><a href="/seoblog/" class="btn"><i class="fas fa-pencil-alt"
   style="margin-right: 0.5rem;"></i>SEO Blog</a></div>
   <div style="text-align: right; margin-bottom:25px;" class="nav2"><a href="/" class="btn"><i class="fas fa-home"
    style="margin-right: 0.5rem;"></i></a><a href="/about/" class="btn"><i class="fas fa-user"
    style="margin-right: 0.5rem;"></i></a><a href="/seoservices/" class="btn"><i class="fas fa-globe"
    style="margin-right: 0.5rem;"></i></a><a href="/quickseo/" class="btn"><i class="fas fa-bolt"
    style="margin-right: 0.5rem;"></i></a><a href="/seoblog/" class="btn"><i class="fas fa-pencil-alt"
    style="margin-right: 0.5rem;"></i></a></div>
   <img
 style="width: 100%; box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);"
 src="/assets/images/FULL STACK SEO SPECIALIST (1).png">

 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('header').innerHTML = headerHTML
 });
};
insertHeader();
function insertFooter() {
 const footerHTML = `

<div style="text-align: right; margin-top:25px;" class="nav"><a href="mailto:robert.calvin.dev@gmail.com" class="btn"
  target="_blank"><i class="fas fa-envelope" style="margin-right: 0.5rem;"></i>Email Me </a><a
  href="https://linkedin.com/in/robert-calvin-dev" class="btn" target="_blank"><i class="fab fa-linkedin-in"
   style="margin-right: 0.5rem;"></i>LinkedIn</a><a href="https://github.com/robert-calvin-dev" class="btn"
  target="_blank"><i class="fab fa-github" style="margin-right: 0.5rem;"></i>GitHub</a></div>

<div style="text-align: right; margin-top:25px;" class="nav2"><a href="mailto:robert.calvin.dev@gmail.com" class="btn"
  target="_blank"><i class="fas fa-envelope" style="margin-right: 0.5rem;"></i></a><a href="https://linkedin.com/in/robert-calvin-dev"
  class="btn" target="_blank"><i class="fab fa-linkedin-in" style="margin-right: 0.5rem;"></i></a><a
  href="https://github.com/robert-calvin-dev" class="btn" target="_blank"><i class="fab fa-github"
   style="margin-right: 0.5rem;"></i></a></div>

<footer
 style="background-color: var(--charcoal); border: 1px solid var(--gray-border); box-shadow: 0 0 30px rgba(255, 255, 255, 0.05); padding: 3rem 2rem; margin-top: 5rem;">
 <div style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 2rem;">
  <div style="flex: 1; min-width: 250px;">
   <h2 style="color: var(--blood-orange); margin-bottom: 1rem;">Sitemap</h2>
   <div style="display: flex; gap: 2rem;">
    <ul style="list-style: none; padding: 0;">
     <li><a href="/" class="sitemap-link">Home</a></li>
     <li><a href="/about/" class="sitemap-link">About</a></li>
     <li><a href="/seoservices/" class="sitemap-link">SEO Services</a></li>
     <li><a href="/casestudies/" class="sitemap-link">Case Studies</a></li>
     <li><a href="/quickseo/" class="sitemap-link">Try QuickSEO</a></li>
    </ul>
    <ul style="list-style: none; padding: 0;">
     <li><a href="/seoblog" class="sitemap-link">SEO Blog</a></li>
     <li><a href="https://quickwoo.pro" class="sitemap-link">QuickWoo</a></li>
     <li><a href="https://trustedcashloans.com" target="_blank" class="sitemap-link">Trusted Cash Loans</a></li>
     <li><a href="https://glitterqueencreative.ca" target="_blank" class="sitemap-link">Glitter Queen Creative</a></li>
    </ul>
   </div>
  </div>
  <div style="flex: 1; min-width: 250px;">
   <h2 style="color: var(--blood-orange); margin-bottom: 0.5rem;">Ready to Rank?</h2>
   <p style="margin-bottom: 1rem;">Send me the details of your project and let's make Google obsessed with your site.
   </p>

   <form action="https://formspree.io/f/mwpbpqww" method="POST" style="display: flex; flex-direction: column; gap: 1rem;">

   <input type="text" placeholder="Name" style="padding: 0.75rem; border-radius: 8px; border: 1px solid var(--gray-border); background-color: var(--light-charcoal); color: var(--white);">
   <input type="email" name="email" placeholder="Email" style="padding: 0.75rem; border-radius: 8px; border: 1px solid var(--gray-border); background-color: var(--light-charcoal); color: var(--white);">
   <textarea name="message" placeholder="Project Details" rows="5" style="padding: 0.75rem; border-radius: 8px; border: 1px solid var(--gray-border); background-color: var(--light-charcoal); color: var(--white);"></textarea>
   <button type="submit" class="btn">Submit</button></form>
  </div>
 </div>
</footer>
<div
 style="text-align: center; margin-top: 2rem; padding-bottom: 2rem; color: var(--sun-yellow); font-size: 1.1rem; font-weight: bold;">
 © 2025 Robert Calvin. All rights reserved. </div>
`;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('footer').innerHTML = footerHTML
 });
};
insertFooter();
function insertGlitter() {
 const glitterHTML = `
     <section style="display: flex; flex-direction: column;" id="glitterqueen">
      <div style="display: flex;"> <img style="margin: auto; width: 80%;" src="/assets/images/glitterqueen.png"> 
      
      
      </div>
      
      
      <h1><a href="https://glitterqueencreative.ca" style="color: var(--faded-orange); text-decoration:none">Glitter Queen Creative:</a>  <br><strong style="font-size: 2rem; ">SEO that shines</strong></h1>
    
      <h2>About the Site</h2>
      <p>
        <strong>GlitterQueenCreative.ca</strong> is a vibrant e-commerce site built on WordPress + WooCommerce, featuring handcrafted jewelry by Canadian artist Emily Daft. With a focus on sparkle, expression, and individuality, the brand had visual flair—but struggled to reach organic traffic despite its quality offerings.
      </p>
    
      <h2>The Problems</h2>
      <ul>
        <li><strong>Low Search Visibility:</strong> The site had almost no keyword rankings or impressions in Google Search Console.</li>
        <li><strong>No Structured Data:</strong> Product pages lacked schema markup, leaving them out of rich results.</li>
        <li><strong>Weak Product Content:</strong> Descriptions were short, duplicated, or missing search intent alignment.</li>
        <li><strong>Unoptimized Meta Tags:</strong> Pages were missing or misusing key SEO fields like titles and meta descriptions.</li>
        <li><strong>Performance Issues:</strong> Slow page speeds and poor Core Web Vitals scores impacted UX and rankings.</li>
      </ul>
    
      <h2>My SEO Strategy</h2>
      <ul>
        <li><strong>Quick SEO Plugin:</strong> Installed and configured my custom plugin to give full control over meta tags, indexing, and schema markup within WooCommerce.</li>
        <li><strong>Schema for Every Product:</strong> Applied structured data to enable product-level rich results in search.</li>
        <li><strong>Content Rewrites:</strong> Optimized all product pages for long-tail keywords and emotional relevance.</li>
        <li><strong>Speed & CWV Optimization:</strong> Compressed images, reduced layout shift, and improved interaction metrics.</li>
        <li><strong>Technical Cleanup:</strong> Canonical tags, sitemap fixes, crawl enhancements, and indexation settings were overhauled.</li>
      </ul>
    
      <h2>The Results</h2>
      <p>
        Within five months, organic search visibility exploded. Impressions increased from <strong>124 to over 4,900</strong>, clicks rose to <strong>258</strong>, and average position climbed to <strong>17</strong>—with no paid ads. Key product pages began appearing in Google Shopping-style results thanks to rich schema markup, and overall site speed improved by more than 35%. Most importantly, Glitter Queen Creative finally found its audience.
      </p>
      <p>Click Below to compare before and after</p>
      <div style="width: 45%;" class="metrics-card-wrapper">
        <div class="flip-card">
          <div class="flip-card-inner">
      
            <!-- Front Side -->
            <div class="flip-card-front">
              <h2>GSC Metrics – March 2024</h2>
              <ul class="metrics-list">
                <li data-tooltip="Barely visible on Google">Clicks: 12</li>
                <li data-tooltip="No schema, poor indexing">Impressions: 124</li>
                <li data-tooltip="Low click-through rate">CTR: 1.2%</li>
                <li data-tooltip="Buried deep in results">Avg Position: 74</li>
              </ul>
            </div>
      
            <!-- Back Side -->
            <div class="flip-card-back">
              <h2>GSC Metrics – August 2024</h2>
              <ul class="metrics-list">
                <li data-tooltip="+215% improvement">Clicks: 258</li>
                <li data-tooltip="370% growth">Impressions: 4,923</li>
                <li data-tooltip="Increase is user engagement">CTR: 5.2%</li>
                <li data-tooltip="Climbed 57 Ranks">Avg Position: 17</li>
              </ul>
            </div>
      
          </div>
        </div>
      </div>
    
    
      <br>
      <br>
    
      <blockquote style="border-left: 4px solid var(--blood-orange); padding-left: 1rem; margin-top: 3rem;">
        <p style="font-style: italic;">"I knew how to make things sparkle—but Robert made sure people could find the glitter too. Traffic skyrocketed and I finally saw my jewelry getting discovered by people who actually wanted it. If you're a creative tired of being invisible on Google, you need Robert on your team."</p>
        <p style="text-align: right;"><strong>— Emily Daft, Founder of Glitter Queen Creative</strong></p>
      </blockquote>
    </section>
 
 

 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('glitter').innerHTML = glitterHTML
 });
};
insertGlitter();
function insertCash() {
 const cashHTML = `
   <section style="display: flex; flex-direction: column;" id="trustedcash">
    <div style="display: flex;">
      <img style="margin: auto; width: 80%;" src="/assets/images/trustedcashlogo.png" alt="Trusted Cash Loans Logo">
    </div>
  
    <h1><a href="https://trustedcashloans.com" style="color: var(--faded-orange); text-decoration:none">Trusted Cash Loans:</a><br>
      <strong style="font-size: 2rem;">From Launch to Lead Magnet</strong>
    </h1>
  
    <h2>About the Site</h2>
    <p>
      <strong>TrustedCashLoans.com</strong> is a U.S.-based financial blog and lead generation website focused on connecting users with trusted personal loan options. Designed and built entirely from scratch, it represents a fully self-coded SEO asset with no third-party builders or CMS tools involved.
    </p>
  
    <h2>Goals & Build</h2>
    <ul>
      <li><strong>Goal:</strong> Generate high-intent leads in the U.S. loan market through programmatic SEO targeting city- and state-level searches.</li>
      <li><strong>Tech Stack:</strong> Built entirely in <strong>Visual Studio Code</strong>, hosted with <strong>GitHub Pages</strong>, with content and site structure managed through <strong>custom Python scripts</strong> that auto-generate thousands of pages by city and loan type.</li>
      <li><strong>Ownership:</strong> 100% self-coded and self-owned. No WordPress. No templates. Total control.</li>
    </ul>
  
    <h2>SEO Strategy</h2>
    <ul>
      <li><strong>Programmatic SEO:</strong> Dynamically generated thousands of city+loan-type pages, each optimized for local relevance and long-tail keywords.</li>
      <li><strong>Invisible Keyword Embedding:</strong> Built-in long-tail keyword blocks for stealth authority boosts.</li>
      <li><strong>Custom Meta Tag & Schema Injection:</strong> All pages include dynamic meta titles, descriptions, and structured data injected via Python logic.</li>
      <li><strong>Speed-First Design:</strong> No bloat. Fast load times. Built for Google’s Core Web Vitals from the start.</li>
      <li><strong>Internal Linking:</strong> Clean sitemaps and smart anchor text to keep crawl depth shallow and link equity high.</li>
    </ul>
  
    <h2>The Results</h2>
    <p>
      From launch, Trusted Cash Loans outperformed expectations. In its first week alone, the site earned <strong>189 clicks</strong>, <strong>3,733 impressions</strong>, a <strong>4.9% CTR</strong>, and an average position of <strong>32</strong>. Within just six months, those numbers exploded: over <strong>2,000 clicks</strong>, <strong>32,965 impressions</strong>, CTR up to <strong>6.1%</strong>, and a <strong>top 10 average position</strong>.
    </p>
  
    <p>Click Below to compare before and after</p>
  
    <div style="width: 45%;" class="metrics-card-wrapper">
      <div class="flip-card">
        <div class="flip-card-inner">
          <!-- Front Side -->
          <div class="flip-card-front">
            <h2>GSC Metrics – First 7 Days</h2>
            <ul class="metrics-list">
              <li data-tooltip="Strong start">Clicks: 189</li>
              <li data-tooltip="Initial impressions">Impressions: 3,733</li>
              <li data-tooltip="Great first-week performance">CTR: 4.9%</li>
              <li data-tooltip="Page 3 on average">Avg Position: 32</li>
            </ul>
          </div>
  
          <!-- Back Side -->
          <div class="flip-card-back">
            <h2>GSC Metrics – 6 Months Post Launch</h2>
            <ul class="metrics-list">
              <li data-tooltip="950% increase">Clicks: 2,012</li>
              <li data-tooltip="Massive growth">Impressions: 32,965</li>
              <li data-tooltip="Optimized engagement">CTR: 6.1%</li>
              <li data-tooltip="Dominating top results">Avg Position: 9</li>
            </ul>
          </div>
  
        </div>
      </div>
    </div>
  
    <br><br>
  
    <blockquote style="border-left: 4px solid var(--blood-orange); padding-left: 1rem; margin-top: 3rem;">
      <p style="font-style: italic;">"I wasn’t sure where to turn for a loan, but Trusted Cash Loans made it incredibly easy. I found a lender in minutes, and the whole process was transparent and fast. Honestly? Lifesaver."</p>
      <p style="text-align: right;"><strong>— Amanda R., Verified Loan Recipient</strong></p>
    </blockquote>
  </section>

 `;
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('cash').innerHTML = cashHTML
 });
};
insertCash();





let currentSlide = 0;

function rotateCarousel(direction) {
  const track = document.getElementById("carousel-track");
  const totalSlides = track.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const offset = -100 * currentSlide;
  track.style.transform = `translateX(${offset}%)`;
}

// Optional: Keyboard arrow control
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') rotateCarousel(-1);
  if (e.key === 'ArrowRight') rotateCarousel(1);
});
