import Phaser from "phaser";

class LoadScene extends Phaser.Scene {
  constructor() {
    super({ key: "LoadScene" });
  }

  preload() {
    this.load.spritesheet("player", "../src/assets/hero.png", {
      frameWidth: 20,
      frameHeight: 32
    });
    this.load.image("floor", "../src/assets/floor.png");
    this.load.image("big", "../src/assets/big.png");
    this.load.image("slope", "../src/assets/slope.png");
  }

  create() {
    this.scene.start("PlayScene");
  }
}

export default LoadScene;
