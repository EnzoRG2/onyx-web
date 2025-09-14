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
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.2)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Cocktail recipe modal functionality
document.querySelectorAll('.view-recipe').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cocktailCard = btn.closest('.cocktail-card');
        const cocktailName = cocktailCard.querySelector('h3').textContent;
        const cocktailDescription = cocktailCard.querySelector('.cocktail-description').textContent;
        const cocktailPrice = cocktailCard.querySelector('.cocktail-price').textContent;
        
        showRecipeModal(cocktailName, cocktailDescription, cocktailPrice);
    });
});

function showRecipeModal(name, description, price) {
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <h2>${name}</h2>
                <div class="recipe-info">
                    <div class="recipe-price">${price}</div>
                    <div class="recipe-description">${description}</div>
                </div>
                <div class="recipe-details">
                    <h3>Ingrédients :</h3>
                    <ul class="ingredients-list">
                        ${getIngredientsList(name)}
                    </ul>
                    <h3>Préparation :</h3>
                    <ol class="preparation-steps">
                        ${getPreparationSteps(name)}
                    </ol>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-primary close-modal-btn">Fermer</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .recipe-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            border-radius: 20px;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
            border: 1px solid rgba(0, 255, 255, 0.3);
        }
        
        .close-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 2rem;
            cursor: pointer;
            color: #00ffff;
            z-index: 10001;
            background: rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body {
            padding: 3rem;
            color: #fff;
        }
        
        .modal-body h2 {
            color: #00ffff;
            margin-bottom: 1rem;
            text-align: center;
            text-shadow: 0 0 10px #00ffff;
        }
        
        .recipe-info {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .recipe-price {
            font-size: 1.5rem;
            color: #00ffff;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }
        
        .recipe-description {
            color: #ccc;
            font-style: italic;
        }
        
        .recipe-details h3 {
            color: #00ffff;
            margin-bottom: 1rem;
            margin-top: 2rem;
        }
        
        .ingredients-list {
            list-style: none;
            padding: 0;
            margin-bottom: 1rem;
        }
        
        .ingredients-list li {
            padding: 0.5rem 0;
            color: #ccc;
            border-bottom: 1px solid rgba(0, 255, 255, 0.2);
        }
        
        .ingredients-list li:before {
            content: '•';
            color: #00ffff;
            margin-right: 0.5rem;
        }
        
        .preparation-steps {
            color: #ccc;
            padding-left: 1.5rem;
        }
        
        .preparation-steps li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }
        
        .modal-actions {
            text-align: center;
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
                padding: 2rem;
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
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function getIngredientsList(cocktailName) {
    const ingredients = {
        'Neon Dream': [
            '50ml Vodka premium',
            '25ml Liqueur de violette',
            '20ml Jus de citron vert',
            '15ml Sirop de sucre',
            'Glaçons',
            'Fleur de violette pour la décoration'
        ],
        'Electric Blue': [
            '50ml Gin premium',
            '25ml Curaçao bleu',
            '20ml Jus de citron',
            'Soda tonic',
            'Glaçons fumants',
            'Zeste de citron'
        ],
        'Cyber Punk': [
            '50ml Rhum blanc',
            '25ml Liqueur de café',
            '20ml Crème de coco',
            '15ml Sirop d\'érable',
            'Piment rouge',
            'Glaçons'
        ],
        'Matrix Martini': [
            '60ml Vodka premium',
            '10ml Vermouth sec',
            '5ml Liqueur de menthe',
            'Olives vertes',
            'Glaçons',
            'Zeste de citron'
        ],
        'Hologram': [
            '50ml Tequila reposado',
            '25ml Triple sec',
            '20ml Jus de citron vert',
            '15ml Sirop d\'agave',
            'Sel de mer',
            'Glaçons'
        ],
        'Digital Sunset': [
            '50ml Whisky premium',
            '25ml Amaretto',
            '30ml Jus d\'orange',
            '10ml Grenadine',
            'Cerise au marasquin',
            'Glaçons'
        ]
    };
    
    const cocktailIngredients = ingredients[cocktailName] || ['Ingrédients non disponibles'];
    return cocktailIngredients.map(ingredient => `<li>${ingredient}</li>`).join('');
}

function getPreparationSteps(cocktailName) {
    const steps = {
        'Neon Dream': [
            'Versez tous les ingrédients dans un shaker avec des glaçons',
            'Shakez vigoureusement pendant 15 secondes',
            'Double-strainez dans un verre à cocktail refroidi',
            'Décorez avec une fleur de violette',
            'Servez immédiatement'
        ],
        'Electric Blue': [
            'Remplissez un verre highball de glaçons',
            'Versez le gin et le curaçao bleu',
            'Ajoutez le jus de citron',
            'Complétez avec le soda tonic',
            'Mélangez délicatement et décorez avec un zeste de citron'
        ],
        'Cyber Punk': [
            'Mélangez tous les ingrédients dans un shaker',
            'Ajoutez quelques glaçons et shakez',
            'Versez dans un verre à cocktail',
            'Saupoudrez légèrement de piment rouge',
            'Servez avec une paille'
        ],
        'Matrix Martini': [
            'Mélangez la vodka et le vermouth dans un verre à mélange',
            'Ajoutez des glaçons et mélangez',
            'Versez dans un verre à martini refroidi',
            'Ajoutez quelques gouttes de liqueur de menthe',
            'Décorez avec une olive verte'
        ],
        'Hologram': [
            'Rimmez le verre avec du sel de mer',
            'Mélangez tous les ingrédients dans un shaker',
            'Shakez avec des glaçons',
            'Versez dans le verre préparé',
            'Décorez avec une rondelle de citron vert'
        ],
        'Digital Sunset': [
            'Remplissez un verre de glaçons',
            'Versez le whisky et l\'amaretto',
            'Ajoutez le jus d\'orange',
            'Ajoutez la grenadine en dernier',
            'Décorez avec une cerise au marasquin'
        ]
    };
    
    const cocktailSteps = steps[cocktailName] || ['Préparation non disponible'];
    return cocktailSteps.map(step => `<li>${step}</li>`).join('');
}

// Reservation form handling
document.querySelector('.reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.phone || !data.date || !data.time) {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Check if date is in the future
    const selectedDate = new Date(data.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('Veuillez sélectionner une date future.', 'error');
        return;
    }
    
    // Simulate reservation submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Réservation en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Réservation confirmée ! Nous vous contacterons pour confirmer les détails.', 'success');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Contact form handling
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
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
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            border: 1px solid rgba(0, 255, 255, 0.3);
        }
        
        .notification-success {
            border-left: 4px solid #00ffff;
        }
        
        .notification-error {
            border-left: 4px solid #ff00ff;
        }
        
        .notification-info {
            border-left: 4px solid #00ffff;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem 1.5rem;
            color: #fff;
        }
        
        .notification-content i {
            font-size: 1.2rem;
        }
        
        .notification-success .notification-content i {
            color: #00ffff;
        }
        
        .notification-error .notification-content i {
            color: #ff00ff;
        }
        
        .notification-info .notification-content i {
            color: #00ffff;
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

// Set minimum date for reservation form
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
});

// Add hover effects to cocktail cards
document.querySelectorAll('.cocktail-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'rgba(0, 255, 255, 0.5)';
        card.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'rgba(0, 255, 255, 0.2)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
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
    const animatedElements = document.querySelectorAll('.feature-card, .cocktail-card, .event-item, .ambiance-card');
    
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
            field.style.borderColor = '#ff00ff';
            isValid = false;
        } else {
            field.style.borderColor = 'rgba(0, 255, 255, 0.3)';
        }
    });
    
    return isValid;
}

// Add real-time form validation
document.querySelectorAll('.reservation-form input, .reservation-form select, .reservation-form textarea').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#ff00ff';
        } else {
            field.style.borderColor = 'rgba(0, 255, 255, 0.3)';
        }
    });
    
    field.addEventListener('input', () => {
        if (field.value.trim()) {
            field.style.borderColor = '#00ffff';
        }
    });
});

// Add keyboard navigation for events
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        const nextEvent = document.querySelector('.event-item:hover + .event-item');
        if (nextEvent) {
            nextEvent.scrollIntoView({ behavior: 'smooth' });
        }
    } else if (e.key === 'ArrowUp') {
        const prevEvent = document.querySelector('.event-item:hover').previousElementSibling;
        if (prevEvent && prevEvent.classList.contains('event-item')) {
            prevEvent.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.cocktails-grid').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.cocktails-grid').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could implement cocktail carousel
            console.log('Swipe left detected');
        } else {
            // Swipe right - could implement cocktail carousel
            console.log('Swipe right detected');
        }
    }
}
