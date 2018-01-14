Game = {
  init: function() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    this.flagfirstMouseDown = false;
  },
  preload: function() {
    game.load.image('background', 'assets/images/background.png');
    game.load.spritesheet('horse', 'assets/images/horse.png', 84, 156, 2)
  },
  create: function() {
    game.add.sprite(0, 0, 'background');
    this.horse = game.add.sprite(0, 0, 'horse');
    this.horse.x = game.width / 2;
    this.horse.y = game.height / 2;
    this.horse.anchor.setTo(0.5);
    game.input.onDown.add(this.onTap, this);
  },
  update: function() {
    if (this.flagfirstMouseDown) {
      var pointerX = game.input.x;
      var pointerY = game.input.y;

      var distX = pointerX - this.horse.x;
      var distY = pointerY - this.horse.y;

      if (distX > 0) {
        this.horse.scale.setTo(1, 1);
      } else {
        this.horse.scale.setTo(-1, 1);
      }

      this.horse.x += distX * 0.03;
      this.horse.y += distY * 0.03;
    }
  },
  onTap:function() {
    this.flagfirstMouseDown = true;
  }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);

game.state.add("game", Game);
game.state.start("game");
