const cols = 6;
const rows = 5;
const lowSyms = ['10', 'J', 'Q', 'K', 'A'];
const highSyms = ['🪤', '🧀', '🍺', '🥖', '🎩'];
const RAINBOW = '🌈';

let balance = 100.00;
let bet = 1.00;
let isProcessing = false;
let grid = []; 
let domGrid = []; 
let totalWin = 0;

const slotArea = document.getElementById('slotArea');
const balanceEl = document.getElementById('balance');
const betEl = document.getElementById('bet');
const winEl = document.getElementById('win');
const msgEl = document.getElementById('msg');
const spinBtn = document.getElementById('spinBtn');

const wait = ms => new Promise(res => setTimeout(res, ms));

function getRandomSymbol() {
    let pool = [...lowSyms, ...lowSyms, ...lowSyms, ...highSyms];
    if (Math.random() < 0.05) pool.push(RAINBOW);
    return pool[Math.floor(Math.random() * pool.length)];
}

function getPayout(symbol, count, currentBet) {
    let mult = 0;
    if (lowSyms.includes(symbol)) {
        if(count === 5) mult = 0.1;
        else if(count === 6) mult = 0.2;
        else if(count >= 7 && count <= 8) mult = 0.5;
        else if(count >= 9 && count <= 10) mult = 1.5;
        else if(count >= 11 && count <= 12) mult = 5;
        else if(count >= 13) mult = 15;
    } else {
        let base = (symbol === '🎩') ? 1.0 : (['🍺','🥖'].includes(symbol) ? 0.5 : 0.3);
        if(count === 5) mult = base;
        else if(count === 6) mult = base * 1.5;
        else if(count >= 7 && count <= 8) mult = base * 3;
        else if(count >= 9 && count <= 10) mult = base * 10;
        else if(count >= 11 && count <= 12) mult = base * 30;
        else if(count >= 13) mult = base * 100;
    }
    return mult * currentBet;
}

function getCoinMultiplier() {
    let val = Math.random();
    if (val < 0.7) return [0.2, 0.5, 1, 2, 3, 4][Math.floor(Math.random()*6)];
    if (val < 0.95) return [5, 10, 15, 20][Math.floor(Math.random()*4)];
    return [25, 50, 100][Math.floor(Math.random()*3)];
}

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        if (!grid[c]) grid[c] = [];
        if (!domGrid[c]) domGrid[c] = [];

        let wrapper = document.createElement('div');
        wrapper.className = 'cell-wrapper';
        
        let symEl = document.createElement('div');
        symEl.className = 'symbol';
        
        let coinEl = document.createElement('div');
        coinEl.className = 'coin-val';

        wrapper.appendChild(symEl);
        wrapper.appendChild(coinEl);
        slotArea.appendChild(wrapper);

        domGrid[c][r] = { wrapper, symEl, coinEl };
        grid[c][r] = { symbol: getRandomSymbol(), isGolden: false };
    }
}

function renderGrid(animateDrop = false) {
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            let data = grid[c][r];
            let dom = domGrid[c][r];
            
            dom.symEl.innerText = data.symbol;
            dom.symEl.className = 'symbol';
            if (lowSyms.includes(data.symbol)) {
                dom.symEl.classList.add('text-sym', `sym-${data.symbol}`);
            }
            if (animateDrop) dom.symEl.classList.add('falling');
            
            if (data.isGolden) dom.wrapper.classList.add('golden');
            else dom.wrapper.classList.remove('golden');
        }
    }
}

renderGrid();

function changeBet(amount) {
    if (isProcessing) return;
    let newBet = bet + amount;
    if (newBet >= 0.10 && newBet <= 100) {
        bet = newBet;
        betEl.innerText = bet.toFixed(2);
    }
}

async function startSpin() {
    if (isProcessing) return;
    if (balance < bet) {
        msgEl.innerText = "BRAK ŚRODKÓW!";
        return;
    }

    isProcessing = true;
    spinBtn.disabled = true;
    document.getElementById('btnMinus').disabled = true;
    document.getElementById('btnPlus').disabled = true;

    balance -= bet;
    totalWin = 0;
    balanceEl.innerText = balance.toFixed(2);
    winEl.innerText = "0.00";
    msgEl.innerText = "KASKADA W TOKU...";

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            grid[c][r].isGolden = false;
            domGrid[c][r].coinEl.classList.remove('show');
            grid[c][r].symbol = getRandomSymbol();
        }
    }

    renderGrid(true);
    await wait(400);
    await resolveBoard();
}

function findClusters() {
    let visited = Array(cols).fill(null).map(() => Array(rows).fill(false));
    let clusters = [];

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (!visited[c][r] && grid[c][r].symbol !== RAINBOW && grid[c][r].symbol !== '') {
                let targetSym = grid[c][r].symbol;
                let currentCluster = [];
                let stack = [{c, r}];

                while (stack.length > 0) {
                    let {c: currC, r: currR} = stack.pop();
                    
                    if (currC < 0 || currC >= cols || currR < 0 || currR >= rows) continue;
                    if (visited[currC][currR]) continue;
                    if (grid[currC][currR].symbol !== targetSym) continue;

                    visited[currC][currR] = true;
                    currentCluster.push({c: currC, r: currR});

                    stack.push({c: currC + 1, r: currR});
                    stack.push({c: currC - 1, r: currR});
                    stack.push({c: currC, r: currR + 1});
                    stack.push({c: currC, r: currR - 1});
                }

                if (currentCluster.length >= 5) {
                    clusters.push({symbol: targetSym, cells: currentCluster});
                }
            }
        }
    }
    return clusters;
}

async function resolveBoard() {
    let clusters = findClusters();

    if (clusters.length > 0) {
        let spinWin = 0;
        for (let cluster of clusters) {
            spinWin += getPayout(cluster.symbol, cluster.cells.length, bet);
            
            for (let cell of cluster.cells) {
                grid[cell.c][cell.r].isGolden = true;
                domGrid[cell.c][cell.r].wrapper.classList.add('golden');
                domGrid[cell.c][cell.r].symEl.classList.add('win-pop');
            }
        }

        totalWin += spinWin;
        winEl.innerText = totalWin.toFixed(2);
        msgEl.innerText = `KLASTER: +${spinWin.toFixed(2)} €`;

        await wait(500);

        for (let c = 0; c < cols; c++) {
            let remainingSymbols = [];
            
            for (let r = rows - 1; r >= 0; r--) {
                let isDestroyed = false;
                for (let cluster of clusters) {
                    if (cluster.cells.some(cell => cell.c === c && cell.r === r)) {
                        isDestroyed = true; break;
                    }
                }
                if (!isDestroyed) {
                    remainingSymbols.unshift(grid[c][r].symbol);
                }
            }

            while (remainingSymbols.length < rows) {
                remainingSymbols.unshift(getRandomSymbol());
            }

            for (let r = 0; r < rows; r++) {
                grid[c][r].symbol = remainingSymbols[r];
            }
        }

        renderGrid(true);
        await wait(400);

        await resolveBoard();
    } else {
        await checkRainbowFeature();
    }
}

async function checkRainbowFeature() {
    let hasRainbow = false;
    let goldenCells = [];

    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (grid[c][r].symbol === RAINBOW) hasRainbow = true;
            if (grid[c][r].isGolden) goldenCells.push({c, r});
        }
    }

    if (hasRainbow && goldenCells.length > 0) {
        msgEl.innerText = "TĘCZA AKTYWUJE MONETY!";
        await wait(500);

        let coinWin = 0;
        for (let cell of goldenCells) {
            let dom = domGrid[cell.c][cell.r];
            let mult = getCoinMultiplier();
            let val = mult * bet;
            coinWin += val;

            dom.symEl.style.opacity = '0';
            dom.coinEl.innerText = val >= 25 ? `${val.toFixed(0)}x` : val.toFixed(1);
            if(mult >= 25) dom.coinEl.style.background = "radial-gradient(circle, #ffcc00, #b8860b)";
            else if(mult >= 5) dom.coinEl.style.background = "radial-gradient(circle, #e0e0e0, #999)";
            else dom.coinEl.style.background = "radial-gradient(circle, #cd7f32, #8b4513)";
            
            dom.coinEl.classList.add('show');
        }

        await wait(1000);
        totalWin += coinWin;
        winEl.innerText = totalWin.toFixed(2);
        msgEl.innerText = `ZŁOTE MONETY: +${coinWin.toFixed(2)} €`;
        await wait(1000);

        for (let cell of goldenCells) {
            grid[cell.c][cell.r].isGolden = false;
            domGrid[cell.c][cell.r].wrapper.classList.remove('golden');
            domGrid[cell.c][cell.r].coinEl.classList.remove('show');
            domGrid[cell.c][cell.r].symEl.style.opacity = '1';
        }
    }

    finishSpin();
}

function finishSpin() {
    if (totalWin > 0) {
        balance += totalWin;
        balanceEl.innerText = balance.toFixed(2);
        winEl.parentElement.classList.add('bump');
        msgEl.innerText = `CAŁKOWITA WYGRANA: ${totalWin.toFixed(2)} €!`;
        setTimeout(() => winEl.parentElement.classList.remove('bump'), 300);
    } else {
        msgEl.innerText = "SPRÓBUJ PONOWNIE!";
    }

    isProcessing = false;
    spinBtn.disabled = false;
    document.getElementById('btnMinus').disabled = false;
    document.getElementById('btnPlus').disabled = false;
}
