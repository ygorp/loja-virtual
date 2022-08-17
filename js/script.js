const btnMobile = document.getElementById('hamburguer');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classlist.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);