// Initialize EmailJS (replace with your actual Public Key)
emailjs.init("IVdcbIrBfShbFsjSn");

// Navbar toggle and scroll code
let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};

// EmailJS form submission code
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(() => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message: " + error.text);
      });
  });
});let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});
