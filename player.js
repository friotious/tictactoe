class Player {
  constructor(player) {
    this.id = player.id
    this.token = player.token;
    this.wins = 0

  }

  addWin() {
    this.wins++
  }
}
