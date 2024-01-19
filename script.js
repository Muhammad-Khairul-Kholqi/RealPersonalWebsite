 document.getElementById('hamburger').addEventListener('click', function () {
     var nav = document.querySelector('.navbar nav');
     nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
 });