// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Destination filter (Home page)
const filters = document.getElementById('filters');
if (filters) {
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    filters.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('#destGrid .card').forEach((card) => {
      card.classList.toggle('hidden', f !== 'all' && card.dataset.cat !== f);
    });
  });
}

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const error = document.getElementById('formError');
    const status = document.getElementById('formStatus');
    status.textContent = '';
    if (!name || !message) { error.textContent = 'Please enter your name and a message.'; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = 'Please enter a valid email address.'; return; }
    error.textContent = '';
    status.textContent = `Thank you, ${name}! We will reply to ${email} soon.`;
    form.reset();
  });
}
