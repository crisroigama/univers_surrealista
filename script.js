const menuIcono = document.querySelector('.menu-icono');
const menuLista = document.querySelector('.menu-lista');

menuIcono.addEventListener('click', () => {
  menuLista.style.display = menuLista.style.display === 'flex' ? 'none' : 'flex';
});