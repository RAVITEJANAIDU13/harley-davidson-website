/**
 * HARLEY-DAVIDSON — IRONCLAD
 * Flagship Vanilla JavaScript Engine
 * Configurator, Modals, Dynamic Collections, Auth Demo, Dealer Search, Toast Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMotorcycleCollection();
  initProductModal();
  initConfigurator();
  initDealerSearch();
  initContactForm();
  initAuthSystem();
  initStoriesAndTechModals();
  initBackToTop();
});

/* ==========================================================================
   1. MOTORCYCLE DATASET (Verified Specifications)
   ========================================================================== */
const MOTORCYCLE_DATA = {
  sportster: {
    id: 'sportster',
    name: 'Sportster S',
    category: 'SPORT',
    year: '2026',
    tagline: 'High-Performance Sport Cruiser Born From Milwaukee Steel',
    price: 15499,
    engine: 'Revolution Max 1250T',
    displacement: '1,252 cc (76.4 cu in)',
    horsepower: '121 HP @ 7,500 RPM',
    torque: '94 ft-lb (127 Nm) @ 6,000 RPM',
    weight: '502 lbs (228 kg) In Running Order',
    transmission: '6-Speed with Slipper Clutch',
    fuelCapacity: '3.1 gal (11.8 L)',
    seatHeight: '29.6 in (752 mm)',
    colors: [
      { name: 'Vivid Black', code: 'black', hex: '#0d0e11', img: 'assets/images/config-sportster-black.jpg' },
      { name: 'Metallic Gray', code: 'gray', hex: '#55585f', img: 'assets/images/config-sportster-gray.jpg' },
      { name: 'Deep Orange', code: 'orange', hex: '#F15A24', img: 'assets/images/config-sportster-orange.jpg' },
      { name: 'Dark Red', code: 'red', hex: '#8b1111', img: 'assets/images/config-sportster-red.jpg' }
    ],
    features: [
      'Inverted 43mm fully adjustable front cartridge forks',
      'Radial mount Brembo monobloc 4-piston front caliper',
      'Selectable Ride Modes (Sport, Road, Rain, Custom)',
      'Cornering Enhanced ABS & Cornering Traction Control (C-TCS)',
      '4-inch round TFT digital color gauge with Bluetooth HUD navigation',
      'High-mount 2-into-1-into-2 exhaust with bronze heat shield'
    ],
    description: 'The Sportster S is the first of a new chapter in the Sportster legacy. Powered by the Revolution Max 1250T liquid-cooled V-Twin, it delivers tremendous torque and an immediate powerband tuned for aggressive street performance.'
  },
  fatboy: {
    id: 'fatboy',
    name: 'Fat Boy 114',
    category: 'CRUISER',
    year: '2026',
    tagline: 'The Original Muscle Cruiser Icon with Solid Cast Wheels',
    price: 20199,
    engine: 'Milwaukee-Eight 114 V-Twin',
    displacement: '1,868 cc (114 cu in)',
    horsepower: '94 HP @ 4,750 RPM',
    torque: '119 ft-lb (161 Nm) @ 3,000 RPM',
    weight: '699 lbs (317 kg) In Running Order',
    transmission: '6-Speed Cruise Drive',
    fuelCapacity: '5.0 gal (18.9 L)',
    seatHeight: '26.6 in (675 mm)',
    colors: [
      { name: 'Vivid Black', code: 'black', hex: '#0d0e11', img: 'assets/images/fat-boy-114.jpg' },
      { name: 'Metallic Gray', code: 'gray', hex: '#55585f', img: 'assets/images/fat-boy-114.jpg' },
      { name: 'Deep Orange', code: 'orange', hex: '#F15A24', img: 'assets/images/fat-boy-114.jpg' },
      { name: 'Dark Red', code: 'red', hex: '#8b1111', img: 'assets/images/fat-boy-114.jpg' }
    ],
    features: [
      'Solid Cast Aluminum Lakester Wheels with 240mm rear tire',
      'Signature LED headlamp nacelle in satin chrome finish',
      'Rigid-mount engine design with counter-balancers for smooth cruising',
      'Floorboards and forward foot controls for relaxed touring stance',
      'High-performance front suspension with linear damping characteristics',
      'Easily adjustable rear mono-shock suspension'
    ],
    description: 'The original fat custom icon that changed motorcycling forever. Massive steamroller stance, brilliant finishes, and the unrelenting low-end rumble of the Milwaukee-Eight 114 V-Twin.'
  },
  nightster: {
    id: 'nightster',
    name: 'Nightster Special',
    category: 'SPORT',
    year: '2026',
    tagline: 'Aggressive Light Roadster with Revolution Max 975T Power',
    price: 13499,
    engine: 'Revolution Max 975T',
    displacement: '975 cc (59.5 cu in)',
    horsepower: '90 HP @ 7,500 RPM',
    torque: '70 ft-lb (95 Nm) @ 5,750 RPM',
    weight: '481 lbs (218 kg) In Running Order',
    transmission: '6-Speed with Assist & Slip Clutch',
    fuelCapacity: '3.1 gal (11.7 L) Under-Seat Cell',
    seatHeight: '27.8 in (706 mm)',
    colors: [
      { name: 'Vivid Black', code: 'black', hex: '#0d0e11', img: 'assets/images/nightster.jpg' },
      { name: 'Metallic Gray', code: 'gray', hex: '#55585f', img: 'assets/images/nightster.jpg' },
      { name: 'Deep Orange', code: 'orange', hex: '#F15A24', img: 'assets/images/nightster.jpg' },
      { name: 'Dark Red', code: 'red', hex: '#8b1111', img: 'assets/images/nightster.jpg' }
    ],
    features: [
      'Liquid-cooled 60-degree V-Twin with Variable Valve Timing (VVT)',
      'Chassis engineered with engine as structural frame element',
      'Under-seat fuel cell optimizes low center of gravity',
      'Passenger pillion and passenger foot pegs included standard',
      '4-inch analog-digital hybrid display with ride modes',
      'Dual rear exposed emulsion shock absorbers with preload adjustment'
    ],
    description: 'The Nightster Special merges classic Sportster silhouette with high-revving liquid-cooled tech. Nimble handling, under-seat fuel cell for low center of gravity, and unapologetic attitude.'
  },
  streetglide: {
    id: 'streetglide',
    name: 'Street Glide Special',
    category: 'TOURING',
    year: '2026',
    tagline: 'The Apex American Touring Machine with Batwing Fairing',
    price: 27999,
    engine: 'Milwaukee-Eight 114 V-Twin',
    displacement: '1,868 cc (114 cu in)',
    horsepower: '93 HP @ 5,250 RPM',
    torque: '118 ft-lb (160 Nm) @ 3,250 RPM',
    weight: '829 lbs (376 kg) In Running Order',
    transmission: '6-Speed Cruise Drive',
    fuelCapacity: '6.0 gal (22.7 L)',
    seatHeight: '26.1 in (663 mm)',
    colors: [
      { name: 'Vivid Black', code: 'black', hex: '#0d0e11', img: 'assets/images/street-glide.jpg' },
      { name: 'Metallic Gray', code: 'gray', hex: '#55585f', img: 'assets/images/street-glide.jpg' },
      { name: 'Deep Orange', code: 'orange', hex: '#F15A24', img: 'assets/images/street-glide.jpg' },
      { name: 'Dark Red', code: 'red', hex: '#8b1111', img: 'assets/images/street-glide.jpg' }
    ],
    features: [
      'Iconic Batwing Fairing with splitstream vent for reduced head buffeting',
      'Boom! Box GTS infotainment touchscreen with color navigation',
      'Stretched color-matched hard saddlebags with one-touch latch',
      'Reflex Defensive Rider Systems (RDRS) with electronic brake control',
      'Prodigy custom wheels with dual floating front brake rotors',
      'Daymaker LED headlamp with piercing bright white projection'
    ],
    description: 'The definitive benchmark for long-distance highway travel. The batwing fairing, spacious hard bags, and smooth Milwaukee-Eight 114 turn continental highways into an effortless pursuit.'
  }
};

/* ==========================================================================
   2. HEADER & NAVIGATION
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-drawer .nav-link');

  // Compact header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = hamburgerBtn.classList.toggle('open');
      mobileDrawer.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('open');
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   3. MOTORCYCLE COLLECTION & FILTERING
   ========================================================================== */
function initMotorcycleCollection() {
  const filterBtns = document.querySelectorAll('.collection-filters .filter-btn');
  const cards = document.querySelectorAll('.motorcycles-grid .bike-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCat.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Attach click listener to "DISCOVER SPECS" buttons
  const discoverBtns = document.querySelectorAll('.btn-discover-specs');
  discoverBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modelId = e.currentTarget.getAttribute('data-model');
      openProductModal(modelId);
    });
  });

  // Attach click to "CONFIGURE THIS" buttons on cards
  const cardConfigBtns = document.querySelectorAll('.btn-card-config');
  cardConfigBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modelId = e.currentTarget.getAttribute('data-model');
      selectConfiguratorModel(modelId);
      document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
      showToast(`Loaded ${MOTORCYCLE_DATA[modelId]?.name} in Configurator`, 'cyan');
    });
  });
}

/* ==========================================================================
   4. PRODUCT DETAILS MODAL
   ========================================================================== */
function initProductModal() {
  const modalOverlay = document.getElementById('product-modal');
  const closeBtn = modalOverlay?.querySelector('.modal-close-btn');

  if (!modalOverlay) return;

  closeBtn?.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

function openProductModal(modelId) {
  const bike = MOTORCYCLE_DATA[modelId];
  if (!bike) return;

  const modalOverlay = document.getElementById('product-modal');
  const contentArea = document.getElementById('product-modal-content');

  contentArea.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2.5rem; align-items: start;">
      <div>
        <div style="background: #0B0C0E; border: 1px solid #2A2D31; padding: 1.5rem; text-align: center; margin-bottom: 1.5rem;">
          <img src="${bike.colors[0].img}" alt="${bike.name}" style="width: 100%; height: 260px; object-fit: contain;">
        </div>
        <div class="tech-label" style="margin-bottom: 0.5rem; color: #38DDE8;">AVAILABLE FACTORY FINISHES</div>
        <div style="display: flex; gap: 0.75rem;">
          ${bike.colors.map(c => `
            <div title="${c.name}" style="width: 32px; height: 32px; background: ${c.hex}; border: 1px solid #2A2D31;"></div>
          `).join('')}
        </div>
      </div>
      <div>
        <div class="tech-label tech-orange" style="margin-bottom: 0.25rem;">${bike.category} // ${bike.year}</div>
        <h2 style="font-family: var(--font-display); font-size: 2.5rem; text-transform: uppercase; margin-bottom: 0.5rem;">${bike.name}</h2>
        <p style="font-size: 0.95rem; color: #92969C; margin-bottom: 1.5rem; line-height: 1.6;">${bike.description}</p>
        
        <div class="tech-label" style="color: #38DDE8; margin-bottom: 0.75rem;">VERIFIED SPECIFICATIONS</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem 1.5rem; border-top: 1px solid #2A2D31; border-bottom: 1px solid #2A2D31; padding: 1rem 0; margin-bottom: 1.5rem;">
          <div><span class="spec-cell-label">Engine:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.engine}</strong></div>
          <div><span class="spec-cell-label">Displacement:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.displacement}</strong></div>
          <div><span class="spec-cell-label">Horsepower:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.horsepower}</strong></div>
          <div><span class="spec-cell-label">Torque:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.torque}</strong></div>
          <div><span class="spec-cell-label">Running Weight:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.weight}</strong></div>
          <div><span class="spec-cell-label">Transmission:</span> <strong style="font-family: var(--font-tech); font-size: 0.82rem; display: block;">${bike.transmission}</strong></div>
        </div>

        <div class="tech-label" style="color: #F15A24; margin-bottom: 0.5rem;">KEY HIGHLIGHTS</div>
        <ul style="margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.4rem;">
          ${bike.features.map(f => `<li style="font-size: 0.85rem; color: #92969C; display: flex; align-items: center; gap: 0.5rem;"><span style="color: #F15A24;">▪</span> ${f}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 1rem; align-items: center;">
          <button class="btn btn-primary" id="modal-launch-config-btn" data-model="${bike.id}">
            BUILD YOUR ${bike.name}
          </button>
          <div style="font-family: var(--font-tech); font-size: 1.1rem; color: #FFFFFF; font-weight: 700;">
            $${bike.price.toLocaleString()} <span style="font-size: 0.65rem; color: #5A5E66;">DEMO MSRP</span>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('modal-launch-config-btn')?.addEventListener('click', (e) => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    selectConfiguratorModel(bike.id);
    document.getElementById('configurator').scrollIntoView({ behavior: 'smooth' });
    showToast(`Loaded ${bike.name} into Configurator`, 'orange');
  });
}

/* ==========================================================================
   5. INTERACTIVE MOTORCYCLE CONFIGURATOR ("BUILD YOUR MACHINE.")
   ========================================================================== */
const configuratorState = {
  currentModel: 'sportster',
  currentColor: 'orange',
  seat: 0,
  handlebar: 0,
  wheel: 0,
  accessories: {
    exhaust: false,
    deflector: false,
    bags: false,
    lights: false
  }
};

const ACCESSORY_PRICES = {
  exhaust: 899,
  deflector: 220,
  bags: 750,
  lights: 340
};

function initConfigurator() {
  loadConfigFromStorage();
  renderConfiguratorUI();

  // Model Selector Pills
  const modelPills = document.querySelectorAll('.model-pill');
  modelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const modelId = pill.getAttribute('data-model');
      selectConfiguratorModel(modelId);
    });
  });

  // Color Swatches
  const colorBtns = document.querySelectorAll('.color-swatch-btn');
  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const colorCode = btn.getAttribute('data-color');
      selectConfiguratorColor(colorCode);
    });
  });

  // Component Selectors
  document.getElementById('cfg-seat')?.addEventListener('change', (e) => {
    configuratorState.seat = parseInt(e.target.value) || 0;
    updateConfiguratorSummary();
  });

  document.getElementById('cfg-handlebar')?.addEventListener('change', (e) => {
    configuratorState.handlebar = parseInt(e.target.value) || 0;
    updateConfiguratorSummary();
  });

  document.getElementById('cfg-wheel')?.addEventListener('change', (e) => {
    configuratorState.wheel = parseInt(e.target.value) || 0;
    updateConfiguratorSummary();
  });

  // Accessories
  document.querySelectorAll('.accessory-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const accKey = e.target.getAttribute('data-accessory');
      configuratorState.accessories[accKey] = e.target.checked;
      updateConfiguratorSummary();
    });
  });

  // Reset Button
  document.getElementById('cfg-reset-btn')?.addEventListener('click', resetConfigurator);

  // Save to Garage Button
  document.getElementById('cfg-save-btn')?.addEventListener('click', saveConfigToGarage);

  // Share Build Button
  document.getElementById('cfg-share-btn')?.addEventListener('click', shareBuildSpec);
}

function selectConfiguratorModel(modelId) {
  if (!MOTORCYCLE_DATA[modelId]) return;
  configuratorState.currentModel = modelId;

  // Update pills
  document.querySelectorAll('.model-pill').forEach(p => {
    p.classList.toggle('active', p.getAttribute('data-model') === modelId);
  });

  renderConfiguratorUI();
  updateConfiguratorSummary();
}

function selectConfiguratorColor(colorCode) {
  configuratorState.currentColor = colorCode;

  document.querySelectorAll('.color-swatch-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-color') === colorCode);
  });

  const bike = MOTORCYCLE_DATA[configuratorState.currentModel];
  const colorObj = bike.colors.find(c => c.code === colorCode) || bike.colors[0];

  const colorNameLabel = document.querySelector('.active-color-name');
  if (colorNameLabel) {
    colorNameLabel.textContent = `Selected: ${colorObj.name}`;
  }

  // Update image preview
  const previewImg = document.getElementById('cfg-preview-img');
  if (previewImg && colorObj.img) {
    previewImg.style.opacity = '0.3';
    setTimeout(() => {
      previewImg.src = colorObj.img;
      previewImg.style.opacity = '1';
    }, 150);
  }

  saveConfigToStorage();
}

function renderConfiguratorUI() {
  const bike = MOTORCYCLE_DATA[configuratorState.currentModel];
  if (!bike) return;

  const modelTitle = document.querySelector('.config-model-title');
  const catBadge = document.querySelector('.config-category-badge');
  const hpStat = document.getElementById('cfg-stat-hp');
  const tqStat = document.getElementById('cfg-stat-tq');
  const engStat = document.getElementById('cfg-stat-engine');

  if (modelTitle) modelTitle.textContent = bike.name;
  if (catBadge) catBadge.textContent = `${bike.category} // REV 2026`;
  if (hpStat) hpStat.textContent = bike.horsepower.split(' ')[0] + ' HP';
  if (tqStat) tqStat.textContent = bike.torque.split(' ')[0] + ' FT-LB';
  if (engStat) engStat.textContent = bike.engine;

  selectConfiguratorColor(configuratorState.currentColor);
}

function updateConfiguratorSummary() {
  const bike = MOTORCYCLE_DATA[configuratorState.currentModel];
  if (!bike) return;

  let total = bike.price;
  total += configuratorState.seat;
  total += configuratorState.handlebar;
  total += configuratorState.wheel;

  for (const [key, enabled] of Object.entries(configuratorState.accessories)) {
    if (enabled && ACCESSORY_PRICES[key]) {
      total += ACCESSORY_PRICES[key];
    }
  }

  const priceEl = document.querySelector('.config-total-price');
  if (priceEl) {
    priceEl.textContent = `$${total.toLocaleString()}`;
  }

  saveConfigToStorage();
}

function resetConfigurator() {
  configuratorState.currentColor = 'orange';
  configuratorState.seat = 0;
  configuratorState.handlebar = 0;
  configuratorState.wheel = 0;
  configuratorState.accessories = { exhaust: false, deflector: false, bags: false, lights: false };

  const seatSelect = document.getElementById('cfg-seat');
  const barSelect = document.getElementById('cfg-handlebar');
  const wheelSelect = document.getElementById('cfg-wheel');
  if (seatSelect) seatSelect.value = '0';
  if (barSelect) barSelect.value = '0';
  if (wheelSelect) wheelSelect.value = '0';

  document.querySelectorAll('.accessory-checkbox').forEach(chk => chk.checked = false);

  renderConfiguratorUI();
  updateConfiguratorSummary();
  showToast('Configuration reset to factory stock', 'cyan');
}

function saveConfigToStorage() {
  try {
    localStorage.setItem('hd_ironclad_build', JSON.stringify(configuratorState));
  } catch (e) {
    console.warn('Storage unavailable', e);
  }
}

function loadConfigFromStorage() {
  try {
    const saved = localStorage.getItem('hd_ironclad_build');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(configuratorState, parsed);
    }
  } catch (e) {
    console.warn('Failed to parse saved build', e);
  }
}

function saveConfigToGarage() {
  saveConfigToStorage();
  const bike = MOTORCYCLE_DATA[configuratorState.currentModel];
  showToast(`[SPEC RECORDED] ${bike.name} saved to local garage`, 'orange');
}

function shareBuildSpec() {
  const bike = MOTORCYCLE_DATA[configuratorState.currentModel];
  const text = `HARLEY-DAVIDSON IRONCLAD SPEC:\nModel: ${bike.name}\nColor: ${configuratorState.currentColor.toUpperCase()}\nEngine: ${bike.engine}\nStatus: Configured for the open road.`;
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Build summary copied to clipboard', 'cyan');
    });
  } else {
    showToast('Build ready to export', 'cyan');
  }
}

/* ==========================================================================
   6. DEALER SEARCH & LOCATOR
   ========================================================================== */
const SAMPLE_DEALERS = [
  { name: 'Milwaukee Heritage Harley-Davidson', city: 'Milwaukee', state: 'WI', zip: '53208', address: '3700 W Juneau Ave', phone: '(414) 343-4000', distance: '0.4 mi' },
  { name: 'Route 66 Ironclad Flagship', city: 'Chicago', state: 'IL', zip: '60607', address: '1240 W Randolph St', phone: '(312) 555-0199', distance: '85 mi' },
  { name: 'Pacific Coast Speed & Iron', city: 'Los Angeles', state: 'CA', zip: '90028', address: '6800 Sunset Blvd', phone: '(323) 555-0144', distance: '1,740 mi' },
  { name: 'Lone Star Republic HD', city: 'Austin', state: 'TX', zip: '78701', address: '500 E 6th St', phone: '(512) 555-0178', distance: '1,120 mi' },
  { name: 'Gotham Black Diamond HD', city: 'New York', state: 'NY', zip: '10011', address: '450 W 14th St, Meatpacking', phone: '(212) 555-0122', distance: '790 mi' }
];

function initDealerSearch() {
  const searchForm = document.getElementById('dealer-search-form');
  const cityInput = document.getElementById('dealer-city-input');
  const zipInput = document.getElementById('dealer-zip-input');
  const resultsContainer = document.getElementById('dealer-results');

  // Render initial dealers
  renderDealers(SAMPLE_DEALERS);

  searchForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityQuery = cityInput?.value.trim().toLowerCase() || '';
    const zipQuery = zipInput?.value.trim() || '';

    if (!cityQuery && !zipQuery) {
      showToast('Enter a city or ZIP code to search', 'cyan');
      renderDealers(SAMPLE_DEALERS);
      return;
    }

    const filtered = SAMPLE_DEALERS.filter(d => {
      const matchCity = cityQuery && d.city.toLowerCase().includes(cityQuery);
      const matchZip = zipQuery && d.zip.includes(zipQuery);
      return matchCity || matchZip;
    });

    if (filtered.length > 0) {
      renderDealers(filtered);
      showToast(`Found ${filtered.length} authorized dealer locations`, 'orange');
    } else {
      resultsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; background: #111316; border: 1px dashed #2A2D31; padding: 2rem; text-align: center;">
          <p class="tech-label" style="color: #F15A24; margin-bottom: 0.5rem;">NO DEALER MATCHED QUERY</p>
          <p style="font-size: 0.9rem; color: #92969C;">Showing nearest regional flagship showrooms below.</p>
        </div>
      `;
      setTimeout(() => renderDealers(SAMPLE_DEALERS), 1800);
    }
  });
}

function renderDealers(dealers) {
  const container = document.getElementById('dealer-results');
  if (!container) return;

  container.innerHTML = dealers.map(d => `
    <div class="dealer-card hud-corner">
      <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
        <span class="tech-label tech-cyan">AUTHORIZED DEALER</span>
        <span class="tech-label" style="color: #F15A24;">${d.distance}</span>
      </div>
      <h3 class="dealer-name">${d.name}</h3>
      <p class="dealer-addr">${d.address}<br>${d.city}, ${d.state} ${d.zip}</p>
      <div class="dealer-phone">${d.phone}</div>
      <div style="margin-top: 1.25rem; display: flex; gap: 0.5rem;">
        <button class="btn btn-outline btn-sm" onclick="showToast('Demo: Test ride requested at ${d.name.replace(/'/g, "")}', 'orange')">
          REQUEST TEST RIDE
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   7. CONTACT FORM ENGINE
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value;
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required contact fields', 'orange');
      return;
    }

    // Email format verification
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please provide a valid email address', 'cyan');
      return;
    }

    form.reset();
    showToast(`Transmission received, ${name}. Dealer representative notified.`, 'orange');
  });
}

/* ==========================================================================
   8. AUTHENTICATION SYSTEM (Frontend Demo)
   ========================================================================== */
function initAuthSystem() {
  const authModal = document.getElementById('auth-modal');
  const loginBtns = document.querySelectorAll('.btn-auth-trigger');
  const modalClose = authModal?.querySelector('.modal-close-btn');

  // Trigger Auth Modal
  loginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      authModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose?.addEventListener('click', () => {
    authModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Switch between Login and Register tabs
  const tabBtns = document.querySelectorAll('.auth-tab-btn');
  const formWraps = document.querySelectorAll('.auth-form-wrap');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      formWraps.forEach(f => f.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(`auth-${targetTab}-wrap`)?.classList.add('active');
    });
  });

  // Password visibility toggles
  document.querySelectorAll('.password-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      if (input && input.type === 'password') {
        input.type = 'text';
        btn.textContent = 'HIDE';
      } else if (input) {
        input.type = 'password';
        btn.textContent = 'SHOW';
      }
    });
  });

  // Login Form Submission
  const loginForm = document.getElementById('login-form');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;

    if (!email || !password) {
      showToast('Enter your rider credentials', 'cyan');
      return;
    }

    const riderName = email.split('@')[0];
    localStorage.setItem('hd_session_user', riderName);
    updateUserSessionUI(riderName);

    authModal.classList.remove('active');
    document.body.style.overflow = '';
    showToast(`Welcome to Ironclad Division, Rider ${riderName.toUpperCase()}`, 'orange');
  });

  // Registration Form Submission
  const regForm = document.getElementById('register-form');
  regForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name')?.value.trim();
    const email = document.getElementById('reg-email')?.value.trim();
    const p1 = document.getElementById('reg-pass1')?.value;
    const p2 = document.getElementById('reg-pass2')?.value;

    if (!name || !email || !p1 || !p2) {
      showToast('All registration fields are required', 'cyan');
      return;
    }

    if (p1 !== p2) {
      showToast('Passwords do not match', 'orange');
      return;
    }

    localStorage.setItem('hd_session_user', name);
    updateUserSessionUI(name);

    authModal.classList.remove('active');
    document.body.style.overflow = '';
    showToast(`Membership created for ${name.toUpperCase()}`, 'orange');
  });

  // Check existing session
  const existingUser = localStorage.getItem('hd_session_user');
  if (existingUser) {
    updateUserSessionUI(existingUser);
  }
}

function updateUserSessionUI(username) {
  const userBadge = document.querySelector('.user-badge');
  const authTriggerBtns = document.querySelectorAll('.btn-auth-trigger');

  if (userBadge) {
    userBadge.style.display = 'inline-flex';
    userBadge.innerHTML = `<span>●</span> RIDER: ${username.toUpperCase()}`;
  }

  authTriggerBtns.forEach(b => {
    b.textContent = 'LOGOUT';
    b.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem('hd_session_user');
      location.reload();
    };
  });
}

/* ==========================================================================
   9. STORIES & TECH BLUEPRINTS MODALS
   ========================================================================== */
function initStoriesAndTechModals() {
  // Story reader modal trigger
  document.querySelectorAll('.btn-read-story').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const storyId = e.currentTarget.getAttribute('data-story');
      openStoryModal(storyId);
    });
  });

  // Tech inspect blueprint trigger
  document.querySelectorAll('.btn-inspect-tech').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const techKey = e.currentTarget.getAttribute('data-tech');
      openTechModal(techKey);
    });
  });
}

const STORIES_CONTENT = {
  1: {
    title: 'THE ART OF THE LONG RIDE',
    category: 'EXPEDITION // PACIFIC COAST HIGHWAY',
    body: `
      <p style="margin-bottom: 1.25rem;">Two thousand miles of asphalt unfurl between the temperate rainforests of Washington and the sun-bleached coastal cliffs of Big Sur. To ride it on a Harley-Davidson is to strip away the distractions of modern existence until all that remains is the pulse of the Milwaukee-Eight V-Twin, the salt spray in the air, and the ribbon of road ahead.</p>
      <p style="margin-bottom: 1.25rem;">There is an unspoken camaraderie that emerges around dusk at roadside waypoints. Helmets come off, exhausts tick softly as the metal cools, and strangers become family over shared routes and weather reports. The road doesn't ask who you are in your day job; it only asks whether you're ready for the morning pass.</p>
      <p>This is what Harley-Davidson was forged for in 1903. Not mere transport, but the ritual preservation of American freedom.</p>
    `
  },
  2: {
    title: 'BUILT FOR THE NIGHT',
    category: 'URBAN CHRONICLES // MIDNIGHT DETROIT',
    body: `
      <p style="margin-bottom: 1.25rem;">When the metropolis sleeps, the streets belong to those who see beauty in raw industrial architecture. The Sportster S cuts through concrete canyons, its low-slung LED Daymaker slicing through midnight fog while the Revolution Max exhaust echoes between brick warehouses.</p>
      <p style="margin-bottom: 1.25rem;">Here, acceleration isn't just a number—it is a physical release. Ninety-four foot-pounds of torque hit with instant clarity the moment the throttle is twisted. The bike corners with razor-like poise, its inverted front forks and Brembo monobloc calipers reacting with immediate precision.</p>
      <p>The city isn't an obstacle course; it is an amphitheater for the modern iron rebel.</p>
    `
  },
  3: {
    title: 'FIND YOUR OWN ROAD',
    category: 'THE RED ROCK PASSES // UTAH & ARIZONA',
    body: `
      <p style="margin-bottom: 1.25rem;">Out past the reach of cellular reception, sandstone monoliths rise like ancient fortresses against an amber horizon. Route 163 bends through Monument Valley, where temperature swings from midday heat to crisp high-desert nightfall in a matter of minutes.</p>
      <p style="margin-bottom: 1.25rem;">Touring on the Street Glide Special turns cross-state journeys into an art form. The Batwing fairing slices clean wind pockets, while the suspension smooths out frost heaves and cattle grates with uncompromising stability.</p>
      <p>Freedom is not a destination. It is the feeling of taking the long way home, finding your own road, and making every ride your own.</p>
    `
  }
};

function openStoryModal(id) {
  const data = STORIES_CONTENT[id];
  if (!data) return;

  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');

  content.innerHTML = `
    <div style="max-width: 680px; margin: 0 auto;">
      <div class="tech-label tech-orange" style="margin-bottom: 0.5rem;">${data.category}</div>
      <h2 style="font-family: var(--font-display); font-size: 2.5rem; text-transform: uppercase; margin-bottom: 1.5rem; line-height: 1.1;">${data.title}</h2>
      <div style="font-size: 1.05rem; line-height: 1.8; color: #92969C; border-top: 1px solid #2A2D31; padding-top: 1.5rem;">
        ${data.body}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openTechModal(techKey) {
  const TECH_DATA = {
    engineering: {
      title: 'REVOLUTION MAX 1250T ARCHITECTURE',
      subtitle: 'LIQUID-COOLED DOHC V-TWIN WITH DUAL INDEPENDENT VVT',
      text: 'Engineered as a structural chassis member, the Revolution Max 1250T minimizes overall motorcycle weight while maximizing torsional rigidity. Dual overhead camshafts and variable valve timing on both intake and exhaust valves broaden the powerband throughout the entire RPM spectrum, delivering 121 horsepower and instant torque off idle.'
    },
    design: {
      title: 'INDUSTRIAL STRESSED-MEMBER CHASSIS',
      subtitle: 'PRECISION CAST STEEL & INVERTED 43MM FRONT FORKS',
      text: 'By eliminating the traditional hoop-style frame and mounting the front and rear subframes directly to the engine crankcases, center of mass is radically dropped. Paired with Brembo radial monobloc four-piston calipers and a 320mm floating rotor, braking authority matches high-speed agility.'
    },
    rider: {
      title: 'CORNERING ENHANCED RIDER SAFETY (C-RDRS)',
      subtitle: '6-AXIS IMU INTEGRATION & MULTI-LAYER TFT HUD',
      text: 'A six-axis inertial measurement unit (IMU) continuously measures lean angle, pitch, and roll rate. Cornering Enhanced ABS (C-ABS), Cornering Traction Control (C-TCS), and Drag-Torque Slip Control System (DSCS) dynamically adapt intervention thresholds according to lean angle, ensuring confidence on varied road surfaces.'
    }
  };

  const item = TECH_DATA[techKey] || TECH_DATA.engineering;
  const modal = document.getElementById('product-modal');
  const content = document.getElementById('product-modal-content');

  content.innerHTML = `
    <div style="max-width: 720px; margin: 0 auto;">
      <div class="tech-label tech-cyan" style="margin-bottom: 0.5rem;">ENGINEERING BLUEPRINT // SYSTEM ACTIVE</div>
      <h2 style="font-family: var(--font-display); font-size: 2.2rem; text-transform: uppercase; margin-bottom: 0.5rem;">${item.title}</h2>
      <div class="tech-label" style="color: #F15A24; margin-bottom: 1.5rem;">${item.subtitle}</div>
      <p style="font-size: 1rem; line-height: 1.8; color: #92969C; border-top: 1px solid #2A2D31; padding-top: 1.5rem; margin-bottom: 2rem;">
        ${item.text}
      </p>
      <button class="btn btn-outline" onclick="document.getElementById('product-modal').classList.remove('active'); document.body.style.overflow='';">
        CLOSE BLUEPRINT
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   10. TOAST NOTIFICATION SYSTEM & UTILS
   ========================================================================== */
function showToast(message, type = 'orange') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'cyan' ? 'cyan' : ''}`;
  toast.innerHTML = `
    <span style="color: ${type === 'cyan' ? '#38DDE8' : '#F15A24'}; font-family: var(--font-tech); font-weight: 700;">[HD]</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);

  // Remove toast after 3.5s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
}

function initBackToTop() {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }
  });

  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
