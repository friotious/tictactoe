
var gameBoard = document.querySelector('.game-board')
var header = document.querySelector('.player-turn-win-draw')
var gameSpace = document.querySelectorAll('.game-space')
var displayWinsPlayer1 = document.querySelector('.player1')
var displayWinsPlayer2 = document.querySelector('.player2')
var player1NumOfWins = document.querySelector('.player1-number-of-wins')
var player2NumOfWins = document.querySelector('.player2-number-of-wins')

var game = new Game()
gameBoard.addEventListener('click', function(e){
  displayMove(e)
})

displayWins()

function resetTimer() {
  setTimeout(function() {
    reset()
    displayWhoseTurn()
  }, 3000);
}

function displayWhoseTurn() {
  header.innerText = `${game.currentPlayer.id}, it's your turn!`
}

function displayMove(e) {
  var letter = document.getElementById(e.target.id)
  console.log(e.target.id)
    game.makeAMove(e.target.id)
    letter.innerHTML = `<img class='player2-token-image' src='./assets/${game.currentPlayer.token}.png'/>`
    displayWhoseTurn()
    displayWinner()
    displayDraw()
    game.changeTurn()
}

function reset() {
  for (var i = 0; i < gameSpace.length; i++) {
    gameSpace[i].innerHTML = ``
  }
}

function displayWinner() {
  if (game.weHaveAWinner === true) {
    header.innerText = `${game.currentPlayer.id} Wins!!!`
    resetTimer()
    game.weHaveAWinner = false;
  }
}

function displayDraw() {
  if (game.gameIsADraw === true) {
    game.weHaveAWinner = false;
    header.innerText = `This Game is a DRAW`
    resetTimer()
  }
}
function displayWins() {
  displayWinsPlayer1.innerText = game.playerOne.wins
  displayWinsPlayer2.innerText = game.playerTwo.wins
}
