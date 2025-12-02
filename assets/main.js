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

// Modal interactions
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('[data-modal-target]');
const modalClosers = document.querySelectorAll('[data-close-modal]');

const openModal = (modal) => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  const content = modal.querySelector('.modal-content');
  if (content instanceof HTMLElement) {
    content.focus({ preventScroll: true });
  }
};

const closeModal = (modal) => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

modalTriggers.forEach((trigger) => {
  const targetId = trigger.getAttribute('data-modal-target');
  if (!targetId) return;
  const modal = document.getElementById(targetId);
  if (!modal) return;

  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openModal(modal);
  });
});

modalClosers.forEach((closer) => {
  closer.addEventListener('click', () => {
    const modal = closer.closest('.modal');
    if (modal) closeModal(modal);
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modals.forEach((modal) => {
      if (modal.classList.contains('show')) closeModal(modal);
    });
  }
});
