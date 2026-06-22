// =============================================
// ÉCOLE DE DANSE ADK — Application principale
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initParticles();
  initHero();
  initCourses();
  initPlanning();
  initInscription();
  initParents();
  initActualites();
  initGalerie();
  initContact();
  initFooter();
  initReveal();
  initCountdown();
  initMobileMenu();
});

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const links = document.querySelectorAll('.nav-link[data-section]');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Highlight active section
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    });
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  });

  // Smooth scroll
  document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(el.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    });
  });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
  const burger = document.querySelector('.nav-burger');
  const menu = document.querySelector('.mobile-menu');
  burger.addEventListener('click', () => menu.classList.toggle('open'));
}
function closeMobileMenu() {
  document.querySelector('.mobile-menu').classList.remove('open');
}

// =============================================
// PARTICLES
// =============================================
function initParticles() {
  const container = document.querySelector('.hero-particles');
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    p.style.animationDuration = (Math.random() * 10 + 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(p);
  }
}

// =============================================
// HERO
// =============================================
function initHero() {
  // Parallax on scroll
  const heroBg = document.querySelector('.hero-bg');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }, { passive: true });

  // Animate bg on load
  setTimeout(() => heroBg.classList.add('loaded'), 100);

  // Animated counters
  const { stats } = DATA.school;
  animateCounter('stat-eleves', stats.eleves);
  animateCounter('stat-profs', stats.professeurs);
  animateCounter('stat-styles', stats.styles);
  animateCounter('stat-ans', new Date().getFullYear() - DATA.school.founded);
}

function animateCounter(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + (id === 'stat-ans' ? '' : '+');
    if (current >= target) clearInterval(timer);
  }, 25);
}

// =============================================
// COURSES
// =============================================
function initCourses() {
  const grid = document.getElementById('courses-grid');
  const filters = document.querySelectorAll('.filter-btn');

  // Render cards
  DATA.courses.forEach(course => {
    const card = createCourseCard(course);
    grid.appendChild(card);
  });

  // Filter logic
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll('.course-card').forEach(card => {
        const match = filter === 'all' || card.dataset.style === filter;
        card.classList.toggle('hidden', !match);
      });
    });
  });
}

function createCourseCard(course) {
  const card = document.createElement('div');
  card.className = 'course-card reveal';
  card.dataset.style = course.style;

  const tagLabel = {
    classique: 'Classique', contemporain: 'Contemporain',
    jazz: 'Jazz', hiphop: 'Hip-Hop', eveil: 'Éveil'
  }[course.style];

  const imgHTML = course.image
    ? `<img src="${course.image}" alt="${course.name}" class="course-img" loading="lazy">`
    : `<div class="course-img-placeholder" style="background:linear-gradient(135deg,#1a1a1a,#242424)">${course.emoji}</div>`;

  card.innerHTML = `
    ${imgHTML}
    <div class="course-body">
      <span class="course-tag tag-${course.style}">${tagLabel}</span>
      <h3 class="course-name">${course.name}</h3>
      <p class="course-desc">${course.desc}</p>
      <div class="course-meta">
        <span class="course-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          ${course.schedule[0]}
        </span>
        <span class="course-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          ${course.ages}
        </span>
        <span class="course-meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          ${course.levels}
        </span>
      </div>
    </div>
  `;
  return card;
}

// =============================================
// PLANNING
// =============================================
function initPlanning() {
  const grid = document.getElementById('planning-grid');
  const weekLabel = document.getElementById('planning-week');
  let weekOffset = 0;

  document.getElementById('plan-prev').addEventListener('click', () => { weekOffset--; renderPlanning(grid, weekLabel, weekOffset); });
  document.getElementById('plan-next').addEventListener('click', () => { weekOffset++; renderPlanning(grid, weekLabel, weekOffset); });

  renderPlanning(grid, weekLabel, weekOffset);
}

function renderPlanning(grid, weekLabel, offset) {
  grid.innerHTML = '';
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1 + offset * 7);

  const days = DATA.schedule.days;
  const dates = days.map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  // Week label
  const lastDay = dates[5];
  weekLabel.textContent = `${monday.getDate()} – ${lastDay.getDate()} ${lastDay.toLocaleDateString('fr-BE', { month: 'long', year: 'numeric' })}`;

  // Header row
  grid.appendChild(createCell('div', '', ''));
  days.forEach((day, i) => {
    const cell = document.createElement('div');
    cell.className = 'planning-header-cell';
    const isToday = dates[i].toDateString() === today.toDateString();
    cell.style.borderBottom = isToday ? '2px solid var(--gold)' : '';
    cell.innerHTML = `<div class="day">${day}</div><div class="date" style="color:${isToday ? 'var(--gold)' : ''}">${dates[i].getDate()}</div>`;
    grid.appendChild(cell);
  });

  // Time rows
  const hours = ["09h00", "10h00", "11h00", "14h00", "15h00", "16h00", "17h00", "18h00", "19h00"];
  hours.forEach(hour => {
    // Time label
    const timeCell = document.createElement('div');
    timeCell.className = 'planning-time-cell';
    timeCell.textContent = hour;
    grid.appendChild(timeCell);

    // Day slots
    days.forEach((_, dayIdx) => {
      const slot = document.createElement('div');
      const match = DATA.schedule.slots.find(s => s.day === dayIdx && s.hour === hour);
      if (match) {
        slot.className = `planning-course-block block-${match.style}`;
        slot.innerHTML = `<div class="block-name">${match.course}</div><div class="block-time">${match.hour}</div>`;
        slot.title = match.course;
      } else {
        slot.className = 'planning-slot';
      }
      grid.appendChild(slot);
    });
  });
}

function createCell(tag, cls, content) {
  const el = document.createElement(tag);
  el.className = cls;
  el.innerHTML = content;
  return el;
}

// =============================================
// INSCRIPTION
// =============================================
function initInscription() {
  const form = document.getElementById('inscription-form');
  const success = document.getElementById('form-success');
  const courseSelects = document.getElementById('course-checkboxes');

  // Populate course checkboxes
  DATA.courses.forEach(course => {
    const label = document.createElement('label');
    label.className = 'form-checkbox';
    label.innerHTML = `<input type="checkbox" name="cours" value="${course.name}"> ${course.emoji} ${course.name}`;
    courseSelects.appendChild(label);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoi en cours...';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      success.style.display = 'block';
    }, 1500);
  });
}

// =============================================
// ESPACE PARENTS
// =============================================
function initParents() {
  const loginCard = document.getElementById('login-card');
  const dashboard = document.getElementById('dashboard');
  const loginForm = document.getElementById('login-form');
  const logoutBtn = document.getElementById('logout-btn');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('parent-email').value;
    const pass = document.getElementById('parent-password').value;

    if (email === DATA.demoParent.email && pass === DATA.demoParent.password) {
      loginCard.classList.add('hidden');
      dashboard.classList.add('active');
      renderDashboard();
    } else {
      showToast('❌ Email ou mot de passe incorrect', 'error');
    }
  });

  logoutBtn.addEventListener('click', () => {
    loginCard.classList.remove('hidden');
    dashboard.classList.remove('active');
    loginForm.reset();
  });
}

function renderDashboard() {
  const parent = DATA.demoParent;
  const child = parent.children[0];

  document.getElementById('welcome-name').textContent = parent.name;
  document.getElementById('child-name-dash').textContent = child.name;
  document.getElementById('child-courses-count').textContent = child.courses.length;

  const presents = child.attendance.filter(a => a.status === 'present').length;
  document.getElementById('attendance-rate').textContent =
    Math.round(presents / child.attendance.length * 100) + '%';

  const list = document.getElementById('attendance-list');
  list.innerHTML = child.attendance.map(a => `
    <div class="attendance-item">
      <span>${a.date} — ${a.course}</span>
      <span class="attendance-status status-${a.status}">
        ${a.status === 'present' ? '✓ Présente' : a.status === 'absent' ? '✗ Absente' : '~ Excusée'}
      </span>
    </div>
  `).join('');
}

// =============================================
// ACTUALITÉS
// =============================================
function initActualites() {
  const grid = document.getElementById('news-grid');
  DATA.news.forEach(article => {
    const card = document.createElement('div');
    card.className = 'news-card reveal';
    const imgHTML = article.image
      ? `<img src="${article.image}" alt="${article.title}" class="news-img" loading="lazy">`
      : `<div class="news-img-placeholder" style="background:linear-gradient(135deg,#1a1a1a,#242424)">${article.emoji}</div>`;
    card.innerHTML = `
      ${imgHTML}
      <div class="news-body">
        <div class="news-date">📅 ${article.date} · ${article.category}</div>
        <h3 class="news-title">${article.title}</h3>
        <p class="news-excerpt">${article.excerpt}</p>
        <a href="#" class="news-link">Lire la suite →</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// =============================================
// COUNTDOWN
// =============================================
function initCountdown() {
  const event = DATA.nextEvent;
  document.getElementById('event-name').textContent = event.name;

  function update() {
    const now = new Date();
    const diff = event.date - now;
    if (diff < 0) {
      document.getElementById('countdown').innerHTML = '<p style="color:var(--gold)">🎉 Cet événement a eu lieu !</p>';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// =============================================
// GALERIE
// =============================================
function initGalerie() {
  const grid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  DATA.gallery.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'gallery-item reveal';
    el.innerHTML = `
      <img src="${item.src}" alt="${item.alt}" class="gallery-img" loading="lazy">
      <div class="gallery-overlay">🔍</div>
    `;
    el.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    grid.appendChild(el);
  });

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// =============================================
// CONTACT
// =============================================
function initContact() {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✅ Message envoyé ! Nous vous répondrons sous 48h.', 'success');
    form.reset();
  });
}

// =============================================
// FOOTER
// =============================================
function initFooter() {
  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

// =============================================
// SCROLL REVEAL
// =============================================
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Re-observe after dynamic content
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }, 500);
}

// =============================================
// TOAST
// =============================================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✅' : '❌'}</span> ${message}`;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
