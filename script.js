document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburgerIcon.addEventListener('click', function () {
        console.log('Hamburger Clicked');
        navbar.style.display = (navbar.style.display === 'none' || navbar.style.display === '') ? 'flex' : 'none';
    });
});
