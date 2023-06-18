const header = document.getElementById('header');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    header.classList.toggle('mb-active');
});