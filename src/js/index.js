// init stage
let lastElement = document.getElementById('lastElement');

const app = new PIXI.Application({
  width: 400, height: 250, backgroundColor: 0xffffff, resolution: window.devicePixelRatio || 1,
});
lastElement.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// create elements
let flag = container.addChild(PIXI.Sprite.from('src/img/flag.jpg'));
flag.scale.set(0.3);

let trump = container.addChild(new Trump());

let btnStop = container.addChild(new Button('Stop!', 35));
btnStop.position.set(300, 60);
let btnRunToYou = container.addChild(new Button('Run to you!', 11));
btnRunToYou.position.set(300, 130);
let btnRunToVoters = container.addChild(new Button('Run to voters!', 3));
btnRunToVoters.position.set(300, 200);

let buttons = [ btnStop, btnRunToYou, btnRunToVoters ];

buttons.forEach((btn, index) => {
  btn.interactive = true;
  btn.buttonMode = true;

  btn.on('pointerdown', () => {
    trump.vanishAnimations();
    btn.onClick();
    switch (index) {
      case 0:
        trump.idle();
        break;
      case 1: 
        trump.runToYou();
        break;
      case 2: 
        trump.runToVoters();
        break;
    }
  });
});