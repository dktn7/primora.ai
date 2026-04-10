// Booking link configuration
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';

// Benefits data - updated to be specific to a discovery-call automation service
const benefits = [
    "Tailored to your exact workflow — no generic templates",
    "Discovery-first: we map your needs before building",
    "Integrates with your existing tools and systems",
    "Live automations deployed in days, not months",
    "UK-based support — secure and GDPR compliant",
    "No technical knowledge required on your end"
];

// Handle booking button clicks
function handleBooking() {
    window.open(BOOKING_LINK, '_blank');
}

// Create benefits cards
function createBenefitsCards() {
    const benefitsGrid = document.getElementById('benefitsGrid');
    const fragment = document.createDocumentFragment();

    benefits.forEach(benefit => {
        const benefitCard = document.createElement('div');
        benefitCard.className = 'benefit-card';
        
        const starIcon = document.createElement('div');
        starIcon.innerHTML = ` 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        `;
        starIcon.className = 'icon';
        
        const text = document.createElement('span');
        text.className = 'benefit-text';
        text.textContent = benefit;
        
        benefitCard.appendChild(starIcon);
        benefitCard.appendChild(text);
        
        fragment.appendChild(benefitCard);
        observeScroll(benefitCard);
    });

    benefitsGrid.appendChild(fragment);
}

// Function to observe the scroll animation
function observeScroll(element) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(element);
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    createBenefitsCards();

    // Fix: Typed.js - typed2 starts only after typed1 completes (prevents race condition)
    const typed1 = new Typed(".auto-type-1", {
        strings: ['<span class="gold-text">Automate</span> Your <span class="blue-text">Workflow</span>.'],
        typeSpeed: 100,
        loop: false,
        showCursor: false,
        onComplete: () => {
            new Typed(".auto-type-2", {
                strings: ['<span class="blue-text">Focus</span> on What <span class="gold-text">Matters</span>.'],
                typeSpeed: 100,
                loop: false,
                showCursor: true,
            });
        }
    });

    // Fix: smooth scroll moved inside DOMContentLoaded so elements exist
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Fix: hover only on feature-card — benefit-cards use CSS hover to avoid conflicting with slide-in animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
