class Player {
  constructor() {
    this.index = null;
    this.name = null;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
      console.log(playerCount);
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
    });
  }
  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", function (data) {
      allPlayers = data.val();
    });
  }
}
