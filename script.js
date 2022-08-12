//função para menu mobile

$(document).ready(function() {
  $('.sidenav').sidenav();
})

//função botão visitar loja

const url = 'https://shopee.com.br/ygor721804?v=bd3&smtt=0.0.3'
const btnLoja = document.querySelector('#btn-loja')

function lojaVirtual(url) {
  const novaJanela = window.open(url, '_blank')
  novaJanela.focus()
}

btnLoja.addEventListener('click', () => {
  lojaVirtual(url)
})

//função scrool para inicio da tela

const scrollAnima = document.querySelector('[data-anima="scroll"]');
const metadeWindow = window.innerHeight * 2.5

function animaScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top

  const itemVisivel = topoItem - metadeWindow < 0

  if(itemVisivel) {
    scrollAnima.classList.add('show-button')
  } else {
    scrollAnima.classList.remove('show-button')
  }
}

window.addEventListener('scroll', animaScroll)