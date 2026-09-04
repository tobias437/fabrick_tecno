/* ============================================================
   FABRIC K TECNOLOGÍAS — app.js
   Layout compartido (header, promo bar, footer, herramientas
   flotantes) + utilidades de marca (WhatsApp, iconos).
   Cada página tiene <div id="site-header"></div> y
   <div id="site-footer"></div> — este archivo los completa,
   así el design system vive en un solo lugar.
   ============================================================ */

const WSP_NUMBER = "5491168243265";

function wspLink(text){
  return `https://wa.me/${WSP_NUMBER}?text=${encodeURIComponent(text)}`;
}
function wspProductLink(productName){
  return wspLink(`Hola FABRIC K TECNOLOGÍAS 👋 Quiero consultar por el producto: ${productName}. ¿Está disponible?`);
}
const WSP_GENERIC = wspLink("Hola FABRIC K TECNOLOGÍAS 👋 Quería consultar por un producto.");

const ICON_WSP = `<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10 9 9.5 7.7 9.3 7.2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.8 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.4C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3 .8.8-2.9-.2-.3C3.6 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9z"/></svg>`;
const ICON_SEARCH = `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8" fill="none"/><line x1="21" y1="21" x2="16.2" y2="16.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const ICON_TAG = `<svg viewBox="0 0 24 24"><path d="M12 2l2.4 6.9L21 11l-6.6 2.1L12 20l-2.4-6.9L3 11l6.6-2.1L12 2z" fill="currentColor"/></svg>`;
const ICON_CLOSE = `<svg viewBox="0 0 24 24"><line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;

/* ---------- Header markup ---------- */
function headerHTML(activePage){
  const nav = [
    ["index.html", "Inicio"],
    ["catalogo.html", "Catálogo"],
    ["catalogo.html#categorias", "Categorías"],
    ["ofertas.html", "Ofertas"],
    ["catalogo.html#novedades", "Novedades"],
    ["contacto.html", "Nosotros"],
  ];
  const navHTML = nav.map(([href, label]) => {
    const isActive = activePage && href.startsWith(activePage);
    return `<a href="${href}" class="${isActive ? "active" : ""}">${label}</a>`;
  }).join("");

  return `
  <div class="promo-bar">
    <span>Consultá disponibilidad · Atención directa por WhatsApp</span>
    <a href="${WSP_GENERIC}" target="_blank" rel="noopener">Escribinos ahora →</a>
  </div>
  <header class="site-header" id="siteHeader">
    <div class="header-inner">
      <a href="index.html" class="brand" aria-label="FABRIC K TECNOLOGÍAS - Inicio">
        <span class="brand-mark" aria-hidden="true">FK</span>
        <span class="brand-name">FABRIC K<span class="brand-sub">TECNOLOGÍAS</span></span>
      </a>

      <nav class="main-nav" id="mainNav" aria-label="Navegación principal">${navHTML}</nav>

      <div class="header-actions">
        <button class="icon-btn" id="searchTrigger" aria-label="Buscar productos">${ICON_SEARCH}</button>
        <a class="btn btn-whatsapp header-wsp" href="${WSP_GENERIC}" target="_blank" rel="noopener">${ICON_WSP}<span>WhatsApp</span></a>
        <button class="hamburger" id="hamburger" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileNav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div class="mobile-nav" id="mobileNav">${navHTML}
      <a href="${WSP_GENERIC}" class="btn btn-whatsapp" target="_blank" rel="noopener">Hablar por WhatsApp</a>
    </div>
  </header>

  <!-- Search overlay -->
  <div class="search-overlay" id="searchOverlay">
    <div class="search-panel">
      <div class="search-input-row">
        ${ICON_SEARCH}
        <input type="text" id="searchInput" placeholder="Buscar auriculares, parlantes, cargadores..." autocomplete="off">
        <button class="icon-btn" id="searchClose" aria-label="Cerrar búsqueda">${ICON_CLOSE}</button>
      </div>
      <div class="search-results" id="searchResults"></div>
    </div>
  </div>`;
}

/* ---------- Footer markup ---------- */
function footerHTML(){
  return `
  <div class="footer-top">
    <div class="footer-brand">
      <span class="brand-mark" aria-hidden="true">FK</span>
      <p class="footer-tagline">FABRIC K TECNOLOGÍAS<br><span>Tecnología y accesorios para tu día a día.</span></p>
    </div>
    <div class="footer-col">
      <h4>Tienda</h4>
      <a href="catalogo.html">Catálogo</a>
      <a href="catalogo.html#categorias">Categorías</a>
      <a href="ofertas.html">Ofertas</a>
      <a href="catalogo.html#novedades">Novedades</a>
    </div>
    <div class="footer-col">
      <h4>Ayuda</h4>
      <a href="contacto.html#como-comprar">Cómo comprar</a>
      <a href="contacto.html#faq">Preguntas frecuentes</a>
      <a href="contacto.html">Contacto</a>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <a href="${WSP_GENERIC}" target="_blank" rel="noopener">WhatsApp</a>
      <a href="https://instagram.com/Fabri_k_tecno" target="_blank" rel="noopener">Instagram</a>
      <a href="contacto.html#mapa">Google Maps</a>
    </div>
    <a class="footer-wsp" href="${WSP_GENERIC}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WSP}</a>
  </div>
  <div class="footer-bottom"><p>© 2026 FABRIC K TECNOLOGÍAS. Todos los derechos reservados.</p></div>`;
}

/* ---------- Floating tools ---------- */
function floatingToolsHTML(){
  return `
  <div class="float-stack">
    <button class="float-btn" id="floatSearch" aria-label="Buscar">${ICON_SEARCH}<span class="float-label">Buscar</span></button>
    <a class="float-btn" href="ofertas.html" aria-label="Ofertas">${ICON_TAG}<span class="float-label">Ofertas</span></a>
    <a class="float-btn float-btn--wsp" href="${WSP_GENERIC}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WSP}<span class="float-label">WhatsApp</span></a>
  </div>`;
}

/* ---------- Inject layout ---------- */
function injectLayout(activePage){
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  const floatSlot = document.getElementById("floating-tools");
  if(headerSlot) headerSlot.innerHTML = headerHTML(activePage);
  if(footerSlot) footerSlot.innerHTML = footerHTML();
  if(floatSlot) floatSlot.innerHTML = floatingToolsHTML();
}

/* ---------- Header scroll state ---------- */
function initHeaderScroll(){
  const header = document.getElementById("siteHeader");
  if(!header) return;
  const onScroll = () => {
    if(window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Mobile nav ---------- */
function initMobileNav(){
  const btn = document.getElementById("hamburger");
  const nav = document.getElementById("mobileNav");
  if(!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    nav.classList.remove("open"); btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }));
}

/* ---------- Search overlay ---------- */
function initSearch(){
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  const openBtns = [document.getElementById("searchTrigger"), document.getElementById("floatSearch")].filter(Boolean);
  const closeBtn = document.getElementById("searchClose");
  if(!overlay || !input) return;

  const open = () => {
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 80);
  };
  const close = () => {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    input.value = "";
    results.innerHTML = "";
  };
  openBtns.forEach(b => b.addEventListener("click", open));
  if(closeBtn) closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if(e.target === overlay) close(); });
  document.addEventListener("keydown", (e) => { if(e.key === "Escape") close(); });

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if(q.length < 2){ results.innerHTML = ""; return; }
    const matches = (typeof PRODUCTS !== "undefined" ? PRODUCTS : []).filter(p => {
      return p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.shortDescription.toLowerCase().includes(q) ||
             p.tags.some(t => t.toLowerCase().includes(q));
    }).slice(0, 8);

    if(matches.length === 0){
      results.innerHTML = `<p class="search-empty">No encontramos productos que coincidan con tu búsqueda.</p>`;
      return;
    }
    results.innerHTML = matches.map(p => `
      <a class="search-result" href="producto.html?slug=${p.slug}">
        <span class="search-result-name">${p.name}</span>
        <span class="search-result-cat">${categoryLabel(p.category)}</span>
        <span class="search-result-price">${formatPrice(p)}</span>
      </a>
    `).join("");
  });
}

function categoryLabel(slug){
  const found = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).find(c => c.slug === slug);
  return found ? found.name : slug;
}

/* ---------- Scroll reveal ---------- */
function initReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ items.forEach(el => el.classList.add("in")); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add("in"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  items.forEach(el => obs.observe(el));
}

/* ---------- FAQ accordion (shared) ---------- */
function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    if(!q) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(other => {
        if(other !== item){ other.classList.remove("open"); other.querySelector(".faq-q").setAttribute("aria-expanded", "false"); }
      });
      item.classList.toggle("open", !isOpen);
      q.setAttribute("aria-expanded", (!isOpen).toString());
    });
  });
}

/* ---------- Newsletter (demo, no backend) ---------- */
function initNewsletter(){
  const form = document.getElementById("newsletterForm");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msg = document.getElementById("newsletterMsg");
    if(msg) msg.textContent = "¡Gracias! Te vamos a avisar de las novedades. (Demo — sin envío real todavía)";
  });
}

/* ---------- Boot: layout + common behaviors on every page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const activePage = document.body.getAttribute("data-page") || "";
  injectLayout(activePage);
  initHeaderScroll();
  initMobileNav();
  initSearch();
  initReveal();
  initFaq();
  initNewsletter();
  if(typeof onPageReady === "function") onPageReady();
});
