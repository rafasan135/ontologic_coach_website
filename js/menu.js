const toggleMenuElement = document.getElementById('toggle_menu');
const mainMenuElement = document.getElementById('menu');
const inicioLinkElement = document.getElementById('menu_inicio');
const serviciosLinkElement = document.getElementById('menu_servicios');
const sobreMiLinkElement = document.getElementById('menu_sobremi');
const contactoLinkElement = document.getElementById('menu_contacto');
const blogLinkElement = document.getElementById('menu_blog');

toggleMenuElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

inicioLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

serviciosLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

sobreMiLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

contactoLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});

blogLinkElement.addEventListener('click', ()=>{
mainMenuElement.classList.toggle('menu--show');
});