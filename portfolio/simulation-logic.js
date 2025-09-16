// Simulation Logic for E-commerce Site
// Complete interactive simulation for all clickable elements

// Global simulation state
let simulationState = {
    currentUser: null,
    searchHistory: [],
    viewedProducts: [],
    favorites: [],
    notifications: [],
    currentFilter: 'all',
    sortBy: 'default',
    isLoggedIn: false
};

// Initialize simulation
document.addEventListener('DOMContentLoaded', function() {
    initializeSimulation();
    setupEventListeners();
    loadUserData();
});

// Initialize simulation features
function initializeSimulation() {
    // Add simulation indicators
    addSimulationIndicators();
    
    // Initialize user session
    initializeUserSession();
    
    // Setup product interactions
    setupProductInteractions();
    
    // Setup navigation interactions
    setupNavigationInteractions();
    
    // Setup search functionality
    setupSearchFunctionality();
    
    // Setup filter and sort
    setupFilterAndSort();
    
    // Setup user account features
    setupUserAccountFeatures();
    
    // Setup notifications system
    setupNotificationsSystem();
}

// Add visual indicators for simulation mode
function addSimulationIndicators() {
    // Simulation indicators removed for professional appearance
}

// Initialize user session
function initializeUserSession() {
    // Create fake user data
    simulationState.currentUser = {
        id: 'user_001',
        name: 'Alex Martin',
        email: 'alex.martin@email.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        membershipLevel: 'Premium',
        points: 1250,
        orders: 12,
        joinDate: '2023-01-15'
    };
    
    simulationState.isLoggedIn = true;
    
    // Update user interface
    updateUserInterface();
}

// Update user interface with simulation data
function updateUserInterface() {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.innerHTML = `
            <div class="user-info">
                <img src="${simulationState.currentUser.avatar}" alt="Avatar" class="user-avatar">
                <div class="user-details">
                    <span class="user-name">${simulationState.currentUser.name}</span>
                    <span class="user-level">${simulationState.currentUser.membershipLevel}</span>
                </div>
            </div>
            <div class="user-stats">
                <div class="stat">
                    <span class="stat-number">${simulationState.currentUser.points}</span>
                    <span class="stat-label">Points</span>
                </div>
                <div class="stat">
                    <span class="stat-number">${simulationState.currentUser.orders}</span>
                    <span class="stat-label">Commandes</span>
                </div>
            </div>
            <div class="user-actions">
                <a href="#" onclick="showProfileModal()">Mon Profil</a>
                <a href="#" onclick="showOrdersModal()">Mes Commandes</a>
                <a href="#" onclick="showFavoritesModal()">Favoris</a>
                <a href="#" onclick="showSettingsModal()">Paramètres</a>
                <a href="#" onclick="simulateLogout()">Déconnexion</a>
            </div>
        `;
    }
}

// Setup event listeners for all interactive elements
function setupEventListeners() {
    // Service items
    document.querySelectorAll('.service-item').forEach(item => {
        item.addEventListener('click', function() {
            simulateServiceClick(this);
        });
    });
    
    // Navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            simulateNavigationClick(this.textContent.trim());
        });
    });
    
    // Dropdown links
    document.querySelectorAll('.dropdown-section a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            simulateCategoryNavigation(this.textContent.trim());
        });
    });
}

// Simulate category click
function simulateCategoryClick(category) {
    // Filter products
    filterProductsByCategory(category);
    
    // Add to search history
    simulationState.searchHistory.push({
        type: 'category',
        value: category,
        timestamp: new Date()
    });
    
    // Update URL hash
    window.location.hash = `#category=${category}`;
    
    // Add visual feedback
    addClickFeedback(event.target);
}

// Filter products by category
function filterProductsByCategory(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
            product.classList.add('animate-fadeIn');
        } else {
            product.style.display = 'none';
        }
    });
    
    // Update filter indicator
    updateFilterIndicator(category);
}

// Update filter indicator
function updateFilterIndicator(category) {
    let indicator = document.querySelector('.filter-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'filter-indicator';
        document.querySelector('.products-section').prepend(indicator);
    }
    
    const categoryNames = {
        'apple': 'Apple',
        'laptops': 'PC Portables',
        'gaming': 'Gaming',
        'smartphones': 'Smartphones',
        'tv': 'TV & Son',
        'components': 'Composants',
        'accessories': 'Accessoires',
        'all': 'Tous les produits'
    };
    
    indicator.innerHTML = `
        <div class="filter-info">
            <i class="fas fa-filter"></i>
            <span>Filtre actif: ${categoryNames[category] || category}</span>
            <button onclick="clearFilter()" class="clear-filter">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
}

// Clear filter
function clearFilter() {
    filterProductsByCategory('all');
}

// Setup product interactions
function setupProductInteractions() {
    // Add click handlers to all product cards (excluding buttons)
    document.addEventListener('click', function(e) {
        // Don't trigger if clicking on buttons or interactive elements
        if (e.target.closest('button') || e.target.closest('.add-to-cart') || e.target.closest('.quick-view')) {
            return;
        }
        
        if (e.target.closest('.product-card')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.querySelector('.add-to-cart')?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
            
            if (productId) {
                simulateProductView(productId);
            }
        }
    });
}

// Simulate product view
function simulateProductView(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Add to viewed products
        if (!simulationState.viewedProducts.find(p => p.id === productId)) {
            simulationState.viewedProducts.push({
                ...product,
                viewedAt: new Date()
            });
        }
        
        // Show product details modal
        showProductDetailsModal(product);
    }
}

// Show product details modal
function showProductDetailsModal(product) {
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${product.name}</h2>
                    <button class="close-modal" onclick="closeModal(this)">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="product-details-grid">
                        <div class="product-image-large">
                            <img src="${product.image}" alt="${product.name}">
                            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Promo' : 'Nouveau'}</div>` : ''}
                        </div>
                        <div class="product-info-large">
                            <div class="product-brand">${product.brand || 'Marque'}</div>
                            <h3>${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            
                            <div class="product-price-large">
                                <span class="current-price">${product.price}€</span>
                                ${product.originalPrice ? `<span class="original-price">${product.originalPrice}€</span>` : ''}
                            </div>
                            
                            <div class="product-rating-large">
                                ${generateStars(product.rating)}
                                <span class="rating-count">(${product.reviews} avis)</span>
                            </div>
                            
                            <div class="product-actions">
                                <button class="btn btn-primary" onclick="addToCart('${product.id}', ${product.price}); closeModal(this)">
                                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                                </button>
                                <button class="btn btn-secondary" onclick="addToFavorites('${product.id}'); closeModal(this)">
                                    <i class="fas fa-heart"></i> Ajouter aux favoris
                                </button>
                            </div>
                            
                            <div class="product-features">
                                <h4>Caractéristiques principales</h4>
                                <ul>
                                    <li><i class="fas fa-check"></i> Livraison gratuite</li>
                                    <li><i class="fas fa-check"></i> Garantie 2 ans</li>
                                    <li><i class="fas fa-check"></i> Support technique inclus</li>
                                    <li><i class="fas fa-check"></i> Retour sous 30 jours</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add CSS for modal
    if (!document.querySelector('#product-modal-styles')) {
        const style = document.createElement('style');
        style.id = 'product-modal-styles';
        style.textContent = `
            .product-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-overlay {
                background: rgba(0, 0, 0, 0.8);
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            }
            
            .modal-content {
                background: white;
                border-radius: 15px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                animation: slideInUp 0.3s ease;
            }
            
            .modal-header {
                padding: 20px;
                border-bottom: 1px solid #e5e7eb;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-header h2 {
                margin: 0;
                color: #1f2937;
            }
            
            .close-modal {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #6b7280;
                padding: 5px;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            
            .close-modal:hover {
                background: #f3f4f6;
                color: #1f2937;
            }
            
            .modal-body {
                padding: 20px;
            }
            
            .product-details-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
            
            .product-image-large img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 10px;
            }
            
            .product-info-large h3 {
                font-size: 1.5rem;
                margin-bottom: 10px;
            }
            
            .product-price-large {
                font-size: 1.5rem;
                margin: 15px 0;
            }
            
            .product-actions {
                display: flex;
                gap: 15px;
                margin: 20px 0;
            }
            
            .product-features ul {
                list-style: none;
                padding: 0;
            }
            
            .product-features li {
                padding: 5px 0;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .product-features i {
                color: #10b981;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideInUp {
                from { transform: translateY(50px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            
            @media (max-width: 768px) {
                .product-details-grid {
                    grid-template-columns: 1fr;
                }
                
                .product-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Close modal
function closeModal(element) {
    const modal = element.closest('.product-modal');
    if (modal) {
        modal.remove();
    }
}

// Setup search functionality
function setupSearchFunctionality() {
    const searchInputs = document.querySelectorAll('input[type="text"]');
    
    searchInputs.forEach(input => {
        if (input.placeholder.includes('Rechercher')) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    simulateSearch(this.value);
                }
            });
        }
    });
    
    // Search buttons
    document.querySelectorAll('.search-btn, .search-btn-large').forEach(btn => {
        btn.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            if (input) {
                simulateSearch(input.value);
            }
        });
    });
}

// Simulate search
function simulateSearch(query) {
    if (!query.trim()) {
        return;
    }
    
    // Add to search history
    simulationState.searchHistory.push({
        type: 'search',
        value: query,
        timestamp: new Date()
    });
    
    // Filter products by search term
    filterProductsBySearch(query);
    
    // Add visual feedback
    addSearchFeedback(query);
}

// Filter products by search
function filterProductsBySearch(query) {
    const products = document.querySelectorAll('.product-card');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const productName = product.querySelector('h3')?.textContent.toLowerCase() || '';
        const productDesc = product.querySelector('.product-description')?.textContent.toLowerCase() || '';
        const productBrand = product.querySelector('.product-brand')?.textContent.toLowerCase() || '';
        
        if (productName.includes(searchTerm) || 
            productDesc.includes(searchTerm) || 
            productBrand.includes(searchTerm)) {
            product.style.display = 'block';
            product.classList.add('search-highlight');
        } else {
            product.style.display = 'none';
        }
    });
    
    // Update search indicator
    updateSearchIndicator(query);
}

// Update search indicator
function updateSearchIndicator(query) {
    let indicator = document.querySelector('.search-indicator');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'search-indicator';
        document.querySelector('.products-section').prepend(indicator);
    }
    
    indicator.innerHTML = `
        <div class="search-info">
            <i class="fas fa-search"></i>
            <span>Résultats pour: "${query}"</span>
            <button onclick="clearSearch()" class="clear-search">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
}

// Clear search
function clearSearch() {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.style.display = 'block';
        product.classList.remove('search-highlight');
    });
    
    const indicator = document.querySelector('.search-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Setup filter and sort
function setupFilterAndSort() {
    // Add filter and sort controls
    addFilterAndSortControls();
}

// Add filter and sort controls
function addFilterAndSortControls() {
    const productsSection = document.querySelector('.products-section');
    if (!productsSection) return;
    
    const controls = document.createElement('div');
    controls.className = 'products-controls';
    controls.innerHTML = `
        <div class="controls-row">
            <div class="filter-controls">
                <label for="category-filter">Catégorie:</label>
                <select id="category-filter" onchange="simulateCategoryFilter(this.value)">
                    <option value="all">Toutes les catégories</option>
                    <option value="apple">Apple</option>
                    <option value="laptops">PC Portables</option>
                    <option value="gaming">Gaming</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="tv">TV & Son</option>
                    <option value="components">Composants</option>
                    <option value="accessories">Accessoires</option>
                </select>
            </div>
            
            <div class="sort-controls">
                <label for="sort-by">Trier par:</label>
                <select id="sort-by" onchange="simulateSort(this.value)">
                    <option value="default">Par défaut</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="name">Nom A-Z</option>
                    <option value="rating">Note</option>
                    <option value="newest">Plus récent</option>
                </select>
            </div>
            
            <div class="view-controls">
                <button class="view-btn active" onclick="simulateViewChange('grid')">
                    <i class="fas fa-th"></i>
                </button>
                <button class="view-btn" onclick="simulateViewChange('list')">
                    <i class="fas fa-list"></i>
                </button>
            </div>
        </div>
    `;
    
    productsSection.insertBefore(controls, productsSection.firstChild);
    
    // Add CSS for controls
    if (!document.querySelector('#products-controls-styles')) {
        const style = document.createElement('style');
        style.id = 'products-controls-styles';
        style.textContent = `
            .products-controls {
                background: white;
                padding: 20px;
                border-radius: 10px;
                margin-bottom: 20px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            
            .controls-row {
                display: flex;
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
            }
            
            .filter-controls, .sort-controls {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .filter-controls label, .sort-controls label {
                font-weight: 600;
                color: #374151;
            }
            
            .filter-controls select, .sort-controls select {
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                background: white;
                font-size: 14px;
            }
            
            .view-controls {
                display: flex;
                gap: 5px;
                margin-left: auto;
            }
            
            .view-btn {
                padding: 8px 12px;
                border: 1px solid #d1d5db;
                background: white;
                border-radius: 6px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .view-btn.active {
                background: #3b82f6;
                color: white;
                border-color: #3b82f6;
            }
            
            .view-btn:hover {
                background: #f3f4f6;
            }
            
            .view-btn.active:hover {
                background: #2563eb;
            }
            
            .filter-indicator, .search-indicator {
                background: #f0f9ff;
                border: 1px solid #0ea5e9;
                border-radius: 8px;
                padding: 10px 15px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .filter-info, .search-info {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #0369a1;
                font-weight: 500;
            }
            
            .clear-filter, .clear-search {
                background: #fee2e2;
                border: none;
                color: #dc2626;
                padding: 5px 8px;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .clear-filter:hover, .clear-search:hover {
                background: #dc2626;
                color: white;
            }
            
            .search-highlight {
                animation: highlight 2s ease;
            }
            
            @keyframes highlight {
                0%, 100% { background: transparent; }
                50% { background: #fef3c7; }
            }
            
            @media (max-width: 768px) {
                .controls-row {
                    flex-direction: column;
                    align-items: stretch;
                }
                
                .view-controls {
                    margin-left: 0;
                    justify-content: center;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Simulate category filter
function simulateCategoryFilter(category) {
    filterProductsByCategory(category);
    simulationState.currentFilter = category;
}

// Simulate sort
function simulateSort(sortBy) {
    const productsContainer = document.querySelector('.products-grid');
    const products = Array.from(productsContainer.children);
    
    products.sort((a, b) => {
        switch(sortBy) {
            case 'price-asc':
                return getProductPrice(a) - getProductPrice(b);
            case 'price-desc':
                return getProductPrice(b) - getProductPrice(a);
            case 'name':
                return getProductName(a).localeCompare(getProductName(b));
            case 'rating':
                return getProductRating(b) - getProductRating(a);
            default:
                return 0;
        }
    });
    
    products.forEach(product => productsContainer.appendChild(product));
    simulationState.sortBy = sortBy;
}

// Helper functions for sorting
function getProductPrice(element) {
    const priceText = element.querySelector('.current-price')?.textContent || '0';
    return parseInt(priceText.replace('€', '')) || 0;
}

function getProductName(element) {
    return element.querySelector('h3')?.textContent || '';
}

function getProductRating(element) {
    const ratingText = element.querySelector('.product-rating')?.textContent || '0';
    const match = ratingText.match(/(\d+\.?\d*)/);
    return parseFloat(match ? match[1] : 0);
}

// Simulate view change
function simulateViewChange(view) {
    const productsGrid = document.querySelector('.products-grid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    viewButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (view === 'list') {
        productsGrid.classList.add('list-view');
    } else {
        productsGrid.classList.remove('list-view');
    }
}

// Setup user account features
function setupUserAccountFeatures() {
    // Add user account modals and features
    window.showProfileModal = showProfileModal;
    window.showOrdersModal = showOrdersModal;
    window.showFavoritesModal = showFavoritesModal;
    window.showSettingsModal = showSettingsModal;
    window.simulateLogout = simulateLogout;
}

// Show profile modal
function showProfileModal() {
    const modal = document.createElement('div');
    modal.className = 'user-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Mon Profil</h2>
                    <button class="close-modal" onclick="closeModal(this)">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="profile-info">
                        <div class="profile-avatar">
                            <img src="${simulationState.currentUser.avatar}" alt="Avatar">
                            <button class="change-avatar">Changer</button>
                        </div>
                        <div class="profile-details">
                            <h3>${simulationState.currentUser.name}</h3>
                            <p>${simulationState.currentUser.email}</p>
                            <div class="profile-stats">
                                <div class="stat">
                                    <span class="stat-number">${simulationState.currentUser.points}</span>
                                    <span class="stat-label">Points</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">${simulationState.currentUser.orders}</span>
                                    <span class="stat-label">Commandes</span>
                                </div>
                                <div class="stat">
                                    <span class="stat-number">${simulationState.currentUser.membershipLevel}</span>
                                    <span class="stat-label">Niveau</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="profile-actions">
                        <button class="btn btn-primary" onclick="closeModal(this)">
                            Sauvegarder
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal(this)">
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show orders modal
function showOrdersModal() {
    const orders = [
        { id: 'ORD-001', date: '2024-01-15', total: 1299, status: 'Livré', items: ['iPhone 15 Pro'] },
        { id: 'ORD-002', date: '2024-01-10', total: 499, status: 'En cours', items: ['PlayStation 5'] },
        { id: 'ORD-003', date: '2024-01-05', total: 249, status: 'Livré', items: ['AirPods Pro'] }
    ];
    
    const modal = document.createElement('div');
    modal.className = 'user-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Mes Commandes</h2>
                    <button class="close-modal" onclick="closeModal(this)">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="orders-list">
                        ${orders.map(order => `
                            <div class="order-item">
                                <div class="order-info">
                                    <h4>Commande ${order.id}</h4>
                                    <p>Date: ${order.date}</p>
                                    <p>Total: ${order.total}€</p>
                                    <p>Articles: ${order.items.join(', ')}</p>
                                </div>
                                <div class="order-status">
                                    <span class="status-badge ${order.status.toLowerCase().replace(' ', '-')}">${order.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show favorites modal
function showFavoritesModal() {
    const modal = document.createElement('div');
    modal.className = 'user-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Mes Favoris</h2>
                    <button class="close-modal" onclick="closeModal(this)">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="favorites-list">
                        <div class="empty-favorites">
                            <i class="fas fa-heart"></i>
                            <h3>Aucun favori pour le moment</h3>
                            <p>Ajoutez des produits à vos favoris pour les retrouver facilement</p>
                            <button class="btn btn-primary" onclick="closeModal(this)">Continuer mes achats</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Show settings modal
function showSettingsModal() {
    const modal = document.createElement('div');
    modal.className = 'user-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>Paramètres</h2>
                    <button class="close-modal" onclick="closeModal(this)">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="settings-sections">
                        <div class="setting-section">
                            <h3>Notifications</h3>
                            <div class="setting-item">
                                <label>
                                    <input type="checkbox" checked>
                                    Notifications par email
                                </label>
                            </div>
                            <div class="setting-item">
                                <label>
                                    <input type="checkbox" checked>
                                    Notifications push
                                </label>
                            </div>
                        </div>
                        
                        <div class="setting-section">
                            <h3>Préférences</h3>
                            <div class="setting-item">
                                <label>
                                    <input type="checkbox" checked>
                                    Mode sombre
                                </label>
                            </div>
                            <div class="setting-item">
                                <label>
                                    <input type="checkbox">
                                    Langue: Français
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="settings-actions">
                        <button class="btn btn-primary" onclick="closeModal(this)">
                            Sauvegarder
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal(this)">
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Simulate logout
function simulateLogout() {
    simulationState.isLoggedIn = false;
    
    // Reset user interface
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.innerHTML = `
            <div class="user-actions">
                <a href="#" onclick="simulateLogin()">Connexion</a>
                <a href="#" onclick="simulateRegister()">Inscription</a>
            </div>
        `;
    }
}

// Simulate login
function simulateLogin() {
    simulationState.isLoggedIn = true;
    updateUserInterface();
}

// Simulate register
function simulateRegister() {
    simulationState.isLoggedIn = true;
    updateUserInterface();
}

// Setup notifications system
function setupNotificationsSystem() {
    // Add notification container
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    document.body.appendChild(notificationContainer);
    
    // Add CSS for notifications
    const style = document.createElement('style');
    style.textContent = `
        #notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10001;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .notification {
            background: white;
            border-radius: 8px;
            padding: 15px 20px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            border-left: 4px solid #3b82f6;
            min-width: 300px;
            animation: slideInRight 0.3s ease;
            position: relative;
        }
        
        .notification.success {
            border-left-color: #10b981;
        }
        
        .notification.warning {
            border-left-color: #f59e0b;
        }
        
        .notification.error {
            border-left-color: #ef4444;
        }
        
        .notification.info {
            border-left-color: #3b82f6;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .notification-icon {
            font-size: 18px;
        }
        
        .notification-message {
            flex: 1;
            font-weight: 500;
        }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 16px;
            cursor: pointer;
            color: #6b7280;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .notification-close:hover {
            background: #f3f4f6;
            color: #1f2937;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Show notification (only for important actions)
function showNotification(message, type = 'info') {
    // Only show notifications for critical actions
    if (type === 'error' || message.includes('Erreur') || message.includes('Échec')) {
        const container = document.getElementById('notification-container');
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icons = {
            success: '✅',
            warning: '⚠️',
            error: '❌',
            info: 'ℹ️'
        };
        
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || 'ℹ️'}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;
        
        container.appendChild(notification);
        
        // Auto remove after 3 seconds for errors
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 3000);
    }
}

// Add click feedback
function addClickFeedback(element) {
    element.style.transform = 'scale(0.95)';
    element.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 100);
}

// Add search feedback
function addSearchFeedback(query) {
    const searchInputs = document.querySelectorAll('input[placeholder*="Rechercher"]');
    searchInputs.forEach(input => {
        if (input.value === query) {
            input.style.borderColor = '#3b82f6';
            input.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            
            setTimeout(() => {
                input.style.borderColor = '';
                input.style.boxShadow = '';
            }, 2000);
        }
    });
}

// Load user data from localStorage
function loadUserData() {
    const savedData = localStorage.getItem('techstore_simulation');
    if (savedData) {
        const data = JSON.parse(savedData);
        simulationState = { ...simulationState, ...data };
    }
}

// Save user data to localStorage
function saveUserData() {
    localStorage.setItem('techstore_simulation', JSON.stringify(simulationState));
}

// Add to favorites
function addToFavorites(productId) {
    const product = products.find(p => p.id === productId);
    if (product && !simulationState.favorites.find(p => p.id === productId)) {
        simulationState.favorites.push(product);
        saveUserData();
    }
}

// Simulate navigation click
function simulateNavigationClick(linkText) {
    // Simulate page loading
    const body = document.body;
    body.style.opacity = '0.7';
    body.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 1000);
}

// Simulate category navigation
function simulateCategoryNavigation(category) {
    // Could implement actual category filtering here
}

// Simulate service click
function simulateServiceClick(element) {
    // Service click handled silently for professional appearance
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for other scripts to load
    setTimeout(() => {
        if (typeof products !== 'undefined') {
            initializeSimulation();
        }
    }, 1000);
});
