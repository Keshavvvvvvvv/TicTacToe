console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

//Function to change the turn
function changeTurn() {
    return turn === "X"?"O" : "X";
}

// Function to check for a win
function checkWin() {
    music.play();
    let boxText = document.getElementsByClassName("boxText");
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    win.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " won";
            gameOver = true;
            //document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            let img = document.querySelector(".imgBox").getElementsByTagName("img")[0];
            img.style.width = "200px";  // Adjust the width to your desired size
            img.style.opacity = "1";    // Set opacity to 1 to make it visible

        }
    });
}


// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// add onclick listener to reset
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
