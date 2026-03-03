/* =========================================================================
   BASE DE DATOS: JUGADORES Y AVATARES
   ========================================================================= */
function getAvatar(name) { return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&bold=true`; }

const PLAYERS_DB = [
    { id: 101, name: "Lionel Messi", pos: "DEL", pac: 80, sho: 93, pas: 94, def: 30, phy: 65, rep: 5000, priceBasic: 150000000, pricePrem: 12000, img: getAvatar("Messi") },
    { id: 102, name: "Cristiano Ronaldo", pos: "DEL", pac: 82, sho: 95, pas: 80, def: 35, phy: 85, rep: 5000, priceBasic: 140000000, pricePrem: 11000, img: getAvatar("C R 7") },
    { id: 103, name: "Kylian Mbappé", pos: "DEL", pac: 99, sho: 92, pas: 85, def: 35, phy: 78, rep: 4500, priceBasic: 135000000, pricePrem: 10000, img: getAvatar("Mbappe") },
    { id: 201, name: "Kevin De Bruyne", pos: "MED", pac: 72, sho: 85, pas: 98, def: 65, phy: 75, rep: 4800, priceBasic: 110000000, pricePrem: 9000, img: getAvatar("De Bruyne") },
    { id: 301, name: "Virgil van Dijk", pos: "DEF", pac: 78, sho: 60, pas: 75, def: 95, phy: 90, rep: 4500, priceBasic: 95000000, pricePrem: 7800, img: getAvatar("V Dijk") },
    { id: 401, name: "Thibaut Courtois", pos: "POR", pac: 40, sho: 20, pas: 65, def: 95, phy: 88, rep: 4000, priceBasic: 85000000, pricePrem: 6500, img: getAvatar("Courtois") },
    { id: 104, name: "Vini Jr.", pos: "DEL", pac: 95, sho: 86, pas: 85, def: 30, phy: 70, rep: 3500, priceBasic: 95000000, pricePrem: 7500, img: getAvatar("Vini Jr") },
    { id: 202, name: "Jude Bellingham", pos: "MED", pac: 82, sho: 85, pas: 88, def: 78, phy: 85, rep: 4500, priceBasic: 105000000, pricePrem: 8500, img: getAvatar("Bellingham") },
    { id: 302, name: "Antonio Rüdiger", pos: "DEF", pac: 85, sho: 40, pas: 70, def: 90, phy: 92, rep: 3500, priceBasic: 75000000, pricePrem: 6000, img: getAvatar("Rudiger") },
    { id: 402, name: "Alisson Becker", pos: "POR", pac: 45, sho: 25, pas: 80, def: 92, phy: 85, rep: 3000, priceBasic: 65000000, pricePrem: 5000, img: getAvatar("Alisson") },
    { id: 105, name: "A. Griezmann", pos: "DEL", pac: 80, sho: 85, pas: 88, def: 50, phy: 70, rep: 2000, priceBasic: 55000000, pricePrem: 4500, img: getAvatar("Griezmann") },
    { id: 203, name: "Pedri González", pos: "MED", pac: 78, sho: 70, pas: 92, def: 68, phy: 65, rep: 3000, priceBasic: 75000000, pricePrem: 6000, img: getAvatar("Pedri") },
    { id: 304, name: "Dani Carvajal", pos: "DEF", pac: 80, sho: 50, pas: 80, def: 82, phy: 80, rep: 800, priceBasic: 20000000, pricePrem: 1500, img: getAvatar("Carvajal") },
    { id: 403, name: "Unai Simón", pos: "POR", pac: 45, sho: 20, pas: 75, def: 85, phy: 75, rep: 400, priceBasic: 12000000, pricePrem: 900, img: getAvatar("Simon") },
    { id: 106, name: "Joselu", pos: "DEL", pac: 65, sho: 82, pas: 68, def: 40, phy: 82, rep: 0, priceBasic: 5000000, pricePrem: 400, img: getAvatar("Joselu") },
    { id: 107, name: "Borja Iglesias", pos: "DEL", pac: 60, sho: 80, pas: 65, def: 35, phy: 85, rep: 0, priceBasic: 4000000, pricePrem: 300, img: getAvatar("Iglesias") },
    { id: 108, name: "Hugo Duro", pos: "DEL", pac: 75, sho: 75, pas: 65, def: 40, phy: 75, rep: 0, priceBasic: 3000000, pricePrem: 200, img: getAvatar("Duro") },
    { id: 204, name: "Sergi Darder", pos: "MED", pac: 68, sho: 75, pas: 80, def: 70, phy: 70, rep: 0, priceBasic: 4000000, pricePrem: 300, img: getAvatar("Darder") },
    { id: 205, name: "Isco Alarcón", pos: "MED", pac: 62, sho: 78, pas: 85, def: 45, phy: 60, rep: 0, priceBasic: 5000000, pricePrem: 400, img: getAvatar("Isco") },
    { id: 206, name: "Pepelu", pos: "MED", pac: 60, sho: 65, pas: 78, def: 75, phy: 75, rep: 0, priceBasic: 2500000, pricePrem: 150, img: getAvatar("Pepelu") },
    { id: 207, name: "Óscar Trejo", pos: "MED", pac: 65, sho: 70, pas: 78, def: 50, phy: 60, rep: 0, priceBasic: 1500000, pricePrem: 100, img: getAvatar("Trejo") },
    { id: 305, name: "Pau Cubarsí", pos: "DEF", pac: 75, sho: 40, pas: 78, def: 80, phy: 75, rep: 0, priceBasic: 8000000, pricePrem: 600, img: getAvatar("Cubarsi") },
    { id: 306, name: "David García", pos: "DEF", pac: 65, sho: 45, pas: 60, def: 82, phy: 85, rep: 0, priceBasic: 4500000, pricePrem: 350, img: getAvatar("Garcia") },
    { id: 307, name: "Pablo Maffeo", pos: "DEF", pac: 82, sho: 55, pas: 70, def: 75, phy: 78, rep: 0, priceBasic: 2500000, pricePrem: 200, img: getAvatar("Maffeo") },
    { id: 308, name: "Jesús Navas", pos: "DEF", pac: 75, sho: 60, pas: 80, def: 70, phy: 60, rep: 0, priceBasic: 1500000, pricePrem: 100, img: getAvatar("Navas") },
    { id: 309, name: "Harry Maguire", pos: "DEF", pac: 48, sho: 50, pas: 65, def: 78, phy: 85, rep: 0, priceBasic: 2000000, pricePrem: 150, img: getAvatar("Maguire") },
    { id: 404, name: "David Soria", pos: "POR", pac: 35, sho: 10, pas: 60, def: 80, phy: 78, rep: 0, priceBasic: 3000000, pricePrem: 200, img: getAvatar("Soria") },
    { id: 405, name: "P. Gazzaniga", pos: "POR", pac: 42, sho: 15, pas: 68, def: 78, phy: 75, rep: 0, priceBasic: 2000000, pricePrem: 150, img: getAvatar("Gazzaniga") }
];

function calcPlayerOVR(p) {
    if(p.pos === 'DEL') return Math.round((p.pac*0.20) + (p.sho*0.45) + (p.phy*0.15) + (p.pas*0.20));
    if(p.pos === 'MED') return Math.round((p.pac*0.10) + (p.pas*0.45) + (p.def*0.25) + (p.phy*0.20));
    if(p.pos === 'DEF') return Math.round((p.pac*0.15) + (p.def*0.50) + (p.phy*0.25) + (p.pas*0.10));
    if(p.pos === 'POR') return Math.round((p.def*0.70) + (p.phy*0.20) + (p.pas*0.10));
    return 50;
}
PLAYERS_DB.forEach(p => { p.ovr = calcPlayerOVR(p); p.morale = 100; p.con = 100; }); // Añadido Condición (CON)

/* =========================================================================
   EQUIPOS IA
   ========================================================================= */
const AI_TEAMS = [
    { name: "Madrid Kings", ovr: 88, c1: "#ffffff", c2: "#e2e8f0", shape: "shape-shield" },
    { name: "Catalunya AC", ovr: 87, c1: "#b91c1c", c2: "#1d4ed8", shape: "shape-shield" },
    { name: "Atletico Titan", ovr: 85, c1: "#ef4444", c2: "#ffffff", shape: "shape-circle" },
    { name: "Basque Lions", ovr: 82, c1: "#dc2626", c2: "#ffffff", shape: "shape-hexagon" },
    { name: "Sevilla Sur", ovr: 80, c1: "#ffffff", c2: "#dc2626", shape: "shape-shield" },
    { name: "Valencia Bats", ovr: 78, c1: "#ffffff", c2: "#0f172a", shape: "shape-circle" },
    { name: "Galicia CF", ovr: 76, c1: "#60a5fa", c2: "#ffffff", shape: "shape-shield" },
    { name: "Betis Norte", ovr: 75, c1: "#16a34a", c2: "#ffffff", shape: "shape-circle" },
    { name: "Villarreal Sun", ovr: 74, c1: "#eab308", c2: "#ca8a04", shape: "shape-shield" },
    { name: "Real Sebastian", ovr: 73, c1: "#1d4ed8", c2: "#ffffff", shape: "shape-circle" },
    { name: "Celta Sky", ovr: 71, c1: "#93c5fd", c2: "#ffffff", shape: "shape-shield" },
    { name: "Mallorca Red", ovr: 70, c1: "#ef4444", c2: "#0f172a", shape: "shape-hexagon" },
    { name: "Osasuna Bulls", ovr: 68, c1: "#991b1b", c2: "#1e293b", shape: "shape-shield" },
    { name: "Alaves Blue", ovr: 67, c1: "#1e3a8a", c2: "#ffffff", shape: "shape-circle" },
    { name: "Rayo Thunder", ovr: 66, c1: "#ffffff", c2: "#dc2626", shape: "shape-shield" },
    { name: "Getafe Light", ovr: 65, c1: "#2563eb", c2: "#1e40af", shape: "shape-circle" },
    { name: "Las Palmas FC", ovr: 64, c1: "#fde047", c2: "#1e293b", shape: "shape-shield" },
    { name: "Granada City", ovr: 63, c1: "#b91c1c", c2: "#ffffff", shape: "shape-hexagon" },
    { name: "Cadiz Yellows", ovr: 62, c1: "#facc15", c2: "#1e3a8a", shape: "shape-shield" }
];

function initLeague() {
    let league = [{ name: state.team.name, isUser: true, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 }];
    AI_TEAMS.forEach(ai => league.push({ name: ai.name, isUser: false, ovr: ai.ovr, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0, badge: ai }));
    return league;
}

/* =========================================================================
   SISTEMA LOCAL, ALERTAS Y LIMPIEZA
   ========================================================================= */
let UsersDB = JSON.parse(localStorage.getItem('inafuma_users_db')) || [];
let state = null; 

window.showAlert = function(msg) {
    document.getElementById('alert-message').textContent = msg;
    document.getElementById('custom-alert').classList.remove('hidden');
}
window.closeAlert = function() { document.getElementById('custom-alert').classList.add('hidden'); }

let confirmCallback = null;
window.showConfirm = function(msg, callback) {
    document.getElementById('confirm-message').textContent = msg;
    confirmCallback = callback;
    document.getElementById('custom-confirm').classList.remove('hidden');
}
window.closeConfirm = function(result) {
    document.getElementById('custom-confirm').classList.add('hidden');
    if(result && confirmCallback) confirmCallback();
}

function cleanState(s) {
    if(!s.stats) s.stats = {};
    s.stats.wins = Number(s.stats.wins) || 0;
    s.stats.draws = Number(s.stats.draws) || 0;
    s.stats.losses = Number(s.stats.losses) || 0;
    s.stats.matches = Number(s.stats.matches) || 0;
    s.stats.rep = Number(s.stats.rep) || 0;
    s.stats.matchday = Number(s.stats.matchday) || 1;
    s.stats.goals = Number(s.stats.goals) || 0;
    s.stats.trophies = Number(s.stats.trophies) || 0;
    
    if(!s.league || s.league.length === 0) { 
        s.league = [{ name: s.team ? s.team.name : "Tú", isUser: true, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0 }];
        AI_TEAMS.forEach(ai => s.league.push({ name: ai.name, isUser: false, ovr: ai.ovr, pld:0, w:0, d:0, l:0, gf:0, ga:0, pts:0, badge: ai }));
    } else {
        s.league.forEach(t => { if(!t.isUser && !t.badge) t.badge = AI_TEAMS.find(ai => ai.name === t.name) || AI_TEAMS[0]; });
    }

    if(!s.flags) s.flags = { canTrain: true, canTalk: true };
    if(!s.playedTeams) s.playedTeams = []; 
    if(!s.roster) s.roster = [];
    // Inicializar condición (stamina) si no existe en viejas partidas
    s.roster.forEach(p => { if(p.con === undefined) p.con = 100; });
    if(!s.lineup || s.lineup.length !== 11) s.lineup = new Array(11).fill(null);
    
    if(s.team && !s.team.shape) { s.team.shape = "shape-shield"; s.team.c1 = s.team.color || "#e11d48"; s.team.c2 = "#1e293b"; }
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
    const d = new Date();
    document.getElementById('date-display').textContent = `${d.getDate()} ${d.toLocaleString('es', {month:'short'}).toUpperCase()} ${d.getFullYear()}`;
};

function saveState() { 
    if(!state) return;
    const index = UsersDB.findIndex(u => u.auth.user === state.auth.user);
    if(index !== -1) UsersDB[index] = state;
    localStorage.setItem('inafuma_users_db', JSON.stringify(UsersDB));
    updateUI(); 
}

window.acceptCookies = function() { localStorage.setItem('inafuma_cookies', 'true'); document.getElementById('modal-cookies').classList.add('hidden'); }

window.toggleAuth = function(mode) {
    document.getElementById('login-form').classList.toggle('hidden', mode!=='login');
    document.getElementById('register-form').classList.toggle('hidden', mode!=='register');
    document.getElementById('tab-login').classList.toggle('border-red-500', mode==='login');
    document.getElementById('tab-login').classList.toggle('text-white', mode==='login');
    document.getElementById('tab-login').classList.toggle('text-slate-500', mode!=='login');
    document.getElementById('tab-register').classList.toggle('border-red-500', mode==='register');
    document.getElementById('tab-register').classList.toggle('text-white', mode==='register');
    document.getElementById('tab-register').classList.toggle('text-slate-500', mode!=='register');
}

document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    if(UsersDB.find(u => u.auth.user === user)) return showAlert("El usuario ya existe.");
    
    state = cleanState({
        auth: { user, pass }, team: null, economy: { coins: 50000000, premium: 0 },
        roster: [], lineup: new Array(11).fill(null), inbox: [], formation: '4-4-2', league: [], playedTeams: []
    });
    UsersDB.push(state); localStorage.setItem('inafuma_active_user', user); saveState(); routeView();
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('log-user').value;
    const pass = document.getElementById('log-pass').value;
    const foundUser = UsersDB.find(u => u.auth.user === user && u.auth.pass === pass);
    if(foundUser) { state = cleanState(foundUser); localStorage.setItem('inafuma_active_user', user); routeView(); } 
    else showAlert("Credenciales incorrectas.");
});

window.updatePreviewBadge = function() {
    const shape = document.getElementById('set-shape').value;
    const c1 = document.getElementById('set-c1').value;
    const c2 = document.getElementById('set-c2').value;
    const badge = document.getElementById('preview-badge');
    const teamName = document.getElementById('set-team').value || "CLUB";
    badge.className = `w-12 h-14 club-badge text-[10px] ${shape}`;
    badge.style.background = `linear-gradient(135deg, ${c1} 50%, ${c2} 50%)`;
    badge.textContent = teamName.substring(0,4).toUpperCase();
}

document.getElementById('set-team').addEventListener('input', updatePreviewBadge);

document.getElementById('setup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.team = { 
        name: document.getElementById('set-team').value, 
        manager: document.getElementById('set-manager').value, 
        shape: document.getElementById('set-shape').value,
        c1: document.getElementById('set-c1').value,
        c2: document.getElementById('set-c2').value
    };
    state.league = initLeague();
    
    const initialIDs = [404, 309, 308, 307, 306, 207, 206, 205, 108, 107, 106];
    state.roster = initialIDs.map(id => JSON.parse(JSON.stringify(PLAYERS_DB.find(p => p.id === id))));
    state.lineup = [...initialIDs];

    addEmail('Directiva', 'Bienvenido a LaLiga Tussi', `Míster ${state.team.manager}, iniciamos un proyecto ambicioso. Tiene 50M de presupuesto. Demuestre su valía.`);
    saveState(); routeView();
});

window.logout = function() { state = null; localStorage.removeItem('inafuma_active_user'); location.reload(); }
window.toggleProfileMenu = function() { document.getElementById('profile-dropdown').classList.toggle('hidden'); }

window.showSubpage = function(id) {
    document.getElementById('page-'+id).classList.remove('hidden');
    if(id === 'stats') {
        document.getElementById('stat-goals').textContent = state.stats.goals;
        document.getElementById('stat-matches').textContent = state.stats.matches;
        document.getElementById('stat-trophies').textContent = state.stats.trophies;
        document.getElementById('stat-wins').textContent = state.stats.wins;
        document.getElementById('stat-draws').textContent = state.stats.draws;
        document.getElementById('stat-losses').textContent = state.stats.losses;
    }
}
window.closeSubpage = function() { document.querySelectorAll('.subpage-container').forEach(el => el.classList.add('hidden')); }

function routeView() {
    document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
    if(!state) document.getElementById('view-landing').classList.remove('hidden');
    else if(!state.team) document.getElementById('view-setup').classList.remove('hidden');
    else { document.getElementById('app-layout').classList.remove('hidden'); updateUI(); switchTab('dash'); }
}

/* =========================================================================
   UI & FUNCIONES PRINCIPALES
   ========================================================================= */
function addEmail(sender, subject, body) {
    const date = new Date().toLocaleDateString('es-ES', {day: 'numeric', month:'short'});
    state.inbox.unshift({ id: Date.now(), sender, subject, body, date, read: false });
}

function renderInbox() {
    const listDash = document.getElementById('inbox-list');
    const listFull = document.getElementById('inbox-full-list');
    
    let unreadCount = state.inbox.filter(m => !m.read).length;
    const badge = document.getElementById('inbox-badge');
    if(unreadCount > 0) { badge.textContent = unreadCount; badge.classList.remove('hidden'); } 
    else { badge.classList.add('hidden'); }

    let html = '';
    if(state.inbox.length === 0) html = '<div class="text-slate-500 text-xs text-center p-4">Buzón vacío.</div>';
    else {
        state.inbox.forEach(mail => {
            const opacity = mail.read ? 'opacity-60' : 'opacity-100';
            const dot = mail.read ? '' : '<span class="w-2 h-2 rounded-full bg-red-500 inline-block mr-2"></span>';
            html += `
            <div class="p-4 border-b border-[#313145] hover:bg-[#1e1e2d] cursor-pointer transition ${opacity}" onclick="readEmail(${mail.id})">
                <div class="flex justify-between text-[10px] text-slate-400 mb-1"><span>${mail.sender}</span><span>${mail.date}</span></div>
                <div class="text-sm font-bold text-white mb-1 truncate">${dot}${mail.subject}</div>
                <div class="text-xs text-slate-400 truncate">${mail.body}</div>
            </div>`;
        });
    }
    
    if(listDash) listDash.innerHTML = html;
    if(listFull) listFull.innerHTML = html;

    // Mini preview in Dash
    const preview = document.getElementById('dash-inbox-preview');
    if(preview && state.inbox.length > 0) {
        preview.innerHTML = `<div class="text-xs text-slate-400 mb-1">${state.inbox[0].sender}</div><div class="font-bold text-white mb-2">${state.inbox[0].subject}</div><div class="text-xs text-slate-300 line-clamp-3">${state.inbox[0].body}</div>`;
    } else if (preview) preview.innerHTML = `<div class="text-slate-500 text-xs">Sin mensajes</div>`;
}

window.readEmail = function(id) { const m = state.inbox.find(x => x.id === id); if(m) { m.read = true; saveState(); renderInbox(); } }

window.switchTab = function(tabId) {
    document.querySelectorAll('.fm-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tabId).classList.add('active');
    const navBtn = document.getElementById('nav-' + tabId);
    if(navBtn) navBtn.classList.add('active');
    
    if(tabId === 'market') filterMarket(currentMarketFilter);
    if(tabId === 'tactics') renderTactics();
    if(tabId === 'league') renderLeague();
    if(tabId === 'train') renderTrainStatus();
    if(tabId === 'talk') renderTalkStatus();
    if(tabId === 'dash') updateUI();
}

function getStartingXI() { return state.lineup.map(id => state.roster.find(p => p.id === id)).filter(p => p !== undefined); }
function getTeamOvr() {
    const xi = getStartingXI();
    if(xi.length === 0) return 0;
    // Condición y Moral afectan el OVR real en el partido
    const sum = xi.reduce((acc, p) => acc + (p.ovr * (1 + ((p.morale - 50) / 200)) * (p.con / 100)), 0);
    return Math.round(sum / xi.length);
}

function getAttrClass(val) {
    if(val >= 85) return 'bg-[#10b981] text-white';
    if(val >= 70) return 'bg-[#eab308] text-black';
    if(val >= 50) return 'bg-[#f97316] text-white';
    return 'bg-[#ef4444] text-white';
}

function getBadgeHTML(name, shape, c1, c2, extraClass="w-8 h-10 text-[10px]") {
    return `<div class="club-badge ${shape} ${extraClass}" style="background: linear-gradient(135deg, ${c1} 50%, ${c2} 50%);">${name.substring(0,3).toUpperCase()}</div>`;
}

function updateUI() {
    if(!state || !state.team) return;
    const formatM = (num) => num >= 1000000 ? (num/1000000).toFixed(1)+'M' : num.toLocaleString();
    
    document.getElementById('ui-rep').textContent = state.stats.rep;
    document.getElementById('ui-coins').textContent = formatM(state.economy.coins);
    document.getElementById('ui-prem').textContent = state.economy.premium;
    document.getElementById('ui-jornada').textContent = state.stats.matchday || 1;
    document.getElementById('dash-jornada').textContent = state.stats.matchday || 1;
    
    document.getElementById('sidebar-teamname').textContent = state.team.name;
    document.getElementById('sidebar-manager').textContent = state.team.manager;
    document.getElementById('top-teamname').textContent = state.team.name;
    document.getElementById('top-manager').textContent = state.team.manager;
    document.getElementById('squad-mgr-name').textContent = state.team.manager;
    
    const badgeHTML = getBadgeHTML(state.team.name, state.team.shape, state.team.c1, state.team.c2, "w-full h-full text-xs shadow");
    document.getElementById('top-shield').innerHTML = badgeHTML;
    document.getElementById('sidebar-shield').innerHTML = badgeHTML;
    
    // Set Next Opponent
    const unplayedTeams = state.league.filter(t => !t.isUser && state.playedTeams.filter(x => x === t.name).length < 2);
    let nextOpp = unplayedTeams.length > 0 ? unplayedTeams[0] : null;
    if(nextOpp) {
        document.getElementById('ui-next-opp').textContent = nextOpp.name;
        document.getElementById('dash-next-home').textContent = state.team.name;
        document.getElementById('dash-next-away').textContent = nextOpp.name;
        document.getElementById('dash-next-home-shield').innerHTML = getBadgeHTML(state.team.name, state.team.shape, state.team.c1, state.team.c2, "w-full h-full text-sm border border-white/20");
        const oB = nextOpp.badge;
        document.getElementById('dash-next-away-shield').innerHTML = getBadgeHTML(nextOpp.name, oB.shape, oB.c1, oB.c2, "w-full h-full text-sm border border-white/20");
    } else {
        document.getElementById('ui-next-opp').textContent = "Fin Temporada";
    }

    document.getElementById('dash-ovr-big').textContent = getTeamOvr();
    document.getElementById('dash-ovr').textContent = getTeamOvr();
    document.getElementById('dash-matches').textContent = state.stats.matches;
    document.getElementById('dash-wins').textContent = state.stats.wins;
    document.getElementById('dash-draws').textContent = state.stats.draws;
    document.getElementById('dash-losses').textContent = state.stats.losses;

    // Calcular Posición y Forma para el Dashboard
    const sorted = [...state.league].sort((a,b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga));
    const myPos = sorted.findIndex(t => t.isUser) + 1;
    document.getElementById('dash-pos').textContent = myPos + "º";
    
    // Valor Plantilla
    const totalVal = state.roster.reduce((sum, p) => sum + p.priceBasic, 0);
    document.getElementById('dash-value').textContent = "€" + (totalVal/1000000).toFixed(1) + "M";

    renderInbox(); renderSquad();
    if(document.getElementById('tab-tactics').classList.contains('active')) renderTactics();
}

/* =========================================================================
   LIGA Y CLASIFICACIÓN (38 JORNADAS)
   ========================================================================= */
function renderLeague() {
    const tbody = document.getElementById('league-tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    const sorted = [...state.league].sort((a,b) => b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga));

    sorted.forEach((t, i) => {
        const isUserClass = t.isUser ? 'user-row' : '';
        const badgeObj = t.isUser ? state.team : t.badge;
        const miniBadge = getBadgeHTML(t.name, badgeObj.shape, badgeObj.c1, badgeObj.c2, "w-6 h-8 text-[8px] mx-auto border border-white/10");
        
        tbody.innerHTML += `
        <tr class="${isUserClass}">
            <td>${i+1}</td>
            <td class="text-center p-1">${miniBadge}</td>
            <td class="text-white">${t.name}</td>
            <td>${t.pld}</td>
            <td>${t.w}</td>
            <td>${t.d}</td>
            <td>${t.l}</td>
            <td>${t.gf}</td>
            <td>${t.ga}</td>
            <td>${t.gf - t.ga}</td>
            <td class="text-white font-bold text-sm bg-slate-800/50 text-center">${t.pts}</td>
        </tr>`;
    });
}

function simulateLeagueMatches(userOpponentName) {
    let aiTeams = state.league.filter(t => !t.isUser && t.name !== userOpponentName);
    for(let i=0; i<aiTeams.length; i+=2) {
        if(aiTeams[i+1]) {
            let tA = aiTeams[i]; let tB = aiTeams[i+1];
            let diff = tA.ovr - tB.ovr;
            let probA = 0.35 + (diff * 0.02); 
            
            let rand = Math.random();
            let goalsA = 0; let goalsB = 0;
            if(rand < probA) { goalsA = Math.floor(Math.random()*3)+1; goalsB = Math.floor(Math.random()*goalsA); }
            else if (rand > (1 - (0.35 - diff*0.02))) { goalsB = Math.floor(Math.random()*3)+1; goalsA = Math.floor(Math.random()*goalsB); }
            else { goalsA = Math.floor(Math.random()*2); goalsB = goalsA; }

            updateTeamStats(tA, goalsA, goalsB);
            updateTeamStats(tB, goalsB, goalsA);
        }
    }
}

function updateTeamStats(team, gf, ga) {
    if(!team) return;
    team.pld++; team.gf+=gf; team.ga+=ga;
    if(gf>ga) { team.w++; team.pts+=3; }
    else if(gf===ga) { team.d++; team.pts+=1; }
    else { team.l++; }
}

/* =========================================================================
   ENTRENAMIENTO Y CHARLA
   ========================================================================= */
function renderTrainStatus() { 
    const st = document.getElementById('train-status');
    if(st) st.textContent = state.flags.canTrain ? "LISTO PARA ASIGNAR" : "SESIÓN COMPLETADA. JUEGA PARA AVANZAR."; 
}

window.executeWeeklyTraining = function() {
    if(!state.flags.canTrain) return showAlert("Los jugadores están agotados. Juega la jornada de liga para avanzar de semana.");
    if(state.roster.length === 0) return showAlert("No tienes jugadores que entrenar.");

    const days = ['mon','tue','wed','thu','fri'];
    days.forEach(d => {
        let type = document.getElementById(`train-${d}`).value;
        state.roster.forEach(p => {
            if(type !== 'rest') {
                if(type==='atk' && (p.pos==='DEL' || p.pos==='MED')) { p.sho++; p.pas++; }
                if(type==='def' && (p.pos!=='DEL')) { p.def++; p.phy++; }
                if(type==='phy') { p.pac++; p.phy++; }
                p.con = Math.max(10, p.con - 5); // Entrenamiento cansa
            } else {
                p.con = Math.min(100, p.con + 15); // Descanso recupera
            }
            p.ovr = calcPlayerOVR(p);
        });
    });

    state.flags.canTrain = false; saveState(); renderTrainStatus();
    showAlert("Programa completado. Los atributos han cambiado y la Condición Física (CON) se ha actualizado.");
}

function renderTalkStatus() { 
    const st = document.getElementById('talk-status');
    if(st) st.textContent = state.flags.canTalk ? "DISPONIBLE" : "COMPLETADO"; 
}

window.executeTalk = function(tone) {
    if(!state.flags.canTalk) return showAlert("Ya has dado la charla pre-partido.");
    if(state.roster.length === 0) return showAlert("Vestuario vacío.");

    let xi = getStartingXI();
    let bench = state.roster.filter(p => !state.lineup.includes(p.id));

    if(tone === 'calm') {
        state.roster.forEach(p => p.morale = Math.min(100, p.morale+5));
        showAlert("Toda la plantilla sube +5 de Moral.");
    } else if(tone === 'aggressive') {
        if(Math.random() < 0.7) {
            state.roster.forEach(p => p.morale = Math.min(100, p.morale+20));
            showAlert("¡La bronca ha funcionado! Toda la plantilla se motiva (+20 Moral).");
        } else {
            state.roster.forEach(p => p.morale = Math.max(0, p.morale-15));
            showAlert("Te has pasado. El equipo está presionado (-15 Moral).");
        }
    } else if(tone === 'passionate') {
        state.roster.forEach(p => { if(Math.random() < 0.5) p.morale = Math.min(100, p.morale+15); });
        showAlert("El discurso ha calado en parte de la plantilla (+15 Moral a algunos).");
    } else if(tone === 'assertive') {
        xi.forEach(p => p.morale = Math.min(100, p.morale+10));
        bench.forEach(p => p.morale = Math.max(0, p.morale-5));
        showAlert("Titulares ganan confianza (+10 Moral), suplentes bajan (-5 Moral).");
    }

    state.flags.canTalk = false; saveState(); renderTalkStatus();
}

/* =========================================================================
   PLANTILLA Y TÁCTICAS
   ========================================================================= */
function renderSquad() {
    const tbody = document.getElementById('squad-tbody');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    const posOrder = { 'POR': 1, 'DEF': 2, 'MED': 3, 'DEL': 4 };
    const sorted = [...state.roster].sort((a,b) => posOrder[a.pos] - posOrder[b.pos] || b.ovr - a.ovr);
    
    sorted.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        
        // Corazón Condición FM Style
        let conIcon = p.con >= 85 ? '🟢' : p.con >= 60 ? '🟡' : '🔴';
        let moralColor = p.morale >= 80 ? '#10b981' : p.morale >= 40 ? '#f59e0b' : '#ef4444';
        
        tbody.innerHTML += `
        <tr>
            <td class="text-center"><button class="text-xs bg-slate-700 px-2 py-1 rounded border border-slate-600 hover:bg-slate-600 text-white">ℹ</button></td>
            <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
            <td class="font-bold text-white flex items-center gap-2"><img src="${p.img}" class="w-6 h-6 rounded-full border border-slate-600">${p.name}</td>
            <td class="font-bold">${conIcon} ${p.con}%</td>
            <td style="width: 80px;">
                <div class="w-full h-1.5 bg-slate-700 rounded overflow-hidden"><div class="h-full" style="width:${p.morale}%; background:${moralColor};"></div></div>
            </td>
            <td class="font-bold text-white text-sm bg-slate-800/50 text-center">${p.ovr}</td>
            <td><span class="attr-val ${getAttrClass(p.pac)}">${p.pac}</span></td>
            <td><span class="attr-val ${getAttrClass(p.sho)}">${p.sho}</span></td>
            <td><span class="attr-val ${getAttrClass(p.pas)}">${p.pas}</span></td>
            <td><span class="attr-val ${getAttrClass(p.def)}">${p.def}</span></td>
            <td><span class="attr-val ${getAttrClass(p.phy)}">${p.phy}</span></td>
        </tr>`;
    });
    const ovrTag = document.getElementById('squad-ovr');
    if(ovrTag) ovrTag.textContent = getTeamOvr();
}

let dragSrc = { id: null, slot: null };
window.dragStart = function(e, pId, slotIndex) { 
    dragSrc = { id: pId, slot: slotIndex }; 
    setTimeout(() => e.target.classList.add('opacity-50'), 0); 
};
window.dragEnd = function(e) { e.target.classList.remove('opacity-50'); };
window.allowDrop = function(e) { e.preventDefault(); };

window.dropOnPitch = function(e, targetSlotIndex) {
    e.preventDefault(); if(!dragSrc.id) return;
    
    const targetPlayerId = state.lineup[targetSlotIndex]; 
    if (dragSrc.slot !== null) { 
        state.lineup[dragSrc.slot] = targetPlayerId; 
        state.lineup[targetSlotIndex] = dragSrc.id; 
    } else { 
        state.lineup[targetSlotIndex] = dragSrc.id; 
    }
    saveState(); renderTactics();
};

window.dropOnBench = function(e) { 
    e.preventDefault(); 
    if (dragSrc.slot !== null) { state.lineup[dragSrc.slot] = null; saveState(); renderTactics(); } 
};

window.changeFormation = function() { state.formation = document.getElementById('tactics-formation').value; saveState(); renderTactics(); }

window.autoFillLineup = function() {
    const posMap = {
        '4-4-2': ['POR', 'DEF','DEF','DEF','DEF', 'MED','MED','MED','MED', 'DEL','DEL'],
        '4-3-3': ['POR', 'DEF','DEF','DEF','DEF', 'MED','MED','MED', 'DEL','DEL','DEL'],
        '5-3-2': ['POR', 'DEF','DEF','DEF','DEF','DEF', 'MED','MED','MED', 'DEL','DEL'],
        '3-4-3': ['POR', 'DEF','DEF','DEF', 'MED','MED','MED','MED', 'DEL','DEL','DEL'],
        '4-2-3-1': ['POR', 'DEF','DEF','DEF','DEF', 'MED','MED','MED','MED','MED', 'DEL'],
        '5-4-1': ['POR', 'DEF','DEF','DEF','DEF','DEF', 'MED','MED','MED','MED', 'DEL']
    };
    const targetLayout = posMap[state.formation];
    let newLineup = new Array(11).fill(null);
    let availableRoster = [...state.roster].sort((a, b) => b.ovr - a.ovr); 

    for (let i = 0; i < 11; i++) {
        let neededPos = targetLayout[i];
        let bestPlayerIndex = availableRoster.findIndex(p => p.pos === neededPos);
        if (bestPlayerIndex !== -1) {
            newLineup[i] = availableRoster[bestPlayerIndex].id;
            availableRoster.splice(bestPlayerIndex, 1); 
        }
    }
    for (let i = 0; i < 11; i++) {
        if (newLineup[i] === null && availableRoster.length > 0) {
            newLineup[i] = availableRoster[0].id;
            availableRoster.splice(0, 1);
        }
    }
    state.lineup = newLineup; saveState(); renderTactics();
};

function renderTactics() {
    const formSelect = document.getElementById('tactics-formation');
    if(formSelect) formSelect.value = state.formation;
    const pitch = document.getElementById('pitch-players');
    const benchContainer = document.getElementById('bench-list');
    if(!pitch || !benchContainer) return;
    pitch.innerHTML = ''; benchContainer.innerHTML = '';

    const layouts = {
        '4-4-2': [ {x:50,y:85,c:'POR'}, {x:20,y:65,c:'DEF'},{x:40,y:70,c:'DEF'},{x:60,y:70,c:'DEF'},{x:80,y:65,c:'DEF'}, {x:20,y:35,c:'MED'},{x:40,y:40,c:'MED'},{x:60,y:40,c:'MED'},{x:80,y:35,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ],
        '4-3-3': [ {x:50,y:85,c:'POR'}, {x:20,y:70,c:'DEF'},{x:40,y:75,c:'DEF'},{x:60,y:75,c:'DEF'},{x:80,y:70,c:'DEF'}, {x:30,y:45,c:'MED'},{x:50,y:40,c:'MED'},{x:70,y:45,c:'MED'}, {x:20,y:20,c:'DEL'},{x:50,y:15,c:'DEL'},{x:80,y:20,c:'DEL'} ],
        '5-3-2': [ {x:50,y:85,c:'POR'}, {x:10,y:65,c:'DEF'},{x:30,y:75,c:'DEF'},{x:50,y:78,c:'DEF'},{x:70,y:75,c:'DEF'},{x:90,y:65,c:'DEF'}, {x:30,y:40,c:'MED'},{x:50,y:45,c:'MED'},{x:70,y:40,c:'MED'}, {x:40,y:15,c:'DEL'},{x:60,y:15,c:'DEL'} ],
        '3-4-3': [ {x:50,y:85,c:'POR'}, {x:25,y:70,c:'DEF'},{x:50,y:75,c:'DEF'},{x:75,y:70,c:'DEF'}, {x:15,y:45,c:'MED'},{x:38,y:40,c:'MED'},{x:62,y:40,c:'MED'},{x:85,y:45,c:'MED'}, {x:25,y:20,c:'DEL'},{x:50,y:15,c:'DEL'},{x:75,y:20,c:'DEL'} ],
        '4-2-3-1': [ {x:50,y:85,c:'POR'}, {x:20,y:70,c:'DEF'},{x:40,y:75,c:'DEF'},{x:60,y:75,c:'DEF'},{x:80,y:70,c:'DEF'}, {x:35,y:50,c:'MED'},{x:65,y:50,c:'MED'},{x:20,y:30,c:'MED'},{x:50,y:25,c:'MED'},{x:80,y:30,c:'MED'}, {x:50,y:10,c:'DEL'} ],
        '5-4-1': [ {x:50,y:85,c:'POR'}, {x:10,y:70,c:'DEF'},{x:30,y:75,c:'DEF'},{x:50,y:78,c:'DEF'},{x:70,y:75,c:'DEF'},{x:90,y:70,c:'DEF'}, {x:20,y:45,c:'MED'},{x:40,y:50,c:'MED'},{x:60,y:50,c:'MED'},{x:80,y:45,c:'MED'}, {x:50,y:20,c:'DEL'} ]
    };

    while(state.lineup.length < 11) state.lineup.push(null);

    layouts[state.formation].forEach((pos, index) => {
        const playerId = state.lineup[index];
        const player = state.roster.find(p => p.id === playerId);
        let innerHTML = '';
        if(player) {
            let conColor = player.con >= 85 ? '#10b981' : player.con >= 60 ? '#eab308' : '#ef4444';
            innerHTML = `
                <div class="pitch-ovr-tag">${player.ovr}</div>
                <div class="pitch-shirt" style="background-image:url(${player.img}); border-color: ${conColor}" draggable="true" ondragstart="dragStart(event, ${player.id}, ${index})" ondragend="dragEnd(event)"></div>
                <div class="pitch-name">${player.name.split(' ').pop()}</div>
            `;
        } else {
            innerHTML = `<div class="pitch-shirt border-dashed bg-transparent opacity-50">+</div>`;
        }
        pitch.innerHTML += `<div class="pitch-player" style="left:${pos.x}%; top:${pos.y}%;" ondragover="allowDrop(event)" ondrop="dropOnPitch(event, ${index})">${innerHTML}</div>`;
    });

    document.getElementById('tactics-ovr').textContent = getTeamOvr();

    const benchPlayers = state.roster.filter(p => !state.lineup.includes(p.id));
    benchPlayers.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        benchContainer.innerHTML += `
        <div class="bench-player" draggable="true" ondragstart="dragStart(event, ${p.id}, null)" ondragend="dragEnd(event)">
            <div class="flex items-center gap-2">
                <img src="${p.img}" class="w-6 h-6 rounded-full object-cover border border-[#313145]">
                <span class="pos-badge ${pClass} text-[8px] w-auto px-1">${p.pos}</span>
                <span class="text-white text-[10px] font-bold truncate">${p.name}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-[9px] text-slate-400" title="Condición">Con: ${p.con}%</span>
                <span class="text-yellow-400 font-bold bg-[#111119] px-1.5 py-0.5 rounded text-[10px] border border-[#313145]">${p.ovr}</span>
            </div>
        </div>`;
    });
}

/* =========================================================================
   MERCADO (COMPRAR, VENDER Y LUPA)
   ========================================================================= */
let marketMode = 'buy';
let currentMarketFilter = 'ALL';

window.setMarketMode = function(mode) {
    marketMode = mode;
    document.getElementById('mode-buy').className = mode === 'buy' ? "text-white font-bold text-xs border-b-2 border-red-500 pb-1 uppercase" : "text-slate-500 hover:text-white font-bold text-xs pb-1 uppercase cursor-pointer";
    document.getElementById('mode-sell').className = mode === 'sell' ? "text-white font-bold text-xs border-b-2 border-red-500 pb-1 uppercase" : "text-slate-500 hover:text-white font-bold text-xs pb-1 uppercase cursor-pointer";
    document.getElementById('market-th-rep').style.display = mode === 'buy' ? "table-cell" : "none";
    filterMarket();
};

window.filterMarket = function(pos) {
    if(pos) currentMarketFilter = pos;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`filter-${currentMarketFilter}`);
    if(btn) btn.classList.add('active');

    const searchInput = document.getElementById('market-search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const tbody = document.getElementById('market-tbody');
    tbody.innerHTML = '';

    let items = marketMode === 'buy' ? PLAYERS_DB.filter(db_p => !state.roster.find(rp => rp.id === db_p.id)) : state.roster;
    if(currentMarketFilter !== 'ALL') items = items.filter(p => p.pos === currentMarketFilter);
    if(searchTerm) items = items.filter(p => p.name.toLowerCase().includes(searchTerm));

    if(items.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-slate-500 py-6 text-xs">Ningún jugador coincide con los criterios.</td></tr>`;
        return;
    }

    items.forEach(p => {
        let pClass = `pos-${p.pos.toLowerCase()}`;
        if(marketMode === 'buy') {
            const canRep = state.stats.rep >= p.rep;
            const formatM = (p.priceBasic/1000000).toFixed(1)+'M';
            tbody.innerHTML += `
            <tr>
                <td class="w-12 text-center"><button class="text-xs bg-slate-700 px-2 py-1 rounded hover:bg-slate-600 text-white">ℹ</button></td>
                <td class="font-bold text-white flex items-center gap-2"><img src="${p.img}" class="w-6 h-6 rounded-full border border-slate-600">${p.name}</td>
                <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
                <td class="font-bold text-white text-sm bg-slate-800/50 text-center">${p.ovr}</td>
                <td class="${canRep ? 'text-slate-400' : 'text-red-500 font-bold'}">★ ${p.rep}</td>
                <td class="font-mono text-green-400">€${formatM}</td>
                <td>
                    <button class="btn-action w-full py-1 text-[10px]" onclick="buyPlayer(${p.id}, 'basic')">Fichar</button>
                </td>
            </tr>`;
        } else {
            const sellValue = Math.floor(p.priceBasic * 0.6); 
            const formatM = (sellValue/1000000).toFixed(1)+'M';
            tbody.innerHTML += `
            <tr>
                <td class="w-12 text-center"><button class="text-xs bg-slate-700 px-2 py-1 rounded hover:bg-slate-600 text-white">ℹ</button></td>
                <td class="font-bold text-white flex items-center gap-2"><img src="${p.img}" class="w-6 h-6 rounded-full border border-slate-600">${p.name}</td>
                <td><span class="pos-badge ${pClass}">${p.pos}</span></td>
                <td class="font-bold text-white text-sm bg-slate-800/50 text-center">${p.ovr}</td>
                <td style="display:none;"></td> 
                <td class="font-mono text-slate-400">Oferta: €${formatM}</td>
                <td><button class="btn-sell w-full py-1" onclick="sellPlayer(${p.id}, ${sellValue})">Ofrecer a Clubes</button></td>
            </tr>`;
        }
    });
}

window.buyPlayer = function(id, curr) {
    const p = PLAYERS_DB.find(x => x.id === id);
    if(state.stats.rep < p.rep) return showAlert(`No cumples la Reputación Mundial requerida (★ ${p.rep}).`);
    
    if(curr === 'basic') {
        if(state.economy.coins < p.priceBasic) return showAlert("Presupuesto de traspasos insuficiente.");
        state.economy.coins -= p.priceBasic;
    } else {
        if(state.economy.premium < p.pricePrem) return showAlert("Moneda Premium insuficiente.");
        state.economy.premium -= p.pricePrem;
    }

    let newPlayer = JSON.parse(JSON.stringify(p));
    newPlayer.con = 100; // Asignar condición al comprar
    
    state.roster.push(newPlayer);
    const emptySlot = state.lineup.findIndex(slot => slot === null);
    if(emptySlot !== -1) state.lineup[emptySlot] = p.id;
    
    addEmail('Director Deportivo', `Traspaso Completado: ${p.name}`, `Hemos llegado a un acuerdo económico y el jugador ya está a sus órdenes.`);
    saveState(); filterMarket();
}

window.sellPlayer = function(id, sellValue) {
    showConfirm(`¿Aceptar la oferta de venta por €${(sellValue/1000000).toFixed(1)}M?`, () => {
        state.economy.coins += sellValue;
        state.roster = state.roster.filter(p => p.id !== id);
        for(let i=0; i<state.lineup.length; i++) { if(state.lineup[i] === id) state.lineup[i] = null; }
        saveState(); filterMarket();
    });
}

window.buyIAP = function() { document.getElementById('modal-store').classList.remove('hidden'); }
window.confirmIAP = function() {
    state.economy.premium += parseInt(document.getElementById('dev-coins-input').value);
    saveState(); document.getElementById('modal-store').classList.add('hidden');
}

/* =========================================================================
   MOTOR DE PARTIDO AVANZADO (FM STYLE)
   ========================================================================= */
let matchState = { 
    mG: 0, oG: 0, min: 0, myProb: 0, oppProb: 0, interval: null, talkMod: 0,
    stats: { hPoss: 50, aPoss: 50, hShots: 0, aShots: 0 }
};
let currentOpponent = null;

window.startMatch = function() {
    const xi = getStartingXI();
    if(xi.length < 11) return showAlert(`Plantilla incompleta. Debes alinear a 11 jugadores en Tácticas.`);

    // LÓGICA DE 38 JORNADAS: Buscamos a un equipo contra el que hayamos jugado MENOS de 2 veces
    const unplayedTeams = state.league.filter(t => {
        if (t.isUser) return false;
        const timesPlayed = state.playedTeams.filter(x => x === t.name).length;
        return timesPlayed < 2;
    });
    
    if(unplayedTeams.length === 0 || state.stats.matchday > 38) {
        endSeason();
        return;
    }
    
    currentOpponent = unplayedTeams[Math.floor(Math.random() * unplayedTeams.length)];

    document.getElementById('app-layout').classList.add('hidden');
    document.getElementById('match-modal').classList.remove('hidden');
    document.getElementById('match-post').classList.add('hidden');
    document.getElementById('match-halftime').classList.add('hidden');
    document.getElementById('match-actions').classList.add('hidden');
    
    document.getElementById('sim-home-name').textContent = state.team.name;
    const homeBadgeHtml = getBadgeHTML(state.team.name, state.team.shape, state.team.c1, state.team.c2, "w-12 h-16 text-xs");
    document.getElementById('sim-home-shield').innerHTML = homeBadgeHtml;
    
    const oppBadgeObj = currentOpponent.badge || AI_TEAMS.find(ai => ai.name === currentOpponent.name) || AI_TEAMS[0];
    const oppBadgeHtml = getBadgeHTML(currentOpponent.name, oppBadgeObj.shape, oppBadgeObj.c1, oppBadgeObj.c2, "w-12 h-16 text-xs");
    document.getElementById('sim-away-shield').innerHTML = oppBadgeHtml;
    
    const myOvr = getTeamOvr(); 
    document.getElementById('sim-home-ovr').textContent = myOvr;
    document.getElementById('sim-away-name').textContent = currentOpponent.name;
    document.getElementById('sim-away-ovr').textContent = currentOpponent.ovr;
    
    // Bajar condición física por jugar el partido
    state.roster.forEach(p => { if(state.lineup.includes(p.id)) p.con = Math.max(10, p.con - 10); });

    matchState = {
        mG: 0, oG: 0, min: 0,
        myProb: 0.08 + ((myOvr - currentOpponent.ovr) * 0.003),
        oppProb: 0.08 - ((myOvr - currentOpponent.ovr) * 0.003),
        interval: null, talkMod: 0,
        stats: { hPoss: 50, aPoss: 50, hShots: 0, aShots: 0 }
    };

    document.getElementById('sim-home-score').textContent = "0";
    document.getElementById('sim-away-score').textContent = "0";
    document.getElementById('match-progress').style.width = "0%";
    document.getElementById('match-narrative').innerHTML = "<div class='text-blue-400 font-bold'>Pitido inicial. Rueda el balón en LaLiga Tussi.</div>";

    updateMatchStatsUI();
    runMatchLoop(45); 
}

function updateMatchStatsUI() {
    document.getElementById('stat-poss-home').textContent = matchState.stats.hPoss + "%";
    document.getElementById('stat-poss-away').textContent = matchState.stats.aPoss + "%";
    document.getElementById('bar-poss-home').style.width = matchState.stats.hPoss + "%";
    document.getElementById('bar-poss-away').style.width = matchState.stats.aPoss + "%";

    document.getElementById('stat-shots-home').textContent = matchState.stats.hShots;
    document.getElementById('stat-shots-away').textContent = matchState.stats.aShots;
    
    let totalShots = matchState.stats.hShots + matchState.stats.aShots;
    let hShotP = totalShots > 0 ? (matchState.stats.hShots / totalShots) * 100 : 50;
    let aShotP = totalShots > 0 ? (matchState.stats.aShots / totalShots) * 100 : 50;
    
    document.getElementById('bar-shots-home').style.width = hShotP + "%";
    document.getElementById('bar-shots-away').style.width = aShotP + "%";
}

function runMatchLoop(targetMinute) {
    const logDiv = document.getElementById('match-narrative');
    const commentary = [
        "Controlando el ritmo del partido en el centro del campo.", 
        "Pase filtrado peligroso que corta la defensa in extremis.", 
        "Falta táctica para evitar un contragolpe rápido.", 
        "Disparo lejano que se marcha por encima del larguero.", 
        "Gran intervención del guardameta tras un remate raso.", 
        "Saque de esquina cerrado que despeja la zaga."
    ];

    matchState.interval = setInterval(() => {
        matchState.min += 3;
        document.getElementById('match-time').textContent = `${matchState.min}:00`;
        document.getElementById('match-progress').style.width = `${(matchState.min/90)*100}%`;

        // Fluctuación de estadísticas
        matchState.stats.hPoss = Math.min(80, Math.max(20, matchState.stats.hPoss + (Math.floor(Math.random()*11)-5)));
        matchState.stats.aPoss = 100 - matchState.stats.hPoss;
        updateMatchStatsUI();

        // DESCANSO
        if(matchState.min === 45 && targetMinute === 45) {
            clearInterval(matchState.interval);
            logDiv.innerHTML += `<div class="mt-4"><strong class="text-yellow-400 font-bold">45': Final de la primera mitad. Los equipos se retiran al túnel de vestuarios.</strong></div>`;
            logDiv.scrollTop = logDiv.scrollHeight;
            document.getElementById('match-actions').classList.remove('hidden');
            document.getElementById('match-halftime').classList.remove('hidden');
            return;
        }

        // FINAL
        if(matchState.min >= 90) {
            clearInterval(matchState.interval);
            finishMatch(matchState.mG, matchState.oG); return;
        }

        let eventText = commentary[Math.floor(Math.random() * commentary.length)];
        let rand = Math.random();
        let activeMyProb = matchState.myProb + matchState.talkMod; 

        if(rand < (activeMyProb * 0.4)) {
            matchState.mG++;
            matchState.stats.hShots++;
            const xi = getStartingXI();
            const scorers = xi.filter(p => p.pos === 'DEL' || p.pos === 'MED');
            const scorer = scorers.length > 0 ? scorers[Math.floor(Math.random()*scorers.length)].name : "el equipo";
            eventText = `<span class="text-green-400 font-bold">¡GOL! Excelente definición de ${scorer}.</span>`;
        } else if (rand > 1 - (matchState.oppProb * 0.4)) {
            matchState.oG++;
            matchState.stats.aShots++;
            eventText = `<span class="text-red-400 font-bold">¡Gol de ${currentOpponent.name}! Fallo imperdonable en la marca.</span>`;
        } else if (rand < 0.3) {
            matchState.stats.hShots++; // Fallo Local
        } else if (rand > 0.7) {
            matchState.stats.aShots++; // Fallo Visitante
        }

        logDiv.innerHTML += `<div><span class="text-slate-500">${matchState.min}'</span> - ${eventText}</div>`;
        logDiv.scrollTop = logDiv.scrollHeight; 
        document.getElementById('sim-home-score').textContent = matchState.mG;
        document.getElementById('sim-away-score').textContent = matchState.oG;
        updateMatchStatsUI();

    }, 350); 
}

window.matchTalk = function(type) {
    const logDiv = document.getElementById('match-narrative');

    if(type === 'animar') {
        matchState.talkMod = 0.01; 
        logDiv.innerHTML += `<div class="text-blue-400 mt-2 text-xs italic">La charla motivacional parece haber surtido efecto positivo.</div>`;
    } else {
        if(Math.random() < 0.6) {
            matchState.talkMod = 0.02; 
            logDiv.innerHTML += `<div class="text-green-400 mt-2 text-xs italic">El equipo reacciona bien a las exigencias del mánager.</div>`;
        } else {
            matchState.talkMod = -0.01; 
            logDiv.innerHTML += `<div class="text-red-400 mt-2 text-xs italic">La plantilla parece bloqueada tras la dura charla.</div>`;
        }
    }
    logDiv.scrollTop = logDiv.scrollHeight;
    document.getElementById('match-halftime').innerHTML = '<div class="text-xs text-slate-400 italic mb-4">Instrucciones enviadas.</div><button onclick="resumeMatch()" class="w-full bg-green-600 text-white font-bold py-2 rounded text-xs uppercase">Comenzar 2ª Parte</button>';
}

window.goToTacticsFromMatch = function() {
    document.getElementById('match-modal').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');
    switchTab('tactics');
    
    const topBtn = document.getElementById('top-continue-btn');
    topBtn.innerHTML = 'VOLVER AL VESTUARIO ⏱';
    topBtn.onclick = returnToMatch;
    topBtn.className = "btn-continue bg-yellow-600 shadow-lg";
}

window.returnToMatch = function() {
    document.getElementById('app-layout').classList.add('hidden');
    document.getElementById('match-modal').classList.remove('hidden');
    
    const topBtn = document.getElementById('top-continue-btn');
    topBtn.innerHTML = 'CONTINUAR ⏭';
    topBtn.onclick = startMatch;
    topBtn.className = "btn-continue shadow-lg";
}

window.resumeMatch = function() {
    document.getElementById('match-actions').classList.add('hidden');
    document.getElementById('match-halftime').classList.add('hidden');
    
    // Recalcular por si hubo cambios tácticos
    const newOvr = getTeamOvr(); 
    matchState.myProb = 0.08 + ((newOvr - currentOpponent.ovr) * 0.003); 

    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML += `<div class="mt-4"><strong class="text-white">45': Arranca la segunda mitad.</strong></div>`;
    logDiv.scrollTop = logDiv.scrollHeight; 
    runMatchLoop(90); 
}

function finishMatch(mG, oG) {
    document.getElementById('match-actions').classList.remove('hidden');
    document.getElementById('match-post').classList.remove('hidden');
    
    const logDiv = document.getElementById('match-narrative');
    logDiv.innerHTML += `<div class="mt-4 text-white font-bold uppercase border-t border-[#313145] pt-2">Fin del tiempo reglamentario.</div>`;
    logDiv.scrollTop = logDiv.scrollHeight;

    let ptsEarned = 0; let coins = 0; let rep = 0;

    if(mG > oG) { ptsEarned = 3; coins = 5000000; rep = 150; state.stats.wins++; } 
    else if (mG === oG) { ptsEarned = 1; coins = 1500000; rep = 50; state.stats.draws++; } 
    else { ptsEarned = 0; coins = 500000; rep = -10; state.stats.losses++; }

    state.stats.goals += mG;

    try {
        let userLeague = state.league.find(t => t.isUser);
        if(userLeague) updateTeamStats(userLeague, mG, oG);
        let oppLeague = state.league.find(t => t.name === currentOpponent.name);
        if(oppLeague) updateTeamStats(oppLeague, oG, mG);
        simulateLeagueMatches(currentOpponent.name);
    } catch(e) { console.error("Error Liga", e); }

    state.playedTeams.push(currentOpponent.name);
    state.stats.matches++;
    state.stats.matchday++;
    state.economy.coins += coins;
    state.stats.rep = Math.max(0, state.stats.rep + rep);
    
    state.flags.canTrain = true;
    state.flags.canTalk = true;

    addEmail('Cuerpo Técnico', `Informe Post-Partido`, `Resultado: ${mG}-${oG}. Hemos ingresado €${(coins/1000000).toFixed(1)}M por taquilla y derechos.`);
    saveState();
    
    document.getElementById('match-coins').textContent = `+€${(coins/1000000).toFixed(1)}M`;
    document.getElementById('match-pts').innerHTML = `+${ptsEarned} PTS<br><span class="text-[10px] ${rep > 0 ? 'text-blue-400' : 'text-red-400'}">Reputación: ${rep > 0 ? '+' : ''}${rep}</span>`;
}

window.endMatchAndReturn = function() {
    document.getElementById('match-modal').classList.add('hidden');
    document.getElementById('app-layout').classList.remove('hidden');
    
    if(state.stats.matchday > 38) {
        endSeason();
    } else {
        switchTab('league'); 
    }
}

/* =========================================================================
   SISTEMA DE FIN DE TEMPORADA Y TROFEOS
   ========================================================================= */
function endSeason() {
    document.getElementById('modal-season-end').classList.remove('hidden');
    
    const sorted = [...state.league].sort((a,b) => {
        if(b.pts !== a.pts) return b.pts - a.pts;
        return (b.gf - b.ga) - (a.gf - a.ga);
    });
    
    const userPos = sorted.findIndex(t => t.isUser) + 1;
    
    if(userPos === 1) {
        document.getElementById('season-trophy').classList.remove('hidden');
        document.getElementById('season-no-trophy').classList.add('hidden');
        state.stats.trophies++;
        addEmail('Directiva', '¡CAMPEONES DE LIGA!', 'La afición está extasiada. Hemos conquistado LaLiga Tussi.');
    } else {
        document.getElementById('season-trophy').classList.add('hidden');
        document.getElementById('season-no-trophy').classList.remove('hidden');
        document.getElementById('season-pos').textContent = userPos + "º";
        addEmail('Directiva', 'Revisión de Temporada', `Hemos finalizado en la posición ${userPos}. Debemos reforzar la plantilla para el próximo año.`);
    }
    saveState();
}

window.startNewSeason = function() {
    state.stats.matchday = 1;
    state.playedTeams = []; 
    state.league.forEach(t => {
        t.pld = 0; t.w = 0; t.d = 0; t.l = 0; t.gf = 0; t.ga = 0; t.pts = 0;
    });
    
    // Resetear moral y condicion
    state.roster.forEach(p => { p.morale = 100; p.con = 100; });
    
    saveState();
    document.getElementById('modal-season-end').classList.add('hidden');
    switchTab('dash');
    showAlert("¡Arranca una nueva edición de LaLiga Tussi! Calendario y clasificaciones reiniciadas.");
}