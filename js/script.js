// toggle icon navbar
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');
menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// Sélectionnez toutes les sections de votre page
var sections = document.querySelectorAll('section');
// Sélectionnez tous les liens de navigation dans la balise <nav>
var navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    var top = window.scrollY;
    //scroll
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    //activ sections
    sections.forEach(sec => {
        var offset = sec.offsetTop - 100;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // active sections for animationon scroll
            sec.classList.add('show-animate');
            
            
            var activeLink = document.querySelector('nav a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
            // if want to use animation that repeats on scroll use this
        }else {
            sec.classList.remove('show-animate');

        }

    });
    // remose toggle icon and navbar when click navbar lincks (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
