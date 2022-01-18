
var gameBoard = document.querySelector('.game-board')
var header = document.querySelector('.player-turn-win-draw')
var gameSpace = document.querySelectorAll('.game-space')
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
    letter.innerHTML = `<img class='player${game.currentPlayer.token}-game-token' src='./assets/${game.currentPlayer.token}.png'/>`
    displayWhoseTurn()
    displayWinner()
    game.checkForDraw()
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
    displayWins()
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
  player1NumOfWins.innerText = game.playerOne.wins
  player2NumOfWins.innerText = game.playerTwo.wins
}
