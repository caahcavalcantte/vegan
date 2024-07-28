// Menu hamburguer

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuNav = document.getElementById('menu-nav');

  menuToggle.addEventListener('click', function() {
    menuNav.classList.toggle('active');
  });
});



