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

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Slider controls
document.querySelector('.next-slide').addEventListener('click', nextSlide);
document.querySelector('.prev-slide').addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Product filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter products
        document.querySelectorAll('.product-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add to cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Add animation
        cartCountElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCountElement.style.transform = 'scale(1)';
        }, 200);
        
        // Show success message
        showNotification('Produit ajouté au panier !', 'success');
    });
});

// Quick view functionality
document.querySelectorAll('.quick-view').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        const productImage = productCard.querySelector('img').src;
        
        showQuickView(productName, productPrice, productImage);
    });
});

function showQuickView(name, price, image) {
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="product-image">
                    <img src="${image}" alt="${name}">
                </div>
                <div class="product-details">
                    <h3>${name}</h3>
                    <div class="product-price">${price}</div>
                    <p>Découvrez ce produit éthique et durable, fabriqué avec des matériaux recyclés.</p>
                    <div class="product-actions">
                        <button class="btn btn-primary add-to-cart-modal">Ajouter au panier</button>
                        <button class="btn btn-secondary close-modal-btn">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .quick-view-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: #fff;
            border-radius: 20px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
            z-index: 10001;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .product-image img {
            width: 100%;
            border-radius: 10px;
        }
        
        .product-details h3 {
            color: #1f2937;
            margin-bottom: 1rem;
        }
        
        .product-price {
            font-size: 1.5rem;
            color: #10b981;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .product-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
            }
            
            .product-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(modalStyles);
    
    // Close modal functionality
    const closeModal = () => {
        modal.remove();
        modalStyles.remove();
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.querySelector('.close-modal-btn').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Add to cart from modal
    modal.querySelector('.add-to-cart-modal').addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        showNotification('Produit ajouté au panier !', 'success');
        closeModal();
    });
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Merci pour votre abonnement !', 'success');
        this.reset();
    }
});

// Contact form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    if (data.name && data.email && data.message) {
        showNotification('Message envoyé avec succès !', 'success');
        this.reset();
    } else {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
    }
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
            border-left: 4px solid #10b981;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
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
            color: #10b981;
        }
        
        .notification-error .notification-content i {
            color: #ef4444;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(notificationStyles);
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
            notificationStyles.remove();
        }, 300);
    }, 3000);
}

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length > 2) {
        document.querySelectorAll('.product-card').forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDesc = card.querySelector('.product-description').textContent.toLowerCase();
            
            if (productName.includes(searchTerm) || productDesc.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    } else if (searchTerm.length === 0) {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.display = 'block';
        });
    }
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
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .commitment-card, .about-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = '#10b981';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'transparent';
    });
});

// Add click tracking for analytics
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
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
document.querySelectorAll('.contact-form input, .contact-form textarea').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#ef4444';
        } else {
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    field.addEventListener('input', () => {
        if (field.value.trim()) {
            field.style.borderColor = '#10b981';
        }
    });
});
