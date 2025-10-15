document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const pages = document.querySelectorAll('.page');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === targetId) {
          page.classList.add('active');
        }
      });
    });
  });
});
