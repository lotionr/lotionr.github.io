// ── Navbar scroll effect ──────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Mobile nav toggle ─────────────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ── Scroll-reveal ─────────────────────────────────────────────────────────────
const revealTargets = [
  { selector: '.timeline-item', delay: 120 },
  { selector: '.project-card',  delay: 80  },
];

function reveal() {
  revealTargets.forEach(({ selector, delay }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        setTimeout(() => el.classList.add('visible'), i * delay);
      }
    });
  });
}

window.addEventListener('scroll', reveal, { passive: true });
reveal(); // run once on load

// ── Active nav link highlighting ──────────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function highlightNav() {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}`
      ? 'var(--gold)'
      : '';
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });
highlightNav();
