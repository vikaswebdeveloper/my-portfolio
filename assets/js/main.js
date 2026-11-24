/* ==========================================================
   EDIT YOUR DETAILS HERE — everything else updates automatically
   ========================================================== */
const SITE = {
  brand: "Kodeva",                       // studio / freelance brand name
  tagline: "Full-stack & AI web development",
  owner: "Vikas Shah",
  email: "shahv7411@gmail.com",
  github: "https://github.com/vikaswebdeveloper",
  linkedin: "https://linkedin.com/in/vikasvpp",
  phone: "+91 73032 88076",
  location: "Delhi, India · Working worldwide",
  web3formsKey: "201a05b9-3fc3-4f71-b2be-e0d5d6ee208f", // get a free key at web3forms.com
};

// Links are clean folder URLs ("about/" = about/index.html); "" means Home.
const PROJECTS = [
  ["TideHub", "projects/tidehub/"],
  ["Shop E-commerce", "projects/e-commerce/"],
  ["GoRide", "projects/goride/"],
  ["RAG Q&A", "projects/rag-qa/"],
  ["LearnHub", "projects/learnhub/"],
  ["Mental Health Signal", "projects/mental-health-signal/"],
  ["Global Production & Distribution", "projects/global-production/"],
  ["Motia Enterprises", "projects/motia-enterprises/"],
];
const EXPLORE = [
  ["Home", ""], ["About", "about/"], ["Services", "services/"],
  ["Pricing", "pricing/"], ["Experience", "experience/"], ["Clients", "clients/"],
  ["Reviews", "reviews/"], ["FAQ", "faq/"], ["Contact", "contact/"],
];
const LEGAL = [
  ["Privacy Policy", "legal/privacy/"],
  ["Terms of Service", "legal/terms/"],
  ["Refund & Cancellation", "legal/refund-policy/"],
  ["Cookie Policy", "legal/cookies/"],
  ["Disclaimer", "legal/disclaimer/"],
  ["Accessibility", "legal/accessibility/"],
  ["Sitemap", "sitemap/"],
];

// Navbar: main pages are plain links; everything else sits in the collapsible "More" menu.
const NAV = [
  ["Projects", "projects/"],
  ["Services", "services/"],
  ["Pricing", "pricing/"],
  ["About", "about/"],
  ["Experience", "experience/"],
  ["Reviews", "reviews/"],
];
// Group = [icon, title, subtitle, [[label, link], ...]]
const MENUS = [
  { label: "More", groups: [
    ["👤", "Support", "Clients and getting in touch", [["Clients", "clients/"], ["FAQ", "faq/"], ["Contact", "contact/"]]],
    ["⚖️", "Legal", "Terms of working together", [["Legal overview", "legal/"], ["Privacy Policy", "legal/privacy/"], ["Terms of Service", "legal/terms/"], ["Refund & Cancellation", "legal/refund-policy/"]]],
    ["📋", "Site info", "Policies about this site", [["Cookie Policy", "legal/cookies/"], ["Disclaimer", "legal/disclaimer/"], ["Accessibility", "legal/accessibility/"], ["Sitemap", "sitemap/"]]],
  ]},
];
const root = document.body.dataset.root || "";
const html = document.documentElement;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const path = location.pathname.replace(/\\/g, "/");
const norm = (p) => p.replace(/index\.html$/, "");
const homeHref = root || "./";
const homePath = new URL(homeHref, location.href).pathname;
const atHome = norm(path) === homePath;
const isActive = (href) =>
  href === "" ? atHome : norm(path).endsWith("/" + href);
const chev = `<svg class="chev" viewBox="0 0 10 6" width="10" height="6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M1 1l4 4 4-4"/></svg>`;
const menuHTML = ({ label, groups }) => `
      <div class="dropdown" style="--cols:${groups.length}">
        <button class="link more-btn ${groups.some((g) => g[3].some(([, h]) => isActive(h))) ? "active" : ""}" aria-expanded="false" aria-haspopup="true">${label} ${chev}</button>
        <div class="menu">
          ${groups.map(([icon, title, sub, items], i) => `
          <div class="menu-group ${items.some(([, h]) => isActive(h)) ? "has-active" : ""}" style="--i:${i}">
            <button class="group-head" type="button"><span class="gi">${icon}</span><span class="gt"><strong>${title}</strong><small>${sub}</small></span>${chev}</button>
            <div class="group-links">${items.map(([t, h]) => `<a class="${isActive(h) ? "active" : ""}" href="${root}${h}">${t}</a>`).join("")}</div>
          </div>`).join("")}
        </div>
      </div>`;

/* ---------- Theme (saved choice, else system) ---------- */
html.dataset.theme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

/* ---------- Logo (K monogram, animated via CSS) ---------- */
const logoSVG = (id) => `
<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#5B4BFF"/><stop offset="1" stop-color="#00B8D9"/></linearGradient></defs>
  <rect width="40" height="40" rx="11" fill="url(#${id})"/>
  <path d="M13 10v20" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  <path class="arm arm-up" d="M26 10.5 15.5 20" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  <path class="arm arm-down" d="M15.5 20 26 29.5" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  <circle class="dot" cx="30" cy="20" r="2" fill="#fff"/>
</svg>`;
const logo = (id) => `<a class="logo" href="${homeHref}" aria-label="${SITE.brand} home">${logoSVG(id)}<span class="word">${SITE.brand.slice(0, -1)}<span>${SITE.brand.slice(-1)}</span></span></a>`;
const link = (href, text, extra = "") => `<a href="${root}${href || ""}${root || href ? "" : "./"}" ${extra}>${text}</a>`;

/* ---------- Header ---------- */
document.body.insertAdjacentHTML("afterbegin", `
<header class="site"><div class="container">
  ${logo("lg-h")}
  <nav class="main">
    <div class="links" id="links">
      ${NAV.map(([t, h]) => `<a class="link ${isActive(h) ? "active" : ""}" href="${root}${h}">${t}</a>`).join("")}
      ${MENUS.map(menuHTML).join("")}
      <a class="btn mobile-cta" href="${root}contact/">Let's talk</a>
    </div>
    <a class="btn" href="${root}contact/">Let's talk</a>
    <button class="theme-toggle" id="theme-btn" aria-label="Toggle light and dark theme">
      <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>
      <span class="ripple"></span>
    </button>
    <button class="menu-btn" id="menu-btn" aria-label="Menu"><span></span></button>
  </nav>
</div></header>`);

/* ---------- Footer ---------- */
document.body.insertAdjacentHTML("beforeend", `
<footer class="site"><div class="container">
  <div class="foot-grid">
    <div class="foot-brand">
      ${logo("lg-f")}
      <p>${SITE.tagline}. Building fast, reliable products for startups and businesses.</p>
      <div class="badge" style="margin:0"><i></i> Available for new projects</div>
    </div>
    <div><h4>Explore</h4><ul>${EXPLORE.map(([t, h]) => `<li>${link(h, t)}</li>`).join("")}</ul></div>
    <div><h4>Projects</h4><ul>${PROJECTS.map(([t, h]) => `<li>${link(h, t)}</li>`).join("")}<li>${link("projects/", "All projects →")}</li></ul></div>
    <div><h4>Legal</h4><ul>${LEGAL.map(([t, h]) => `<li>${link(h, t)}</li>`).join("")}</ul></div>
    <div><h4>Connect</h4><ul>
      <li><a href="mailto:${SITE.email}">Email</a></li>
      <li><a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><span class="muted" style="font-size:.9rem">${SITE.location}</span></li>
    </ul></div>
  </div>
  <div class="foot-bottom">
    <span>© ${new Date().getFullYear()} ${SITE.brand}. All rights reserved. · ${link("legal/privacy/", "Privacy")} · ${link("legal/terms/", "Terms")} · ${link("legal/", "All legal")}</span>
    <button class="to-top" id="to-top">Back to top ↑</button>
  </div>
</div></footer>`);

/* ---------- Logo click: spin, then navigate / scroll top ---------- */
document.querySelectorAll(".logo").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    el.classList.remove("spin"); void el.offsetWidth; el.classList.add("spin");
    if (atHome) scrollTo({ top: 0, behavior: "smooth" });
    else setTimeout(() => (location.href = el.href), reduced ? 0 : 450);
  });
});

/* ---------- Theme toggle with circular reveal ---------- */
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  const apply = () => { html.dataset.theme = next; localStorage.setItem("theme", next); };
  themeBtn.classList.remove("pop"); void themeBtn.offsetWidth; themeBtn.classList.add("pop");
  if (!document.startViewTransition || reduced) {
    html.classList.add("theme-anim"); apply();
    setTimeout(() => html.classList.remove("theme-anim"), 600);
    return;
  }
  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2, y = r.top + r.height / 2;
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const t = document.startViewTransition(apply);
  t.ready.then(() =>
    html.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(.4,0,.2,1)", pseudoElement: "::view-transition-new(root)" }
    )
  );
});

/* ---------- Navbar menus: hover (desktop) or click to open; click outside / Esc to close ---------- */
const dropdowns = [...document.querySelectorAll(".dropdown")];
const setOpen = (dd, open) => { dd.classList.toggle("open", open); dd.querySelector(".more-btn").setAttribute("aria-expanded", open); };
const closeAll = (except) => dropdowns.forEach((d) => d !== except && setOpen(d, false));
dropdowns.forEach((dd) => {
  dd.querySelector(".more-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    closeAll(dd); setOpen(dd, !dd.classList.contains("open"));
  });
  dd.addEventListener("mouseenter", () => matchMedia("(min-width: 901px)").matches && closeAll(dd));
});
document.addEventListener("click", (e) => { if (!e.target.closest(".dropdown")) closeAll(); });
document.addEventListener("keydown", (e) => e.key === "Escape" && closeAll());
// On mobile each category card is collapsible (accordion); on desktop they sit open in a row
document.querySelectorAll(".group-head").forEach((h) =>
  h.addEventListener("click", () => {
    if (!matchMedia("(max-width: 900px)").matches) return;
    const g = h.parentElement, open = !g.classList.contains("open");
    g.parentElement.querySelectorAll(".menu-group").forEach((x) => x.classList.remove("open"));
    g.classList.toggle("open", open);
  })
);

/* ---------- Mobile menu / back to top ---------- */
const menuBtn = document.getElementById("menu-btn"), links = document.getElementById("links");
menuBtn.onclick = () => { menuBtn.classList.toggle("open"); links.classList.toggle("open"); };
document.getElementById("to-top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* ---------- Fill placeholders: <span data-site="email"> ---------- */
document.querySelectorAll("[data-site]").forEach((el) => {
  el.textContent = SITE[el.dataset.site];
  if (el.tagName === "A" && el.dataset.site === "email") el.href = "mailto:" + SITE.email;
  if (el.tagName === "A" && el.dataset.site === "phone") el.href = "tel:" + SITE.phone.replace(/\s/g, "");
});

/* ---------- Scroll reveal with stagger ---------- */
document.querySelectorAll(".grid, .stats, .timeline, .filters, .steps, .principles").forEach((p) =>
  [...p.children].forEach((c, i) => { c.classList.add("reveal"); c.style.setProperty("--i", i % 6); })
);
const io = new IntersectionObserver(
  (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Count-up stats ---------- */
document.querySelectorAll("[data-count]").forEach((el) => {
  const end = +el.dataset.count, suffix = el.dataset.suffix || "";
  const obs = new IntersectionObserver(([e]) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1200, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  });
  obs.observe(el);
});

/* ---------- Project filter ---------- */
document.querySelectorAll(".chip[data-filter]").forEach((chip) =>
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === chip));
    document.querySelectorAll(".project[data-cat]").forEach((p) =>
      p.classList.toggle("hide", chip.dataset.filter !== "all" && p.dataset.cat !== chip.dataset.filter)
    );
  })
);

/* Open the projects list pre-filtered, e.g. projects/?type=ai */
const wanted = new URLSearchParams(location.search).get("type");
if (wanted) document.querySelector(`.chip[data-filter="${CSS.escape(wanted)}"]`)?.click();

/* ---------- Themed dropdowns (native <select> stays hidden and keeps the value) ---------- */
document.querySelectorAll("form select").forEach((sel, n) => {
  const wrap = document.createElement("div");
  wrap.className = "cselect";
  const btn = document.createElement("button");
  btn.type = "button"; btn.className = "cselect-btn";
  btn.setAttribute("aria-haspopup", "listbox"); btn.setAttribute("aria-expanded", "false");
  const text = document.createElement("span");
  btn.append(text);
  btn.insertAdjacentHTML("beforeend", '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 5 5 5-5"/></svg>');
  const list = document.createElement("ul");
  list.className = "cselect-list"; list.setAttribute("role", "listbox"); list.id = "cselect-" + n;
  btn.setAttribute("aria-controls", list.id);
  const opts = [...sel.options].map((o, i) => {
    const li = document.createElement("li");
    li.className = "cselect-opt"; li.setAttribute("role", "option"); li.textContent = o.textContent;
    li.onmousedown = (e) => e.preventDefault();
    li.onclick = (e) => { e.preventDefault(); choose(i); close(); btn.focus(); }; // preventDefault: stops the parent <label> re-clicking the button
    li.onmouseenter = () => highlight(i, false);
    list.append(li);
    return li;
  });
  let active = sel.selectedIndex;
  const sync = () => {
    text.textContent = sel.options[sel.selectedIndex]?.textContent || "";
    opts.forEach((li, i) => li.setAttribute("aria-selected", i === sel.selectedIndex));
  };
  const highlight = (i, scroll = true) => {
    active = Math.max(0, Math.min(opts.length - 1, i));
    opts.forEach((li, j) => li.classList.toggle("active", j === active));
    if (scroll) opts[active].scrollIntoView({ block: "nearest" });
  };
  const choose = (i) => { sel.selectedIndex = i; sync(); sel.dispatchEvent(new Event("change", { bubbles: true })); };
  const isOpen = () => wrap.classList.contains("open");
  const open = () => {
    document.querySelectorAll(".cselect.open").forEach((c) => c !== wrap && c.classList.remove("open"));
    const r = btn.getBoundingClientRect();
    wrap.classList.toggle("up", innerHeight - r.bottom < 280 && r.top > innerHeight - r.bottom);
    wrap.classList.add("open"); btn.setAttribute("aria-expanded", "true"); highlight(sel.selectedIndex);
  };
  const close = () => { wrap.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); };
  btn.onclick = () => (isOpen() ? close() : open());
  btn.onkeydown = (e) => {
    const k = e.key;
    if (k === "Escape" && isOpen()) { e.preventDefault(); close(); }
    else if (k === "ArrowDown" || k === "ArrowUp") { e.preventDefault(); if (!isOpen()) open(); else highlight(active + (k === "ArrowDown" ? 1 : -1)); }
    else if (k === "Home" || k === "End") { if (isOpen()) { e.preventDefault(); highlight(k === "Home" ? 0 : opts.length - 1); } }
    else if ((k === "Enter" || k === " ") && isOpen()) { e.preventDefault(); choose(active); close(); }
    else if (k === "Tab") close();
    else if (k.length === 1 && /\S/.test(k)) { // type-ahead
      const i = opts.findIndex((li) => li.textContent.trim().toLowerCase().startsWith(k.toLowerCase()));
      if (i > -1) { if (isOpen()) highlight(i); else choose(i); }
    }
  };
  document.addEventListener("click", (e) => { if (!wrap.contains(e.target)) close(); });
  sel.form.addEventListener("reset", () => setTimeout(sync));
  wrap.append(btn, list);
  sel.before(wrap);
  sel.style.display = "none";
  sync();
});

/* ---------- Contact form -> Web3Forms (falls back to email app) ---------- */
const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("form-status");
  const btn = form.querySelector("button[type=submit]");
  const say = (msg, ok) => { status.textContent = msg; status.style.color = ok ? "#16a34a" : "#dc2626"; };
  const openMailApp = (d) => {
    const body = `${d.get("message")}\n\nService: ${d.get("service")}\nBudget: ${d.get("budget")}\n— ${d.get("name")} (${d.get("email")})`;
    location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Project enquiry from " + d.get("name"))}&body=${encodeURIComponent(body)}`;
  };
  form.onsubmit = async (e) => {
    e.preventDefault();
    const d = new FormData(form);
    if (d.get("botcheck")) return; // honeypot: bots fill this hidden field
    if (!SITE.web3formsKey || SITE.web3formsKey.startsWith("PASTE")) return openMailApp(d);
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = "Sending…"; say("", true);
    try {
      d.append("access_key", SITE.web3formsKey);
      d.append("subject", "Project enquiry from " + d.get("name"));
      d.append("from_name", SITE.brand + " website");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST", headers: { Accept: "application/json" }, body: d,
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Request failed");
      form.reset();
      say("Thanks! Your message is on its way. I'll reply within 24 hours.", true);
    } catch (err) {
      say("Sorry, that didn't send. Please try again or email " + SITE.email + ".", false);
    } finally {
      btn.disabled = false; btn.textContent = label;
    }
  };
}

/* ---------- Polish: progress bar, back-to-top, rotating headline, marquee, spotlight, tilt ---------- */
const bar = document.createElement("div"); bar.className = "progress"; document.body.prepend(bar);
const fab = document.createElement("button"); fab.className = "fab"; fab.setAttribute("aria-label", "Back to top"); fab.textContent = "↑";
fab.onclick = () => scrollTo({ top: 0, behavior: "smooth" }); document.body.append(fab);
const onScroll = () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  fab.classList.toggle("show", scrollY > 600);
};
addEventListener("scroll", onScroll, { passive: true }); onScroll();

// Typewriter headline: <span class="rotator" data-words="a,b,c">
const rot = document.querySelector(".rotator");
if (rot && !reduced) {
  const words = rot.dataset.words.split(","); let w = 0, c = words[0].length, del = true;
  (function type() {
    const word = words[w];
    rot.textContent = word.slice(0, c);
    let wait = del ? 45 : 85;
    if (!del && c === word.length) { del = true; wait = 1700; }
    else if (del && c === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
    else c += del ? -1 : 1;
    setTimeout(type, wait);
  })();
  // first pass starts by deleting the initial word, then cycles
}

// Marquee: duplicate content so the loop is seamless
document.querySelectorAll(".marquee .track").forEach((t) => (t.innerHTML += t.innerHTML));

// Cursor spotlight on cards
document.addEventListener("pointermove", (e) => {
  const card = e.target.closest?.(".card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

// Subtle 3D tilt on project cards (fine pointers only)
if (!reduced && matchMedia("(hover: hover)").matches) {
  document.querySelectorAll("a.project").forEach((card) => {
    card.classList.add("tilt");
    const fast = "transform .15s ease-out, opacity .7s, border-color .25s, box-shadow .35s";
    card.addEventListener("pointerenter", () => { card.style.transitionDelay = "0s"; card.style.transition = fast; card.style.transitionDelay = "0s"; });
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      card.style.setProperty("--ry", `${x * 7}deg`); card.style.setProperty("--rx", `${-y * 7}deg`);
    });
    card.addEventListener("pointerleave", () => { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); });
  });
}
