// Checkout System for E-commerce
let currentStep = 1;
let checkoutData = {};
let orders = JSON.parse(localStorage.getItem('techstore_orders')) || [];

// Show checkout modal
function showCheckoutModal() {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="checkout-header">
                <h2>Finaliser votre commande</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="checkout-body">
                <div class="checkout-steps">
                    <div class="step active" data-step="1">
                        <span class="step-number">1</span>
                        <span class="step-title">Informations</span>
                    </div>
                    <div class="step" data-step="2">
                        <span class="step-number">2</span>
                        <span class="step-title">Paiement</span>
                    </div>
                    <div class="step" data-step="3">
                        <span class="step-number">3</span>
                        <span class="step-title">Confirmation</span>
                    </div>
                </div>
                
                <div class="checkout-content">
                    <div class="checkout-step-content active" id="step1">
                        <h3>Informations de livraison</h3>
                        <form class="checkout-form" id="checkoutForm">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="firstName">Prénom *</label>
                                    <input type="text" id="firstName" name="firstName" required>
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Nom *</label>
                                    <input type="text" id="lastName" name="lastName" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="phone">Téléphone *</label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Adresse *</label>
                                <input type="text" id="address" name="address" required>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="city">Ville *</label>
                                    <input type="text" id="city" name="city" required>
                                </div>
                                <div class="form-group">
                                    <label for="postalCode">Code postal *</label>
                                    <input type="text" id="postalCode" name="postalCode" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="country">Pays *</label>
                                <select id="country" name="country" required>
                                    <option value="">Sélectionner un pays</option>
                                    <option value="FR">France</option>
                                    <option value="BE">Belgique</option>
                                    <option value="CH">Suisse</option>
                                    <option value="CA">Canada</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    
                    <div class="checkout-step-content" id="step2">
                        <h3>Méthode de paiement</h3>
                        <div class="payment-methods">
                            <div class="payment-method active" data-method="card">
                                <div class="payment-icon">
                                    <i class="fas fa-credit-card"></i>
                                </div>
                                <div class="payment-info">
                                    <h4>Carte bancaire</h4>
                                    <p>Visa, Mastercard, American Express</p>
                                </div>
                            </div>
                            <div class="payment-method" data-method="paypal">
                                <div class="payment-icon">
                                    <i class="fab fa-paypal"></i>
                                </div>
                                <div class="payment-info">
                                    <h4>PayPal</h4>
                                    <p>Paiement sécurisé avec PayPal</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="payment-form" id="cardForm">
                            <div class="form-group">
                                <label for="cardNumber">Numéro de carte *</label>
                                <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19">
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="expiryDate">Date d'expiration *</label>
                                    <input type="text" id="expiryDate" placeholder="MM/AA" maxlength="5">
                                </div>
                                <div class="form-group">
                                    <label for="cvv">CVV *</label>
                                    <input type="text" id="cvv" placeholder="123" maxlength="3">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="cardName">Nom sur la carte *</label>
                                <input type="text" id="cardName" placeholder="Jean Dupont">
                            </div>
                        </div>
                        
                        <div class="payment-form" id="paypalForm" style="display: none;">
                            <div class="paypal-info">
                                <i class="fab fa-paypal"></i>
                                <p>Vous serez redirigé vers PayPal pour finaliser votre paiement</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="checkout-step-content" id="step3">
                        <div class="confirmation-content">
                            <div class="success-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <h3>Commande confirmée !</h3>
                            <p>Votre commande a été traitée avec succès.</p>
                            <div class="order-summary">
                                <h4>Résumé de votre commande</h4>
                                <div class="order-items" id="orderItems"></div>
                                <div class="order-total">
                                    <strong>Total: <span id="orderTotal">${cartTotal}€</span></strong>
                                </div>
                            </div>
                            <div class="order-info">
                                <p><strong>Numéro de commande:</strong> <span id="orderNumber"></span></p>
                                <p><strong>Email de confirmation:</strong> <span id="confirmationEmail"></span></p>
                                <p><strong>Livraison estimée:</strong> <span id="deliveryDate"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="checkout-sidebar">
                    <h4>Résumé de votre commande</h4>
                    <div class="order-items-summary" id="orderItemsSummary"></div>
                    <div class="order-summary-total">
                        <div class="summary-row">
                            <span>Sous-total:</span>
                            <span>${cartTotal}€</span>
                        </div>
                        <div class="summary-row">
                            <span>Livraison:</span>
                            <span>Gratuite</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total:</span>
                            <span>${cartTotal}€</span>
                        </div>
                    </div>
                </div>
                
                <div class="checkout-footer">
                    <button class="btn btn-secondary" id="prevStep" style="display: none;">Précédent</button>
                    <button class="btn btn-primary" id="nextStep">Suivant</button>
                    <button class="btn btn-primary" id="completeOrder" style="display: none;">Confirmer la commande</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    initializeCheckout(modal);
    setupCheckoutStyles();
    setupCheckoutEventListeners(modal);
}

// Initialize checkout functionality
function initializeCheckout(modal) {
    // Update order summary
    updateOrderSummary(modal);
    
    // Generate order number
    const orderNumber = 'TS' + Date.now().toString().slice(-6);
    modal.querySelector('#orderNumber').textContent = orderNumber;
    
    // Set delivery date (3-5 business days)
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    modal.querySelector('#deliveryDate').textContent = deliveryDate.toLocaleDateString('fr-FR');
}

// Update order summary in sidebar
function updateOrderSummary(modal) {
    const orderItemsSummary = modal.querySelector('#orderItemsSummary');
    const orderItems = modal.querySelector('#orderItems');
    
    const itemsHtml = cart.map(item => `
        <div class="summary-item">
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity}€</span>
        </div>
    `).join('');
    
    orderItemsSummary.innerHTML = itemsHtml;
    orderItems.innerHTML = itemsHtml;
}

// Setup checkout styles
function setupCheckoutStyles() {
    const styles = document.createElement('style');
    styles.setAttribute('data-checkout', 'true');
    styles.textContent = `
        .checkout-modal {
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
            max-width: 1000px;
            width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
        }
        
        .checkout-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .checkout-header h2 {
            color: #1f2937;
            margin: 0;
        }
        
        .close-modal {
            font-size: 2rem;
            cursor: pointer;
            color: #666;
        }
        
        .checkout-body {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 2rem;
            padding: 2rem;
        }
        
        .checkout-steps {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
            grid-column: 1 / -1;
        }
        
        .step {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2rem;
            border-radius: 50px;
            background: #f3f4f6;
            color: #6b7280;
            margin: 0 0.5rem;
            transition: all 0.3s ease;
        }
        
        .step.active {
            background: #3b82f6;
            color: white;
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .checkout-content {
            min-height: 400px;
        }
        
        .checkout-step-content {
            display: none;
        }
        
        .checkout-step-content.active {
            display: block;
        }
        
        .checkout-step-content h3 {
            color: #1f2937;
            margin-bottom: 1.5rem;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #374151;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: #3b82f6;
        }
        
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .payment-method {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .payment-method.active {
            border-color: #3b82f6;
            background: #eff6ff;
        }
        
        .payment-icon {
            font-size: 2rem;
            color: #6b7280;
        }
        
        .payment-method.active .payment-icon {
            color: #3b82f6;
        }
        
        .payment-form {
            margin-top: 1rem;
        }
        
        .confirmation-content {
            text-align: center;
            padding: 2rem;
        }
        
        .success-icon {
            font-size: 4rem;
            color: #10b981;
            margin-bottom: 1rem;
        }
        
        .order-summary {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 10px;
            margin: 2rem 0;
            text-align: left;
        }
        
        .order-info {
            background: #f3f4f6;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: left;
        }
        
        .checkout-sidebar {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 10px;
            height: fit-content;
        }
        
        .checkout-sidebar h4 {
            margin-bottom: 1rem;
            color: #1f2937;
        }
        
        .summary-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }
        
        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }
        
        .summary-row.total {
            font-weight: bold;
            font-size: 1.1rem;
            border-top: 1px solid #e5e7eb;
            padding-top: 0.5rem;
            margin-top: 0.5rem;
        }
        
        .checkout-footer {
            display: flex;
            justify-content: space-between;
            padding: 1rem 2rem;
            border-top: 1px solid #e5e7eb;
            grid-column: 1 / -1;
        }
        
        @media (max-width: 768px) {
            .checkout-body {
                grid-template-columns: 1fr;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            .checkout-steps {
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .step {
                margin: 0;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Setup checkout event listeners
function setupCheckoutEventListeners(modal) {
    let currentStep = 1;
    
    // Close modal
    const closeModal = () => {
        modal.remove();
        document.querySelector('style[data-checkout]')?.remove();
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // Step navigation
    const nextStepBtn = modal.querySelector('#nextStep');
    const prevStepBtn = modal.querySelector('#prevStep');
    const completeOrderBtn = modal.querySelector('#completeOrder');
    
    nextStepBtn.addEventListener('click', () => {
        if (validateStep(currentStep)) {
            currentStep++;
            updateStepDisplay();
        }
    });
    
    prevStepBtn.addEventListener('click', () => {
        currentStep--;
        updateStepDisplay();
    });
    
    completeOrderBtn.addEventListener('click', () => {
        processOrder(modal);
    });
    
    // Payment method selection
    modal.querySelectorAll('.payment-method').forEach(method => {
        method.addEventListener('click', () => {
            modal.querySelectorAll('.payment-method').forEach(m => m.classList.remove('active'));
            method.classList.add('active');
            
            const methodType = method.getAttribute('data-method');
            modal.querySelectorAll('.payment-form').forEach(form => form.style.display = 'none');
            modal.querySelector(`#${methodType}Form`).style.display = 'block';
        });
    });
    
    function validateStep(step) {
        if (step === 1) {
            const form = modal.querySelector('#checkoutForm');
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                } else {
                    field.style.borderColor = '#e5e7eb';
                }
            });
            
            if (!isValid) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            }
            
            return isValid;
        }
        
        if (step === 2) {
            const activeMethod = modal.querySelector('.payment-method.active').getAttribute('data-method');
            
            if (activeMethod === 'card') {
                const cardNumber = modal.querySelector('#cardNumber').value;
                const expiryDate = modal.querySelector('#expiryDate').value;
                const cvv = modal.querySelector('#cvv').value;
                const cardName = modal.querySelector('#cardName').value;
                
                if (!cardNumber || !expiryDate || !cvv || !cardName) {
                    showNotification('Veuillez remplir tous les champs de paiement', 'error');
                    return false;
                }
            }
            
            return true;
        }
        
        return true;
    }
    
    function updateStepDisplay() {
        // Update steps
        modal.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.getAttribute('data-step')) === currentStep) {
                step.classList.add('active');
            }
        });
        
        // Update content
        modal.querySelectorAll('.checkout-step-content').forEach(content => {
            content.classList.remove('active');
        });
        modal.querySelector(`#step${currentStep}`).classList.add('active');
        
        // Update buttons
        prevStepBtn.style.display = currentStep > 1 ? 'block' : 'none';
        nextStepBtn.style.display = currentStep < 3 ? 'block' : 'none';
        completeOrderBtn.style.display = currentStep === 3 ? 'block' : 'none';
    }
    
    function processOrder(modal) {
        // Simulate payment processing
        showNotification('Traitement du paiement...', 'info');
        
        setTimeout(() => {
            // Create order
            const orderNumber = modal.querySelector('#orderNumber').textContent;
            const email = modal.querySelector('#email').value;
            const order = {
                id: orderNumber,
                date: new Date().toISOString(),
                status: 'confirmed',
                items: [...cart],
                total: cartTotal,
                customer: {
                    firstName: modal.querySelector('#firstName').value,
                    lastName: modal.querySelector('#lastName').value,
                    email: email,
                    phone: modal.querySelector('#phone').value,
                    address: modal.querySelector('#address').value,
                    city: modal.querySelector('#city').value,
                    postalCode: modal.querySelector('#postalCode').value,
                    country: modal.querySelector('#country').value
                },
                payment: {
                    method: modal.querySelector('.payment-method.active').getAttribute('data-method'),
                    status: 'completed'
                }
            };
            
            // Save order
            orders.push(order);
            localStorage.setItem('techstore_orders', JSON.stringify(orders));
            
            // Update confirmation email
            modal.querySelector('#confirmationEmail').textContent = email;
            
            // Clear cart
            cart = [];
            updateCartDisplay();
            
            // Show success
            showNotification('Commande confirmée avec succès !', 'success');
            
            // Close modal after delay
            setTimeout(() => {
                modal.remove();
                document.querySelector('style[data-checkout]')?.remove();
            }, 2000);
        }, 2000);
    }
}

// Show orders modal
function showOrdersModal() {
    const modal = document.createElement('div');
    modal.className = 'orders-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="orders-header">
                <h2>Mes commandes</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="orders-body">
                ${orders.length === 0 ? `
                    <div class="empty-orders">
                        <i class="fas fa-shopping-bag"></i>
                        <h3>Aucune commande</h3>
                        <p>Vous n'avez pas encore passé de commande.</p>
                        <button class="btn btn-primary" onclick="closeOrdersModal(); document.querySelector('a[href=\"#produits\"]').click();">Voir les produits</button>
                    </div>
                ` : `
                    <div class="orders-list">
                        ${orders.map(order => `
                            <div class="order-item">
                                <div class="order-header">
                                    <div class="order-info">
                                        <h4>Commande #${order.id}</h4>
                                        <p>${new Date(order.date).toLocaleDateString('fr-FR')}</p>
                                    </div>
                                    <div class="order-status">
                                        <span class="status-badge ${order.status}">${getStatusText(order.status)}</span>
                                        <span class="order-total">${order.total}€</span>
                                    </div>
                                </div>
                                <div class="order-items">
                                    ${order.items.map(item => `
                                        <div class="order-item-detail">
                                            <img src="${item.image}" alt="${item.name}">
                                            <div class="item-info">
                                                <h5>${item.name}</h5>
                                                <p>Quantité: ${item.quantity}</p>
                                            </div>
                                            <span class="item-price">${item.price * item.quantity}€</span>
                                        </div>
                                    `).join('')}
                                </div>
                                <div class="order-actions">
                                    <button class="btn btn-secondary" onclick="showOrderDetails('${order.id}')">Détails</button>
                                    <button class="btn btn-primary" onclick="trackOrder('${order.id}')">Suivre</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setupOrdersStyles();
    setupOrdersEventListeners(modal);
}

// Get status text
function getStatusText(status) {
    const statusMap = {
        'confirmed': 'Confirmée',
        'processing': 'En cours',
        'shipped': 'Expédiée',
        'delivered': 'Livrée',
        'cancelled': 'Annulée'
    };
    return statusMap[status] || status;
}

// Show order details
function showOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const modal = document.createElement('div');
    modal.className = 'order-details-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="order-details-header">
                <h2>Détails de la commande #${order.id}</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="order-details-body">
                <div class="order-details-grid">
                    <div class="order-section">
                        <h3>Informations de commande</h3>
                        <div class="detail-item">
                            <span class="label">Numéro:</span>
                            <span class="value">#${order.id}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Date:</span>
                            <span class="value">${new Date(order.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Statut:</span>
                            <span class="value status-badge ${order.status}">${getStatusText(order.status)}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Total:</span>
                            <span class="value">${order.total}€</span>
                        </div>
                    </div>
                    
                    <div class="order-section">
                        <h3>Informations de livraison</h3>
                        <div class="detail-item">
                            <span class="label">Nom:</span>
                            <span class="value">${order.customer.firstName} ${order.customer.lastName}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Email:</span>
                            <span class="value">${order.customer.email}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Téléphone:</span>
                            <span class="value">${order.customer.phone}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Adresse:</span>
                            <span class="value">${order.customer.address}, ${order.customer.postalCode} ${order.customer.city}, ${order.customer.country}</span>
                        </div>
                    </div>
                    
                    <div class="order-section">
                        <h3>Articles commandés</h3>
                        <div class="order-items-details">
                            ${order.items.map(item => `
                                <div class="order-item-detail">
                                    <img src="${item.image}" alt="${item.name}">
                                    <div class="item-info">
                                        <h5>${item.name}</h5>
                                        <p>Quantité: ${item.quantity}</p>
                                        <p>Prix unitaire: ${item.price}€</p>
                                    </div>
                                    <span class="item-total">${item.price * item.quantity}€</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="order-section">
                        <h3>Informations de paiement</h3>
                        <div class="detail-item">
                            <span class="label">Méthode:</span>
                            <span class="value">${order.payment.method === 'card' ? 'Carte bancaire' : 'PayPal'}</span>
                        </div>
                        <div class="detail-item">
                            <span class="label">Statut:</span>
                            <span class="value status-badge completed">Payé</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setupOrderDetailsStyles();
    setupOrderDetailsEventListeners(modal);
}

// Track order
function trackOrder(orderId) {
    showNotification('Fonctionnalité de suivi en cours de développement', 'info');
}

// Close orders modal
function closeOrdersModal() {
    document.querySelector('.orders-modal')?.remove();
    document.querySelector('style[data-orders]')?.remove();
}

// Setup orders styles
function setupOrdersStyles() {
    const styles = document.createElement('style');
    styles.setAttribute('data-orders', 'true');
    styles.textContent = `
        .orders-modal {
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
            width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease;
        }
        
        .orders-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .orders-header h2 {
            color: #1f2937;
            margin: 0;
        }
        
        .close-modal {
            font-size: 2rem;
            cursor: pointer;
            color: #666;
        }
        
        .orders-body {
            padding: 2rem;
        }
        
        .empty-orders {
            text-align: center;
            padding: 4rem 2rem;
        }
        
        .empty-orders i {
            font-size: 4rem;
            color: #9ca3af;
            margin-bottom: 1rem;
        }
        
        .empty-orders h3 {
            color: #1f2937;
            margin-bottom: 1rem;
        }
        
        .empty-orders p {
            color: #6b7280;
            margin-bottom: 2rem;
        }
        
        .order-item {
            border: 1px solid #e5e7eb;
            border-radius: 10px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            background: #f9fafb;
        }
        
        .order-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .order-info h4 {
            color: #1f2937;
            margin: 0 0 0.5rem 0;
        }
        
        .order-info p {
            color: #6b7280;
            margin: 0;
        }
        
        .order-status {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;
        }
        
        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .status-badge.confirmed {
            background: #dbeafe;
            color: #1e40af;
        }
        
        .status-badge.processing {
            background: #fef3c7;
            color: #92400e;
        }
        
        .status-badge.shipped {
            background: #d1fae5;
            color: #065f46;
        }
        
        .status-badge.delivered {
            background: #dcfce7;
            color: #166534;
        }
        
        .status-badge.cancelled {
            background: #fee2e2;
            color: #991b1b;
        }
        
        .status-badge.completed {
            background: #dcfce7;
            color: #166534;
        }
        
        .order-total {
            font-weight: bold;
            color: #1f2937;
        }
        
        .order-item-detail {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
        }
        
        .order-item-detail img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 5px;
        }
        
        .item-info h5 {
            color: #1f2937;
            margin: 0 0 0.25rem 0;
            font-size: 0.9rem;
        }
        
        .item-info p {
            color: #6b7280;
            margin: 0;
            font-size: 0.8rem;
        }
        
        .item-price {
            font-weight: 500;
            color: #1f2937;
        }
        
        .order-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .order-details-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            animation: fadeIn 0.3s ease;
        }
        
        .order-details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .order-section {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 10px;
        }
        
        .order-section h3 {
            color: #1f2937;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
        }
        
        .detail-item .label {
            color: #6b7280;
            font-weight: 500;
        }
        
        .detail-item .value {
            color: #1f2937;
        }
        
        .order-items-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .order-item-detail {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: white;
            border-radius: 8px;
        }
        
        .order-item-detail img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 5px;
        }
        
        .item-info h5 {
            color: #1f2937;
            margin: 0 0 0.5rem 0;
        }
        
        .item-info p {
            color: #6b7280;
            margin: 0;
            font-size: 0.9rem;
        }
        
        .item-total {
            font-weight: bold;
            color: #1f2937;
        }
        
        @media (max-width: 768px) {
            .order-details-grid {
                grid-template-columns: 1fr;
            }
            
            .order-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .order-status {
                align-items: flex-start;
            }
            
            .order-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(styles);
}

// Setup orders event listeners
function setupOrdersEventListeners(modal) {
    const closeModal = () => {
        modal.remove();
        document.querySelector('style[data-orders]')?.remove();
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Setup order details event listeners
function setupOrderDetailsEventListeners(modal) {
    const closeModal = () => {
        modal.remove();
    };
    
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Setup order details styles
function setupOrderDetailsStyles() {
    const styles = document.createElement('style');
    styles.setAttribute('data-order-details', 'true');
    styles.textContent = `
        .order-details-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            animation: fadeIn 0.3s ease;
        }
        
        .order-details-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 2rem 1rem;
            border-bottom: 1px solid #e5e7eb;
        }
        
        .order-details-header h2 {
            color: #1f2937;
            margin: 0;
        }
        
        .order-details-body {
            padding: 2rem;
        }
        
        .order-details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .order-section {
            background: #f9fafb;
            padding: 1.5rem;
            border-radius: 10px;
        }
        
        .order-section h3 {
            color: #1f2937;
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }
        
        .detail-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.75rem;
        }
        
        .detail-item .label {
            color: #6b7280;
            font-weight: 500;
        }
        
        .detail-item .value {
            color: #1f2937;
        }
        
        .order-items-details {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .order-item-detail {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: white;
            border-radius: 8px;
        }
        
        .order-item-detail img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 5px;
        }
        
        .item-info h5 {
            color: #1f2937;
            margin: 0 0 0.5rem 0;
        }
        
        .item-info p {
            color: #6b7280;
            margin: 0;
            font-size: 0.9rem;
        }
        
        .item-total {
            font-weight: bold;
            color: #1f2937;
        }
        
        @media (max-width: 768px) {
            .order-details-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(styles);
}
