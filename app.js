// --- BASE DE DATOS REAL (ESTILO FM24 / EA FC) ---
const PLAYERS_DB = [
    // --- DELANTEROS (DEL) ---
    { id: 101, name: "L. Messi", pos: "DEL", pac: 80, sho: 93, pas: 94, def: 30, phy: 65, rep: 5000, priceBasic: 150000000, pricePrem: 12000 },
    { id: 102, name: "C. Ronaldo", pos: "DEL", pac: 82, sho: 95, pas: 80, def: 35, phy: 85, rep: 5000, priceBasic: 140000000, pricePrem: 11000 },
    { id: 103, name: "K. Mbappé", pos: "DEL", pac: 99, sho: 92, pas: 85, def: 35, phy: 78, rep: 4500, priceBasic: 135000000, pricePrem: 10000 },
    { id: 104, name: "E. Haaland", pos: "DEL", pac: 89, sho: 96, pas: 70, def: 45, phy: 93, rep: 4000, priceBasic: 125000000, pricePrem: 9500 },
    { id: 105, name: "Vini Jr.", pos: "DEL", pac: 95, sho: 86, pas: 85, def: 30, phy: 70, rep: 3500, priceBasic: 95000000, pricePrem: 7500 },
    { id: 106, name: "A. Griezmann", pos: "DEL", pac: 80, sho: 85, pas: 88, def: 50, phy: 70, rep: 2000, priceBasic: 55000000, pricePrem: 4500 },
    { id: 107, name: "L. Yamal", pos: "DEL", pac: 85, sho: 78, pas: 82, def: 40, phy: 60, rep: 1200, priceBasic: 35000000, pricePrem: 2800 },
    { id: 108, name: "A. Morata", pos: "DEL", pac: 78, sho: 82, pas: 75, def: 45, phy: 78, rep: 500, priceBasic: 15000000, pricePrem: 1200 },
    { id: 109, name: "Joselu", pos: "DEL", pac: 65, sho: 82, pas: 68, def: 40, phy: 82, rep: 0, priceBasic: 5000000, pricePrem: 400 },

    // --- MEDIOCENTROS (MED) ---
    { id: 201, name: "K. De Bruyne", pos: "MED", pac: 72, sho: 85, pas: 98, def: 65, phy: 75, rep: 4800, priceBasic: 110000000, pricePrem: 9000 },
    { id: 202, name: "J. Bellingham", pos: "MED", pac: 82, sho: 85, pas: 88, def: 78, phy: 85, rep: 4500, priceBasic: 105000000, pricePrem: 8500 },
    { id: 203, name: "Pedri", pos: "MED", pac: 78, sho: 70, pas: 92, def: 68, phy: 65, rep: 3000, priceBasic: 75000000, pricePrem: 6000 },
    { id: 204, name: "F. Valverde", pos: "MED", pac: 88, sho: 78, pas: 85, def: 80, phy: 82, rep: 2500, priceBasic: 65000000, pricePrem: 5000 },
    { id: 205, name: "T. Kroos", pos: "MED", pac: 55, sho: 80, pas: 95, def: 70, phy: 70, rep: 1800, priceBasic: 40000000, pricePrem: 3000 },
    { id: 206, name: "E. Camavinga", pos: "MED", pac: 85, sho: 72, pas: 82, def: 82, phy: 85, rep: 1000, priceBasic: 25000000, pricePrem: 2000 },
    { id: 207, name: "Koke", pos: "MED", pac: 65, sho: 72, pas: 85, def: 75, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 1000 },
    { id: 208, name: "M. Zubimendi", pos: "MED", pac: 70, sho: 68, pas: 82, def: 78, phy: 72, rep: 100, priceBasic: 8000000, pricePrem: 600 },
    { id: 209, name: "S. Darder", pos: "MED", pac: 68, sho: 75, pas: 80, def: 70, phy: 70, rep: 0, priceBasic: 4000000, pricePrem: 300 },

    // --- DEFENSAS (DEF) ---
    { id: 301, name: "V. van Dijk", pos: "DEF", pac: 78, sho: 60, pas: 75, def: 95, phy: 90, rep: 4500, priceBasic: 95000000, pricePrem: 7800 },
    { id: 302, name: "A. Rüdiger", pos: "DEF", pac: 85, sho: 40, pas: 70, def: 90, phy: 92, rep: 3500, priceBasic: 75000000, pricePrem: 6000 },
    { id: 303, name: "R. Dias", pos: "DEF", pac: 68, sho: 45, pas: 72, def: 92, phy: 88, rep: 3000, priceBasic: 65000000, pricePrem: 5200 },
    { id: 304, name: "R. Araújo", pos: "DEF", pac: 82, sho: 45, pas: 65, def: 88, phy: 85, rep: 2000, priceBasic: 45000000, pricePrem: 3500 },
    { id: 305, name: "A. Davies", pos: "DEF", pac: 95, sho: 68, pas: 80, def: 80, phy: 78, rep: 1500, priceBasic: 35000000, pricePrem: 2800 },
    { id: 306, name: "D. Carvajal", pos: "DEF", pac: 80, sho: 50, pas: 80, def: 82, phy: 80, rep: 800, priceBasic: 20000000, pricePrem: 1500 },
    { id: 307, name: "P. Cubarsí", pos: "DEF", pac: 75, sho: 40, pas: 78, def: 80, phy: 75, rep: 300, priceBasic: 10000000, pricePrem: 800 },
    { id: 308, name: "H. Maguire", pos: "DEF", pac: 48, sho: 50, pas: 65, def: 78, phy: 85, rep: 0, priceBasic: 2000000, pricePrem: 150 },

    // --- PORTEROS (POR) ---
    { id: 401, name: "T. Courtois", pos: "POR", pac: 40, sho: 20, pas: 65, def: 95, phy: 88, rep: 4000, priceBasic: 85000000, pricePrem: 6500 },
    { id: 402, name: "Alisson", pos: "POR", pac: 45, sho: 25, pas: 80, def: 92, phy: 85, rep: 3000, priceBasic: 65000000, pricePrem: 5000 },
    { id: 403, name: "M. ter Stegen", pos: "POR", pac: 42, sho: 20, pas: 85, def: 90, phy: 80, rep: 2000, priceBasic: 45000000, pricePrem: 3500 },
    { id: 404, name: "J. Oblak", pos: "POR", pac: 40, sho: 15, pas: 60, def: 91, phy: 82, rep: 1000, priceBasic: 25000000, pricePrem: 2000 },
    { id: 405, name: "U. Simón", pos: "POR", pac: 45, sho: 20, pas: 75, def: 85, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 900 },
    { id: 406, name: "Mamardashvili", pos: "POR", pac: 42, sho: 20, pas: 70, def: 84, phy: 80, rep: 0, priceBasic: 4000000, pricePrem: 300 }
];

function calcPlayerOVR(p) {
    if(p.pos === 'DEL') return Math.round((p.pac*0.20) + (p.sho*0.45) + (p.phy*0.15) + (p.pas*0.20));
    if(p.pos === 'MED') return Math.round((p.pac*0.10) + (p.pas*0.45) + (p.def*0.25) + (p.phy*0.20));
    if(p.pos === 'DEF') return Math.round((p.pac*0.15) + (p.def*0.50) + (p.phy*0.25) + (p.pas*0.10));
    if(p.pos === 'POR') return Math.round((p.def*0.70) + (p.phy*0.20) + (p.pas*0.10));
    return 50;
}

PLAYERS_DB.forEach(p => p.ovr = calcPlayerOVR(p));

// --- ESTADO GLOBAL ---
let state = {
    auth: null,
    team: null,
    economy: { coins: 0, premium: 0 },
    stats: { rep: 0, matches: 0 },
    roster: [],
    inbox: [],
    formation: '4-4-2'
};
const SAVE_KEY = 'inafuma_fm_v1';

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
    document.getElementById('app-layout').classList.add('hidden');
    
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
    state.team = { 
        name: document.getElementById('set-team').value, 
        manager: document.getElementById('set-manager').value, 
        color: color 
    };
    state.economy = { coins: 10000000, premium: 0 };
    state.stats = { rep: 0, matches: 0 };
    
    addEmail('Directiva', 'Bienvenido al Club', `Míster ${state.team.manager}, la junta directiva confía en usted para llevar al ${state.team.name} a la gloria. Tiene 10M€ de presupuesto inicial. Fiche con cabeza, empiece por jugadores libres de reputación (Rep: 0).`);
    
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
    if(state.inbox.length === 0) { list.innerHTML = '<p class="text-slate-500 text-sm">Bandeja vacía.</p>'; return; }
    
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
    if(mail) { mail.read = true; saveState(); renderInbox(); }
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
    if(tabId === 'tactics') calculateTactics();
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
}

// --- CÁLCULO DE MEDIA DEL EQUIPO ---
function getTeamOvr() {
    if(state.roster.length === 0) return 0;
    const sum = state.roster.reduce((a, b) => a + b.ovr, 0);
    return Math.round(sum / state.roster.length);
}

// --- PLANTILLA ---
function renderSquad() {
    const tbody = document.getElementById('squad-tbody');
    tbody.innerHTML = '';
    document.getElementById('squad-count').textContent = state.roster.length;
    
    const sorted = [...state.roster].sort((a,b) => b.ovr - a.ovr);
    
    sorted.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        tbody.innerHTML += `
        <tr>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-bold text-white">${p.name}</td>
            <td class="font-gaming text-yellow-400 font-bold">${p.ovr}</td>
            <td class="text-slate-300">${p.pac}</td>
            <td class="text-slate-300">${p.sho}</td>
            <td class="text-slate-300">${p.pas}</td>
            <td class="text-slate-300">${p.def}</td>
            <td class="text-slate-300">${p.phy}</td>
            <td class="text-green-400 font-mono">€${(p.priceBasic/1000000).toFixed(1)}M</td>
        </tr>`;
    });

    document.getElementById('squad-ovr').textContent = getTeamOvr();
}

// --- TÁCTICAS ---
function changeFormation() {
    state.formation = document.getElementById('tactics-formation').value;
    saveState();
    calculateTactics();
}

function calculateTactics() {
    document.getElementById('tactics-formation').value = state.formation;
    const pitch = document.getElementById('pitch-players');
    pitch.innerHTML = '';

    const layouts = {
        '4-4-2': [ {x:50,y:90,c:'POR'}, {x:20,y:70,c:'DEF'},{x:40,y:75,c:'DEF'},{x:60,y:75,c:'DEF'},{x:80,y:70,c:'DEF'}, {x:20,y:40,c:'MED'},{x:40,y:45,c:'MED'},{x:60,y:45,c:'MED'},{x:80,y:40,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ],
        '4-3-3': [ {x:50,y:90,c:'POR'}, {x:20,y:75,c:'DEF'},{x:40,y:80,c:'DEF'},{x:60,y:80,c:'DEF'},{x:80,y:75,c:'DEF'}, {x:30,y:50,c:'MED'},{x:50,y:45,c:'MED'},{x:70,y:50,c:'MED'}, {x:20,y:20,c:'DEL'},{x:50,y:15,c:'DEL'},{x:80,y:20,c:'DEL'} ],
        '5-3-2': [ {x:50,y:90,c:'POR'}, {x:10,y:70,c:'DEF'},{x:30,y:80,c:'DEF'},{x:50,y:82,c:'DEF'},{x:70,y:80,c:'DEF'},{x:90,y:70,c:'DEF'}, {x:30,y:45,c:'MED'},{x:50,y:50,c:'MED'},{x:70,y:45,c:'MED'}, {x:40,y:20,c:'DEL'},{x:60,y:20,c:'DEL'} ]
    };

    layouts[state.formation].forEach(pos => {
        let color = pos.c==='POR'?'#e11d48':pos.c==='DEF'?'#d97706':pos.c==='MED'?'#16a34a':'#2563eb';
        pitch.innerHTML += `<div class="pitch-player" style="left:${pos.x}%; top:${pos.y}%; border-color:${color}">${pos.c}</div>`;
    });

    let atk = 0, mid = 0, def = 0;
    state.roster.forEach(p => {
        if(p.pos === 'DEL') atk += p.sho + p.pac;
        if(p.pos === 'MED') mid += p.pas + p.phy;
        if(p.pos === 'DEF' || p.pos === 'POR') def += p.def + p.phy;
    });

    if(state.formation === '4-3-3') { atk*=1.2; def*=0.9; }
    if(state.formation === '5-3-2') { def*=1.3; atk*=0.8; }
    
    const norm = (val) => Math.min(100, Math.round((val / (state.roster.length * 150 || 1)) * 100));
    
    document.getElementById('tac-atk').textContent = Math.round(atk);
    document.getElementById('bar-atk').style.width = norm(atk) + '%';
    
    document.getElementById('tac-mid').textContent = Math.round(mid);
    document.getElementById('bar-mid').style.width = norm(mid) + '%';
    
    document.getElementById('tac-def').textContent = Math.round(def);
    document.getElementById('bar-def').style.width = norm(def) + '%';
}

// --- MERCADO DE FICHAJES ---
let currentMarketFilter = 'ALL';

function filterMarket(pos) {
    currentMarketFilter = pos;
    
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`filter-${pos}`) || document.querySelector('.filter-btn');
    if(btn) btn.classList.add('active');

    const tbody = document.getElementById('market-tbody');
    tbody.innerHTML = '';

    let available = PLAYERS_DB.filter(db_p => !state.roster.find(rp => rp.id === db_p.id));
    if(pos !== 'ALL') available = available.filter(p => p.pos === pos);

    if(available.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-slate-500 py-6">No hay jugadores disponibles en esta posición.</td></tr>';
        return;
    }

    available.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        const canRep = state.stats.rep >= p.rep;
        const formatM = (p.priceBasic/1000000).toFixed(1)+'M';
        
        tbody.innerHTML += `
        <tr>
            <td class="font-bold text-white">${p.name}</td>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-gaming text-yellow-400 font-bold">${p.ovr}</td>
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
    addEmail('Director Deportivo', `Fichaje Confirmado: ${p.name}`, `Míster, hemos cerrado el traspaso de ${p.name} (OVR: ${p.ovr}). La afición está eufórica con su llegada al ${state.team.name}.`);
    saveState();
}

function buyIAP() {
    const val = prompt("Herramienta de Desarrollo (MVP):\n\nIntroduce cuántas monedas premium quieres añadir:", "10000");
    if(val && !isNaN(val)) {
        state.economy.premium += parseInt(val);
        saveState();
    }
}

// --- MOTOR DE SIMULACIÓN DE PARTIDO (CORREGIDO) ---
function playMatch() {
    if(state.roster.length < 3) {
        alert("Segundo Entrenador: Míster, necesitamos fichar al menos a 3 jugadores del mercado para que nos dejen competir.");
        return;
    }

    // Asegurarse de que las pantallas del modal estén correctas
    document.getElementById('match-modal').classList.remove('hidden');
    document.getElementById('match-post').classList.add('hidden'); // Oculta los resultados finales
    
    // Cargar nombres y medias
    document.getElementById('sim-home-name').textContent = state.team.name;
    const myOvr = getTeamOvr(); 
    document.getElementById('sim-home-ovr').textContent = myOvr;
    
    const botOvr = Math.max(40, myOvr + (Math.floor(Math.random() * 21) - 10));
    document.getElementById('sim-away-ovr').textContent = botOvr;
    
    // Resetear textos y marcadores
    document.getElementById('match-header').textContent = "SIMULANDO...";
    document.getElementById('sim-home-score').textContent = "0";
    document.getElementById('sim-away-score').textContent = "0";
    
    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML = "Previa: Gran ambiente en el estadio. Arranca el encuentro.";

    // Probabilidades
    const diff = myOvr - botOvr;
    const myProb = 0.08 + (diff * 0.003); 
    const oppProb = 0.08 - (diff * 0.003);

    let mG = 0, oG = 0, time = 0;
    
    const commentary = [
        "Posesión larga en el medio campo.", "Disparo potente que despeja el portero a córner.", 
        "Falta táctica dura. Amarilla.", "El delantero no llega al centro por milímetros.", 
        "Corte espectacular del defensa central.", "Juego trabado, muchas interrupciones."
    ];

    // Arrancar el reloj
    const matchInterval = setInterval(() => {
        time += 10;
        if(time > 90) {
            clearInterval(matchInterval);
            finishMatch(mG, oG); // Llama al final del partido
            return;
        }

        let eventText = commentary[Math.floor(Math.random() * commentary.length)];
        let rand = Math.random();

        if(rand < myProb) {
            mG++;
            eventText = `<span class="text-blue-400 font-bold">¡GOLAZO! Jugada espectacular del ${state.team.name} que acaba en la red.</span>`;
        } else if (rand > 1 - oppProb) {
            oG++;
            eventText = `<span class="text-red-400 font-bold">¡Gol del equipo rival! Desajuste en la defensa local.</span>`;
        }

        logDiv.innerHTML += `<div><strong>Min ${time}':</strong> ${eventText}</div>`;
        logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll hacia abajo
        
        document.getElementById('sim-home-score').textContent = mG;
        document.getElementById('sim-away-score').textContent = oG;

    }, 500); 
}

function finishMatch(mG, oG) {
    document.getElementById('match-header').textContent = "FINAL DEL PARTIDO";
    document.getElementById('match-post').classList.remove('hidden'); // Muestra los resultados
    
    let coins = 0; let rep = 0; let resultText = "";

    if(mG > oG) {
        coins = 5000000; rep = 150; resultText = "¡Una victoria para enmarcar!";
    } else if (mG === oG) {
        coins = 1500000; rep = 50; resultText = "Empate disputado. Nos faltó puntería.";
    } else {
        coins = 500000; rep = -10; resultText = "Derrota dolorosa. La directiva exige resultados.";
    }

    state.economy.coins += coins;
    state.stats.rep = Math.max(0, state.stats.rep + rep);
    
    addEmail('Segundo Entrenador', `Informe Post-Partido: ${mG}-${oG}`, `${resultText} Hemos ingresado €${(coins/1000000).toFixed(1)}M por la taquilla de hoy. Debemos seguir mejorando el OVR del equipo.`);
    saveState();
    
    document.getElementById('match-coins').textContent = `+€${(coins/1000000).toFixed(1)}M`;
    document.getElementById('match-rep').textContent = rep > 0 ? `+${rep}` : rep;
    document.getElementById('match-rep').className = rep > 0 ? "text-blue-400 font-bold font-mono text-lg" : "text-red-400 font-bold font-mono text-lg";
}

function closeMatch() {
    document.getElementById('match-modal').classList.add('hidden');
    switchTab('inbox'); 
}