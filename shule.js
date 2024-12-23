const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && e.target !== menuIcon) {
        menu.style.display = 'none';
    }
});