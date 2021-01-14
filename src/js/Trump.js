class Trump extends PIXI.Container {
  constructor() {
    super();

    this.idle();
  }

  idle() {
    let trumpIdleImg = [
      'src/img/idle/trump_iddle_0000_0000.png',
      'src/img/idle/trump_iddle_0000_0001.png',
      'src/img/idle/trump_iddle_0000_0002.png',
      'src/img/idle/trump_iddle_0000_0003.png',
      'src/img/idle/trump_iddle_0000_0004.png',
      'src/img/idle/trump_iddle_0000_0005.png',
      'src/img/idle/trump_iddle_0000_0006.png',
      'src/img/idle/trump_iddle_0000_0007.png',
      'src/img/idle/trump_iddle_0000_0008.png',
      'src/img/idle/trump_iddle_0000_0009.png',
    ];
    let textureArray = [];
    
    for (let i=0; i < trumpIdleImg.length; i++)
    {
         let texture = PIXI.Texture.from(trumpIdleImg[i]);
         textureArray.push(texture);
    };
    
    this.idleAnim = this.addChild(new PIXI.AnimatedSprite(textureArray));
    this.idleAnim.animationSpeed = 0.4;
    this.idleAnim.alpha = 1;
    this.idleAnim.play();
  }

  runToYou() {
    let trumpRunImg = [
      'src/img/runToYou/trump_run_0000_0000.png',
      'src/img/runToYou/trump_run_0000_0001.png',
      'src/img/runToYou/trump_run_0000_0002.png',
      'src/img/runToYou/trump_run_0000_0003.png',
      'src/img/runToYou/trump_run_0000_0004.png',
      'src/img/runToYou/trump_run_0000_0005.png',
    ];
    let textureArray = [];
    
    for (let i=0; i < trumpRunImg.length; i++)
    {
         let texture = PIXI.Texture.from(trumpRunImg[i]);
         textureArray.push(texture);
    };
    
    this.runToYouAnim = this.addChild(new PIXI.AnimatedSprite(textureArray));
    this.runToYouAnim.animationSpeed = 0.25;
    this.runToYouAnim.alpha = 1;
    this.runToYouAnim.play();
  }

  runToVoters() {
    let trumpRunImg = [
      'src/img/runToVoters/trump_run_0001_0000.png',
      'src/img/runToVoters/trump_run_0001_0001.png',
      'src/img/runToVoters/trump_run_0001_0002.png',
      'src/img/runToVoters/trump_run_0001_0003.png',
      'src/img/runToVoters/trump_run_0001_0004.png',
      'src/img/runToVoters/trump_run_0001_0005.png',
    ];
    let textureArray = [];
    
    for (let i=0; i < trumpRunImg.length; i++)
    {
         let texture = PIXI.Texture.from(trumpRunImg[i]);
         textureArray.push(texture);
    };
    
    this.runToVotersAnim = this.addChild(new PIXI.AnimatedSprite(textureArray));
    this.runToVotersAnim.animationSpeed = 0.2;
    this.runToVotersAnim.alpha = 1;
    this.runToVotersAnim.play();
  }

  vanishAnimations() {
    if(this.idleAnim) this.idleAnim.alpha = 0;
    if(this.runToVotersAnim) this.runToVotersAnim.alpha = 0;
    if(this. runToYouAnim) this.runToYouAnim.alpha = 0;
  }
}