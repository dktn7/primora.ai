// Booking link configuration
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';

// Benefits data — blend of original + improved discovery-call focused copy
const benefits = [
    "Seamless integration with your existing tools and systems",
    "Custom automation workflows — built around your business",
    "Discovery-first: we map your exact needs before building",
    "Real-time data processing and analytics",
    "No coding required on your end",
    "Enterprise-grade security — UK-based and GDPR compliant"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

    // Fix: typed2 starts only after typed1 completes (prevents race condition)
    new Typed(".auto-type-1", {
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

    // Fix: smooth scroll inside DOMContentLoaded so elements are available
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
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});
