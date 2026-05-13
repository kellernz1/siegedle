// ==========================================
// BANCO DE DADOS
// ==========================================

const operators = [
    { name: "Sledge", gender: "M", side: "Ataque", unit: "SAS", year: 0, speed: 1 },
    { name: "Thatcher", gender: "M", side: "Ataque", unit: "SAS", year: 0, speed: 1 },
    { name: "Smoke", gender: "M", side: "Defesa", unit: "SAS", year: 0, speed: 2 },
    { name: "Mute", gender: "M", side: "Defesa", unit: "SAS", year: 0, speed: 1 },
    { name: "Ash", gender: "F", side: "Ataque", unit: "FBI", year: 0, speed: 3 },
    { name: "Thermite", gender: "M", side: "Ataque", unit: "FBI", year: 0, speed: 2 },
    { name: "Castle", gender: "M", side: "Defesa", unit: "FBI", year: 0, speed: 2 },
    { name: "Pulse", gender: "M", side: "Defesa", unit: "FBI", year: 0, speed: 3 },
    { name: "Twitch", gender: "F", side: "Ataque", unit: "GIGN", year: 0, speed: 2 },
    { name: "Montagne", gender: "M", side: "Ataque", unit: "GIGN", year: 0, speed: 1 },
    { name: "Doc", gender: "M", side: "Defesa", unit: "GIGN", year: 0, speed: 1 },
    { name: "Rook", gender: "M", side: "Defesa", unit: "GIGN", year: 0, speed: 1 },
    { name: "Glaz", gender: "M", side: "Ataque", unit: "Spetsnaz", year: 0, speed: 2 },
    { name: "Fuze", gender: "M", side: "Ataque", unit: "Spetsnaz", year: 0, speed: 1 },
    { name: "Kapkan", gender: "M", side: "Defesa", unit: "Spetsnaz", year: 0, speed: 2 },
    { name: "Tachanka", gender: "M", side: "Defesa", unit: "Spetsnaz", year: 0, speed: 1 },
    { name: "Blitz", gender: "M", side: "Ataque", unit: "GSG9", year: 0, speed: 2 },
    { name: "IQ", gender: "F", side: "Ataque", unit: "GSG9", year: 0, speed: 3 },
    { name: "Jager", gender: "M", side: "Defesa", unit: "GSG9", year: 0, speed: 2 },
    { name: "Bandit", gender: "M", side: "Defesa", unit: "GSG9", year: 0, speed: 3 },
    { name: "Buck", gender: "M", side: "Ataque", unit: "JTF2", year: 1, speed: 2 },
    { name: "Frost", gender: "F", side: "Defesa", unit: "JTF2", year: 1, speed: 2 },
    { name: "Blackbeard", gender: "M", side: "Ataque", unit: "NAVY SEAL", year: 1, speed: 2 },
    { name: "Valkyrie", gender: "F", side: "Defesa", unit: "NAVY SEAL", year: 1, speed: 2 },
    { name: "Capitão", gender: "M", side: "Ataque", unit: "BOPE", year: 1, speed: 3 },
    { name: "Caveira", gender: "F", side: "Defesa", unit: "BOPE", year: 1, speed: 3 },
    { name: "Hibana", gender: "F", side: "Ataque", unit: "SAT", year: 1, speed: 3 },
    { name: "Echo", gender: "M", side: "Defesa", unit: "SAT", year: 1, speed: 2 },
    { name: "Jackal", gender: "M", side: "Ataque", unit: "GEO", year: 2, speed: 2 },
    { name: "Mira", gender: "F", side: "Defesa", unit: "GEO", year: 2, speed: 1 },
    { name: "Ying", gender: "F", side: "Ataque", unit: "SDU", year: 2, speed: 2 },
    { name: "Lesion", gender: "M", side: "Defesa", unit: "SDU", year: 2, speed: 2 },
    { name: "Ela", gender: "F", side: "Defesa", unit: "GROM", year: 2, speed: 3 },
    { name: "Zofia", gender: "F", side: "Ataque", unit: "GROM", year: 2, speed: 1 },
    { name: "Dokkaebi", gender: "F", side: "Ataque", unit: "707 SMB", year: 2, speed: 2 },
    { name: "Vigil", gender: "M", side: "Defesa", unit: "707 SMB", year: 2, speed: 3 },
    { name: "Lion", gender: "M", side: "Ataque", unit: "CBRN", year: 3, speed: 2 },
    { name: "Finka", gender: "F", side: "Ataque", unit: "CBRN", year: 3, speed: 2 },
    { name: "Maestro", gender: "M", side: "Defesa", unit: "GIS", year: 3, speed: 1 },
    { name: "Alibi", gender: "F", side: "Defesa", unit: "GIS", year: 3, speed: 3 },
    { name: "Maverick", gender: "M", side: "Ataque", unit: "GSUTR", year: 3, speed: 3 },
    { name: "Clash", gender: "F", side: "Defesa", unit: "GSUTR", year: 3, speed: 1 },
    { name: "Nomad", gender: "F", side: "Ataque", unit: "GIGR", year: 3, speed: 2 },
    { name: "Kaid", gender: "M", side: "Defesa", unit: "GIGR", year: 3, speed: 1 },
    { name: "Gridlock", gender: "F", side: "Ataque", unit: "SASR", year: 4, speed: 1 },
    { name: "Mozzie", gender: "M", side: "Defesa", unit: "SASR", year: 4, speed: 2 },
    { name: "Nokk", gender: "F", side: "Ataque", unit: "JAEGER", year: 4, speed: 2 },
    { name: "Warden", gender: "M", side: "Defesa", unit: "SECRET SERV", year: 4, speed: 1 },
    { name: "Amaru", gender: "F", side: "Ataque", unit: "APCA", year: 4, speed: 2 },
    { name: "Goyo", gender: "M", side: "Defesa", unit: "FES", year: 4, speed: 2 },
    { name: "Kali", gender: "F", side: "Ataque", unit: "NIGHTHAVEN", year: 4, speed: 2 },
    { name: "Wamai", gender: "M", side: "Defesa", unit: "NIGHTHAVEN", year: 4, speed: 2 },
    { name: "Iana", gender: "F", side: "Ataque", unit: "REU", year: 5, speed: 2 },
    { name: "Oryx", gender: "M", side: "Defesa", unit: "UNAFFILIATED", year: 5, speed: 2 },
    { name: "Ace", gender: "M", side: "Ataque", unit: "NIGHTHAVEN", year: 5, speed: 2 },
    { name: "Melusi", gender: "F", side: "Defesa", unit: "ITF", year: 5, speed: 1 },
    { name: "Zero", gender: "M", side: "Ataque", unit: "ROS", year: 5, speed: 3 },
    { name: "Aruni", gender: "F", side: "Defesa", unit: "NIGHTHAVEN", year: 5, speed: 1 },
    { name: "Flores", gender: "M", side: "Ataque", unit: "UNAFFILIATED", year: 6, speed: 2 },
    { name: "Thunderbird", gender: "F", side: "Defesa", unit: "NAKODA", year: 6, speed: 2 },
    { name: "Osa", gender: "F", side: "Ataque", unit: "NIGHTHAVEN", year: 6, speed: 2 },
    { name: "Thorn", gender: "F", side: "Defesa", unit: "GARDA", year: 6, speed: 2 },
    { name: "Azami", gender: "F", side: "Defesa", unit: "UNAFFILIATED", year: 7, speed: 2 },
    { name: "Sens", gender: "NB", side: "Ataque", unit: "WOLFGUARD", year: 7, speed: 3 },
    { name: "Grim", gender: "M", side: "Ataque", unit: "NIGHTHAVEN", year: 7, speed: 3 },
    { name: "Solis", gender: "F", side: "Defesa", unit: "GHOSTEYES", year: 7, speed: 2 },
    { name: "Brava", gender: "F", side: "Ataque", unit: "VIPERSTRIKE", year: 8, speed: 3 },
    { name: "Fenrir", gender: "M", side: "Defesa", unit: "REDHAMMER", year: 8, speed: 2 },
    { name: "Ram", gender: "F", side: "Ataque", unit: "REDHAMMER", year: 8, speed: 1 },
    { name: "Tubarão", gender: "M", side: "Defesa", unit: "WOLFGUARD", year: 8, speed: 2 },
    { name: "Deimos", gender: "M", side: "Ataque", unit: "KERES", year: 9, speed: 2 },
    { name: "Skopos", gender: "F", side: "Defesa", unit: "KERES", year: 9, speed: 2 }
];

const mapList = [
    "Banco", "Fronteira", "Chalé", "Clube", "Litoral", "Consulado",
    "Planície Esmeralda", "Favela", "Fortaleza", "Base Hereford",
    "Residência", "Café Dostoyevsky", "Kanal", "Covil", "Laboratórios Nighthaven",
    "Oregon", "Outback", "Avião Presidencial", "Arranha-Céu",
    "Parque Temático", "Torre", "Mansão", "Iate", "Estádio Bravo"
];

// ==========================================
// FUNÇÕES UTILITÁRIAS
// ==========================================

function getCleanName(name) {
    return name.toLowerCase()
        .replace(/[ãáàâä]/g, 'a')
        .replace(/[éèêë]/g, 'e')
        .replace(/[íìîï]/g, 'i')
        .replace(/[óòôöø]/g, 'o')
        .replace(/[úùûü]/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/[\(\)]/g, '') // Remove os parênteses
        .replace(/ /g, '-')     // Troca espaços por traços
        .replace(/--/g, '-');   // Previne traços duplos se tiver espaço e parênteses juntos
} // <-- Faltava fechar essa chave!

function fallbackImage(img, cleanName, folder) {
    if (img.src.includes('.avif')) {
        img.src = `${folder}/${cleanName}.webp`;
    } else if (img.src.includes('.webp')) {
        img.src = `${folder}/${cleanName}.png`;
    } else if (img.src.includes('.png')) {
        img.src = `${folder}/${cleanName}.jpg`;
    } else {
        img.onerror = null;
        img.src = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='; 
    }
}

function getSeed() {
    const today = new Date();
    return today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
}

// ==========================================
// CONTROLE DE MENUS
// ==========================================

function openMode(mode) {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('operator-mode').style.display = 'none';
    document.getElementById('map-mode').style.display = 'none';
    document.getElementById('subtitle').style.display = 'none';

    if (mode === 'menu') {
        document.getElementById('main-menu').style.display = 'flex';
        document.getElementById('subtitle').style.display = 'block';
        document.getElementById('subtitle').innerText = "Escolha um modo de jogo";
    } else if (mode === 'operator') {
        document.getElementById('operator-mode').style.display = 'flex';
        document.getElementById('subtitle').style.display = 'block';
        document.getElementById('subtitle').innerText = "Adivinhe o Operador do Dia";
    } else if (mode === 'map') {
        document.getElementById('map-mode').style.display = 'flex';
        document.getElementById('subtitle').style.display = 'block';
        document.getElementById('subtitle').innerText = "Adivinhe o Mapa do Dia";
        loadDailyMapImage();
    }
}

// ==========================================
// LÓGICA DO MODO: OPERADOR
// ==========================================

const dailyOperator = operators[Math.floor(Math.abs(Math.sin(getSeed()) * 10000) % operators.length)];

const opInput = document.getElementById('op-guess-input');
const opSuggestions = document.getElementById('op-suggestions');

// VOLTANDO PARA O .includes() COMO SOLICITADO
opInput.addEventListener('input', () => {
    const query = opInput.value.toLowerCase();
    opSuggestions.innerHTML = '';
    
    if (!query) {
        opSuggestions.style.display = 'none';
        return;
    }

    const filtered = operators.filter(op => op.name.toLowerCase().includes(query));

    if (filtered.length > 0) {
        opSuggestions.style.display = 'block';
        filtered.forEach(op => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            
            const cleanName = getCleanName(op.name);
            div.innerHTML = `
                <img src="icons/${cleanName}.avif" alt="${op.name}" class="op-icon" onerror="fallbackImage(this, '${cleanName}', 'icons')">
                <span>${op.name}</span>
            `;

            div.addEventListener('click', () => {
                opInput.value = op.name;
                opSuggestions.style.display = 'none';
                compareOpGuess(op.name);
            });
            opSuggestions.appendChild(div);
        });
    } else {
        opSuggestions.style.display = 'none';
    }
});

function compareOpGuess(guessName) {
    const guess = operators.find(op => op.name.toLowerCase() === guessName.toLowerCase());
    if (!guess) return alert("Operador não encontrado!");

    const results = {
        gender: guess.gender === dailyOperator.gender ? 'correct' : 'wrong',
        side: guess.side === dailyOperator.side ? 'correct' : 'wrong',
        unit: guess.unit === dailyOperator.unit ? 'correct' : 'wrong',
        year: compareNumber(guess.year, dailyOperator.year),
        speed: compareNumber(guess.speed, dailyOperator.speed)
    };

    renderOpResult(guess, results);
    
    if (guess.name === dailyOperator.name) {
        setTimeout(() => alert("Vitória! O operador era " + dailyOperator.name + "!"), 300);
    }
}

function renderOpResult(guess, results) {
    const container = document.getElementById('op-results');
    const row = document.createElement('div');
    row.classList.add('result-row');

    const cleanName = getCleanName(guess.name);

    row.innerHTML = `
        <div class="result-box ${guess.name === dailyOperator.name ? 'correct' : 'wrong'}">
            <img src="icons/${cleanName}.avif" alt="${guess.name}" class="op-icon result-icon" onerror="fallbackImage(this, '${cleanName}', 'icons')">
            <span>${guess.name}</span>
        </div>
        <div class="result-box ${results.gender}">${guess.gender}</div>
        <div class="result-box ${results.side}">${guess.side}</div>
        <div class="result-box ${results.unit}">${guess.unit}</div>
        <div class="result-box ${results.year.class}">Ano ${guess.year} <br> ${results.year.arrow}</div>
        <div class="result-box ${results.speed.class}">${guess.speed} <br> ${results.speed.arrow}</div>
    `;

    container.insertBefore(row, container.firstChild);
    opInput.value = '';
    opSuggestions.style.display = 'none';
}

// ==========================================
// LÓGICA DO MODO: MAPA
// ==========================================

const dailyMap = mapList[Math.floor(Math.abs(Math.cos(getSeed()) * 10000) % mapList.length)];

function loadDailyMapImage() {
    const mapImg = document.getElementById('daily-map-image');
    const cleanMapName = getCleanName(dailyMap);
    
    // Inicia pelo .avif para a "cascata" (avif -> webp -> png -> jpg) funcionar perfeitamente!
    mapImg.src = `maps/${cleanMapName}.avif`;
    mapImg.onerror = function() { fallbackImage(this, cleanMapName, 'maps') };
}

const mapInput = document.getElementById('map-guess-input');
const mapSuggestions = document.getElementById('map-suggestions');

mapInput.addEventListener('input', () => {
    const query = mapInput.value.toLowerCase();
    mapSuggestions.innerHTML = '';
    
    if (!query) {
        mapSuggestions.style.display = 'none';
        return;
    }

    const filtered = mapList.filter(map => map.toLowerCase().includes(query));

    if (filtered.length > 0) {
        mapSuggestions.style.display = 'block';
        filtered.forEach(map => {
            const div = document.createElement('div');
            div.classList.add('suggestion-item');
            div.textContent = map;

            div.addEventListener('click', () => {
                mapInput.value = map;
                mapSuggestions.style.display = 'none';
                compareMapGuess(map);
            });
            mapSuggestions.appendChild(div);
        });
    } else {
        mapSuggestions.style.display = 'none';
    }
});

function compareMapGuess(guessName) {
    const guess = mapList.find(map => map.toLowerCase() === guessName.toLowerCase());
    if (!guess) return alert("Mapa não encontrado!");

    const container = document.getElementById('map-results');
    const item = document.createElement('div');
    item.classList.add('map-result-item');
    
    if (guess === dailyMap) {
        item.classList.add('correct');
        item.textContent = `✅ ${guess} (Correto!)`;
        setTimeout(() => alert("Vitória! O mapa era " + dailyMap + "!"), 300);
    } else {
        item.classList.add('wrong');
        item.textContent = `❌ ${guess}`;
    }

    container.insertBefore(item, container.firstChild);
    mapInput.value = '';
    mapSuggestions.style.display = 'none';
}

// ==========================================
// EVENTOS GERAIS
// ==========================================

function compareNumber(guessNum, secretNum) {
    if (guessNum === secretNum) return { class: 'correct', arrow: '' };
    if (guessNum < secretNum) return { class: 'wrong', arrow: '↑' };
    return { class: 'wrong', arrow: '↓' };
}

document.addEventListener('click', (e) => {
    if (e.target !== opInput) opSuggestions.style.display = 'none';
    if (e.target !== mapInput) mapSuggestions.style.display = 'none';
});

document.getElementById('op-guess-btn').addEventListener('click', () => { if(opInput.value) compareOpGuess(opInput.value); });
opInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && opInput.value) compareOpGuess(opInput.value); });

document.getElementById('map-guess-btn').addEventListener('click', () => { if(mapInput.value) compareMapGuess(mapInput.value); });
mapInput.addEventListener('keypress', (e) => { if (e.key === 'Enter' && mapInput.value) compareMapGuess(mapInput.value); });


