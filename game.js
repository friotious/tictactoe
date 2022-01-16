class Game {
  constructor() {
    this.playerOne = new Player({
      id: "Player One",
      token: "X",
      wins: 0,
    });
    this.playerTwo = new Player({
      id: "Player Two",
      token: "O",
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
    this.currentPlayer = this.playerOne.id;
    this.startsNextGame = this.playerTwo.id
    this.turnCounter = 0;
    this.weHaveAWinner = false;
  }

  resetGameboard() {
    Object.keys(this.playerOneSpacesFilled).forEach(v => this.playerOneSpacesFilled[v] = false);
    Object.keys(this.playerTwoSpacesFilled).forEach(v => this.playerTwoSpacesFilled[v] = false);
    this.turnCounter = 0;
    this.currentPlayer = this.startsNextGame

  }
  
  changeStartsNextGame() {
    if (this.startsNextGame === this.playerTwo.id) {
      this.startsNextGame = this.playerOne.id
    } else {
      this.startsNextGame = this.playerTwo.id
    }
  }


  checkForDraw() {
    if (!this.weHaveAWinner) {
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
    if (this.currentPlayer === this.playerOne.id) {
      this.currentPlayer = this.playerTwo.id
    } else {
      this.currentPlayer = this.playerOne.id
    }
  }


  checkForWin() {
    var win1 = this.playerOneSpacesFilled.a && this.playerOneSpacesFilled.b && this.playerOneSpacesFilled.c;
    var win2 = this.playerOneSpacesFilled.d && this.playerOneSpacesFilled.e && this.playerOneSpacesFilled.f;
    var win3 = this.playerOneSpacesFilled.g && this.playerOneSpacesFilled.h && this.playerOneSpacesFilled.i;
    var win4 = this.playerOneSpacesFilled.a && this.playerOneSpacesFilled.d && this.playerOneSpacesFilled.g;
    var win5 = this.playerOneSpacesFilled.b && this.playerOneSpacesFilled.e && this.playerOneSpacesFilled.h;
    var win6 = this.playerOneSpacesFilled.c && this.playerOneSpacesFilled.f && this.playerOneSpacesFilled.i;
    var win7 = this.playerOneSpacesFilled.a && this.playerOneSpacesFilled.e && this.playerOneSpacesFilled.i;
    var win8 = this.playerOneSpacesFilled.c && this.playerOneSpacesFilled.e && this.playerOneSpacesFilled.g;

    if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
      this.weHaveAWinner = true;
      this.playerOne.addWin()
      this.changeStartsNextGame()
      this.resetGameboard()
      console.log("PLAYER ONE WON this.startsNextGame should be player2");
    } else {
      var win1 = this.playerTwoSpacesFilled.a && this.playerTwoSpacesFilled.b && this.playerTwoSpacesFilled.c;
      var win2 = this.playerTwoSpacesFilled.d && this.playerTwoSpacesFilled.e && this.playerTwoSpacesFilled.f;
      var win3 = this.playerTwoSpacesFilled.g && this.playerTwoSpacesFilled.h && this.playerTwoSpacesFilled.i;
      var win4 = this.playerTwoSpacesFilled.a && this.playerTwoSpacesFilled.d && this.playerTwoSpacesFilled.g;
      var win5 = this.playerTwoSpacesFilled.b && this.playerTwoSpacesFilled.e && this.playerTwoSpacesFilled.h;
      var win6 = this.playerTwoSpacesFilled.c && this.playerTwoSpacesFilled.f && this.playerTwoSpacesFilled.i;
      var win7 = this.playerTwoSpacesFilled.a && this.playerTwoSpacesFilled.e && this.playerTwoSpacesFilled.i;
      var win8 = this.playerTwoSpacesFilled.c && this.playerTwoSpacesFilled.e && this.playerTwoSpacesFilled.g;

      if (win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
        this.weHaveAWinner = true;
        this.playerOne.addWin()
        this.changeStartsNextGame()
        this.resetGameboard()
        console.log("PLAYER TWO WON this.startsNextGame should be player1");
      }
    }
  }

  makeAMove(space) {
    if (
      this.currentPlayer === this.playerOne.id &&
      !this.playerOneSpacesFilled[space]
    ) {
      this.playerOneSpacesFilled[space] = true;
      console.log(this.playerOneSpacesFilled);
    } else if (this.currentPlayer === this.playerTwo.id &&
      !this.playerTwoSpacesFilled[space]
    ) {
      this.playerTwoSpacesFilled[space] = true;
      console.log(this.playerTwoSpacesFilled)
    }
    this.addOneTurnCounter()
    this.changeTurn()
    this.checkForWin()
  }
}
