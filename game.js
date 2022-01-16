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
    this.pOneWon = false;
    this.pTwoWon = false;
  }

  changeTurn() {
    if (this.currentPlayer === this.playerOne.token) {
      this.currentPlayer = this.playerTwo.token
    } else {
      this.currentPlayer = this.playerOne.token)
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
}

addOneTurnCounter() {
  this.turnCounter++
}

checkForWin() {}

checkForDraw() {
  if (this.turnCounter === 9 && !this.pOneWon && !this.pTwoWon) {
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
