// Booking link configuration
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';

// Benefits data with paired Lucide SVG icons
const benefits = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
        text: "Seamless integration with your existing tools and systems"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>`,
        text: "Custom automation workflows — built around your business"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
        text: "Discovery-first: we map your exact needs before building"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
        text: "Real-time data processing and analytics"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="4 2"/></svg>`,
        text: "No coding required on your end"
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
        text: "Enterprise-grade security — UK-based and GDPR compliant"
    }
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

        const iconWrap = document.createElement('div');
        iconWrap.className = 'benefit-icon-wrap';
        iconWrap.innerHTML = benefit.icon;

        const text = document.createElement('span');
        text.className = 'benefit-text';
        text.textContent = benefit.text;

        benefitCard.appendChild(iconWrap);
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

    // typed2 starts only after typed1 completes
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

    // Smooth scroll inside DOMContentLoaded
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Hover only on feature-card to avoid conflicting with benefit-card slide-in animation
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});
