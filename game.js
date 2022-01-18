class Game {
  constructor() {
    this.playerOne = new Player({
      id: "Player One",
      token: 1,
      wins: 0,
    });
    this.playerTwo = new Player({
      id: "Player Two",
      token: 2,
      wins: 0,
    });

    this.playerOneSpacesFilled = {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    };
    this.playerTwoSpacesFilled = {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
    };
    this.gameIsADraw = false
    this.currentPlayer = this.playerOne
    this.startsNextGame = this.playerTwo
    this.turnCounter = 0;
    this.weHaveAWinner = false;
  }

  resetGameboard() {
    this.changeStartsNextGame()
    Object.keys(this.playerOneSpacesFilled).forEach(v => this.playerOneSpacesFilled[v] = false);
    Object.keys(this.playerTwoSpacesFilled).forEach(v => this.playerTwoSpacesFilled[v] = false);
    this.turnCounter = 0;
    //this.weHaveAWinner = false;
  }

  changeStartsNextGame() {
    if (this.startsNextGame === this.playerTwo) {
      this.startsNextGame = this.playerOne
    } else {
      this.startsNextGame = this.playerTwo
    }
  }

  checkForDraw() {
    if (!this.weHaveAWinner && this.turnCounter === 9) {
      this.resetGameboard()
      console.log('game is a draw')
    }
  }

  addOneTurnCounter() {
    this.turnCounter++
    if (this.turnCounter === 9) {
      this.checkForDraw()
    }
  }

  changeTurn() {
    if (this.currentPlayer === this.playerOne) {
      this.currentPlayer = this.playerTwo
    } else {
      this.currentPlayer = this.playerOne
    }
  }

  checkForWin() {
    var p1 = this.playerOneSpacesFilled
    var win1 = p1.a && p1.b && p1.c;
    var win2 = p1.d && p1.e && p1.f;
    var win3 = p1.g && p1.h && p1.i;
    var win4 = p1.a && p1.d && p1.g;
    var win5 = p1.b && p1.e && p1.h;
    var win6 = p1.c && p1.f && p1.i;
    var win7 = p1.a && p1.e && p1.i;
    var win8 = p1.c && p1.e && p1.g;

    if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
      this.weHaveAWinner = true;
      this.playerOne.addWin()
      this.resetGameboard()
      console.log("PLAYER ONE WON this.startsNextGame should be player2");
    } else {
      var p2 = this.playerTwoSpacesFilled
      var win1 = p2.a && p2.b && p2.c;
      var win2 = p2.d && p2.e && p2.f;
      var win3 = p2.g && p2.h && p2.i;
      var win4 = p2.a && p2.d && p2.g;
      var win5 = p2.b && p2.e && p2.h;
      var win6 = p2.c && p2.f && p2.i;
      var win7 = p2.a && p2.e && p2.i;
      var win8 = p2.c && p2.e && p2.g;

      if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
        this.weHaveAWinner = true;
        this.playerTwo.addWin()
        this.resetGameboard()
        console.log("PLAYER TWO WON this.startsNextGame should be player1");
      }
    }
  }

  makeAMove(space) {
    if (this.currentPlayer === this.playerOne &&
      !this.playerOneSpacesFilled[space] &&
      !this.playerTwoSpacesFilled[space]
    ) {
      this.playerOneSpacesFilled[space] = true;
    } else if (this.currentPlayer === this.playerTwo &&
      !this.playerTwoSpacesFilled[space] &&
      !this.playerOneSpacesFilled[space]
    ) {
      this.playerTwoSpacesFilled[space] = true;
    } else {
      return
    }
    this.addOneTurnCounter()
    this.checkForWin()
  }
}
