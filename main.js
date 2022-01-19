var gameBoard = document.querySelector(".game-board");
var header = document.querySelector(".player-turn-win-draw");
var gameSpace = document.querySelectorAll(".game-space");
var player1NumOfWins = document.querySelector(".player1-number-of-wins");
var player2NumOfWins = document.querySelector(".player2-number-of-wins");

var game = new Game();
gameBoard.addEventListener("click", function (e) {
  displayMove(e);
});

//displayWins()

function resetTimer() {
  setTimeout(function () {
    reset();
    displayWhoseTurn();
  }, 3000);
}

function displayWhoseTurn() {
  header.innerText = `${game.currentPlayer.id}, it's your turn!`;
}

function displayMove(e) {
  var letter = document.getElementById(e.target.id);
  game.makeAMove(e.target.id);
  letter.innerHTML = `<img class='player${game.currentPlayer.token}-game-token' src='./assets/${game.currentPlayer.token}.png'/>`;
  game.checkForWin();
  if (game.weHaveAWinner) {
    displayWinner(game.currentPlayer);
    game.changeTurn();
  } else if (game.gameIsADraw) {
    game.changeTurn();
    displayDraw();
  } else {
    game.changeTurn();
    displayWhoseTurn();
  }
}

function reset() {
  for (var i = 0; i < gameSpace.length; i++) {
    gameSpace[i].innerHTML = ``;
    game.gameIsADraw = false;
    game.weHaveAWinner = false;
    game.turnCounter = 0;
    game.resetGameboard();
  }
}

function displayWinner(player) {
  header.innerText = `${player.id} Wins!!!`;
  resetTimer();
  displayWins();
}

function displayDraw() {
  header.innerText = `This Game is a DRAW`;
  resetTimer();
}

function displayWins() {
  player1NumOfWins.innerText = game.playerOne.wins;
  player2NumOfWins.innerText = game.playerTwo.wins;
}
