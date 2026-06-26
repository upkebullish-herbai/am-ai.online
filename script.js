/* ============================================
   AMAI.online — Shared JavaScript
   ============================================ */

// NAV SCROLL
(function() {
  var nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
})();

// HAMBURGER MENU
(function() {
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
  }
})();

function closeMobile() {
  var m = document.getElementById('mobileMenu');
  if (m) m.classList.remove('open');
}

// SCROLL REVEAL
(function() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(function(el) { observer.observe(el); });
})();

// CONTACT FORM
function handleSubmit(e) {
  e.preventDefault();
  var btn = e.target;
  btn.textContent = '✓ Verstuurd! We nemen snel contact op.';
  btn.style.background = '#10B981';
  btn.disabled = true;
}
