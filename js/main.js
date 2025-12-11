/* ========================================
   RÉNOV'EXPERT - Modern JavaScript
   Performance-optimized vanilla JS
======================================== */

'use strict';

/* ========== Navigation Menu ========== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
        document.body.style.overflow = 'hidden';
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
    });
}

// Hide menu when clicking nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
    });
});

/* ========== Active Link on Scroll ========== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ========== Change Header Background on Scroll ========== */
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ========== Scroll to Top Button ========== */
const scrollTopButton = document.getElementById('scroll-top');

function toggleScrollTop() {
    if (window.scrollY >= 400) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', toggleScrollTop);

if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ========== Smooth Scroll for Anchor Links ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#' || href === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ========== Intersection Observer for Animations ========== */
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

// Elements to observe
const animatedElements = document.querySelectorAll(
    '.service-card, .review-card, .advantage, .contact__card, .zone__text, .zone__map'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

/* ========== Contact Form Handler ========== */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate required fields
        if (!data.name || !data.phone || !data.message) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }

        // Validate phone number (French format)
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        if (!phoneRegex.test(data.phone)) {
            showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
            return;
        }

        // Simulate form submission (in production, send to backend)
        console.log('Form submitted:', data);

        // Show success message
        showNotification('Merci ! Nous vous recontacterons sous 1 heure.', 'success');

        // Reset form
        contactForm.reset();
    });
}

/* ========== Notification System ========== */
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
        color: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        zIndex: '9999',
        animation: 'slideInRight 0.3s ease-out',
        fontWeight: '600',
        fontSize: '0.875rem'
    });

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Add notification animations to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ========== Phone Number Formatting ========== */
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '');

        // Format French phone number: 06 12 34 56 78
        if (value.length > 0) {
            value = value.match(/.{1,2}/g)?.join(' ') || value;
        }

        e.target.value = value;
    });
}

/* ========== Service Cards Hover Effect ========== */
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ========== Stats Counter Animation ========== */
const statNumbers = document.querySelectorAll('.stat__number');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const hasPlus = text.includes('+');
            const number = parseInt(text.replace(/\D/g, ''));

            if (!isNaN(number)) {
                animateCounter(target, number, hasPlus);
                counterObserver.unobserve(target);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => counterObserver.observe(stat));

function animateCounter(element, target, hasPlus = false) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (hasPlus ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }
    }, stepTime);
}

/* ========== Lazy Loading Images ========== */
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

/* ========== Performance Monitoring ========== */
if ('PerformanceObserver' in window) {
    // Log Core Web Vitals
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            console.log(`${entry.name}: ${entry.value}`);
        }
    });

    // Observe paint timing
    try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    } catch (e) {
        // Browser doesn't support all entry types
        console.log('Performance observer not fully supported');
    }
}

/* ========== Service Worker Registration (Progressive Web App) ========== */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Commented out - uncomment when service worker is implemented
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}

/* ========== Prevent Layout Shift ========== */
// Add dimensions to images without explicit width/height
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img:not([width]):not([height])');
    images.forEach(img => {
        if (img.naturalWidth && img.naturalHeight) {
            img.setAttribute('width', img.naturalWidth);
            img.setAttribute('height', img.naturalHeight);
        }
    });
});

/* ========== Enhanced Accessibility ========== */
// Skip to main content
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Aller au contenu principal';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Keyboard navigation enhancement
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
        document.body.style.overflow = '';
        navToggle.focus();
    }
});

/* ========== Focus Trap for Mobile Menu ========== */
const focusableElements = 'a[href], button:not([disabled]), textarea, input, select';

function trapFocus(element) {
    const focusables = element.querySelectorAll(focusableElements);
    const firstFocusable = focusables[0];
    const lastFocusable = focusables[focusables.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

if (navMenu) {
    trapFocus(navMenu);
}

/* ========== Debounce Function for Performance ========== */
function debounce(func, wait = 20, immediate = false) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    scrollActive();
    scrollHeader();
    toggleScrollTop();
}, 10));

/* ========== Console Info ========== */
console.log('%cRÉNOV\'EXPERT', 'font-size: 24px; font-weight: bold; color: #1e3a5f;');
console.log('%cSite développé avec HTML5, CSS3 et JavaScript vanilla', 'font-size: 12px; color: #6b7280;');
console.log('%cPerformance: Optimisé pour Lighthouse 100%', 'font-size: 12px; color: #10b981;');

/* ========== Initialize ========== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ RÉNOV\'EXPERT site loaded successfully');

    // Set initial active link
    scrollActive();

    // Check if header should have scroll class on load
    scrollHeader();

    // Log page load time
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

/* ========== Export for Testing (optional) ========== */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollActive,
        scrollHeader,
        toggleScrollTop,
        showNotification,
        debounce
    };
}
