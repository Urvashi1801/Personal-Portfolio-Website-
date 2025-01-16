/*--------------------- HOME ---------------------- */

var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*--------------- TOGGLE ICON NAVBAR ----------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/*---------- SCROLL SECTION ACTIVE LINK-----------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*---------- STICKY NAVBAR  -----------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*---------- REMOVE TOGGLE ICON AND NAVBAR -----------------*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*---------- SCROLL REVEAL -----------------*/
ScrollReveal({
    distance: '90px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


/*------------ ABOUT SECTION TABS -----------------*/

function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    console.log(tabname);
    console.log(tablinks);
    console.log(tabcontents);
    for (let tablink of tablinks) {
        console.log(tablink);
        tablink.classList.remove("active-link"); // Corrected to classList
    }
    for (let tabcontent of tabcontents) {
        console.log(tabcontent);
        tabcontent.classList.remove("active-tab"); // Corrected to classList
    }

    // Ensure "event" is lowercase
    event.currentTarget.classList.add("active-link"); // Corrected to classList
    document.getElementById(tabname).classList.add("active-tab"); // Corrected to classList

}


