/* ==========================================================================
   Achmad Haikal Fikri — Digital CV
   Application logic (vanilla JS, no dependencies)
   ========================================================================== */

/* --------------------------------- Data ---------------------------------- */
const defaultCVData = {
  profile: {
    name: "Achmad Haikal Fikri",
    title: "IT & Software Developer | Tech Enthusiast",
    photoUrl: "profile.png",
    bio: "Lulusan SMK Negeri 2 Makassar yang aktif dalam pengembangan teknologi dan organisasi. Memiliki pengalaman Praktik Kerja Lapangan di Dinas Perpustakaan dan Kearsipan Provinsi Sulawesi Selatan serta berpengalaman dalam manajemen kesekretariatan organisasi di Habibie Coding Club dan Pramuka Rovers BELM.",
    email: "achmadhaikalfikri.14@gmail.com",
    phone: "+62 895-0451-17110",
    location: "Makassar, Sulawesi Selatan",
    birthInfo: "Makassar, 14 Mei 2005",
    status: "Terbuka untuk Peluang Kerja & Proyek",
    education: "SMK Negeri 2 Makassar",
    languages: "Bahasa Indonesia (Aktif), English (Dasar-Menengah)",
    github: "https://github.com/Haikals-Fikri",
    linkedin: "https://www.linkedin.com/in/achmad-haikal-fikri",
    twitter: "https://x.com"
  },
  stats: {
    experienceYears: "PKL",
    projectsCompleted: "10+",
    happyClients: "Organisasi",
    codeQuality: "100%"
  },
  skills: [
    { name: "HTML5 & CSS3 Glassmorphism", level: 90, category: "frontend", icon: "ri-html5-line" },
    { name: "JavaScript (ES6+)", level: 85, category: "frontend", icon: "ri-code-s-slash-line" },
    { name: "Logika Pemrograman & Algoritma", level: 88, category: "backend", icon: "ri-terminal-box-line" },
    { name: "Pengelolaan Database (MySQL)", level: 82, category: "backend", icon: "ri-database-2-line" },
    { name: "Manajemen Kesekretariatan & Persuratan", level: 95, category: "tools", icon: "ri-file-text-line" },
    { name: "Git & GitHub Version Control", level: 84, category: "tools", icon: "ri-git-branch-line" },
    { name: "Sistem Informasi & Digital Archiving", level: 90, category: "data", icon: "ri-folders-line" },
    { name: "Komunikasi & Kepemimpinan Tim", level: 92, category: "tools", icon: "ri-team-line" }
  ],
  experiences: [
    {
      id: "exp-kkn",
      role: "Kuliah Kerja Nyata (KKN)",
      company: "Kelurahan Lemoe, Kecamatan Bacukiki, Kota Parepare",
      period: "Pengabdian Masyarakat",
      description: "Melaksanakan program pengabdian masyarakat di Kelurahan Lemoe, Kecamatan Bacukiki. Berperan aktif dalam pengembangan program sosial, pemberdayaan potensi lokal, dan digitalisasi administrasi lingkungan.",
      tags: ["KKN", "Kelurahan Lemoe", "Kecamatan Bacukiki", "Parepare", "Pengabdian Masyarakat"]
    },
    {
      id: "exp-ai-edu",
      role: "Program Kerja Edukasi AI",
      company: "SMP Negeri 7 ParePare",
      period: "Program Kerja Utama",
      description: "Menggagas dan memfasilitasi pelaksanaan program kerja Edukasi Artificial Intelligence (AI) bagi siswa-siswi SMP Negeri 7 ParePare guna meningkatkan literasi digital dan pengenalan kecerdasan buatan secara bijak.",
      tags: ["Edukasi AI", "SMPN 7 ParePare", "Literasi Digital", "Artificial Intelligence", "Workshop"]
    },
    {
      id: "exp-1",
      role: "Praktik Kerja Lapangan (PKL)",
      company: "Dinas Perpustakaan dan Kearsipan Provinsi Sulawesi Selatan",
      period: "Pengalaman Kerja Lapangan",
      description: "Melaksanakan pengelolaan kearsipan digital, pendataan sistem administrasi dokumen perpustakaan daerah, penginputan data inventaris, serta membantu pelayanan informasi publik.",
      tags: ["Digital Archiving", "Sistem Informasi", "Administrasi Dokumen", "Pelayanan Publik"]
    },
    {
      id: "exp-2",
      role: "Sekretaris",
      company: "Pramuka Rovers BELM SMKN 2 Makassar",
      period: "Jabatan Organisasi",
      description: "Bertanggung jawab atas tata kelola administrasi organisasi, penyusunan proposal dan laporan pertanggungjawaban (LPJ) kegiatan kepramukaan, manajemen inventaris, serta koordinasi internal tim.",
      tags: ["Administrasi", "Penyusunan LPJ", "Kepemimpinan", "Manajemen Proposal"]
    },
    {
      id: "exp-3",
      role: "Divisi Kesekretariatan",
      company: "Habibie Coding Club",
      period: "Pengalaman Komunitas Tech",
      description: "Mengelola persuratan internal/eksternal, arsip kegiatan pembelajaran coding, pendataan anggota klub, serta mendukung kelancaran operasional program workshop pemrograman.",
      tags: ["Habibie Coding Club", "Kesekretariatan", "Komunitas Tech", "Arsip Digital"]
    }
  ],
  educationList: [
    { school: "SMK Negeri 2 Makassar", level: "Sekolah Menengah Kejuruan", year: "Lulusan SMK" },
    { school: "SMP Negeri 10 Makassar", level: "Sekolah Menengah Pertama", year: "Alumni" },
    { school: "SD Negeri 1 Makassar", level: "Sekolah Dasar", year: "Alumni" },
    { school: "TK Haqqul Yaqien", level: "Taman Kanak-Kanak", year: "Alumni" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Sistem Informasi Kearsipan Digital",
      category: "webapp",
      status: "Selesai",
      description: "Aplikasi pengarsipan berbasis web untuk mempermudah pencarian dokumen, pendataan perpustakaan, dan digitalisasi berkas secara terstruktur.",
      imageBg: "linear-gradient(135deg, #0284c7, #0369a1)",
      tags: ["HTML/CSS", "JavaScript", "MySQL", "Bootstrap"]
    },
    {
      id: "proj-2",
      title: "Portal Web Habibie Coding Club",
      category: "ai",
      status: "Aktif",
      description: "Website landing page untuk komunitas Habibie Coding Club yang menampilkan materi pembelajaran, jadwal kegiatan, dan pendaftaran anggota baru.",
      imageBg: "linear-gradient(135deg, #4f46e5, #3730a3)",
      tags: ["Web Design", "UI/UX", "JavaScript", "Responsive"]
    },
    {
      id: "proj-3",
      title: "Sistem Administrasi & Persuratan Pramuka",
      category: "webapp",
      status: "Selesai",
      description: "Templat dan generator dokumen otomatisasi persuratan, notulensi rapat, dan proposal kegiatan organisasi kepramukaan.",
      imageBg: "linear-gradient(135deg, #059669, #047857)",
      tags: ["Dokumentasi", "Automation", "Google Workspace", "Form"]
    }
  ],
  certifications: [
    {
      title: "Sertifikat Praktik Kerja Lapangan (PKL)",
      issuer: "Dinas Perpustakaan dan Kearsipan Prov. Sulsel",
      date: "Makassar"
    },
    {
      title: "Sertifikat Anggota Habibie Coding Club",
      issuer: "Habibie Coding Club SMKN 2 Makassar",
      date: "Aktif Member"
    },
    {
      title: "Sertifikat Pengurus Pramuka Rovers BELM",
      issuer: "SMK Negeri 2 Makassar",
      date: "Sekretaris"
    }
  ]
};

/* ------------------------------- Constants -------------------------------- */
const THEME_KEY = "haikal_cv_theme";
const MODE_KEY = "haikal_cv_mode";

/* --------------------------------- State ---------------------------------- */
let cvData = deepClone(defaultCVData);
let skillFilter = "all";
let projectFilter = "all";
let revealObserver = null;
let typingTimer = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* ------------------------------ Persistence -------------------------------- */
function deepClone(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

/* -------------------------------- Helpers --------------------------------- */
function getInitials(name) {
  if (!name) return "AH";
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return parts[0] ? parts[0].substring(0, 2).toUpperCase() : "AH";
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[character]));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* -------------------------------- Rendering ------------------------------- */
function renderAllSections() {
  renderProfile();
  renderStats();
  renderAbout();
  renderSkills(skillFilter);
  renderTimeline();
  renderProjects(projectFilter);
  renderCertifications();
  initReveal();
}

function renderProfile() {
  const profile = cvData.profile;
  const primaryRole = String(profile.title || defaultCVData.profile.title).split("|")[0].trim() || "IT & Software Developer";

  $$(".user-name").forEach((element) => { element.textContent = profile.name; });
  $$(".user-title").forEach((element) => { element.textContent = primaryRole; });

  const bio = $("#hero-bio-text");
  if (bio) bio.textContent = profile.bio;

  const status = $("#status-text");
  if (status) status.textContent = profile.status || defaultCVData.profile.status;

  /* Navbar avatar */
  const navAvatar = $("#nav-avatar-box");
  if (navAvatar) {
    navAvatar.textContent = "";
    if (profile.photoUrl) {
      const avatarImage = document.createElement("img");
      avatarImage.src = profile.photoUrl;
      avatarImage.alt = profile.name;
      avatarImage.addEventListener("error", () => {
        navAvatar.textContent = getInitials(profile.name);
      }, { once: true });
      navAvatar.appendChild(avatarImage);
    } else {
      navAvatar.textContent = getInitials(profile.name);
    }
  }

  /* Hero portrait */
  const heroImage = $("#hero-avatar-img");
  const heroFallback = $("#hero-avatar-fallback");
  if (heroImage && heroFallback) {
    if (profile.photoUrl) {
      heroImage.onerror = () => {
        heroImage.hidden = true;
        heroFallback.hidden = false;
      };
      heroImage.src = profile.photoUrl;
      heroImage.hidden = false;
      heroFallback.hidden = true;
    } else {
      heroImage.onerror = null;
      heroImage.hidden = true;
      heroImage.removeAttribute("src");
      heroFallback.hidden = false;
    }
  }

  /* Hero role (static text for screen readers) */
  const staticRole = $("#hero-role-static");
  if (staticRole) staticRole.textContent = primaryRole;

  /* Hero meta chips */
  const heroEmail = $("#hero-email-chip span");
  if (heroEmail) heroEmail.textContent = profile.email;

  const heroLocation = $("#hero-location-chip span");
  if (heroLocation) heroLocation.textContent = profile.location;

  /* Contact values */
  const emailDisplay = $("#info-email-display");
  if (emailDisplay) emailDisplay.textContent = profile.email;

  const phoneDisplay = $("#info-phone-display");
  if (phoneDisplay) phoneDisplay.textContent = profile.phone;

  /* Social links */
  const githubLink = $("#social-link-github");
  if (githubLink && profile.github) githubLink.href = profile.github;

  const linkedinLink = $("#social-link-linkedin");
  if (linkedinLink && profile.linkedin) linkedinLink.href = profile.linkedin;

  const twitterLink = $("#social-link-twitter");
  if (twitterLink && profile.twitter) twitterLink.href = profile.twitter;
}

function renderStats() {
  const stats = cvData.stats || defaultCVData.stats;
  const map = {
    "stat-exp-val": stats.experienceYears,
    "stat-proj-val": stats.projectsCompleted,
    "stat-client-val": stats.happyClients,
    "stat-code-val": stats.codeQuality
  };

  Object.entries(map).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = value || "—";
  });
}

function renderAbout() {
  const profile = cvData.profile;

  const bio = $("#about-bio-desc");
  if (bio) bio.textContent = profile.bio;

  const education = $("#about-edu");
  if (education) education.textContent = profile.education || defaultCVData.profile.education;

  const languages = $("#about-lang");
  if (languages) languages.textContent = profile.languages || defaultCVData.profile.languages;

  const birth = $("#about-birth");
  if (birth) birth.textContent = profile.birthInfo || defaultCVData.profile.birthInfo;

  const location = $("#info-location");
  if (location) location.textContent = profile.location || defaultCVData.profile.location;

  const container = $("#education-history-list");
  if (!container) return;

  container.innerHTML = (cvData.educationList || []).map((item, index) => `
    <div class="edu-card reveal" style="--d:${index * 0.04}s">
      <span class="edu-icon"><i class="ri-graduation-cap-line"></i></span>
      <span class="edu-main">
        <span class="edu-school">${escapeHTML(item.school)}</span>
        <span class="edu-level">${escapeHTML(item.level)}</span>
      </span>
      <span class="edu-year">${escapeHTML(item.year)}</span>
    </div>
  `).join("");
}

function renderSkills(filter = "all") {
  const container = $("#skills-grid-container");
  if (!container) return;

  const skills = filter === "all"
    ? cvData.skills
    : cvData.skills.filter((skill) => skill.category === filter);

  container.innerHTML = skills.map((skill, index) => `
    <div class="skill-card reveal" style="--d:${index * 0.04}s">
      <div class="skill-top">
        <span class="skill-name-group">
          <i class="${escapeHTML(skill.icon || "ri-code-line")} skill-icon"></i>
          <span class="skill-name">${escapeHTML(skill.name)}</span>
        </span>
        <span class="skill-percent">${Number(skill.level) || 0}%</span>
      </div>
      <div class="skill-bar">
        <div class="skill-fill" data-level="${Number(skill.level) || 0}"></div>
      </div>
    </div>
  `).join("");

  /* Animate bars after paint */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      $$(".skill-fill", container).forEach((bar) => {
        bar.style.width = `${bar.dataset.level}%`;
      });
    });
  });

  initReveal();
}

function renderTimeline() {
  const container = $("#timeline-list");
  if (!container) return;

  container.innerHTML = cvData.experiences.map((experience, index) => `
    <div class="timeline-item reveal" style="--d:${index * 0.04}s">
      <span class="timeline-node" aria-hidden="true"></span>
      <article class="timeline-card">
        <span class="timeline-badge">${escapeHTML(experience.period)}</span>
        <h3 class="timeline-role">${escapeHTML(experience.role)}</h3>
        <p class="timeline-company"><i class="ri-building-line"></i> ${escapeHTML(experience.company)}</p>
        <p class="timeline-desc">${escapeHTML(experience.description)}</p>
        <div class="timeline-tags">
          ${(experience.tags || []).map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </article>
    </div>
  `).join("");
}

const PROJECT_CATEGORY_LABEL = { webapp: "Web App", ai: "AI & Edukasi" };
const PROJECT_ICON = { webapp: "ri-window-2-line", ai: "ri-brain-line" };

function renderProjects(filter = "all") {
  const container = $("#projects-grid-container");
  if (!container) return;

  const projects = filter === "all"
    ? cvData.projects
    : cvData.projects.filter((project) => project.category === filter);

  container.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal" style="--d:${index * 0.05}s">
      <div class="project-thumb" style="background:${escapeHTML(project.imageBg || "linear-gradient(135deg,#1e293b,#0f172a)")}">
        <span class="project-status">${escapeHTML(project.status || "Project")}</span>
        <i class="${PROJECT_ICON[project.category] || "ri-code-box-line"}"></i>
      </div>
      <div class="project-body">
        <span class="project-category">${escapeHTML(PROJECT_CATEGORY_LABEL[project.category] || project.category)}</span>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
        <div class="project-technologies">
          ${(project.tags || []).map((tag) => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");

  initReveal();
}

function renderCertifications() {
  const container = $("#certs-grid-container");
  if (!container) return;

  container.innerHTML = (cvData.certifications || []).map((certification, index) => `
    <article class="cert-card reveal" style="--d:${index * 0.05}s">
      <span class="cert-icon"><i class="ri-award-line"></i></span>
      <div class="cert-body">
        <h4 class="cert-title">${escapeHTML(certification.title)}</h4>
        <div class="cert-issuer">${escapeHTML(certification.issuer)}</div>
        <div class="cert-date">${escapeHTML(certification.date)}</div>
      </div>
    </article>
  `).join("");

  initReveal();
}

/* ------------------------------- Interactions ------------------------------ */
function getTypingRoles() {
  const titleParts = String(cvData.profile.title || "")
    .split("|")
    .map((part) => part.trim())
    .filter(Boolean);

  const roles = [...titleParts, "Web Developer", "Digital Archivist"];
  return [...new Set(roles)].slice(0, 4);
}

function initTypingEffect() {
  const target = $("#typed-role");
  if (!target) return;

  if (typingTimer) {
    window.clearTimeout(typingTimer);
    typingTimer = null;
  }

  const roles = getTypingRoles();
  const firstRole = roles[0] || "IT & Software Developer";

  /* Start fully typed — no flash of a single character on page load. */
  target.textContent = firstRole;

  const staticRole = $("#hero-role-static");
  if (staticRole) staticRole.textContent = firstRole;

  if (prefersReducedMotion() || roles.length < 2) return;

  let roleIndex = 0;
  let characterIndex = firstRole.length;
  let deleting = true;

  function schedule(delay) {
    typingTimer = window.setTimeout(tick, delay);
  }

  function tick() {
    const currentRole = roles[roleIndex] || firstRole;

    if (deleting) {
      characterIndex = Math.max(0, characterIndex - 1);
      target.textContent = currentRole.slice(0, characterIndex);

      if (characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        schedule(380);
        return;
      }

      schedule(28);
      return;
    }

    characterIndex = Math.min(currentRole.length, characterIndex + 1);
    target.textContent = currentRole.slice(0, characterIndex);

    if (characterIndex === currentRole.length) {
      deleting = true;
      schedule(2200);
      return;
    }

    schedule(64);
  }

  /* Hold the first role for a moment before cycling. */
  schedule(2600);
}

function initThemePicker() {
  const dots = $$(".color-dot");
  if (!dots.length) return;

  function applyTheme(color) {
    document.documentElement.setAttribute("data-theme", color);
    dots.forEach((dot) => dot.classList.toggle("active", dot.dataset.color === color));
    try { localStorage.setItem(THEME_KEY, color); } catch (_) { /* ignore */ }
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      applyTheme(dot.dataset.color);
      showToast(`Warna aksen: ${dot.title}`);
    });
  });

  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (_) { /* ignore */ }
  const allowed = dots.map((dot) => dot.dataset.color);
  const candidate = saved || document.documentElement.getAttribute("data-theme") || "cyan";
  const initial = allowed.includes(candidate) ? candidate : "cyan";
  applyTheme(initial);
}

function initModeToggle() {
  const button = $("#mode-toggle");
  if (!button) return;

  const mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;

  function applyMode(mode, persist) {
    const normalized = mode === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-mode", normalized);

    const icon = button.querySelector("i");
    if (icon) icon.className = normalized === "light" ? "ri-moon-line" : "ri-sun-line";
    button.setAttribute("aria-label", normalized === "light" ? "Aktifkan mode gelap" : "Aktifkan mode terang");
    button.title = normalized === "light" ? "Mode gelap" : "Mode terang";

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", normalized === "light" ? "#f5f8fd" : "#05080f");

    if (persist) {
      try { localStorage.setItem(MODE_KEY, normalized); } catch (_) { /* ignore */ }
    }
  }

  button.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-mode") === "light" ? "dark" : "light";
    applyMode(next, true);
  });

  let saved = null;
  try { saved = localStorage.getItem(MODE_KEY); } catch (_) { /* ignore */ }
  const current = document.documentElement.getAttribute("data-mode");
  applyMode(saved === "light" || saved === "dark" ? saved : (current === "light" ? "light" : "dark"), false);

  /* Follow OS changes only while the visitor has not picked a mode manually. */
  if (mediaQuery) {
    const onSystemChange = (event) => {
      let stored = null;
      try { stored = localStorage.getItem(MODE_KEY); } catch (_) { /* ignore */ }
      if (stored !== "light" && stored !== "dark") {
        applyMode(event.matches ? "light" : "dark", false);
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", onSystemChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(onSystemChange);
    }
  }
}

function initFilters() {
  $$("[data-skill-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      skillFilter = button.dataset.skillFilter;
      $$("[data-skill-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderSkills(skillFilter);
    });
  });

  $$("[data-proj-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      projectFilter = button.dataset.projFilter;
      $$("[data-proj-filter]").forEach((item) => item.classList.toggle("active", item === button));
      renderProjects(projectFilter);
    });
  });
}

function initMobileMenu() {
  const toggle = $("#menu-toggle-btn");
  const links = $("#nav-links");
  const navbar = $("#navbar");
  if (!toggle || !links) return;

  function close() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    const icon = toggle.querySelector("i");
    if (icon) icon.className = "ri-menu-line";
  }

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    const icon = toggle.querySelector("i");
    if (icon) icon.className = isOpen ? "ri-close-line" : "ri-menu-line";
  });

  $$(".nav-link", links).forEach((link) => link.addEventListener("click", close));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  document.addEventListener("click", (event) => {
    if (!links.classList.contains("open")) return;
    if (navbar && !navbar.contains(event.target)) close();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 960) close();
  });
}

function initNavbarScroll() {
  const navbar = $("#navbar");
  const backToTop = $("#back-to-top");

  function onScroll() {
    const scrolled = window.scrollY > 18;
    if (navbar) navbar.classList.toggle("scrolled", scrolled);
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 600);
    updateActiveNav();
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function updateActiveNav() {
  const scrollPos = window.scrollY + 150;
  const sections = $$("main section[id]");
  let current = "";

  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top + window.scrollY;
    if (top <= scrollPos) current = section.id;
  });

  if (window.scrollY < 80 && sections.length) current = sections[0].id;

  $$(".nav-link").forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function initBackToTop() {
  const button = $("#back-to-top");
  if (!button) return;
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  });
}

function initReveal() {
  const elements = $$(".reveal:not(.is-visible)");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  }

  elements.forEach((element) => revealObserver.observe(element));
}

/* ------------------------------- Contact ---------------------------------- */
function handleContactSubmit(event) {
  event.preventDefault();

  const name = $("#contact-name")?.value.trim() || "Pengunjung";
  const email = $("#contact-email")?.value.trim() || "";
  const message = $("#contact-message")?.value.trim() || "";

  if (!name || !message) {
    showToast("Mohon lengkapi nama dan pesan Anda.");
    return;
  }

  const subject = encodeURIComponent(`Pesan dari ${name} — CV Digital`);
  const body = encodeURIComponent(
    `${message}\n\n—\nDari: ${name}\nEmail: ${email || "(tidak diisi)"}`
  );

  window.location.href = `mailto:${cvData.profile.email}?subject=${subject}&body=${body}`;
  showToast("Membuka aplikasi email Anda...");
  event.target.reset();
}

function copyText(text, label = "Teks") {
  const value = String(text ?? "");
  if (!value) return;

  function fallbackCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand("copy");
      showToast(`${label} berhasil disalin.`);
    } catch (_) {
      showToast(`Gagal menyalin ${label}.`);
    }

    document.body.removeChild(textarea);
  }

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value)
      .then(() => showToast(`${label} berhasil disalin.`))
      .catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

/* --------------------------------- Toast ---------------------------------- */
function showToast(message) {
  let container = $(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    container.setAttribute("role", "status");
    container.setAttribute("aria-live", "polite");
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="ri-checkbox-circle-fill"></i><span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  window.setTimeout(() => {
    toast.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(24px)";
    window.setTimeout(() => toast.remove(), 320);
  }, 3400);
}

/* --------------------------------- Init ----------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderAllSections();
  initTypingEffect();
  initThemePicker();
  initModeToggle();
  initFilters();
  initMobileMenu();
  initNavbarScroll();
  initBackToTop();

  const year = $("#footer-year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Re-run reveal after fonts settle */
  window.addEventListener("load", initReveal);
});
