document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.navbar-toggler').forEach((button) => {
  button.addEventListener('click', () => {
    if (window.bootstrap) return;
    const target = document.querySelector(button.getAttribute('data-bs-target'));
    if (!target) return;
    const expanded = target.classList.toggle('show');
    button.setAttribute('aria-expanded', String(expanded));
  });
});

document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-collapse.show');
    if (menu && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
