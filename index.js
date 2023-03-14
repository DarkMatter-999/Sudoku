const digits = document.getElementById("digits");
const board = document.getElementById("board");

const setGame = () => {
    // Digits
    for (let i = 1; i <= 9; i++) {
        let num = document.createElement("div");
        num.id = i;
        num.innerText = i;
        num.classList.add("number");
        digits.appendChild(num);
    }

    // Board
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = `${r}-${c}`;
            tile.innerText = Math.ceil(Math.random() * 9);
            tile.classList.add("tile");
            board.append(tile);
        }
    }
};

setGame();
