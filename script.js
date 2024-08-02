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

// Formulário Validação

const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

form.addEventListener('submit', (event) => {
    let campoValid = true;

    if(!nameValidate()) campoValid = false;
    if(!pessoasValidate()) campoValid = false;;
    if(!dataValidate()) campoValid = false;;
    if(!horaValidate()) campoValid = false;;

    if (!campoValid) {
        event.preventDefault();
    }
});


// Função validar error
function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';

}

// Função remover error
function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 7)
    {
        setError(0);
        return false;
    }
    else
    {
        removeError(0);
        return true;
    }
};

function pessoasValidate(){
    const pessoas = campos[1].value;
    if(pessoas === '0')
        {
            setError(1);
            return false;
    }
    else
    {
        removeError(1);
        return true;
    }
};

function dataValidate(){
    const data = campos[2].value;
    const dataRegex =  /^\d{2}\/\d{2}\/\d{4}$/;

    if(!dataRegex.test(data))
        {
            setError(2);
            return false;
    }
    else
    {
        removeError(2);
        return true;
    }
};

function horaValidate(){
    const hora = campos[3].value;

    if(hora === '0')
        {
            setError(3);
            return false;
    }
    else
    {
        removeError(3);
        return true;
    }
};









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













