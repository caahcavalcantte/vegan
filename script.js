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


// instagram
const imagem = document.querySelector('.rede-insta img');

const svgOriginal = 'images/square-instagram-brands-solid (2).svg';
const svgHover = 'images/square-instagram-brands-solid.svg';


imagem.addEventListener('mouseover', function(){
    this.src = svgHover;
});

imagem.addEventListener('mouseout', function(){
    this.src = svgOriginal;
});

// facebook
const imagemFacebook = document.querySelector('.rede-face img');

const svgOriginalFacebook = 'images/square-facebook-brands-solid (2).svg';
const svgHoverFacebook = 'images/square-facebook-brands-solid.svg';

imagemFacebook.addEventListener('mouseover', function() {
    this.src = svgHoverFacebook;
});

imagemFacebook.addEventListener('mouseout', function() {
    this.src = svgOriginalFacebook;
});

// whatsapp
const imagemWhats = document.querySelector('.rede-whats img');

const svgOriginalWhats = 'images/square-whatsapp-brands-solid (2).svg';
const svgHoverWhats = 'images/square-whatsapp-brands-solid.svg';

imagemWhats.addEventListener('mouseover', function() {
    this.src = svgHoverWhats;
});

imagemWhats.addEventListener('mouseout', function() {
    this.src = svgOriginalWhats;
});

// linkedin
const imagemLink = document.querySelector('.rede-link img');

const svgOriginalLink = 'images/linkedin-brands-solid (2).svg';
const svgHoverLink = 'images/linkedin-brands-solid.svg';

imagemLink.addEventListener('mouseover', function() {
    this.src = svgHoverLink;
});

imagemLink.addEventListener('mouseout', function() {
    this.src = svgOriginalLink;
});













