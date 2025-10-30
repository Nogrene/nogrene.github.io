// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Form validation and submission


// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Add animation classes to skill cards
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});


document.addEventListener("DOMContentLoaded", () => { const hamburger = document.querySelector(".hamburger"); const navLinks = document.querySelector(".nav-links"); const navItems = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
    
    });
    
    
// Prevent pasting into input and textarea fields
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("paste", (e) => {
            e.preventDefault();
            alert("Dave does not allow pasting on his page😛🙃");
        });
    });
});


//dark mode//
const themeToggle = document.getElementById('dark-light');
const PrefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)');

//check for saved theme preference//
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light' || (!currentTheme && PrefersDarkScheme.matches)) {
    document.body.setAttribute('data-theme', 'light');    
} 

themeToggle.addEventListener('click',() =>{
    let theme;
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        theme = 'light';   
    } else {
        document.body.setAttribute('data-theme', 'dark');
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

//google sheets//

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4jQ5l8IJkhn6VqOlE6kF4M8l50UqJaDlxEBggoOVHs3h-kJ38ecauX9v6xHyorbf0ow/exec'; // paste the URL from deployment
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
  
      fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => alert('Message sent to Dave successfully! Wait for reply'))
      .catch(error => alert('Error sending message'));
    });
