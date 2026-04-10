// Booking link
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';
function handleBooking() { window.open(BOOKING_LINK, '_blank'); }

// Benefits with icons
const benefits = [
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>', text: 'Seamless integration with your existing tools and systems' },
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 0 0 14.14"/><path d="M4.93 4.93a10 10 0 0 1 0 14.14"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/></svg>', text: 'Custom automation workflows \u2014 built around your business' },
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>', text: 'Discovery-first: we map your exact needs before building' },
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>', text: 'Real-time data processing and analytics' },
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="12" y1="2" x2="12" y2="22" stroke-dasharray="4 2"/></svg>', text: 'No coding required on your end' },
    { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>', text: 'Enterprise-grade security \u2014 UK-based and GDPR compliant' }
];

function createBenefitsCards() {
    const grid = document.getElementById('benefitsGrid');
    benefits.forEach((b, i) => {
        const card = document.createElement('div');
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', `${i * 100}`);
        card.className = 'group flex items-center gap-4 bg-[#232d4a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-[#D4BE54]/30 hover:-translate-y-0.5 transition-all duration-300';
        card.innerHTML = `
            <div class="w-12 h-12 bg-[#D4BE54]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#D4BE54] group-hover:scale-110 transition-transform duration-300">${b.icon}</div>
            <p class="text-gray-300 leading-relaxed text-sm">${b.text}</p>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 900, once: true, offset: 80 });
    createBenefitsCards();

    // Typed.js — Stop Doing It Manually. / Start Automating It.
    new Typed('.auto-type-1', {
        strings: ['Stop Doing It <span style="color:#D4BE54">Manually</span>.'],
        typeSpeed: 90,
        showCursor: false,
        loop: false,
        onComplete: () => {
            new Typed('.auto-type-2', {
                strings: ['Start <span style="color:#60A5FA">Automating</span> It.'],
                typeSpeed: 90,
                showCursor: true,
                loop: false
            });
        }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Hover on feature cards only
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
