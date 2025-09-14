// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button and corresponding panel
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.company || !data.name || !data.email) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Merci pour votre demande ! Notre équipe vous contactera dans les 24h pour planifier votre audit gratuit.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const isSlash = target.includes('/');
        
        let finalNumber;
        if (isPercentage) {
            finalNumber = parseFloat(target.replace('%', ''));
        } else if (isPlus) {
            finalNumber = parseInt(target.replace('+', ''));
        } else if (isSlash) {
            finalNumber = target; // Keep as is for 24/7
        } else {
            finalNumber = parseInt(target);
        }
        
        if (typeof finalNumber === 'number') {
            let current = 0;
            const increment = finalNumber / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalNumber) {
                    current = finalNumber;
                    clearInterval(timer);
                }
                
                if (isPercentage) {
                    counter.textContent = Math.floor(current) + '%';
                } else if (isPlus) {
                    counter.textContent = Math.floor(current) + '+';
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 30);
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation when stats section is visible
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .client-card, .solution-content, .hero-stats');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#2563eb';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = '#f3f4f6';
    });
});

// Add click tracking for CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        // Track button clicks for analytics
        console.log('CTA clicked:', btn.textContent);
    });
});

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add loading states for form submissions
function showLoadingState(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    return () => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    };
}

// Enhanced form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    return isValid;
}

// Add real-time form validation
document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    field.addEventListener('input', () => {
        if (field.value.trim()) {
            field.style.borderColor = '#10b981';
        }
    });
});
