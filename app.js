/* =========================================================================
   BASE DE DATOS: JUGADORES
   ========================================================================= */
function getAvatar(name) { return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true`; }

const PLAYERS_DB = [
    { id: 101, name: "L. Messi", pos: "DEL", pac: 80, sho: 93, pas: 94, def: 30, phy: 65, rep: 5000, priceBasic: 150000000, pricePrem: 12000, img: "https://i.pravatar.cc/150?u=messi" },
    { id: 102, name: "C. Ronaldo", pos: "DEL", pac: 82, sho: 95, pas: 80, def: 35, phy: 85, rep: 5000, priceBasic: 140000000, pricePrem: 11000, img: "https://i.pravatar.cc/150?u=cr7" },
    { id: 103, name: "K. Mbappé", pos: "DEL", pac: 99, sho: 92, pas: 85, def: 35, phy: 78, rep: 4500, priceBasic: 135000000, pricePrem: 10000, img: "https://i.pravatar.cc/150?u=mbappe" },
    { id: 201, name: "K. De Bruyne", pos: "MED", pac: 72, sho: 85, pas: 98, def: 65, phy: 75, rep: 4800, priceBasic: 110000000, pricePrem: 9000, img: "https://i.pravatar.cc/150?u=kdb" },
    { id: 301, name: "V. van Dijk", pos: "DEF", pac: 78, sho: 60, pas: 75, def: 95, phy: 90, rep: 4500, priceBasic: 95000000, pricePrem: 7800, img: "https://i.pravatar.cc/150?u=vandijk" },
    { id: 401, name: "T. Courtois", pos: "POR", pac: 40, sho: 20, pas: 65, def: 95, phy: 88, rep: 4000, priceBasic: 85000000, pricePrem: 6500, img: "https://i.pravatar.cc/150?u=courtois" },
    { id: 104, name: "Vini Jr.", pos: "DEL", pac: 95, sho: 86, pas: 85, def: 30, phy: 70, rep: 3500, priceBasic: 95000000, pricePrem: 7500, img: "https://i.pravatar.cc/150?u=vini" },
    { id: 202, name: "J. Bellingham", pos: "MED", pac: 82, sho: 85, pas: 88, def: 78, phy: 85, rep: 4500, priceBasic: 105000000, pricePrem: 8500, img: "https://i.pravatar.cc/150?u=jude" },
    { id: 302, name: "A. Rüdiger", pos: "DEF", pac: 85, sho: 40, pas: 70, def: 90, phy: 92, rep: 3500, priceBasic: 75000000, pricePrem: 6000, img: "https://i.pravatar.cc/150?u=rudiger" },
    { id: 402, name: "Alisson", pos: "POR", pac: 45, sho: 25, pas: 80, def: 92, phy: 85, rep: 3000, priceBasic: 65000000, pricePrem: 5000, img: "https://i.pravatar.cc/150?u=alisson" },
    { id: 105, name: "A. Griezmann", pos: "DEL", pac: 80, sho: 85, pas: 88, def: 50, phy: 70, rep: 2000, priceBasic: 55000000, pricePrem: 4500, img: "https://i.pravatar.cc/150?u=grizzi" },
    { id: 203, name: "Pedri", pos: "MED", pac: 78, sho: 70, pas: 92, def: 68, phy: 65, rep: 3000, priceBasic: 75000000, pricePrem: 6000, img: "https://i.pravatar.cc/150?u=pedri" },
    { id: 304, name: "D. Carvajal", pos: "DEF", pac: 80, sho: 50, pas: 80, def: 82, phy: 80, rep: 800, priceBasic: 20000000, pricePrem: 1500, img: "https://i.pravatar.cc/150?u=carvajal" },
    { id: 403, name: "U. Simón", pos: "POR", pac: 45, sho: 20, pas: 75, def: 85, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 900, img: "https://i.pravatar.cc/150?u=simon" },
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

const AI_TEAMS = [
    { name: "Madrid Kings", ovr: 88 }, { name: "Catalunya AC", ovr: 87 }, { name: "Atletico Titan", ovr: 85 },
    { name: "Basque Lions", ovr: 82 }, { name: "Sevilla Sur", ovr: 80 }, { name: "Valencia Bats", ovr: 78 },
    { name: "Galicia CF", ovr: 76 }, { name: "Betis Norte", ovr: 75 }, { name: "Villarreal Sun", ovr: 74 },
    { name: "Real Sebastian", ovr: 73 }, { name: "Celta Sky", ovr: 71 }, { name: "Mallorca Red", ovr: 70 },
    { name: "Osasuna Bulls", ovr: 68 }, { name: "Alaves Blue", ovr: 67 }, { name: "Rayo Thunder", ovr: 66 },
    { name: "Getafe Light", ovr: 65 }, { name: "Las Palmas FC", ovr: 64 }, { name: "Granada City", ovr: 63 },
    { name: "Cadiz Yellows", ovr: 62 }
];

function initLeague() {
    let league = [{ name: state.team.name, isUser: true, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 }];
    AI_TEAMS.forEach(ai => league.push({ name: ai.name, isUser: false, ovr: ai.ovr, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 }));
    return league;
}

/* =========================================================================
   BASE DE DATOS: USUARIOS (Clean State for NaNs)
   ========================================================================= */
let UsersDB = JSON.parse(localStorage.getItem('inafuma_users_db')) || [];
let state = null; 

function cleanState(s) {
    if(!s.stats) s.stats = {};
    s.stats.wins = Number(s.stats.wins) || 0;
    s.stats.draws = Number(s.stats.draws) || 0;
    s.stats.losses = Number(s.stats.losses) || 0;
    s.stats.matches = Number(s.stats.matches) || 0;
    s.stats.rep = Number(s.stats.rep) || 0;
    s.stats.matchday = Number(s.stats.matchday) || 1;
    if(!s.league || s.league.length === 0) { s.league = initLeague(); s.playedTeams = []; }
    if(!s.flags) s.flags = { canTrain: true, canTalk: true };
    if(!s.playedTeams) s.playedTeams = [];
    if(!s.roster) s.roster = [];
    return s;
}

window.onload = () => {
    if(!localStorage.getItem('inafuma_cookies')) document.getElementById('modal-cookies').classList.remove('hidden');
    const activeUserId = localStorage.getItem('inafuma_active_user');
    if(activeUserId) {
        let found = UsersDB.find(u => u.auth.user === activeUserId);
        if (found) state = cleanState(found);
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

window.acceptCookies = function() { localStorage.setItem('inafuma_cookies', 'true'); document.getElementById('modal-cookies').classList.add('hidden'); }

window.toggleAuth = function(mode) {
    if(mode === 'login') {
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.add('hidden');
        document.getElementById('tab-login').className = "flex-1 pb-2 text-blue-400 border-b-2 border-blue-400 font-bold cursor-pointer";
        document.getElementById('tab-register').className = "flex-1 pb-2 text-slate-400 hover:text-white font-bold cursor-pointer";
    } else {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('register-form').classList.remove('hidden');
        document.getElementById('tab-register').className = "flex-1 pb-2 text-blue-400 border-b-2 border-blue-400 font-bold cursor-pointer";
        document.getElementById('tab-login').className = "flex-1 pb-2 text-slate-400 hover:text-white font-bold cursor-pointer";
    }
}

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    if(UsersDB.find(u => u.auth.user === user)) return alert("El usuario ya existe.");
    state = cleanState({
        auth: { user, pass }, team: null, economy: { coins: 50000000, premium: 0 },
        roster: [], lineup: new Array(11).fill(null),
        inbox: [], formation: '4-4-2', league: [], playedTeams: []
    });
    UsersDB.push(state); localStorage.setItem('inafuma_active_user', user); localStorage.setItem('inafuma_users_db', JSON.stringify(UsersDB));
    routeView();
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;
    const foundUser = UsersDB.find(u => u.auth.user === user && u.auth.pass === pass);
    if(foundUser) { state = cleanState(foundUser); localStorage.setItem('inafuma_active_user', user); routeView(); } 
    else alert("Credenciales incorrectas.");
});

document.getElementById('setup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.team = { name: document.getElementById('set-team').value, manager: document.getElementById('set-manager').value, color: document.querySelector('input[name="color"]:checked').value };
    state.league = initLeague();
    const initialIDs = [404, 308, 307, 306, 305, 207, 206, 205, 108, 107, 106];
    state.roster = initialIDs.map(id => JSON.parse(JSON.stringify(PLAYERS_DB.find(p => p.id === id))));
    state.lineup = [...initialIDs];
    addEmail('Directiva', 'Bienvenido al Club', `Míster ${state.team.manager}, la temporada consta de 38 jornadas. Tiene 50M EUR de presupuesto. Le hemos asignado un 11 inicial básico.`);
    saveState(); routeView();
});

window.logout = function() { state = null; localStorage.removeItem('inafuma_active_user'); routeView(); }
window.toggleProfileMenu = function() { document.getElementById('profile-dropdown').classList.toggle('hidden'); }

function routeView() {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    if(!state) document.getElementById('view-landing').classList.remove('hidden');
    else if(!state.team) document.getElementById('view-setup').classList.remove('hidden');
    else { document.getElementById('app-layout').classList.remove('hidden'); updateUI(); switchTab('dash'); }
}

function updateUI() {
    if(!state || !state.team) return;
    const formatM = (num) => num >= 1000000 ? (num/1000000).toFixed(1)+'M' : num.toLocaleString();
    document.getElementById('ui-rep').textContent = state.stats.rep;
    document.getElementById('ui-coins').textContent = formatM(state.economy.coins);
    document.getElementById('ui-prem').textContent = state.economy.premium;
    document.getElementById('ui-jornada').textContent = state.stats.matchday || 1;
    document.getElementById('top-teamname').textContent = state.team.name;
    document.getElementById('top-manager').textContent = state.team.manager;
    document.getElementById('top-shield').style.backgroundColor = state.team.color;
    document.getElementById('top-shield').textContent = state.team.name.substring(0,3).toUpperCase();
    document.getElementById('dash-ovr-big').textContent = getTeamOvr();
    document.getElementById('dash-matches').textContent = state.stats.matches;
    document.getElementById('dash-wins').textContent = state.stats.wins;
    document.getElementById('dash-draws').textContent = state.stats.draws;
    document.getElementById('dash-losses').textContent = state.stats.losses;
    renderInbox(); renderSquad();
}

window.switchTab = function(tabId) {
    document.querySelectorAll('.fm-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    document.getElementById('nav-' + tabId).classList.add('active');
    if(tabId === 'market') filterMarket();
    if(tabId === 'tactics') renderTactics();
    if(tabId === 'league') renderLeague();
}

/* =========================================================================
   SQUAD & TACTICS (DRAG & DROP REAL)
   ========================================================================= */
function getStartingXI() { return state.lineup.map(id => state.roster.find(p => p.id === id)).filter(p => p !== undefined); }
function getTeamOvr() { const xi = getStartingXI(); return xi.length ? Math.round(xi.reduce((acc, p) => acc + (p.ovr * (1 + ((p.morale - 50) / 200))), 0) / xi.length) : 0; }

function renderSquad() {
    const tbody = document.getElementById('squad-tbody'); if(!tbody) return;
    tbody.innerHTML = '';
    const posOrder = { 'POR': 1, 'DEF': 2, 'MED': 3, 'DEL': 4 };
    const sorted = [...state.roster].sort((a,b) => posOrder[a.pos] - posOrder[b.pos] || b.ovr - a.ovr);
    sorted.forEach(p => {
        let moralColor = p.morale >= 80 ? '#10b981' : p.morale >= 40 ? '#f59e0b' : '#ef4444';
        tbody.innerHTML += `<tr><td><img src="${p.img}" class="player-avatar"></td><td><span class="pos-badge pos-${p.pos.toLowerCase()}">${p.pos}</span></td><td class="font-bold text-white">${p.name}</td><td class="font-gaming text-yellow-400 font-bold">${p.ovr}</td><td><div class="w-full h-2 bg-slate-700 rounded overflow-hidden"><div class="h-full" style="width:${p.morale}%; background:${moralColor}"></div></div></td><td class="text-slate-300 font-mono">${p.pac}</td><td class="text-slate-300 font-mono">${p.sho}</td><td class="text-slate-300 font-mono">${p.pas}</td><td class="text-slate-300 font-mono">${p.def}</td><td class="text-slate-300 font-mono">${p.phy}</td></tr>`;
    });
    document.getElementById('squad-ovr').textContent = getTeamOvr();
}

let dragSrc = { id: null, slot: null };
window.dragStart = function(e, pId, slotIndex) { dragSrc = { id: pId, slot: slotIndex }; setTimeout(() => e.target.classList.add('opacity-50'), 0); };
window.dragEnd = function(e) { e.target.classList.remove('opacity-50'); };
window.allowDrop = function(e) { e.preventDefault(); };
window.dropOnPitch = function(e, targetSlotIndex) {
    e.preventDefault(); if(!dragSrc.id) return;
    const targetPlayerId = state.lineup[targetSlotIndex];
    if (dragSrc.slot !== null) { state.lineup[dragSrc.slot] = targetPlayerId; state.lineup[targetSlotIndex] = dragSrc.id; } 
    else { state.lineup[targetSlotIndex] = dragSrc.id; }
    saveState(); renderTactics();
};
window.dropOnBench = function(e) { e.preventDefault(); if (dragSrc.slot !== null) { state.lineup[dragSrc.slot] = null; saveState(); renderTactics(); } };

window.changeFormation = function() { state.formation = document.getElementById('tactics-formation').value; saveState(); renderTactics(); }
window.autoFillLineup = function() {
    const posMap = { '4-4-2': ['POR','DEF','DEF','DEF','DEF','MED','MED','MED','MED','DEL','DEL'], '4-3-3': ['POR','DEF','DEF','DEF','DEF','MED','MED','MED','DEL','DEL','DEL'], '5-3-2': ['POR','DEF','DEF','DEF','DEF','DEF','MED','MED','MED','DEL','DEL'], '3-4-3': ['POR','DEF','DEF','DEF','MED','MED','MED','MED','DEL','DEL','DEL'], '4-2-3-1': ['POR','DEF','DEF','DEF','DEF','MED','MED','MED','MED','MED','DEL'], '5-4-1': ['POR','DEF','DEF','DEF','DEF','DEF','MED','MED','MED','MED','DEL'] };
    const layout = posMap[state.formation];
    let nl = new Array(11).fill(null);
    let av = [...state.roster].sort((a,b) => b.ovr - a.ovr);
    for(let i=0; i<11; i++){
        let needed = layout[i];
        let idx = av.findIndex(p => p.pos === needed);
        if(idx !== -1) { nl[i] = av[idx].id; av.splice(idx,1); }
    }
    for(let i=0; i<11; i++) if(!nl[i] && av.length) { nl[i] = av[0].id; av.splice(0,1); }
    state.lineup = nl; saveState(); renderTactics();
};

function renderTactics() {
    const pitch = document.getElementById('pitch-players');
    const bench = document.getElementById('bench-list');
    if(!pitch || !bench) return;
    pitch.innerHTML = ''; bench.innerHTML = '';
    const layouts = { 
        '4-4-2': [{x:50,y:85},{x:20,y:65},{x:40,y:70},{x:60,y:70},{x:80,y:65},{x:20,y:35},{x:40,y:40},{x:60,y:40},{x:80,y:35},{x:40,y:15},{x:60,y:15}],
        '4-3-3': [{x:50,y:85},{x:20,y:70},{x:40,y:75},{x:60,y:75},{x:80,y:70},{x:30,y:45},{x:50,y:40},{x:70,y:45},{x:20,y:20},{x:50,y:15},{x:80,y:20}],
        '5-3-2': [{x:50,y:85},{x:10,y:65},{x:30,y:75},{x:50,y:78},{x:70,y:75},{x:90,y:65},{x:30,y:40},{x:50,y:45},{x:70,y:40},{x:40,y:15},{x:60,y:15}],
        '3-4-3': [{x:50,y:85},{x:25,y:70},{x:50,y:75},{x:75,y:70},{x:15,y:45},{x:38,y:40},{x:62,y:40},{x:85,y:45},{x:25,y:20},{x:50,y:15},{x:75,y:20}],
        '4-2-3-1': [{x:50,y:85},{x:20,y:70},{x:40,y:75},{x:60,y:75},{x:80,y:70},{x:35,y:50},{x:65,y:50},{x:20,y:25},{x:50,y:20},{x:80,y:25},{x:50,y:10}],
        '5-4-1': [{x:50,y:85},{x:10,y:65},{x:30,y:75},{x:50,y:78},{x:70,y:75},{x:90,y:65},{x:20,y:40},{x:40,y:45},{x:60,y:45},{x:80,y:40},{x:50,y:15}]
    };
    layouts[state.formation].forEach((pos, i) => {
        const player = state.roster.find(x => x.id === state.lineup[i]);
        let html = player ? `<div class="pitch-shirt" style="background-image:url(${player.img})" draggable="true" ondragstart="dragStart(event, ${player.id}, ${i})"></div><div class="pitch-name">${player.name}</div>` : `<div class="pitch-shirt bg-black/40 border-dashed">+</div>`;
        pitch.innerHTML += `<div class="pitch-player" style="left:${pos.x}%; top:${pos.y}%" ondragover="allowDrop(event)" ondrop="dropOnPitch(event, ${i})">${html}</div>`;
    });
    state.roster.filter(x => !state.lineup.includes(x.id)).forEach(x => {
        let pClass = `pos-${x.pos.toLowerCase()}`;
        bench.innerHTML += `<div class="bench-player flex items-center justify-between bg-slate-900 p-2 rounded border border-slate-700 mb-2" draggable="true" ondragstart="dragStart(event, ${x.id}, null)"><div class="flex items-center gap-3"><img src="${x.img}" class="w-8 h-8 rounded-full"><div><div class="text-white text-xs font-bold">${x.name}</div><span class="pos-badge ${pClass} text-[8px] w-auto px-1">${x.pos}</span></div></div><span class="text-yellow-400 font-bold text-xs">${x.ovr}</span></div>`;
    });
}

/* =========================================================================
   MARKET & LEAGUE
   ========================================================================= */
let marketMode = 'buy';
window.setMarketMode = function(mode) { marketMode = mode; filterMarket(); }
window.filterMarket = function(pos) {
    if(pos) currentMarketFilter = pos;
    const search = document.getElementById('market-search').value.toLowerCase();
    const tb = document.getElementById('market-tbody'); tb.innerHTML = '';
    let list = marketMode==='buy' ? PLAYERS_DB.filter(p => !state.roster.find(r => r.id === p.id)) : state.roster;
    if(currentMarketFilter !== 'ALL') list = list.filter(p => p.pos === currentMarketFilter);
    if(search) list = list.filter(p => p.name.toLowerCase().includes(search));
    list.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        if(marketMode === 'buy') {
            tb.innerHTML += `<tr><td><img src="${p.img}" class="player-avatar"></td><td class="font-bold text-white">${p.name}</td><td><span class="pos-badge ${pClass}">${p.pos}</span></td><td class="font-gaming text-yellow-400 font-bold text-xl">${p.ovr}</td><td>REP: ${p.rep}</td><td><button class="btn-buy basic w-full" onclick="buyPlayer(${p.id}, 'basic')">FICHAR €${(p.priceBasic/1000000).toFixed(1)}M</button></td><td><button class="btn-buy premium w-full" onclick="buyPlayer(${p.id}, 'prem')">◈ ${p.pricePrem}</button></td></tr>`;
        } else {
            tb.innerHTML += `<tr><td><img src="${p.img}" class="player-avatar"></td><td class="font-bold text-white">${p.name}</td><td><span class="pos-badge ${pClass}">${p.pos}</span></td><td class="font-gaming text-yellow-400 font-bold text-xl">${p.ovr}</td><td>-</td><td colspan="2"><button class="btn-sell w-full" onclick="sellPlayer(${p.id})">VENDER POR €${(p.priceBasic*0.6/1000000).toFixed(1)}M</button></td></tr>`;
        }
    });
}
window.buyPlayer = function(id, curr) {
    const p = PLAYERS_DB.find(x => x.id === id);
    if(state.stats.rep < p.rep) return alert("Reputación insuficiente.");
    if(curr==='basic' ? state.economy.coins >= p.priceBasic : state.economy.premium >= p.pricePrem) {
        if(curr==='basic') state.economy.coins -= p.priceBasic; else state.economy.premium -= p.pricePrem;
        state.roster.push(JSON.parse(JSON.stringify(p)));
        const empty = state.lineup.findIndex(s => s === null); if(empty !== -1) state.lineup[empty] = p.id;
        saveState(); filterMarket();
    } else alert("Fondos insuficientes.");
}
window.sellPlayer = function(id) {
    if(!confirm("Vender?")) return;
    const idx = state.roster.findIndex(x => x.id === id);
    state.economy.coins += state.roster[idx].priceBasic * 0.6;
    state.roster.splice(idx, 1);
    for(let i=0; i<11; i++) if(state.lineup[i] === id) state.lineup[i] = null;
    saveState(); filterMarket();
}

function renderLeague() {
    const tbody = document.getElementById('league-tbody'); tbody.innerHTML = '';
    const sorted = [...state.league].sort((a,b) => b.pts - a.pts || (b.gf-b.ga) - (a.gf-a.ga));
    sorted.forEach((t, i) => {
        tbody.innerHTML += `<tr class="${t.isUser?'user-row':''}"><td>${i+1}</td><td class="text-white">${t.name}</td><td>${t.pld}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${t.gf}</td><td>${t.ga}</td><td>${t.gf-t.ga}</td><td class="text-yellow-400 font-bold">${t.pts}</td></tr>`;
    });
}

function updateTeamStats(team, gf, ga) {
    if(!team) return;
    team.pld++; team.gf+=gf; team.ga+=ga;
    if(gf>ga) { team.w++; team.pts+=3; } else if(gf===ga) { team.d++; team.pts+=1; } else { team.l++; }
}

/* =========================================================================
   MATCH ENGINE (CON HALFTIME Y CAMBIOS)
   ========================================================================= */
let match = { min: 0, mG: 0, oG: 0, talk: 0, interval: null, opponent: null };
window.startMatch = function() {
    const xi = getStartingXI(); if(xi.length < 11) return alert("Pon a 11 tíos.");
    match.opponent = state.league.find(t => !t.isUser && !state.playedTeams.includes(t.name));
    if(!match.opponent) return alert("Temporada finalizada.");
    document.getElementById('app-layout').classList.add('hidden');
    document.getElementById('match-modal').classList.remove('hidden');
    document.getElementById('match-post').classList.add('hidden');
    document.getElementById('match-halftime').classList.add('hidden');
    document.getElementById('sim-home-shield').style.backgroundColor = state.team.color;
    document.getElementById('sim-home-shield').textContent = state.team.name.substring(0,3);
    document.getElementById('sim-home-name').textContent = state.team.name;
    document.getElementById('sim-away-name').textContent = match.opponent.name;
    document.getElementById('sim-home-ovr').textContent = getTeamOvr();
    document.getElementById('sim-away-ovr').textContent = match.opponent.ovr;
    match.min = 0; match.mG = 0; match.oG = 0; match.talk = 0;
    document.getElementById('sim-home-score').textContent = "0"; document.getElementById('sim-away-score').textContent = "0";
    document.getElementById('match-narrative').innerHTML = "Empieza el partido.";
    runLoop(45);
};

function runLoop(limit) {
    const myOvr = getTeamOvr();
    const prob = 0.08 + ((myOvr - match.opponent.ovr) * 0.003) + match.talk;
    match.interval = setInterval(() => {
        match.min += 3;
        document.getElementById('match-time').textContent = match.min + ":00";
        document.getElementById('match-progress').style.width = (match.min/90)*100 + "%";
        if(Math.random() < prob * 0.4) match.mG++; else if(Math.random() > 1 - 0.08*0.4) match.oG++;
        document.getElementById('sim-home-score').textContent = match.mG;
        document.getElementById('sim-away-score').textContent = match.oG;
        if(match.min === 45 && limit === 45) { clearInterval(match.interval); document.getElementById('match-halftime').classList.remove('hidden'); }
        if(match.min >= 90) { clearInterval(match.interval); finishMatch(); }
    }, 400);
}

window.matchTalk = (t) => { match.talk = t==='animar' ? 0.01 : 0.02; document.getElementById('btn-animar').disabled=true; document.getElementById('btn-exigir').disabled=true; };
window.resumeMatch = () => { document.getElementById('match-halftime').classList.add('hidden'); runLoop(90); };
window.goToTacticsFromMatch = () => { document.getElementById('match-modal').classList.add('hidden'); document.getElementById('app-layout').classList.remove('hidden'); switchTab('tactics'); };

function finishMatch() {
    const win = match.mG > match.oG; const draw = match.mG === match.oG;
    const res = win ? {p:3, c:5000000, r:150} : (draw ? {p:1, c:1500000, r:50} : {p:0, c:500000, r:-10});
    state.economy.coins += res.c; state.stats.rep += res.r; state.stats.matches++;
    if(win) state.stats.wins++; else if(draw) state.stats.draws++; else state.stats.losses++;
    updateTeamStats(state.league.find(t=>t.isUser), match.mG, match.oG);
    updateTeamStats(state.league.find(t=>t.name===match.opponent.name), match.oG, match.mG);
    state.playedTeams.push(match.opponent.name); state.stats.matchday++;
    document.getElementById('match-post').classList.remove('hidden');
    document.getElementById('match-coins').textContent = `+€${(res.c/1000000).toFixed(1)}M`;
    document.getElementById('match-pts').textContent = `+${res.p} PTS | REP: ${res.r}`;
    saveState();
}

window.endMatchAndReturn = () => { document.getElementById('match-modal').classList.add('hidden'); document.getElementById('app-layout').classList.remove('hidden'); switchTab('league'); };

window.buyIAP = () => { document.getElementById('modal-store').classList.remove('hidden'); };
window.confirmIAP = () => { state.economy.premium += Number(document.getElementById('dev-coins-input').value); saveState(); document.getElementById('modal-store').classList.add('hidden'); };

function renderInbox() {
    const list = document.getElementById('inbox-list'); if(!list) return;
    list.innerHTML = state.inbox.length ? '' : '<div class="text-slate-500 italic text-sm text-center">Sin novedades.</div>';
    state.inbox.forEach(m => { list.innerHTML += `<div class="bg-slate-800/50 p-4 rounded border border-blue-500/30"><div class="flex justify-between text-xs text-blue-400 mb-1"><span>${m.sender}</span><span>${m.date}</span></div><div class="font-bold text-white mb-1">${m.subject}</div><div class="text-xs text-slate-300">${m.body}</div></div>`; });
}