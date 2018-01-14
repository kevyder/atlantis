Game = {
    init: function() {
    },
    preload: function() {
      game.load.image('background', 'assets/images/background.png');
    },
    create: function() {
      game.add.sprite(0, 0, 'background');
    },
    update: function() {
    }
}

var game = new Phaser.Game(1136, 640, Phaser.AUTO);

game.state.add("game", Game);
game.state.start("game");
