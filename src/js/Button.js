class Button extends PIXI.Container {
  constructor(text, textX) {
    super();

    this.text = text;
    this.textX = textX;

    this.pivot.set(57, 25);

    this.createButton();
  }

  createButton() {
    let btn = this.addChild(new PIXI.Graphics().beginFill(0xc3c3c3).drawRoundedRect(0, 0, 115, 50, 10).endFill());

    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round'
  });
  
  const text = btn.addChild(new PIXI.Text(this.text, style));
  text.position.set(this.textX, 13);
  }

  onClick() {
    this.interactive = false;
  
    function animate(time) {
      requestAnimationFrame(animate);
      TWEEN.update(time);
    }
    requestAnimationFrame(animate);
  
    const tween = new TWEEN.Tween(this.scale)
      .to({ x: 0.9, y: 0.9 }, 150)
      .easing(TWEEN.Easing.Quadratic.Out)
      .on('update', ({x, y}) => {
        this.scale.x = x;
        this.scale.y = y;
      })
      .repeat(1).yoyo(true)
      .on('complete', () => {
        this.scale.x = 1;
        this.scale.y = 1;
        this.interactive = true;
      })
      .start();
  };
}