/* components.js — injects nav and footer into every page */

(function () {
  const page = document.body.dataset.page || '';

  function navLink(href, label) {
    const active = page === label.toLowerCase() ? ' class="active"' : '';
    return `<li><a href="${href}"${active}>${label}</a></li>`;
  }

  // ── NAV ──
  document.getElementById('navMount').innerHTML = `
<nav class="nav" id="mainNav">
  <a href="/index.html" class="nav-logo">
    MC<span>C</span>
    <div class="nav-logo-div"></div>
    <div class="nav-logo-name">McCallum<br>Creative</div>
  </a>
  <ul class="nav-links">
    ${navLink('/work.html','Work')}
    ${navLink('/services.html','Services')}
    ${navLink('/about.html','About')}
    ${navLink('/contact.html','Contact')}
  </ul>
  <div class="nav-right">
    <a href="/index.html#reel" class="nav-reel"><div class="reel-dot"></div>Reel</a>
    <a href="/contact.html" class="nav-cta">Start a Project</a>
    <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/work.html"     onclick="closeMenu()">Work</a>
  <a href="/services.html" onclick="closeMenu()">Services</a>
  <a href="/about.html"    onclick="closeMenu()">About</a>
  <a href="/contact.html"  onclick="closeMenu()">Contact</a>
  <div class="mobile-menu-cta">
    <a href="/contact.html" class="btn btn-teal" onclick="closeMenu()">Start a Project</a>
  </div>
</div>`;

  // ── FOOTER ──
  document.getElementById('footerMount').innerHTML = `
<footer>
  <div class="footer-logo">MC<span>C</span> — McCallum Creative Co.</div>
  <div class="footer-links">
    <a href="/work.html">Work</a>
    <a href="/services.html">Services</a>
    <a href="/about.html">About</a>
    <a href="/contact.html">Contact</a>
  </div>
  <div class="footer-copy">© 2024 McCallum Creative Co. All rights reserved.</div>
</footer>`;
})();
