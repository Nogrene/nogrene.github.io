// Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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

// Form validation and submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const scriptURL = 'https://script.google.com/macros/s/AKfycbw4jQ5l8IJkhn6VqOlE6kF4M8l50UqJaDlxEBggoOVHs3h-kJ38ecauX9v6xHyorbf0ow/exec';

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        let isValid = true;
        
        // Reset errors
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
        });
        
        // Validate name
        if (!name.value.trim()) {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        // Validate message
        if (!message.value.trim()) {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const data = Object.fromEntries(new FormData(contactForm).entries());

            fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(response => {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                contactForm.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;

                // Hide success message and show the form again after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                    contactForm.style.display = 'block';
                }, 5000);
            })
            .catch(error => {
                alert('Error sending message');
                console.error('Error:', error);
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Observe skill cards with staggered delay
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('dark-light');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.setAttribute('data-theme', 'dark');
} else {
    document.body.removeAttribute('data-theme');
}

themeToggle.addEventListener('click', () => {
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
