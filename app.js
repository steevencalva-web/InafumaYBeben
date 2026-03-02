// --- BASE DE DATOS REAL CON AVATARES ---
function getAvatar(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true`;
}

const PLAYERS_DB = [
    { id: 101, name: "L. Messi", pos: "DEL", pac: 80, sho: 93, pas: 94, def: 30, phy: 65, rep: 5000, priceBasic: 150000000, pricePrem: 12000, img: getAvatar("L Messi") },
    { id: 102, name: "C. Ronaldo", pos: "DEL", pac: 82, sho: 95, pas: 80, def: 35, phy: 85, rep: 5000, priceBasic: 140000000, pricePrem: 11000, img: getAvatar("C Ronaldo") },
    { id: 103, name: "K. Mbappé", pos: "DEL", pac: 99, sho: 92, pas: 85, def: 35, phy: 78, rep: 4500, priceBasic: 135000000, pricePrem: 10000, img: getAvatar("K Mbappe") },
    { id: 104, name: "E. Haaland", pos: "DEL", pac: 89, sho: 96, pas: 70, def: 45, phy: 93, rep: 4000, priceBasic: 125000000, pricePrem: 9500, img: getAvatar("E Haaland") },
    { id: 105, name: "Vini Jr.", pos: "DEL", pac: 95, sho: 86, pas: 85, def: 30, phy: 70, rep: 3500, priceBasic: 95000000, pricePrem: 7500, img: getAvatar("Vini Jr") },
    { id: 106, name: "A. Griezmann", pos: "DEL", pac: 80, sho: 85, pas: 88, def: 50, phy: 70, rep: 2000, priceBasic: 55000000, pricePrem: 4500, img: getAvatar("A Griezmann") },
    { id: 107, name: "L. Yamal", pos: "DEL", pac: 85, sho: 78, pas: 82, def: 40, phy: 60, rep: 1200, priceBasic: 35000000, pricePrem: 2800, img: getAvatar("L Yamal") },
    { id: 108, name: "A. Morata", pos: "DEL", pac: 78, sho: 82, pas: 75, def: 45, phy: 78, rep: 500, priceBasic: 15000000, pricePrem: 1200, img: getAvatar("A Morata") },
    { id: 109, name: "Joselu", pos: "DEL", pac: 65, sho: 82, pas: 68, def: 40, phy: 82, rep: 0, priceBasic: 5000000, pricePrem: 400, img: getAvatar("Joselu") },

    { id: 201, name: "K. De Bruyne", pos: "MED", pac: 72, sho: 85, pas: 98, def: 65, phy: 75, rep: 4800, priceBasic: 110000000, pricePrem: 9000, img: getAvatar("K DeBruyne") },
    { id: 202, name: "J. Bellingham", pos: "MED", pac: 82, sho: 85, pas: 88, def: 78, phy: 85, rep: 4500, priceBasic: 105000000, pricePrem: 8500, img: getAvatar("J Bellingham") },
    { id: 203, name: "Pedri", pos: "MED", pac: 78, sho: 70, pas: 92, def: 68, phy: 65, rep: 3000, priceBasic: 75000000, pricePrem: 6000, img: getAvatar("Pedri") },
    { id: 204, name: "F. Valverde", pos: "MED", pac: 88, sho: 78, pas: 85, def: 80, phy: 82, rep: 2500, priceBasic: 65000000, pricePrem: 5000, img: getAvatar("F Valverde") },
    { id: 205, name: "T. Kroos", pos: "MED", pac: 55, sho: 80, pas: 95, def: 70, phy: 70, rep: 1800, priceBasic: 40000000, pricePrem: 3000, img: getAvatar("T Kroos") },
    { id: 206, name: "E. Camavinga", pos: "MED", pac: 85, sho: 72, pas: 82, def: 82, phy: 85, rep: 1000, priceBasic: 25000000, pricePrem: 2000, img: getAvatar("E Camavinga") },
    { id: 207, name: "Koke", pos: "MED", pac: 65, sho: 72, pas: 85, def: 75, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 1000, img: getAvatar("Koke") },
    { id: 208, name: "M. Zubimendi", pos: "MED", pac: 70, sho: 68, pas: 82, def: 78, phy: 72, rep: 100, priceBasic: 8000000, pricePrem: 600, img: getAvatar("M Zubimendi") },
    { id: 209, name: "S. Darder", pos: "MED", pac: 68, sho: 75, pas: 80, def: 70, phy: 70, rep: 0, priceBasic: 4000000, pricePrem: 300, img: getAvatar("S Darder") },

    { id: 301, name: "V. van Dijk", pos: "DEF", pac: 78, sho: 60, pas: 75, def: 95, phy: 90, rep: 4500, priceBasic: 95000000, pricePrem: 7800, img: getAvatar("V vanDijk") },
    { id: 302, name: "A. Rüdiger", pos: "DEF", pac: 85, sho: 40, pas: 70, def: 90, phy: 92, rep: 3500, priceBasic: 75000000, pricePrem: 6000, img: getAvatar("A Rudiger") },
    { id: 303, name: "R. Dias", pos: "DEF", pac: 68, sho: 45, pas: 72, def: 92, phy: 88, rep: 3000, priceBasic: 65000000, pricePrem: 5200, img: getAvatar("R Dias") },
    { id: 304, name: "R. Araújo", pos: "DEF", pac: 82, sho: 45, pas: 65, def: 88, phy: 85, rep: 2000, priceBasic: 45000000, pricePrem: 3500, img: getAvatar("R Araujo") },
    { id: 305, name: "A. Davies", pos: "DEF", pac: 95, sho: 68, pas: 80, def: 80, phy: 78, rep: 1500, priceBasic: 35000000, pricePrem: 2800, img: getAvatar("A Davies") },
    { id: 306, name: "D. Carvajal", pos: "DEF", pac: 80, sho: 50, pas: 80, def: 82, phy: 80, rep: 800, priceBasic: 20000000, pricePrem: 1500, img: getAvatar("D Carvajal") },
    { id: 307, name: "P. Cubarsí", pos: "DEF", pac: 75, sho: 40, pas: 78, def: 80, phy: 75, rep: 300, priceBasic: 10000000, pricePrem: 800, img: getAvatar("P Cubarsi") },
    { id: 308, name: "H. Maguire", pos: "DEF", pac: 48, sho: 50, pas: 65, def: 78, phy: 85, rep: 0, priceBasic: 2000000, pricePrem: 150, img: getAvatar("H Maguire") },

    { id: 401, name: "T. Courtois", pos: "POR", pac: 40, sho: 20, pas: 65, def: 95, phy: 88, rep: 4000, priceBasic: 85000000, pricePrem: 6500, img: getAvatar("T Courtois") },
    { id: 402, name: "Alisson", pos: "POR", pac: 45, sho: 25, pas: 80, def: 92, phy: 85, rep: 3000, priceBasic: 65000000, pricePrem: 5000, img: getAvatar("Alisson") },
    { id: 403, name: "M. ter Stegen", pos: "POR", pac: 42, sho: 20, pas: 85, def: 90, phy: 80, rep: 2000, priceBasic: 45000000, pricePrem: 3500, img: getAvatar("M terStegen") },
    { id: 404, name: "J. Oblak", pos: "POR", pac: 40, sho: 15, pas: 60, def: 91, phy: 82, rep: 1000, priceBasic: 25000000, pricePrem: 2000, img: getAvatar("J Oblak") },
    { id: 405, name: "U. Simón", pos: "POR", pac: 45, sho: 20, pas: 75, def: 85, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 900, img: getAvatar("U Simon") },
    { id: 406, name: "Mamardashvili", pos: "POR", pac: 42, sho: 20, pas: 70, def: 84, phy: 80, rep: 0, priceBasic: 4000000, pricePrem: 300, img: getAvatar("G Mamarda") }
];

function calcPlayerOVR(p) {
    if(p.pos === 'DEL') return Math.round((p.pac*0.20) + (p.sho*0.45) + (p.phy*0.15) + (p.pas*0.20));
    if(p.pos === 'MED') return Math.round((p.pac*0.10) + (p.pas*0.45) + (p.def*0.25) + (p.phy*0.20));
    if(p.pos === 'DEF') return Math.round((p.pac*0.15) + (p.def*0.50) + (p.phy*0.25) + (p.pas*0.10));
    if(p.pos === 'POR') return Math.round((p.def*0.70) + (p.phy*0.20) + (p.pas*0.10));
    return 50;
}

PLAYERS_DB.forEach(p => { p.ovr = calcPlayerOVR(p); p.morale = 100; });

// --- ESTADO GLOBAL ---
let state = {
    auth: null,
    team: null,
    economy: { coins: 0, premium: 0 },
    stats: { rep: 0, matches: 0 },
    roster: [],    // Todos los jugadores comprados
    lineup: [],    // IDs de los 11 titulares
    inbox: [],
    formation: '4-4-2'
};
const SAVE_KEY = 'inafuma_fm_v2';

window.onload = () => {
    if(!localStorage.getItem('inafuma_fm_cookies')) {
        document.getElementById('modal-cookies').classList.remove('hidden');
    }
    loadState();
    routeView();
    document.getElementById('date-display').textContent = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
};

function saveState() { localStorage.setItem(SAVE_KEY, JSON.stringify(state)); updateUI(); }
function loadState() { const saved = localStorage.getItem(SAVE_KEY); if(saved) state = JSON.parse(saved); }

function acceptCookies() {
    localStorage.setItem('inafuma_fm_cookies', 'true');
    document.getElementById('modal-cookies').classList.add('hidden');
}

function routeView() {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    
    if(!state.auth) {
        document.getElementById('view-landing').classList.remove('hidden');
    } else if(!state.team) {
        document.getElementById('view-setup').classList.remove('hidden');
    } else {
        document.getElementById('app-layout').classList.remove('hidden');
        updateUI();
        switchTab('inbox'); 
    }
}

// --- AUTH ---
document.getElementById('auth-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.auth = { user: document.getElementById('reg-user').value };
    saveState(); routeView();
});

document.getElementById('setup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const color = document.querySelector('input[name="color"]:checked').value;
    state.team = { name: document.getElementById('set-team').value, manager: document.getElementById('set-manager').value, color: color };
    state.economy = { coins: 10000000, premium: 0 };
    state.stats = { rep: 0, matches: 0 };
    
    addEmail('Directiva', 'Bienvenido al Club', `Míster ${state.team.manager}, confiamos en usted. Tiene 10M€ de presupuesto inicial. Para poder competir en la liga necesita fichar al menos 5 jugadores. Los jugadores seleccionados en Tácticas serán los que jueguen.`);
    
    saveState(); routeView();
});

function logout() {
    if(confirm("¿Guardar y salir al menú principal?")) {
        state.auth = null; state.team = null; saveState(); routeView();
    }
}

// --- BUZÓN DE NOTICIAS ---
function addEmail(sender, subject, body) {
    const date = new Date().toLocaleDateString('es-ES', {day: 'numeric', month:'short'});
    state.inbox.unshift({ id: Date.now(), sender, subject, body, date, read: false });
}

function renderInbox() {
    const list = document.getElementById('inbox-list');
    list.innerHTML = '';
    if(state.inbox.length === 0) return;
    
    state.inbox.forEach(mail => {
        const dot = mail.read ? '' : '<div class="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>';
        list.innerHTML += `
        <div class="bg-slate-700/50 p-4 rounded border ${mail.read ? 'border-slate-600 opacity-75' : 'border-blue-500/50'} cursor-pointer hover:bg-slate-700 transition flex gap-3" onclick="readEmail(${mail.id})">
            ${dot}
            <div class="flex-1">
                <div class="flex justify-between items-baseline mb-1">
                    <span class="text-sm font-bold text-slate-200">${mail.sender}</span>
                    <span class="text-xs text-slate-400">${mail.date}</span>
                </div>
                <h4 class="text-md font-bold ${mail.read ? 'text-slate-300' : 'text-white'}">${mail.subject}</h4>
                <p class="text-sm text-slate-400 mt-2 line-clamp-2">${mail.body}</p>
            </div>
        </div>`;
    });
}

function readEmail(id) {
    const mail = state.inbox.find(m => m.id === id);
    if(mail) { mail.read = true; saveState(); }
}

// --- NAVEGACIÓN Y TABS ---
function switchTab(tabId) {
    document.querySelectorAll('.fm-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    const targetTab = document.getElementById('tab-' + tabId);
    if(targetTab) targetTab.classList.add('active');
    
    const navBtn = document.getElementById('nav-' + tabId);
    if(navBtn) navBtn.classList.add('active');
    
    const titles = { 'inbox': 'Buzón de Entrada', 'squad': 'Plantilla del Primer Equipo', 'tactics': 'Pizarra Táctica', 'market': 'Centro de Ojeo (Mercado)' };
    document.getElementById('page-title').textContent = titles[tabId];

    if(tabId === 'market') filterMarket('ALL');
    if(tabId === 'tactics') renderTactics();
}

// --- ACTUALIZAR UI ---
function updateUI() {
    if(!state.team) return;
    
    const formatM = (num) => num >= 1000000 ? (num/1000000).toFixed(1)+'M' : num.toLocaleString();
    
    document.getElementById('ui-rep').textContent = state.stats.rep;
    document.getElementById('ui-coins').textContent = formatM(state.economy.coins);
    document.getElementById('ui-prem').textContent = state.economy.premium;
    
    const shield = document.getElementById('ui-shield');
    shield.style.backgroundColor = state.team.color;
    shield.textContent = state.team.name.substring(0,3).toUpperCase();
    
    document.getElementById('ui-teamname').textContent = state.team.name;
    document.getElementById('ui-manager').textContent = state.team.manager;

    renderInbox();
    renderSquad();
    
    if(document.getElementById('tab-market').classList.contains('active')) filterMarket(currentMarketFilter);
    if(document.getElementById('tab-tactics').classList.contains('active')) renderTactics();
}

// --- CÁLCULO TITULARES (OVR Real) ---
function getStartingXI() {
    // Si lineup no existe o está vacío, intentamos auto-llenarlo
    if(!state.lineup) state.lineup = [];
    return state.roster.filter(p => state.lineup.includes(p.id));
}

function getTeamOvr() {
    const xi = getStartingXI();
    if(xi.length === 0) return 0;
    
    // El OVR del equipo se ve afectado por la moral de los jugadores titulares
    const sum = xi.reduce((acc, p) => {
        const moralMod = 1 + ((p.morale - 50) / 200); // 100 moral = +25% stat, 0 = -25%
        return acc + (p.ovr * moralMod);
    }, 0);
    return Math.round(sum / xi.length);
}

function getColorByMorale(morale) {
    if(morale >= 80) return '#10b981'; // Green
    if(morale >= 40) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
}

// --- PLANTILLA (FOTOS Y MORAL) ---
function renderSquad() {
    const tbody = document.getElementById('squad-tbody');
    tbody.innerHTML = '';
    document.getElementById('squad-count').textContent = state.roster.length;
    
    const sorted = [...state.roster].sort((a,b) => b.ovr - a.ovr);
    
    sorted.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        tbody.innerHTML += `
        <tr>
            <td><img src="${p.img}" class="player-avatar"></td>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-bold text-white">${p.name}</td>
            <td class="font-gaming text-yellow-400 font-bold">${p.ovr}</td>
            <td style="width: 80px;">
                <div class="text-xs text-right mb-1">${p.morale}%</div>
                <div class="morale-bar-bg"><div class="morale-bar-fill" style="width:${p.morale}%; background-color:${getColorByMorale(p.morale)};"></div></div>
            </td>
            <td class="text-slate-300 pl-4">${p.pac}</td>
            <td class="text-slate-300">${p.sho}</td>
            <td class="text-slate-300">${p.pas}</td>
            <td class="text-slate-300">${p.def}</td>
            <td class="text-slate-300">${p.phy}</td>
        </tr>`;
    });

    document.getElementById('squad-ovr').textContent = getTeamOvr();
}

// --- SISTEMA DE TÁCTICAS Y CAMBIOS ---
let selectedPlayerForSwap = null; // Guardará el ID del jugador clickeado

function changeFormation() {
    state.formation = document.getElementById('tactics-formation').value;
    saveState();
    renderTactics();
}

function selectForSwap(id) {
    if(!selectedPlayerForSwap) {
        selectedPlayerForSwap = id;
        renderTactics(); // Re-render to show selection highlight
    } else {
        if (selectedPlayerForSwap !== id) {
            // Swap logic
            const lineupIndex = state.lineup.indexOf(selectedPlayerForSwap);
            const targetIndex = state.lineup.indexOf(id);

            if (lineupIndex !== -1 && targetIndex === -1) {
                // Changing Starter with Bench
                state.lineup[lineupIndex] = id;
            } else if (lineupIndex === -1 && targetIndex !== -1) {
                // Changing Bench with Starter
                state.lineup[targetIndex] = selectedPlayerForSwap;
            } else if (lineupIndex !== -1 && targetIndex !== -1) {
                // Swap two starters
                state.lineup[lineupIndex] = id;
                state.lineup[targetIndex] = selectedPlayerForSwap;
            }
            saveState();
        }
        selectedPlayerForSwap = null;
        renderTactics();
    }
}

function renderTactics() {
    document.getElementById('tactics-formation').value = state.formation;
    const pitch = document.getElementById('pitch-players');
    const benchContainer = document.getElementById('bench-list');
    pitch.innerHTML = '';
    benchContainer.innerHTML = '';

    // Coordenadas base
    const layouts = {
        '4-4-2': [ {x:50,y:85,c:'POR'}, {x:20,y:65,c:'DEF'},{x:40,y:70,c:'DEF'},{x:60,y:70,c:'DEF'},{x:80,y:65,c:'DEF'}, {x:20,y:35,c:'MED'},{x:40,y:40,c:'MED'},{x:60,y:40,c:'MED'},{x:80,y:35,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ],
        '4-3-3': [ {x:50,y:85,c:'POR'}, {x:20,y:70,c:'DEF'},{x:40,y:75,c:'DEF'},{x:60,y:75,c:'DEF'},{x:80,y:70,c:'DEF'}, {x:30,y:45,c:'MED'},{x:50,y:40,c:'MED'},{x:70,y:45,c:'MED'}, {x:20,y:20,c:'DEL'},{x:50,y:15,c:'DEL'},{x:80,y:20,c:'DEL'} ],
        '5-3-2': [ {x:50,y:85,c:'POR'}, {x:10,y:65,c:'DEF'},{x:30,y:75,c:'DEF'},{x:50,y:78,c:'DEF'},{x:70,y:75,c:'DEF'},{x:90,y:65,c:'DEF'}, {x:30,y:40,c:'MED'},{x:50,y:45,c:'MED'},{x:70,y:40,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ]
    };

    // Asegurar que state.lineup tiene tamaño 11 (Rellenar con nulos si faltan)
    while(state.lineup.length < 11) state.lineup.push(null);

    layouts[state.formation].forEach((pos, index) => {
        let color = pos.c==='POR'?'#e11d48':pos.c==='DEF'?'#d97706':pos.c==='MED'?'#16a34a':'#2563eb';
        const playerId = state.lineup[index];
        const player = state.roster.find(p => p.id === playerId);

        if(player) {
            const isSel = selectedPlayerForSwap === player.id ? 'player-selected' : '';
            pitch.innerHTML += `
            <div class="pitch-player ${isSel}" style="left:${pos.x}%; top:${pos.y}%;" onclick="selectForSwap(${player.id})">
                <div class="pitch-shirt" style="background-color:${color};">${player.ovr}</div>
                <div class="pitch-name">${player.name.split(' ')[0]}</div>
            </div>`;
        } else {
            pitch.innerHTML += `
            <div class="pitch-player opacity-50" style="left:${pos.x}%; top:${pos.y}%;">
                <div class="pitch-shirt" style="border-color:${color}; border-style:dashed; background:transparent;">+</div>
            </div>`;
        }
    });

    // Render Banquillo
    const benchPlayers = state.roster.filter(p => !state.lineup.includes(p.id));
    if(benchPlayers.length === 0) {
        benchContainer.innerHTML = '<p class="text-xs text-slate-500 text-center py-2">Banquillo vacío.</p>';
    } else {
        benchPlayers.forEach(p => {
            let pClass = `pos-${p.pos.toLowerCase()}`;
            const isSel = selectedPlayerForSwap === p.id ? 'selected' : '';
            benchContainer.innerHTML += `
            <div class="bench-player flex items-center justify-between bg-slate-900 p-2 rounded border border-slate-700 ${isSel}" onclick="selectForSwap(${p.id})">
                <div class="flex items-center gap-2">
                    <span class="pos-badge ${pClass}">${p.pos}</span>
                    <span class="text-white text-sm font-bold truncate w-24">${p.name}</span>
                </div>
                <span class="text-yellow-400 font-gaming font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-600 text-xs">${p.ovr}</span>
            </div>`;
        });
    }
}

// --- MERCADO ---
let currentMarketFilter = 'ALL';

function filterMarket(pos) {
    currentMarketFilter = pos;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`filter-${pos}`);
    if(btn) btn.classList.add('active');

    const tbody = document.getElementById('market-tbody');
    tbody.innerHTML = '';

    let available = PLAYERS_DB.filter(db_p => !state.roster.find(rp => rp.id === db_p.id));
    if(pos !== 'ALL') available = available.filter(p => p.pos === pos);

    available.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        const canRep = state.stats.rep >= p.rep;
        const formatM = (p.priceBasic/1000000).toFixed(1)+'M';
        
        tbody.innerHTML += `
        <tr>
            <td><img src="${p.img}" class="player-avatar"></td>
            <td class="font-bold text-white">
                <div class="flex flex-col">
                    <span>${p.name}</span>
                    <span class="pos-badge ${pClass} mt-1" style="font-size:9px; width:35px;">${p.pos}</span>
                </div>
            </td>
            <td class="font-gaming text-yellow-400 font-bold text-lg">${p.ovr}</td>
            <td class="${canRep ? 'text-slate-400' : 'text-red-500 font-bold'}">${p.rep} 🏆</td>
            <td><button class="btn-buy basic w-full" onclick="buyPlayer(${p.id}, 'basic')">€${formatM}</button></td>
            <td><button class="btn-buy premium w-full" onclick="buyPlayer(${p.id}, 'prem')">🪙 ${p.pricePrem}</button></td>
        </tr>`;
    });
}

function buyPlayer(id, curr) {
    const p = PLAYERS_DB.find(x => x.id === id);
    if(!p) return;

    if(state.stats.rep < p.rep) return alert(`La directiva bloquea el fichaje: El club no tiene la reputación mundial necesaria (${p.rep} 🏆).`);
    
    if(curr === 'basic') {
        if(state.economy.coins < p.priceBasic) return alert("Presupuesto de traspasos insuficiente.");
        state.economy.coins -= p.priceBasic;
    } else {
        if(state.economy.premium < p.pricePrem) return alert("Monedas Premium insuficientes. Compra más en la barra superior (+).");
        state.economy.premium -= p.pricePrem;
    }

    state.roster.push(p);
    
    // Auto-añadir al once titular si hay hueco
    const emptySlot = state.lineup.findIndex(slot => slot === null);
    if(emptySlot !== -1) {
        state.lineup[emptySlot] = p.id;
    }

    addEmail('Director Deportivo', `Fichaje Confirmado: ${p.name}`, `Hemos cerrado el traspaso de ${p.name} (OVR: ${p.ovr}). El jugador ya está disponible en la pestaña Plantilla.`);
    saveState();
}

function buyIAP() {
    const val = prompt("Herramienta de MVP:\n\nIntroduce cuántas monedas premium quieres añadir:", "10000");
    if(val && !isNaN(val)) {
        state.economy.premium += parseInt(val);
        saveState();
    }
}

// --- MOTOR DE SIMULACIÓN DE PARTIDO ---
function startMatch() {
    const xi = getStartingXI();
    if(xi.length < 5) {
        alert("¡Míster! Ve a Tácticas y pon al menos 5 jugadores en el once titular para poder saltar al campo.");
        return;
    }

    document.getElementById('app-layout').classList.add('hidden');
    document.getElementById('view-match').classList.remove('hidden');
    document.getElementById('match-post').classList.add('hidden');
    
    document.getElementById('sim-home-name').textContent = state.team.name;
    document.getElementById('sim-home-shield').style.backgroundColor = state.team.color;
    document.getElementById('sim-home-shield').textContent = state.team.name.substring(0,3).toUpperCase();
    
    const myOvr = getTeamOvr(); 
    document.getElementById('sim-home-ovr').textContent = myOvr;
    
    const botOvr = Math.max(40, myOvr + (Math.floor(Math.random() * 21) - 10));
    document.getElementById('sim-away-ovr').textContent = botOvr;
    
    document.getElementById('sim-home-score').textContent = "0";
    document.getElementById('sim-away-score').textContent = "0";
    
    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML = "<div><strong>0':</strong> Los equipos están sobre el césped. ¡Arranca el partido!</div>";

    const diff = myOvr - botOvr;
    const myProb = 0.08 + (diff * 0.003); 
    const oppProb = 0.08 - (diff * 0.003);

    let mG = 0, oG = 0, time = 0;
    
    const commentary = [
        "Posesión larga en el medio campo.", "Disparo potente que despeja el portero a córner.", 
        "Falta táctica dura. Tarjeta amarilla.", "El delantero no llega al centro por milímetros.", 
        "Corte espectacular del defensa central.", "Juego muy trabado en la medular.",
        "El portero sale de puños y despeja el peligro.", "Falta peligrosa al borde del área que se va a las nubes."
    ];

    const matchInterval = setInterval(() => {
        time += 10;
        if(time > 90) {
            clearInterval(matchInterval);
            finishMatch(mG, oG); 
            return;
        }

        let eventText = commentary[Math.floor(Math.random() * commentary.length)];
        let rand = Math.random();

        if(rand < myProb) {
            mG++;
            // Obtener el nombre de un jugador ofensivo al azar para el gol
            const scorers = xi.filter(p => p.pos === 'DEL' || p.pos === 'MED');
            const scorerName = scorers.length > 0 ? scorers[Math.floor(Math.random()*scorers.length)].name : "el equipo";
            eventText = `<span class="text-blue-400 font-bold">¡GOLAZO! Disparo imparable de ${scorerName}. Se cae el estadio.</span>`;
        } else if (rand > 1 - oppProb) {
            oG++;
            eventText = `<span class="text-red-400 font-bold">¡Gol del equipo rival! Error de comunicación en la zaga local que cuesta caro.</span>`;
        }

        logDiv.innerHTML += `<div><strong>Min ${time}':</strong> ${eventText}</div>`;
        logDiv.scrollTop = logDiv.scrollHeight; 
        
        document.getElementById('sim-home-score').textContent = mG;
        document.getElementById('sim-away-score').textContent = oG;

    }, 600); 
}

function finishMatch(mG, oG) {
    document.getElementById('match-post').classList.remove('hidden');
    
    let coins = 0; let rep = 0; let resultText = "";

    if(mG > oG) {
        coins = 5000000; rep = 150; resultText = "¡Una victoria para enmarcar!";
        // Subir moral al 11 titular
        getStartingXI().forEach(p => p.morale = Math.min(100, p.morale + 15));
    } else if (mG === oG) {
        coins = 1500000; rep = 50; resultText = "Empate disputado. Nos faltó puntería.";
        getStartingXI().forEach(p => p.morale = Math.min(100, p.morale + 5));
    } else {
        coins = 500000; rep = -10; resultText = "Derrota dolorosa. La directiva exige resultados.";
        // Bajar moral fuertemente al perder
        getStartingXI().forEach(p => p.morale = Math.max(0, p.morale - 25));
    }

    state.economy.coins += coins;
    state.stats.rep = Math.max(0, state.stats.rep + rep);
    
    addEmail('Segundo Entrenador', `Informe Post-Partido: ${mG}-${oG}`, `${resultText} Hemos ingresado €${(coins/1000000).toFixed(1)}M por taquilla. He notado un cambio en la moral de los jugadores tras este resultado, revíselo en la pestaña de Plantilla.`);
    saveState();
    
    document.getElementById('match-coins').textContent = `+€${(coins/1000000).toFixed(1)}M`;
    document.getElementById('match-rep').textContent = rep > 0 ? `+${rep}` : rep;
    document.getElementById('match-rep').className = rep > 0 ? "text-blue-400 font-bold font-mono text-xl" : "text-red-400 font-bold font-mono text-xl";
}

function endMatchAndReturn() {
    document.getElementById('view-match').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');
    switchTab('inbox'); 
}