// Sample products data - LDLC inspired
const products = [
    // Apple Products
    {
        id: 'iphone-15-pro',
        name: 'iPhone 15 Pro 128GB',
        description: 'Le smartphone le plus avancé d\'Apple avec le nouveau processeur A17 Pro',
        price: 1199,
        originalPrice: 1299,
        category: 'apple',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        rating: 4.8,
        reviews: 156,
        badge: 'sale',
        brand: 'Apple'
    },
    {
        id: 'macbook-pro-m3',
        name: 'MacBook Pro 14" M3',
        description: 'Performance exceptionnelle pour les professionnels créatifs',
        price: 2199,
        originalPrice: 2499,
        category: 'apple',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        rating: 4.9,
        reviews: 234,
        badge: 'sale',
        brand: 'Apple'
    },
    {
        id: 'airpods-pro',
        name: 'AirPods Pro (2ème génération)',
        description: 'Écouteurs sans fil avec réduction de bruit active',
        price: 249,
        category: 'apple',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 312,
        badge: null,
        brand: 'Apple'
    },
    
    // PC Portables
    {
        id: 'dell-xps-13',
        name: 'Dell XPS 13 Plus',
        description: 'Ultrabook premium pour professionnels',
        price: 1299,
        category: 'laptops',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        rating: 4.5,
        reviews: 78,
        badge: 'new',
        brand: 'Dell'
    },
    {
        id: 'asus-rog-strix',
        name: 'ASUS ROG Strix G15',
        description: 'PC portable gaming haute performance',
        price: 1599,
        category: 'laptops',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 89,
        badge: null,
        brand: 'ASUS'
    },
    
    // Smartphones
    {
        id: 'samsung-galaxy-s24',
        name: 'Samsung Galaxy S24 Ultra',
        description: 'Innovation et performance réunies avec IA',
        price: 899,
        originalPrice: 999,
        category: 'smartphones',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 89,
        badge: 'new',
        brand: 'Samsung'
    },
    {
        id: 'google-pixel-8',
        name: 'Google Pixel 8 Pro',
        description: 'Photographie exceptionnelle avec Google AI',
        price: 799,
        category: 'smartphones',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        rating: 4.4,
        reviews: 67,
        badge: null,
        brand: 'Google'
    },
    
    // Gaming
    {
        id: 'ps5-console',
        name: 'PlayStation 5',
        description: 'Console de jeu nouvelle génération',
        price: 499,
        category: 'gaming',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
        rating: 4.8,
        reviews: 567,
        badge: 'new',
        brand: 'Sony'
    },
    {
        id: 'nintendo-switch',
        name: 'Nintendo Switch OLED',
        description: 'Console portable avec écran OLED',
        price: 349,
        category: 'gaming',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 423,
        badge: null,
        brand: 'Nintendo'
    },
    {
        id: 'xbox-series-x',
        name: 'Xbox Series X',
        description: 'Console gaming la plus puissante',
        price: 499,
        category: 'gaming',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 234,
        badge: null,
        brand: 'Microsoft'
    },
    
    // TV & Son
    {
        id: 'samsung-tv-55',
        name: 'Samsung QLED 55" 4K',
        description: 'TV QLED 4K avec technologie Quantum Dot',
        price: 899,
        originalPrice: 1099,
        category: 'tv',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop',
        rating: 4.5,
        reviews: 123,
        badge: 'sale',
        brand: 'Samsung'
    },
    {
        id: 'sony-wh-1000xm5',
        name: 'Sony WH-1000XM5',
        description: 'Casque sans fil avec réduction de bruit',
        price: 399,
        category: 'tv',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        rating: 4.8,
        reviews: 456,
        badge: null,
        brand: 'Sony'
    },
    
    // Composants
    {
        id: 'rtx-4080',
        name: 'NVIDIA GeForce RTX 4080',
        description: 'Carte graphique gaming haute performance',
        price: 1199,
        category: 'components',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 89,
        badge: null,
        brand: 'NVIDIA'
    },
    {
        id: 'intel-i7-13700k',
        name: 'Intel Core i7-13700K',
        description: 'Processeur Intel 13ème génération',
        price: 399,
        category: 'components',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop',
        rating: 4.7,
        reviews: 156,
        badge: null,
        brand: 'Intel'
    },
    
    // Accessoires
    {
        id: 'logitech-mx-master',
        name: 'Logitech MX Master 3S',
        description: 'Souris sans fil pour professionnels',
        price: 99,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        rating: 4.6,
        reviews: 145,
        badge: null,
        brand: 'Logitech'
    },
    {
        id: 'keychron-k2',
        name: 'Keychron K2 V2',
        description: 'Clavier mécanique sans fil',
        price: 79,
        category: 'accessories',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        rating: 4.5,
        reviews: 98,
        badge: null,
        brand: 'Keychron'
    }
];

// Shopping cart
let cart = [];
let cartTotal = 0;

// DOM elements
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.querySelector('.cart-count');
const cartTotalElement = document.getElementById('cartTotal');
const userMenu = document.getElementById('userMenu');
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    updateCartDisplay();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Sort functionality
    sortSelect.addEventListener('change', handleSort);
    
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.getAttribute('data-filter'));
        });
    });
    
    // Featured slider
    setupFeaturedSlider();
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', handleNewsletter);
    
    // Contact form
    document.querySelector('.contact-form').addEventListener('submit', handleContact);
}

// Load products into the grid
function loadProducts(filteredProducts = products) {
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    
    const badgeHtml = product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Promo' : 'Nouveau'}</div>` : '';
    const originalPriceHtml = product.originalPrice ? `<span class="original-price">${product.originalPrice}€</span>` : '';
    const brandHtml = product.brand ? `<div class="product-brand">${product.brand}</div>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-overlay">
                <button class="quick-view" onclick="showQuickView('${product.id}')">Aperçu rapide</button>
                <button class="add-to-cart" onclick="addToCart('${product.id}', ${product.price})">Ajouter au panier</button>
            </div>
            ${badgeHtml}
        </div>
        <div class="product-info">
            ${brandHtml}
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">${product.price}€</span>
                ${originalPriceHtml}
            </div>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-count">(${product.reviews})</span>
            </div>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add product to cart
function addToCart(productId, price) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    updateCartCount();
    
    // Add visual feedback
    const productCard = document.querySelector(`[data-category="${product.category}"]`);
    if (productCard) {
        productCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            productCard.style.transform = '';
        }, 150);
    }
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCount();
}

// Update quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            updateCartCount();
        }
    }
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Votre panier est vide</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price}€</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart('${item.id}')">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update cart total
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = `${cartTotal}€`;
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
}

// Toggle user menu
function toggleUserMenu() {
    userMenu.classList.toggle('active');
}

// Close menus when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.user-icon') && !e.target.closest('.user-menu')) {
        userMenu.classList.remove('active');
    }
    
    if (!e.target.closest('.cart-icon') && !e.target.closest('.cart-sidebar')) {
        cartSidebar.classList.remove('active');
    }
});

// Filter products by category
function filterByCategory(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    filterProducts(category);
}

function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    loadProducts(filteredProducts);
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    loadProducts(filteredProducts);
}

// Handle sort
function handleSort(e) {
    const sortValue = e.target.value;
    let sortedProducts = [...products];
    
    switch (sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Keep original order
            break;
    }
    
    loadProducts(sortedProducts);
}

// Show quick view modal
function showQuickView(productId) {
    const product = products.find(p => p.id === productId);
    
    const modal = document.createElement('div');
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-body">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">${product.price}€</span>
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice}€</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span class="rating-count">(${product.reviews} avis)</span>
                    </div>
                    <p>${product.description}</p>
                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="addToCart('${product.id}', ${product.price}); closeModal();">Ajouter au panier</button>
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
            margin-bottom: 1rem;
        }
        
        .current-price {
            font-size: 1.5rem;
            color: #3b82f6;
            font-weight: 700;
        }
        
        .original-price {
            font-size: 1rem;
            color: #9ca3af;
            text-decoration: line-through;
            margin-left: 0.5rem;
        }
        
        .product-rating {
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
    
    // Close on escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Setup featured slider
function setupFeaturedSlider() {
    let currentFeaturedSlide = 0;
    const featuredSlides = document.querySelectorAll('.featured-slide');
    const totalFeaturedSlides = featuredSlides.length;
    
    function showFeaturedSlide(index) {
        featuredSlides.forEach(slide => slide.classList.remove('active'));
        featuredSlides[index].classList.add('active');
    }
    
    function nextFeaturedSlide() {
        currentFeaturedSlide = (currentFeaturedSlide + 1) % totalFeaturedSlides;
        showFeaturedSlide(currentFeaturedSlide);
    }
    
    function prevFeaturedSlide() {
        currentFeaturedSlide = (currentFeaturedSlide - 1 + totalFeaturedSlides) % totalFeaturedSlides;
        showFeaturedSlide(currentFeaturedSlide);
    }
    
    // Auto-slide every 5 seconds
    setInterval(nextFeaturedSlide, 5000);
    
    // Manual controls
    document.querySelector('.next-featured').addEventListener('click', nextFeaturedSlide);
    document.querySelector('.prev-featured').addEventListener('click', prevFeaturedSlide);
}

// Handle newsletter subscription
function handleNewsletter(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (email) {
        showNotification('Merci pour votre abonnement !', 'success');
        e.target.reset();
    }
}

// Handle contact form
function handleContact(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    if (data.name && data.email && data.message) {
        showNotification('Message envoyé avec succès !', 'success');
        e.target.reset();
    } else {
        showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide !', 'error');
        return;
    }
    
    showCheckoutModal();
}

// Load more products (simulation)
function loadMoreProducts() {
    showNotification('Chargement de plus de produits...', 'info');
    // Here you would typically load more products from an API
}

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
        
        .notification-info {
            border-left: 4px solid #3b82f6;
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
        
        .notification-info .notification-content i {
            color: #3b82f6;
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

// Smooth scrolling for navigation links
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
    const animatedElements = document.querySelectorAll('.category-card, .product-card, .featured-content');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
