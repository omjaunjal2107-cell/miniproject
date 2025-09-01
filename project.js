// Comprehensive crops data
        const cropsData = {
            vegetables: [
                {
                    name: "Tomato",
                    icon: "🍅",
                    category: "vegetables",
                    season: "Kharif & Rabi",
                    sowingTime: "June-July (Kharif), Nov-Dec (Rabi)",
                    harvestTime: "3-4 months",
                    soilType: "Well-drained loamy soil",
                    climate: "Warm, humid climate",
                    waterRequirement: "600-800mm annually",
                    marketPrice: "₹20-40 per kg",
                    nutritionalValue: "Rich in Vitamin C, Lycopene, Potassium",
                    diseases: ["Late blight", "Early blight", "Bacterial wilt"],
                    tips: [
                        "Use hybrid varieties for better yield",
                        "Maintain proper spacing between plants",
                        "Regular pruning improves fruit quality",
                        "Use drip irrigation for water efficiency"
                    ]
                },
                {
                    name: "Potato",
                    icon: "🥔",
                    category: "vegetables",
                    season: "Rabi",
                    sowingTime: "October-December",
                    harvestTime: "90-120 days",
                    soilType: "Sandy loam with good drainage",
                    climate: "Cool, dry climate",
                    waterRequirement: "500-700mm",
                    marketPrice: "₹15-25 per kg",
                    nutritionalValue: "Carbohydrates, Vitamin C, Potassium",
                    diseases: ["Late blight", "Common scab", "Potato virus"],
                    tips: [
                        "Plant certified seed potatoes",
                        "Hill soil around plants as they grow",
                        "Harvest when leaves turn yellow",
                        "Store in cool, dark place"
                    ]
                },
                {
                    name: "Onion",
                    icon: "🧅",
                    category: "vegetables",
                    season: "Rabi",
                    sowingTime: "November-January",
                    harvestTime: "4-5 months",
                    soilType: "Well-drained sandy loam",
                    climate: "Cool, dry season for bulbing",
                    waterRequirement: "350-550mm",
                    marketPrice: "₹20-50 per kg",
                    nutritionalValue: "Vitamin C, Fiber, Antioxidants",
                    diseases: ["Purple blotch", "Stemphylium blight", "Thrips"],
                    tips: [
                        "Use short-day varieties for better bulbing",
                        "Avoid over-watering during maturity",
                        "Harvest when tops fall over",
                        "Cure bulbs in shade before storage"
                    ]
                },
                {
                    name: "Cabbage",
                    icon: "🥬",
                    category: "vegetables",
                    season: "Rabi",
                    sowingTime: "September-November",
                    harvestTime: "80-120 days",
                    soilType: "Heavy loam with good organic matter",
                    climate: "Cool, moist climate",
                    waterRequirement: "400-500mm",
                    marketPrice: "₹12-20 per kg",
                    nutritionalValue: "Vitamin C, K, Fiber",
                    diseases: ["Club root", "Black rot", "Aphids"],
                    tips: [
                        "Transplant seedlings at 4-6 weeks",
                        "Maintain consistent moisture",
                        "Use row covers for pest protection",
                        "Harvest when heads feel solid"
                    ]
                }
            ],
            fruits: [
                {
                    name: "Mango",
                    icon: "🥭",
                    category: "fruits",
                    season: "Perennial (harvest Apr-Jun)",
                    sowingTime: "June-August (planting)",
                    harvestTime: "3-5 years from planting",
                    soilType: "Deep, well-drained alluvial soil",
                    climate: "Tropical and subtropical",
                    waterRequirement: "1250-1500mm annually",
                    marketPrice: "₹40-100 per kg",
                    nutritionalValue: "Vitamin A, C, Fiber, Antioxidants",
                    diseases: ["Anthracnose", "Powdery mildew", "Bacterial canker"],
                    tips: [
                        "Choose grafted varieties for better yield",
                        "Prune regularly to maintain tree shape",
                        "Protect fruits from fruit flies",
                        "Harvest at 75-80% maturity"
                    ]
                },
                {
                    name: "Banana",
                    icon: "🍌",
                    category: "fruits",
                    season: "Year-round",
                    sowingTime: "March-May, September-October",
                    harvestTime: "12-15 months",
                    soilType: "Rich, well-drained loamy soil",
                    climate: "Tropical, humid climate",
                    waterRequirement: "1800-2000mm annually",
                    marketPrice: "₹20-40 per kg",
                    nutritionalValue: "Potassium, Vitamin B6, Vitamin C",
                    diseases: ["Panama disease", "Black sigatoka", "Bunchy top virus"],
                    tips: [
                        "Plant tissue culture plantlets for disease-free crop",
                        "Maintain proper drainage to prevent root rot",
                        "Remove suckers regularly except replacement ones",
                        "Harvest when fingers are plump but still green"
                    ]
                },
                {
                    name: "Apple",
                    icon: "🍎",
                    category: "fruits",
                    season: "Temperate (harvest Aug-Oct)",
                    sowingTime: "December-February (planting)",
                    harvestTime: "3-4 years from planting",
                    soilType: "Well-drained sandy loam",
                    climate: "Temperate, cool winters",
                    waterRequirement: "1000-1200mm annually",
                    marketPrice: "₹80-150 per kg",
                    nutritionalValue: "Fiber, Vitamin C, Antioxidants",
                    diseases: ["Apple scab", "Fire blight", "Codling moth"],
                    tips: [
                        "Choose varieties suited to local climate",
                        "Thin fruits for better size and quality",
                        "Regular pruning improves air circulation",
                        "Use pheromone traps for pest control"
                    ]
                },
                {
                    name: "Orange",
                    icon: "🍊",
                    category: "fruits",
                    season: "Winter harvest (Dec-Mar)",
                    sowingTime: "June-August (planting)",
                    harvestTime: "3-4 years from planting",
                    soilType: "Well-drained sandy loam",
                    climate: "Subtropical climate",
                    waterRequirement: "1200-1500mm annually",
                    marketPrice: "₹30-60 per kg",
                    nutritionalValue: "Vitamin C, Folate, Potassium",
                    diseases: ["Citrus canker", "Greening disease", "Scale insects"],
                    tips: [
                        "Plant grafted saplings for better quality",
                        "Mulch around trees to retain moisture",
                        "Regular inspection for pest and disease",
                        "Harvest when fruits are fully colored"
                    ]
                }
            ],
            grains: [
                {
                    name: "Rice",
                    icon: "🌾",
                    category: "grains",
                    season: "Kharif & Rabi",
                    sowingTime: "Jun-Jul (Kharif), Nov-Dec (Rabi)",
                    harvestTime: "110-140 days",
                    soilType: "Clay to clay loam",
                    climate: "Tropical, high humidity",
                    waterRequirement: "1200-1500mm",
                    marketPrice: "₹25-35 per kg",
                    nutritionalValue: "Carbohydrates, Protein, B-vitamins",
                    diseases: ["Blast", "Bacterial leaf blight", "Sheath rot"],
                    tips: [
                        "Use certified seeds for better yield",
                        "Maintain water level at 2-5 cm",
                        "Apply fertilizers in split doses",
                        "Harvest when 80% grains turn golden"
                    ]
                },
                {
                    name: "Wheat",
                    icon: "🌾",
                    category: "grains",
                    season: "Rabi",
                    sowingTime: "November-December",
                    harvestTime: "110-130 days",
                    soilType: "Well-drained loamy soil",
                    climate: "Cool, dry climate",
                    waterRequirement: "450-650mm",
                    marketPrice: "₹22-28 per kg",
                    nutritionalValue: "Carbohydrates, Protein, Fiber",
                    diseases: ["Rust diseases", "Smut", "Aphids"],
                    tips: [
                        "Sow at optimum time for maximum yield",
                        "Use recommended seed rate (100kg/hectare)",
                        "Apply nitrogen in split doses",
                        "Harvest when moisture content is 20-25%"
                    ]
                },
                {
                    name: "Corn (Maize)",
                    icon: "🌽",
                    category: "grains",
                    season: "Kharif",
                    sowingTime: "June-July",
                    harvestTime: "90-120 days",
                    soilType: "Well-drained fertile loam",
                    climate: "Warm, humid climate",
                    waterRequirement: "500-800mm",
                    marketPrice: "₹18-25 per kg",
                    nutritionalValue: "Carbohydrates, Fiber, Vitamin B6",
                    diseases: ["Corn borer", "Leaf blight", "Rust"],
                    tips: [
                        "Plant hybrid varieties for better yield",
                        "Maintain proper plant spacing",
                        "Side-dress with nitrogen at knee height",
                        "Harvest when husks are brown and dry"
                    ]
                },
                {
                    name: "Barley",
                    icon: "🌾",
                    category: "grains",
                    season: "Rabi",
                    sowingTime: "October-November",
                    harvestTime: "110-120 days",
                    soilType: "Well-drained sandy loam",
                    climate: "Cool, dry climate",
                    waterRequirement: "450-500mm",
                    marketPrice: "₹20-25 per kg",
                    nutritionalValue: "Fiber, Protein, Minerals",
                    diseases: ["Powdery mildew", "Leaf rust", "Aphids"],
                    tips: [
                        "Use disease-resistant varieties",
                        "Avoid water logging",
                        "Apply balanced fertilization",
                        "Harvest when grains are hard and dry"
                    ]
                }
            ],
            herbs: [
                {
                    name: "Basil (Tulsi)",
                    icon: "🌿",
                    category: "herbs",
                    season: "Summer & Monsoon",
                    sowingTime: "March-April, July-August",
                    harvestTime: "60-90 days",
                    soilType: "Well-drained sandy loam",
                    climate: "Warm, humid climate",
                    waterRequirement: "600-700mm annually",
                    marketPrice: "₹40-80 per kg",
                    nutritionalValue: "Essential oils, Antioxidants, Vitamin K",
                    diseases: ["Fusarium wilt", "Bacterial leaf spot", "Aphids"],
                    tips: [
                        "Pinch flower buds to encourage leaf growth",
                        "Harvest in morning for best oil content",
                        "Use organic fertilizers for better quality",
                        "Can be grown year-round in greenhouse"
                    ]
                },
                {
                    name: "Coriander",
                    icon: "🌿",
                    category: "herbs",
                    season: "Rabi",
                    sowingTime: "October-November",
                    harvestTime: "40-50 days (leaves), 90-100 days (seeds)",
                    soilType: "Well-drained loamy soil",
                    climate: "Cool, dry climate",
                    waterRequirement: "400-500mm",
                    marketPrice: "₹30-60 per kg (leaves), ₹80-120 per kg (seeds)",
                    nutritionalValue: "Vitamin C, K, Antioxidants",
                    diseases: ["Powdery mildew", "Aphids", "Stem rot"],
                    tips: [
                        "Successive sowing every 2-3 weeks for continuous harvest",
                        "Harvest leaves before flowering",
                        "Allow some plants to go to seed for next crop",
                        "Store dried seeds in airtight containers"
                    ]
                },
                {
                    name: "Mint",
                    icon: "🌿",
                    category: "herbs",
                    season: "Year-round",
                    sowingTime: "March-April, September-October",
                    harvestTime: "60-90 days",
                    soilType: "Moist, fertile soil",
                    climate: "Temperate to tropical",
                    waterRequirement: "800-1000mm annually",
                    marketPrice: "₹50-100 per kg",
                    nutritionalValue: "Menthol, Vitamin A, C, Antioxidants",
                    diseases: ["Rust", "Verticillium wilt", "Aphids"],
                    tips: [
                        "Grows well in partial shade",
                        "Propagate through runners or stem cuttings",
                        "Regular harvesting promotes new growth",
                        "Contains spread as it can be invasive"
                    ]
                },
                {
                    name: "Turmeric",
                    icon: "🌿",
                    category: "herbs",
                    season: "Kharif",
                    sowingTime: "May-June",
                    harvestTime: "8-10 months",
                    soilType: "Well-drained sandy loam",
                    climate: "Tropical, high humidity",
                    waterRequirement: "1000-1500mm annually",
                    marketPrice: "₹80-150 per kg (fresh), ₹200-300 per kg (dried)",
                    nutritionalValue: "Curcumin, Antioxidants, Anti-inflammatory compounds",
                    diseases: ["Rhizome rot", "Leaf spot", "Scale insects"],
                    tips: [
                        "Use healthy rhizomes for planting",
                        "Apply organic mulch to retain moisture",
                        "Harvest when leaves turn yellow",
                        "Proper curing and drying increases market value"
                    ]
                }
            ]
        };

        // Sample data structure stored in memory
        const appData = {
            users: [
                {
                    id: 1,
                    name: "Rajesh Kumar",
                    email: "rajesh@farm.com",
                    type: "farmer",
                    farmName: "Green Valley Farm",
                    location: "Punjab"
                },
                {
                    id: 2,
                    name: "Priya Sharma",
                    email: "priya@buyer.com",
                    type: "buyer",
                    location: "Delhi"
                }
            ],
            products: [
                {
                    id: 1,
                    name: "Fresh Tomatoes",
                    category: "vegetables",
                    price: 45.00,
                    quantity: 100,
                    farmerId: 1,
                    farmerName: "Rajesh Kumar",
                    description: "Organically grown red tomatoes",
                    location: "Punjab"
                },
                {
                    id: 2,
                    name: "Basmati Rice",
                    category: "grains",
                    price: 120.00,
                    quantity: 500,
                    farmerId: 1,
                    farmerName: "Rajesh Kumar",
                    description: "Premium quality basmati rice",
                    location: "Punjab"
                },
                {
                    id: 3,
                    name: "Green Spinach",
                    category: "vegetables",
                    price: 35.00,
                    quantity: 50,
                    farmerId: 1,
                    farmerName: "Rajesh Kumar",
                    description: "Fresh leafy spinach",
                    location: "Punjab"
                },
                {
                    id: 4,
                    name: "Fresh Apples",
                    category: "fruits",
                    price: 180.00,
                    quantity: 75,
                    farmerId: 1,
                    farmerName: "Rajesh Kumar",
                    description: "Crisp red apples from hill station",
                    location: "Punjab"
                }
            ],
            orders: [
                {
                    id: 1,
                    buyerId: 2,
                    productId: 1,
                    quantity: 5,
                    totalAmount: 225.00,
                    status: "delivered",
                    date: "2024-08-20"
                }
            ],
            currentUser: null
        };

        let currentCropFilter = 'all';

        // Navigation functions
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => section.classList.remove('active'));
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Load section-specific data
            if (sectionId === 'marketplace') {
                loadProducts();
            } else if (sectionId === 'buyer-dashboard') {
                loadOrders();
            } else if (sectionId === 'information') {
                loadCrops();
            }
        }

        // Crop Information Functions
        function loadCrops() {
            const container = document.getElementById('crops-container');
            container.innerHTML = '';
            
            let allCrops = [];
            Object.values(cropsData).forEach(category => {
                allCrops = allCrops.concat(category);
            });
            
            const filteredCrops = currentCropFilter === 'all' 
                ? allCrops 
                : cropsData[currentCropFilter] || [];
            
            filteredCrops.forEach(crop => {
                const cropCard = createCropCard(crop);
                container.appendChild(cropCard);
            });
        }

        function createCropCard(crop) {
            const card = document.createElement('div');
            card.className = 'crop-card';
            card.setAttribute('data-crop-name', crop.name.toLowerCase());
            card.setAttribute('data-crop-category', crop.category);
            
            card.innerHTML = `
                <div class="crop-header">
                    <div class="crop-icon">${crop.icon}</div>
                    <h3>${crop.name}</h3>
                </div>
                <div class="crop-content">
                    <div class="info-grid">
                        <div class="info-item">
                            <strong>Season</strong>
                            ${crop.season}
                        </div>
                        <div class="info-item">
                            <strong>Harvest Time</strong>
                            ${crop.harvestTime}
                        </div>
                        <div class="info-item">
                            <strong>Market Price</strong>
                            ${crop.marketPrice}
                        </div>
                        <div class="info-item">
                            <strong>Water Requirement</strong>
                            ${crop.waterRequirement}
                        </div>
                    </div>
                    
                    <div class="crop-info">
                        <h4><i class="fas fa-calendar-alt"></i> Growing Details</h4>
                        <p><strong>Sowing Time:</strong> ${crop.sowingTime}</p>
                        <p><strong>Soil Type:</strong> ${crop.soilType}</p>
                        <p><strong>Climate:</strong> ${crop.climate}</p>
                    </div>
                    
                    <div class="crop-info">
                        <h4><i class="fas fa-heartbeat"></i> Nutritional Value</h4>
                        <p>${crop.nutritionalValue}</p>
                    </div>
                    
                    <div class="crop-info">
                        <h4><i class="fas fa-bug"></i> Common Diseases</h4>
                        <p>${crop.diseases.join(', ')}</p>
                    </div>
                    
                    <div class="crop-info">
                        <h4><i class="fas fa-lightbulb"></i> Growing Tips</h4>
                        <ul class="tips-list">
                            ${crop.tips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
            
            return card;
        }

        function filterByCategory(category) {
            currentCropFilter = category;
            
            // Update active category card
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            event.target.closest('.category-card').classList.add('active');
            
            // Clear search
            document.getElementById('crop-search').value = '';
            
            // Reload crops
            loadCrops();
        }

        function filterCrops() {
            const searchTerm = document.getElementById('crop-search').value.toLowerCase();
            const cropCards = document.querySelectorAll('.crop-card');
            
            cropCards.forEach(card => {
                const cropName = card.getAttribute('data-crop-name');
                const isVisible = cropName.includes(searchTerm);
                card.style.display = isVisible ? 'block' : 'none';
            });
        }

        function showAllCrops() {
            currentCropFilter = 'all';
            document.getElementById('crop-search').value = '';
            
            // Update active category
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            document.querySelector('.category-card').classList.add('active');
            
            loadCrops();
        }

        // Product management
        function addProduct(event) {
            event.preventDefault();
            
            const product = {
                id: appData.products.length + 1,
                name: document.getElementById('product-name').value,
                category: document.getElementById('product-category').value,
                price: parseFloat(document.getElementById('product-price').value),
                quantity: parseInt(document.getElementById('product-quantity').value),
                farmerId: 1, // Mock farmer ID
                farmerName: "Current Farmer",
                description: document.getElementById('product-description').value,
                location: "Your Location"
            };
            
            appData.products.push(product);
            
            // Show success message
            showMessage('Product added successfully!', 'success');
            
            // Reset form
            document.getElementById('product-form').reset();
            
            // Refresh products if marketplace is active
            if (document.getElementById('marketplace').classList.contains('active')) {
                loadProducts();
            }
        }

        function loadProducts() {
            const container = document.getElementById('products-container');
            container.innerHTML = '';
            
            appData.products.forEach(product => {
                const productCard = createProductCard(product);
                container.appendChild(productCard);
            });
        }

        function createProductCard(product) {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    ${getProductEmoji(product.category)} ${product.name}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">₹${product.price}/kg</div>
                    <div class="product-farmer">By: ${product.farmerName}</div>
                    <p>${product.description}</p>
                    <p><strong>Available:</strong> ${product.quantity} kg</p>
                    <p><strong>Location:</strong> ${product.location}</p>
                    <button class="btn btn-primary" onclick="orderProduct(${product.id})">Order Now</button>
                </div>
            `;
            return card;
        }

        function getProductEmoji(category) {
            const emojis = {
                vegetables: '🥕',
                fruits: '🍎',
                grains: '🌾',
                herbs: '🌿'
            };
            return emojis[category] || '🌱';
        }

        function filterProducts() {
            const searchTerm = document.getElementById('search').value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');
            
            productCards.forEach(card => {
                const text = card.textContent.toLowerCase();
                card.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        }

        function orderProduct(productId) {
            const product = appData.products.find(p => p.id === productId);
            if (product) {
                const quantity = prompt(`How many kg of ${product.name} would you like to order?`, '1');
                if (quantity && quantity > 0) {
                    const order = {
                        id: appData.orders.length + 1,
                        buyerId: 2, // Mock buyer ID
                        productId: productId,
                        quantity: parseInt(quantity),
                        totalAmount: product.price * parseInt(quantity),
                        status: 'pending',
                        date: new Date().toISOString().split('T')[0]
                    };
                    
                    appData.orders.push(order);
                    showMessage(`Order placed successfully! Total: ₹${order.totalAmount}`, 'success');
                }
            }
        }

        // Order management
        function loadOrders() {
            const container = document.getElementById('orders-container');
            container.innerHTML = '';
            
            appData.orders.forEach(order => {
                const product = appData.products.find(p => p.id === order.productId);
                const orderCard = document.createElement('div');
                orderCard.className = 'product-card';
                orderCard.innerHTML = `
                    <div class="product-info">
                        <h3>Order #${order.id}</h3>
                        <p><strong>Product:</strong> ${product ? product.name : 'Unknown'}</p>
                        <p><strong>Quantity:</strong> ${order.quantity} kg</p>
                        <p><strong>Total:</strong> ₹${order.totalAmount}</p>
                        <p><strong>Status:</strong> <span style="color: ${getStatusColor(order.status)}">${order.status}</span></p>
                        <p><strong>Date:</strong> ${order.date}</p>
                    </div>
                `;
                container.appendChild(orderCard);
            });
        }

        function getStatusColor(status) {
            const colors = {
                pending: '#f39c12',
                confirmed: '#3498db',
                shipped: '#e67e22',
                delivered: '#27ae60',
                cancelled: '#e74c3c'
            };
            return colors[status] || '#333';
        }

        // Authentication
        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const userType = document.getElementById('user-type').value;
            
            // Mock authentication
            appData.currentUser = { email, type: userType };
            
            showMessage('Login successful!', 'success');
            
            // Redirect based on user type
            setTimeout(() => {
                if (userType === 'farmer') {
                    showSection('farmer-dashboard');
                } else if (userType === 'buyer') {
                    showSection('buyer-dashboard');
                } else if (userType === 'admin') {
                    showSection('admin-dashboard');
                }
            }, 1000);
        }

        function handleRegistration(event) {
            event.preventDefault();
            
            const userData = {
                id: appData.users.length + 1,
                name: document.getElementById('reg-name').value,
                email: document.getElementById('reg-email').value,
                phone: document.getElementById('reg-phone').value,
                type: document.getElementById('reg-type').value,
                address: document.getElementById('reg-address').value
            };
            
            if (userData.type === 'farmer') {
                userData.farmName = document.getElementById('farm-name').value;
                userData.farmSize = document.getElementById('farm-size').value;
            }
            
            appData.users.push(userData);
            showMessage('Registration successful! Please login.', 'success');
            
            setTimeout(() => {
                showSection('login');
            }, 1500);
        }

        function toggleFarmerFields() {
            const userType = document.getElementById('reg-type').value;
            const farmerFields = document.getElementById('farmer-fields');
            farmerFields.style.display = userType === 'farmer' ? 'block' : 'none';
        }

        // Admin functions
        function showUserManagement() {
            showMessage(`Total Users: ${appData.users.length}`, 'info');
        }

        function showOrderManagement() {
            showMessage(`Total Orders: ${appData.orders.length}`, 'info');
        }

        function showReports() {
            const totalRevenue = appData.orders.reduce((sum, order) => sum + order.totalAmount, 0);
            showMessage(`Platform Revenue: ₹${totalRevenue.toFixed(2)}`, 'info');
        }

        function showSettings() {
            showMessage('Platform settings panel would open here', 'info');
        }

        // Utility functions
        function showMessage(message, type = 'info') {
            const messageDiv = document.createElement('div');
            messageDiv.className = type === 'success' ? 'success-message' : 
                                  type === 'error' ? 'error-message' : 'success-message';
            messageDiv.textContent = message;
            
            // Insert at the beginning of the active section
            const activeSection = document.querySelector('.section.active');
            activeSection.insertBefore(messageDiv, activeSection.firstChild);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 3000);
        }

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            loadCrops();
            
            // Auto-show information section for demo
            setTimeout(() => {
                if (document.getElementById('home').classList.contains('active')) {
                    showSection('information');
                }
            }, 3000);
        });