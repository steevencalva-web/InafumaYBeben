// --- BASE DE DATOS DE JUGADORES (Con Fotos Simuladas) ---
function getAvatar(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true`;
}

const PLAYERS_DB = [
    // Galácticos
    { id: 101, name: "L. Messi", pos: "DEL", pac: 80, sho: 93, pas: 94, def: 30, phy: 65, rep: 5000, priceBasic: 150000000, pricePrem: 12000, img: "https://i.pravatar.cc/150?u=messi" },
    { id: 102, name: "C. Ronaldo", pos: "DEL", pac: 82, sho: 95, pas: 80, def: 35, phy: 85, rep: 5000, priceBasic: 140000000, pricePrem: 11000, img: "https://i.pravatar.cc/150?u=cr7" },
    { id: 103, name: "K. Mbappé", pos: "DEL", pac: 99, sho: 92, pas: 85, def: 35, phy: 78, rep: 4500, priceBasic: 135000000, pricePrem: 10000, img: "https://i.pravatar.cc/150?u=mbappe" },
    { id: 201, name: "K. De Bruyne", pos: "MED", pac: 72, sho: 85, pas: 98, def: 65, phy: 75, rep: 4800, priceBasic: 110000000, pricePrem: 9000, img: "https://i.pravatar.cc/150?u=kdb" },
    { id: 301, name: "V. van Dijk", pos: "DEF", pac: 78, sho: 60, pas: 75, def: 95, phy: 90, rep: 4500, priceBasic: 95000000, pricePrem: 7800, img: "https://i.pravatar.cc/150?u=vandijk" },
    { id: 401, name: "T. Courtois", pos: "POR", pac: 40, sho: 20, pas: 65, def: 95, phy: 88, rep: 4000, priceBasic: 85000000, pricePrem: 6500, img: "https://i.pravatar.cc/150?u=courtois" },
    
    // Clase Mundial
    { id: 104, name: "Vini Jr.", pos: "DEL", pac: 95, sho: 86, pas: 85, def: 30, phy: 70, rep: 3500, priceBasic: 95000000, pricePrem: 7500, img: "https://i.pravatar.cc/150?u=vini" },
    { id: 202, name: "J. Bellingham", pos: "MED", pac: 82, sho: 85, pas: 88, def: 78, phy: 85, rep: 4500, priceBasic: 105000000, pricePrem: 8500, img: "https://i.pravatar.cc/150?u=jude" },
    { id: 302, name: "A. Rüdiger", pos: "DEF", pac: 85, sho: 40, pas: 70, def: 90, phy: 92, rep: 3500, priceBasic: 75000000, pricePrem: 6000, img: "https://i.pravatar.cc/150?u=rudiger" },
    { id: 402, name: "Alisson", pos: "POR", pac: 45, sho: 25, pas: 80, def: 92, phy: 85, rep: 3000, priceBasic: 65000000, pricePrem: 5000, img: "https://i.pravatar.cc/150?u=alisson" },
    
    // Medios
    { id: 105, name: "A. Griezmann", pos: "DEL", pac: 80, sho: 85, pas: 88, def: 50, phy: 70, rep: 2000, priceBasic: 55000000, pricePrem: 4500, img: "https://i.pravatar.cc/150?u=grizzi" },
    { id: 203, name: "Pedri", pos: "MED", pac: 78, sho: 70, pas: 92, def: 68, phy: 65, rep: 3000, priceBasic: 75000000, pricePrem: 6000, img: "https://i.pravatar.cc/150?u=pedri" },
    { id: 304, name: "D. Carvajal", pos: "DEF", pac: 80, sho: 50, pas: 80, def: 82, phy: 80, rep: 800, priceBasic: 20000000, pricePrem: 1500, img: "https://i.pravatar.cc/150?u=carvajal" },
    { id: 403, name: "U. Simón", pos: "POR", pac: 45, sho: 20, pas: 75, def: 85, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 900, img: "https://i.pravatar.cc/150?u=simon" },

    // Baratos / Iniciales
    { id: 106, name: "Joselu", pos: "DEL", pac: 65, sho: 82, pas: 68, def: 40, phy: 82, rep: 0, priceBasic: 5000000, pricePrem: 400, img: "https://i.pravatar.cc/150?u=joselu" },
    { id: 107, name: "B. Iglesias", pos: "DEL", pac: 60, sho: 80, pas: 65, def: 35, phy: 85, rep: 0, priceBasic: 4000000, pricePrem: 300, img: "https://i.pravatar.cc/150?u=panda" },
    { id: 108, name: "H. Duro", pos: "DEL", pac: 75, sho: 75, pas: 65, def: 40, phy: 75, rep: 0, priceBasic: 3000000, pricePrem: 200, img: "https://i.pravatar.cc/150?u=duro" },
    { id: 204, name: "S. Darder", pos: "MED", pac: 68, sho: 75, pas: 80, def: 70, phy: 70, rep: 0, priceBasic: 4000000, pricePrem: 300, img: "https://i.pravatar.cc/150?u=darder" },
    { id: 205, name: "Isco", pos: "MED", pac: 62, sho: 78, pas: 85, def: 45, phy: 60, rep: 0, priceBasic: 5000000, pricePrem: 400, img: "https://i.pravatar.cc/150?u=isco" },
    { id: 206, name: "Pepelu", pos: "MED", pac: 60, sho: 65, pas: 78, def: 75, phy: 75, rep: 0, priceBasic: 2500000, pricePrem: 150, img: "https://i.pravatar.cc/150?u=pepelu" },
    { id: 207, name: "O. Trejo", pos: "MED", pac: 65, sho: 70, pas: 78, def: 50, phy: 60, rep: 0, priceBasic: 1500000, pricePrem: 100, img: "https://i.pravatar.cc/150?u=trejo" },
    { id: 305, name: "P. Cubarsí", pos: "DEF", pac: 75, sho: 40, pas: 78, def: 80, phy: 75, rep: 0, priceBasic: 8000000, pricePrem: 600, img: "https://i.pravatar.cc/150?u=cubarsi" },
    { id: 306, name: "D. García", pos: "DEF", pac: 65, sho: 45, pas: 60, def: 82, phy: 85, rep: 0, priceBasic: 4500000, pricePrem: 350, img: "https://i.pravatar.cc/150?u=dgarcia" },
    { id: 307, name: "M. Maffeo", pos: "DEF", pac: 82, sho: 55, pas: 70, def: 75, phy: 78, rep: 0, priceBasic: 2500000, pricePrem: 200, img: "https://i.pravatar.cc/150?u=maffeo" },
    { id: 308, name: "J. Navas", pos: "DEF", pac: 75, sho: 60, pas: 80, def: 70, phy: 60, rep: 0, priceBasic: 1500000, pricePrem: 100, img: "https://i.pravatar.cc/150?u=navas" },
    { id: 309, name: "H. Maguire", pos: "DEF", pac: 48, sho: 50, pas: 65, def: 78, phy: 85, rep: 0, priceBasic: 2000000, pricePrem: 150, img: "https://i.pravatar.cc/150?u=maguire" },
    { id: 404, name: "D. Soria", pos: "POR", pac: 35, sho: 10, pas: 60, def: 80, phy: 78, rep: 0, priceBasic: 3000000, pricePrem: 200, img: "https://i.pravatar.cc/150?u=soria" },
    { id: 405, name: "G. Gazzaniga", pos: "POR", pac: 42, sho: 15, pas: 68, def: 78, phy: 75, rep: 0, priceBasic: 2000000, pricePrem: 150, img: "https://i.pravatar.cc/150?u=gazza" }
];

function calcPlayerOVR(p) {
    if(p.pos === 'DEL') return Math.round((p.pac*0.20) + (p.sho*0.45) + (p.phy*0.15) + (p.pas*0.20));
    if(p.pos === 'MED') return Math.round((p.pac*0.10) + (p.pas*0.45) + (p.def*0.25) + (p.phy*0.20));
    if(p.pos === 'DEF') return Math.round((p.pac*0.15) + (p.def*0.50) + (p.phy*0.25) + (p.pas*0.10));
    if(p.pos === 'POR') return Math.round((p.def*0.70) + (p.phy*0.20) + (p.pas*0.10));
    return 50;
}
PLAYERS_DB.forEach(p => { p.ovr = calcPlayerOVR(p); p.morale = 100; });

// --- SISTEMA DE BASE DE DATOS LOCAL DE USUARIOS ---
let UsersDB = JSON.parse(localStorage.getItem('inafuma_users_db')) || [];
let state = null; 

window.onload = () => {
    if(!localStorage.getItem('inafuma_cookies')) document.getElementById('modal-cookies').classList.remove('hidden');
    
    const activeUserId = localStorage.getItem('inafuma_active_user');
    if(activeUserId) {
        state = UsersDB.find(u => u.auth.user === activeUserId);
    }
    
    routeView();
    document.getElementById('date-display').textContent = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
};

function saveState() { 
    const index = UsersDB.findIndex(u => u.auth.user === state.auth.user);
    if(index !== -1) UsersDB[index] = state;
    localStorage.setItem('inafuma_users_db', JSON.stringify(UsersDB));
    updateUI(); 
}

function acceptCookies() { localStorage.setItem('inafuma_cookies', 'true'); document.getElementById('modal-cookies').classList.add('hidden'); }

function toggleAuth(mode) {
    if(mode === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
        document.getElementById('tab-login').className = "flex-1 pb-2 text-blue-400 border-b-2 border-blue-400 font-bold";
        document.getElementById('tab-register').className = "flex-1 pb-2 text-slate-400 hover:text-white font-bold";
    } else {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
        document.getElementById('tab-register').className = "flex-1 pb-2 text-blue-400 border-b-2 border-blue-400 font-bold";
        document.getElementById('tab-login').className = "flex-1 pb-2 text-slate-400 hover:text-white font-bold";
    }
}

// REGISTRO
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    
    if(UsersDB.find(u => u.auth.user === user)) return alert("El usuario ya existe.");
    
    state = {
        auth: { user, pass },
        team: null,
        economy: { coins: 50000000, premium: 0 }, // 50 Millones
        stats: { rep: 0, matches: 0, wins: 0 },
        roster: [],
        lineup: [null,null,null,null,null,null,null,null,null,null,null],
        inbox: [],
        formation: '4-4-2'
    };
    
    UsersDB.push(state);
    localStorage.setItem('inafuma_active_user', user);
    localStorage.setItem('inafuma_users_db', JSON.stringify(UsersDB));
    routeView();
});

// LOGIN
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;
    
    const foundUser = UsersDB.find(u => u.auth.user === user && u.auth.pass === pass);
    if(foundUser) {
        state = foundUser;
        localStorage.setItem('inafuma_active_user', user);
        routeView();
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

// CREAR EQUIPO
document.getElementById('setup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.team = { 
        name: document.getElementById('set-team').value, 
        manager: document.getElementById('set-manager').value, 
        color: document.querySelector('input[name="color"]:checked').value 
    };
    addEmail('Directiva', 'Bienvenido al Club', `Míster ${state.team.manager}, tiene 50M€ de presupuesto inicial. Fiche una plantilla y use el botón de "Mejor 11" en tácticas para colocarlos.`);
    saveState(); routeView();
});

function logout() {
    state = null;
    localStorage.removeItem('inafuma_active_user');
    routeView();
}

function routeView() {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    
    if(!state) {
        document.getElementById('view-landing').classList.remove('hidden');
    } else if(!state.team) {
        document.getElementById('view-setup').classList.remove('hidden');
    } else {
        document.getElementById('app-layout').classList.remove('hidden');
        updateUI();
        switchTab('dash'); 
    }
}

// --- UTILIDADES ---
function addEmail(sender, subject, body) {
    const date = new Date().toLocaleDateString('es-ES', {day: 'numeric', month:'short'});
    state.inbox.unshift({ id: Date.now(), sender, subject, body, date, read: false });
}

function renderInbox() {
    const list = document.getElementById('inbox-list');
    list.innerHTML = '';
    if(state.inbox.length === 0) return;
    
    state.inbox.forEach(mail => {
        const border = mail.read ? 'border-slate-600 opacity-60' : 'border-blue-500 glow-blue';
        list.innerHTML += `
        <div class="bg-slate-800 p-4 rounded-lg border ${border} cursor-pointer hover:bg-slate-700 transition" onclick="readEmail(${mail.id})">
            <div class="flex justify-between items-baseline mb-2">
                <span class="text-sm font-bold text-blue-400">${mail.sender}</span>
                <span class="text-xs text-slate-400">${mail.date}</span>
            </div>
            <h4 class="text-lg font-bold text-white">${mail.subject}</h4>
            <p class="text-sm text-slate-300 mt-2">${mail.body}</p>
        </div>`;
    });
}
function readEmail(id) { const m = state.inbox.find(x => x.id === id); if(m) { m.read = true; saveState(); renderInbox(); } }

function switchTab(tabId) {
    document.querySelectorAll('.fm-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    document.getElementById('nav-' + tabId).classList.add('active');
    
    const titles = { 'dash': 'Panel de Control', 'squad': 'Plantilla y Moral', 'tactics': 'Pizarra Táctica', 'market': 'Mercado Mundial' };
    document.getElementById('page-title').textContent = titles[tabId];

    if(tabId === 'market') filterMarket('ALL');
    if(tabId === 'tactics') renderTactics();
}

function getStartingXI() { return state.lineup.map(id => state.roster.find(p => p.id === id)).filter(p => p !== undefined); }
function getTeamOvr() {
    const xi = getStartingXI();
    if(xi.length === 0) return 0;
    const sum = xi.reduce((acc, p) => acc + (p.ovr * (1 + ((p.morale - 50) / 200))), 0);
    return Math.round(sum / xi.length);
}

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

    // Actualizar Dashboard
    document.getElementById('dash-ovr-big').textContent = getTeamOvr();
    document.getElementById('dash-matches').textContent = state.stats.matches;
    document.getElementById('dash-wins').textContent = state.stats.wins;

    renderInbox();
    renderSquad();
    if(document.getElementById('tab-tactics').classList.contains('active')) renderTactics();
}

// --- TAB: PLANTILLA ---
function renderSquad() {
    const tbody = document.getElementById('squad-tbody');
    tbody.innerHTML = '';
    document.getElementById('squad-count').textContent = state.roster.length;
    
    const sorted = [...state.roster].sort((a,b) => b.ovr - a.ovr);
    sorted.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        let moralColor = p.morale >= 80 ? '#10b981' : p.morale >= 40 ? '#f59e0b' : '#ef4444';
        tbody.innerHTML += `
        <tr>
            <td><img src="${p.img}" class="w-10 h-10 rounded-full border border-slate-500"></td>
            <td class="font-bold text-white">${p.name}</td>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-gaming text-yellow-400 font-bold text-lg">${p.ovr}</td>
            <td style="width: 100px;">
                <div class="text-xs text-right mb-1">${p.morale}%</div>
                <div class="w-full h-2 bg-slate-700 rounded overflow-hidden"><div class="h-full" style="width:${p.morale}%; background:${moralColor};"></div></div>
            </td>
            <td class="text-slate-300 font-mono">${p.pac}</td>
            <td class="text-slate-300 font-mono">${p.sho}</td>
            <td class="text-slate-300 font-mono">${p.pas}</td>
            <td class="text-slate-300 font-mono">${p.def}</td>
            <td class="text-slate-300 font-mono">${p.phy}</td>
        </tr>`;
    });
    document.getElementById('squad-ovr').textContent = getTeamOvr();
}

// --- TAB: TÁCTICAS (DRAG & DROP + AUTOFILL) ---
let dragSrc = { id: null, slot: null };

window.dragStart = function(e, pId, slotIndex) {
    dragSrc = { id: pId, slot: slotIndex };
    e.dataTransfer.effectAllowed = 'move';
    setTimeout(() => e.target.classList.add('opacity-50'), 0); 
};
window.dragEnd = function(e) { e.target.classList.remove('opacity-50'); };
window.allowDrop = function(e) { e.preventDefault(); };
window.dropOnPitch = function(e, targetSlotIndex) {
    e.preventDefault();
    if(!dragSrc.id) return;
    const targetPlayerId = state.lineup[targetSlotIndex];
    if (dragSrc.slot !== null) {
        state.lineup[dragSrc.slot] = targetPlayerId;
        state.lineup[targetSlotIndex] = dragSrc.id;
    } else {
        state.lineup[targetSlotIndex] = dragSrc.id;
    }
    saveState();
};
window.dropOnBench = function(e) {
    e.preventDefault();
    if (dragSrc.slot !== null) { state.lineup[dragSrc.slot] = null; saveState(); }
};

function changeFormation() { state.formation = document.getElementById('tactics-formation').value; saveState(); }

function renderTactics() {
    document.getElementById('tactics-formation').value = state.formation;
    const pitch = document.getElementById('pitch-players');
    const benchContainer = document.getElementById('bench-list');
    pitch.innerHTML = ''; benchContainer.innerHTML = '';

    const layouts = {
        '4-4-2': [ {x:50,y:85,c:'POR'}, {x:20,y:65,c:'DEF'},{x:40,y:70,c:'DEF'},{x:60,y:70,c:'DEF'},{x:80,y:65,c:'DEF'}, {x:20,y:35,c:'MED'},{x:40,y:40,c:'MED'},{x:60,y:40,c:'MED'},{x:80,y:35,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ],
        '4-3-3': [ {x:50,y:85,c:'POR'}, {x:20,y:70,c:'DEF'},{x:40,y:75,c:'DEF'},{x:60,y:75,c:'DEF'},{x:80,y:70,c:'DEF'}, {x:30,y:45,c:'MED'},{x:50,y:40,c:'MED'},{x:70,y:45,c:'MED'}, {x:20,y:20,c:'DEL'},{x:50,y:15,c:'DEL'},{x:80,y:20,c:'DEL'} ],
        '5-3-2': [ {x:50,y:85,c:'POR'}, {x:10,y:65,c:'DEF'},{x:30,y:75,c:'DEF'},{x:50,y:78,c:'DEF'},{x:70,y:75,c:'DEF'},{x:90,y:65,c:'DEF'}, {x:30,y:40,c:'MED'},{x:50,y:45,c:'MED'},{x:70,y:40,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ]
    };

    layouts[state.formation].forEach((pos, index) => {
        const playerId = state.lineup[index];
        const player = state.roster.find(p => p.id === playerId);
        let innerHTML = '';
        if(player) {
            innerHTML = `
                <div class="pitch-shirt" style="background-image:url(${player.img})" draggable="true" ondragstart="dragStart(event, ${player.id}, ${index})" ondragend="dragEnd(event)"></div>
                <div class="pitch-name">${player.name.split(' ')[0]} <span class="text-yellow-400 ml-1">${player.ovr}</span></div>
            `;
        } else {
            innerHTML = `<div class="pitch-shirt border-dashed bg-black/50 text-slate-400">+</div>`;
        }
        pitch.innerHTML += `<div class="pitch-player" style="left:${pos.x}%; top:${pos.y}%;" ondragover="allowDrop(event)" ondrop="dropOnPitch(event, ${index})">${innerHTML}</div>`;
    });

    const benchPlayers = state.roster.filter(p => !state.lineup.includes(p.id));
    benchPlayers.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        benchContainer.innerHTML += `
        <div class="bench-player flex items-center justify-between bg-slate-900 p-2 rounded-lg border border-slate-700" draggable="true" ondragstart="dragStart(event, ${p.id}, null)" ondragend="dragEnd(event)">
            <div class="flex items-center gap-3">
                <img src="${p.img}" class="w-8 h-8 rounded-full object-cover">
                <div>
                    <div class="text-white text-sm font-bold">${p.name}</div>
                    <span class="pos-badge ${pClass} text-[9px] w-auto px-2">${p.pos}</span>
                </div>
            </div>
            <span class="text-yellow-400 font-gaming font-bold bg-slate-800 px-2 py-1 rounded text-sm">${p.ovr}</span>
        </div>`;
    });
}

// BOTÓN MÁGICO: AUTOCOMPLETAR MEJOR 11
window.autoFillLineup = function() {
    const posMap = {
        '4-4-2': ['POR', 'DEF','DEF','DEF','DEF', 'MED','MED','MED','MED', 'DEL','DEL'],
        '4-3-3': ['POR', 'DEF','DEF','DEF','DEF', 'MED','MED','MED', 'DEL','DEL','DEL'],
        '5-3-2': ['POR', 'DEF','DEF','DEF','DEF','DEF', 'MED','MED','MED', 'DEL','DEL']
    };
    const targetLayout = posMap[state.formation];
    let newLineup = new Array(11).fill(null);
    const sortedRoster = [...state.roster].sort((a, b) => b.ovr - a.ovr);

    let pools = {
        'POR': sortedRoster.filter(p => p.pos === 'POR'),
        'DEF': sortedRoster.filter(p => p.pos === 'DEF'),
        'MED': sortedRoster.filter(p => p.pos === 'MED'),
        'DEL': sortedRoster.filter(p => p.pos === 'DEL')
    };

    let missing = [];
    for (let i = 0; i < 11; i++) {
        let neededPos = targetLayout[i];
        if (pools[neededPos].length > 0) newLineup[i] = pools[neededPos].shift().id;
        else missing.push(neededPos);
    }

    if (missing.length > 0) alert(`Atención: Te faltan jugadores para cubrir estas posiciones: ${missing.join(', ')}`);
    state.lineup = newLineup; saveState(); renderTactics();
};

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

    if(available.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-slate-500 py-6">Has vaciado esta zona del mercado.</td></tr>';
        return;
    }

    available.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        const canRep = state.stats.rep >= p.rep;
        const formatM = (p.priceBasic/1000000).toFixed(1)+'M';
        
        tbody.innerHTML += `
        <tr>
            <td><img src="${p.img}" class="player-avatar"></td>
            <td class="font-bold text-white text-base">${p.name}</td>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-gaming text-yellow-400 font-bold text-xl">${p.ovr}</td>
            <td class="${canRep ? 'text-slate-400' : 'text-red-500 font-bold'}">${p.rep} 🏆</td>
            <td><button class="btn-buy basic w-full" onclick="buyPlayer(${p.id}, 'basic')">FICHAR<br>€${formatM}</button></td>
            <td><button class="btn-buy premium w-full" onclick="buyPlayer(${p.id}, 'prem')">FICHAR<br>🪙 ${p.pricePrem}</button></td>
        </tr>`;
    });
}

function buyPlayer(id, curr) {
    const p = PLAYERS_DB.find(x => x.id === id);
    if(!p) return;
    if(state.stats.rep < p.rep) return alert(`No tienes reputación mundial suficiente (${p.rep} 🏆).`);
    
    if(curr === 'basic') {
        if(state.economy.coins < p.priceBasic) return alert("Presupuesto de traspasos insuficiente.");
        state.economy.coins -= p.priceBasic;
    } else {
        if(state.economy.premium < p.pricePrem) return alert("Monedas Premium insuficientes.");
        state.economy.premium -= p.pricePrem;
    }

    state.roster.push(p);
    
    const emptySlot = state.lineup.findIndex(slot => slot === null);
    if(emptySlot !== -1) state.lineup[emptySlot] = p.id;

    addEmail('Director Deportivo', `Fichaje Confirmado: ${p.name}`, `Hemos cerrado el traspaso. La afición está eufórica.`);
    saveState(); filterMarket(currentMarketFilter);
}

function buyIAP() {
    const val = prompt("Herramienta de Testing (MVP):\n\nMonedas premium a generar gratis:", "10000");
    if(val && !isNaN(val)) { state.economy.premium += parseInt(val); saveState(); }
}

// --- MOTOR DE PARTIDO (SIMULACIÓN FULL SCREEN) ---
function startMatch() {
    const xi = getStartingXI();
    if(xi.length < 11) return alert(`Faltan jugadores en el campo. Usa el botón "Mejor 11" en Tácticas.`);

    document.getElementById('app-layout').classList.add('hidden');
    // CORRECCIÓN DEL ID AQUÍ
    document.getElementById('match-modal').classList.remove('hidden');
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
    document.getElementById('match-progress').style.width = "0%";
    
    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML = "<div class='text-lg mb-2 text-white'>Los equipos saltan al terreno de juego. ¡Arranca el partido!</div>";

    const myProb = 0.08 + ((myOvr - botOvr) * 0.003); 
    const oppProb = 0.08 - ((myOvr - botOvr) * 0.003);

    let mG = 0, oG = 0, min = 0;
    const commentary = ["Posesión larga buscando huecos.", "Disparo potente que se va rozando el palo.", "Falta táctica en el centro del campo.", "Corte espectacular de la defensa.", "Juego muy físico en la medular.", "Centro al área que atrapa el portero."];

    const matchInterval = setInterval(() => {
        min += 6;
        document.getElementById('match-time').textContent = `${min}:00`;
        document.getElementById('match-progress').style.width = `${(min/90)*100}%`;

        if(min > 90) {
            clearInterval(matchInterval);
            finishMatch(mG, oG); return;
        }

        let eventText = commentary[Math.floor(Math.random() * commentary.length)];
        let rand = Math.random();

        if(rand < myProb) {
            mG++;
            const scorers = xi.filter(p => p.pos === 'DEL' || p.pos === 'MED');
            const scorer = scorers.length > 0 ? scorers[Math.floor(Math.random()*scorers.length)].name : "el equipo";
            eventText = `<span class="text-blue-400 font-bold text-lg">¡GOLAZO! Disparo imparable de ${scorer}. El estadio se cae.</span>`;
        } else if (rand > 1 - oppProb) {
            oG++;
            eventText = `<span class="text-red-400 font-bold text-lg">¡Gol del rival! Error defensivo que cuesta muy caro.</span>`;
        }

        logDiv.innerHTML += `<div><strong class="text-white">${min}':</strong> ${eventText}</div>`;
        logDiv.scrollTop = logDiv.scrollHeight; 
        document.getElementById('sim-home-score').textContent = mG;
        document.getElementById('sim-away-score').textContent = oG;
    }, 400); 
}

function finishMatch(mG, oG) {
    document.getElementById('match-post').classList.remove('hidden');
    document.getElementById('match-narrative').innerHTML += `<div class="mt-4 text-yellow-400 font-bold text-2xl">¡FINAL DEL PARTIDO!</div>`;
    document.getElementById('match-narrative').scrollTop = document.getElementById('match-narrative').scrollHeight;

    let coins = 0; let rep = 0; let resultText = "";

    if(mG > oG) {
        coins = 5000000; rep = 150; resultText = "¡Gran victoria!"; state.stats.wins++;
        getStartingXI().forEach(p => p.morale = Math.min(100, p.morale + 15));
    } else if (mG === oG) {
        coins = 1500000; rep = 50; resultText = "Empate disputado.";
        getStartingXI().forEach(p => p.morale = Math.min(100, p.morale + 5));
    } else {
        coins = 500000; rep = -10; resultText = "Derrota dolorosa.";
        getStartingXI().forEach(p => p.morale = Math.max(0, p.morale - 25));
    }

    state.stats.matches++;
    state.economy.coins += coins;
    state.stats.rep = Math.max(0, state.stats.rep + rep);
    
    addEmail('Cuerpo Técnico', `Análisis: ${mG}-${oG}`, `${resultText} Ingresos: +€${(coins/1000000).toFixed(1)}M. Revisa la moral en la plantilla.`);
    saveState();
    
    document.getElementById('match-coins').textContent = `+€${(coins/1000000).toFixed(1)}M`;
    document.getElementById('match-rep').textContent = rep > 0 ? `+${rep}` : rep;
    document.getElementById('match-rep').className = rep > 0 ? "text-blue-400 font-bold font-mono text-3xl" : "text-red-400 font-bold font-mono text-3xl";
}

function endMatchAndReturn() {
    // CORRECCIÓN DEL ID AQUÍ TAMBIÉN
    document.getElementById('match-modal').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');
    switchTab('dash'); 
}