// --- BASE DE DATOS AVANZADA (Estilo FM24) ---
const PLAYERS_DB = [
    { id: 1, name: "E. Inafuma", pos: "DEL", pac: 98, sho: 99, pas: 85, def: 30, phy: 88, rep: 5000, priceBasic: 120000000, pricePrem: 10000 },
    { id: 2, name: "M. Beben", pos: "MED", pac: 85, sho: 88, pas: 98, def: 75, phy: 82, rep: 4000, priceBasic: 85000000, pricePrem: 8000 },
    { id: 3, name: "S. Aris", pos: "DEL", pac: 95, sho: 92, pas: 80, def: 25, phy: 78, rep: 2000, priceBasic: 50000000, pricePrem: 4500 },
    { id: 4, name: "P. Maldini", pos: "DEF", pac: 80, sho: 40, pas: 75, def: 99, phy: 90, rep: 1500, priceBasic: 40000000, pricePrem: 3000 },
    { id: 5, name: "L. Yashin", pos: "POR", pac: 50, sho: 20, pas: 60, def: 98, phy: 95, rep: 1000, priceBasic: 35000000, pricePrem: 2500 },
    { id: 6, name: "K. Vision", pos: "MED", pac: 75, sho: 80, pas: 92, def: 70, phy: 75, rep: 800, priceBasic: 20000000, pricePrem: 1500 },
    { id: 7, name: "F. Roca", pos: "DEF", pac: 70, sho: 35, pas: 65, def: 88, phy: 92, rep: 500, priceBasic: 12000000, pricePrem: 800 },
    { id: 8, name: "J. Cazador", pos: "DEL", pac: 88, sho: 85, pas: 70, def: 20, phy: 70, rep: 300, priceBasic: 8000000, pricePrem: 600 },
    { id: 9, name: "C. Tronco", pos: "DEF", pac: 55, sho: 30, pas: 50, def: 78, phy: 85, rep: 0, priceBasic: 2000000, pricePrem: 150 },
    { id: 10, name: "L. Novato", pos: "MED", pac: 65, sho: 60, pas: 68, def: 60, phy: 65, rep: 0, priceBasic: 1000000, pricePrem: 100 },
    { id: 11, name: "D. Manco", pos: "POR", pac: 40, sho: 10, pas: 40, def: 65, phy: 70, rep: 0, priceBasic: 500000, pricePrem: 50 },
];

function calcPlayerOVR(p) {
    if(p.pos === 'DEL') return Math.round((p.pac*0.2) + (p.sho*0.5) + (p.phy*0.1) + (p.pas*0.2));
    if(p.pos === 'MED') return Math.round((p.pac*0.1) + (p.pas*0.5) + (p.def*0.2) + (p.phy*0.2));
    if(p.pos === 'DEF') return Math.round((p.pac*0.2) + (p.def*0.5) + (p.phy*0.2) + (p.pas*0.1));
    if(p.pos === 'POR') return Math.round((p.def*0.8) + (p.phy*0.2));
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
        switchTab('inbox'); // Pestaña por defecto
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
    
    addEmail('Directiva', 'Bienvenido al Club', `Míster ${state.team.manager}, la junta directiva confía en usted para llevar al ${state.team.name} a la gloria. Tiene 10M€ de presupuesto inicial. Use el mercado con inteligencia.`);
    
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

// --- SISTEMA DE PESTAÑAS (TABS) REPARADO ---
function switchTab(tabId) {
    // 1. Quitar activo de todos los contenidos
    document.querySelectorAll('.fm-tab').forEach(t => t.classList.remove('active'));
    // 2. Quitar activo de los botones del sidebar
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    // 3. Activar el contenedor deseado (el CSS display:block se encargará de mostrarlo)
    const targetTab = document.getElementById('tab-' + tabId);
    if(targetTab) targetTab.classList.add('active');
    
    // 4. Activar el botón correspondiente
    const navBtn = document.getElementById('nav-' + tabId);
    if(navBtn) navBtn.classList.add('active');
    
    // Cambiar Título del Header
    const titles = { 'inbox': 'Buzón de Entrada', 'squad': 'Plantilla del Primer Equipo', 'tactics': 'Pizarra Táctica', 'market': 'Centro de Ojeo (Mercado)' };
    document.getElementById('page-title').textContent = titles[tabId];

    // Renderizados específicos si es necesario
    if(tabId === 'market') filterMarket('ALL');
    if(tabId === 'tactics') calculateTactics();
}

// --- ACTUALIZAR UI GLOBAL ---
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
    
    // Solo actualizar el mercado si estamos en esa pestaña para no gastar recursos
    if(document.getElementById('tab-market').classList.contains('active')) filterMarket(currentMarketFilter);
}

// --- PLANTILLA ---
function renderSquad() {
    const tbody = document.getElementById('squad-tbody');
    tbody.innerHTML = '';
    document.getElementById('squad-count').textContent = state.roster.length;
    
    let sumOvr = 0;
    const sorted = [...state.roster].sort((a,b) => b.ovr - a.ovr);
    
    sorted.forEach(p => {
        sumOvr += p.ovr;
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

    const avg = state.roster.length > 0 ? Math.round(sumOvr / state.roster.length) : 0;
    document.getElementById('squad-ovr').textContent = avg;
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
    
    const norm = (val) => Math.min(100, Math.round((val / (state.roster.length * 100 || 1)) * 100));
    
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
    
    // Actualizar botones visualmente (Robusto, sin depender del event.target)
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
        if (b.id === `filter-${pos}`) {
            b.classList.add('active');
        }
    });

    const tbody = document.getElementById('market-tbody');
    tbody.innerHTML = '';

    // Solo muestra los que NO tienes en la plantilla
    let available = PLAYERS_DB.filter(db_p => !state.roster.find(rp => rp.id === db_p.id));
    if(pos !== 'ALL') available = available.filter(p => p.pos === pos);

    if(available.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-slate-500 py-6">Mercado vacío o ya has fichado a todos.</td></tr>';
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

    if(state.stats.rep < p.rep) return alert(`El jugador rechaza negociar: El club no tiene la reputación necesaria (${p.rep} 🏆).`);
    
    if(curr === 'basic') {
        if(state.economy.coins < p.priceBasic) return alert("Presupuesto de traspasos insuficiente.");
        state.economy.coins -= p.priceBasic;
    } else {
        if(state.economy.premium < p.pricePrem) return alert("Monedas Premium insuficientes. Compra más en la barra superior (+).");
        state.economy.premium -= p.pricePrem;
    }

    state.roster.push(p);
    addEmail('Director Deportivo', `Fichaje Cerrado: ${p.name}`, `Nos complace anunciar que las negociaciones han sido un éxito. ${p.name} (OVR: ${p.ovr}) ya se ha incorporado a la plantilla del ${state.team.name} por petición expresa de Míster ${state.team.manager}.`);
    saveState();
}

function buyIAP() {
    const val = prompt("Menú de Desarrollo (MVP):\n\nIntroduce cuántas monedas premium quieres generar gratis:", "1000");
    if(val && !isNaN(val)) {
        state.economy.premium += parseInt(val);
        saveState();
    }
}

// --- MOTOR DE SIMULACIÓN DE PARTIDO ---
function playMatch() {
    if(state.roster.length < 5) {
        alert("Segundo Entrenador: Míster, necesitamos al menos 5 jugadores en la plantilla para poder competir dignamente.");
        return;
    }

    document.getElementById('match-modal').classList.remove('hidden');
    document.getElementById('match-post').classList.add('hidden');
    
    document.getElementById('sim-home-name').textContent = state.team.name;
    const myOvr = document.getElementById('squad-ovr').textContent;
    document.getElementById('sim-home-ovr').textContent = myOvr;
    
    // Generar rival
    const botOvr = Math.max(30, parseInt(myOvr) + (Math.floor(Math.random() * 21) - 10));
    document.getElementById('sim-away-ovr').textContent = botOvr;
    
    document.getElementById('match-header').textContent = "SIMULANDO...";
    document.getElementById('match-score').innerHTML = `<span id="sim-home-score">0</span> - <span id="sim-away-score">0</span>`;
    
    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML = "Previa: Los equipos saltan al terreno de juego.";

    // Probabilidades (Matemáticas puras)
    const diff = parseInt(myOvr) - botOvr;
    const myProb = 0.08 + (diff * 0.003); 
    const oppProb = 0.08 - (diff * 0.003);

    let mG = 0, oG = 0, time = 0;
    
    const commentary = [
        "Juego trabado en el centro del campo.", "Disparo lejano que atrapa el portero.", 
        "Corte providencial del defensa central.", "Pase filtrado que no encuentra rematador.", 
        "Fuera de juego por milímetros.", "Saque de esquina sin peligro."
    ];

    const matchInterval = setInterval(() => {
        time += 15;
        if(time > 90) {
            clearInterval(matchInterval);
            finishMatch(mG, oG);
            return;
        }

        let eventText = commentary[Math.floor(Math.random() * commentary.length)];
        let rand = Math.random();

        if(rand < myProb) {
            mG++;
            eventText = `<span class="text-blue-400 font-bold">¡GOLAZO! Jugada de pizarra ejecutada a la perfección por el ${state.team.name}.</span>`;
        } else if (rand > 1 - oppProb) {
            oG++;
            eventText = `<span class="text-red-400 font-bold">¡Gol del rival! Error de comunicación en la zaga.</span>`;
        }

        logDiv.innerHTML += `<div><strong>Min ${time}':</strong> ${eventText}</div>`;
        logDiv.scrollTop = logDiv.scrollHeight;
        
        document.getElementById('sim-home-score').textContent = mG;
        document.getElementById('sim-away-score').textContent = oG;

    }, 500); 
}

function finishMatch(mG, oG) {
    document.getElementById('match-header').textContent = "FINAL DEL PARTIDO";
    document.getElementById('match-post').classList.remove('hidden');
    
    let coins = 0; let rep = 0; let resultText = "";

    if(mG > oG) {
        coins = 200000; rep = 50; resultText = "¡Victoria incontestable!";
    } else if (mG === oG) {
        coins = 75000; rep = 15; resultText = "Empate muy disputado.";
    } else {
        coins = 15000; rep = -5; resultText = "Derrota. Toca revisar los entrenamientos.";
    }

    state.economy.coins += coins;
    state.stats.rep = Math.max(0, state.stats.rep + rep);
    
    addEmail('Segundo Entrenador', `Post-Partido: ${mG}-${oG}`, `${resultText} Hemos ingresado +€${(coins/1000).toFixed(0)}K por entradas y publicidad. A seguir trabajando.`);
    saveState();
    
    document.getElementById('match-coins').textContent = `+€${(coins/1000).toFixed(0)}K`;
    document.getElementById('match-rep').textContent = rep > 0 ? `+${rep}` : rep;
    document.getElementById('match-rep').className = rep > 0 ? "text-blue-400 font-bold font-mono text-lg" : "text-red-400 font-bold font-mono text-lg";
}

function closeMatch() {
    document.getElementById('match-modal').classList.add('hidden');
    switchTab('inbox'); // Al terminar el partido, vuelves al buzón a ver las noticias
}