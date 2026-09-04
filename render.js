/* ============================================================
   FABRIC K TECNOLOGÍAS — render.js
   Íconos por categoría (no contamos con fotografía de producto
   propia todavía) + funciones de render de product cards,
   reutilizadas en Home, Catálogo, Ofertas y Producto.
   ============================================================ */

const CATEGORY_ICONS = {
  auriculares: `<svg viewBox="0 0 24 24"><path d="M3 14v-2a9 9 0 0118 0v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><rect x="2.5" y="14" width="5" height="7" rx="2" fill="currentColor"/><rect x="16.5" y="14" width="5" height="7" rx="2" fill="currentColor"/></svg>`,
  parlantes: `<svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="14" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="12" cy="6" r="1" fill="currentColor"/></svg>`,
  soportes: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="12" y1="16" x2="12" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  accesorios: `<svg viewBox="0 0 24 24"><path d="M6 3v6a4 4 0 004 4h4a4 4 0 014 4v4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="6" cy="3" r="2" fill="currentColor"/><circle cx="18" cy="21" r="2" fill="currentColor"/></svg>`,
  tecnologia: `<svg viewBox="0 0 24 24"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor"/></svg>`,
  vapes: `<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="6" y="9" width="12" height="13" rx="3" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="9" y1="14" x2="15" y2="14" stroke="currentColor" stroke-width="1.3"/></svg>`,
};

function categoryIcon(cat){ return CATEGORY_ICONS[cat] || CATEGORY_ICONS.tecnologia; }

/* Real photo when available, category icon as fallback (no photo yet) */
function productMedia(p){
  if(p.images && p.images.length){
    return `<img src="${p.images[0]}" alt="${p.name}" loading="lazy">`;
  }
  return categoryIcon(p.category);
}

/* ---------- Single product card (used everywhere) ---------- */
function productCardHTML(p, theme = "dark"){
  const badge = p.badge ? `<span class="pc-badge pc-badge--${badgeClass(p.badge)}">${p.badge}</span>` : "";
  const oldPrice = p.oldPrice ? `<span class="pc-old">ARS ${p.oldPrice.toLocaleString("es-AR")}</span>` : "";
  const hasPhoto = p.images && p.images.length ? "pc-media--photo" : "";
  return `
  <article class="product-card product-card--${theme}" data-cat="${p.category}" data-price="${p.price}" data-new="${p.isNew}" data-stock="${p.stock}">
    <a href="producto.html?slug=${p.slug}" class="pc-media-link">
      <div class="pc-media ${hasPhoto}">${badge}${productMedia(p)}</div>
    </a>
    <div class="pc-body">
      <span class="pc-cat">${categoryLabel(p.category)}</span>
      <a href="producto.html?slug=${p.slug}"><h3 class="pc-name">${p.name}</h3></a>
      <div class="pc-price-row">
        ${oldPrice}
        <span class="pc-price">${formatPrice(p)}</span>
      </div>
      <span class="pc-stock ${p.stock ? "in" : "out"}">${p.stock ? "Disponible" : "Sin stock"}</span>
      <div class="pc-cta">
        <a href="${wspProductLink(p.name)}" target="_blank" rel="noopener">Consultar por WhatsApp</a>
      </div>
    </div>
  </article>`;
}

function badgeClass(badge){
  const map = { "NUEVO":"new", "OFERTA":"offer", "MÁS VENDIDO":"best", "DESTACADO":"feat" };
  return map[badge] || "default";
}

function renderGrid(containerId, products, theme = "dark", emptyMsg = "No encontramos productos que coincidan con tu búsqueda."){
  const el = document.getElementById(containerId);
  if(!el) return;
  if(products.length === 0){
    el.innerHTML = `<p class="grid-empty">${emptyMsg}</p>`;
    return;
  }
  el.innerHTML = products.map(p => productCardHTML(p, theme)).join("");
}
