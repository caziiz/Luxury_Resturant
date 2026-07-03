/* ============================================
   DELICIOUS BITES - RESTAURANT WEBSITE
   JavaScript - Interactive Features & Functionality
   ============================================ */

// ============================================
// MENU DATA
// ============================================

const menuItems = [
    {
        category: 'breakfast',
        name: 'French Toast',
        description: 'Classic French toast with berries and syrup',
        price: '$12.99',
        rating: '⭐ 4.8',
        image: 'images/French-Toast.jpg'
    },
    {
        category: 'breakfast',
        name: 'Pancakes Delight',
        description: 'Fluffy pancakes with fresh whipped cream',
        price: '$14.99',
        rating: '⭐ 4.9',
        image: 'images/Pancakes-Delight.jpg'
    },
    {
        category: 'lunch',
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with parmesan and croutons',
        price: '$11.99',
        rating: '⭐ 4.7',
        image: 'images/menu-salad.jpg'
    },
    {
        category: 'lunch',
        name: 'Grilled Chicken Sandwich',
        description: 'Juicy chicken breast with fresh vegetables',
        price: '$13.99',
        rating: '⭐ 4.8',
        image: 'images/Grilled-Chicken-Sandwich.jpg'
    },
    {
        category: 'dinner',
        name: 'Prime Rib Steak',
        description: 'Premium cut with garlic butter and vegetables',
        price: '$34.99',
        rating: '⭐ 5.0',
        image: 'images/Prime-Rib-Steak.jpg'
    },
    {
        category: 'dinner',
        name: 'Salmon Fillet',
        description: 'Grilled salmon with lemon and herbs',
        price: '$28.99',
        rating: '⭐ 4.9',
        image: 'images/gallery-salmon.jpg'
    },
    {
        category: 'dinner',
        name: 'Lobster Risotto',
        description: 'Creamy risotto with fresh lobster',
        price: '$32.99',
        rating: '⭐ 5.0',
        image: 'images/Lobster-Risotto.jpg'
    },
    {
        category: 'dinner',
        name: 'Duck Confit',
        description: 'Tender duck leg with thyme and garlic',
        price: '$29.99',
        rating: '⭐ 4.8',
        image: 'images/Duck-Confit.jpg'
    },
    {
        category: 'desserts',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center',
        price: '$8.99',
        rating: '⭐ 4.9',
        image: 'images/menu-dessert.jpg'
    },
    {
        category: 'desserts',
        name: 'Cheesecake',
        description: 'New York style cheesecake with berry sauce',
        price: '$7.99',
        rating: '⭐ 4.8',
        image: 'images/Cheesecake.jpg'
    },
    {
        category: 'desserts',
        name: 'Crème Brûlée',
        description: 'Classic vanilla crème brûlée with caramel top',
        price: '$8.99',
        rating: '⭐ 5.0',
        image: 'images/Crème-Brûlée.jpg'
    },
    {
        category: 'desserts',
        name: 'Tiramisu',
        description: 'Italian dessert with mascarpone and coffee',
        price: '$7.99',
        rating: '⭐ 4.9',
        image: 'images/Tiramisu.jpg'
    },
    {
        category: 'drinks',
        name: 'Espresso',
        description: 'Strong Italian espresso',
        price: '$3.99',
        rating: '⭐ 4.8',
        image: 'images/Espresso.jpg'
    },
    {
        category: 'drinks',
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice',
        price: '$5.99',
        rating: '⭐ 4.9',
        image: 'images/Fresh-Orange-Juice.jpg'
    },
   
    {
        category: 'drinks',
        name: 'Signature Cocktail',
        description: 'House special craft cocktail',
        price: '$12.99',
        rating: '⭐ 5.0',
        image: 'images/menu-cocktail.jpg'
    }
];

// ============================================
// GALLERY DATA
// ============================================

const galleryImages = [
    {
        src: 'images/gallery-salmon.jpg',
        alt: 'Fresh Salmon'
    },
    {
        src: 'images/gallery-pasta.jpg',
        alt: 'Gourmet Pasta Plate'
    },
    {
        src: 'images/gallery-table.jpg',
        alt: 'Fine Dining Setup'
    },
    {
        src: 'images/gallery-kitchen.jpg',
        alt: 'Chef in Action'
    },
    {
        src: 'images/customer-1.jpg',
        alt: 'Elegant Ambience'
    },
    {
        src: 'images/customer-2.jpg',
        alt: 'Guest Experience'
    },
    {
        src: 'images/Duck-Confit.jpg',
        alt: 'Duck Confit'
    },
    {
        src: 'images/Culinary-Artistry.jpg',
        alt: 'Culinary Artistry'
    }
];

// ============================================
// TESTIMONIALS DATA
// ============================================

const testimonials = [
    {
        name: 'John Smith',
        rating: '⭐⭐⭐⭐⭐',
        text: 'Exceptional dining experience! The food was absolutely delicious and the service was impeccable. Highly recommend!',
        avatar: 'images/customer-1.jpg'
    },
    {
        name: 'Sarah Johnson',
        rating: '⭐⭐⭐⭐⭐',
        text: 'The best restaurant in the city! Fresh ingredients, talented chefs, and a wonderful ambiance. Perfect for special occasions.',
        avatar: 'images/customer-2.jpg'
    },
    {
        name: 'Michael Chen',
        rating: '⭐⭐⭐⭐⭐',
        text: 'Outstanding culinary creations with attention to detail. The presentation was beautiful and the taste was incredible.',
        avatar: 'images/chef-avatar.jpg'
    },
    {
        name: 'Emily Davis',
        rating: '⭐⭐⭐⭐⭐',
        text: 'My anniversary dinner was truly memorable! Thank you for making it special with your excellent service.',
        avatar: ''
    },
    {
        name: 'David Martinez',
        rating: '⭐⭐⭐⭐⭐',
        text: 'Truly a gem! Every dish was prepared to perfection. The wine pairing suggestions were spot on.',
        avatar: ''
    }
];

// ============================================
// GLOBAL VARIABLES
// ============================================

let currentGalleryIndex = 0;
let currentTestimonialIndex = 0;
let testimonialAutoPlayInterval;
let activeFAQ = null;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all functions
    renderMenuItems('all');
    renderGallery();
    renderTestimonials();
    setupEventListeners();
    observeScrollAnimations();
    startTestimonialAutoPlay();
});

// ============================================
// NAVIGATION & SCROLL FUNCTIONS
// ============================================

/**
 * Setup all event listeners for navigation and interactive elements
 */
function setupEventListeners() {
    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Navigation links - close menu on click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            updateActiveNavLink(link.dataset.link);
        });
    });

    // Scroll event for navbar background and back to top button
    window.addEventListener('scroll', () => {
        handleScrollEffects();
    });

    // Menu filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(btn.dataset.filter);
        });
    });

    // Gallery items click for lightbox
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Lightbox close button
    const lightboxClose = document.querySelector('.lightbox-close');
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close lightbox on background click
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('lightbox').classList.contains('show')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                previousImage();
            }
        }
    });

    // Countdown timers
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
}

/**
 * Handle scroll effects - navbar background and back to top button
 */
function handleScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('backToTop');

    // Navbar background change on scroll
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}

/**
 * Scroll to top smoothly
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Update active navigation link based on current section
 */
function updateActiveNavLink(linkName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.link === linkName) {
            link.classList.add('active');
        }
    });
}

// ============================================
// MENU FUNCTIONS
// ============================================

/**
 * Render menu items based on category filter
 */
function renderMenuItems(category) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';

    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const menuItemEl = document.createElement('div');
        menuItemEl.classList.add('menu-item', 'show');
        const imageHtml = item.image
            ? `<div class="menu-item-image"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>`
            : `<div class="menu-item-image placeholder"><span>${item.category}</span></div>`;

        menuItemEl.innerHTML = `
            ${imageHtml}
            <div class="menu-item-content">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">${item.price}</span>
                    <span class="menu-item-rating">${item.rating}</span>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItemEl);
    });

    // Trigger scroll animation for menu items
    observeScrollAnimations();
}

// ============================================
// GALLERY FUNCTIONS
// ============================================

/**
 * Render gallery items
 */
function renderGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', 'animate-on-scroll');
        const imageHtml = image.src
            ? `<img src="${image.src}" alt="${image.alt}" loading="lazy">`
            : `<div class="gallery-image placeholder"><span>${image.alt}</span></div>`;

        galleryItem.innerHTML = `
            ${imageHtml}
            <div class="gallery-overlay">
                <div class="gallery-icon">🔍</div>
            </div>
        `;
        if (image.src) {
            galleryItem.addEventListener('click', () => openLightbox(index));
        }
        galleryGrid.appendChild(galleryItem);
    });
}

/**
 * Open lightbox with image
 */
function openLightbox(index) {
    currentGalleryIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[index].src;
    lightboxCaption.textContent = `${index + 1} / ${galleryImages.length} - ${galleryImages[index].alt}`;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

/**
 * Close lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = 'auto';
}

/**
 * Navigate to next image in lightbox
 */
function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

/**
 * Navigate to previous image in lightbox
 */
function previousImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

/**
 * Update lightbox image display
 */
function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = galleryImages[currentGalleryIndex].src;
    lightboxCaption.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length} - ${galleryImages[currentGalleryIndex].alt}`;
}

// ============================================
// TESTIMONIALS FUNCTIONS
// ============================================

/**
 * Render testimonial cards
 */
function renderTestimonials() {
    const testimonialsContainer = document.getElementById('testimonialsContainer');
    testimonialsContainer.innerHTML = '';

    testimonials.forEach((testimonial) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial-card');
        const avatarHtml = testimonial.avatar
            ? `<img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">`
            : `<div class="testimonial-avatar placeholder">${testimonial.name.split(' ')[0]}</div>`;

        testimonialCard.innerHTML = `
            <div class="testimonial-header">
                ${avatarHtml}
                <div class="testimonial-info">
                    <h4>${testimonial.name}</h4>
                    <div class="testimonial-rating">${testimonial.rating}</div>
                </div>
            </div>
            <p class="testimonial-text">"${testimonial.text}"</p>
        `;
        testimonialsContainer.appendChild(testimonialCard);
    });
}

/**
 * Start auto-play for testimonials slider
 */
function startTestimonialAutoPlay() {
    testimonialAutoPlayInterval = setInterval(() => {
        nextTestimonial();
    }, 5000);
}

/**
 * Move to next testimonial
 */
function nextTestimonial() {
    const container = document.getElementById('testimonialsContainer');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonialScroll(container);
}

/**
 * Move to previous testimonial
 */
function previousTestimonial() {
    const container = document.getElementById('testimonialsContainer');
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonialScroll(container);
}

/**
 * Update testimonial scroll position
 */
function updateTestimonialScroll(container) {
    const scrollAmount = currentTestimonialIndex * container.offsetWidth;
    container.style.transform = `translateX(-${scrollAmount}px)`;
}

// ============================================
// FAQ FUNCTIONS
// ============================================

/**
 * Toggle FAQ accordion
 */
function toggleFAQ(index) {
    const faqItems = document.querySelectorAll('.faq-item');
    const currentItem = faqItems[index];

    // Close previously open FAQ
    if (activeFAQ !== null && activeFAQ !== index) {
        faqItems[activeFAQ].classList.remove('active');
    }

    // Toggle current FAQ
    currentItem.classList.toggle('active');
    activeFAQ = currentItem.classList.contains('active') ? index : null;
}

// ============================================
// FORM FUNCTIONS
// ============================================

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number
 */
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

/**
 * Handle reservation form submission
 */
function handleReservationSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const messageEl = document.getElementById('reservationMessage');

    // Get form values
    const name = document.getElementById('reserveName').value.trim();
    const email = document.getElementById('reserveEmail').value.trim();
    const phone = document.getElementById('reservePhone').value.trim();
    const date = document.getElementById('reserveDate').value;
    const time = document.getElementById('reserveTime').value;
    const guests = document.getElementById('reserveGuests').value;

    // Validation
    if (!name) {
        showMessage(messageEl, 'Please enter your name', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(messageEl, 'Please enter a valid email', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showMessage(messageEl, 'Please enter a valid phone number', 'error');
        return;
    }

    // Check if date is in future
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
        showMessage(messageEl, 'Please select a future date', 'error');
        return;
    }

    if (!guests) {
        showMessage(messageEl, 'Please select number of guests', 'error');
        return;
    }

    // Success
    showMessage(messageEl, '✓ Reservation confirmed! We look forward to your visit.', 'success');
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        messageEl.innerHTML = '';
        messageEl.className = '';
    }, 5000);
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const messageEl = document.getElementById('contactMessage');

    const inputs = form.querySelectorAll('input, textarea');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const subject = inputs[2].value.trim();
    const message = inputs[3].value.trim();

    // Validation
    if (!name) {
        showMessage(messageEl, 'Please enter your name', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage(messageEl, 'Please enter a valid email', 'error');
        return;
    }

    if (!subject) {
        showMessage(messageEl, 'Please enter a subject', 'error');
        return;
    }

    if (!message) {
        showMessage(messageEl, 'Please enter a message', 'error');
        return;
    }

    // Success
    showMessage(messageEl, '✓ Message sent successfully! We will get back to you soon.', 'success');
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        messageEl.innerHTML = '';
        messageEl.className = '';
    }, 5000);
}

/**
 * Handle newsletter subscription
 */
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const messageEl = document.getElementById('newsletterMessage');
    const email = form.querySelector('input[type="email"]').value.trim();

    if (!isValidEmail(email)) {
        showMessage(messageEl, 'Please enter a valid email', 'error');
        return;
    }

    showMessage(messageEl, '✓ Successfully subscribed! Check your inbox.', 'success');
    form.reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        messageEl.innerHTML = '';
        messageEl.className = '';
    }, 5000);
}

/**
 * Display message in form
 */
function showMessage(element, message, type) {
    element.innerHTML = message;
    element.className = `form-message ${type}`;
}

// ============================================
// COUNTER ANIMATIONS
// ============================================

/**
 * Animate counter numbers
 */
function animateCounter(element, target) {
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 30);
}

/**
 * Start counter animations when section is visible
 */
function startCounterAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-target]');
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                if (counter.textContent === '0') {
                    animateCounter(counter, target);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

/**
 * Observe elements for scroll animations
 */
function observeScrollAnimations() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, options);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Observe counters
    const counterObserver = new IntersectionObserver(startCounterAnimation, options);
    const aboutStats = document.querySelector('.about-stats');
    const statsSection = document.querySelector('.statistics');
    
    if (aboutStats) counterObserver.observe(aboutStats);
    if (statsSection) counterObserver.observe(statsSection);
}

// ============================================
// COUNTDOWN TIMER
// ============================================

/**
 * Update countdown timers
 */
function updateCountdowns() {
    const countdowns = document.querySelectorAll('.countdown');

    countdowns.forEach(countdown => {
        const targetDate = new Date(countdown.dataset.date).getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

            // Update countdown display
            const countdownItems = countdown.querySelectorAll('.countdown-value');
            if (countdownItems.length > 0) {
                countdownItems[0].textContent = days;
                countdownItems[1].textContent = hours;
                countdownItems[2].textContent = minutes;
            }
        } else {
            // Countdown finished
            const countdownItems = countdown.querySelectorAll('.countdown-value');
            countdownItems.forEach(item => item.textContent = '0');
        }
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format date to readable format
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', (e) => {
    // Skip to main content with Shift+1
    if (e.shiftKey && e.key === '1') {
        document.getElementById('home').focus();
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy load images
 */
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ============================================
// SMOOTH SCROLL BEHAVIOR
// ============================================

/**
 * Smooth scroll on hash links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// MOBILE MENU AUTO-CLOSE
// ============================================

/**
 * Close mobile menu when window is resized
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// ADDITIONAL ENHANCEMENTS
// ============================================

/**
 * Add animation to elements on scroll
 */
window.addEventListener('scroll', debounce(() => {
    const scrollPos = window.scrollY;
    
    // Parallax effect for hero
    const hero = document.querySelector('.hero');
    if (hero && scrollPos < hero.offsetHeight) {
        hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
    }
}, 10));

// ============================================
// ERROR HANDLING
// ============================================

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});

// ============================================
// LOG INITIALIZATION
// ============================================

console.log('%cDelicious Bites Restaurant Website', 'font-size: 16px; font-weight: bold; color: #8B0000;');
console.log('%cWebsite loaded successfully!', 'font-size: 12px; color: #D4AF37;');
console.log('%cPowered by Vanilla JavaScript | HTML5 | CSS3', 'font-size: 10px; color: #666;');
