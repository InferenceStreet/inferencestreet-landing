const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const currentYear = document.getElementById('current-year');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('show');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.tagName === 'A') {
      navLinks.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Smooth scrolling enhancement
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      targetElement.focus({ preventScroll: true });
    }
  });
});
