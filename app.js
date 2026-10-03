/* ==========================================================================
   CV & Portfolio Dynamic Application Logic
   ========================================================================== */

// Real CV Data for Achmad Haikal Fikri
const defaultCVData = {
  profile: {
    name: "Achmad Haikal Fikri",
    title: "IT & Software Developer | Tech Enthusiast",
    photoUrl: "",
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
    { name: "Sistem Informasi & Digital Archiving", level: 90, category: "cloud", icon: "ri-folders-line" },
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
      description: "Aplikasi pengarsipan berbasis web untuk mempermudah pencarian dokumen, pendataan perpustakaan, dan digitalisasi berkas secara terstruktur.",
      imageBg: "linear-gradient(135deg, #0284c7, #0369a1)",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["HTML/CSS", "JavaScript", "MySQL", "Bootstrap"]
    },
    {
      id: "proj-2",
      title: "Portal Web Habibie Coding Club",
      category: "ai",
      description: "Website landing page untuk komunitas Habibie Coding Club yang menampilkan materi pembelajaran, jadwal kegiatan, dan pendaftaran anggota baru.",
      imageBg: "linear-gradient(135deg, #4f46e5, #3730a3)",
      demoUrl: "#",
      githubUrl: "#",
      tags: ["Web Design", "UI/UX", "JavaScript", "Responsive"]
    },
    {
      id: "proj-3",
      title: "Sistem Administrasi & Persuratan Pramuka",
      category: "webapp",
      description: "Templat dan generator dokumen otomatisasi persuratan, notulensi rapat, dan proposal kegiatan organisasi kepramukaan.",
      imageBg: "linear-gradient(135deg, #059669, #047857)",
      demoUrl: "#",
      githubUrl: "#",
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

// Global App State
let cvData = loadCVData();

function loadCVData() {
  const saved = localStorage.getItem("haikal_cv_portfolio_data");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.profile) {
        // Selalu sinkronkan data resmi dari kode (tidak bisa dioverride oleh cache lama)
        parsed.profile.email    = defaultCVData.profile.email;
        parsed.profile.github   = defaultCVData.profile.github;
        parsed.profile.linkedin = defaultCVData.profile.linkedin;
        parsed.profile.name     = defaultCVData.profile.name;
        parsed.profile.phone    = defaultCVData.profile.phone;
        parsed.profile.location = defaultCVData.profile.location;
      }
      if (parsed && parsed.experiences && !parsed.experiences.some(e => e.id === "exp-kkn")) {
        parsed.experiences = JSON.parse(JSON.stringify(defaultCVData.experiences));
      }
      localStorage.setItem("haikal_cv_portfolio_data", JSON.stringify(parsed));
      return parsed;
    } catch (e) {
      console.error("Failed to parse stored CV data:", e);
    }
  }
  return JSON.parse(JSON.stringify(defaultCVData));
}

function saveCVData() {
  localStorage.setItem("haikal_cv_portfolio_data", JSON.stringify(cvData));
  renderAllSections();
  showToast("Perubahan CV berhasil disimpan!");
}

// Render Functions
function renderAllSections() {
  renderProfile();
  renderStats();
  renderAbout();
  renderTimeline();
  renderCertifications();
}

function getInitials(name) {
  if (!name) return "AH";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

function renderProfile() {
  const p = cvData.profile;
  document.querySelectorAll(".user-name").forEach(el => el.textContent = p.name);
  document.querySelectorAll(".user-title").forEach(el => el.textContent = p.title);
  
  const bioEl = document.getElementById("hero-bio-text");
  if (bioEl) bioEl.textContent = p.bio;

  const statusEl = document.getElementById("status-text");
  if (statusEl) statusEl.textContent = p.status || "Terbuka untuk Peluang Kerja & Proyek";

  // Update Nav Avatar Box (Never gepeng / circle)
  const navAvatarBox = document.getElementById("nav-avatar-box");
  if (navAvatarBox) {
    if (p.photoUrl) {
      navAvatarBox.innerHTML = `<img src="${escapeHTML(p.photoUrl)}" alt="${escapeHTML(p.name)}">`;
    } else {
      navAvatarBox.textContent = getInitials(p.name);
    }
  }

  // Update Hero Avatar Card Image
  const heroWrapper = document.getElementById("hero-avatar-wrapper");
  if (heroWrapper) {
    const existingImg = heroWrapper.querySelector(".avatar-img");
    const fallback = heroWrapper.querySelector("#hero-avatar-fallback");

    if (p.photoUrl) {
      if (fallback) fallback.style.display = "none";
      if (existingImg) {
        existingImg.src = p.photoUrl;
      } else {
        const img = document.createElement("img");
        img.src = p.photoUrl;
        img.className = "avatar-img";
        img.alt = p.name;
        heroWrapper.appendChild(img);
      }
    } else {
      if (existingImg) existingImg.remove();
      if (fallback) fallback.style.display = "flex";
    }
  }

  // Contact Info
  const emailEl = document.getElementById("info-email");
  if (emailEl) emailEl.textContent = p.email;

  const emailDisp = document.getElementById("info-email-display");
  if (emailDisp) emailDisp.textContent = p.email;

  const phoneEl = document.getElementById("info-phone");
  if (phoneEl) phoneEl.textContent = p.phone;

  const phoneDisp = document.getElementById("info-phone-display");
  if (phoneDisp) phoneDisp.textContent = p.phone;

  const locEl = document.getElementById("info-location");
  if (locEl) locEl.textContent = p.location;

  const ghLink = document.getElementById("social-link-github");
  if (ghLink && p.github) ghLink.href = p.github;

  const liLink = document.getElementById("social-link-linkedin");
  if (liLink && p.linkedin) liLink.href = p.linkedin;
}

function renderStats() {
  const s = cvData.stats || defaultCVData.stats;
  const expVal = document.getElementById("stat-exp-val");
  if (expVal) expVal.textContent = s.experienceYears || "PKL";

  const projVal = document.getElementById("stat-proj-val");
  if (projVal) projVal.textContent = s.projectsCompleted || "10+";

  const clientVal = document.getElementById("stat-client-val");
  if (clientVal) clientVal.textContent = s.happyClients || "Organisasi";

  const codeVal = document.getElementById("stat-code-val");
  if (codeVal) codeVal.textContent = s.codeQuality || "100%";
}

function renderAbout() {
  const p = cvData.profile;
  const aboutBio = document.getElementById("about-bio-desc");
  if (aboutBio) aboutBio.textContent = p.bio;

  const eduEl = document.getElementById("about-edu");
  if (eduEl) eduEl.textContent = p.education || "SMK Negeri 2 Makassar";

  const langEl = document.getElementById("about-lang");
  if (langEl) langEl.textContent = p.languages || "Indonesia & English";

  const birthEl = document.getElementById("about-birth");
  if (birthEl) birthEl.textContent = p.birthInfo || "Makassar, 14 Mei 2005";

  // Education list rendering
  const eduContainer = document.getElementById("education-history-list");
  if (eduContainer && cvData.educationList) {
    eduContainer.innerHTML = cvData.educationList.map(item => `
      <div class="glass-card" style="padding: 1rem 1.25rem; margin-bottom: 0.75rem; border-left: 4px solid var(--accent-color);">
        <div style="font-weight: 700; font-size: 1.05rem;">${escapeHTML(item.school)}</div>
        <div style="font-size: 0.85rem; color: var(--text-muted);">${escapeHTML(item.level)}</div>
      </div>
    `).join("");
  }
}

function renderSkills(filterCategory = "all") {
  const container = document.getElementById("skills-grid-container");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? cvData.skills 
    : cvData.skills.filter(s => s.category === filterCategory);

  container.innerHTML = filtered.map(skill => `
    <div class="glass-card skill-card">
      <div class="skill-header">
        <div class="skill-name-group">
          <i class="${skill.icon || 'ri-code-line'} skill-icon"></i>
          <span class="skill-name">${escapeHTML(skill.name)}</span>
        </div>
        <span class="skill-percent">${skill.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline-list");
  if (!container) return;

  container.innerHTML = cvData.experiences.map(exp => `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="glass-card timeline-content">
        <span class="timeline-badge">${escapeHTML(exp.period)}</span>
        <h3 class="timeline-role">${escapeHTML(exp.role)}</h3>
        <h4 class="timeline-company"><i class="ri-building-line"></i> ${escapeHTML(exp.company)}</h4>
        <p class="timeline-desc">${escapeHTML(exp.description)}</p>
        <div class="timeline-tags">
          ${(exp.tags || []).map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderProjects(filterCategory = "all") {
  const container = document.getElementById("projects-grid-container");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? cvData.projects 
    : cvData.projects.filter(p => p.category === filterCategory);

  container.innerHTML = filtered.map(proj => `
    <div class="glass-card project-card">
      <div class="project-thumb">
        <div class="project-thumb-bg" style="background: ${proj.imageBg || 'linear-gradient(135deg, #1e293b, #0f172a)'};">
          <i class="ri-code-box-line" style="font-size: 3.5rem; color: rgba(255,255,255,0.25);"></i>
        </div>
        <div class="project-overlay">
          <button class="btn btn-secondary btn-icon" onclick="showToast('Detail proyek: ${escapeHTML(proj.title)}')" title="Detail Proyek">
            <i class="ri-eye-line"></i>
          </button>
          <a href="${proj.demoUrl || '#'}" class="btn btn-primary btn-icon" title="Preview Proyek">
            <i class="ri-external-link-line"></i>
          </a>
        </div>
      </div>
      <div class="project-body">
        <span class="project-category">${escapeHTML(proj.category.toUpperCase())}</span>
        <h3 class="project-title">${escapeHTML(proj.title)}</h3>
        <p class="project-desc">${escapeHTML(proj.description)}</p>
        <div class="project-techs">
          ${(proj.tags || []).map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");
}

function renderCertifications() {
  const container = document.getElementById("certs-grid-container");
  if (!container) return;

  container.innerHTML = cvData.certifications.map(c => `
    <div class="glass-card cert-card">
      <div class="cert-icon">
        <i class="ri-award-line"></i>
      </div>
      <div>
        <h4 class="cert-title">${escapeHTML(c.title)}</h4>
        <div class="cert-issuer">${escapeHTML(c.issuer)}</div>
        <div class="cert-date">${escapeHTML(c.date)}</div>
      </div>
    </div>
  `).join("");
}

// Particle Canvas Animation Background
function initParticleCanvas() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(width / 20), 65);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const computed = getComputedStyle(document.documentElement);
    const hue = computed.getPropertyValue("--accent-hue").trim() || "185";

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(${hue}, 70%, 50%, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Typing Effect for Hero Title
function initTypingEffect() {
  const roles = [
    "IT & Software Developer",
    "Divisi Kesekretariatan Habibie Coding Club",
    "Alumni SMK Negeri 2 Makassar",
    "Pramuka Rovers BELM SMKN 2"
  ];
  const target = document.getElementById("typed-role");
  if (!target) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let delay = isDeleting ? 35 : 85;

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  type();
}

// Theme Switcher
function initThemePicker() {
  const dots = document.querySelectorAll(".color-dot");
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
      const color = dot.getAttribute("data-color");
      document.documentElement.setAttribute("data-theme", color);
      localStorage.setItem("my_cv_theme", color);
      showToast(`Tema warna diubah ke ${color.toUpperCase()}`);
    });
  });

  const savedTheme = localStorage.getItem("my_cv_theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    const activeDot = document.querySelector(`.color-dot[data-color="${savedTheme}"]`);
    if (activeDot) {
      dots.forEach(d => d.classList.remove("active"));
      activeDot.classList.add("active");
    }
  }
}

// Filters Event Handlers
function initFilters() {
  document.querySelectorAll("[data-skill-filter]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("[data-skill-filter]").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const cat = e.target.getAttribute("data-skill-filter");
      renderSkills(cat);
    });
  });

  document.querySelectorAll("[data-proj-filter]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("[data-proj-filter]").forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      const cat = e.target.getAttribute("data-proj-filter");
      renderProjects(cat);
    });
  });
}

// Photo Management Functions for Modal
function handlePhotoFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      showToast("Ukuran foto maksimal 5MB!");
      return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const urlInput = document.getElementById("edit-photo-url");
      if (urlInput) urlInput.value = dataUrl;
      updatePhotoPreviewFromUrl(dataUrl);
      showToast("Foto berhasil dipilih!");
    };
    reader.readAsDataURL(file);
  }
}

function updatePhotoPreviewFromUrl(url) {
  const previewBox = document.getElementById("modal-photo-preview");
  if (!previewBox) return;
  if (url && url.trim() !== "") {
    previewBox.innerHTML = `<img src="${escapeHTML(url.trim())}" alt="Preview" onerror="this.onerror=null; this.parentNode.innerHTML='<i class=\\'ri-image-warning-line\\' style=\\'font-size: 1.8rem; color: #ef4444;\\'></i>';">`;
  } else {
    previewBox.innerHTML = `<i class="ri-user-3-line" style="font-size: 1.8rem; color: var(--text-muted);"></i>`;
  }
}

function removePhoto() {
  const fileInput = document.getElementById("edit-photo-file");
  const urlInput = document.getElementById("edit-photo-url");
  if (fileInput) fileInput.value = "";
  if (urlInput) urlInput.value = "";
  updatePhotoPreviewFromUrl("");
  showToast("Foto profil dihapus");
}

// Personalize CV Modal / Drawer Logic
function openCVEditorModal() {
  const modal = document.getElementById("cv-editor-modal");
  if (!modal) return;

  const p = cvData.profile;
  document.getElementById("edit-name").value = p.name || "";
  document.getElementById("edit-title").value = p.title || "";
  document.getElementById("edit-bio").value = p.bio || "";
  document.getElementById("edit-email").value = p.email || "";
  document.getElementById("edit-phone").value = p.phone || "";
  document.getElementById("edit-location").value = p.location || "";
  document.getElementById("edit-education").value = p.education || "";
  document.getElementById("edit-languages").value = p.languages || "";
  
  const ghInput = document.getElementById("edit-github");
  if (ghInput) ghInput.value = p.github || "https://github.com/Haikals-Fikri";

  const liInput = document.getElementById("edit-linkedin");
  if (liInput) liInput.value = p.linkedin || "https://www.linkedin.com/in/achmad-haikal-fikri";

  const photoUrlInput = document.getElementById("edit-photo-url");
  if (photoUrlInput) photoUrlInput.value = p.photoUrl || "";
  updatePhotoPreviewFromUrl(p.photoUrl || "");

  modal.classList.add("active");
}

function closeCVEditorModal() {
  const modal = document.getElementById("cv-editor-modal");
  if (modal) modal.classList.remove("active");
}

function saveCVEditorForm(e) {
  e.preventDefault();
  
  cvData.profile.name = document.getElementById("edit-name").value;
  cvData.profile.title = document.getElementById("edit-title").value;
  cvData.profile.bio = document.getElementById("edit-bio").value;
  cvData.profile.email = document.getElementById("edit-email").value;
  cvData.profile.phone = document.getElementById("edit-phone").value;
  cvData.profile.location = document.getElementById("edit-location").value;
  cvData.profile.education = document.getElementById("edit-education").value;
  cvData.profile.languages = document.getElementById("edit-languages").value;
  
  const ghInput = document.getElementById("edit-github");
  if (ghInput) cvData.profile.github = ghInput.value.trim();

  const liInput = document.getElementById("edit-linkedin");
  if (liInput) cvData.profile.linkedin = liInput.value.trim();

  const photoUrlInput = document.getElementById("edit-photo-url");
  if (photoUrlInput) cvData.profile.photoUrl = photoUrlInput.value.trim();

  saveCVData();
  closeCVEditorModal();
}

function resetCVData() {
  if (confirm("Apakah Anda yakin ingin mengembalikan CV ke data default Achmad Haikal Fikri?")) {
    cvData = JSON.parse(JSON.stringify(defaultCVData));
    localStorage.removeItem("haikal_cv_portfolio_data");
    renderAllSections();
    closeCVEditorModal();
    showToast("CV berhasil di-reset ke data Achmad Haikal Fikri!");
  }
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  showToast(`Terima kasih ${name}! Pesan Anda telah terkirim ke Achmad Haikal Fikri.`);
  e.target.reset();
}

// Copy to Clipboard Helper
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} disalin ke clipboard!`);
  });
}

// Toast Notifications
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: var(--accent-color);"></i> <span>${escapeHTML(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Utility: Escape HTML
function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderAllSections();
  initParticleCanvas();
  initTypingEffect();
  initThemePicker();
  initFilters();

  const toggleBtn = document.getElementById("menu-toggle-btn");
  const navLinks = document.getElementById("nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  const printBtn = document.getElementById("print-cv-btn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
});
