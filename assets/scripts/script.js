const GRID_NUMBER = 16;

// config progress bar
const progressBar = document.querySelector("#progress-bar");

// config intro transition parts
const upperLeftScreen = document.querySelector("#upper-left");
const upperRightScreen = document.querySelector("#upper-right");
const lowerLeftScreen = document.querySelector("#lower-left");
const lowerRightScreen = document.querySelector("#lower-right");

const introTransitionFadeInFromParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
};

const introTransitionFadeInToParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
  duration: 1,
  scale: 1.1,
};

const introTransitionFadeOutToParameters = {
  background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
  duration: 1,
  scale: 1.1,
};
const introTransitionBoxesDuration = "<+=0.04";

gsap.set(upperRightScreen, {
  transform: "scale(-1, 1)",
  duration: 0,
});
gsap.set(lowerRightScreen, {
  transform: "scale(-1, -1)",
  duration: 0,
});
gsap.set(lowerLeftScreen, {
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
const cartridge = document.querySelector(".cartridge");
const snesPowerLed = document.querySelector(".snes-body__power-indicator");

const tvScreenTop = document.querySelector(".corner-2");
const tvScreenLeft = document.querySelector(".corner-4");
const tvScreenCenter = document.querySelector(".corner-5");
const tvScreenRight = document.querySelector(".corner-6");
const tvScreenBottom = document.querySelector(".corner-8");

// game splash screen config
const gameSplashScreenCoin = document.querySelector(
  ".game-splash-screen__coin"
);
const gameSplashScreenCoinShimmer = document.querySelector(
  ".game-splash-screen-coin__shimmer"
);
const gameSplashScreenLogo = document.querySelector(
  ".game-splash-screen__logo"
);

gsap.set([gameSplashScreenCoin, gameSplashScreenLogo], {
  autoAlpha: 0,
  duration: 0,
});

// game intro animation config
const gameIntroFrame1 = document.querySelector(".frame-1");
const gameIntroFrame2 = document.querySelector(".frame-2");
const gameIntroFrame3 = document.querySelector(".frame-3");
const gameIntroFrame4 = document.querySelector(".frame-4");
const gameIntroFrame5 = document.querySelector(".frame-5");

gsap.set(
  [
    gameIntroFrame1,
    gameIntroFrame2,
    gameIntroFrame3,
    gameIntroFrame4,
    gameIntroFrame5,
  ],
  { autoAlpha: 0, duration: 0 }
);

// game select screen config
const gameSelectScreen = document.querySelector(".game__select-game-screen");
const gameSelectCarousel = document.querySelector(
  ".game-select-game-screen-games-container__carousel"
);

gsap.set([gameSelectScreen, gameSelectCarousel], { autoAlpha: 0, duration: 0 });

// cartridge floating animation
const cartridgeFloatingTl = gsap.timeline();
cartridgeFloatingTl.fromTo(
  cartridge,
  { top: 0 },
  { top: "6rem", duration: 1, ease: "sine.inOut", repeat: -1, yoyo: true }
);

// overlay
const overlay = document.querySelector(".overlay");
const playAgainButton = document.querySelector("#play-again");

// audios
const nintendoLogoAudio = document.querySelector('#nintendo-logo-audio');
const introChatterAudio = document.querySelector('#intro-chatter-audio');
const introAudio = document.querySelector('#intro-audio');
const introFadeOutAnimationAudio = document.querySelector('#intro-fadeout-animation-audio');
const introFadeInAnimationAudio = document.querySelector('#intro-fadein-animation-audio');
const gameSelectAudio = document.querySelector('#game-select-audio');

// main timeline
const mainTl = gsap.timeline({
  onUpdate: () =>
    gsap.set(progressBar, { width: `${mainTl.progress() * 100}%` }),
});

const startAnimation = () => {
  // connect cartridge
  cartridgeFloatingTl.pause();
  gsap.killTweensOf(cartridge);
  mainTl.to(cartridge, { top: "20rem", duration: 1, ease: "linear" });

  // turn SNES and TV on
  mainTl.to(snesPowerLed, { backgroundColor: "#e41516", duration: 0.5 });
  mainTl.to(
    [tvScreenBottom, tvScreenCenter, tvScreenLeft, tvScreenRight, tvScreenTop],
    { backgroundColor: "#000", duration: 0 },
    "<+=0.4"
  );

  // splash screen
  mainTl.to([gameSplashScreenCoin, gameSplashScreenLogo], {
    autoAlpha: 1,
    duration: 0.5,
  });
  mainTl.fromTo(
    gameSplashScreenCoinShimmer,
    {
      background:
        "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 0% rgba(0,0,0,0) 100%)",
    },
    {
      background:
        "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 1000%, rgba(0,0,0,0) 100%)",
      duration: 0.8,
    },
    "<+=1"
  );
  mainTl.call(() => {
    nintendoLogoAudio.play();
  }, [], '<');
  mainTl.set(gameSplashScreenCoinShimmer, { autoAlpha: 0, duration: 0 });
  mainTl.to(
    [gameSplashScreenCoin, gameSplashScreenLogo],
    { autoAlpha: 0, duration: 0.5 },
    "<+=1"
  );
  mainTl.call(() => {
    nintendoLogoAudio.pause();
  }, [], '<');

  // intro animation
  mainTl.call(() => {
    introChatterAudio.play();
  }, []);
  for (let i = 0; i < 2; i++) {
    mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
    mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
    mainTl.set(
      [gameIntroFrame2, gameIntroFrame3, gameIntroFrame4, gameIntroFrame5],
      { autoAlpha: 0, duration: 0 }
    );
  }
  mainTl.to(gameIntroFrame1, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame2, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame3, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame4, { autoAlpha: 1, duration: 0.4 });
  mainTl.to(gameIntroFrame5, { autoAlpha: 1, duration: 0.4 });
  mainTl.call(() => {
    introChatterAudio.pause();
    introAudio.play();
  }, [], '<');
  mainTl.set(
    [gameIntroFrame1, gameIntroFrame2, gameIntroFrame3, gameIntroFrame4],
    { autoAlpha: 0, duration: 0 },
    "<+=5"
  );

  // intro transition
  mainTl.set(
    [upperLeftScreen, upperRightScreen, lowerLeftScreen, lowerRightScreen],
    { zIndex: 20, duration: 0 }
  );
  mainTl.call(() => {
    introAudio.pause();
    introFadeOutAnimationAudio.play();
  }, [], '<');
  for (let j = 0; j <= GRID_NUMBER - 1; j++) {
    let boxes = [];
    for (let i = 1; i <= GRID_NUMBER - j; i++) {
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`
      );
    }
    mainTl.fromTo(
      boxes,
      introTransitionFadeInFromParameters,
      introTransitionFadeInToParameters,
      introTransitionBoxesDuration
    );
  }

  mainTl.set(
    [gameSelectScreen, gameSelectCarousel],
    { autoAlpha: 1, duration: 0 },
    "<+=1.5"
  );
  mainTl.call(() => {
    introFadeOutAnimationAudio.pause();
    introFadeInAnimationAudio.play();
  }, [], '<');

  for (let j = GRID_NUMBER - 1; j >= 0; j--) {
    let boxes = [];
    for (let i = GRID_NUMBER - j; i >= 1; i--) {
      boxes.push(
        `#upper-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-left span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#upper-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#upper-right span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#lower-left span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-left span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`,
        `#lower-right span.box:nth-child(${i + (GRID_NUMBER * j + j)})`,
        `#lower-right span.box:nth-child(${
          (i - 1) * (GRID_NUMBER - 1) + (i + (GRID_NUMBER * j + j))
        })`
      );
    }
    mainTl.to(
      boxes,
      introTransitionFadeOutToParameters,
      introTransitionBoxesDuration
    );
  }

  // select game
  mainTl.call(() => {
    introFadeInAnimationAudio.pause();
    gameSelectAudio.play();
  }, []);
  mainTl.to(gameSelectCarousel, { x: "-25%", duration: 1, ease: "none" });
  mainTl.to(
    gameSelectCarousel,
    { x: "-42%", duration: 1, ease: "none" },
    "<+=1.5"
  );
  mainTl.to(
    gameSelectCarousel,
    { x: "-59%", duration: 1, ease: "none" },
    "<+=1.5"
  );
  mainTl.to(
    gameSelectCarousel,
    { x: "-42%", duration: 1, ease: "none" },
    "<+=1.5"
  );
  mainTl.to(
    gameSelectCarousel,
    { x: "-25%", duration: 1, ease: "none" },
    "<+=1.5"
  );
  mainTl.to(
    gameSelectCarousel,
    { x: "-8%", duration: 1, ease: "none" },
    "<+=1.5"
  );
  mainTl.call(() => {
    gameSelectAudio.pause();
    gsap.set(overlay, { display: "flex", autoAlpha: 1, duration: 0 });
  });
};

const restartAnimation = () => {
  gsap.set(overlay, { display: "none", autoAlpha: 0, duration: 0 });
  nintendoLogoAudio.currentTime = 0;
  introChatterAudio.currentTime = 0;
  introAudio.currentTime = 0;
  introFadeOutAnimationAudio.currentTime = 0;
  introFadeInAnimationAudio.currentTime = 0;
  gameSelectAudio.currentTime = 0;
  mainTl.play(0);
};

cartridge.addEventListener("click", startAnimation);

playAgainButton.addEventListener("click", restartAnimation);
