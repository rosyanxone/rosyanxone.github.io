const menuToggle = document.getElementById('menTog');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => nav.classList.toggle('slide'));