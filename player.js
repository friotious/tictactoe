class Player {
  constructor(player) {
    this.name = player.name
    this.id = player.id
    this.token = player.token;
    this.wins = player.wins;
  }

  addWin() {
    this.wins++
  }
}
