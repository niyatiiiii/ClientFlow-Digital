/* =========================================================
   ClientFlow Digital — script.js
   Shared site behaviour: loading screen, nav, counters,
   reveal animations, ripple, client data, modal, filters,
   search, contact form validation.
   ========================================================= */

/* ---------- Client Data (shared across pages) ---------- */
const CLIENTS = [
  {
    id: "nike-india",
    name: "Nike India",
    industry: "Fashion & Apparel",
    initials: "NI",
    color: "#111827",
    contact: "Aarav Mehta",
    email: "aarav.mehta@nike-partners.example",
    phone: "+91 98765 43210",
    website: "www.nike.com/in",
    status: "active",
    manager: "Priya Sharma",
    budget: "₹4,50,000 / mo",
    review: "Oct 18, 2026",
    progress: 82,
    notes: "Diwali collection campaign performing above target across Reels and Search.",
    campaigns: ["Diwali Collection Push", "Air Max Retargeting", "Just Do It — Reels Series"],
    platforms: [
      { name: "Instagram", handle: "@nikeindia" },
      { name: "Facebook", handle: "Nike India" },
      { name: "LinkedIn", handle: "Nike" },
      { name: "X", handle: "@Nike" },
      { name: "YouTube", handle: "Nike" }
    ]
  },
  {
    id: "starbucks-india",
    name: "Starbucks India",
    industry: "Food & Beverage",
    initials: "SB",
    color: "#065F46",
    contact: "Rhea Kapoor",
    email: "rhea.kapoor@starbucks-partners.example",
    phone: "+91 91234 56780",
    website: "www.starbucks.in",
    status: "reporting",
    manager: "Karan Verma",
    budget: "₹2,80,000 / mo",
    review: "Oct 22, 2026",
    progress: 64,
    notes: "Monthly reporting cycle in progress; festive menu launch content approved.",
    campaigns: ["Festive Menu Launch", "Loyalty App Push", "Store Opening — Chandigarh"],
    platforms: [
      { name: "Instagram", handle: "@starbucksindia" },
      { name: "Facebook", handle: "Starbucks India" },
      { name: "LinkedIn", handle: "Starbucks" },
      { name: "X", handle: "@StarbucksIndia" },
      { name: "YouTube", handle: "Starbucks India" }
    ]
  },
  {
    id: "zomato",
    name: "Zomato",
    industry: "Food Delivery",
    initials: "ZM",
    color: "#B91C1C",
    contact: "Ishaan Kulkarni",
    email: "ishaan.kulkarni@zomato-partners.example",
    phone: "+91 99887 66554",
    website: "www.zomato.com",
    status: "active",
    manager: "Priya Sharma",
    budget: "₹6,10,000 / mo",
    review: "Oct 12, 2026",
    progress: 91,
    notes: "Weekend Gold campaign exceeding CTR benchmark by 18%.",
    campaigns: ["Weekend Gold Push", "New City Launch — Indore", "Dining Out Revival"],
    platforms: [
      { name: "Instagram", handle: "@zomato" },
      { name: "Facebook", handle: "Zomato" },
      { name: "LinkedIn", handle: "Zomato" },
      { name: "X", handle: "@zomato" },
      { name: "YouTube", handle: "Zomato" }
    ]
  },
  {
    id: "myntra",
    name: "Myntra",
    industry: "E-Commerce",
    initials: "MY",
    color: "#9D174D",
    contact: "Sanya Kapoor",
    email: "sanya.kapoor@myntra-partners.example",
    phone: "+91 90909 80808",
    website: "www.myntra.com",
    status: "planning",
    manager: "Karan Verma",
    budget: "₹5,20,000 / mo",
    review: "Nov 02, 2026",
    progress: 34,
    notes: "End of Reason Sale strategy in planning; creative concepts under review.",
    campaigns: ["End of Reason Sale", "Influencer Edit Series", "App Install Push"],
    platforms: [
      { name: "Instagram", handle: "@myntra" },
      { name: "Facebook", handle: "Myntra" },
      { name: "LinkedIn", handle: "Myntra" },
      { name: "X", handle: "@Myntra" },
      { name: "YouTube", handle: "Myntra" }
    ]
  },
  {
    id: "boat-lifestyle",
    name: "boAt Lifestyle",
    industry: "Consumer Electronics",
    initials: "BL",
    color: "#1D4ED8",
    contact: "Nikhil Rao",
    email: "nikhil.rao@boat-partners.example",
    phone: "+91 98123 45670",
    website: "www.boat-lifestyle.com",
    status: "active",
    manager: "Priya Sharma",
    budget: "₹3,40,000 / mo",
    review: "Oct 25, 2026",
    progress: 77,
    notes: "New earbuds launch driving strong organic + paid social engagement.",
    campaigns: ["Airdopes Launch", "Republic Day Sale Prep", "Creator Unboxing Series"],
    platforms: [
      { name: "Instagram", handle: "@boat.lifestyle" },
      { name: "Facebook", handle: "boAt Lifestyle" },
      { name: "LinkedIn", handle: "boAt Lifestyle" },
      { name: "X", handle: "@boat_lifestyle" },
      { name: "YouTube", handle: "boAt Lifestyle" }
    ]
  },
  {
    id: "lenskart",
    name: "Lenskart",
    industry: "Retail — Eyewear",
    initials: "LK",
    color: "#7C2D12",
    contact: "Divya Nair",
    email: "divya.nair@lenskart-partners.example",
    phone: "+91 97654 32109",
    website: "www.lenskart.com",
    status: "reporting",
    manager: "Karan Verma",
    budget: "₹2,20,000 / mo",
    review: "Oct 30, 2026",
    progress: 58,
    notes: "Home try-on feature campaign wrapping; report compilation underway.",
    campaigns: ["Home Try-On Awareness", "Blu-Lens Push", "Festive Frames Edit"],
    platforms: [
      { name: "Instagram", handle: "@lenskart" },
      { name: "Facebook", handle: "Lenskart" },
      { name: "LinkedIn", handle: "Lenskart" },
      { name: "X", handle: "@Lenskart" },
      { name: "YouTube", handle: "Lenskart" }
    ]
  }
];

/* ---------- Utility ---------- */
function qs(sel, ctx = document) { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

const SOCIAL_ICONS = {
  Instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  Facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v3H7v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>`,
  LinkedIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><line x1="8" y1="11" x2="8" y2="16"/><line x1="8" y1="8" x2="8" y2="8"/><path d="M12 16v-3a2 2 0 0 1 4 0v3"/></svg>`,
  X: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>`,
  YouTube: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="4"/><polygon points="11 9 15 12 11 15" fill="currentColor" stroke="none"/></svg>`
};

/* =========================================================
   Loading Screen
   ========================================================= */
window.addEventListener("load", () => {
  const loader = qs("#loading-screen");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 450);
  }
});

/* =========================================================
   Mobile Menu
   ========================================================= */
function initMobileMenu() {
  const toggle = qs("[data-menu-toggle]");
  const drawer = qs("[data-mobile-drawer]");
  const closeBtn = qs("[data-drawer-close]");
  if (!toggle || !drawer) return;

  const open = () => { drawer.classList.add("open"); toggle.setAttribute("aria-expanded", "true"); };
  const close = () => { drawer.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };

  toggle.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  drawer.addEventListener("click", (e) => { if (e.target === drawer) close(); });
  qsa("a", drawer).forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* =========================================================
   Active Navigation Highlight
   ========================================================= */
function initActiveNav() {
  const current = location.pathname.split("/").pop() || "index.html";
  qsa("[data-nav-link]").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* =========================================================
   Scroll Reveal Animations
   ========================================================= */
function initScrollReveal() {
  const items = qsa(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}

/* =========================================================
   Animated Counters
   ========================================================= */
function initCounters() {
  const counters = qsa("[data-counter]");
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.dataset.counter);
    const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => observer.observe(c));
}

/* =========================================================
   Progress Bar Animation
   ========================================================= */
function initProgressBars() {
  const bars = qsa("[data-progress]");
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.progress + "%";
        observer.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(b => observer.observe(b));
}

/* =========================================================
   Button Ripple Effect
   ========================================================= */
function initRipple() {
  qsa(".btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + "px";
      circle.style.left = (e.clientX - rect.left - size / 2) + "px";
      circle.style.top = (e.clientY - rect.top - size / 2) + "px";
      circle.classList.add("ripple");
      this.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
}

/* =========================================================
   Client Card Rendering (used on index + clients pages)
   ========================================================= */
function statusLabel(status) {
  return { active: "Active", reporting: "Reporting", planning: "Planning" }[status] || status;
}

function renderFeaturedClients(targetSelector, list) {
  const target = qs(targetSelector);
  if (!target) return;
  target.innerHTML = list.map(c => `
    <article class="client-mini-card glass-card reveal">
      <div class="client-logo-placeholder" style="background:${c.color}">${c.initials}</div>
      <h3>${c.name}</h3>
      <div class="industry-tag">${c.industry}</div>
      <dl>
        <dt>Status</dt><dd><span class="status-pill ${c.status}"><span class="dot"></span>${statusLabel(c.status)}</span></dd>
        <dt>Manager</dt><dd>${c.manager}</dd>
        <dt>Budget</dt><dd>${c.budget}</dd>
        <dt>Next review</dt><dd>${c.review}</dd>
      </dl>
    </article>
  `).join("");
}

function renderClientCards(targetSelector, list) {
  const target = qs(targetSelector);
  if (!target) return;

  if (!list.length) {
    target.innerHTML = `<p style="color:var(--text-muted); grid-column:1/-1; text-align:center; padding:40px 0;">No clients match your search or filter.</p>`;
    return;
  }

  target.innerHTML = list.map(c => `
    <article class="client-card glass-card reveal" data-status="${c.status}">
      <div class="client-card-top">
        <div class="client-logo-placeholder" style="background:${c.color}">${c.initials}</div>
        <div class="info">
          <h3>${c.name}</h3>
          <span>${c.industry}</span>
        </div>
      </div>
      <ul class="client-contact-list">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>${c.email}</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2Z"/></svg>${c.phone}</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z"/></svg>${c.website}</li>
      </ul>
      <div class="client-meta-row">
        <span>Manager: ${c.manager}</span>
        <span class="status-pill ${c.status}"><span class="dot"></span>${statusLabel(c.status)}</span>
      </div>
      <div class="client-meta-row">
        <span>Budget: ${c.budget}</span>
        <span>Review: ${c.review}</span>
      </div>
      <div>
        <div class="progress-track"><div class="progress-fill" data-progress="${c.progress}"></div></div>
        <div class="progress-label"><span>Campaign progress</span><span>${c.progress}%</span></div>
      </div>
      <div class="social-row">
        ${c.platforms.map(p => `<a href="#" title="${p.name}: ${p.handle}" aria-label="${c.name} on ${p.name}">${SOCIAL_ICONS[p.name]}</a>`).join("")}
      </div>
      <div class="client-card-footer">
        <span style="font-size:0.78rem;color:var(--text-muted);">${c.notes.slice(0, 40)}…</span>
        <button class="btn btn-outline btn-sm" data-view-client="${c.id}">View Client</button>
      </div>
    </article>
  `).join("");

  initProgressBars();
}

/* =========================================================
   Modal
   ========================================================= */
function openClientModal(clientId) {
  const client = CLIENTS.find(c => c.id === clientId);
  if (!client) return;
  const overlay = qs("[data-modal-overlay]");
  const body = qs("[data-modal-body]");
  if (!overlay || !body) return;

  body.innerHTML = `
    <div class="modal-header">
      <div class="client-logo-placeholder" style="background:${client.color}">${client.initials}</div>
      <div>
        <h3>${client.name}</h3>
        <span style="color:var(--text-muted); font-size:0.85rem;">${client.industry}</span>
      </div>
    </div>
    <div class="modal-section">
      <h4>Brand Information</h4>
      <p>Contact: ${client.contact} · ${client.email} · ${client.phone}<br>Website: ${client.website}</p>
    </div>
    <div class="modal-section">
      <h4>Current Campaigns</h4>
      <ul style="padding-left:18px; list-style:disc;">
        ${client.campaigns.map(c => `<li>${c}</li>`).join("")}
      </ul>
    </div>
    <div class="modal-section">
      <h4>Connected Platforms</h4>
      <div class="tag-list">
        ${client.platforms.map(p => `<span class="tag-chip">${p.name}: ${p.handle}</span>`).join("")}
      </div>
    </div>
    <div class="modal-section">
      <h4>Performance Summary</h4>
      <p>Campaign progress is at ${client.progress}%, managed by ${client.manager}. Monthly budget: ${client.budget}. Next strategy review scheduled for ${client.review}.</p>
    </div>
    <div class="modal-section">
      <h4>Notes</h4>
      <p>${client.notes}</p>
    </div>
  `;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  qs(".modal-close", overlay)?.focus();
}

function initModal() {
  const overlay = qs("[data-modal-overlay]");
  if (!overlay) return;
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-view-client]");
    if (trigger) openClientModal(trigger.dataset.viewClient);
    if (e.target === overlay || e.target.closest("[data-modal-close]")) {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
  });
}

/* =========================================================
   Clients Page: Search + Filter
   ========================================================= */
function initClientsPage() {
  const grid = qs("[data-clients-grid]");
  if (!grid) return;

  let currentFilter = "all";
  let currentSearch = "";

  function applyFilters() {
    const filtered = CLIENTS.filter(c => {
      const matchesFilter = currentFilter === "all" || c.status === currentFilter;
      const matchesSearch = c.name.toLowerCase().includes(currentSearch) ||
        c.industry.toLowerCase().includes(currentSearch);
      return matchesFilter && matchesSearch;
    });
    renderClientCards("[data-clients-grid]", filtered);
  }

  renderClientCards("[data-clients-grid]", CLIENTS);

  qsa("[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      qsa("[data-filter]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  const searchInput = qs("[data-client-search]");
  searchInput?.addEventListener("input", (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    applyFilters();
  });
}

/* =========================================================
   Contact Form Validation
   ========================================================= */
function initContactForm() {
  const form = qs("[data-contact-form]");
  if (!form) return;

  const validators = {
    name: v => v.trim().length >= 2 || "Please enter your full name.",
    company: v => v.trim().length >= 2 || "Please enter your company name.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email address.",
    service: v => v !== "" || "Please select a service.",
    message: v => v.trim().length >= 10 || "Message should be at least 10 characters."
  };

  function validateField(field) {
    const rule = validators[field.name];
    if (!rule) return true;
    const result = rule(field.value);
    const group = field.closest(".form-group");
    const errorEl = group.querySelector(".error-msg");
    if (result === true) {
      group.classList.remove("has-error");
      errorEl.textContent = "";
      return true;
    } else {
      group.classList.add("has-error");
      errorEl.textContent = result;
      return false;
    }
  }

  qsa("input, select, textarea", form).forEach(field => {
    field.addEventListener("blur", () => validateField(field));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;
    qsa("input, select, textarea", form).forEach(field => {
      if (!validateField(field)) valid = false;
    });
    if (!valid) return;

    showSuccessToast();
    form.reset();
  });
}

function showSuccessToast() {
  const toast = qs("[data-success-toast]");
  if (!toast) return;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3800);
}

/* =========================================================
   Reports: Download Placeholder
   ========================================================= */
function initReportDownloads() {
  qsa("[data-download-report]").forEach(btn => {
    btn.addEventListener("click", () => {
      const month = btn.dataset.downloadReport;
      const blob = new Blob(
        [`ClientFlow Digital — Sample Report\nMonth: ${month}\n\nThis is a placeholder PDF export.\nReplace this logic with a real report generator or file link.`],
        { type: "text/plain" }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `ClientFlow-Report-${month}.txt`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  });
}

/* =========================================================
   Init
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveNav();
  initScrollReveal();
  initCounters();
  initProgressBars();
  initRipple();
  initModal();

  renderFeaturedClients("[data-featured-clients]", CLIENTS.slice(0, 4));
  initClientsPage();
  initContactForm();
  initReportDownloads();
});
