
var gameBoard = document.querySelector('.game-board')

var game = new Game()

gameBoard.addEventListener('click', function(e){
  displayMove(e)
})
function displayMove(e) {
  var letter = document.getElementById(e.target.id)
  console.log(e.target.id)
    game.makeAMove(e.target.id)
    letter.innerHTML += `<img class='player2-token-image' src='./assets/${game.currentPlayer.token}.png' alt='' />`
    game.checkForWin()

}
function displayWinner() {
  if (game.weHaveAWinner === true) {
    var header = document.querySelector('.player-turn/win/draw')
    header.innerText = ""
    header.innerText= `${game.currentPlayer.id} Wins!!!`
  }
}
function displayDraw() {

}
////////////////////  write more specific methods ///////////////////
