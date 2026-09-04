/* ============================================================
   FABRIC K TECNOLOGÍAS — filters.js
   Filtros, orden y búsqueda en vivo para catalogo.html.
   ============================================================ */

const CatalogState = {
  query: "",
  category: "all",
  price: "all",       // all | low | mid | high
  availability: "all", // all | stock | offers | new
  sort: "relevance",   // relevance | new | price-asc | price-desc
};

function applyFilters(){
  let list = [...PRODUCTS];

  if(CatalogState.query){
    const q = CatalogState.query.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if(CatalogState.category !== "all"){
    list = list.filter(p => p.category === CatalogState.category);
  }

  if(CatalogState.price !== "all"){
    list = list.filter(p => {
      if(!p.price) return false;
      if(CatalogState.price === "low") return p.price < 8000;
      if(CatalogState.price === "mid") return p.price >= 8000 && p.price <= 20000;
      if(CatalogState.price === "high") return p.price > 20000;
      return true;
    });
  }

  if(CatalogState.availability !== "all"){
    if(CatalogState.availability === "stock") list = list.filter(p => p.stock);
    if(CatalogState.availability === "offers") list = list.filter(p => p.discount > 0);
    if(CatalogState.availability === "new") list = list.filter(p => p.isNew);
  }

  if(CatalogState.sort === "new"){
    list.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  } else if(CatalogState.sort === "price-asc"){
    list.sort((a,b) => (a.price || Infinity) - (b.price || Infinity));
  } else if(CatalogState.sort === "price-desc"){
    list.sort((a,b) => (b.price || 0) - (a.price || 0));
  }
  // "relevance" = default catalog order (curated)

  return list;
}

function renderCatalog(){
  const list = applyFilters();
  renderGrid("catalogGrid", list, "dark");
  const countEl = document.getElementById("catalogCount");
  if(countEl){
    countEl.textContent = `${list.length} producto${list.length === 1 ? "" : "s"}`;
  }
}

function initCatalogFilters(){
  const searchInput = document.getElementById("catalogSearch");
  const catButtons = document.querySelectorAll("[data-catfilter]");
  const priceSelect = document.getElementById("filterPrice");
  const availSelect = document.getElementById("filterAvailability");
  const sortSelect = document.getElementById("sortSelect");

  if(searchInput){
    searchInput.addEventListener("input", () => {
      CatalogState.query = searchInput.value.trim();
      renderCatalog();
    });
  }
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      CatalogState.category = btn.dataset.catfilter;
      renderCatalog();
    });
  });
  if(priceSelect) priceSelect.addEventListener("change", () => { CatalogState.price = priceSelect.value; renderCatalog(); });
  if(availSelect) availSelect.addEventListener("change", () => { CatalogState.availability = availSelect.value; renderCatalog(); });
  if(sortSelect) sortSelect.addEventListener("change", () => { CatalogState.sort = sortSelect.value; renderCatalog(); });

  // Deep-link: catalogo.html?categoria=auriculares
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get("categoria");
  if(catParam && CATEGORIES.some(c => c.slug === catParam)){
    CatalogState.category = catParam;
    catButtons.forEach(b => b.classList.toggle("active", b.dataset.catfilter === catParam));
  }

  renderCatalog();
}
