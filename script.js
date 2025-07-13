// script.js

// Mobile navigation toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth scroll for internal links
const smoothLinks = document.querySelectorAll("a[href^='#']");
smoothLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }

        // Close mobile menu on link click
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// Newsletter form submit handler
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = this.querySelector("input[type='email']");
        const email = emailInput.value.trim();

        if (email) {
            alert(`Thanks for subscribing with ${email}!`);
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
}

// Enquiry form submit handler
const enquiryForm = document.querySelector(".enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = this.querySelector("input[name='name']").value.trim();
        const email = this.querySelector("input[name='email']").value.trim();
        const message = this.querySelector("textarea[name='message']").value.trim();

        if (name && email && message) {
            alert(`Thank you ${name}, we will respond to your enquiry soon.`);
            this.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}

// Responsive resizing adjustments (optional placeholder)
window.addEventListener("resize", () => {
    // You can add custom behavior here for certain breakpoints if needed
});

// Animated Scroll Progress Bar
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
        
        // Check if sections are in view for animation
        animateSections();
    });
    
    // Function to animate sections when they come into view
    function animateSections() {
        const sections = document.querySelectorAll('section');
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.8;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerPoint) {
                section.classList.add('visible');
            }
        });
    }
    
    // Run once on page load
    animateSections();
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
            navButtons.classList.toggle('show');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('show');
            navButtons.classList.remove('show');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});