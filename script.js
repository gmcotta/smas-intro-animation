const GRID_NUMBER = 16;

// config intro transition parts
const upperLeftScreen = document.querySelector("#upper-left");
const upperRightScreen = document.querySelector("#upper-right");
const lowerLeftScreen = document.querySelector("#lower-left");
const lowerRightScreen = document.querySelector("#lower-right");


const introTransitionFadeInFromParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
};

const introTransitionFadeInToParameters = {
  background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
  duration: 1,
  scale: 1.1,
}

const introTransitionFadeOutToParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  duration: 1,
  scale: 1.1,
}
const introTransitionBoxesDuration = '<+=0.04';

gsap.set("#upper-right", {
  transform: "scale(-1, 1)",
  duration: 0,
});

gsap.set("#lower-right", {
  transform: "scale(-1, -1)",
  duration: 0,
});

gsap.set("#lower-left", {
  transform: "scale(1, -1)",
  duration: 0,
});

// create intro transition boxes
let box = document.createElement("span");
box.className = "box";

for (let i = 0; i <= 16 * 16 - 1; i++) {
  // box.innerText = i + 1;
  upperLeftScreen.appendChild(box.cloneNode(true));
}
for (let i = 0; i <= 16 * 16 - 1; i++) {
  upperRightScreen.appendChild(box.cloneNode(false));
}
for (let i = 0; i <= 16 * 16 - 1; i++) {
  lowerLeftScreen.appendChild(box.cloneNode(false));
}
for (let i = 0; i <= 16 * 16 - 1; i++) {
  lowerRightScreen.appendChild(box.cloneNode(false));
}

// cartrigde and SNES config
const cartridge = document.querySelector('.cartridge');
const snesPowerLed = document.querySelector('.snes-body__power-indicator');

const tvScreenTop = document.querySelector('.corner-2');
const tvScreenLeft = document.querySelector('.corner-4');
const tvScreenCenter = document.querySelector('.corner-5');
const tvScreenRight = document.querySelector('.corner-6');
const tvScreenBottom = document.querySelector('.corner-8');

// game splash screen config
const gameSplashScreenCoin = document.querySelector('.game-splash-screen__coin');
const gameSplashScreenCoinShimmer = document.querySelector('.game-splash-screen-coin__shimmer');
const gameSplashScreenLogo = document.querySelector('.game-splash-screen__logo');

gsap.set([gameSplashScreenCoin, gameSplashScreenLogo], { autoAlpha: 0, duration: 0 });

// game intro animation config
const gameIntroFrame1 = document.querySelector('.frame-1');
const gameIntroFrame2 = document.querySelector('.frame-2');
const gameIntroFrame3 = document.querySelector('.frame-3');
const gameIntroFrame4 = document.querySelector('.frame-4');
const gameIntroFrame5 = document.querySelector('.frame-5');

gsap.set([gameIntroFrame1, gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5], { autoAlpha: 0, duration: 0 });

// cartridge floating animation
const cartridgeFloatingTl = gsap.timeline();
cartridgeFloatingTl.fromTo(
  cartridge, 
  { bottom: '60%' }, 
  { bottom: '50%', duration: 1, ease: 'power2.easeInOut', repeat: -1, yoyo: true }
);

// main timeline
const startAnimation = () => {
  // connect cartridge
  cartridgeFloatingTl.pause();
  const mainTl = gsap.timeline();
  mainTl.to(cartridge, { bottom: '12%', duration: 1, ease: 'power2.easeInOut' });
  
  // turn SNES and TV on
  mainTl.to(snesPowerLed, { backgroundColor: '#e41516', duration: 0.5 })
  mainTl.to(
    [tvScreenBottom, tvScreenCenter, tvScreenLeft, tvScreenRight, tvScreenTop], 
    { backgroundColor: '#000', duration: 0 }, '<+=0.4');
  
    // splash screen
    mainTl.to([gameSplashScreenCoin, gameSplashScreenLogo], {autoAlpha: 1, duration: 0.5 });
  mainTl.fromTo(
    gameSplashScreenCoinShimmer, 
    { background: 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 0% rgba(0,0,0,0) 100%)' },
    { background: 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 1000%, rgba(0,0,0,0) 100%)', duration: 0.8 },
    '<+=1'
  );
  mainTl.set(gameSplashScreenCoinShimmer, { autoAlpha: 0, duration: 0 });
  mainTl.to([gameSplashScreenCoin, gameSplashScreenLogo], {autoAlpha: 0, duration: 0.5, }, '<+=1');
  
  // intro animation
  for (let i = 0; i < 2; i++) {
    mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
    mainTl.set([gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5], { autoAlpha: 0, duration: 0 });  
  }
  mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame5, { autoAlpha: 1, duration: 0.4 });
  mainTl.set([gameIntroFrame1, gameIntroFrame2, gameIntroFrame3, gameIntroFrame4], { autoAlpha: 0, duration: 0 }, '<+=2');
  
  // intro transition
  mainTl.set([upperLeftScreen, upperRightScreen, lowerLeftScreen, lowerRightScreen], { zIndex: 20, duration: 0 });
  for (let j = 0; j <= GRID_NUMBER - 1; j++) {
    let boxes = [];
    for (let i = 1; i <= GRID_NUMBER - j; i++) {
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`
      );
    }
    mainTl.fromTo(
      boxes,
      introTransitionFadeInFromParameters,
      introTransitionFadeInToParameters,
      introTransitionBoxesDuration
    );
  }

  mainTl.call(() => null, [], '<+=1');

  for (let j = GRID_NUMBER - 1; j >= 0; j--) {
    let boxes = [];
    for (let i = GRID_NUMBER - j; i >= 1; i--) {
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`
      );
    }
    mainTl.to(
      boxes,
      introTransitionFadeOutToParameters,
      introTransitionBoxesDuration
    );
  }
}

cartridge.addEventListener('click', startAnimation);


// intro transition debug
const button = document.querySelector(".play-button");
button.addEventListener("click", () => {
  const tl = gsap.timeline({ 
    paused: true,
    // onUpdate: () => console.log(tl.progress()) 
  });

  for (let j = 0; j <= GRID_NUMBER - 1; j++) {
    // console.log(`stage-${j + 1}`);
    let boxes = [];
    for (let i = 1; i <= GRID_NUMBER - j; i++) {
      // console.log(
      //   i,
      //   i + (gridNumber * j + j),
      //   (i - 1) * (gridNumber - 1) + (i + (gridNumber * j + j))
      // )
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`
      );
    }
    tl.fromTo(
      boxes,
      introTransitionFadeInFromParameters,
      introTransitionFadeInToParameters,
      introTransitionBoxesDuration
    );
  }

  tl.call(() => null, [], '<+=1');

  for (let j = GRID_NUMBER - 1; j >= 0; j--) {
    console.log(j)
    // console.log(`stage-${j + 1}`);
    let boxes = [];
    for (let i = GRID_NUMBER - j; i >= 1; i--) {
      // console.log(i)
      // console.log(
      //   i,
      //   i + (gridNumber * j + j),
      //   (i - 1) * (gridNumber - 1) + (i + (gridNumber * j + j))
      // )
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))})`
      );
    }
    tl.to(
      boxes,
      introTransitionFadeOutToParameters,
      introTransitionBoxesDuration
    );
  }

  // tl.call(() => {
  //   tl.reverse();
  // }, [], '+=0.5');

  if (tl.paused()) {
    tl.play();
    button.innerText = "Stop animation";
  } else {
    tl.pause(0);
    button.innerText = "Play animation";
  }
});
