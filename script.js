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

gsap.set([gameSplashScreenCoin, gameSplashScreenLogo], { autoAlpha: 0 });

const cartridgeFloatingTl = gsap.timeline();
cartridgeFloatingTl.fromTo(
  cartridge, 
  { bottom: '60%' }, 
  { bottom: '50%', duration: 1, ease: 'power2.easeInOut', repeat: -1, yoyo: true }
);

const startAnimation = () => {
  cartridgeFloatingTl.pause();
  const mainTl = gsap.timeline();
  mainTl.to(cartridge, { bottom: '12%', duration: 1, ease: 'power2.easeInOut' });
  mainTl.to(snesPowerLed, { backgroundColor: '#e41516', duration: 0.5 })
  mainTl.to(
    [tvScreenBottom, tvScreenCenter, tvScreenLeft, tvScreenRight, tvScreenTop], 
    { backgroundColor: '#000', duration: 0 }, '<+=0.4');
  mainTl.to([gameSplashScreenCoin, gameSplashScreenLogo], {autoAlpha: 1, duration: 0.5 });
  mainTl.fromTo(
    gameSplashScreenCoinShimmer, 
    { background: 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 0% rgba(0,0,0,0) 100%)' },
    { background: 'linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 1000%, rgba(0,0,0,0) 100%)', duration: 0.8 },
    '<+=1'
  );
  mainTl.set(gameSplashScreenCoinShimmer, { autoAlpha: 0, duration: 0 });
  mainTl.to([gameSplashScreenCoin, gameSplashScreenLogo], {autoAlpha: 0, duration: 0.5, }, '<+=1');

}

cartridge.addEventListener('click', startAnimation);

for (let i = 0; i <= 16 * 16 - 1; i++) {
  upperLeftScreen.appendChild(box.cloneNode(false));
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

const boxAnimationOptions = {
  duration: 0.5,
  scale: 1.1,
  stagger: {
    amount: 1.5,
    grid: [16, 16],
    from: [0, 0],
    ease: "none",
  },
  repeatDelay: 1,
  yoyo: true,
  repeat: 1,
};

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

const tl = gsap.timeline({ paused: true });

// const tl = gsap.timeline();

tl.fromTo(
  "#upper-left span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...boxAnimationOptions,
  }
);
tl.fromTo(
  "#upper-right span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...boxAnimationOptions,
  },
  "<"
);
tl.fromTo(
  "#lower-left span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...boxAnimationOptions,
  },
  "<"
);
tl.fromTo(
  "#lower-right span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...boxAnimationOptions,
  },
  "<"
);
tl.call(() => {
  button.innerText = "Play animation";
  tl.pause(0);
});

const button = document.querySelector(".play-button");

button.addEventListener("click", () => {
  if (tl.paused()) {
    tl.play();
    button.innerText = "Stop animation";
  } else {
    tl.pause(0);
    button.innerText = "Play animation";
  }
});
