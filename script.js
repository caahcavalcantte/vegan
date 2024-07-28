// Menu hamburguer

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuNav = document.getElementById('menu-nav');
  const menuLinks = menuNav.querySelectorAll('a'); 

  
  menuToggle.addEventListener('click', function() {
      menuNav.classList.toggle('active');
  });


  menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          menuNav.classList.remove('active');
      });
  });
});



