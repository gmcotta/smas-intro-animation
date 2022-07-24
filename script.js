let box = document.createElement("span");
box.className = "box";

const upperLeftScreen = document.querySelector("#upper-left");
const upperRightScreen = document.querySelector("#upper-right");
const lowerLeftScreen = document.querySelector("#lower-left");
const lowerRightScreen = document.querySelector("#lower-right");

const cartridge = document.querySelector('.cartridge');
const snesPowerLed = document.querySelector('.snes-body__power-indicator');

const tvScreenTop = document.querySelector('.corner-2');
const tvScreenLeft = document.querySelector('.corner-4');
const tvScreenCenter = document.querySelector('.corner-5');
const tvScreenRight = document.querySelector('.corner-6');
const tvScreenBottom = document.querySelector('.corner-8');

const gameSplashScreenCoin = document.querySelector('.game-splash-screen__coin');
const gameSplashScreenCoinShimmer = document.querySelector('.game-splash-screen-coin__shimmer');
const gameSplashScreenLogo = document.querySelector('.game-splash-screen__logo');

gsap.set([gameSplashScreenCoin, gameSplashScreenLogo], { autoAlpha: 0, duration: 0 });

const gameIntroFrame1 = document.querySelector('.frame-1');
const gameIntroFrame2 = document.querySelector('.frame-2');
const gameIntroFrame3 = document.querySelector('.frame-3');
const gameIntroFrame4 = document.querySelector('.frame-4');
const gameIntroFrame5 = document.querySelector('.frame-5');

gsap.set([gameIntroFrame1, gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5], { autoAlpha: 0, duration: 0 });

const cartridgeFloatingTl = gsap.timeline();
cartridgeFloatingTl.fromTo(
  cartridge, 
  { bottom: '60%' }, 
  { bottom: '50%', duration: 1, ease: 'power2.easeInOut', repeat: -1, yoyo: true }
);

const startAnimation = () => {
  // connect cartridge
  cartridgeFloatingTl.pause();
  const mainTl = gsap.timeline();
  mainTl.to(cartridge, { bottom: '12%', duration: 1, ease: 'power2.easeInOut' });
  // turn SNES led on
  mainTl.to(snesPowerLed, { backgroundColor: '#e41516', duration: 0.5 })
  // turn TV on
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
  mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
  mainTl.set([gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5], { autoAlpha: 0, duration: 0 });
  mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
  mainTl.set([gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5], { autoAlpha: 0, duration: 0 });
  mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame5, { autoAlpha: 1, duration: 0.4 });
  mainTl.set([gameIntroFrame1, gameIntroFrame2, gameIntroFrame3, gameIntroFrame4], { autoAlpha: 0, duration: 0 }, '<+=2');
  mainTl.set([upperLeftScreen, upperRightScreen, lowerLeftScreen, lowerRightScreen], { zIndex: 20, duration: 0 });
  // intro transition - must refactor
  mainTl.add('introTransition');
  
}

cartridge.addEventListener('click', startAnimation);

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


const button = document.querySelector(".play-button");

const fromParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
};

const toParameters = {
  background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
  duration: 0.5,
  scale: 1.1,
}
const time = '<+=0.05';

button.addEventListener("click", () => {
  const gridNumber = 16;
  const tl = gsap.timeline({ 
    paused: true, 
    // onUpdate: () => console.log(tl.progress()) 
  });
  tl.addLabel('stage-1');
  tl.addLabel('stage-2', '0.1');
  tl.addLabel('stage-3', '0.2');
  tl.addLabel('stage-4', '0.3');
  tl.addLabel('stage-5', '0.4');
  tl.addLabel('stage-6', '0.5');
  tl.addLabel('stage-7', '0.6');
  tl.addLabel('stage-8', '0.7');
  tl.addLabel('stage-9', '0.8');
  tl.addLabel('stage-10', '0.9');
  tl.addLabel('stage-11', '1');
  tl.addLabel('stage-12', '1.1');
  tl.addLabel('stage-13', '1.2');
  tl.addLabel('stage-14', '1.3');
  tl.addLabel('stage-15', '1.4');
  tl.addLabel('stage-16', '1.5');

  console.log('stage-1');
  for (let i = 1; i <= gridNumber; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 0 + 0)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 0 + 0))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 0 + 0)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 0 + 0))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 0 + 0)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 0 + 0))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 0 + 0)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 0 + 0))})`,
      ],
      fromParameters,
      toParameters,
      `stage-1+=${i * 0.05}`
    )
  }
  console.log('stage-2');
  for (let i = 1; i <= gridNumber - 1; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 1 + 1)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 1 + 1))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 1 + 1)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 1 + 1))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 1 + 1)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 1 + 1))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 1 + 1)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 1 + 1))})`,
      ],
      fromParameters,
      toParameters,
      `stage-2+=${i * 0.05}`
    )
  }
  console.log('stage-3');
  for (let i = 1; i <= gridNumber - 2; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 2 + 2)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 2 + 2))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 2 + 2)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 2 + 2))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 2 + 2)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 2 + 2))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 2 + 2)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 2 + 2))})`,
      ],
      fromParameters,
      toParameters,
      `stage-3+=${i * 0.05}`
    )
  }
  console.log('stage-4');
  for (let i = 1; i <= gridNumber - 3; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 3 + 3)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 3 + 3))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 3 + 3)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 3 + 3))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 3 + 3)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 3 + 3))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 3 + 3)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 3 + 3))})`,

      ],
      fromParameters,
      toParameters,
      `stage-4+=${i * 0.05}`
    )
  }
  console.log('stage-5');
  for (let i = 1; i <= gridNumber - 4; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 4 + 4)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 4 + 4))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 4 + 4)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 4 + 4))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 4 + 4)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 4 + 4))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 4 + 4)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 4 + 4))})`,

      ],
      fromParameters,
      toParameters,
      `stage-5+=${i * 0.05}`
    )
  }
  console.log('stage-6');
  for (let i = 1; i <= gridNumber - 5; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 5 + 5)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 5 + 5))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 5 + 5)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 5 + 5))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 5 + 5)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 5 + 5))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 5 + 5)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 5 + 5))})`,
      ],
      fromParameters,
      toParameters,
      `stage-6+=${i * 0.05}`
    )
  }
  console.log('stage-7');
  for (let i = 1; i <= gridNumber - 6; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 6 + 6)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 6 + 6))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 6 + 6)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 6 + 6))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 6 + 6)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 6 + 6))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 6 + 6)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 6 + 6))})`,

      ],
      fromParameters,
      toParameters,
      `stage-7+=${i * 0.05}`
    )
  }
  console.log('stage-8');
  for (let i = 1; i <= gridNumber - 7; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 7 + 7)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 7 + 7))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 7 + 7)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 7 + 7))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 7 + 7)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 7 + 7))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 7 + 7)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 7 + 7))})`,

      ],
      fromParameters,
      toParameters,
      `stage-8+=${i * 0.05}`
    )
  }
  console.log('stage-9');
  for (let i = 1; i <= gridNumber - 8; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 8 + 8)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 8 + 8))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 8 + 8)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 8 + 8))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 8 + 8)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 8 + 8))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 8 + 8)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 8 + 8))})`,

      ],
      fromParameters,
      toParameters,
      `stage-9+=${i * 0.05}`
    )
  }
  console.log('stage-10');
  for (let i = 1; i <= gridNumber - 9; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 9 + 9)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 9 + 9))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 9 + 9)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 9 + 9))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 9 + 9)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 9 + 9))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 9 + 9)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 9 + 9))})`,

      ],
      fromParameters,
      toParameters,
      `stage-10+=${i * 0.05}`
    )
  }
  console.log('stage-11');
  for (let i = 1; i <= gridNumber - 10; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 10 + 10)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 10 + 10))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 10 + 10)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 10 + 10))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 10 + 10)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 10 + 10))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 10 + 10)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 10 + 10))})`,

      ],
      fromParameters,
      toParameters,
      `stage-11+=${i * 0.05}`
    )
  }
  console.log('stage-12');
  for (let i = 1; i <= gridNumber - 11; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 11 + 11)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 11 + 11))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 11 + 11)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 11 + 11))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 11 + 11)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 11 + 11))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 11 + 11)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 11 + 11))})`,

      ],
      fromParameters,
      toParameters,
      `stage-12+=${i * 0.05}`
    )
  }
  console.log('stage-13');
  for (let i = 1; i <= gridNumber - 12; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 12 + 12)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 12 + 12))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 12 + 12)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 12 + 12))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 12 + 12)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 12 + 12))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 12 + 12)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 12 + 12))})`,

      ],
      fromParameters,
      toParameters,
      `stage-13+=${i * 0.05}`
    )
  }
  console.log('stage-14');
  for (let i = 1; i <= gridNumber - 13; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 13 + 13)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 13 + 13))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 13 + 13)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 13 + 13))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 13 + 13)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 13 + 13))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 13 + 13)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 13 + 13))})`,

      ],
      fromParameters,
      toParameters,
      `stage-14+=${i * 0.05}`
    )
  }
  console.log('stage-15');
  for (let i = 1; i <= gridNumber - 14; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 14 + 14)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 14 + 14))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 14 + 14)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 14 + 14))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 14 + 14)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 14 + 14))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 14 + 14)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 14 + 14))})`,

      ],
      fromParameters,
      toParameters,
      `stage-15+=${i * 0.05}`
    )
  }
  console.log('stage-16');
  for (let i = 1; i <= gridNumber - 15; i++) {
    tl.fromTo(
      [
        `#upper-left span.box:nth-child(${i + (gridNumber * 15 + 15)})`,
        `#upper-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 15 + 15))})`,
        `#upper-right span.box:nth-child(${i + (gridNumber * 15 + 15)})`,
        `#upper-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 15 + 15))})`,
        `#lower-left span.box:nth-child(${i + (gridNumber * 15 + 15)})`,
        `#lower-left span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 15 + 15))})`,
        `#lower-right span.box:nth-child(${i + (gridNumber * 15 + 15)})`,
        `#lower-right span.box:nth-child(${(i - 1) * (gridNumber - 1) + (i + (gridNumber * 15 + 15))})`,

      ],
      fromParameters,
      toParameters,
      `stage-16+=${i * 0.05}`
    )
  }

  // tl.call(() => {
  //   tl.reverse();
  // }, [], '+=1');

  if (tl.paused()) {
    tl.play();
    button.innerText = "Stop animation";
  } else {
    tl.pause(0);
    button.innerText = "Play animation";
  }
});
