const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {

  if(event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if(activ) { 
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*Botão de orçamento */

const callBtn = document.getElementById('call-btn');

function siteOrcamento() {
  window.location.href = "https://api.whatsapp.com/send?phone=5527988116981";
}

callBtn.addEventListener('click', siteOrcamento);