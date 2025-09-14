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

// Classes tabs functionality
document.querySelectorAll('.class-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active class from all tabs and categories
        document.querySelectorAll('.class-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.class-category').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding category
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Contact form handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.phone) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Demande envoyée avec succès ! Nous vous contacterons dans les 24h pour planifier votre visite gratuite.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        }
        
        .notification-success {
            border-left: 4px solid #e74c3c;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-info {
            border-left: 4px solid #e74c3c;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        .notification-success .notification-content i {
            color: #e74c3c;
        }
        
        .notification-error .notification-content i {
            color: #ef4444;
        }
        
        .notification-info .notification-content i {
            color: #e74c3c;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(notificationStyles);
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
            notificationStyles.remove();
        }, 300);
    }, 4000);
}

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#e74c3c';
        card.style.borderWidth = '2px';
        card.style.borderStyle = 'solid';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
        card.style.borderWidth = '0';
    });
});

// Add hover effects to class cards
document.querySelectorAll('.class-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#e74c3c';
        card.style.borderWidth = '2px';
        card.style.borderStyle = 'solid';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
        card.style.borderWidth = '0';
    });
});

// Add hover effects to trainer cards
document.querySelectorAll('.trainer-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#e74c3c';
        card.style.borderWidth = '2px';
        card.style.borderStyle = 'solid';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
        card.style.borderWidth = '0';
    });
});

// Add click tracking for CTA buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('CTA clicked:', btn.textContent);
    });
});

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
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .class-card, .trainer-card, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
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
            field.style.borderColor = '#e5e7eb';
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
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    field.addEventListener('input', () => {
        if (field.value.trim()) {
            field.style.borderColor = '#e74c3c';
        }
    });
});

// Add keyboard navigation for classes
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        const activeTab = document.querySelector('.class-tab.active');
        const prevTab = activeTab.previousElementSibling;
        if (prevTab && prevTab.classList.contains('class-tab')) {
            prevTab.click();
        }
    } else if (e.key === 'ArrowRight') {
        const activeTab = document.querySelector('.class-tab.active');
        const nextTab = activeTab.nextElementSibling;
        if (nextTab && nextTab.classList.contains('class-tab')) {
            nextTab.click();
        }
    }
});

// Add touch/swipe support for mobile classes
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.classes-tabs').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.classes-tabs').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next tab
            const activeTab = document.querySelector('.class-tab.active');
            const nextTab = activeTab.nextElementSibling;
            if (nextTab && nextTab.classList.contains('class-tab')) {
                nextTab.click();
            }
        } else {
            // Swipe right - previous tab
            const activeTab = document.querySelector('.class-tab.active');
            const prevTab = activeTab.previousElementSibling;
            if (prevTab && prevTab.classList.contains('class-tab')) {
                prevTab.click();
            }
        }
    }
}

// Add animation to pricing cards on hover
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('featured')) {
            card.style.transform = 'scale(1.05)';
        } else {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Add click animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyles);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(45deg, #e74c3c, #f39c12);
    z-index: 10001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add lazy loading for images
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
