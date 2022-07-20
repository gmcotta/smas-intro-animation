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

const cartridgeFloatingTl = gsap.timeline();
cartridgeFloatingTl.fromTo(
  cartridge, 
  { marginBottom: '50%' }, 
  { marginBottom: '30%', duration: 1, ease: 'power2.easeInOut', repeat: -1, yoyo: true }
);

const startAnimation = () => {
  cartridgeFloatingTl.pause();
  const fullTl = gsap.timeline();
  fullTl.to(cartridge, { marginBottom: '-20%', duration: 1, ease: 'power2.easeInOut' });
  fullTl.to(snesPowerLed, { backgroundColor: '#e41516', duration: 0.5 })
  fullTl.to(
    [tvScreenBottom, tvScreenCenter, tvScreenLeft, tvScreenRight, tvScreenTop], 
    { backgroundColor: '#000', duration: 0 }, '<+=0.4')
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
  transform: "rotate(90deg)",
  duration: 0,
});

gsap.set("#lower-right", {
  transform: "rotate(180deg)",
  duration: 0,
});

gsap.set("#lower-left", {
  transform: "rotate(270deg)",
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
