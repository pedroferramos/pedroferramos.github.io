async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const res = await fetch(path);
    const html = await res.text();
    el.innerHTML = html;

    if (path.includes('nav.html')) {
      const current = window.location.pathname.split('/').pop() || 'index.html';
      const links = el.querySelectorAll('a[data-nav]');
      links.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === current) {
          link.classList.add('active');
        }
      });
    }
  } catch (err) {
    console.error('Failed to load ' + path, err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  includeHTML('#nav-placeholder', '/partials/nav.html');
  includeHTML('#footer-placeholder', '/partials/footer.html');
});