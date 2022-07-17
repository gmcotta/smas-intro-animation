const timelineOptions = {
  duration: 0.5,
  scale: 1.1,
  stagger: {
    amount: 1.5,
    grid: [16, 16],
    from: [0, 0],
    ease: "none"
  },
  repeatDelay: 1,
  yoyo: true,
  repeat: 1
};

gsap.set("#upper-right", {
  transform: "rotate(90deg)",
  duration: 0
});

gsap.set("#lower-right", {
  transform: "rotate(180deg)",
  duration: 0
});

gsap.set("#lower-left", {
  transform: "rotate(270deg)",
  duration: 0
});

const tl = gsap.timeline({ paused: true });

// const tl = gsap.timeline();

tl.fromTo(
  "#upper-left span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...timelineOptions
  }
);
tl.fromTo(
  "#upper-right span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...timelineOptions
  },
  "<"
);
tl.fromTo(
  "#lower-left span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...timelineOptions
  },
  "<"
);
tl.fromTo(
  "#lower-right span.box",
  {
    background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)"
  },
  {
    background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
    ...timelineOptions
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
