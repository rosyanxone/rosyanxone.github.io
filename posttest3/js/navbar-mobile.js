// manipulasi DOM
const menuToggle = document.getElementById('menTog');
const nav = document.querySelector('nav ul');

// penggunaan addEventListener
menuToggle.addEventListener('click', () => nav.classList.toggle('slide'));