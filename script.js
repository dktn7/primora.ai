// ── Booking ──
const BOOKING_LINK = 'https://calendly.com/rayyanulhaq365/consulting-call';
function handleBooking() { window.open(BOOKING_LINK, '_blank'); }

// ── Benefits data ──
const benefits = [
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>', text: 'Seamless integration with your existing tools and systems' },
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>', text: 'Custom automation workflows — built around your business' },
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>', text: 'Discovery-first: we map your exact needs before building' },
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>', text: 'Real-time data processing and analytics' },
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><path d="M8 9l-2 3 2 3"/><path d="M16 9l2 3-2 3"/></svg>', text: 'No coding required on your end' },
  { icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>', text: 'Enterprise-grade security — UK-based and GDPR compliant' }
];

// ── Benefits cards ──
function createBenefitsCards() {
  const grid = document.getElementById('benefitsGrid');
  benefits.forEach((b, i) => {
    const card = document.createElement('div');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(i * 100));
    card.className = 'group flex items-center gap-4 bg-[#232d4a]/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:border-[#D4BE54]/30 hover:-translate-y-0.5 transition-all duration-300';
    card.innerHTML = `<div class="w-12 h-12 bg-[#D4BE54]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#D4BE54] group-hover:scale-110 transition-transform duration-300">${b.icon}</div><p class="text-gray-300 leading-relaxed text-sm">${b.text}</p>`;
    grid.appendChild(card);
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  createBenefitsCards();

  AOS.init({
    duration: 900,
    once: true,
    offset: 0,
    startEvent: 'load'
  });

  // h1 height lock (safety net — CSS min-height is primary)
  const h1 = document.querySelector('h1');
  if (h1) {
    const lineH = parseFloat(getComputedStyle(h1).lineHeight) || 90;
    h1.style.minHeight = (lineH * 2 + 8) + 'px';
  }

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
});

// ── Neural brain canvas — HiDPI / retina aware ──
const canvas = document.getElementById('nodeCanvas');
const ctx    = canvas.getContext('2d');
const wrap   = canvas.parentElement;
const dpr    = Math.min(window.devicePixelRatio || 1, 3);
const isMobile = window.innerWidth < 640;

const LW = 220, LH = 130;

function setCanvasResolution() {
  const cssW = wrap.clientWidth || LW;
  const cssH = Math.round(cssW * LH / LW);
  canvas.width  = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  canvas.style.width  = cssW + 'px';
  canvas.style.height = cssH + 'px';
}
setCanvasResolution();

let _resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(_resizeTimer);
  _resizeTimer = setTimeout(() => {
    const newW = wrap.clientWidth || LW;
    if (Math.abs(newW - (parseInt(canvas.style.width) || 0)) > 10) {
      setCanvasResolution();
      buildNodes();
    }
  }, 250);
});

const BRAIN_PATH = (function () {
  const p = new Path2D();
  p.moveTo(110, 18);
  p.bezierCurveTo(70,  10, 30,  20,  22,  50);
  p.bezierCurveTo(14,  75, 28,  100, 50,  110);
  p.bezierCurveTo(65,  118, 80, 115, 90,  108);
  p.bezierCurveTo(96,  120, 104, 120, 110, 120);
  p.bezierCurveTo(116, 120, 124, 120, 130, 108);
  p.bezierCurveTo(140, 115, 155, 118, 170, 110);
  p.bezierCurveTo(192, 100, 206, 75,  198, 50);
  p.bezierCurveTo(190, 20,  150, 10,  110, 18);
  p.closePath();
  return p;
})();

const _off  = document.createElement('canvas');
_off.width  = LW;
_off.height = LH;
const _octx = _off.getContext('2d');
function pointInBrain(x, y) {
  return _octx.isPointInPath(BRAIN_PATH, x, y);
}

let _animating = true;
new IntersectionObserver(entries => {
  _animating = entries[0].isIntersecting;
  if (_animating) requestAnimationFrame(drawBrain);
}, { threshold: 0 }).observe(canvas);

const NODE_COUNT = isMobile ? 20 : 28;
let nodes = [];
function buildNodes() {
  nodes = [];
  let attempts = 0;
  while (nodes.length < NODE_COUNT && attempts < 3000) {
    const x = 22 + Math.random() * 176;
    const y = 18 + Math.random() * 102;
    if (pointInBrain(x, y)) {
      nodes.push({
        x, y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r:  Math.random() * 2 + 1.5,
        pulse:      Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }
    attempts++;
  }
}
buildNodes();

function drawBrain() {
  if (!_animating) return;
  const pw = canvas.width, ph = canvas.height;
  const sx = pw / LW, sy = ph / LH;
  ctx.clearRect(0, 0, pw, ph);
  ctx.save();
  ctx.scale(sx, sy);
  ctx.save();
  ctx.clip(BRAIN_PATH);
  ctx.fillStyle = 'rgba(96,165,250,0.03)';
  ctx.fill(BRAIN_PATH);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 55) {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `rgba(96,165,250,${(1 - dist / 55) * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }
  nodes.forEach(n => {
    n.pulse += n.pulseSpeed;
    const glow   = 0.5 + 0.5 * Math.sin(n.pulse);
    const alpha  = 0.4 + 0.5 * glow;
    const radius = n.r + glow * 1.2;
    const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 3);
    grad.addColorStop(0, `rgba(212,190,84,${alpha * 0.6})`);
    grad.addColorStop(1, 'rgba(212,190,84,0)');
    ctx.beginPath(); ctx.arc(n.x, n.y, radius * 3, 0, Math.PI * 2);
    ctx.fillStyle = grad; ctx.fill();
    ctx.beginPath(); ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(212,190,84,${alpha})`; ctx.fill();
    const nx = n.x + n.vx, ny = n.y + n.vy;
    if (pointInBrain(nx, ny)) { n.x = nx; n.y = ny; }
    else { n.vx *= -1; n.vy *= -1; }
  });
  ctx.restore();
  ctx.strokeStyle = 'rgba(96,165,250,0.5)';
  ctx.lineWidth   = 1.5;
  ctx.stroke(BRAIN_PATH);
  ctx.beginPath();
  ctx.moveTo(110, 48);
  ctx.bezierCurveTo(106, 70, 106, 90, 110, 112);
  ctx.strokeStyle = 'rgba(96,165,250,0.3)';
  ctx.lineWidth   = 1;
  ctx.stroke();
  ctx.restore();
  requestAnimationFrame(drawBrain);
}
drawBrain();

// ── Checklist ticker ──
const items = document.querySelectorAll('.check-item');
function tickNext() {
  items.forEach(i => { i.classList.remove('done'); i.querySelector('.check-box').textContent = ''; });
  let step = 0;
  function markNext() {
    if (step >= items.length) { setTimeout(tickNext, 1800); return; }
    items[step].classList.add('done');
    items[step].querySelector('.check-box').textContent = '\u2713';
    step++;
    setTimeout(markNext, 600);
  }
  markNext();
}
tickNext();

// ── GSAP doodle story ──
function playStory() {
  const tl = gsap.timeline({ onComplete: () => gsap.delayedCall(1.5, playStory) });
  tl.set(['#desk','#phone','#phoneScreen','#callWave1','#callWave2','#connectArrow','#arrowHead',
          '#brainDoodle','#brainSplit','#connectArrow2','#arrowHead2',
          '#screenBody','#screenStand','#screenBase','#liveGlow','#liveText'], {
    strokeDashoffset: (i, el) => el.getTotalLength ? el.getTotalLength() : parseFloat(el.getAttribute('stroke-dasharray'))
  });
  tl.set(['#label1','#label2','#label3','#neuralSparks','#phoneScreen','#liveGlow','#liveText'], { opacity: 0 });
  tl
    .to('#desk',          { strokeDashoffset: 0, duration: 0.35, ease: 'power2.out' })
    .to('#phone',         { strokeDashoffset: 0, duration: 0.35, ease: 'power2.out' }, '-=0.1')
    .to('#phoneScreen',   { opacity: 1, duration: 0.2 }, '-=0.05')
    .to('#callWave1',     { strokeDashoffset: 0, duration: 0.25, ease: 'power1.out' })
    .to('#callWave2',     { strokeDashoffset: 0, duration: 0.25, ease: 'power1.out' }, '-=0.1')
    .to('#label1',        { opacity: 1, duration: 0.3 })
    .to('#connectArrow',  { strokeDashoffset: 0, duration: 0.45, ease: 'power2.inOut' })
    .to('#arrowHead',     { strokeDashoffset: 0, duration: 0.2,  ease: 'power2.out' }, '-=0.1')
    .to('#brainDoodle',   { strokeDashoffset: 0, duration: 1.0,  ease: 'power1.inOut' })
    .to('#brainSplit',    { strokeDashoffset: 0, duration: 0.4,  ease: 'power1.out' }, '-=0.35')
    .to('#label2',        { opacity: 1, duration: 0.3 })
    .to('#neuralSparks',  { opacity: 1, duration: 0.35 })
    .to('#neuralSparks circle', { scale: 1.5, transformOrigin: 'center', stagger: 0.08, duration: 0.25, ease: 'power2.out', yoyo: true, repeat: 1 })
    .to('#connectArrow2', { strokeDashoffset: 0, duration: 0.45, ease: 'power2.inOut' })
    .to('#arrowHead2',    { strokeDashoffset: 0, duration: 0.2,  ease: 'power2.out' }, '-=0.1')
    .to('#screenBody',    { strokeDashoffset: 0, duration: 0.45, ease: 'power2.out' })
    .to('#screenStand',   { strokeDashoffset: 0, duration: 0.2,  ease: 'power2.out' }, '-=0.05')
    .to('#screenBase',    { strokeDashoffset: 0, duration: 0.2,  ease: 'power2.out' }, '-=0.05')
    .to('#liveGlow',      { opacity: 1, duration: 0.2 })
    .to('#liveText',      { opacity: 1, duration: 0.2 }, '-=0.05')
    .to('#label3',        { opacity: 1, duration: 0.3 });
}
window.addEventListener('load', () => gsap.delayedCall(0.5, playStory));

// ── Smooth scroll — dynamic: recalculate header height at click time, not page load ──
// This handles Typed.js headline shifts that change the page layout after load.
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();
  const target = document.getElementById(link.getAttribute('href').slice(1));
  if (!target) return;

  // Measure the live header height right now and apply it to the target element
  const navHeight = document.querySelector('header').offsetHeight;
  target.style.scrollMarginTop = navHeight + 'px';

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
