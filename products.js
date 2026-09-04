/* ============================================================
   FABRIC K TECNOLOGÍAS — products.js
   Base de datos de productos.
   Fuente: fotos reales del local (Las Heras 5267), tomadas para
   este catálogo. Los precios marcados vienen de etiquetas escritas
   a mano en las cajas — el resto dice "Consultar precio" porque
   no había etiqueta legible: ningún precio fue inventado.
   'featured' es una selección curada a mano para la Home, NO viene
   de datos de ventas reales (no los tenemos todavía).
   ============================================================ */

const PRODUCTS = [
  {
    id: "FK001", name: "Auricular Bluetooth OWS Wireless", slug: "auricular-ows-wireless",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-ows-wireless.jpg", "auricular-ows-wireless-2.jpg", "auricular-ows-wireless-3.jpg"],
    shortDescription: "Auricular Bluetooth OWS Wireless.",
    description: "Auricular Bluetooth OWS Wireless. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK002", name: "Auricular Bluetooth A6S MiPods", slug: "auricular-a6s-mipods",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-a6s-mipods.jpg", "auricular-a6s-mipods-2.jpg", "auricular-a6s-mipods-3.jpg"],
    shortDescription: "Auricular Bluetooth A6S MiPods.",
    description: "Auricular Bluetooth A6S MiPods. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK003", name: "Auricular Bluetooth HK3 Ultrapods Max", slug: "auricular-hk3-ultrapods-max",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: false, badge: "DESTACADO",
    dateAdded: "2026-08-30", images: ["auricular-hk3-ultrapods-max.jpg", "auricular-hk3-ultrapods-max-2.jpg"],
    shortDescription: "Auricular Bluetooth HK3 Ultrapods Max.",
    description: "Auricular Bluetooth HK3 Ultrapods Max. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK004", name: "Auricular Bluetooth JBL TWS K51", slug: "auricular-jbl-tws-k51",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-jbl-tws-k51.jpg"],
    shortDescription: "Auricular Bluetooth JBL TWS K51.",
    description: "Auricular Bluetooth JBL TWS K51. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK005", name: "Auricular Bluetooth JBL TWS Multi Color", slug: "auricular-jbl-tws-multicolor",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-jbl-tws-multicolor.jpg"],
    shortDescription: "Auricular Bluetooth JBL TWS Multi Color.",
    description: "Auricular Bluetooth JBL TWS Multi Color. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK006", name: "Auricular Bluetooth Sound Earcuffs", slug: "auricular-sound-earcuffs",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-sound-earcuffs.jpg", "auricular-sound-earcuffs-2.jpg", "auricular-sound-earcuffs-3.jpg"],
    shortDescription: "Auricular Bluetooth Sound Earcuffs.",
    description: "Auricular Bluetooth Sound Earcuffs. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK007", name: "Auricular Samsung Buds+ (gris)", slug: "auricular-samsung-buds-gris",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-samsung-buds-gris.jpg"],
    shortDescription: "Auricular Samsung Buds+ (gris).",
    description: "Auricular Samsung Buds+ (gris). Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK008", name: "Auricular Samsung Buds+ (blanco)", slug: "auricular-samsung-buds-blanco",
    category: "auriculares", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["auricular-samsung-buds-blanco.jpg"],
    shortDescription: "Auricular Samsung Buds+ (blanco).",
    description: "Auricular Samsung Buds+ (blanco). Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["auriculares"]
  },
  {
    id: "FK009", name: "Parlante Bluetooth Camuflado", slug: "parlante-camuflado",
    category: "parlantes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["parlante-camuflado.jpg"],
    shortDescription: "Parlante Bluetooth Camuflado.",
    description: "Parlante Bluetooth Camuflado. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["parlantes"]
  },
  {
    id: "FK010", name: "Parlante Bluetooth KTS-1057 3\"", slug: "parlante-kts-1057",
    category: "parlantes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: false, badge: "DESTACADO",
    dateAdded: "2026-08-30", images: ["parlante-kts-1057.jpg", "parlante-kts-1057-2.jpg", "parlante-kts-1057-3.jpg"],
    shortDescription: "Parlante Bluetooth KTS-1057 3\".",
    description: "Parlante Bluetooth KTS-1057 3\". Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["parlantes"]
  },
  {
    id: "FK011", name: "Parlantes USB 2.0 para PC", slug: "parlantes-usb-2-0",
    category: "parlantes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["parlantes-usb-2-0.jpg"],
    shortDescription: "Parlantes USB 2.0 para PC.",
    description: "Parlantes USB 2.0 para PC. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["parlantes"]
  },
  {
    id: "FK012", name: "Parlante Bluetooth Redondo", slug: "parlante-redondo-mesii",
    category: "parlantes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["parlante-redondo-mesii.jpg"],
    shortDescription: "Parlante Bluetooth Redondo.",
    description: "Parlante Bluetooth Redondo. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["parlantes"]
  },
  {
    id: "FK013", name: "Parlante Karaoke con Micrófono K12", slug: "parlante-karaoke-k12",
    category: "parlantes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["parlante-karaoke-k12.jpg"],
    shortDescription: "Parlante Karaoke con Micrófono K12.",
    description: "Parlante Karaoke con Micrófono K12. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["parlantes"]
  },
  {
    id: "FK014", name: "Soporte para Auto Royalcell (ventosa)", slug: "soporte-auto-royalcell",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-auto-royalcell.jpg", "soporte-auto-royalcell-2.jpg"],
    shortDescription: "Soporte para Auto Royalcell (ventosa).",
    description: "Soporte para Auto Royalcell (ventosa). Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK015", name: "Soporte para Auto con Brazo Articulado", slug: "soporte-auto-ventosa-brazo",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-auto-ventosa-brazo.jpg", "soporte-auto-ventosa-brazo-2.jpg"],
    shortDescription: "Soporte para Auto con Brazo Articulado.",
    description: "Soporte para Auto con Brazo Articulado. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK016", name: "Soporte para Auto para Rejilla", slug: "soporte-auto-rejilla",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-auto-rejilla.jpg", "soporte-auto-rejilla-2.jpg"],
    shortDescription: "Soporte para Auto para Rejilla.",
    description: "Soporte para Auto para Rejilla. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK017", name: "Soporte para Auto Gravity Car Phone Holder", slug: "soporte-auto-gravity",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-auto-gravity.jpg"],
    shortDescription: "Soporte para Auto Gravity Car Phone Holder.",
    description: "Soporte para Auto Gravity Car Phone Holder. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK018", name: "Soporte para Moto y Bici Outdoor Riding", slug: "soporte-moto-bici-outdoor",
    category: "soportes", price: 14000, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: false, badge: "DESTACADO",
    dateAdded: "2026-08-30", images: ["soporte-moto-bici-outdoor.jpg"],
    shortDescription: "Soporte para Moto y Bici Outdoor Riding.",
    description: "Soporte para Moto y Bici Outdoor Riding. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK019", name: "Funda Impermeable para Moto", slug: "funda-impermeable-moto",
    category: "soportes", price: 12000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["funda-impermeable-moto.jpg"],
    shortDescription: "Funda Impermeable para Moto.",
    description: "Funda Impermeable para Moto. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK020", name: "Soporte de Escritorio Lambo Tech", slug: "soporte-escritorio-lambo",
    category: "soportes", price: 5000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-escritorio-lambo.jpg"],
    shortDescription: "Soporte de Escritorio Lambo Tech.",
    description: "Soporte de Escritorio Lambo Tech. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK021", name: "Cargador Inalámbrico + Soporte Auto Lambo Tech", slug: "cargador-soporte-auto-lambo",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["cargador-soporte-auto-lambo.jpg"],
    shortDescription: "Cargador Inalámbrico + Soporte Auto Lambo Tech.",
    description: "Cargador Inalámbrico + Soporte Auto Lambo Tech. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK022", name: "Soporte de Escritorio para Celular", slug: "soporte-escritorio-generico",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-escritorio-generico.jpg"],
    shortDescription: "Soporte de Escritorio para Celular.",
    description: "Soporte de Escritorio para Celular. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK023", name: "Brazalete Deportivo Porta Celular", slug: "soporte-brazalete-deportivo",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-brazalete-deportivo.jpg"],
    shortDescription: "Brazalete Deportivo Porta Celular.",
    description: "Brazalete Deportivo Porta Celular. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK024", name: "Funda Impermeable para Celular", slug: "funda-impermeable-celular",
    category: "soportes", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["funda-impermeable-celular.jpg", "funda-impermeable-celular-2.jpg", "funda-impermeable-celular-3.jpg"],
    shortDescription: "Funda Impermeable para Celular.",
    description: "Funda Impermeable para Celular. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["soportes"]
  },
  {
    id: "FK025", name: "Vidrio Templado Privacidad", slug: "vidrio-templado-privacidad-mt",
    category: "accesorios", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["vidrio-templado-privacidad-mt.jpg"],
    shortDescription: "Vidrio Templado Privacidad.",
    description: "Vidrio Templado Privacidad. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["accesorios"]
  },
  {
    id: "FK026", name: "Vidrio Templado Premium Moto G85", slug: "vidrio-templado-moto-g85",
    category: "accesorios", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["vidrio-templado-moto-g85.jpg"],
    shortDescription: "Vidrio Templado Premium Moto G85.",
    description: "Vidrio Templado Premium Moto G85. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["accesorios"]
  },
  {
    id: "FK027", name: "Vidrio Templado Full Glue 9D", slug: "vidrio-templado-9d-xs",
    category: "accesorios", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["vidrio-templado-9d-xs.jpg"],
    shortDescription: "Vidrio Templado Full Glue 9D.",
    description: "Vidrio Templado Full Glue 9D. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["accesorios"]
  },
  {
    id: "FK028", name: "Vidrio Templado Privacidad 360°", slug: "vidrio-templado-privacidad-360",
    category: "accesorios", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["vidrio-templado-privacidad-360.jpg"],
    shortDescription: "Vidrio Templado Privacidad 360°.",
    description: "Vidrio Templado Privacidad 360°. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["accesorios"]
  },
  {
    id: "FK029", name: "Vidrio Templado Full Glue 9D (17 Pro)", slug: "vidrio-templado-9d-17pro",
    category: "accesorios", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: false, badge: "DESTACADO",
    dateAdded: "2026-08-30", images: ["vidrio-templado-9d-17pro.jpg"],
    shortDescription: "Vidrio Templado Full Glue 9D (17 Pro).",
    description: "Vidrio Templado Full Glue 9D (17 Pro). Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["accesorios"]
  },
  {
    id: "FK030", name: "Mini Aspiradora Portátil 3 en 1", slug: "mini-aspiradora-3en1",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["mini-aspiradora-3en1.jpg", "mini-aspiradora-3en1-2.jpg", "mini-aspiradora-3en1-3.jpg", "mini-aspiradora-3en1-4.jpg"],
    shortDescription: "Mini Aspiradora Portátil 3 en 1.",
    description: "Mini Aspiradora Portátil 3 en 1. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK031", name: "Afeitadora Eléctrica Recargable", slug: "afeitadora-rotativa-verde",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["afeitadora-rotativa-verde.jpg", "afeitadora-rotativa-verde-2.jpg"],
    shortDescription: "Afeitadora Eléctrica Recargable.",
    description: "Afeitadora Eléctrica Recargable. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK032", name: "Afeitadora Eléctrica 3 Cabezales", slug: "afeitadora-3-cabezales",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["afeitadora-3-cabezales.jpg"],
    shortDescription: "Afeitadora Eléctrica 3 Cabezales.",
    description: "Afeitadora Eléctrica 3 Cabezales. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK033", name: "Afeitadora Eléctrica de Lámina", slug: "afeitadora-foil",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["afeitadora-foil.jpg", "afeitadora-foil-2.jpg"],
    shortDescription: "Afeitadora Eléctrica de Lámina.",
    description: "Afeitadora Eléctrica de Lámina. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK034", name: "Afeitadora Reciprocating Razor RQ-817A", slug: "afeitadora-reciprocating-rq817a",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["afeitadora-reciprocating-rq817a.jpg"],
    shortDescription: "Afeitadora Reciprocating Razor RQ-817A.",
    description: "Afeitadora Reciprocating Razor RQ-817A. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK035", name: "Cortapelo con Pantalla LED", slug: "cortapelo-pantalla-led",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["cortapelo-pantalla-led.jpg", "cortapelo-pantalla-led-2.jpg"],
    shortDescription: "Cortapelo con Pantalla LED.",
    description: "Cortapelo con Pantalla LED. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK036", name: "Cortapelo Inalámbrico Diseño Vintage", slug: "cortapelo-vintage-dorado",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["cortapelo-vintage-dorado.jpg", "cortapelo-vintage-dorado-2.jpg"],
    shortDescription: "Cortapelo Inalámbrico Diseño Vintage.",
    description: "Cortapelo Inalámbrico Diseño Vintage. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK037", name: "Cortadora de Pelo para Mascotas", slug: "cortadora-mascotas-dorada",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["cortadora-mascotas-dorada.jpg", "cortadora-mascotas-dorada-2.jpg", "cortadora-mascotas-dorada-3.jpg", "cortadora-mascotas-dorada-4.jpg"],
    shortDescription: "Cortadora de Pelo para Mascotas.",
    description: "Cortadora de Pelo para Mascotas. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK038", name: "Luces LED con Control Remoto (set x3)", slug: "luces-led-remoto-set3",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["luces-led-remoto-set3.jpg"],
    shortDescription: "Luces LED con Control Remoto (set x3).",
    description: "Luces LED con Control Remoto (set x3). Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK039", name: "Tira LED RGB Bluetooth 5M", slug: "tira-led-rgb-bt-5m",
    category: "tecnologia", price: 12000, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: false, badge: "DESTACADO",
    dateAdded: "2026-08-30", images: ["tira-led-rgb-bt-5m.jpg"],
    shortDescription: "Tira LED RGB Bluetooth 5M.",
    description: "Tira LED RGB Bluetooth 5M. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK040", name: "Tira LED RGB 3M con Control Remoto", slug: "tira-led-rgb-3m",
    category: "tecnologia", price: 10000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["tira-led-rgb-3m.jpg"],
    shortDescription: "Tira LED RGB 3M con Control Remoto.",
    description: "Tira LED RGB 3M con Control Remoto. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK041", name: "Tira LED RGB 15m App Smart Control", slug: "tira-led-app-15m",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["tira-led-app-15m.jpg", "tira-led-app-15m-2.jpg", "tira-led-app-15m-3.jpg"],
    shortDescription: "Tira LED RGB 15m App Smart Control.",
    description: "Tira LED RGB 15m App Smart Control. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK042", name: "Tira LED Neón 5M 12V", slug: "tira-led-neon-5m",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["tira-led-neon-5m.jpg"],
    shortDescription: "Tira LED Neón 5M 12V.",
    description: "Tira LED Neón 5M 12V. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK043", name: "Soporte de Pared para TV 26\"", slug: "soporte-tv-26",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-tv-26.jpg", "soporte-tv-26-2.jpg"],
    shortDescription: "Soporte de Pared para TV 26\".",
    description: "Soporte de Pared para TV 26\". Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK044", name: "Soporte de Pared para TV 40\"-85\"", slug: "soporte-tv-40-85",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["soporte-tv-40-85.jpg", "soporte-tv-40-85-2.jpg"],
    shortDescription: "Soporte de Pared para TV 40\"-85\".",
    description: "Soporte de Pared para TV 40\"-85\". Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK045", name: "Luz LED con Sensor 500mm", slug: "luz-led-sensor-500mm",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["luz-led-sensor-500mm.jpg", "luz-led-sensor-500mm-2.jpg"],
    shortDescription: "Luz LED con Sensor 500mm.",
    description: "Luz LED con Sensor 500mm. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK046", name: "Cartel LED Neón Personalizable", slug: "cartel-led-neon",
    category: "tecnologia", price: null, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: false, badge: "",
    dateAdded: "2026-08-30", images: ["cartel-led-neon.jpg"],
    shortDescription: "Cartel LED Neón Personalizable.",
    description: "Cartel LED Neón Personalizable. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["tecnologia"]
  },
  {
    id: "FK047", name: "Vape MESII 30000 Puffs", slug: "vape-mesii-30000",
    category: "vapes", price: 30000, oldPrice: 0, discount: 0,
    stock: true, featured: true, bestSeller: false, isNew: true, badge: "NUEVO",
    dateAdded: "2026-08-30", images: ["vape-mesii-30000.jpg", "vape-mesii-30000-2.jpg", "vape-mesii-30000-3.jpg"],
    shortDescription: "Vape MESII 30000 Puffs.",
    description: "Vape MESII 30000 Puffs. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["vapes"]
  },
  {
    id: "FK048", name: "Vape ELFBAR BC20000", slug: "vape-elfbar-bc20000",
    category: "vapes", price: 25000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: true, badge: "NUEVO",
    dateAdded: "2026-08-30", images: ["vape-elfbar-bc20000.jpg"],
    shortDescription: "Vape ELFBAR BC20000.",
    description: "Vape ELFBAR BC20000. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["vapes"]
  },
  {
    id: "FK049", name: "Vape MESII 35K Cherry Cola Ice", slug: "vape-mesii-35k-cherry",
    category: "vapes", price: 35000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: true, badge: "NUEVO",
    dateAdded: "2026-08-30", images: ["vape-mesii-35k-cherry.jpg"],
    shortDescription: "Vape MESII 35K Cherry Cola Ice.",
    description: "Vape MESII 35K Cherry Cola Ice. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["vapes"]
  },
  {
    id: "FK050", name: "Vape MESII 35K Strawberry Ice", slug: "vape-mesii-35k-strawberry",
    category: "vapes", price: 35000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: true, badge: "NUEVO",
    dateAdded: "2026-08-30", images: ["vape-mesii-35k-strawberry.jpg"],
    shortDescription: "Vape MESII 35K Strawberry Ice.",
    description: "Vape MESII 35K Strawberry Ice. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["vapes"]
  },
  {
    id: "FK051", name: "Vape MESII 35K Blueberry Watermelon", slug: "vape-mesii-35k-blueberry",
    category: "vapes", price: 35000, oldPrice: 0, discount: 0,
    stock: true, featured: false, bestSeller: false, isNew: true, badge: "NUEVO",
    dateAdded: "2026-08-30", images: ["vape-mesii-35k-blueberry.jpg"],
    shortDescription: "Vape MESII 35K Blueberry Watermelon.",
    description: "Vape MESII 35K Blueberry Watermelon. Producto real de catálogo — especificaciones a confirmar.",
    specifications: [], tags: ["vapes"]
  },
];

/* ---------- Categorías ---------- */
const CATEGORIES = [
  { slug: "auriculares", name: "Auriculares", desc: "" },
  { slug: "parlantes", name: "Parlantes", desc: "" },
  { slug: "soportes", name: "Soportes", desc: "" },
  { slug: "accesorios", name: "Accesorios", desc: "" },
  { slug: "tecnologia", name: "Tecnología", desc: "" },
  { slug: "vapes", name: "Vapes", desc: "" },
];

function getProductBySlug(slug){
  if(!slug) return null;
  const clean = slug.trim().toLowerCase();
  return PRODUCTS.find(p => p.slug === clean) || null;
}
function getProductsByCategory(cat){
  return PRODUCTS.filter(p => p.category === cat);
}
function getFeatured(){ return PRODUCTS.filter(p => p.featured); }
function getBestSellers(){ return PRODUCTS.filter(p => p.bestSeller); }
function getNewArrivals(){
  return [...PRODUCTS].sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));
}
function getOffers(){ return PRODUCTS.filter(p => p.discount > 0); }
function getRelated(product, limit = 4){
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, limit);
}
function formatPrice(product){
  if(product.priceOnRequest || !product.price) return "Consultar precio";
  return "ARS " + product.price.toLocaleString("es-AR");
}