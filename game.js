class Game {
  constructor() {
    this.playerOne = new Player({
      id: 'PlayerOne',
      token: 'X',
      wins: 0,
      spacesFilled: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
      }
    })
    this.playerTwo = new Player({
      id: 'PlayerTwo',
      token: 'O',
      wins: 0,
      spacesFilled: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
      }
    })
    this.currentPlayer = this.playerOne;
    this.startsNextGame = this.playerTwo;

  }
  changeTurn() {

  }

  checkForDraw() {


  }

  startsNextGame() {

  }

  resetGameboard() {

  }

}









//module.exports = game
