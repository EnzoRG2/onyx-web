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
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Portfolio modal functionality
function openPortfolio(type) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <h2>${getPortfolioTitle(type)}</h2>
                <div class="portfolio-details">
                    ${getPortfolioContent(type)}
                </div>
                <div class="modal-actions">
                    <a href="${getPortfolioLink(type)}" class="btn btn-primary" target="_blank">Voir le site</a>
                    <button class="btn btn-secondary close-modal-btn">Fermer</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .portfolio-modal {
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
            padding: 3rem;
        }
        
        .modal-body h2 {
            color: #000;
            margin-bottom: 1.5rem;
            text-align: center;
        }
        
        .portfolio-details {
            margin-bottom: 2rem;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
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
            .modal-content {
                width: 95%;
                margin: 20px;
            }
            
            .modal-body {
                padding: 2rem;
            }
            
            .modal-actions {
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
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function getPortfolioTitle(type) {
    const titles = {
        'b2b': 'Site Vitrine B2B - Solution Professionnelle',
        'b2c': 'Site Vitrine B2C - Approche Client Moderne',
        'ecommerce': 'E-commerce - Boutique en Ligne Complète',
        'restaurant': 'Restaurant Festif - Ambiance Chaleureuse',
        'bar': 'Bar Moderne - Atmosphère Conviviale',
        'gym': 'Salle de Sport - Motivation et Performance'
    };
    return titles[type] || 'Portfolio';
}

function getPortfolioContent(type) {
    const contents = {
        'b2b': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop" alt="Site B2B" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques du site B2B :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Design professionnel et épuré</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Présentation des services détaillée</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Témoignages clients</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Formulaire de devis en ligne</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Optimisation SEO avancée</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Ce site vitrine B2B a été conçu pour mettre en valeur l'expertise et la crédibilité de l'entreprise. 
                    L'interface claire et professionnelle facilite la navigation et encourage les prospects à prendre contact.
                </p>
            </div>
        `,
        'b2c': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Site B2C" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques du site B2C :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Interface utilisateur intuitive</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Galerie produits/services</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Système de réservation en ligne</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Intégration réseaux sociaux</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Design responsive optimisé</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Ce site B2C privilégie l'expérience utilisateur avec une navigation fluide et des fonctionnalités 
                    qui facilitent l'interaction avec les clients finaux.
                </p>
            </div>
        `,
        'ecommerce': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" alt="E-commerce" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques de l'e-commerce :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Catalogue produits complet</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Panier et processus de commande</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Paiements sécurisés</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Gestion des stocks</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Espace client</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Cette boutique en ligne offre une expérience d'achat complète avec toutes les fonctionnalités 
                    nécessaires pour vendre efficacement en ligne.
                </p>
            </div>
        `,
        'restaurant': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" alt="Restaurant" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques du site restaurant :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Menu interactif avec photos</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Réservation de table en ligne</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Galerie d'ambiance</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Informations pratiques</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Intégration Google Maps</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Ce site de restaurant met en valeur l'ambiance et la cuisine avec un design chaleureux qui 
                    invite les clients à découvrir l'établissement.
                </p>
            </div>
        `,
        'bar': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=600&h=400&fit=crop" alt="Bar" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques du site bar :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Carte des boissons détaillée</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Événements et soirées</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Ambiance nocturne</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Programmation musicale</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Réseaux sociaux intégrés</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Ce site de bar capture l'atmosphère conviviale et festive avec un design moderne qui reflète 
                    l'identité unique de l'établissement.
                </p>
            </div>
        `,
        'gym': `
            <div class="portfolio-preview">
                <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" alt="Salle de Sport" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <h3>Caractéristiques du site salle de sport :</h3>
                <ul style="list-style: none; padding: 0;">
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Présentation des équipements</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Planning des cours</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Inscription en ligne</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Témoignages membres</li>
                    <li><i class="fas fa-check" style="color: #D4AF37; margin-right: 0.5rem;"></i> Espace membre</li>
                </ul>
                <p style="margin-top: 1rem; color: #666; line-height: 1.6;">
                    Ce site de salle de sport motive et inspire avec un design énergique qui met en valeur 
                    les installations et l'ambiance motivante du club.
                </p>
            </div>
        `
    };
    return contents[type] || '<p>Contenu non disponible</p>';
}

function getPortfolioLink(type) {
    // These would be actual links to the portfolio sites
    const links = {
        'b2b': 'portfolio/b2b.html',
        'b2c': 'portfolio/b2c.html',
        'ecommerce': 'portfolio/ecommerce.html',
        'restaurant': 'portfolio/restaurant.html',
        'bar': 'portfolio/bar.html',
        'gym': 'portfolio/gym.html'
    };
    return links[type] || '#';
}

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
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
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .pricing-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
