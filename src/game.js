Game = {
    init: function() {
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
    },
    preload: function() {
      game.load.image('background', 'assets/images/background.png');
      game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2)
    },
    create: function() {
      game.add.sprite(0, 0, 'background');
      this.horse = game.add.sprite(0, 0, 'horse');
    },
    update: function() {
    }
}

var game = new Phaser.Game(1136, 640, Phaser.AUTO);

game.state.add("game", Game);
game.state.start("game");
