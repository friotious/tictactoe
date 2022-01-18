
var gameBoard = document.querySelector('.game-board')
var header = document.querySelector('.player-turn-win-draw')
var gameSpace = document.querySelectorAll('.game-space')
//var gameSpace = document.getElementsByClassName('.game-space')
//var gameSpace = document.querySelector('.space-a')
var player1NumOfWins = document.querySelector('.player1-number-of-wins')
var player2NumOfWins = document.querySelector('.player2-number-of-wins')

var game = new Game()

gameBoard.addEventListener('click', function(e){
  displayMove(e)
})

function displayMove(e) {
  var letter = document.getElementById(e.target.id)
  console.log(e.target.id)
    game.makeAMove(e.target.id)
    letter.innerHTML = `<img class='player2-token-image' src='./assets/${game.currentPlayer.token}.png'/>`
    game.changeTurn()
    displayWinner()
}

function reset() {
  for (var i = 0; i < gameSpace.length; i++) {
    gameSpace[i].innerHTML = ``
  }
  //gameSpaces.innerHTML = ""
}

function displayWinner() {
  if (game.weHaveAWinner === true) {
    header.innerText = `${game.currentPlayer.id} Wins!!!`
    reset()
    game.weHaveAWinner = false;
  }
}

function displayDraw() {
  if (game.gameIsADraw === true) {
    reset()
    game.weHaveAWinner = false;
    header.innerText = `This Game is a DRAW`
  }
}
