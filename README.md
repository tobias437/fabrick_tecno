# FABRI K TECNO — sitio web (v1)

Primera versión funcional de e-commerce. Frontend estático (HTML/CSS/JS
vanilla), sin backend ni checkout real — el sistema está diseñado para
escalar hacia eso más adelante (ver "Arquitectura escalable").

## Estructura

```
FABRI-K-TECNO/
├── index.html          Home
├── catalogo.html        Catálogo con búsqueda, filtros y orden
├── ofertas.html          Listado de productos en oferta
├── producto.html         Página individual de producto (?slug=)
├── contacto.html          Mapa, horarios, cómo comprar, FAQ
├── css/style.css          Design system completo
├── js/
│   ├── products.js        Base de datos de productos (fuente de verdad)
│   ├── render.js           Íconos por categoría + render de product cards
│   ├── filters.js          Lógica de búsqueda/filtros/orden del catálogo
│   └── app.js               Header, footer, botones flotantes, buscador,
│                              menú mobile, FAQ, newsletter (compartido)
└── assets/                  Carpetas listas para fotos reales de producto
```

## Información real vs. demo vs. pendiente

- **Real:** marca (FABRI K TECNO), paleta de colores, número de WhatsApp
  (+54 9 11 6824-3265), y el listado de productos con nombres/precios —
  proviene del catálogo real de WhatsApp Business.
- **Demo (marcado explícitamente en el sitio):** reseñas de clientes,
  publicaciones de Instagram, badges de "más vendido" (no hay datos de
  ventas reales todavía), porcentajes de descuento.
- **Pendiente (placeholders `[ENTRE CORCHETES]`):** dirección física,
  horarios de atención, Instagram real, medios de pago, política de
  envíos, fotografía de producto.

## Fotografía de producto

Los productos no tienen fotos propias todavía (`images: []` en
`products.js`). Mientras tanto, cada card muestra un ícono vectorial
por categoría (ver `CATEGORY_ICONS` en `render.js`). Cuando haya fotos
reales: agregar las URLs al array `images` de cada producto en
`products.js` y reemplazar `categoryIcon(product.category)` por
`<img src="...">` en `render.js` y `producto.html` — es el único lugar
que hay que tocar.

## Base de productos (`products.js`)

Cada producto sigue esta estructura:

```js
{
  id, name, slug, category, price, oldPrice, discount,
  stock, featured, bestSeller, isNew, badge, dateAdded,
  images, shortDescription, description, specifications, tags
}
```

Agregar productos nuevos es agregar objetos a este array — no hace
falta tocar HTML. El catálogo, buscador, ofertas y productos
relacionados se generan todos a partir de esta lista.

## Arquitectura escalable (preparado, no implementado)

- **Stock / pedidos reales:** reemplazar `PRODUCTS` (array hardcodeado)
  por un `fetch()` a una API o base de datos (Firebase, Supabase, etc.)
  sin cambiar el resto del código — `render.js` y `filters.js` ya
  consumen `PRODUCTS` como una lista genérica.
- **Mercado Libre / Shopify / WooCommerce:** se pueden sincronizar como
  fuente de `products.js` vía un script de build o una API intermedia.
- **Analytics:** agregar Google Analytics / Meta Pixel en el `<head>`
  de cada página; los CTAs de WhatsApp ya están centralizados en
  `wspProductLink()` / `WSP_GENERIC` (`js/app.js`), ideal para trackear
  eventos de conversión en un solo lugar.
- **Google Merchant Center / Schema.org:** falta agregar structured data
  (`LocalBusiness`, `Product`) — no se implementó porque requiere
  dirección y datos reales confirmados (ver sección de pendientes).

## Cómo verlo localmente

1. Abrir la carpeta en VS Code.
2. Extensión **Live Server** → click derecho en `index.html` →
   "Open with Live Server".
3. Navegar desde ahí — todos los links entre páginas son relativos.
