// --- BASE DE DATOS DE JUGADORES MOCK ---
const DATABASE = [
    { id: 1, name: "E. Inafuma", pos: "DEL", rating: 120, reqRep: 5000, priceBas: 80000000, pricePrem: 10000 },
    { id: 2, name: "M. Beben", pos: "MED", rating: 115, reqRep: 4000, priceBas: 70000000, pricePrem: 8000 },
    { id: 3, name: "S. Aris", pos: "DEL", rating: 105, reqRep: 2000, priceBas: 45000000, pricePrem: 5000 },
    { id: 4, name: "L. Yashin", pos: "POR", rating: 98, reqRep: 1500, priceBas: 30000000, pricePrem: 3500 },
    { id: 5, name: "P. Maldini", pos: "DEF", rating: 95, reqRep: 1200, priceBas: 25000000, pricePrem: 3000 },
    { id: 6, name: "K. Vision", pos: "MED", rating: 90, reqRep: 800, priceBas: 15000000, pricePrem: 2000 },
    { id: 7, name: "J. Cazador", pos: "DEL", rating: 85, reqRep: 500, priceBas: 8000000, pricePrem: 1000 },
    { id: 8, name: "F. Roca", pos: "DEF", rating: 82, reqRep: 300, priceBas: 5000000, pricePrem: 800 },
    { id: 9, name: "A. Motor", pos: "MED", rating: 78, reqRep: 100, priceBas: 3000000, pricePrem: 500 },
    { id: 10, name: "R. Veloz", pos: "DEL", rating: 75, reqRep: 50, priceBas: 2000000, pricePrem: 300 },
    { id: 11, name: "C. Tronco", pos: "DEF", rating: 68, reqRep: 0, priceBas: 800000, pricePrem: 100 },
    { id: 12, name: "D. Manco", pos: "POR", rating: 62, reqRep: 0, priceBas: 400000, pricePrem: 50 },
    { id: 13, name: "L. Novato", pos: "MED", rating: 58, reqRep: 0, priceBas: 200000, pricePrem: 20 },
    { id: 14, name: "P. Cojo", pos: "DEL", rating: 55, reqRep: 0, priceBas: 100000, pricePrem: 10 }
];

const IAP_PACKAGES = [
    { eur: 5, coins: 100 }, { eur: 10, coins: 250 }, { eur: 20, coins: 600 },
    { eur: 50, coins: 1600 }, { eur: 100, coins: 3500 }, { eur: 200, coins: 8000 }
];

// --- ESTADO GLOBAL (Guardado en LocalStorage) ---
let state = {
    auth: null,
    team: null,
    economy: { coins: 0, premium: 0 },
    stats: { rep: 0 },
    roster: []
};
const SAVE_KEY = 'inafuma_data_v1';

// --- INICIALIZACIÓN ---
window.onload = () => {
    checkCookies();
    loadState();
    routeView();
    renderStore();
};

function saveState() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    updateUI();
}

function loadState() {
    const saved = localStorage.getItem(SAVE_KEY);
    if(saved) state = JSON.parse(saved);
}

// --- UTILIDADES MODALES ---
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function toggleDropdown() { document.getElementById('profile-dropdown').classList.toggle('hidden'); }

// --- RUTAS Y VISTAS ---
function routeView() {
    document.querySelectorAll('.view').forEach(el => el.classList.add('hidden'));
    
    if(!state.auth) {
        document.getElementById('view-landing').classList.remove('hidden');
        document.getElementById('main-header').classList.add('hidden');
    } else if(!state.team) {
        document.getElementById('view-setup').classList.remove('hidden');
        document.getElementById('main-header').classList.add('hidden');
    } else {
        document.getElementById('view-dashboard').classList.remove('hidden');
        document.getElementById('main-header').classList.remove('hidden');
        updateUI();
    }
}

// --- COOKIES ---
function checkCookies() {
    if(!localStorage.getItem('inafuma_cookies_ok')) openModal('cookie-modal');
}
function acceptCookies() {
    localStorage.setItem('inafuma_cookies_ok', 'true');
    closeModal('cookie-modal');
}

// --- AUTH Y REGISTRO ---
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('reg-user').value;
    state.auth = { username: user };
    state.economy = { coins: 10000000, premium: 0 }; // 10 Millones
    state.stats = { rep: 0 };
    state.roster = [];
    saveState();
    routeView();
});

document.getElementById('setup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.team = {
        name: document.getElementById('set-team').value,
        manager: document.getElementById('set-manager').value,
        color: document.querySelector('input[name="color"]:checked').value
    };
    saveState();
    routeView();
});

function logout() {
    state.auth = null;
    state.team = null;
    saveState();
    routeView();
    document.getElementById('profile-dropdown').classList.add('hidden');
}

// --- ACTUALIZACIÓN DE UI ---
function updateUI() {
    if(!state.auth || !state.team) return;

    // Header Format
    const formatNum = (num) => num >= 1000000 ? (num/1000000).toFixed(1)+'M' : num >= 1000 ? (num/1000).toFixed(1)+'K' : num;
    
    document.getElementById('ui-rep').textContent = state.stats.rep;
    document.getElementById('ui-coins').textContent = formatNum(state.economy.coins);
    document.getElementById('ui-prem').textContent = state.economy.premium;
    
    const shield = document.getElementById('ui-shield');
    shield.style.backgroundColor = state.team.color;
    shield.textContent = state.team.name.charAt(0).toUpperCase();

    document.getElementById('drop-teamname').textContent = state.team.name;
    document.getElementById('drop-username').textContent = "@" + state.auth.username;

    // Dashboard
    document.getElementById('dash-manager').textContent = state.team.manager;
    document.getElementById('dash-team').textContent = state.team.name;
    document.getElementById('roster-count').textContent = state.roster.length;
    
    // OVR Calculation
    let ovr = 30; // Base amateur
    if(state.roster.length > 0) {
        const sum = state.roster.reduce((a,b) => a + b.rating, 0);
        ovr = Math.round(sum / state.roster.length);
    }
    document.getElementById('dash-ovr').textContent = ovr;

    // Render Roster list
    const rList = document.getElementById('roster-list');
    rList.innerHTML = '';
    const sorted = [...state.roster].sort((a,b) => b.rating - a.rating);
    sorted.forEach(p => {
        let bg = p.pos==='DEL'?'bg-del':p.pos==='MED'?'bg-med':p.pos==='DEF'?'bg-def':'bg-por';
        rList.innerHTML += `
        <div class="player-row">
            <div><span class="pos-tag ${bg}">${p.pos}</span> <strong>${p.name}</strong></div>
            <span class="text-gold gaming-font">${p.rating}</span>
        </div>`;
    });
}

// --- TIENDA PREMIUM ---
function renderStore() {
    const container = document.getElementById('store-packages');
    container.innerHTML = '';
    IAP_PACKAGES.forEach(pkg => {
        container.innerHTML += `
        <div class="market-item text-center" onclick="buyIAP(${pkg.coins}, ${pkg.eur})">
            <div class="gaming-font text-gold text-2xl mb-10">${pkg.coins} 🪙</div>
            <div class="bg-blue rounded font-bold py-2 text-white">${pkg.eur}.00 €</div>
        </div>`;
    });
}
function buyIAP(coins, eur) {
    if(confirm(`¿Autorizas el cargo simulado de ${eur}€ para comprar ${coins} Monedas Premium?`)){
        state.economy.premium += coins;
        saveState();
        closeModal('store-modal');
        alert("¡Compra exitosa!");
    }
}

// --- MERCADO ---
let marketMode = 'buy'; // 'buy' o 'sell'
let currentFilter = 'ALL';

function openMarket() {
    openModal('market-panel');
    switchMarketTab('buy');
}
function closeMarket() {
    document.getElementById('market-panel').classList.add('hidden');
}

function switchMarketTab(mode) {
    marketMode = mode;
    document.getElementById('tab-buy').classList.toggle('active', mode === 'buy');
    document.getElementById('tab-sell').classList.toggle('active', mode === 'sell');
    renderMarket(currentFilter);
}

function renderMarket(filterPos) {
    currentFilter = filterPos;
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    event.target.classList?.add('active'); // Update clicked button visually

    const grid = document.getElementById('market-grid');
    grid.innerHTML = '';

    let items = [];
    if(marketMode === 'buy') {
        // Filtrar los que ya tengo
        items = DATABASE.filter(p => !state.roster.find(r => r.id === p.id));
    } else {
        items = state.roster;
    }

    if(filterPos !== 'ALL') items = items.filter(p => p.pos === filterPos);

    if(items.length === 0) {
        grid.innerHTML = '<p class="text-gray text-center" style="grid-column: span 2;">No hay jugadores aquí.</p>';
        return;
    }

    items.forEach(p => {
        let bg = p.pos==='DEL'?'bg-del':p.pos==='MED'?'bg-med':p.pos==='DEF'?'bg-def':'bg-por';
        
        if(marketMode === 'buy') {
            const formatM = (p.priceBas/1000000).toFixed(1)+'M';
            const canRep = state.stats.rep >= p.reqRep;
            grid.innerHTML += `
            <div class="market-item">
                <div class="flex-between mb-10">
                    <div><span class="pos-tag ${bg}">${p.pos}</span> <strong>${p.name}</strong></div>
                    <div class="gaming-font text-gold text-xl">${p.rating}</div>
                </div>
                <div class="text-small mb-10 ${canRep?'text-green':'text-red'}">Req. Reputación: ${p.reqRep} 🏆</div>
                <div class="flex gap-10">
                    <button class="buy-btn-basic" onclick="buyPlayer(${p.id}, 'basic')">💰 ${formatM}</button>
                    <button class="buy-btn-prem" onclick="buyPlayer(${p.id}, 'prem')">🪙 ${p.pricePrem}</button>
                </div>
            </div>`;
        } else {
            const sellPrice = Math.floor(p.priceBas / 2);
            const formatM = (sellPrice/1000000).toFixed(1)+'M';
            grid.innerHTML += `
            <div class="market-item" style="border-color: var(--neon-red);">
                <div class="flex-between mb-10">
                    <div><span class="pos-tag ${bg}">${p.pos}</span> <strong>${p.name}</strong></div>
                    <div class="gaming-font text-gold text-xl">${p.rating}</div>
                </div>
                <button class="buy-btn-basic" style="color: var(--neon-red); border-color: var(--neon-red);" onclick="sellPlayer(${p.id}, ${sellPrice})">Vender por 💰 ${formatM}</button>
            </div>`;
        }
    });
}

function buyPlayer(id, currency) {
    const p = DATABASE.find(x => x.id === id);
    if(!p) return;

    if(state.stats.rep < p.reqRep) return alert(`Reputación insuficiente. Requiere: ${p.reqRep}`);

    if(currency === 'basic') {
        if(state.economy.coins < p.priceBas) return alert("Monedas insuficientes.");
        state.economy.coins -= p.priceBas;
    } else {
        if(state.economy.premium < p.pricePrem) return openModal('store-modal');
        state.economy.premium -= p.pricePrem;
    }

    state.roster.push(p);
    saveState();
    renderMarket(currentFilter);
}

function sellPlayer(id, price) {
    if(confirm("¿Vender jugador por " + (price/1000000).toFixed(1) + "M?")) {
        state.roster = state.roster.filter(p => p.id !== id);
        state.economy.coins += price;
        saveState();
        renderMarket(currentFilter);
    }
}

// --- MOTOR DE PARTIDO ---
function startMatch() {
    if(state.roster.length === 0) return alert("¡Ficha al menos 1 jugador en el mercado antes de jugar!");

    openModal('match-modal');
    document.getElementById('match-btn-close').classList.add('hidden');
    document.getElementById('match-title').textContent = "SIMULANDO...";
    
    const myOvr = document.getElementById('dash-ovr').textContent;
    // Rival dinámico
    const oppOvr = Math.max(20, parseInt(myOvr) + (Math.floor(Math.random() * 31) - 15));
    
    document.getElementById('match-myteam').textContent = state.team.name;
    document.getElementById('match-myovr').textContent = `OVR: ${myOvr}`;
    document.getElementById('match-oppovr').textContent = `OVR: ${oppOvr}`;
    
    let mScore = 0; let oScore = 0; let time = 0;
    
    const probBase = 0.10;
    const diff = parseInt(myOvr) - oppOvr;
    const myProb = probBase + (diff * 0.005);
    const opProb = probBase - (diff * 0.005);

    const logBox = document.getElementById('match-log');
    document.getElementById('match-score').textContent = `0 - 0`;

    const interval = setInterval(() => {
        time += 15;
        if(time > 90) {
            clearInterval(interval);
            finishMatch(mScore, oScore);
            return;
        }

        let msg = `Min ${time}': Posesión disputada en el medio campo...`;
        const rand = Math.random();
        
        if(rand < myProb) {
            mScore++;
            msg = `Min ${time}': ¡GOL de ${state.team.name}! ⚽`;
        } else if(rand > 1 - opProb) {
            oScore++;
            msg = `Min ${time}': ¡Gol del rival! ⚽`;
        }

        logBox.textContent = msg;
        document.getElementById('match-score').textContent = `${mScore} - ${oScore}`;

    }, 400);
}

function finishMatch(myScore, oppScore) {
    const title = document.getElementById('match-title');
    const log = document.getElementById('match-log');
    const rew = document.getElementById('match-rewards');
    
    let coins = 0; let rep = 0;

    if(myScore > oppScore) {
        title.textContent = "¡VICTORIA!";
        title.className = "gaming-font text-3xl mb-20 text-green glow-green";
        log.textContent = "El árbitro pita el final. ¡Excelente partido!";
        coins = 150000; rep = 25;
    } else if (myScore === oppScore) {
        title.textContent = "EMPATE";
        title.className = "gaming-font text-3xl mb-20 text-gold glow-gold";
        log.textContent = "Reparto de puntos. Faltó acierto arriba.";
        coins = 40000; rep = 5;
    } else {
        title.textContent = "DERROTA";
        title.className = "gaming-font text-3xl mb-20 text-red";
        log.textContent = "Toca volver a entrenar duro...";
        coins = 5000; rep = 0;
    }

    state.economy.coins += coins;
    state.stats.rep += rep;
    saveState();

    rew.innerHTML = `<span class="text-green">+${coins.toLocaleString()} 💰</span> | <span class="text-gold">+${rep} 🏆</span>`;
    document.getElementById('match-btn-close').classList.remove('hidden');
}