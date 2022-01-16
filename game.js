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
  }

changeTurn() {}

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

addOneTurnCounter() {}

checkForWin() {}

checkForDraw() {}

changeTurn() {}

changeStartsNextGame() {}

resetGameboard() {}
}
