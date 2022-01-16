class Game {
  constructor() {
    this.playerOne = new Player({
      id: "PlayerOne",
      token: "X",
      wins: 0,
    });
    this.playerTwo = new Player({
      id: "PlayerTwo",
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
    this.currentPlayer = this.playerTwo.token;
    this.startsNextGame = this.playerTwo;
    this.turnCounter = 0;
    this.weHaveAWinner = false;
  }

  changeTurn() {
    if (this.currentPlayer === this.playerOne.token) {
      this.currentPlayer = this.playerTwo.token
    } else {
      this.currentPlayer = this.playerOne.token
  }
}

makeAMove(space) {
  if (
    this.currentPlayer === this.playerOne.token &&
    !this.playerOneSpacesFilled[space]
  ) {
    this.playerOneSpacesFilled[space] = true;
    console.log("this ONE  worked");
  } else if (this.currentPlayer === this.playerTwo.token &&
    !this.playerTwoSpacesFilled[space]
  ) {
    this.playerTwoSpacesFilled[space] = true;
    console.log("this TWO worked")
  }
  addOneTurnCounter()
  changeTurn()
  checkForWin()
}

addOneTurnCounter() {
  this.turnCounter++
  if (this.turnCounter === 9) {
    checkForDraw()
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
    changeStartsNextGame()
    console.log("PLAYER ONE WON");
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
      changeStartsNextGame()
      console.log("PLAYER TWO WON");

  }
}
}

checkForDraw() {
  if (!this.weHaveAWinner) {
    console.log('game is a draw')
  }
}

changeStartsNextGame() {
  if (this.startsNextGame === this.playerTwo.token) {
    this.startsNextGame = this.playerOne.token
  } else {
    this.startsNextGame = this.playerTwo.token
  }
}

resetGameboard() {}
}
