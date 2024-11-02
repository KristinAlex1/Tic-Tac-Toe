let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-game");
let x = document.querySelector(".win");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                disableBoxes();
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    x.classList.add("hide");
    x.innerText = ""; // Clear the winner message

    // Clear the text in all boxes and re-enable them
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

const showWinner = (winner) => {
    x.innerText = "Winner is " + winner;
    x.classList.remove("hide");
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
