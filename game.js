var player = require('./player');

class Game {
  constructor() {
    const playerOne = new Player({id: 'PlayerOne', token: 'X' , wins: 0})
    const playerTwo = new Player({id: 'PlayerTwo', token: 'O', wins: 0})
    this.playerOneSpacesFilled = []
    this.playerTwoSpaceFilled = []
    this.startsNextGame =
    this.whoseTurn =

  }

  changeTurn() {

  }

  checkForWin() {

  }

  checkForDraw() {

  }

  startsNextGame() {

  }

  resetGameBoard() {

  }
}
