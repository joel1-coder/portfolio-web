/* ================================================================
   main.js — CODEJOE Portfolio
   Joel A | Full-Stack Developer
================================================================ */

/* ────────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────────── */
const skillsData = {
  frontend: [
    { name: 'HTML5',      icon: '🌐'  },
    { name: 'CSS3',       icon: '🎨' },
    { name: 'JavaScript', icon: '⚡'  },
    { name: 'React.js',   icon: '⚛️'  },
  ],
  tools: [
    { name: 'Git',        icon: '🔀'  },
    { name: 'GitHub',     icon: '🐙'  },
    { name: 'VS Code',    icon: '💻' },
    { name: 'Figma',      icon: '🎭'},
  ],
};

const projectsData = [
  {
    name: 'NOTIVO',
    desc: 'A smart note-taking application with real-time sync, tags, and markdown support for students and developers.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    emoji: '📝',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
    live:  '',   // replace with actual live URL
    source: '',
    hidden: true,
  },
  {
    name: 'JOBOOK',
    desc: 'A personal digital bookshelf to track books you\'ve read, are reading, or want to read — with notes and ratings.',
    stack: ['HTML', 'CSS3', 'JS', 'GitHub Pages'],
    emoji: '📚',
    gradient: 'linear-gradient(135deg, #100820 0%, #1e103a 100%)',
    live:   '',
    source: '',
    hidden: true,
  },
  {
    name: 'College Attendance',
    desc: 'An attendance management system for college students to track their class attendance percentage and get alerts.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    emoji: '🎓',
    gradient: 'linear-gradient(135deg, #0f1a10 0%, #1a2e1a 100%)',
    live:   'https://college-attendence.vercel.app/login',
    source: '',
  },
];

const servicesData = [
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'Building responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React — tailored to your needs.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Creating user-centered designs with a focus on accessibility, usability and pixel-perfect visuals that delight users on every device.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    desc: 'Every project I build works flawlessly across all screen sizes — from mobile phones to large desktop monitors.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimisation',
    desc: 'Writing clean, optimised code with fast load times, smooth animations and efficient rendering for a seamless experience.',
  },
];

const socialsData = [
  { icon: '📧', label: 'Email me', sub: 'joelcoder7@gmail.com',                      href: 'mailto:codejoe68333@gmail.com' },
  { icon: '🐙', label: 'GitHub',   sub: 'github.com/joel1-coder',                    href: 'https://github.com/joel1-coder' },
  { icon: '💼', label: 'LinkedIn', sub: 'linkedin.com/in/joel-a-web-developer',           href: 'https://www.linkedin.com/in/joel-a-web-developer/' },
  { icon: '🐦', label: 'Twitter', sub: 'x.com/CodeJoel21048', href: 'https://x.com/CodeJoel21048' },
];

/* ────────────────────────────────────────────────────────────────
   RENDER — Skills
──────────────────────────────────────────────────────────────── */
function renderSkills() {
  const map = {
    frontendSkills: skillsData.frontend,
    toolsSkills:    skillsData.tools,
  };
  for (const [id, list] of Object.entries(map)) {
    const container = document.getElementById(id);
    if (!container) continue;
    list.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <span class="skill-icon">${skill.icon}</span>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-level">
          <div class="skill-bar" data-level="${skill.level}"></div>
        </div>`;
      container.appendChild(card);
    });
  }
}

/* ────────────────────────────────────────────────────────────────
   RENDER — Projects
──────────────────────────────────────────────────────────────── */
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  projectsData.forEach((p, i) => {
    // Skip hidden projects
    if (p.hidden) return;

    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.style.transitionDelay = `${i * 0.12}s`;
    card.innerHTML = `
      <div class="project-preview" style="background:${p.gradient}">
        <div class="project-thumb-placeholder">${p.emoji}</div>
        <div class="project-overlay">
          <div class="project-links">
            <a href="${p.live}" target="_blank" rel="noopener" class="project-link">↗ Live</a>
            <a href="${p.source}" target="_blank" rel="noopener" class="project-link">{ } Code</a>
          </div>
        </div>
      </div>
      <div class="project-info">
        <div class="project-stack">
          ${p.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}
        </div>
        <div class="project-name">${p.name}</div>
        <div class="project-desc">${p.desc}</div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ────────────────────────────────────────────────────────────────
   RENDER — Services
──────────────────────────────────────────────────────────────── */
function renderServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;

  servicesData.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>`;
    grid.appendChild(card);
  });
}

/* ────────────────────────────────────────────────────────────────
   RENDER — Contact socials
──────────────────────────────────────────────────────────────── */
function renderSocials() {
  const container = document.getElementById('contactSocials');
  if (!container) return;

  socialsData.forEach(s => {
    const el = document.createElement('a');
    el.className = 'social-link';
    el.href = s.href;
    if (!s.href.startsWith('mailto')) {
      el.target = '_blank'; el.rel = 'noopener';
    }
    el.innerHTML = `
      <div class="social-icon">${s.icon}</div>
      <div>
        <div style="font-weight:500;font-size:0.9rem">${s.label}</div>
        <div style="font-size:0.76rem;color:var(--text-muted);margin-top:2px">${s.sub}</div>
      </div>
      <svg style="margin-left:auto;opacity:0.4" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M3.5 7.5h8M8 4l3.5 3.5L8 11" stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    container.appendChild(el);
  });
}

/* ────────────────────────────────────────────────────────────────
   SCROLL OBSERVER — reveal + skill bars + timeline
──────────────────────────────────────────────────────────────── */
function initScrollObserver() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');

      // Animate skill bars inside newly visible cards
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ────────────────────────────────────────────────────────────────
   NAVBAR — sticky + active link + close mobile on scroll
──────────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Sticky blur
    navbar.classList.toggle('scrolled', window.scrollY > 40);

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    // Close mobile nav on scroll
    const nav = document.getElementById('navLinks');
    const ham = document.getElementById('hamburger');
    nav.classList.remove('open');
    ham.classList.remove('open');
  }, { passive: true });
}

/* ────────────────────────────────────────────────────────────────
   HAMBURGER MENU
──────────────────────────────────────────────────────────────── */
function initHamburger() {
  const btn  = document.getElementById('hamburger');
  const nav  = document.getElementById('navLinks');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close when a link is clicked
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

/* ────────────────────────────────────────────────────────────────
   THEME TOGGLE — system preference + localStorage
──────────────────────────────────────────────────────────────── */
function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const html   = document.documentElement;
  if (!toggle) return;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('cj-theme');
  const theme = saved || (prefersDark ? 'dark' : 'light');

  html.setAttribute('data-theme', theme);
  toggle.checked = theme === 'light';

  toggle.addEventListener('change', () => {
    const newTheme = toggle.checked ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('cj-theme', newTheme);
  });
}

/* ────────────────────────────────────────────────────────────────
   CUSTOM CURSOR
──────────────────────────────────────────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

  (function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  })();

  const hoverTargets = 'a, button, label, .skill-card, .project-card, .service-card, .social-link';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
}

/* ────────────────────────────────────────────────────────────────
   3-D CARD TILT on project cards
──────────────────────────────────────────────────────────────── */
function initTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) / r.width;
      const dy = (e.clientY - (r.top  + r.height / 2)) / r.height;
      card.style.transform = `translateY(-8px) rotateY(${dx*7}deg) rotateX(${-dy*7}deg) scale(1.01)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ────────────────────────────────────────────────────────────────
   HERO AVATAR UPLOAD (click or drag-and-drop)
──────────────────────────────────────────────────────────────── */
function initAvatarUpload() {
  const input       = document.getElementById('heroAvatarInput');
  const img         = document.getElementById('heroAvatarImg');
  const placeholder = document.getElementById('avatarPlaceholder');
  if (!input || !img) return;

  function applyImage(file) {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = ev => {
      img.src = ev.target.result;
      img.style.display = 'block';
      if (placeholder) placeholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }

  input.addEventListener('change', e => applyImage(e.target.files[0]));

  const circle = document.getElementById('heroAvatarCircle');
  if (circle) {
    circle.addEventListener('dragover',  e => { e.preventDefault(); circle.style.borderColor = 'var(--accent-1)'; });
    circle.addEventListener('dragleave', () => { circle.style.borderColor = ''; });
    circle.addEventListener('drop',      e => { e.preventDefault(); circle.style.borderColor = ''; applyImage(e.dataTransfer.files[0]); });
  }
}

/* ────────────────────────────────────────────────────────────────
   TYPED.JS — hero title typewriter
──────────────────────────────────────────────────────────────── */
function initTyped() {
  if (typeof Typed === 'undefined') return;
  new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'UI/UX Designer', 'Web Creator'],
    typeSpeed:  70,
    backSpeed:  55,
    backDelay:  1200,
    loop:       true,
    showCursor: true,
    cursorChar: '|',
  });
}

/* ────────────────────────────────────────────────────────────────
   EMAILJS — contact form
──────────────────────────────────────────────────────────────── */
function initEmailJS() {
  if (typeof emailjs === 'undefined') return;
  emailjs.init('IVdcbIrBfShbFsjSn');
}

// Called from the form's onsubmit
function sendEmail() {
  const btn  = document.getElementById('submitBtn');
  const form = document.getElementById('contact-form');
  if (!form || typeof emailjs === 'undefined') return;

  btn.disabled = true;
  btn.textContent = 'Sending…';

  emailjs.sendForm('service_jozmq0q', 'template_p4mst2v', form)
    .then(() => {
      btn.innerHTML = '✓ Message Sent!';
      btn.style.background = 'linear-gradient(135deg,#27ae60,#2ecc71)';
      form.reset();
      setTimeout(() => {
        btn.disabled = false;
        btn.style.background = '';
        btn.innerHTML = 'Send Message <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 8l12-6-6 12-2-4-4-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
      }, 4000);
    })
    .catch(err => {
      btn.disabled = false;
      btn.textContent = 'Send Message';
      alert('Failed to send: ' + (err.text || err));
    });
}

/* ────────────────────────────────────────────────────────────────
   INIT — wire everything up on DOMContentLoaded
──────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderSkills();
  renderProjects();
  renderServices();
  renderSocials();

  // Initialise features
  initTheme();
  initNavbar();
  initHamburger();
  initEmailJS();
  initAvatarUpload();

  // Features that need the DOM fully laid out
  requestAnimationFrame(() => {
    initCursor();
    initScrollObserver();
    initTilt();
    initTyped();
  });
});