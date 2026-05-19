// ============================================================
// LUMIÈRE — app.js  (FIXED: Sport Blaze & Contact Lenses removed)
// ============================================================

// ── 8 verified Unsplash eyewear URLs (all unique) ─────────────
const PRODUCT_PHOTOS = {
  1: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=85&auto=format&fit=crop',  // The Parisian — rectangular acetate
  2: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=85&auto=format&fit=crop',  // Milano Round — round gold
  3: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=85&auto=format&fit=crop',  // Tokyo Cat-Eye — dark cat-eye
  4: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=85&auto=format&fit=crop',  // Aviator Classic — aviator flat-lay
  5: 'https://images.unsplash.com/photo-1587400700819-0d2ea0bb3ee4?w=600&q=85&auto=format&fit=crop',  // Wayfarer Bold — geometric/silver frames
  6: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&q=85&auto=format&fit=crop',  // Geometric Edge — blue half-rim
  7: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=85&auto=format&fit=crop',  // Half-Rim Scholar — thin minimal
  8: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format&fit=crop',  // Rimless Prestige — wayfarer on person
};

// Fallback — first from the verified pool
const FALLBACK_PHOTO = 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=85&auto=format&fit=crop';

function getPhoto(id) {
  return PRODUCT_PHOTOS[id] || FALLBACK_PHOTO;
}

// ── SVGs kept for cart/detail mini-previews only ─────────────
const FRAME_SVGS = {
  rectangular: (fc, lc = 'rgba(180,215,245,0.28)') => `
    <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 4px 14px rgba(0,0,0,0.18))">
      <defs>
        <linearGradient id="rg_l" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${fc}" stop-opacity="0.85"/><stop offset="100%" stop-color="${fc}"/></linearGradient>
        <linearGradient id="rg_lens" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8e6ff" stop-opacity="0.42"/><stop offset="60%" stop-color="${lc}"/><stop offset="100%" stop-color="#8ab8e8" stop-opacity="0.18"/></linearGradient>
      </defs>
      <path d="M6 50 Q6 44 10 43 L25 43" stroke="url(#rg_l)" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M274 50 Q274 44 270 43 L255 43" stroke="url(#rg_l)" stroke-width="5" stroke-linecap="round" fill="none"/>
      <rect x="28" y="24" width="102" height="58" rx="9" fill="url(#rg_lens)"/>
      <rect x="150" y="24" width="102" height="58" rx="9" fill="url(#rg_lens)"/>
      <rect x="28" y="24" width="102" height="58" rx="9" stroke="url(#rg_l)" stroke-width="5.5" fill="none"/>
      <rect x="150" y="24" width="102" height="58" rx="9" stroke="url(#rg_l)" stroke-width="5.5" fill="none"/>
      <path d="M130 47 Q140 40 150 47" stroke="${fc}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  round: (fc, lc = 'rgba(195,228,250,0.3)') => `
    <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 4px 14px rgba(0,0,0,0.18))">
      <defs><radialGradient id="ro_lens" cx="35%" cy="32%"><stop offset="0%" stop-color="#ddf0ff" stop-opacity="0.55"/><stop offset="100%" stop-color="#90c0e8" stop-opacity="0.15"/></radialGradient></defs>
      <path d="M5 52 Q5 46 9 45 L26 47" stroke="${fc}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M275 52 Q275 46 271 45 L254 47" stroke="${fc}" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <circle cx="82" cy="55" r="38" fill="url(#ro_lens)"/>
      <circle cx="198" cy="55" r="38" fill="url(#ro_lens)"/>
      <circle cx="82" cy="55" r="38" stroke="${fc}" stroke-width="4.5" fill="none"/>
      <circle cx="198" cy="55" r="38" stroke="${fc}" stroke-width="4.5" fill="none"/>
      <path d="M120 51 Q140 43 160 51" stroke="${fc}" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  cateye: (fc) => `
    <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 5px 16px rgba(0,0,0,0.28))">
      <path d="M5 48 Q6 42 11 40 L27 41" stroke="${fc}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M275 48 Q274 42 269 40 L253 41" stroke="${fc}" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M27 70 Q27 80 48 80 L100 74 Q125 68 125 50 Q125 24 100 20 L58 18 Q27 18 27 40Z" fill="rgba(20,20,35,0.6)" stroke="${fc}" stroke-width="5.5" fill-opacity="1"/>
      <path d="M253 70 Q253 80 232 80 L180 74 Q155 68 155 50 Q155 24 180 20 L222 18 Q253 18 253 40Z" fill="rgba(20,20,35,0.6)" stroke="${fc}" stroke-width="5.5"/>
      <path d="M125 47 Q140 39 155 47" stroke="${fc}" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>`,
  aviator: (fc) => `
    <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 5px 16px rgba(0,0,0,0.22))">
      <path d="M5 38 Q5 32 9 31 L25 33" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M275 38 Q275 32 271 31 L255 33" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M25 33 Q140 18 255 33" stroke="${fc}" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M26 36 Q24 90 68 95 Q112 100 120 62 Q128 28 100 30 L42 30 Q26 30 26 36Z" fill="rgba(20,70,120,0.45)" stroke="${fc}" stroke-width="2.8"/>
      <path d="M254 36 Q256 90 212 95 Q168 100 160 62 Q152 28 180 30 L238 30 Q254 30 254 36Z" fill="rgba(20,70,120,0.45)" stroke="${fc}" stroke-width="2.8"/>
      <path d="M120 52 Q140 46 160 52" stroke="${fc}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  wayfarer: (fc) => `
    <svg viewBox="0 0 280 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 5px 18px rgba(0,0,0,0.32))">
      <path d="M5 48 L23 50" stroke="${fc}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M275 48 L257 50" stroke="${fc}" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M23 22 L112 22 Q122 22 122 30 L122 74 Q122 84 106 84 L34 80 Q20 78 20 66 L20 30 Q20 22 23 22Z" fill="rgba(8,8,8,0.7)" stroke="${fc}" stroke-width="5.5"/>
      <path d="M257 22 L168 22 Q158 22 158 30 L158 74 Q158 84 174 84 L246 80 Q260 78 260 66 L260 30 Q260 22 257 22Z" fill="rgba(8,8,8,0.7)" stroke="${fc}" stroke-width="5.5"/>
      <path d="M122 40 Q140 33 158 40" stroke="${fc}" stroke-width="5.5" fill="none" stroke-linecap="round"/>
    </svg>`,
  geometric: (fc) => `
    <svg viewBox="0 0 280 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 4px 14px rgba(0,0,0,0.2))">
      <path d="M5 50 Q5 44 9 43 L24 45" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M275 50 Q275 44 271 43 L256 45" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <polygon points="46,20 88,20 110,54 88,88 46,88 24,54" fill="rgba(180,210,240,0.2)" stroke="${fc}" stroke-width="3"/>
      <polygon points="234,20 192,20 170,54 192,88 234,88 256,54" fill="rgba(180,210,240,0.2)" stroke="${fc}" stroke-width="3"/>
      <path d="M110 50 Q140 40 170 50" stroke="${fc}" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`,
  halfrim: (fc) => `
    <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 3px 12px rgba(0,0,0,0.16))">
      <path d="M5 42 L22 44" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M275 42 L258 44" stroke="${fc}" stroke-width="3" stroke-linecap="round" fill="none"/>
      <rect x="24" y="24" width="102" height="50" rx="8" fill="rgba(200,230,250,0.2)"/>
      <rect x="154" y="24" width="102" height="50" rx="8" fill="rgba(200,230,250,0.2)"/>
      <path d="M24 32 Q24 24 33 24 L118 24 Q126 24 126 32" stroke="${fc}" stroke-width="4.5" fill="none"/>
      <line x1="24" y1="32" x2="24" y2="50" stroke="${fc}" stroke-width="3"/>
      <line x1="126" y1="32" x2="126" y2="50" stroke="${fc}" stroke-width="3"/>
      <path d="M154 32 Q154 24 163 24 L248 24 Q256 24 256 32" stroke="${fc}" stroke-width="4.5" fill="none"/>
      <line x1="154" y1="32" x2="154" y2="50" stroke="${fc}" stroke-width="3"/>
      <line x1="256" y1="32" x2="256" y2="50" stroke="${fc}" stroke-width="3"/>
      <path d="M126 38 Q140 30 154 38" stroke="${fc}" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>`,
  rimless: (fc) => `
    <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;filter:drop-shadow(0 3px 10px rgba(0,0,0,0.14))">
      <path d="M5 44 L22 46" stroke="${fc}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M275 44 L258 46" stroke="${fc}" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <rect x="24" y="26" width="100" height="52" rx="7" fill="rgba(232,244,255,0.35)"/>
      <rect x="24" y="26" width="100" height="52" rx="7" stroke="${fc}" stroke-width="1" stroke-opacity="0.35" fill="none"/>
      <rect x="156" y="26" width="100" height="52" rx="7" fill="rgba(232,244,255,0.35)"/>
      <rect x="156" y="26" width="100" height="52" rx="7" stroke="${fc}" stroke-width="1" stroke-opacity="0.35" fill="none"/>
      <path d="M124 36 Q140 30 156 36" stroke="${fc}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`
};

// ── Product catalogue — 8 products (Sport Blaze removed) ─────
const PRODUCTS = [
  {
    id:1, name:"The Parisian", brand:"LUMIÈRE", price:4299, original:6999,
    tag:"Best Seller", tagClass:"tag-gold", rating:4.8, reviews:342,
    shape:"rectangular", fc:"#1a1a1a", lc:"rgba(185,218,248,0.28)",
    colorName:"Matte Black", material:"Premium Acetate",
    desc:"Timeless rectangular acetate frames with spring hinges. Anti-reflective blue-cut coating included.",
    faceShape:"Oval · Oblong · Square"
  },
  {
    id:2, name:"Milano Round", brand:"LUMIÈRE", price:3799, original:5499,
    tag:"Trending", tagClass:"tag-blue", rating:4.7, reviews:218,
    shape:"round", fc:"#b8860b", lc:"rgba(210,235,255,0.3)",
    colorName:"Vintage Gold", material:"Stainless Steel",
    desc:"Thin stainless-steel round frames inspired by vintage Italian eyewear. Featherweight at only 14g.",
    faceShape:"Square · Heart · Diamond"
  },
  {
    id:3, name:"Tokyo Cat-Eye", brand:"LUMIÈRE", price:5499, original:7999,
    tag:"New", tagClass:"tag-green", rating:4.9, reviews:567,
    shape:"cateye", fc:"#1a1a1a", lc:"rgba(18,18,30,0.68)",
    colorName:"Jet Black", material:"Thick Acetate",
    desc:"Bold cat-eye silhouette with dark-tinted lenses. The statement piece your wardrobe needs.",
    faceShape:"Oval · Round · Heart"
  },
  {
    id:4, name:"Aviator Classic", brand:"Ray-Ban", price:6999, original:9500,
    tag:"Icon", tagClass:"tag-gold", rating:4.8, reviews:891,
    shape:"aviator", fc:"#c9a84c", lc:"rgba(20,70,120,0.6)",
    colorName:"Gold / Blue", material:"Titanium",
    desc:"The original aviator, now in premium titanium. Blue-gradient mineral glass lenses. Timeless.",
    faceShape:"Oval · Oblong · Heart"
  },
  {
    id:5, name:"Wayfarer Bold", brand:"Ray-Ban", price:5999, original:8500,
    tag:"Classic", tagClass:"tag-dark", rating:4.6, reviews:443,
    shape:"wayfarer", fc:"#2C1810", lc:"rgba(8,8,8,0.74)",
    colorName:"Havana", material:"Thick Acetate",
    desc:"The Wayfarer — a cultural icon since 1956. Dark lenses, tortoiseshell acetate, spring hinges.",
    faceShape:"All Face Shapes"
  },
  {
    id:6, name:"Geometric Edge", brand:"LUMIÈRE", price:4799, original:6500,
    tag:"New", tagClass:"tag-green", rating:4.7, reviews:156,
    shape:"geometric", fc:"#c0c0c0", lc:"rgba(180,210,240,0.26)",
    colorName:"Silver", material:"Titanium",
    desc:"Architectural hexagonal frames in brushed titanium. Where fashion meets geometry.",
    faceShape:"Oval · Oblong"
  },
  {
    id:7, name:"Half-Rim Scholar", brand:"LUMIÈRE", price:2999, original:3999,
    tag:"Blue Cut", tagClass:"tag-blue", rating:4.5, reviews:287,
    shape:"halfrim", fc:"#2c3e6b", lc:"rgba(200,230,255,0.25)",
    colorName:"Navy Steel", material:"TR90",
    desc:"Lightweight half-rim frames with blue-cut AR lenses. Perfect for 8+ hours of screen time.",
    faceShape:"Oval · Square · Oblong"
  },
  {
    id:8, name:"Rimless Prestige", brand:"LUMIÈRE", price:7499, original:10000,
    tag:"Premium", tagClass:"tag-gold", rating:4.9, reviews:124,
    shape:"rimless", fc:"#c9a84c",
    colorName:"Gold", material:"Titanium",
    desc:"Ultra-minimalist rimless titanium frames. 10g total weight. The pinnacle of subtle luxury.",
    faceShape:"Oval · Oblong"
  }
];

// ── State ────────────────────────────────────────────────────
let cart = [], wishlist = [], currentProduct = null;

// ── DOM helpers ──────────────────────────────────────────────
const $ = id => document.getElementById(id);
const fmt = n => '₹' + n.toLocaleString('en-IN');
const discount = (p, o) => Math.round((1 - p/o)*100);

// ── Page navigation — WITH browser history support ───────────
function showPage(name, pushHistory = true) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = $('page-' + name);
  if (pg) pg.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'cart') renderCart();
  if (name === 'wishlist') renderWishlist();
  if (name === 'listing') renderProductsGrid();

  if (pushHistory) {
    history.pushState({ page: name }, '', '#' + name);
  }
}

window.addEventListener('popstate', (e) => {
  const page = (e.state && e.state.page) ? e.state.page : 'home';
  showPage(page, false);
});

window.addEventListener('DOMContentLoaded', () => {
  history.replaceState({ page: 'home' }, '', '#home');
});

// ── Product card HTML — uses REAL PHOTO ──────────────────────
function productCard(p) {
  const photo = getPhoto(p.id);
  const inWish = wishlist.some(w => w.id === p.id);
  return `
  <div class="product-card" onclick="openProduct(${p.id})">
    <div class="product-img-wrap">
      <img
        class="product-real-photo"
        src="${photo}"
        alt="${p.name}"
        loading="lazy"
        onerror="this.src='${FALLBACK_PHOTO}'"
      >
      <span class="product-tag ${p.tagClass||'tag-gold'}">${p.tag}</span>
      <button class="card-wish-btn ${inWish?'wished':''}"
        onclick="event.stopPropagation(); cardToggleWish(${p.id}, this)">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="${inWish?'currentColor':'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
      <div class="product-color-dot" style="background:${p.fc}"></div>
    </div>
    <div class="product-info">
      <p class="product-brand">${p.brand}</p>
      <p class="product-name">${p.name}</p>
      <div class="product-meta">
        <span class="product-shape-badge">${p.shape.charAt(0).toUpperCase()+p.shape.slice(1)}</span>
        <span class="product-material">${p.material}</span>
      </div>
      <div class="product-rating">
        ${'★'.repeat(Math.floor(p.rating))}<span class="rating-text">${p.rating} (${p.reviews})</span>
      </div>
      <div class="product-prices">
        <span class="product-price">${fmt(p.price)}</span>
        <span class="product-original">${fmt(p.original)}</span>
        <span class="product-discount">${discount(p.price, p.original)}% off</span>
      </div>
      <button class="btn-add-cart" onclick="event.stopPropagation(); quickAddCart(${p.id})">Add to Cart</button>
    </div>
  </div>`;
}

// ── Wishlist button on card ──────────────────────────────────
function cardToggleWish(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.classList.remove('wished');
    btn.querySelector('path').setAttribute('fill','none');
    showToast(p.name + ' removed from wishlist');
  } else {
    wishlist.push(p);
    btn.classList.add('wished');
    btn.querySelector('path').setAttribute('fill','currentColor');
    showToast('❤ ' + p.name + ' added to wishlist!');
  }
  $('wishlist-count').textContent = wishlist.length;
}

// ── Quick add to cart from listing ──────────────────────────
function quickAddCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const exists = cart.find(c => c.id === id);
  if (exists) exists.qty++;
  else cart.push({...p, qty:1, lens:'Blue Cut'});
  updateCartBadge();
  showToast('🛍 ' + p.name + ' added to cart!');
}

// ── Open product detail ──────────────────────────────────────
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;

  $('detail-breadcrumb').textContent = p.name;
  $('detail-brand').textContent = p.brand;
  $('detail-name').textContent = p.name;
  $('detail-rating').textContent = p.rating;
  $('detail-price').textContent = fmt(p.price);
  $('detail-original').textContent = fmt(p.original);
  $('detail-discount').textContent = discount(p.price, p.original) + '% OFF';
  $('detail-live-badge').textContent = '● ' + (Math.floor(Math.random()*18)+3) + ' left in stock';

  const detailFrame = $('detail-frame-svg');
  if (detailFrame) {
    detailFrame.innerHTML = `<img
      src="${getPhoto(p.id)}"
      alt="${p.name}"
      style="width:100%;height:100%;object-fit:contain;border-radius:10px;"
      onerror="this.src='${FALLBACK_PHOTO}'"
    >`;
  }

  if ($('spec-shape')) $('spec-shape').textContent = p.shape.charAt(0).toUpperCase()+p.shape.slice(1);
  if ($('spec-material')) $('spec-material').textContent = p.material;
  if ($('spec-face')) $('spec-face').textContent = p.faceShape;

  const similar = PRODUCTS.filter(x => x.id !== id).slice(0,6);
  const sim = $('similar-products');
  if (sim) sim.innerHTML = similar.map(productCard).join('');

  showPage('detail');
}

// ── Render product grid (listing page) ──────────────────────
function renderProductsGrid() {
  const grid = $('products-grid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(productCard).join('');
}

// ── Render bestsellers carousel ──────────────────────────────
function renderBestsellers() {
  const c = $('bestsellers-carousel');
  if (!c) return;
  // Updated: removed id 9 (Sport Blaze), added id 8 (Rimless Prestige) instead
  const picks = PRODUCTS.filter(p => [1,3,4,5,8].includes(p.id));
  c.innerHTML = picks.map(productCard).join('');
}

// ── Render trending grid ─────────────────────────────────────
function renderTrending() {
  const g = $('trending-grid');
  if (!g) return;
  // Updated: removed id 9 (Sport Blaze), kept 2,3,6,7,8
  const picks = PRODUCTS.filter(p => [2,3,6,7,8].includes(p.id));
  g.innerHTML = picks.map(productCard).join('');
}

// ── Cart ─────────────────────────────────────────────────────
function addToCart(p) {
  if (!p) return;
  const lens = document.querySelector('input[name="lens"]:checked');
  const lensType = lens ? lens.value : 'bluecut';
  const lensPrice = {zero:0,bluecut:500,antiglare:800,progressive:2500,photochromic:1800}[lensType]||0;
  const exists = cart.find(c => c.id === p.id);
  if (exists) exists.qty++;
  else cart.push({...p, qty:1, lens:lensType, lensPrice});
  updateCartBadge();
  showToast('🛍 ' + p.name + ' added to cart!');
}

function buyNow(p) {
  addToCart(p);
  showPage('cart');
}

function updateCartBadge() {
  const total = cart.reduce((a,c) => a + c.qty, 0);
  $('cart-count').textContent = total;
}

function renderCart() {
  const items = $('cart-items'), summary = $('cart-summary');
  if (!items) return;
  if (!cart.length) {
    items.innerHTML = `<div class="empty-state">
      <div style="font-size:3rem;margin-bottom:1rem">🛍</div>
      <p>Your cart is empty.</p>
      <button class="btn-primary" onclick="showPage('listing')">Browse Eyewear</button>
    </div>`;
    if (summary) summary.innerHTML = '';
    return;
  }
  items.innerHTML = cart.map(item => {
    const photo = getPhoto(item.id);
    return `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${photo}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"
          onerror="this.src='${FALLBACK_PHOTO}'">
      </div>
      <div class="cart-item-info">
        <p class="cart-item-brand">${item.brand}</p>
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-sub">${item.colorName} · ${(item.lens||'bluecut')} lens</p>
        <div class="cart-qty-row">
          <button onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <p class="cart-item-price">${fmt(item.price * item.qty)}</p>
        <button class="cart-remove" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>`;
  }).join('');

  const subtotal = cart.reduce((a,c) => a + c.price*c.qty, 0);
  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping;
  if (summary) summary.innerHTML = `
    <div class="summary-card">
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping</span><span>${shipping===0?'FREE':fmt(shipping)}</span></div>
      <div class="summary-row"><span>Discount (LUMIERE20)</span><span style="color:#22c55e">–₹0</span></div>
      <div class="coupon-row">
        <input type="text" class="form-input" placeholder="Coupon code">
        <button class="btn-ghost">Apply</button>
      </div>
      <div class="summary-total"><span>Total</span><span>${fmt(total)}</span></div>
      <button class="btn-primary full-width large" onclick="showModal('checkout-modal'); renderCheckoutSummary()">Proceed to Checkout →</button>
      <p style="font-size:0.75rem;color:var(--text-muted);text-align:center;margin-top:0.75rem">🔒 Secure checkout · GST included</p>
    </div>`;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartBadge();
  renderCart();
}

function renderCheckoutSummary() {
  const s = $('checkout-summary');
  if (!s) return;
  const total = cart.reduce((a,c)=>a+c.price*c.qty,0);
  s.innerHTML = `
    <div class="checkout-items-summary">
      <h3>Your Order (${cart.length} items)</h3>
      ${cart.map(c=>`<div class="checkout-item-row">
        <div class="co-svg">
          <img src="${getPhoto(c.id)}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;"
            onerror="this.src='${FALLBACK_PHOTO}'">
        </div>
        <div><p>${c.name}</p><p style="font-size:.8rem;opacity:.6">${c.colorName} · Qty ${c.qty}</p></div>
        <p>${fmt(c.price*c.qty)}</p>
      </div>`).join('')}
      <div class="checkout-total-row"><strong>Total</strong><strong>${fmt(total + (total>999?0:99))}</strong></div>
    </div>`;
}

// ── Wishlist ─────────────────────────────────────────────────
function toggleWishlist(p, btn) {
  if (!p) return;
  const idx = wishlist.findIndex(w => w.id === p.id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('wished'); btn.querySelector('path').setAttribute('fill','none'); }
    showToast(p.name + ' removed from wishlist');
  } else {
    wishlist.push(p);
    if (btn) { btn.classList.add('wished'); btn.querySelector('path').setAttribute('fill','currentColor'); }
    showToast('❤ ' + p.name + ' added to wishlist!');
  }
  $('wishlist-count').textContent = wishlist.length;
}

function renderWishlist() {
  const g = $('wishlist-grid');
  if (!g) return;
  if (!wishlist.length) {
    g.innerHTML = `<div class="empty-state" style="grid-column:1/-1">
      <div style="font-size:3rem;margin-bottom:1rem">♡</div>
      <p>Your wishlist is empty. Save frames you love.</p>
      <button class="btn-primary" onclick="showPage('listing')">Browse Eyewear</button>
    </div>`;
    return;
  }
  g.innerHTML = wishlist.map(productCard).join('');
}

// ── Toast ────────────────────────────────────────────────────
function showToast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2800);
}

// ── Modals ───────────────────────────────────────────────────
function showModal(id) {
  const m = $(id);
  if (m) { m.classList.add('active'); document.body.style.overflow='hidden'; }
  if (id==='tryon-modal') renderTryonFrames();
}
function closeModal(id) {
  const m = $(id);
  if (m) m.classList.remove('active');
  document.body.style.overflow='';
}

function renderTryonFrames() {
  const list = $('tryon-frames');
  if (!list) return;
  list.innerHTML = PRODUCTS.slice(0,8).map(p=>`
    <div class="tryon-frame-thumb" onclick="showToast('Trying on: ${p.name}')">
      <div class="tryon-svg-mini">
        <img src="${getPhoto(p.id)}" alt="${p.name}"
          style="width:100%;height:100%;object-fit:cover;border-radius:6px;"
          onerror="this.src='${FALLBACK_PHOTO}'">
      </div>
      <p>${p.name}</p>
    </div>`).join('');
}

// ── Spec accordion ───────────────────────────────────────────
function toggleSpec(btn) {
  const content = btn.nextElementSibling;
  const span = btn.querySelector('span');
  const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
  content.style.maxHeight = isOpen ? '0px' : '400px';
  content.style.overflow = 'hidden';
  content.style.transition = 'max-height 0.3s ease';
  if(span) span.textContent = isOpen ? '+' : '−';
}

// ── Auth ─────────────────────────────────────────────────────
function switchAuth(type, btn) {
  document.querySelectorAll('.auth-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  $('login-form').style.display = type==='login' ? 'block' : 'none';
  $('signup-form').style.display = type==='signup' ? 'block' : 'none';
}
function handleLogin() { showToast('✓ Signed in successfully!'); showPage('home'); }
function handleSignup() { showToast('✓ Account created! Welcome to LUMIÈRE.'); showPage('home'); }

// ── Search ───────────────────────────────────────────────────
function handleSearch(val) {
  const box = $('search-results');
  if (!val.trim()) { box.innerHTML=''; box.style.display='none'; return; }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(val.toLowerCase()) ||
    p.brand.toLowerCase().includes(val.toLowerCase()) ||
    p.shape.toLowerCase().includes(val.toLowerCase())
  ).slice(0,5);
  if (!results.length) { box.innerHTML='<p class="no-results">No results found</p>'; box.style.display='block'; return; }
  box.innerHTML = results.map(p=>`
    <div class="search-result-item" onclick="openProduct(${p.id}); $('search-bar').style.display='none'">
      <div class="sr-svg">
        <img src="${getPhoto(p.id)}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">
      </div>
      <div><p class="sr-name">${p.name}</p><p class="sr-brand">${p.brand} · ${fmt(p.price)}</p></div>
    </div>`).join('');
  box.style.display='block';
}

// ── Filters ──────────────────────────────────────────────────
function clearFilters() {
  document.querySelectorAll('.filter-chips input[type=checkbox]').forEach(c=>c.checked=false);
  document.querySelectorAll('.color-swatch').forEach(s=>s.classList.remove('active'));
  $('price-range').value = 15000;
  $('price-max-label').textContent = '₹15,000';
  renderProductsGrid();
}
function applyFilters() { renderProductsGrid(); }
function updatePriceFilter(v) { $('price-max-label').textContent='₹'+parseInt(v).toLocaleString('en-IN'); }
function toggleSwatch(el) { el.classList.toggle('active'); }
function toggleFilterSidebar() {
  const s = $('filters-sidebar');
  s.classList.toggle('open');
}

// ── Sort ─────────────────────────────────────────────────────
function sortProducts(val) {
  const grid = $('products-grid');
  if (!grid) return;
  let sorted = [...PRODUCTS];
  if (val==='Price: Low to High') sorted.sort((a,b)=>a.price-b.price);
  else if (val==='Price: High to Low') sorted.sort((a,b)=>b.price-a.price);
  else if (val==='Best Rated') sorted.sort((a,b)=>b.rating-a.rating);
  else if (val==='Most Popular') sorted.sort((a,b)=>b.reviews-a.reviews);
  grid.innerHTML = sorted.map(productCard).join('');
}

// ── Load more ────────────────────────────────────────────────
function loadMore() { showToast('All products loaded!'); }

// ── Mobile menu ──────────────────────────────────────────────
function closeMobileMenu() {
  $('mobile-menu').classList.remove('open');
  $('menu-toggle').classList.remove('open');
}
$('menu-toggle').addEventListener('click', () => {
  $('mobile-menu').classList.toggle('open');
  $('menu-toggle').classList.toggle('open');
});

// ── Search bar toggle ────────────────────────────────────────
$('search-toggle').addEventListener('click', () => {
  const bar = $('search-bar');
  bar.style.display = bar.style.display==='flex' ? 'none' : 'flex';
  if (bar.style.display==='flex') $('search-input').focus();
});

// ── Theme toggle ─────────────────────────────────────────────
$('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  $('sun-icon').style.display = isDark ? 'block' : 'none';
  $('moon-icon').style.display = isDark ? 'none' : 'block';
});

// ── Color picker on detail page ──────────────────────────────
function selectColor(el, name) {
  document.querySelectorAll('.color-opt').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  $('selected-color').textContent = name;
}

// ── Quiz ─────────────────────────────────────────────────────
let quizAnswers = {};
function quizSelect(btn, step) {
  const stepEl = btn.closest('.quiz-step');
  stepEl.querySelectorAll('.quiz-opt').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  quizAnswers[step] = btn.textContent;
  const prog = $('quiz-prog');
  const label = $('quiz-prog-label');
  setTimeout(()=>{
    if (step < 3) {
      stepEl.classList.remove('active');
      document.querySelector(`[data-step="${step+1}"]`).classList.add('active');
      if(prog) prog.style.width = (step/3*100)+'%';
      if(label) label.textContent = `Step ${step+1} of 3`;
    } else {
      stepEl.classList.remove('active');
      if(prog) prog.style.width = '100%';
      if(label) label.textContent = 'Complete!';
      const r = $('quiz-result');
      if(r) r.style.display='block';
    }
  }, 300);
}

// ── Order tracking ───────────────────────────────────────────
function trackOrder() {
  const input = $('order-id-input');
  if (input && input.value.trim()) {
    $('track-result').style.display = 'block';
    showToast('Order found!');
  } else showToast('Please enter a valid Order ID');
}

// ── Prescription upload ──────────────────────────────────────
function handleRxUpload(input) {
  if (input.files.length) showToast('✓ Prescription uploaded! We\'ll pre-fill your lens details.');
}

// ── Newsletter ───────────────────────────────────────────────
function handleNewsletter() {
  const input = document.querySelector('.newsletter-input');
  if (input && input.value.includes('@')) {
    showToast('✓ Subscribed! Welcome to the LUMIÈRE family.');
    input.value = '';
  } else showToast('Please enter a valid email address.');
}

// ── Support chat ─────────────────────────────────────────────
const BOT_REPLIES = {
  'Track my order': 'You can track your order at any time using the Order Tracking page. Order ID starts with LUM-.',
  'Return/Exchange': 'We offer 7-day hassle-free returns. Visit our Returns page or call 1800-LUMIERE.',
  'Prescription help': 'Our opticians are available Mon–Sat, 10am–7pm. You can also upload your Rx while ordering.',
  'Talk to an agent': 'Connecting you to a live agent… avg. wait time is 2 minutes. Meanwhile, can I help?'
};
function supportOption(opt) {
  const chat = $('support-chat');
  chat.innerHTML += `<div class="chat-bubble user">${opt}</div>`;
  setTimeout(()=>{
    chat.innerHTML += `<div class="chat-bubble bot">${BOT_REPLIES[opt]||'Let me check that for you!'}</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 600);
  chat.scrollTop = chat.scrollHeight;
}
function sendSupportMsg() {
  const inp = $('support-input');
  if (!inp || !inp.value.trim()) return;
  const chat = $('support-chat');
  chat.innerHTML += `<div class="chat-bubble user">${inp.value}</div>`;
  inp.value = '';
  setTimeout(()=>{
    chat.innerHTML += `<div class="chat-bubble bot">Thanks for your message! Our team will get back to you shortly. Is there anything else I can help with?</div>`;
    chat.scrollTop = chat.scrollHeight;
  }, 800);
  chat.scrollTop = chat.scrollHeight;
}

// ── Navbar scroll behaviour ──────────────────────────────────
window.addEventListener('scroll', ()=>{
  const nav = $('navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Place order ──────────────────────────────────────────────
function placeOrder() {
  closeModal('checkout-modal');
  cart = [];
  updateCartBadge();
  showToast('🎉 Order placed! You\'ll receive a confirmation email shortly.');
  setTimeout(()=>showPage('order-tracking'), 800);
}

// ── Loader + initial render ──────────────────────────────────
window.addEventListener('load', ()=>{
  const loader = $('page-loader');
  if (loader) setTimeout(()=>{ loader.style.opacity='0'; setTimeout(()=>loader.style.display='none',400); }, 900);
  renderBestsellers();
  renderTrending();
  const tf = $('tryon-frames');
  if (tf) renderTryonFrames();

  const hash = window.location.hash.replace('#','');
  if (hash && document.getElementById('page-' + hash)) {
    showPage(hash, false);
  }
});