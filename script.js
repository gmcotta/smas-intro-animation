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
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(1)", "#upper-right span.box:nth-child(1)", "#lower-left span.box:nth-child(1)", "#lower-right span.box:nth-child(1)",
      "#upper-left span.box:nth-child(2)", "#upper-right span.box:nth-child(2)", "#lower-left span.box:nth-child(2)", "#lower-right span.box:nth-child(2)", 
      "#upper-left span.box:nth-child(3)", "#upper-right span.box:nth-child(3)", "#lower-left span.box:nth-child(3)", "#lower-right span.box:nth-child(3)", 
      "#upper-left span.box:nth-child(4)", "#upper-right span.box:nth-child(4)", "#lower-left span.box:nth-child(4)", "#lower-right span.box:nth-child(4)", 
      "#upper-left span.box:nth-child(5)", "#upper-right span.box:nth-child(5)", "#lower-left span.box:nth-child(5)", "#lower-right span.box:nth-child(5)", 
      "#upper-left span.box:nth-child(6)", "#upper-right span.box:nth-child(6)", "#lower-left span.box:nth-child(6)", "#lower-right span.box:nth-child(6)", 
      "#upper-left span.box:nth-child(7)", "#upper-right span.box:nth-child(7)", "#lower-left span.box:nth-child(7)", "#lower-right span.box:nth-child(7)", 
      "#upper-left span.box:nth-child(8)", "#upper-right span.box:nth-child(8)", "#lower-left span.box:nth-child(8)", "#lower-right span.box:nth-child(8)", 
      "#upper-left span.box:nth-child(9)", "#upper-right span.box:nth-child(9)", "#lower-left span.box:nth-child(9)", "#lower-right span.box:nth-child(9)", 
      "#upper-left span.box:nth-child(10)", "#upper-right span.box:nth-child(10)", "#lower-left span.box:nth-child(10)", "#lower-right span.box:nth-child(10)", 
      "#upper-left span.box:nth-child(11)", "#upper-right span.box:nth-child(11)", "#lower-left span.box:nth-child(11)", "#lower-right span.box:nth-child(11)", 
      "#upper-left span.box:nth-child(12)", "#upper-right span.box:nth-child(12)", "#lower-left span.box:nth-child(12)", "#lower-right span.box:nth-child(12)", 
      "#upper-left span.box:nth-child(13)", "#upper-right span.box:nth-child(13)", "#lower-left span.box:nth-child(13)", "#lower-right span.box:nth-child(13)", 
      "#upper-left span.box:nth-child(14)", "#upper-right span.box:nth-child(14)", "#lower-left span.box:nth-child(14)", "#lower-right span.box:nth-child(14)", 
      "#upper-left span.box:nth-child(15)", "#upper-right span.box:nth-child(15)", "#lower-left span.box:nth-child(15)", "#lower-right span.box:nth-child(15)", 
      "#upper-left span.box:nth-child(16)", "#upper-right span.box:nth-child(16)", "#lower-left span.box:nth-child(16)", "#lower-right span.box:nth-child(16)",
      "#upper-left span.box:nth-child(17)", "#upper-right span.box:nth-child(17)", "#lower-left span.box:nth-child(17)", "#lower-right span.box:nth-child(17)",
      "#upper-left span.box:nth-child(33)", "#upper-right span.box:nth-child(33)", "#lower-left span.box:nth-child(33)", "#lower-right span.box:nth-child(33)",
      "#upper-left span.box:nth-child(49)", "#upper-right span.box:nth-child(49)", "#lower-left span.box:nth-child(49)", "#lower-right span.box:nth-child(49)",
      "#upper-left span.box:nth-child(65)", "#upper-right span.box:nth-child(65)", "#lower-left span.box:nth-child(65)", "#lower-right span.box:nth-child(65)",
      "#upper-left span.box:nth-child(81)", "#upper-right span.box:nth-child(81)", "#lower-left span.box:nth-child(81)", "#lower-right span.box:nth-child(81)",
      "#upper-left span.box:nth-child(97)", "#upper-right span.box:nth-child(97)", "#lower-left span.box:nth-child(97)", "#lower-right span.box:nth-child(97)",
      "#upper-left span.box:nth-child(113)", "#upper-right span.box:nth-child(113)", "#lower-left span.box:nth-child(113)", "#lower-right span.box:nth-child(113)",
      "#upper-left span.box:nth-child(129)", "#upper-right span.box:nth-child(129)", "#lower-left span.box:nth-child(129)", "#lower-right span.box:nth-child(129)",
      "#upper-left span.box:nth-child(145)", "#upper-right span.box:nth-child(145)", "#lower-left span.box:nth-child(145)", "#lower-right span.box:nth-child(145)",
      "#upper-left span.box:nth-child(161)", "#upper-right span.box:nth-child(161)", "#lower-left span.box:nth-child(161)", "#lower-right span.box:nth-child(161)",
      "#upper-left span.box:nth-child(177)", "#upper-right span.box:nth-child(177)", "#lower-left span.box:nth-child(177)", "#lower-right span.box:nth-child(177)",
      "#upper-left span.box:nth-child(193)", "#upper-right span.box:nth-child(193)", "#lower-left span.box:nth-child(193)", "#lower-right span.box:nth-child(193)",
      "#upper-left span.box:nth-child(209)", "#upper-right span.box:nth-child(209)", "#lower-left span.box:nth-child(209)", "#lower-right span.box:nth-child(209)",
      "#upper-left span.box:nth-child(225)", "#upper-right span.box:nth-child(225)", "#lower-left span.box:nth-child(225)", "#lower-right span.box:nth-child(225)",
      "#upper-left span.box:nth-child(241)", "#upper-right span.box:nth-child(241)", "#lower-left span.box:nth-child(241)", "#lower-right span.box:nth-child(241)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1,
    }
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(18)", "#upper-right span.box:nth-child(18)", "#lower-left span.box:nth-child(18)", "#lower-right span.box:nth-child(18)", 
      "#upper-left span.box:nth-child(19)", "#upper-right span.box:nth-child(19)", "#lower-left span.box:nth-child(19)", "#lower-right span.box:nth-child(19)", 
      "#upper-left span.box:nth-child(20)", "#upper-right span.box:nth-child(20)", "#lower-left span.box:nth-child(20)", "#lower-right span.box:nth-child(20)", 
      "#upper-left span.box:nth-child(21)", "#upper-right span.box:nth-child(21)", "#lower-left span.box:nth-child(21)", "#lower-right span.box:nth-child(21)", 
      "#upper-left span.box:nth-child(22)", "#upper-right span.box:nth-child(22)", "#lower-left span.box:nth-child(22)", "#lower-right span.box:nth-child(22)", 
      "#upper-left span.box:nth-child(23)", "#upper-right span.box:nth-child(23)", "#lower-left span.box:nth-child(23)", "#lower-right span.box:nth-child(23)", 
      "#upper-left span.box:nth-child(24)", "#upper-right span.box:nth-child(24)", "#lower-left span.box:nth-child(24)", "#lower-right span.box:nth-child(24)", 
      "#upper-left span.box:nth-child(25)", "#upper-right span.box:nth-child(25)", "#lower-left span.box:nth-child(25)", "#lower-right span.box:nth-child(25)", 
      "#upper-left span.box:nth-child(26)", "#upper-right span.box:nth-child(26)", "#lower-left span.box:nth-child(26)", "#lower-right span.box:nth-child(26)", 
      "#upper-left span.box:nth-child(27)", "#upper-right span.box:nth-child(27)", "#lower-left span.box:nth-child(27)", "#lower-right span.box:nth-child(27)", 
      "#upper-left span.box:nth-child(28)", "#upper-right span.box:nth-child(28)", "#lower-left span.box:nth-child(28)", "#lower-right span.box:nth-child(28)", 
      "#upper-left span.box:nth-child(29)", "#upper-right span.box:nth-child(29)", "#lower-left span.box:nth-child(29)", "#lower-right span.box:nth-child(29)", 
      "#upper-left span.box:nth-child(30)", "#upper-right span.box:nth-child(30)", "#lower-left span.box:nth-child(30)", "#lower-right span.box:nth-child(30)", 
      "#upper-left span.box:nth-child(31)", "#upper-right span.box:nth-child(31)", "#lower-left span.box:nth-child(31)", "#lower-right span.box:nth-child(31)", 
      "#upper-left span.box:nth-child(32)", "#upper-right span.box:nth-child(32)", "#lower-left span.box:nth-child(32)", "#lower-right span.box:nth-child(32)", 
      "#upper-left span.box:nth-child(34)", "#upper-right span.box:nth-child(34)", "#lower-left span.box:nth-child(34)", "#lower-right span.box:nth-child(34)",
      "#upper-left span.box:nth-child(50)", "#upper-right span.box:nth-child(50)", "#lower-left span.box:nth-child(50)", "#lower-right span.box:nth-child(50)",
      "#upper-left span.box:nth-child(66)", "#upper-right span.box:nth-child(66)", "#lower-left span.box:nth-child(66)", "#lower-right span.box:nth-child(66)",
      "#upper-left span.box:nth-child(82)", "#upper-right span.box:nth-child(82)", "#lower-left span.box:nth-child(82)", "#lower-right span.box:nth-child(82)",
      "#upper-left span.box:nth-child(98)", "#upper-right span.box:nth-child(98)", "#lower-left span.box:nth-child(98)", "#lower-right span.box:nth-child(98)",
      "#upper-left span.box:nth-child(114)", "#upper-right span.box:nth-child(114)", "#lower-left span.box:nth-child(114)", "#lower-right span.box:nth-child(114)",
      "#upper-left span.box:nth-child(130)", "#upper-right span.box:nth-child(130)", "#lower-left span.box:nth-child(130)", "#lower-right span.box:nth-child(130)",
      "#upper-left span.box:nth-child(146)", "#upper-right span.box:nth-child(146)", "#lower-left span.box:nth-child(146)", "#lower-right span.box:nth-child(146)",
      "#upper-left span.box:nth-child(162)", "#upper-right span.box:nth-child(162)", "#lower-left span.box:nth-child(162)", "#lower-right span.box:nth-child(162)",
      "#upper-left span.box:nth-child(178)", "#upper-right span.box:nth-child(178)", "#lower-left span.box:nth-child(178)", "#lower-right span.box:nth-child(178)",
      "#upper-left span.box:nth-child(194)", "#upper-right span.box:nth-child(194)", "#lower-left span.box:nth-child(194)", "#lower-right span.box:nth-child(194)",
      "#upper-left span.box:nth-child(210)", "#upper-right span.box:nth-child(210)", "#lower-left span.box:nth-child(210)", "#lower-right span.box:nth-child(210)",
      "#upper-left span.box:nth-child(226)", "#upper-right span.box:nth-child(226)", "#lower-left span.box:nth-child(226)", "#lower-right span.box:nth-child(226)",
      "#upper-left span.box:nth-child(242)", "#upper-right span.box:nth-child(242)", "#lower-left span.box:nth-child(242)", "#lower-right span.box:nth-child(242)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(35)", "#upper-right span.box:nth-child(35)", "#lower-left span.box:nth-child(35)", "#lower-right span.box:nth-child(35)", 
      "#upper-left span.box:nth-child(36)", "#upper-right span.box:nth-child(36)", "#lower-left span.box:nth-child(36)", "#lower-right span.box:nth-child(36)", 
      "#upper-left span.box:nth-child(37)", "#upper-right span.box:nth-child(37)", "#lower-left span.box:nth-child(37)", "#lower-right span.box:nth-child(37)", 
      "#upper-left span.box:nth-child(38)", "#upper-right span.box:nth-child(38)", "#lower-left span.box:nth-child(38)", "#lower-right span.box:nth-child(38)", 
      "#upper-left span.box:nth-child(39)", "#upper-right span.box:nth-child(39)", "#lower-left span.box:nth-child(39)", "#lower-right span.box:nth-child(39)", 
      "#upper-left span.box:nth-child(40)", "#upper-right span.box:nth-child(40)", "#lower-left span.box:nth-child(40)", "#lower-right span.box:nth-child(40)", 
      "#upper-left span.box:nth-child(41)", "#upper-right span.box:nth-child(41)", "#lower-left span.box:nth-child(41)", "#lower-right span.box:nth-child(41)", 
      "#upper-left span.box:nth-child(42)", "#upper-right span.box:nth-child(42)", "#lower-left span.box:nth-child(42)", "#lower-right span.box:nth-child(42)", 
      "#upper-left span.box:nth-child(43)", "#upper-right span.box:nth-child(43)", "#lower-left span.box:nth-child(43)", "#lower-right span.box:nth-child(43)", 
      "#upper-left span.box:nth-child(44)", "#upper-right span.box:nth-child(44)", "#lower-left span.box:nth-child(44)", "#lower-right span.box:nth-child(44)", 
      "#upper-left span.box:nth-child(45)", "#upper-right span.box:nth-child(45)", "#lower-left span.box:nth-child(45)", "#lower-right span.box:nth-child(45)", 
      "#upper-left span.box:nth-child(46)", "#upper-right span.box:nth-child(46)", "#lower-left span.box:nth-child(46)", "#lower-right span.box:nth-child(46)", 
      "#upper-left span.box:nth-child(47)", "#upper-right span.box:nth-child(47)", "#lower-left span.box:nth-child(47)", "#lower-right span.box:nth-child(47)", 
      "#upper-left span.box:nth-child(48)", "#upper-right span.box:nth-child(48)", "#lower-left span.box:nth-child(48)", "#lower-right span.box:nth-child(48)", 
      "#upper-left span.box:nth-child(51)", "#upper-right span.box:nth-child(51)", "#lower-left span.box:nth-child(51)", "#lower-right span.box:nth-child(51)", 
      "#upper-left span.box:nth-child(67)", "#upper-right span.box:nth-child(67)", "#lower-left span.box:nth-child(67)", "#lower-right span.box:nth-child(67)",
      "#upper-left span.box:nth-child(83)", "#upper-right span.box:nth-child(83)", "#lower-left span.box:nth-child(83)", "#lower-right span.box:nth-child(83)",
      "#upper-left span.box:nth-child(99)", "#upper-right span.box:nth-child(99)", "#lower-left span.box:nth-child(99)", "#lower-right span.box:nth-child(99)",
      "#upper-left span.box:nth-child(115)", "#upper-right span.box:nth-child(115)", "#lower-left span.box:nth-child(115)", "#lower-right span.box:nth-child(115)",
      "#upper-left span.box:nth-child(131)", "#upper-right span.box:nth-child(131)", "#lower-left span.box:nth-child(131)", "#lower-right span.box:nth-child(131)",
      "#upper-left span.box:nth-child(147)", "#upper-right span.box:nth-child(147)", "#lower-left span.box:nth-child(147)", "#lower-right span.box:nth-child(147)",
      "#upper-left span.box:nth-child(163)", "#upper-right span.box:nth-child(163)", "#lower-left span.box:nth-child(163)", "#lower-right span.box:nth-child(163)",
      "#upper-left span.box:nth-child(179)", "#upper-right span.box:nth-child(179)", "#lower-left span.box:nth-child(179)", "#lower-right span.box:nth-child(179)",
      "#upper-left span.box:nth-child(195)", "#upper-right span.box:nth-child(195)", "#lower-left span.box:nth-child(195)", "#lower-right span.box:nth-child(195)",
      "#upper-left span.box:nth-child(211)", "#upper-right span.box:nth-child(211)", "#lower-left span.box:nth-child(211)", "#lower-right span.box:nth-child(211)",
      "#upper-left span.box:nth-child(227)", "#upper-right span.box:nth-child(227)", "#lower-left span.box:nth-child(227)", "#lower-right span.box:nth-child(227)",
      "#upper-left span.box:nth-child(243)", "#upper-right span.box:nth-child(243)", "#lower-left span.box:nth-child(243)", "#lower-right span.box:nth-child(243)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(52)", "#upper-right span.box:nth-child(52)", "#lower-left span.box:nth-child(52)", "#lower-right span.box:nth-child(52)", 
      "#upper-left span.box:nth-child(53)", "#upper-right span.box:nth-child(53)", "#lower-left span.box:nth-child(53)", "#lower-right span.box:nth-child(53)", 
      "#upper-left span.box:nth-child(54)", "#upper-right span.box:nth-child(54)", "#lower-left span.box:nth-child(54)", "#lower-right span.box:nth-child(54)", 
      "#upper-left span.box:nth-child(55)", "#upper-right span.box:nth-child(55)", "#lower-left span.box:nth-child(55)", "#lower-right span.box:nth-child(55)", 
      "#upper-left span.box:nth-child(56)", "#upper-right span.box:nth-child(56)", "#lower-left span.box:nth-child(56)", "#lower-right span.box:nth-child(56)", 
      "#upper-left span.box:nth-child(57)", "#upper-right span.box:nth-child(57)", "#lower-left span.box:nth-child(57)", "#lower-right span.box:nth-child(57)", 
      "#upper-left span.box:nth-child(58)", "#upper-right span.box:nth-child(58)", "#lower-left span.box:nth-child(58)", "#lower-right span.box:nth-child(58)", 
      "#upper-left span.box:nth-child(59)", "#upper-right span.box:nth-child(59)", "#lower-left span.box:nth-child(59)", "#lower-right span.box:nth-child(59)", 
      "#upper-left span.box:nth-child(60)", "#upper-right span.box:nth-child(60)", "#lower-left span.box:nth-child(60)", "#lower-right span.box:nth-child(60)", 
      "#upper-left span.box:nth-child(61)", "#upper-right span.box:nth-child(61)", "#lower-left span.box:nth-child(61)", "#lower-right span.box:nth-child(61)", 
      "#upper-left span.box:nth-child(62)", "#upper-right span.box:nth-child(62)", "#lower-left span.box:nth-child(62)", "#lower-right span.box:nth-child(62)", 
      "#upper-left span.box:nth-child(63)", "#upper-right span.box:nth-child(63)", "#lower-left span.box:nth-child(63)", "#lower-right span.box:nth-child(63)", 
      "#upper-left span.box:nth-child(64)", "#upper-right span.box:nth-child(64)", "#lower-left span.box:nth-child(64)", "#lower-right span.box:nth-child(64)", 
      "#upper-left span.box:nth-child(68)", "#upper-right span.box:nth-child(68)", "#lower-left span.box:nth-child(68)", "#lower-right span.box:nth-child(68)", 
      "#upper-left span.box:nth-child(84)", "#upper-right span.box:nth-child(84)", "#lower-left span.box:nth-child(84)", "#lower-right span.box:nth-child(84)", 
      "#upper-left span.box:nth-child(100)", "#upper-right span.box:nth-child(100)", "#lower-left span.box:nth-child(100)", "#lower-right span.box:nth-child(100)",
      "#upper-left span.box:nth-child(116)", "#upper-right span.box:nth-child(116)", "#lower-left span.box:nth-child(116)", "#lower-right span.box:nth-child(116)",
      "#upper-left span.box:nth-child(132)", "#upper-right span.box:nth-child(132)", "#lower-left span.box:nth-child(132)", "#lower-right span.box:nth-child(132)",
      "#upper-left span.box:nth-child(148)", "#upper-right span.box:nth-child(148)", "#lower-left span.box:nth-child(148)", "#lower-right span.box:nth-child(148)",
      "#upper-left span.box:nth-child(164)", "#upper-right span.box:nth-child(164)", "#lower-left span.box:nth-child(164)", "#lower-right span.box:nth-child(164)",
      "#upper-left span.box:nth-child(180)", "#upper-right span.box:nth-child(180)", "#lower-left span.box:nth-child(180)", "#lower-right span.box:nth-child(180)",
      "#upper-left span.box:nth-child(196)", "#upper-right span.box:nth-child(196)", "#lower-left span.box:nth-child(196)", "#lower-right span.box:nth-child(196)",
      "#upper-left span.box:nth-child(212)", "#upper-right span.box:nth-child(212)", "#lower-left span.box:nth-child(212)", "#lower-right span.box:nth-child(212)",
      "#upper-left span.box:nth-child(228)", "#upper-right span.box:nth-child(228)", "#lower-left span.box:nth-child(228)", "#lower-right span.box:nth-child(228)",
      "#upper-left span.box:nth-child(244)", "#upper-right span.box:nth-child(244)", "#lower-left span.box:nth-child(244)", "#lower-right span.box:nth-child(244)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(69)", "#upper-right span.box:nth-child(69)", "#lower-left span.box:nth-child(69)", "#lower-right span.box:nth-child(69)", 
      "#upper-left span.box:nth-child(70)", "#upper-right span.box:nth-child(70)", "#lower-left span.box:nth-child(70)", "#lower-right span.box:nth-child(70)", 
      "#upper-left span.box:nth-child(71)", "#upper-right span.box:nth-child(71)", "#lower-left span.box:nth-child(71)", "#lower-right span.box:nth-child(71)", 
      "#upper-left span.box:nth-child(72)", "#upper-right span.box:nth-child(72)", "#lower-left span.box:nth-child(72)", "#lower-right span.box:nth-child(72)", 
      "#upper-left span.box:nth-child(73)", "#upper-right span.box:nth-child(73)", "#lower-left span.box:nth-child(73)", "#lower-right span.box:nth-child(73)", 
      "#upper-left span.box:nth-child(74)", "#upper-right span.box:nth-child(74)", "#lower-left span.box:nth-child(74)", "#lower-right span.box:nth-child(74)", 
      "#upper-left span.box:nth-child(75)", "#upper-right span.box:nth-child(75)", "#lower-left span.box:nth-child(75)", "#lower-right span.box:nth-child(75)", 
      "#upper-left span.box:nth-child(76)", "#upper-right span.box:nth-child(76)", "#lower-left span.box:nth-child(76)", "#lower-right span.box:nth-child(76)", 
      "#upper-left span.box:nth-child(77)", "#upper-right span.box:nth-child(77)", "#lower-left span.box:nth-child(77)", "#lower-right span.box:nth-child(77)", 
      "#upper-left span.box:nth-child(78)", "#upper-right span.box:nth-child(78)", "#lower-left span.box:nth-child(78)", "#lower-right span.box:nth-child(78)", 
      "#upper-left span.box:nth-child(79)", "#upper-right span.box:nth-child(79)", "#lower-left span.box:nth-child(79)", "#lower-right span.box:nth-child(79)", 
      "#upper-left span.box:nth-child(80)", "#upper-right span.box:nth-child(80)", "#lower-left span.box:nth-child(80)", "#lower-right span.box:nth-child(80)", 
      "#upper-left span.box:nth-child(85)", "#upper-right span.box:nth-child(85)", "#lower-left span.box:nth-child(85)", "#lower-right span.box:nth-child(85)", 
      "#upper-left span.box:nth-child(101)", "#upper-right span.box:nth-child(101)", "#lower-left span.box:nth-child(101)", "#lower-right span.box:nth-child(101)", 
      "#upper-left span.box:nth-child(117)", "#upper-right span.box:nth-child(117)", "#lower-left span.box:nth-child(117)", "#lower-right span.box:nth-child(117)", 
      "#upper-left span.box:nth-child(133)", "#upper-right span.box:nth-child(133)", "#lower-left span.box:nth-child(133)", "#lower-right span.box:nth-child(133)",
      "#upper-left span.box:nth-child(149)", "#upper-right span.box:nth-child(149)", "#lower-left span.box:nth-child(149)", "#lower-right span.box:nth-child(149)",
      "#upper-left span.box:nth-child(165)", "#upper-right span.box:nth-child(165)", "#lower-left span.box:nth-child(165)", "#lower-right span.box:nth-child(165)",
      "#upper-left span.box:nth-child(181)", "#upper-right span.box:nth-child(181)", "#lower-left span.box:nth-child(181)", "#lower-right span.box:nth-child(181)",
      "#upper-left span.box:nth-child(197)", "#upper-right span.box:nth-child(197)", "#lower-left span.box:nth-child(197)", "#lower-right span.box:nth-child(197)",
      "#upper-left span.box:nth-child(213)", "#upper-right span.box:nth-child(213)", "#lower-left span.box:nth-child(213)", "#lower-right span.box:nth-child(213)",
      "#upper-left span.box:nth-child(229)", "#upper-right span.box:nth-child(229)", "#lower-left span.box:nth-child(229)", "#lower-right span.box:nth-child(229)",
      "#upper-left span.box:nth-child(245)", "#upper-right span.box:nth-child(245)", "#lower-left span.box:nth-child(245)", "#lower-right span.box:nth-child(245)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(86)", "#upper-right span.box:nth-child(86)", "#lower-left span.box:nth-child(86)", "#lower-right span.box:nth-child(86)", 
      "#upper-left span.box:nth-child(87)", "#upper-right span.box:nth-child(87)", "#lower-left span.box:nth-child(87)", "#lower-right span.box:nth-child(87)", 
      "#upper-left span.box:nth-child(88)", "#upper-right span.box:nth-child(88)", "#lower-left span.box:nth-child(88)", "#lower-right span.box:nth-child(88)", 
      "#upper-left span.box:nth-child(89)", "#upper-right span.box:nth-child(89)", "#lower-left span.box:nth-child(89)", "#lower-right span.box:nth-child(89)", 
      "#upper-left span.box:nth-child(90)", "#upper-right span.box:nth-child(90)", "#lower-left span.box:nth-child(90)", "#lower-right span.box:nth-child(90)", 
      "#upper-left span.box:nth-child(91)", "#upper-right span.box:nth-child(91)", "#lower-left span.box:nth-child(91)", "#lower-right span.box:nth-child(91)", 
      "#upper-left span.box:nth-child(92)", "#upper-right span.box:nth-child(92)", "#lower-left span.box:nth-child(92)", "#lower-right span.box:nth-child(92)", 
      "#upper-left span.box:nth-child(93)", "#upper-right span.box:nth-child(93)", "#lower-left span.box:nth-child(93)", "#lower-right span.box:nth-child(93)", 
      "#upper-left span.box:nth-child(94)", "#upper-right span.box:nth-child(94)", "#lower-left span.box:nth-child(94)", "#lower-right span.box:nth-child(94)", 
      "#upper-left span.box:nth-child(95)", "#upper-right span.box:nth-child(95)", "#lower-left span.box:nth-child(95)", "#lower-right span.box:nth-child(95)", 
      "#upper-left span.box:nth-child(96)", "#upper-right span.box:nth-child(96)", "#lower-left span.box:nth-child(96)", "#lower-right span.box:nth-child(96)", 
      "#upper-left span.box:nth-child(102)", "#upper-right span.box:nth-child(102)", "#lower-left span.box:nth-child(102)", "#lower-right span.box:nth-child(102)", 
      "#upper-left span.box:nth-child(118)", "#upper-right span.box:nth-child(118)", "#lower-left span.box:nth-child(118)", "#lower-right span.box:nth-child(118)", 
      "#upper-left span.box:nth-child(134)", "#upper-right span.box:nth-child(134)", "#lower-left span.box:nth-child(134)", "#lower-right span.box:nth-child(134)", 
      "#upper-left span.box:nth-child(150)", "#upper-right span.box:nth-child(150)", "#lower-left span.box:nth-child(150)", "#lower-right span.box:nth-child(150)", 
      "#upper-left span.box:nth-child(166)", "#upper-right span.box:nth-child(166)", "#lower-left span.box:nth-child(166)", "#lower-right span.box:nth-child(166)",
      "#upper-left span.box:nth-child(182)", "#upper-right span.box:nth-child(182)", "#lower-left span.box:nth-child(182)", "#lower-right span.box:nth-child(182)",
      "#upper-left span.box:nth-child(198)", "#upper-right span.box:nth-child(198)", "#lower-left span.box:nth-child(198)", "#lower-right span.box:nth-child(198)",
      "#upper-left span.box:nth-child(214)", "#upper-right span.box:nth-child(214)", "#lower-left span.box:nth-child(214)", "#lower-right span.box:nth-child(214)",
      "#upper-left span.box:nth-child(230)", "#upper-right span.box:nth-child(230)", "#lower-left span.box:nth-child(230)", "#lower-right span.box:nth-child(230)",
      "#upper-left span.box:nth-child(246)", "#upper-right span.box:nth-child(246)", "#lower-left span.box:nth-child(246)", "#lower-right span.box:nth-child(246)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(103)", "#upper-right span.box:nth-child(103)", "#lower-left span.box:nth-child(103)", "#lower-right span.box:nth-child(103)", 
      "#upper-left span.box:nth-child(104)", "#upper-right span.box:nth-child(104)", "#lower-left span.box:nth-child(104)", "#lower-right span.box:nth-child(104)", 
      "#upper-left span.box:nth-child(105)", "#upper-right span.box:nth-child(105)", "#lower-left span.box:nth-child(105)", "#lower-right span.box:nth-child(105)", 
      "#upper-left span.box:nth-child(106)", "#upper-right span.box:nth-child(106)", "#lower-left span.box:nth-child(106)", "#lower-right span.box:nth-child(106)", 
      "#upper-left span.box:nth-child(107)", "#upper-right span.box:nth-child(107)", "#lower-left span.box:nth-child(107)", "#lower-right span.box:nth-child(107)", 
      "#upper-left span.box:nth-child(108)", "#upper-right span.box:nth-child(108)", "#lower-left span.box:nth-child(108)", "#lower-right span.box:nth-child(108)", 
      "#upper-left span.box:nth-child(109)", "#upper-right span.box:nth-child(109)", "#lower-left span.box:nth-child(109)", "#lower-right span.box:nth-child(109)", 
      "#upper-left span.box:nth-child(110)", "#upper-right span.box:nth-child(110)", "#lower-left span.box:nth-child(110)", "#lower-right span.box:nth-child(110)", 
      "#upper-left span.box:nth-child(111)", "#upper-right span.box:nth-child(111)", "#lower-left span.box:nth-child(111)", "#lower-right span.box:nth-child(111)", 
      "#upper-left span.box:nth-child(112)", "#upper-right span.box:nth-child(112)", "#lower-left span.box:nth-child(112)", "#lower-right span.box:nth-child(112)", 
      "#upper-left span.box:nth-child(119)", "#upper-right span.box:nth-child(119)", "#lower-left span.box:nth-child(119)", "#lower-right span.box:nth-child(119)", 
      "#upper-left span.box:nth-child(135)", "#upper-right span.box:nth-child(135)", "#lower-left span.box:nth-child(135)", "#lower-right span.box:nth-child(135)", 
      "#upper-left span.box:nth-child(151)", "#upper-right span.box:nth-child(151)", "#lower-left span.box:nth-child(151)", "#lower-right span.box:nth-child(151)", 
      "#upper-left span.box:nth-child(167)", "#upper-right span.box:nth-child(167)", "#lower-left span.box:nth-child(167)", "#lower-right span.box:nth-child(167)", 
      "#upper-left span.box:nth-child(183)", "#upper-right span.box:nth-child(183)", "#lower-left span.box:nth-child(183)", "#lower-right span.box:nth-child(183)", 
      "#upper-left span.box:nth-child(199)", "#upper-right span.box:nth-child(199)", "#lower-left span.box:nth-child(199)", "#lower-right span.box:nth-child(199)",
      "#upper-left span.box:nth-child(215)", "#upper-right span.box:nth-child(215)", "#lower-left span.box:nth-child(215)", "#lower-right span.box:nth-child(215)",
      "#upper-left span.box:nth-child(231)", "#upper-right span.box:nth-child(231)", "#lower-left span.box:nth-child(231)", "#lower-right span.box:nth-child(231)",
      "#upper-left span.box:nth-child(247)", "#upper-right span.box:nth-child(247)", "#lower-left span.box:nth-child(247)", "#lower-right span.box:nth-child(247)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(120)", "#upper-right span.box:nth-child(120)", "#lower-left span.box:nth-child(120)", "#lower-right span.box:nth-child(120)", 
      "#upper-left span.box:nth-child(121)", "#upper-right span.box:nth-child(121)", "#lower-left span.box:nth-child(121)", "#lower-right span.box:nth-child(121)", 
      "#upper-left span.box:nth-child(122)", "#upper-right span.box:nth-child(122)", "#lower-left span.box:nth-child(122)", "#lower-right span.box:nth-child(122)", 
      "#upper-left span.box:nth-child(123)", "#upper-right span.box:nth-child(123)", "#lower-left span.box:nth-child(123)", "#lower-right span.box:nth-child(123)", 
      "#upper-left span.box:nth-child(124)", "#upper-right span.box:nth-child(124)", "#lower-left span.box:nth-child(124)", "#lower-right span.box:nth-child(124)", 
      "#upper-left span.box:nth-child(125)", "#upper-right span.box:nth-child(125)", "#lower-left span.box:nth-child(125)", "#lower-right span.box:nth-child(125)", 
      "#upper-left span.box:nth-child(126)", "#upper-right span.box:nth-child(126)", "#lower-left span.box:nth-child(126)", "#lower-right span.box:nth-child(126)", 
      "#upper-left span.box:nth-child(127)", "#upper-right span.box:nth-child(127)", "#lower-left span.box:nth-child(127)", "#lower-right span.box:nth-child(127)", 
      "#upper-left span.box:nth-child(128)", "#upper-right span.box:nth-child(128)", "#lower-left span.box:nth-child(128)", "#lower-right span.box:nth-child(128)", 
      "#upper-left span.box:nth-child(136)", "#upper-right span.box:nth-child(136)", "#lower-left span.box:nth-child(136)", "#lower-right span.box:nth-child(136)", 
      "#upper-left span.box:nth-child(152)", "#upper-right span.box:nth-child(152)", "#lower-left span.box:nth-child(152)", "#lower-right span.box:nth-child(152)", 
      "#upper-left span.box:nth-child(168)", "#upper-right span.box:nth-child(168)", "#lower-left span.box:nth-child(168)", "#lower-right span.box:nth-child(168)", 
      "#upper-left span.box:nth-child(184)", "#upper-right span.box:nth-child(184)", "#lower-left span.box:nth-child(184)", "#lower-right span.box:nth-child(184)", 
      "#upper-left span.box:nth-child(200)", "#upper-right span.box:nth-child(200)", "#lower-left span.box:nth-child(200)", "#lower-right span.box:nth-child(200)", 
      "#upper-left span.box:nth-child(216)", "#upper-right span.box:nth-child(216)", "#lower-left span.box:nth-child(216)", "#lower-right span.box:nth-child(216)", 
      "#upper-left span.box:nth-child(232)", "#upper-right span.box:nth-child(232)", "#lower-left span.box:nth-child(232)", "#lower-right span.box:nth-child(232)",
      "#upper-left span.box:nth-child(248)", "#upper-right span.box:nth-child(248)", "#lower-left span.box:nth-child(248)", "#lower-right span.box:nth-child(248)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(137)", "#upper-right span.box:nth-child(137)", "#lower-left span.box:nth-child(137)", "#lower-right span.box:nth-child(137)", 
      "#upper-left span.box:nth-child(138)", "#upper-right span.box:nth-child(138)", "#lower-left span.box:nth-child(138)", "#lower-right span.box:nth-child(138)", 
      "#upper-left span.box:nth-child(139)", "#upper-right span.box:nth-child(139)", "#lower-left span.box:nth-child(139)", "#lower-right span.box:nth-child(139)", 
      "#upper-left span.box:nth-child(140)", "#upper-right span.box:nth-child(140)", "#lower-left span.box:nth-child(140)", "#lower-right span.box:nth-child(140)", 
      "#upper-left span.box:nth-child(141)", "#upper-right span.box:nth-child(141)", "#lower-left span.box:nth-child(141)", "#lower-right span.box:nth-child(141)", 
      "#upper-left span.box:nth-child(142)", "#upper-right span.box:nth-child(142)", "#lower-left span.box:nth-child(142)", "#lower-right span.box:nth-child(142)", 
      "#upper-left span.box:nth-child(143)", "#upper-right span.box:nth-child(143)", "#lower-left span.box:nth-child(143)", "#lower-right span.box:nth-child(143)", 
      "#upper-left span.box:nth-child(144)", "#upper-right span.box:nth-child(144)", "#lower-left span.box:nth-child(144)", "#lower-right span.box:nth-child(144)", 
      "#upper-left span.box:nth-child(153)", "#upper-right span.box:nth-child(153)", "#lower-left span.box:nth-child(153)", "#lower-right span.box:nth-child(153)", 
      "#upper-left span.box:nth-child(169)", "#upper-right span.box:nth-child(169)", "#lower-left span.box:nth-child(169)", "#lower-right span.box:nth-child(169)", 
      "#upper-left span.box:nth-child(185)", "#upper-right span.box:nth-child(185)", "#lower-left span.box:nth-child(185)", "#lower-right span.box:nth-child(185)", 
      "#upper-left span.box:nth-child(201)", "#upper-right span.box:nth-child(201)", "#lower-left span.box:nth-child(201)", "#lower-right span.box:nth-child(201)", 
      "#upper-left span.box:nth-child(217)", "#upper-right span.box:nth-child(217)", "#lower-left span.box:nth-child(217)", "#lower-right span.box:nth-child(217)", 
      "#upper-left span.box:nth-child(233)", "#upper-right span.box:nth-child(233)", "#lower-left span.box:nth-child(233)", "#lower-right span.box:nth-child(233)", 
      "#upper-left span.box:nth-child(249)", "#upper-right span.box:nth-child(249)", "#lower-left span.box:nth-child(249)", "#lower-right span.box:nth-child(249)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(154)", "#upper-right span.box:nth-child(154)", "#lower-left span.box:nth-child(154)", "#lower-right span.box:nth-child(154)", 
      "#upper-left span.box:nth-child(155)", "#upper-right span.box:nth-child(155)", "#lower-left span.box:nth-child(155)", "#lower-right span.box:nth-child(155)", 
      "#upper-left span.box:nth-child(156)", "#upper-right span.box:nth-child(156)", "#lower-left span.box:nth-child(156)", "#lower-right span.box:nth-child(156)", 
      "#upper-left span.box:nth-child(157)", "#upper-right span.box:nth-child(157)", "#lower-left span.box:nth-child(157)", "#lower-right span.box:nth-child(157)", 
      "#upper-left span.box:nth-child(158)", "#upper-right span.box:nth-child(158)", "#lower-left span.box:nth-child(158)", "#lower-right span.box:nth-child(158)", 
      "#upper-left span.box:nth-child(159)", "#upper-right span.box:nth-child(159)", "#lower-left span.box:nth-child(159)", "#lower-right span.box:nth-child(159)", 
      "#upper-left span.box:nth-child(160)", "#upper-right span.box:nth-child(160)", "#lower-left span.box:nth-child(160)", "#lower-right span.box:nth-child(160)", 
      "#upper-left span.box:nth-child(170)", "#upper-right span.box:nth-child(170)", "#lower-left span.box:nth-child(170)", "#lower-right span.box:nth-child(170)", 
      "#upper-left span.box:nth-child(186)", "#upper-right span.box:nth-child(186)", "#lower-left span.box:nth-child(186)", "#lower-right span.box:nth-child(186)", 
      "#upper-left span.box:nth-child(202)", "#upper-right span.box:nth-child(202)", "#lower-left span.box:nth-child(202)", "#lower-right span.box:nth-child(202)", 
      "#upper-left span.box:nth-child(218)", "#upper-right span.box:nth-child(218)", "#lower-left span.box:nth-child(218)", "#lower-right span.box:nth-child(218)", 
      "#upper-left span.box:nth-child(234)", "#upper-right span.box:nth-child(234)", "#lower-left span.box:nth-child(234)", "#lower-right span.box:nth-child(234)", 
      "#upper-left span.box:nth-child(250)", "#upper-right span.box:nth-child(250)", "#lower-left span.box:nth-child(250)", "#lower-right span.box:nth-child(250)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(171)", "#upper-right span.box:nth-child(171)", "#lower-left span.box:nth-child(171)", "#lower-right span.box:nth-child(171)", 
      "#upper-left span.box:nth-child(172)", "#upper-right span.box:nth-child(172)", "#lower-left span.box:nth-child(172)", "#lower-right span.box:nth-child(172)", 
      "#upper-left span.box:nth-child(173)", "#upper-right span.box:nth-child(173)", "#lower-left span.box:nth-child(173)", "#lower-right span.box:nth-child(173)", 
      "#upper-left span.box:nth-child(174)", "#upper-right span.box:nth-child(174)", "#lower-left span.box:nth-child(174)", "#lower-right span.box:nth-child(174)", 
      "#upper-left span.box:nth-child(175)", "#upper-right span.box:nth-child(175)", "#lower-left span.box:nth-child(175)", "#lower-right span.box:nth-child(175)", 
      "#upper-left span.box:nth-child(176)", "#upper-right span.box:nth-child(176)", "#lower-left span.box:nth-child(176)", "#lower-right span.box:nth-child(176)", 
      "#upper-left span.box:nth-child(187)", "#upper-right span.box:nth-child(187)", "#lower-left span.box:nth-child(187)", "#lower-right span.box:nth-child(187)", 
      "#upper-left span.box:nth-child(203)", "#upper-right span.box:nth-child(203)", "#lower-left span.box:nth-child(203)", "#lower-right span.box:nth-child(203)", 
      "#upper-left span.box:nth-child(219)", "#upper-right span.box:nth-child(219)", "#lower-left span.box:nth-child(219)", "#lower-right span.box:nth-child(219)", 
      "#upper-left span.box:nth-child(235)", "#upper-right span.box:nth-child(235)", "#lower-left span.box:nth-child(235)", "#lower-right span.box:nth-child(235)", 
      "#upper-left span.box:nth-child(251)", "#upper-right span.box:nth-child(251)", "#lower-left span.box:nth-child(251)", "#lower-right span.box:nth-child(251)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(188)", "#upper-right span.box:nth-child(188)", "#lower-left span.box:nth-child(188)", "#lower-right span.box:nth-child(188)", 
      "#upper-left span.box:nth-child(189)", "#upper-right span.box:nth-child(189)", "#lower-left span.box:nth-child(189)", "#lower-right span.box:nth-child(189)", 
      "#upper-left span.box:nth-child(190)", "#upper-right span.box:nth-child(190)", "#lower-left span.box:nth-child(190)", "#lower-right span.box:nth-child(190)", 
      "#upper-left span.box:nth-child(191)", "#upper-right span.box:nth-child(191)", "#lower-left span.box:nth-child(191)", "#lower-right span.box:nth-child(191)", 
      "#upper-left span.box:nth-child(192)", "#upper-right span.box:nth-child(192)", "#lower-left span.box:nth-child(192)", "#lower-right span.box:nth-child(192)", 
      "#upper-left span.box:nth-child(204)", "#upper-right span.box:nth-child(204)", "#lower-left span.box:nth-child(204)", "#lower-right span.box:nth-child(204)", 
      "#upper-left span.box:nth-child(220)", "#upper-right span.box:nth-child(220)", "#lower-left span.box:nth-child(220)", "#lower-right span.box:nth-child(220)", 
      "#upper-left span.box:nth-child(236)", "#upper-right span.box:nth-child(236)", "#lower-left span.box:nth-child(236)", "#lower-right span.box:nth-child(236)", 
      "#upper-left span.box:nth-child(252)", "#upper-right span.box:nth-child(252)", "#lower-left span.box:nth-child(252)", "#lower-right span.box:nth-child(252)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(205)", "#upper-right span.box:nth-child(205)", "#lower-left span.box:nth-child(205)", "#lower-right span.box:nth-child(205)", 
      "#upper-left span.box:nth-child(206)", "#upper-right span.box:nth-child(206)", "#lower-left span.box:nth-child(206)", "#lower-right span.box:nth-child(206)", 
      "#upper-left span.box:nth-child(207)", "#upper-right span.box:nth-child(207)", "#lower-left span.box:nth-child(207)", "#lower-right span.box:nth-child(207)", 
      "#upper-left span.box:nth-child(208)", "#upper-right span.box:nth-child(208)", "#lower-left span.box:nth-child(208)", "#lower-right span.box:nth-child(208)", 
      "#upper-left span.box:nth-child(221)", "#upper-right span.box:nth-child(221)", "#lower-left span.box:nth-child(221)", "#lower-right span.box:nth-child(221)", 
      "#upper-left span.box:nth-child(237)", "#upper-right span.box:nth-child(237)", "#lower-left span.box:nth-child(237)", "#lower-right span.box:nth-child(237)", 
      "#upper-left span.box:nth-child(253)", "#upper-right span.box:nth-child(253)", "#lower-left span.box:nth-child(253)", "#lower-right span.box:nth-child(253)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(222)", "#upper-right span.box:nth-child(222)", "#lower-left span.box:nth-child(222)", "#lower-right span.box:nth-child(222)", 
      "#upper-left span.box:nth-child(223)", "#upper-right span.box:nth-child(223)", "#lower-left span.box:nth-child(223)", "#lower-right span.box:nth-child(223)", 
      "#upper-left span.box:nth-child(224)", "#upper-right span.box:nth-child(224)", "#lower-left span.box:nth-child(224)", "#lower-right span.box:nth-child(224)", 
      "#upper-left span.box:nth-child(238)", "#upper-right span.box:nth-child(238)", "#lower-left span.box:nth-child(238)", "#lower-right span.box:nth-child(238)", 
      "#upper-left span.box:nth-child(254)", "#upper-right span.box:nth-child(254)", "#lower-left span.box:nth-child(254)", "#lower-right span.box:nth-child(254)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(239)", "#upper-right span.box:nth-child(239)", "#lower-left span.box:nth-child(239)", "#lower-right span.box:nth-child(239)", 
      "#upper-left span.box:nth-child(240)", "#upper-right span.box:nth-child(240)", "#lower-left span.box:nth-child(240)", "#lower-right span.box:nth-child(240)", 
      "#upper-left span.box:nth-child(255)", "#upper-right span.box:nth-child(255)", "#lower-left span.box:nth-child(255)", "#lower-right span.box:nth-child(255)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.fromTo(
    [
      "#upper-left span.box:nth-child(256)", "#upper-right span.box:nth-child(256)", "#lower-left span.box:nth-child(256)", "#lower-right span.box:nth-child(256)"
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  // reverse transition 
  mainTl.to(
    [
      "#upper-left span.box:nth-child(256)", "#upper-right span.box:nth-child(256)", "#lower-left span.box:nth-child(256)", "#lower-right span.box:nth-child(256)"
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '>+=1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(239)", "#upper-right span.box:nth-child(239)", "#lower-left span.box:nth-child(239)", "#lower-right span.box:nth-child(239)", 
      "#upper-left span.box:nth-child(240)", "#upper-right span.box:nth-child(240)", "#lower-left span.box:nth-child(240)", "#lower-right span.box:nth-child(240)", 
      "#upper-left span.box:nth-child(255)", "#upper-right span.box:nth-child(255)", "#lower-left span.box:nth-child(255)", "#lower-right span.box:nth-child(255)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(222)", "#upper-right span.box:nth-child(222)", "#lower-left span.box:nth-child(222)", "#lower-right span.box:nth-child(222)", 
      "#upper-left span.box:nth-child(223)", "#upper-right span.box:nth-child(223)", "#lower-left span.box:nth-child(223)", "#lower-right span.box:nth-child(223)", 
      "#upper-left span.box:nth-child(224)", "#upper-right span.box:nth-child(224)", "#lower-left span.box:nth-child(224)", "#lower-right span.box:nth-child(224)", 
      "#upper-left span.box:nth-child(238)", "#upper-right span.box:nth-child(238)", "#lower-left span.box:nth-child(238)", "#lower-right span.box:nth-child(238)", 
      "#upper-left span.box:nth-child(254)", "#upper-right span.box:nth-child(254)", "#lower-left span.box:nth-child(254)", "#lower-right span.box:nth-child(254)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(205)", "#upper-right span.box:nth-child(205)", "#lower-left span.box:nth-child(205)", "#lower-right span.box:nth-child(205)", 
      "#upper-left span.box:nth-child(206)", "#upper-right span.box:nth-child(206)", "#lower-left span.box:nth-child(206)", "#lower-right span.box:nth-child(206)", 
      "#upper-left span.box:nth-child(207)", "#upper-right span.box:nth-child(207)", "#lower-left span.box:nth-child(207)", "#lower-right span.box:nth-child(207)", 
      "#upper-left span.box:nth-child(208)", "#upper-right span.box:nth-child(208)", "#lower-left span.box:nth-child(208)", "#lower-right span.box:nth-child(208)", 
      "#upper-left span.box:nth-child(221)", "#upper-right span.box:nth-child(221)", "#lower-left span.box:nth-child(221)", "#lower-right span.box:nth-child(221)", 
      "#upper-left span.box:nth-child(237)", "#upper-right span.box:nth-child(237)", "#lower-left span.box:nth-child(237)", "#lower-right span.box:nth-child(237)", 
      "#upper-left span.box:nth-child(253)", "#upper-right span.box:nth-child(253)", "#lower-left span.box:nth-child(253)", "#lower-right span.box:nth-child(253)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(188)", "#upper-right span.box:nth-child(188)", "#lower-left span.box:nth-child(188)", "#lower-right span.box:nth-child(188)", 
      "#upper-left span.box:nth-child(189)", "#upper-right span.box:nth-child(189)", "#lower-left span.box:nth-child(189)", "#lower-right span.box:nth-child(189)", 
      "#upper-left span.box:nth-child(190)", "#upper-right span.box:nth-child(190)", "#lower-left span.box:nth-child(190)", "#lower-right span.box:nth-child(190)", 
      "#upper-left span.box:nth-child(191)", "#upper-right span.box:nth-child(191)", "#lower-left span.box:nth-child(191)", "#lower-right span.box:nth-child(191)", 
      "#upper-left span.box:nth-child(192)", "#upper-right span.box:nth-child(192)", "#lower-left span.box:nth-child(192)", "#lower-right span.box:nth-child(192)", 
      "#upper-left span.box:nth-child(204)", "#upper-right span.box:nth-child(204)", "#lower-left span.box:nth-child(204)", "#lower-right span.box:nth-child(204)", 
      "#upper-left span.box:nth-child(220)", "#upper-right span.box:nth-child(220)", "#lower-left span.box:nth-child(220)", "#lower-right span.box:nth-child(220)", 
      "#upper-left span.box:nth-child(236)", "#upper-right span.box:nth-child(236)", "#lower-left span.box:nth-child(236)", "#lower-right span.box:nth-child(236)", 
      "#upper-left span.box:nth-child(252)", "#upper-right span.box:nth-child(252)", "#lower-left span.box:nth-child(252)", "#lower-right span.box:nth-child(252)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(171)", "#upper-right span.box:nth-child(171)", "#lower-left span.box:nth-child(171)", "#lower-right span.box:nth-child(171)", 
      "#upper-left span.box:nth-child(172)", "#upper-right span.box:nth-child(172)", "#lower-left span.box:nth-child(172)", "#lower-right span.box:nth-child(172)", 
      "#upper-left span.box:nth-child(173)", "#upper-right span.box:nth-child(173)", "#lower-left span.box:nth-child(173)", "#lower-right span.box:nth-child(173)", 
      "#upper-left span.box:nth-child(174)", "#upper-right span.box:nth-child(174)", "#lower-left span.box:nth-child(174)", "#lower-right span.box:nth-child(174)", 
      "#upper-left span.box:nth-child(175)", "#upper-right span.box:nth-child(175)", "#lower-left span.box:nth-child(175)", "#lower-right span.box:nth-child(175)", 
      "#upper-left span.box:nth-child(176)", "#upper-right span.box:nth-child(176)", "#lower-left span.box:nth-child(176)", "#lower-right span.box:nth-child(176)", 
      "#upper-left span.box:nth-child(187)", "#upper-right span.box:nth-child(187)", "#lower-left span.box:nth-child(187)", "#lower-right span.box:nth-child(187)", 
      "#upper-left span.box:nth-child(203)", "#upper-right span.box:nth-child(203)", "#lower-left span.box:nth-child(203)", "#lower-right span.box:nth-child(203)", 
      "#upper-left span.box:nth-child(219)", "#upper-right span.box:nth-child(219)", "#lower-left span.box:nth-child(219)", "#lower-right span.box:nth-child(219)", 
      "#upper-left span.box:nth-child(235)", "#upper-right span.box:nth-child(235)", "#lower-left span.box:nth-child(235)", "#lower-right span.box:nth-child(235)", 
      "#upper-left span.box:nth-child(251)", "#upper-right span.box:nth-child(251)", "#lower-left span.box:nth-child(251)", "#lower-right span.box:nth-child(251)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(154)", "#upper-right span.box:nth-child(154)", "#lower-left span.box:nth-child(154)", "#lower-right span.box:nth-child(154)", 
      "#upper-left span.box:nth-child(155)", "#upper-right span.box:nth-child(155)", "#lower-left span.box:nth-child(155)", "#lower-right span.box:nth-child(155)", 
      "#upper-left span.box:nth-child(156)", "#upper-right span.box:nth-child(156)", "#lower-left span.box:nth-child(156)", "#lower-right span.box:nth-child(156)", 
      "#upper-left span.box:nth-child(157)", "#upper-right span.box:nth-child(157)", "#lower-left span.box:nth-child(157)", "#lower-right span.box:nth-child(157)", 
      "#upper-left span.box:nth-child(158)", "#upper-right span.box:nth-child(158)", "#lower-left span.box:nth-child(158)", "#lower-right span.box:nth-child(158)", 
      "#upper-left span.box:nth-child(159)", "#upper-right span.box:nth-child(159)", "#lower-left span.box:nth-child(159)", "#lower-right span.box:nth-child(159)", 
      "#upper-left span.box:nth-child(160)", "#upper-right span.box:nth-child(160)", "#lower-left span.box:nth-child(160)", "#lower-right span.box:nth-child(160)", 
      "#upper-left span.box:nth-child(170)", "#upper-right span.box:nth-child(170)", "#lower-left span.box:nth-child(170)", "#lower-right span.box:nth-child(170)", 
      "#upper-left span.box:nth-child(186)", "#upper-right span.box:nth-child(186)", "#lower-left span.box:nth-child(186)", "#lower-right span.box:nth-child(186)", 
      "#upper-left span.box:nth-child(202)", "#upper-right span.box:nth-child(202)", "#lower-left span.box:nth-child(202)", "#lower-right span.box:nth-child(202)", 
      "#upper-left span.box:nth-child(218)", "#upper-right span.box:nth-child(218)", "#lower-left span.box:nth-child(218)", "#lower-right span.box:nth-child(218)", 
      "#upper-left span.box:nth-child(234)", "#upper-right span.box:nth-child(234)", "#lower-left span.box:nth-child(234)", "#lower-right span.box:nth-child(234)", 
      "#upper-left span.box:nth-child(250)", "#upper-right span.box:nth-child(250)", "#lower-left span.box:nth-child(250)", "#lower-right span.box:nth-child(250)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(137)", "#upper-right span.box:nth-child(137)", "#lower-left span.box:nth-child(137)", "#lower-right span.box:nth-child(137)", 
      "#upper-left span.box:nth-child(138)", "#upper-right span.box:nth-child(138)", "#lower-left span.box:nth-child(138)", "#lower-right span.box:nth-child(138)", 
      "#upper-left span.box:nth-child(139)", "#upper-right span.box:nth-child(139)", "#lower-left span.box:nth-child(139)", "#lower-right span.box:nth-child(139)", 
      "#upper-left span.box:nth-child(140)", "#upper-right span.box:nth-child(140)", "#lower-left span.box:nth-child(140)", "#lower-right span.box:nth-child(140)", 
      "#upper-left span.box:nth-child(141)", "#upper-right span.box:nth-child(141)", "#lower-left span.box:nth-child(141)", "#lower-right span.box:nth-child(141)", 
      "#upper-left span.box:nth-child(142)", "#upper-right span.box:nth-child(142)", "#lower-left span.box:nth-child(142)", "#lower-right span.box:nth-child(142)", 
      "#upper-left span.box:nth-child(143)", "#upper-right span.box:nth-child(143)", "#lower-left span.box:nth-child(143)", "#lower-right span.box:nth-child(143)", 
      "#upper-left span.box:nth-child(144)", "#upper-right span.box:nth-child(144)", "#lower-left span.box:nth-child(144)", "#lower-right span.box:nth-child(144)", 
      "#upper-left span.box:nth-child(153)", "#upper-right span.box:nth-child(153)", "#lower-left span.box:nth-child(153)", "#lower-right span.box:nth-child(153)", 
      "#upper-left span.box:nth-child(169)", "#upper-right span.box:nth-child(169)", "#lower-left span.box:nth-child(169)", "#lower-right span.box:nth-child(169)", 
      "#upper-left span.box:nth-child(185)", "#upper-right span.box:nth-child(185)", "#lower-left span.box:nth-child(185)", "#lower-right span.box:nth-child(185)", 
      "#upper-left span.box:nth-child(201)", "#upper-right span.box:nth-child(201)", "#lower-left span.box:nth-child(201)", "#lower-right span.box:nth-child(201)", 
      "#upper-left span.box:nth-child(217)", "#upper-right span.box:nth-child(217)", "#lower-left span.box:nth-child(217)", "#lower-right span.box:nth-child(217)", 
      "#upper-left span.box:nth-child(233)", "#upper-right span.box:nth-child(233)", "#lower-left span.box:nth-child(233)", "#lower-right span.box:nth-child(233)", 
      "#upper-left span.box:nth-child(249)", "#upper-right span.box:nth-child(249)", "#lower-left span.box:nth-child(249)", "#lower-right span.box:nth-child(249)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(120)", "#upper-right span.box:nth-child(120)", "#lower-left span.box:nth-child(120)", "#lower-right span.box:nth-child(120)", 
      "#upper-left span.box:nth-child(121)", "#upper-right span.box:nth-child(121)", "#lower-left span.box:nth-child(121)", "#lower-right span.box:nth-child(121)", 
      "#upper-left span.box:nth-child(122)", "#upper-right span.box:nth-child(122)", "#lower-left span.box:nth-child(122)", "#lower-right span.box:nth-child(122)", 
      "#upper-left span.box:nth-child(123)", "#upper-right span.box:nth-child(123)", "#lower-left span.box:nth-child(123)", "#lower-right span.box:nth-child(123)", 
      "#upper-left span.box:nth-child(124)", "#upper-right span.box:nth-child(124)", "#lower-left span.box:nth-child(124)", "#lower-right span.box:nth-child(124)", 
      "#upper-left span.box:nth-child(125)", "#upper-right span.box:nth-child(125)", "#lower-left span.box:nth-child(125)", "#lower-right span.box:nth-child(125)", 
      "#upper-left span.box:nth-child(126)", "#upper-right span.box:nth-child(126)", "#lower-left span.box:nth-child(126)", "#lower-right span.box:nth-child(126)", 
      "#upper-left span.box:nth-child(127)", "#upper-right span.box:nth-child(127)", "#lower-left span.box:nth-child(127)", "#lower-right span.box:nth-child(127)", 
      "#upper-left span.box:nth-child(128)", "#upper-right span.box:nth-child(128)", "#lower-left span.box:nth-child(128)", "#lower-right span.box:nth-child(128)", 
      "#upper-left span.box:nth-child(136)", "#upper-right span.box:nth-child(136)", "#lower-left span.box:nth-child(136)", "#lower-right span.box:nth-child(136)", 
      "#upper-left span.box:nth-child(152)", "#upper-right span.box:nth-child(152)", "#lower-left span.box:nth-child(152)", "#lower-right span.box:nth-child(152)", 
      "#upper-left span.box:nth-child(168)", "#upper-right span.box:nth-child(168)", "#lower-left span.box:nth-child(168)", "#lower-right span.box:nth-child(168)", 
      "#upper-left span.box:nth-child(184)", "#upper-right span.box:nth-child(184)", "#lower-left span.box:nth-child(184)", "#lower-right span.box:nth-child(184)", 
      "#upper-left span.box:nth-child(200)", "#upper-right span.box:nth-child(200)", "#lower-left span.box:nth-child(200)", "#lower-right span.box:nth-child(200)", 
      "#upper-left span.box:nth-child(216)", "#upper-right span.box:nth-child(216)", "#lower-left span.box:nth-child(216)", "#lower-right span.box:nth-child(216)", 
      "#upper-left span.box:nth-child(232)", "#upper-right span.box:nth-child(232)", "#lower-left span.box:nth-child(232)", "#lower-right span.box:nth-child(232)",
      "#upper-left span.box:nth-child(248)", "#upper-right span.box:nth-child(248)", "#lower-left span.box:nth-child(248)", "#lower-right span.box:nth-child(248)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(103)", "#upper-right span.box:nth-child(103)", "#lower-left span.box:nth-child(103)", "#lower-right span.box:nth-child(103)", 
      "#upper-left span.box:nth-child(104)", "#upper-right span.box:nth-child(104)", "#lower-left span.box:nth-child(104)", "#lower-right span.box:nth-child(104)", 
      "#upper-left span.box:nth-child(105)", "#upper-right span.box:nth-child(105)", "#lower-left span.box:nth-child(105)", "#lower-right span.box:nth-child(105)", 
      "#upper-left span.box:nth-child(106)", "#upper-right span.box:nth-child(106)", "#lower-left span.box:nth-child(106)", "#lower-right span.box:nth-child(106)", 
      "#upper-left span.box:nth-child(107)", "#upper-right span.box:nth-child(107)", "#lower-left span.box:nth-child(107)", "#lower-right span.box:nth-child(107)", 
      "#upper-left span.box:nth-child(108)", "#upper-right span.box:nth-child(108)", "#lower-left span.box:nth-child(108)", "#lower-right span.box:nth-child(108)", 
      "#upper-left span.box:nth-child(109)", "#upper-right span.box:nth-child(109)", "#lower-left span.box:nth-child(109)", "#lower-right span.box:nth-child(109)", 
      "#upper-left span.box:nth-child(110)", "#upper-right span.box:nth-child(110)", "#lower-left span.box:nth-child(110)", "#lower-right span.box:nth-child(110)", 
      "#upper-left span.box:nth-child(111)", "#upper-right span.box:nth-child(111)", "#lower-left span.box:nth-child(111)", "#lower-right span.box:nth-child(111)", 
      "#upper-left span.box:nth-child(112)", "#upper-right span.box:nth-child(112)", "#lower-left span.box:nth-child(112)", "#lower-right span.box:nth-child(112)", 
      "#upper-left span.box:nth-child(119)", "#upper-right span.box:nth-child(119)", "#lower-left span.box:nth-child(119)", "#lower-right span.box:nth-child(119)", 
      "#upper-left span.box:nth-child(135)", "#upper-right span.box:nth-child(135)", "#lower-left span.box:nth-child(135)", "#lower-right span.box:nth-child(135)", 
      "#upper-left span.box:nth-child(151)", "#upper-right span.box:nth-child(151)", "#lower-left span.box:nth-child(151)", "#lower-right span.box:nth-child(151)", 
      "#upper-left span.box:nth-child(167)", "#upper-right span.box:nth-child(167)", "#lower-left span.box:nth-child(167)", "#lower-right span.box:nth-child(167)", 
      "#upper-left span.box:nth-child(183)", "#upper-right span.box:nth-child(183)", "#lower-left span.box:nth-child(183)", "#lower-right span.box:nth-child(183)", 
      "#upper-left span.box:nth-child(199)", "#upper-right span.box:nth-child(199)", "#lower-left span.box:nth-child(199)", "#lower-right span.box:nth-child(199)",
      "#upper-left span.box:nth-child(215)", "#upper-right span.box:nth-child(215)", "#lower-left span.box:nth-child(215)", "#lower-right span.box:nth-child(215)",
      "#upper-left span.box:nth-child(231)", "#upper-right span.box:nth-child(231)", "#lower-left span.box:nth-child(231)", "#lower-right span.box:nth-child(231)",
      "#upper-left span.box:nth-child(247)", "#upper-right span.box:nth-child(247)", "#lower-left span.box:nth-child(247)", "#lower-right span.box:nth-child(247)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(86)", "#upper-right span.box:nth-child(86)", "#lower-left span.box:nth-child(86)", "#lower-right span.box:nth-child(86)", 
      "#upper-left span.box:nth-child(87)", "#upper-right span.box:nth-child(87)", "#lower-left span.box:nth-child(87)", "#lower-right span.box:nth-child(87)", 
      "#upper-left span.box:nth-child(88)", "#upper-right span.box:nth-child(88)", "#lower-left span.box:nth-child(88)", "#lower-right span.box:nth-child(88)", 
      "#upper-left span.box:nth-child(89)", "#upper-right span.box:nth-child(89)", "#lower-left span.box:nth-child(89)", "#lower-right span.box:nth-child(89)", 
      "#upper-left span.box:nth-child(90)", "#upper-right span.box:nth-child(90)", "#lower-left span.box:nth-child(90)", "#lower-right span.box:nth-child(90)", 
      "#upper-left span.box:nth-child(91)", "#upper-right span.box:nth-child(91)", "#lower-left span.box:nth-child(91)", "#lower-right span.box:nth-child(91)", 
      "#upper-left span.box:nth-child(92)", "#upper-right span.box:nth-child(92)", "#lower-left span.box:nth-child(92)", "#lower-right span.box:nth-child(92)", 
      "#upper-left span.box:nth-child(93)", "#upper-right span.box:nth-child(93)", "#lower-left span.box:nth-child(93)", "#lower-right span.box:nth-child(93)", 
      "#upper-left span.box:nth-child(94)", "#upper-right span.box:nth-child(94)", "#lower-left span.box:nth-child(94)", "#lower-right span.box:nth-child(94)", 
      "#upper-left span.box:nth-child(95)", "#upper-right span.box:nth-child(95)", "#lower-left span.box:nth-child(95)", "#lower-right span.box:nth-child(95)", 
      "#upper-left span.box:nth-child(96)", "#upper-right span.box:nth-child(96)", "#lower-left span.box:nth-child(96)", "#lower-right span.box:nth-child(96)", 
      "#upper-left span.box:nth-child(102)", "#upper-right span.box:nth-child(102)", "#lower-left span.box:nth-child(102)", "#lower-right span.box:nth-child(102)", 
      "#upper-left span.box:nth-child(118)", "#upper-right span.box:nth-child(118)", "#lower-left span.box:nth-child(118)", "#lower-right span.box:nth-child(118)", 
      "#upper-left span.box:nth-child(134)", "#upper-right span.box:nth-child(134)", "#lower-left span.box:nth-child(134)", "#lower-right span.box:nth-child(134)", 
      "#upper-left span.box:nth-child(150)", "#upper-right span.box:nth-child(150)", "#lower-left span.box:nth-child(150)", "#lower-right span.box:nth-child(150)", 
      "#upper-left span.box:nth-child(166)", "#upper-right span.box:nth-child(166)", "#lower-left span.box:nth-child(166)", "#lower-right span.box:nth-child(166)",
      "#upper-left span.box:nth-child(182)", "#upper-right span.box:nth-child(182)", "#lower-left span.box:nth-child(182)", "#lower-right span.box:nth-child(182)",
      "#upper-left span.box:nth-child(198)", "#upper-right span.box:nth-child(198)", "#lower-left span.box:nth-child(198)", "#lower-right span.box:nth-child(198)",
      "#upper-left span.box:nth-child(214)", "#upper-right span.box:nth-child(214)", "#lower-left span.box:nth-child(214)", "#lower-right span.box:nth-child(214)",
      "#upper-left span.box:nth-child(230)", "#upper-right span.box:nth-child(230)", "#lower-left span.box:nth-child(230)", "#lower-right span.box:nth-child(230)",
      "#upper-left span.box:nth-child(246)", "#upper-right span.box:nth-child(246)", "#lower-left span.box:nth-child(246)", "#lower-right span.box:nth-child(246)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(69)", "#upper-right span.box:nth-child(69)", "#lower-left span.box:nth-child(69)", "#lower-right span.box:nth-child(69)", 
      "#upper-left span.box:nth-child(70)", "#upper-right span.box:nth-child(70)", "#lower-left span.box:nth-child(70)", "#lower-right span.box:nth-child(70)", 
      "#upper-left span.box:nth-child(71)", "#upper-right span.box:nth-child(71)", "#lower-left span.box:nth-child(71)", "#lower-right span.box:nth-child(71)", 
      "#upper-left span.box:nth-child(72)", "#upper-right span.box:nth-child(72)", "#lower-left span.box:nth-child(72)", "#lower-right span.box:nth-child(72)", 
      "#upper-left span.box:nth-child(73)", "#upper-right span.box:nth-child(73)", "#lower-left span.box:nth-child(73)", "#lower-right span.box:nth-child(73)", 
      "#upper-left span.box:nth-child(74)", "#upper-right span.box:nth-child(74)", "#lower-left span.box:nth-child(74)", "#lower-right span.box:nth-child(74)", 
      "#upper-left span.box:nth-child(75)", "#upper-right span.box:nth-child(75)", "#lower-left span.box:nth-child(75)", "#lower-right span.box:nth-child(75)", 
      "#upper-left span.box:nth-child(76)", "#upper-right span.box:nth-child(76)", "#lower-left span.box:nth-child(76)", "#lower-right span.box:nth-child(76)", 
      "#upper-left span.box:nth-child(77)", "#upper-right span.box:nth-child(77)", "#lower-left span.box:nth-child(77)", "#lower-right span.box:nth-child(77)", 
      "#upper-left span.box:nth-child(78)", "#upper-right span.box:nth-child(78)", "#lower-left span.box:nth-child(78)", "#lower-right span.box:nth-child(78)", 
      "#upper-left span.box:nth-child(79)", "#upper-right span.box:nth-child(79)", "#lower-left span.box:nth-child(79)", "#lower-right span.box:nth-child(79)", 
      "#upper-left span.box:nth-child(80)", "#upper-right span.box:nth-child(80)", "#lower-left span.box:nth-child(80)", "#lower-right span.box:nth-child(80)", 
      "#upper-left span.box:nth-child(85)", "#upper-right span.box:nth-child(85)", "#lower-left span.box:nth-child(85)", "#lower-right span.box:nth-child(85)", 
      "#upper-left span.box:nth-child(101)", "#upper-right span.box:nth-child(101)", "#lower-left span.box:nth-child(101)", "#lower-right span.box:nth-child(101)", 
      "#upper-left span.box:nth-child(117)", "#upper-right span.box:nth-child(117)", "#lower-left span.box:nth-child(117)", "#lower-right span.box:nth-child(117)", 
      "#upper-left span.box:nth-child(133)", "#upper-right span.box:nth-child(133)", "#lower-left span.box:nth-child(133)", "#lower-right span.box:nth-child(133)",
      "#upper-left span.box:nth-child(149)", "#upper-right span.box:nth-child(149)", "#lower-left span.box:nth-child(149)", "#lower-right span.box:nth-child(149)",
      "#upper-left span.box:nth-child(165)", "#upper-right span.box:nth-child(165)", "#lower-left span.box:nth-child(165)", "#lower-right span.box:nth-child(165)",
      "#upper-left span.box:nth-child(181)", "#upper-right span.box:nth-child(181)", "#lower-left span.box:nth-child(181)", "#lower-right span.box:nth-child(181)",
      "#upper-left span.box:nth-child(197)", "#upper-right span.box:nth-child(197)", "#lower-left span.box:nth-child(197)", "#lower-right span.box:nth-child(197)",
      "#upper-left span.box:nth-child(213)", "#upper-right span.box:nth-child(213)", "#lower-left span.box:nth-child(213)", "#lower-right span.box:nth-child(213)",
      "#upper-left span.box:nth-child(229)", "#upper-right span.box:nth-child(229)", "#lower-left span.box:nth-child(229)", "#lower-right span.box:nth-child(229)",
      "#upper-left span.box:nth-child(245)", "#upper-right span.box:nth-child(245)", "#lower-left span.box:nth-child(245)", "#lower-right span.box:nth-child(245)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(52)", "#upper-right span.box:nth-child(52)", "#lower-left span.box:nth-child(52)", "#lower-right span.box:nth-child(52)", 
      "#upper-left span.box:nth-child(53)", "#upper-right span.box:nth-child(53)", "#lower-left span.box:nth-child(53)", "#lower-right span.box:nth-child(53)", 
      "#upper-left span.box:nth-child(54)", "#upper-right span.box:nth-child(54)", "#lower-left span.box:nth-child(54)", "#lower-right span.box:nth-child(54)", 
      "#upper-left span.box:nth-child(55)", "#upper-right span.box:nth-child(55)", "#lower-left span.box:nth-child(55)", "#lower-right span.box:nth-child(55)", 
      "#upper-left span.box:nth-child(56)", "#upper-right span.box:nth-child(56)", "#lower-left span.box:nth-child(56)", "#lower-right span.box:nth-child(56)", 
      "#upper-left span.box:nth-child(57)", "#upper-right span.box:nth-child(57)", "#lower-left span.box:nth-child(57)", "#lower-right span.box:nth-child(57)", 
      "#upper-left span.box:nth-child(58)", "#upper-right span.box:nth-child(58)", "#lower-left span.box:nth-child(58)", "#lower-right span.box:nth-child(58)", 
      "#upper-left span.box:nth-child(59)", "#upper-right span.box:nth-child(59)", "#lower-left span.box:nth-child(59)", "#lower-right span.box:nth-child(59)", 
      "#upper-left span.box:nth-child(60)", "#upper-right span.box:nth-child(60)", "#lower-left span.box:nth-child(60)", "#lower-right span.box:nth-child(60)", 
      "#upper-left span.box:nth-child(61)", "#upper-right span.box:nth-child(61)", "#lower-left span.box:nth-child(61)", "#lower-right span.box:nth-child(61)", 
      "#upper-left span.box:nth-child(62)", "#upper-right span.box:nth-child(62)", "#lower-left span.box:nth-child(62)", "#lower-right span.box:nth-child(62)", 
      "#upper-left span.box:nth-child(63)", "#upper-right span.box:nth-child(63)", "#lower-left span.box:nth-child(63)", "#lower-right span.box:nth-child(63)", 
      "#upper-left span.box:nth-child(64)", "#upper-right span.box:nth-child(64)", "#lower-left span.box:nth-child(64)", "#lower-right span.box:nth-child(64)", 
      "#upper-left span.box:nth-child(68)", "#upper-right span.box:nth-child(68)", "#lower-left span.box:nth-child(68)", "#lower-right span.box:nth-child(68)", 
      "#upper-left span.box:nth-child(84)", "#upper-right span.box:nth-child(84)", "#lower-left span.box:nth-child(84)", "#lower-right span.box:nth-child(84)", 
      "#upper-left span.box:nth-child(100)", "#upper-right span.box:nth-child(100)", "#lower-left span.box:nth-child(100)", "#lower-right span.box:nth-child(100)",
      "#upper-left span.box:nth-child(116)", "#upper-right span.box:nth-child(116)", "#lower-left span.box:nth-child(116)", "#lower-right span.box:nth-child(116)",
      "#upper-left span.box:nth-child(132)", "#upper-right span.box:nth-child(132)", "#lower-left span.box:nth-child(132)", "#lower-right span.box:nth-child(132)",
      "#upper-left span.box:nth-child(148)", "#upper-right span.box:nth-child(148)", "#lower-left span.box:nth-child(148)", "#lower-right span.box:nth-child(148)",
      "#upper-left span.box:nth-child(164)", "#upper-right span.box:nth-child(164)", "#lower-left span.box:nth-child(164)", "#lower-right span.box:nth-child(164)",
      "#upper-left span.box:nth-child(180)", "#upper-right span.box:nth-child(180)", "#lower-left span.box:nth-child(180)", "#lower-right span.box:nth-child(180)",
      "#upper-left span.box:nth-child(196)", "#upper-right span.box:nth-child(196)", "#lower-left span.box:nth-child(196)", "#lower-right span.box:nth-child(196)",
      "#upper-left span.box:nth-child(212)", "#upper-right span.box:nth-child(212)", "#lower-left span.box:nth-child(212)", "#lower-right span.box:nth-child(212)",
      "#upper-left span.box:nth-child(228)", "#upper-right span.box:nth-child(228)", "#lower-left span.box:nth-child(228)", "#lower-right span.box:nth-child(228)",
      "#upper-left span.box:nth-child(244)", "#upper-right span.box:nth-child(244)", "#lower-left span.box:nth-child(244)", "#lower-right span.box:nth-child(244)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(35)", "#upper-right span.box:nth-child(35)", "#lower-left span.box:nth-child(35)", "#lower-right span.box:nth-child(35)", 
      "#upper-left span.box:nth-child(36)", "#upper-right span.box:nth-child(36)", "#lower-left span.box:nth-child(36)", "#lower-right span.box:nth-child(36)", 
      "#upper-left span.box:nth-child(37)", "#upper-right span.box:nth-child(37)", "#lower-left span.box:nth-child(37)", "#lower-right span.box:nth-child(37)", 
      "#upper-left span.box:nth-child(38)", "#upper-right span.box:nth-child(38)", "#lower-left span.box:nth-child(38)", "#lower-right span.box:nth-child(38)", 
      "#upper-left span.box:nth-child(39)", "#upper-right span.box:nth-child(39)", "#lower-left span.box:nth-child(39)", "#lower-right span.box:nth-child(39)", 
      "#upper-left span.box:nth-child(40)", "#upper-right span.box:nth-child(40)", "#lower-left span.box:nth-child(40)", "#lower-right span.box:nth-child(40)", 
      "#upper-left span.box:nth-child(41)", "#upper-right span.box:nth-child(41)", "#lower-left span.box:nth-child(41)", "#lower-right span.box:nth-child(41)", 
      "#upper-left span.box:nth-child(42)", "#upper-right span.box:nth-child(42)", "#lower-left span.box:nth-child(42)", "#lower-right span.box:nth-child(42)", 
      "#upper-left span.box:nth-child(43)", "#upper-right span.box:nth-child(43)", "#lower-left span.box:nth-child(43)", "#lower-right span.box:nth-child(43)", 
      "#upper-left span.box:nth-child(44)", "#upper-right span.box:nth-child(44)", "#lower-left span.box:nth-child(44)", "#lower-right span.box:nth-child(44)", 
      "#upper-left span.box:nth-child(45)", "#upper-right span.box:nth-child(45)", "#lower-left span.box:nth-child(45)", "#lower-right span.box:nth-child(45)", 
      "#upper-left span.box:nth-child(46)", "#upper-right span.box:nth-child(46)", "#lower-left span.box:nth-child(46)", "#lower-right span.box:nth-child(46)", 
      "#upper-left span.box:nth-child(47)", "#upper-right span.box:nth-child(47)", "#lower-left span.box:nth-child(47)", "#lower-right span.box:nth-child(47)", 
      "#upper-left span.box:nth-child(48)", "#upper-right span.box:nth-child(48)", "#lower-left span.box:nth-child(48)", "#lower-right span.box:nth-child(48)", 
      "#upper-left span.box:nth-child(51)", "#upper-right span.box:nth-child(51)", "#lower-left span.box:nth-child(51)", "#lower-right span.box:nth-child(51)", 
      "#upper-left span.box:nth-child(67)", "#upper-right span.box:nth-child(67)", "#lower-left span.box:nth-child(67)", "#lower-right span.box:nth-child(67)",
      "#upper-left span.box:nth-child(83)", "#upper-right span.box:nth-child(83)", "#lower-left span.box:nth-child(83)", "#lower-right span.box:nth-child(83)",
      "#upper-left span.box:nth-child(99)", "#upper-right span.box:nth-child(99)", "#lower-left span.box:nth-child(99)", "#lower-right span.box:nth-child(99)",
      "#upper-left span.box:nth-child(115)", "#upper-right span.box:nth-child(115)", "#lower-left span.box:nth-child(115)", "#lower-right span.box:nth-child(115)",
      "#upper-left span.box:nth-child(131)", "#upper-right span.box:nth-child(131)", "#lower-left span.box:nth-child(131)", "#lower-right span.box:nth-child(131)",
      "#upper-left span.box:nth-child(147)", "#upper-right span.box:nth-child(147)", "#lower-left span.box:nth-child(147)", "#lower-right span.box:nth-child(147)",
      "#upper-left span.box:nth-child(163)", "#upper-right span.box:nth-child(163)", "#lower-left span.box:nth-child(163)", "#lower-right span.box:nth-child(163)",
      "#upper-left span.box:nth-child(179)", "#upper-right span.box:nth-child(179)", "#lower-left span.box:nth-child(179)", "#lower-right span.box:nth-child(179)",
      "#upper-left span.box:nth-child(195)", "#upper-right span.box:nth-child(195)", "#lower-left span.box:nth-child(195)", "#lower-right span.box:nth-child(195)",
      "#upper-left span.box:nth-child(211)", "#upper-right span.box:nth-child(211)", "#lower-left span.box:nth-child(211)", "#lower-right span.box:nth-child(211)",
      "#upper-left span.box:nth-child(227)", "#upper-right span.box:nth-child(227)", "#lower-left span.box:nth-child(227)", "#lower-right span.box:nth-child(227)",
      "#upper-left span.box:nth-child(243)", "#upper-right span.box:nth-child(243)", "#lower-left span.box:nth-child(243)", "#lower-right span.box:nth-child(243)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(18)", "#upper-right span.box:nth-child(18)", "#lower-left span.box:nth-child(18)", "#lower-right span.box:nth-child(18)", 
      "#upper-left span.box:nth-child(19)", "#upper-right span.box:nth-child(19)", "#lower-left span.box:nth-child(19)", "#lower-right span.box:nth-child(19)", 
      "#upper-left span.box:nth-child(20)", "#upper-right span.box:nth-child(20)", "#lower-left span.box:nth-child(20)", "#lower-right span.box:nth-child(20)", 
      "#upper-left span.box:nth-child(21)", "#upper-right span.box:nth-child(21)", "#lower-left span.box:nth-child(21)", "#lower-right span.box:nth-child(21)", 
      "#upper-left span.box:nth-child(22)", "#upper-right span.box:nth-child(22)", "#lower-left span.box:nth-child(22)", "#lower-right span.box:nth-child(22)", 
      "#upper-left span.box:nth-child(23)", "#upper-right span.box:nth-child(23)", "#lower-left span.box:nth-child(23)", "#lower-right span.box:nth-child(23)", 
      "#upper-left span.box:nth-child(24)", "#upper-right span.box:nth-child(24)", "#lower-left span.box:nth-child(24)", "#lower-right span.box:nth-child(24)", 
      "#upper-left span.box:nth-child(25)", "#upper-right span.box:nth-child(25)", "#lower-left span.box:nth-child(25)", "#lower-right span.box:nth-child(25)", 
      "#upper-left span.box:nth-child(26)", "#upper-right span.box:nth-child(26)", "#lower-left span.box:nth-child(26)", "#lower-right span.box:nth-child(26)", 
      "#upper-left span.box:nth-child(27)", "#upper-right span.box:nth-child(27)", "#lower-left span.box:nth-child(27)", "#lower-right span.box:nth-child(27)", 
      "#upper-left span.box:nth-child(28)", "#upper-right span.box:nth-child(28)", "#lower-left span.box:nth-child(28)", "#lower-right span.box:nth-child(28)", 
      "#upper-left span.box:nth-child(29)", "#upper-right span.box:nth-child(29)", "#lower-left span.box:nth-child(29)", "#lower-right span.box:nth-child(29)", 
      "#upper-left span.box:nth-child(30)", "#upper-right span.box:nth-child(30)", "#lower-left span.box:nth-child(30)", "#lower-right span.box:nth-child(30)", 
      "#upper-left span.box:nth-child(31)", "#upper-right span.box:nth-child(31)", "#lower-left span.box:nth-child(31)", "#lower-right span.box:nth-child(31)", 
      "#upper-left span.box:nth-child(32)", "#upper-right span.box:nth-child(32)", "#lower-left span.box:nth-child(32)", "#lower-right span.box:nth-child(32)", 
      "#upper-left span.box:nth-child(34)", "#upper-right span.box:nth-child(34)", "#lower-left span.box:nth-child(34)", "#lower-right span.box:nth-child(34)",
      "#upper-left span.box:nth-child(50)", "#upper-right span.box:nth-child(50)", "#lower-left span.box:nth-child(50)", "#lower-right span.box:nth-child(50)",
      "#upper-left span.box:nth-child(66)", "#upper-right span.box:nth-child(66)", "#lower-left span.box:nth-child(66)", "#lower-right span.box:nth-child(66)",
      "#upper-left span.box:nth-child(82)", "#upper-right span.box:nth-child(82)", "#lower-left span.box:nth-child(82)", "#lower-right span.box:nth-child(82)",
      "#upper-left span.box:nth-child(98)", "#upper-right span.box:nth-child(98)", "#lower-left span.box:nth-child(98)", "#lower-right span.box:nth-child(98)",
      "#upper-left span.box:nth-child(114)", "#upper-right span.box:nth-child(114)", "#lower-left span.box:nth-child(114)", "#lower-right span.box:nth-child(114)",
      "#upper-left span.box:nth-child(130)", "#upper-right span.box:nth-child(130)", "#lower-left span.box:nth-child(130)", "#lower-right span.box:nth-child(130)",
      "#upper-left span.box:nth-child(146)", "#upper-right span.box:nth-child(146)", "#lower-left span.box:nth-child(146)", "#lower-right span.box:nth-child(146)",
      "#upper-left span.box:nth-child(162)", "#upper-right span.box:nth-child(162)", "#lower-left span.box:nth-child(162)", "#lower-right span.box:nth-child(162)",
      "#upper-left span.box:nth-child(178)", "#upper-right span.box:nth-child(178)", "#lower-left span.box:nth-child(178)", "#lower-right span.box:nth-child(178)",
      "#upper-left span.box:nth-child(194)", "#upper-right span.box:nth-child(194)", "#lower-left span.box:nth-child(194)", "#lower-right span.box:nth-child(194)",
      "#upper-left span.box:nth-child(210)", "#upper-right span.box:nth-child(210)", "#lower-left span.box:nth-child(210)", "#lower-right span.box:nth-child(210)",
      "#upper-left span.box:nth-child(226)", "#upper-right span.box:nth-child(226)", "#lower-left span.box:nth-child(226)", "#lower-right span.box:nth-child(226)",
      "#upper-left span.box:nth-child(242)", "#upper-right span.box:nth-child(242)", "#lower-left span.box:nth-child(242)", "#lower-right span.box:nth-child(242)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  mainTl.to(
    [
      "#upper-left span.box:nth-child(1)", "#upper-right span.box:nth-child(1)", "#lower-left span.box:nth-child(1)", "#lower-right span.box:nth-child(1)",
      "#upper-left span.box:nth-child(2)", "#upper-right span.box:nth-child(2)", "#lower-left span.box:nth-child(2)", "#lower-right span.box:nth-child(2)", 
      "#upper-left span.box:nth-child(3)", "#upper-right span.box:nth-child(3)", "#lower-left span.box:nth-child(3)", "#lower-right span.box:nth-child(3)", 
      "#upper-left span.box:nth-child(4)", "#upper-right span.box:nth-child(4)", "#lower-left span.box:nth-child(4)", "#lower-right span.box:nth-child(4)", 
      "#upper-left span.box:nth-child(5)", "#upper-right span.box:nth-child(5)", "#lower-left span.box:nth-child(5)", "#lower-right span.box:nth-child(5)", 
      "#upper-left span.box:nth-child(6)", "#upper-right span.box:nth-child(6)", "#lower-left span.box:nth-child(6)", "#lower-right span.box:nth-child(6)", 
      "#upper-left span.box:nth-child(7)", "#upper-right span.box:nth-child(7)", "#lower-left span.box:nth-child(7)", "#lower-right span.box:nth-child(7)", 
      "#upper-left span.box:nth-child(8)", "#upper-right span.box:nth-child(8)", "#lower-left span.box:nth-child(8)", "#lower-right span.box:nth-child(8)", 
      "#upper-left span.box:nth-child(9)", "#upper-right span.box:nth-child(9)", "#lower-left span.box:nth-child(9)", "#lower-right span.box:nth-child(9)", 
      "#upper-left span.box:nth-child(10)", "#upper-right span.box:nth-child(10)", "#lower-left span.box:nth-child(10)", "#lower-right span.box:nth-child(10)", 
      "#upper-left span.box:nth-child(11)", "#upper-right span.box:nth-child(11)", "#lower-left span.box:nth-child(11)", "#lower-right span.box:nth-child(11)", 
      "#upper-left span.box:nth-child(12)", "#upper-right span.box:nth-child(12)", "#lower-left span.box:nth-child(12)", "#lower-right span.box:nth-child(12)", 
      "#upper-left span.box:nth-child(13)", "#upper-right span.box:nth-child(13)", "#lower-left span.box:nth-child(13)", "#lower-right span.box:nth-child(13)", 
      "#upper-left span.box:nth-child(14)", "#upper-right span.box:nth-child(14)", "#lower-left span.box:nth-child(14)", "#lower-right span.box:nth-child(14)", 
      "#upper-left span.box:nth-child(15)", "#upper-right span.box:nth-child(15)", "#lower-left span.box:nth-child(15)", "#lower-right span.box:nth-child(15)", 
      "#upper-left span.box:nth-child(16)", "#upper-right span.box:nth-child(16)", "#lower-left span.box:nth-child(16)", "#lower-right span.box:nth-child(16)",
      "#upper-left span.box:nth-child(17)", "#upper-right span.box:nth-child(17)", "#lower-left span.box:nth-child(17)", "#lower-right span.box:nth-child(17)",
      "#upper-left span.box:nth-child(33)", "#upper-right span.box:nth-child(33)", "#lower-left span.box:nth-child(33)", "#lower-right span.box:nth-child(33)",
      "#upper-left span.box:nth-child(49)", "#upper-right span.box:nth-child(49)", "#lower-left span.box:nth-child(49)", "#lower-right span.box:nth-child(49)",
      "#upper-left span.box:nth-child(65)", "#upper-right span.box:nth-child(65)", "#lower-left span.box:nth-child(65)", "#lower-right span.box:nth-child(65)",
      "#upper-left span.box:nth-child(81)", "#upper-right span.box:nth-child(81)", "#lower-left span.box:nth-child(81)", "#lower-right span.box:nth-child(81)",
      "#upper-left span.box:nth-child(97)", "#upper-right span.box:nth-child(97)", "#lower-left span.box:nth-child(97)", "#lower-right span.box:nth-child(97)",
      "#upper-left span.box:nth-child(113)", "#upper-right span.box:nth-child(113)", "#lower-left span.box:nth-child(113)", "#lower-right span.box:nth-child(113)",
      "#upper-left span.box:nth-child(129)", "#upper-right span.box:nth-child(129)", "#lower-left span.box:nth-child(129)", "#lower-right span.box:nth-child(129)",
      "#upper-left span.box:nth-child(145)", "#upper-right span.box:nth-child(145)", "#lower-left span.box:nth-child(145)", "#lower-right span.box:nth-child(145)",
      "#upper-left span.box:nth-child(161)", "#upper-right span.box:nth-child(161)", "#lower-left span.box:nth-child(161)", "#lower-right span.box:nth-child(161)",
      "#upper-left span.box:nth-child(177)", "#upper-right span.box:nth-child(177)", "#lower-left span.box:nth-child(177)", "#lower-right span.box:nth-child(177)",
      "#upper-left span.box:nth-child(193)", "#upper-right span.box:nth-child(193)", "#lower-left span.box:nth-child(193)", "#lower-right span.box:nth-child(193)",
      "#upper-left span.box:nth-child(209)", "#upper-right span.box:nth-child(209)", "#lower-left span.box:nth-child(209)", "#lower-right span.box:nth-child(209)",
      "#upper-left span.box:nth-child(225)", "#upper-right span.box:nth-child(225)", "#lower-left span.box:nth-child(225)", "#lower-right span.box:nth-child(225)",
      "#upper-left span.box:nth-child(241)", "#upper-right span.box:nth-child(241)", "#lower-left span.box:nth-child(241)", "#lower-right span.box:nth-child(241)",
    ],
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
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

button.addEventListener("click", () => {
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(1)", "#upper-right span.box:nth-child(1)", "#lower-left span.box:nth-child(1)", "#lower-right span.box:nth-child(1)",
      "#upper-left span.box:nth-child(2)", "#upper-right span.box:nth-child(2)", "#lower-left span.box:nth-child(2)", "#lower-right span.box:nth-child(2)", 
      "#upper-left span.box:nth-child(3)", "#upper-right span.box:nth-child(3)", "#lower-left span.box:nth-child(3)", "#lower-right span.box:nth-child(3)", 
      "#upper-left span.box:nth-child(4)", "#upper-right span.box:nth-child(4)", "#lower-left span.box:nth-child(4)", "#lower-right span.box:nth-child(4)", 
      "#upper-left span.box:nth-child(5)", "#upper-right span.box:nth-child(5)", "#lower-left span.box:nth-child(5)", "#lower-right span.box:nth-child(5)", 
      "#upper-left span.box:nth-child(6)", "#upper-right span.box:nth-child(6)", "#lower-left span.box:nth-child(6)", "#lower-right span.box:nth-child(6)", 
      "#upper-left span.box:nth-child(7)", "#upper-right span.box:nth-child(7)", "#lower-left span.box:nth-child(7)", "#lower-right span.box:nth-child(7)", 
      "#upper-left span.box:nth-child(8)", "#upper-right span.box:nth-child(8)", "#lower-left span.box:nth-child(8)", "#lower-right span.box:nth-child(8)", 
      "#upper-left span.box:nth-child(9)", "#upper-right span.box:nth-child(9)", "#lower-left span.box:nth-child(9)", "#lower-right span.box:nth-child(9)", 
      "#upper-left span.box:nth-child(10)", "#upper-right span.box:nth-child(10)", "#lower-left span.box:nth-child(10)", "#lower-right span.box:nth-child(10)", 
      "#upper-left span.box:nth-child(11)", "#upper-right span.box:nth-child(11)", "#lower-left span.box:nth-child(11)", "#lower-right span.box:nth-child(11)", 
      "#upper-left span.box:nth-child(12)", "#upper-right span.box:nth-child(12)", "#lower-left span.box:nth-child(12)", "#lower-right span.box:nth-child(12)", 
      "#upper-left span.box:nth-child(13)", "#upper-right span.box:nth-child(13)", "#lower-left span.box:nth-child(13)", "#lower-right span.box:nth-child(13)", 
      "#upper-left span.box:nth-child(14)", "#upper-right span.box:nth-child(14)", "#lower-left span.box:nth-child(14)", "#lower-right span.box:nth-child(14)", 
      "#upper-left span.box:nth-child(15)", "#upper-right span.box:nth-child(15)", "#lower-left span.box:nth-child(15)", "#lower-right span.box:nth-child(15)", 
      "#upper-left span.box:nth-child(16)", "#upper-right span.box:nth-child(16)", "#lower-left span.box:nth-child(16)", "#lower-right span.box:nth-child(16)",
      "#upper-left span.box:nth-child(17)", "#upper-right span.box:nth-child(17)", "#lower-left span.box:nth-child(17)", "#lower-right span.box:nth-child(17)",
      "#upper-left span.box:nth-child(33)", "#upper-right span.box:nth-child(33)", "#lower-left span.box:nth-child(33)", "#lower-right span.box:nth-child(33)",
      "#upper-left span.box:nth-child(49)", "#upper-right span.box:nth-child(49)", "#lower-left span.box:nth-child(49)", "#lower-right span.box:nth-child(49)",
      "#upper-left span.box:nth-child(65)", "#upper-right span.box:nth-child(65)", "#lower-left span.box:nth-child(65)", "#lower-right span.box:nth-child(65)",
      "#upper-left span.box:nth-child(81)", "#upper-right span.box:nth-child(81)", "#lower-left span.box:nth-child(81)", "#lower-right span.box:nth-child(81)",
      "#upper-left span.box:nth-child(97)", "#upper-right span.box:nth-child(97)", "#lower-left span.box:nth-child(97)", "#lower-right span.box:nth-child(97)",
      "#upper-left span.box:nth-child(113)", "#upper-right span.box:nth-child(113)", "#lower-left span.box:nth-child(113)", "#lower-right span.box:nth-child(113)",
      "#upper-left span.box:nth-child(129)", "#upper-right span.box:nth-child(129)", "#lower-left span.box:nth-child(129)", "#lower-right span.box:nth-child(129)",
      "#upper-left span.box:nth-child(145)", "#upper-right span.box:nth-child(145)", "#lower-left span.box:nth-child(145)", "#lower-right span.box:nth-child(145)",
      "#upper-left span.box:nth-child(161)", "#upper-right span.box:nth-child(161)", "#lower-left span.box:nth-child(161)", "#lower-right span.box:nth-child(161)",
      "#upper-left span.box:nth-child(177)", "#upper-right span.box:nth-child(177)", "#lower-left span.box:nth-child(177)", "#lower-right span.box:nth-child(177)",
      "#upper-left span.box:nth-child(193)", "#upper-right span.box:nth-child(193)", "#lower-left span.box:nth-child(193)", "#lower-right span.box:nth-child(193)",
      "#upper-left span.box:nth-child(209)", "#upper-right span.box:nth-child(209)", "#lower-left span.box:nth-child(209)", "#lower-right span.box:nth-child(209)",
      "#upper-left span.box:nth-child(225)", "#upper-right span.box:nth-child(225)", "#lower-left span.box:nth-child(225)", "#lower-right span.box:nth-child(225)",
      "#upper-left span.box:nth-child(241)", "#upper-right span.box:nth-child(241)", "#lower-left span.box:nth-child(241)", "#lower-right span.box:nth-child(241)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1,
      
    }
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(18)", "#upper-right span.box:nth-child(18)", "#lower-left span.box:nth-child(18)", "#lower-right span.box:nth-child(18)", 
      "#upper-left span.box:nth-child(19)", "#upper-right span.box:nth-child(19)", "#lower-left span.box:nth-child(19)", "#lower-right span.box:nth-child(19)", 
      "#upper-left span.box:nth-child(20)", "#upper-right span.box:nth-child(20)", "#lower-left span.box:nth-child(20)", "#lower-right span.box:nth-child(20)", 
      "#upper-left span.box:nth-child(21)", "#upper-right span.box:nth-child(21)", "#lower-left span.box:nth-child(21)", "#lower-right span.box:nth-child(21)", 
      "#upper-left span.box:nth-child(22)", "#upper-right span.box:nth-child(22)", "#lower-left span.box:nth-child(22)", "#lower-right span.box:nth-child(22)", 
      "#upper-left span.box:nth-child(23)", "#upper-right span.box:nth-child(23)", "#lower-left span.box:nth-child(23)", "#lower-right span.box:nth-child(23)", 
      "#upper-left span.box:nth-child(24)", "#upper-right span.box:nth-child(24)", "#lower-left span.box:nth-child(24)", "#lower-right span.box:nth-child(24)", 
      "#upper-left span.box:nth-child(25)", "#upper-right span.box:nth-child(25)", "#lower-left span.box:nth-child(25)", "#lower-right span.box:nth-child(25)", 
      "#upper-left span.box:nth-child(26)", "#upper-right span.box:nth-child(26)", "#lower-left span.box:nth-child(26)", "#lower-right span.box:nth-child(26)", 
      "#upper-left span.box:nth-child(27)", "#upper-right span.box:nth-child(27)", "#lower-left span.box:nth-child(27)", "#lower-right span.box:nth-child(27)", 
      "#upper-left span.box:nth-child(28)", "#upper-right span.box:nth-child(28)", "#lower-left span.box:nth-child(28)", "#lower-right span.box:nth-child(28)", 
      "#upper-left span.box:nth-child(29)", "#upper-right span.box:nth-child(29)", "#lower-left span.box:nth-child(29)", "#lower-right span.box:nth-child(29)", 
      "#upper-left span.box:nth-child(30)", "#upper-right span.box:nth-child(30)", "#lower-left span.box:nth-child(30)", "#lower-right span.box:nth-child(30)", 
      "#upper-left span.box:nth-child(31)", "#upper-right span.box:nth-child(31)", "#lower-left span.box:nth-child(31)", "#lower-right span.box:nth-child(31)", 
      "#upper-left span.box:nth-child(32)", "#upper-right span.box:nth-child(32)", "#lower-left span.box:nth-child(32)", "#lower-right span.box:nth-child(32)", 
      "#upper-left span.box:nth-child(34)", "#upper-right span.box:nth-child(34)", "#lower-left span.box:nth-child(34)", "#lower-right span.box:nth-child(34)",
      "#upper-left span.box:nth-child(50)", "#upper-right span.box:nth-child(50)", "#lower-left span.box:nth-child(50)", "#lower-right span.box:nth-child(50)",
      "#upper-left span.box:nth-child(66)", "#upper-right span.box:nth-child(66)", "#lower-left span.box:nth-child(66)", "#lower-right span.box:nth-child(66)",
      "#upper-left span.box:nth-child(82)", "#upper-right span.box:nth-child(82)", "#lower-left span.box:nth-child(82)", "#lower-right span.box:nth-child(82)",
      "#upper-left span.box:nth-child(98)", "#upper-right span.box:nth-child(98)", "#lower-left span.box:nth-child(98)", "#lower-right span.box:nth-child(98)",
      "#upper-left span.box:nth-child(114)", "#upper-right span.box:nth-child(114)", "#lower-left span.box:nth-child(114)", "#lower-right span.box:nth-child(114)",
      "#upper-left span.box:nth-child(130)", "#upper-right span.box:nth-child(130)", "#lower-left span.box:nth-child(130)", "#lower-right span.box:nth-child(130)",
      "#upper-left span.box:nth-child(146)", "#upper-right span.box:nth-child(146)", "#lower-left span.box:nth-child(146)", "#lower-right span.box:nth-child(146)",
      "#upper-left span.box:nth-child(162)", "#upper-right span.box:nth-child(162)", "#lower-left span.box:nth-child(162)", "#lower-right span.box:nth-child(162)",
      "#upper-left span.box:nth-child(178)", "#upper-right span.box:nth-child(178)", "#lower-left span.box:nth-child(178)", "#lower-right span.box:nth-child(178)",
      "#upper-left span.box:nth-child(194)", "#upper-right span.box:nth-child(194)", "#lower-left span.box:nth-child(194)", "#lower-right span.box:nth-child(194)",
      "#upper-left span.box:nth-child(210)", "#upper-right span.box:nth-child(210)", "#lower-left span.box:nth-child(210)", "#lower-right span.box:nth-child(210)",
      "#upper-left span.box:nth-child(226)", "#upper-right span.box:nth-child(226)", "#lower-left span.box:nth-child(226)", "#lower-right span.box:nth-child(226)",
      "#upper-left span.box:nth-child(242)", "#upper-right span.box:nth-child(242)", "#lower-left span.box:nth-child(242)", "#lower-right span.box:nth-child(242)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(35)", "#upper-right span.box:nth-child(35)", "#lower-left span.box:nth-child(35)", "#lower-right span.box:nth-child(35)", 
      "#upper-left span.box:nth-child(36)", "#upper-right span.box:nth-child(36)", "#lower-left span.box:nth-child(36)", "#lower-right span.box:nth-child(36)", 
      "#upper-left span.box:nth-child(37)", "#upper-right span.box:nth-child(37)", "#lower-left span.box:nth-child(37)", "#lower-right span.box:nth-child(37)", 
      "#upper-left span.box:nth-child(38)", "#upper-right span.box:nth-child(38)", "#lower-left span.box:nth-child(38)", "#lower-right span.box:nth-child(38)", 
      "#upper-left span.box:nth-child(39)", "#upper-right span.box:nth-child(39)", "#lower-left span.box:nth-child(39)", "#lower-right span.box:nth-child(39)", 
      "#upper-left span.box:nth-child(40)", "#upper-right span.box:nth-child(40)", "#lower-left span.box:nth-child(40)", "#lower-right span.box:nth-child(40)", 
      "#upper-left span.box:nth-child(41)", "#upper-right span.box:nth-child(41)", "#lower-left span.box:nth-child(41)", "#lower-right span.box:nth-child(41)", 
      "#upper-left span.box:nth-child(42)", "#upper-right span.box:nth-child(42)", "#lower-left span.box:nth-child(42)", "#lower-right span.box:nth-child(42)", 
      "#upper-left span.box:nth-child(43)", "#upper-right span.box:nth-child(43)", "#lower-left span.box:nth-child(43)", "#lower-right span.box:nth-child(43)", 
      "#upper-left span.box:nth-child(44)", "#upper-right span.box:nth-child(44)", "#lower-left span.box:nth-child(44)", "#lower-right span.box:nth-child(44)", 
      "#upper-left span.box:nth-child(45)", "#upper-right span.box:nth-child(45)", "#lower-left span.box:nth-child(45)", "#lower-right span.box:nth-child(45)", 
      "#upper-left span.box:nth-child(46)", "#upper-right span.box:nth-child(46)", "#lower-left span.box:nth-child(46)", "#lower-right span.box:nth-child(46)", 
      "#upper-left span.box:nth-child(47)", "#upper-right span.box:nth-child(47)", "#lower-left span.box:nth-child(47)", "#lower-right span.box:nth-child(47)", 
      "#upper-left span.box:nth-child(48)", "#upper-right span.box:nth-child(48)", "#lower-left span.box:nth-child(48)", "#lower-right span.box:nth-child(48)", 
      "#upper-left span.box:nth-child(51)", "#upper-right span.box:nth-child(51)", "#lower-left span.box:nth-child(51)", "#lower-right span.box:nth-child(51)", 
      "#upper-left span.box:nth-child(67)", "#upper-right span.box:nth-child(67)", "#lower-left span.box:nth-child(67)", "#lower-right span.box:nth-child(67)",
      "#upper-left span.box:nth-child(83)", "#upper-right span.box:nth-child(83)", "#lower-left span.box:nth-child(83)", "#lower-right span.box:nth-child(83)",
      "#upper-left span.box:nth-child(99)", "#upper-right span.box:nth-child(99)", "#lower-left span.box:nth-child(99)", "#lower-right span.box:nth-child(99)",
      "#upper-left span.box:nth-child(115)", "#upper-right span.box:nth-child(115)", "#lower-left span.box:nth-child(115)", "#lower-right span.box:nth-child(115)",
      "#upper-left span.box:nth-child(131)", "#upper-right span.box:nth-child(131)", "#lower-left span.box:nth-child(131)", "#lower-right span.box:nth-child(131)",
      "#upper-left span.box:nth-child(147)", "#upper-right span.box:nth-child(147)", "#lower-left span.box:nth-child(147)", "#lower-right span.box:nth-child(147)",
      "#upper-left span.box:nth-child(163)", "#upper-right span.box:nth-child(163)", "#lower-left span.box:nth-child(163)", "#lower-right span.box:nth-child(163)",
      "#upper-left span.box:nth-child(179)", "#upper-right span.box:nth-child(179)", "#lower-left span.box:nth-child(179)", "#lower-right span.box:nth-child(179)",
      "#upper-left span.box:nth-child(195)", "#upper-right span.box:nth-child(195)", "#lower-left span.box:nth-child(195)", "#lower-right span.box:nth-child(195)",
      "#upper-left span.box:nth-child(211)", "#upper-right span.box:nth-child(211)", "#lower-left span.box:nth-child(211)", "#lower-right span.box:nth-child(211)",
      "#upper-left span.box:nth-child(227)", "#upper-right span.box:nth-child(227)", "#lower-left span.box:nth-child(227)", "#lower-right span.box:nth-child(227)",
      "#upper-left span.box:nth-child(243)", "#upper-right span.box:nth-child(243)", "#lower-left span.box:nth-child(243)", "#lower-right span.box:nth-child(243)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(52)", "#upper-right span.box:nth-child(52)", "#lower-left span.box:nth-child(52)", "#lower-right span.box:nth-child(52)", 
      "#upper-left span.box:nth-child(53)", "#upper-right span.box:nth-child(53)", "#lower-left span.box:nth-child(53)", "#lower-right span.box:nth-child(53)", 
      "#upper-left span.box:nth-child(54)", "#upper-right span.box:nth-child(54)", "#lower-left span.box:nth-child(54)", "#lower-right span.box:nth-child(54)", 
      "#upper-left span.box:nth-child(55)", "#upper-right span.box:nth-child(55)", "#lower-left span.box:nth-child(55)", "#lower-right span.box:nth-child(55)", 
      "#upper-left span.box:nth-child(56)", "#upper-right span.box:nth-child(56)", "#lower-left span.box:nth-child(56)", "#lower-right span.box:nth-child(56)", 
      "#upper-left span.box:nth-child(57)", "#upper-right span.box:nth-child(57)", "#lower-left span.box:nth-child(57)", "#lower-right span.box:nth-child(57)", 
      "#upper-left span.box:nth-child(58)", "#upper-right span.box:nth-child(58)", "#lower-left span.box:nth-child(58)", "#lower-right span.box:nth-child(58)", 
      "#upper-left span.box:nth-child(59)", "#upper-right span.box:nth-child(59)", "#lower-left span.box:nth-child(59)", "#lower-right span.box:nth-child(59)", 
      "#upper-left span.box:nth-child(60)", "#upper-right span.box:nth-child(60)", "#lower-left span.box:nth-child(60)", "#lower-right span.box:nth-child(60)", 
      "#upper-left span.box:nth-child(61)", "#upper-right span.box:nth-child(61)", "#lower-left span.box:nth-child(61)", "#lower-right span.box:nth-child(61)", 
      "#upper-left span.box:nth-child(62)", "#upper-right span.box:nth-child(62)", "#lower-left span.box:nth-child(62)", "#lower-right span.box:nth-child(62)", 
      "#upper-left span.box:nth-child(63)", "#upper-right span.box:nth-child(63)", "#lower-left span.box:nth-child(63)", "#lower-right span.box:nth-child(63)", 
      "#upper-left span.box:nth-child(64)", "#upper-right span.box:nth-child(64)", "#lower-left span.box:nth-child(64)", "#lower-right span.box:nth-child(64)", 
      "#upper-left span.box:nth-child(68)", "#upper-right span.box:nth-child(68)", "#lower-left span.box:nth-child(68)", "#lower-right span.box:nth-child(68)", 
      "#upper-left span.box:nth-child(84)", "#upper-right span.box:nth-child(84)", "#lower-left span.box:nth-child(84)", "#lower-right span.box:nth-child(84)", 
      "#upper-left span.box:nth-child(100)", "#upper-right span.box:nth-child(100)", "#lower-left span.box:nth-child(100)", "#lower-right span.box:nth-child(100)",
      "#upper-left span.box:nth-child(116)", "#upper-right span.box:nth-child(116)", "#lower-left span.box:nth-child(116)", "#lower-right span.box:nth-child(116)",
      "#upper-left span.box:nth-child(132)", "#upper-right span.box:nth-child(132)", "#lower-left span.box:nth-child(132)", "#lower-right span.box:nth-child(132)",
      "#upper-left span.box:nth-child(148)", "#upper-right span.box:nth-child(148)", "#lower-left span.box:nth-child(148)", "#lower-right span.box:nth-child(148)",
      "#upper-left span.box:nth-child(164)", "#upper-right span.box:nth-child(164)", "#lower-left span.box:nth-child(164)", "#lower-right span.box:nth-child(164)",
      "#upper-left span.box:nth-child(180)", "#upper-right span.box:nth-child(180)", "#lower-left span.box:nth-child(180)", "#lower-right span.box:nth-child(180)",
      "#upper-left span.box:nth-child(196)", "#upper-right span.box:nth-child(196)", "#lower-left span.box:nth-child(196)", "#lower-right span.box:nth-child(196)",
      "#upper-left span.box:nth-child(212)", "#upper-right span.box:nth-child(212)", "#lower-left span.box:nth-child(212)", "#lower-right span.box:nth-child(212)",
      "#upper-left span.box:nth-child(228)", "#upper-right span.box:nth-child(228)", "#lower-left span.box:nth-child(228)", "#lower-right span.box:nth-child(228)",
      "#upper-left span.box:nth-child(244)", "#upper-right span.box:nth-child(244)", "#lower-left span.box:nth-child(244)", "#lower-right span.box:nth-child(244)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(69)", "#upper-right span.box:nth-child(69)", "#lower-left span.box:nth-child(69)", "#lower-right span.box:nth-child(69)", 
      "#upper-left span.box:nth-child(70)", "#upper-right span.box:nth-child(70)", "#lower-left span.box:nth-child(70)", "#lower-right span.box:nth-child(70)", 
      "#upper-left span.box:nth-child(71)", "#upper-right span.box:nth-child(71)", "#lower-left span.box:nth-child(71)", "#lower-right span.box:nth-child(71)", 
      "#upper-left span.box:nth-child(72)", "#upper-right span.box:nth-child(72)", "#lower-left span.box:nth-child(72)", "#lower-right span.box:nth-child(72)", 
      "#upper-left span.box:nth-child(73)", "#upper-right span.box:nth-child(73)", "#lower-left span.box:nth-child(73)", "#lower-right span.box:nth-child(73)", 
      "#upper-left span.box:nth-child(74)", "#upper-right span.box:nth-child(74)", "#lower-left span.box:nth-child(74)", "#lower-right span.box:nth-child(74)", 
      "#upper-left span.box:nth-child(75)", "#upper-right span.box:nth-child(75)", "#lower-left span.box:nth-child(75)", "#lower-right span.box:nth-child(75)", 
      "#upper-left span.box:nth-child(76)", "#upper-right span.box:nth-child(76)", "#lower-left span.box:nth-child(76)", "#lower-right span.box:nth-child(76)", 
      "#upper-left span.box:nth-child(77)", "#upper-right span.box:nth-child(77)", "#lower-left span.box:nth-child(77)", "#lower-right span.box:nth-child(77)", 
      "#upper-left span.box:nth-child(78)", "#upper-right span.box:nth-child(78)", "#lower-left span.box:nth-child(78)", "#lower-right span.box:nth-child(78)", 
      "#upper-left span.box:nth-child(79)", "#upper-right span.box:nth-child(79)", "#lower-left span.box:nth-child(79)", "#lower-right span.box:nth-child(79)", 
      "#upper-left span.box:nth-child(80)", "#upper-right span.box:nth-child(80)", "#lower-left span.box:nth-child(80)", "#lower-right span.box:nth-child(80)", 
      "#upper-left span.box:nth-child(85)", "#upper-right span.box:nth-child(85)", "#lower-left span.box:nth-child(85)", "#lower-right span.box:nth-child(85)", 
      "#upper-left span.box:nth-child(101)", "#upper-right span.box:nth-child(101)", "#lower-left span.box:nth-child(101)", "#lower-right span.box:nth-child(101)", 
      "#upper-left span.box:nth-child(117)", "#upper-right span.box:nth-child(117)", "#lower-left span.box:nth-child(117)", "#lower-right span.box:nth-child(117)", 
      "#upper-left span.box:nth-child(133)", "#upper-right span.box:nth-child(133)", "#lower-left span.box:nth-child(133)", "#lower-right span.box:nth-child(133)",
      "#upper-left span.box:nth-child(149)", "#upper-right span.box:nth-child(149)", "#lower-left span.box:nth-child(149)", "#lower-right span.box:nth-child(149)",
      "#upper-left span.box:nth-child(165)", "#upper-right span.box:nth-child(165)", "#lower-left span.box:nth-child(165)", "#lower-right span.box:nth-child(165)",
      "#upper-left span.box:nth-child(181)", "#upper-right span.box:nth-child(181)", "#lower-left span.box:nth-child(181)", "#lower-right span.box:nth-child(181)",
      "#upper-left span.box:nth-child(197)", "#upper-right span.box:nth-child(197)", "#lower-left span.box:nth-child(197)", "#lower-right span.box:nth-child(197)",
      "#upper-left span.box:nth-child(213)", "#upper-right span.box:nth-child(213)", "#lower-left span.box:nth-child(213)", "#lower-right span.box:nth-child(213)",
      "#upper-left span.box:nth-child(229)", "#upper-right span.box:nth-child(229)", "#lower-left span.box:nth-child(229)", "#lower-right span.box:nth-child(229)",
      "#upper-left span.box:nth-child(245)", "#upper-right span.box:nth-child(245)", "#lower-left span.box:nth-child(245)", "#lower-right span.box:nth-child(245)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(86)", "#upper-right span.box:nth-child(86)", "#lower-left span.box:nth-child(86)", "#lower-right span.box:nth-child(86)", 
      "#upper-left span.box:nth-child(87)", "#upper-right span.box:nth-child(87)", "#lower-left span.box:nth-child(87)", "#lower-right span.box:nth-child(87)", 
      "#upper-left span.box:nth-child(88)", "#upper-right span.box:nth-child(88)", "#lower-left span.box:nth-child(88)", "#lower-right span.box:nth-child(88)", 
      "#upper-left span.box:nth-child(89)", "#upper-right span.box:nth-child(89)", "#lower-left span.box:nth-child(89)", "#lower-right span.box:nth-child(89)", 
      "#upper-left span.box:nth-child(90)", "#upper-right span.box:nth-child(90)", "#lower-left span.box:nth-child(90)", "#lower-right span.box:nth-child(90)", 
      "#upper-left span.box:nth-child(91)", "#upper-right span.box:nth-child(91)", "#lower-left span.box:nth-child(91)", "#lower-right span.box:nth-child(91)", 
      "#upper-left span.box:nth-child(92)", "#upper-right span.box:nth-child(92)", "#lower-left span.box:nth-child(92)", "#lower-right span.box:nth-child(92)", 
      "#upper-left span.box:nth-child(93)", "#upper-right span.box:nth-child(93)", "#lower-left span.box:nth-child(93)", "#lower-right span.box:nth-child(93)", 
      "#upper-left span.box:nth-child(94)", "#upper-right span.box:nth-child(94)", "#lower-left span.box:nth-child(94)", "#lower-right span.box:nth-child(94)", 
      "#upper-left span.box:nth-child(95)", "#upper-right span.box:nth-child(95)", "#lower-left span.box:nth-child(95)", "#lower-right span.box:nth-child(95)", 
      "#upper-left span.box:nth-child(96)", "#upper-right span.box:nth-child(96)", "#lower-left span.box:nth-child(96)", "#lower-right span.box:nth-child(96)", 
      "#upper-left span.box:nth-child(102)", "#upper-right span.box:nth-child(102)", "#lower-left span.box:nth-child(102)", "#lower-right span.box:nth-child(102)", 
      "#upper-left span.box:nth-child(118)", "#upper-right span.box:nth-child(118)", "#lower-left span.box:nth-child(118)", "#lower-right span.box:nth-child(118)", 
      "#upper-left span.box:nth-child(134)", "#upper-right span.box:nth-child(134)", "#lower-left span.box:nth-child(134)", "#lower-right span.box:nth-child(134)", 
      "#upper-left span.box:nth-child(150)", "#upper-right span.box:nth-child(150)", "#lower-left span.box:nth-child(150)", "#lower-right span.box:nth-child(150)", 
      "#upper-left span.box:nth-child(166)", "#upper-right span.box:nth-child(166)", "#lower-left span.box:nth-child(166)", "#lower-right span.box:nth-child(166)",
      "#upper-left span.box:nth-child(182)", "#upper-right span.box:nth-child(182)", "#lower-left span.box:nth-child(182)", "#lower-right span.box:nth-child(182)",
      "#upper-left span.box:nth-child(198)", "#upper-right span.box:nth-child(198)", "#lower-left span.box:nth-child(198)", "#lower-right span.box:nth-child(198)",
      "#upper-left span.box:nth-child(214)", "#upper-right span.box:nth-child(214)", "#lower-left span.box:nth-child(214)", "#lower-right span.box:nth-child(214)",
      "#upper-left span.box:nth-child(230)", "#upper-right span.box:nth-child(230)", "#lower-left span.box:nth-child(230)", "#lower-right span.box:nth-child(230)",
      "#upper-left span.box:nth-child(246)", "#upper-right span.box:nth-child(246)", "#lower-left span.box:nth-child(246)", "#lower-right span.box:nth-child(246)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(103)", "#upper-right span.box:nth-child(103)", "#lower-left span.box:nth-child(103)", "#lower-right span.box:nth-child(103)", 
      "#upper-left span.box:nth-child(104)", "#upper-right span.box:nth-child(104)", "#lower-left span.box:nth-child(104)", "#lower-right span.box:nth-child(104)", 
      "#upper-left span.box:nth-child(105)", "#upper-right span.box:nth-child(105)", "#lower-left span.box:nth-child(105)", "#lower-right span.box:nth-child(105)", 
      "#upper-left span.box:nth-child(106)", "#upper-right span.box:nth-child(106)", "#lower-left span.box:nth-child(106)", "#lower-right span.box:nth-child(106)", 
      "#upper-left span.box:nth-child(107)", "#upper-right span.box:nth-child(107)", "#lower-left span.box:nth-child(107)", "#lower-right span.box:nth-child(107)", 
      "#upper-left span.box:nth-child(108)", "#upper-right span.box:nth-child(108)", "#lower-left span.box:nth-child(108)", "#lower-right span.box:nth-child(108)", 
      "#upper-left span.box:nth-child(109)", "#upper-right span.box:nth-child(109)", "#lower-left span.box:nth-child(109)", "#lower-right span.box:nth-child(109)", 
      "#upper-left span.box:nth-child(110)", "#upper-right span.box:nth-child(110)", "#lower-left span.box:nth-child(110)", "#lower-right span.box:nth-child(110)", 
      "#upper-left span.box:nth-child(111)", "#upper-right span.box:nth-child(111)", "#lower-left span.box:nth-child(111)", "#lower-right span.box:nth-child(111)", 
      "#upper-left span.box:nth-child(112)", "#upper-right span.box:nth-child(112)", "#lower-left span.box:nth-child(112)", "#lower-right span.box:nth-child(112)", 
      "#upper-left span.box:nth-child(119)", "#upper-right span.box:nth-child(119)", "#lower-left span.box:nth-child(119)", "#lower-right span.box:nth-child(119)", 
      "#upper-left span.box:nth-child(135)", "#upper-right span.box:nth-child(135)", "#lower-left span.box:nth-child(135)", "#lower-right span.box:nth-child(135)", 
      "#upper-left span.box:nth-child(151)", "#upper-right span.box:nth-child(151)", "#lower-left span.box:nth-child(151)", "#lower-right span.box:nth-child(151)", 
      "#upper-left span.box:nth-child(167)", "#upper-right span.box:nth-child(167)", "#lower-left span.box:nth-child(167)", "#lower-right span.box:nth-child(167)", 
      "#upper-left span.box:nth-child(183)", "#upper-right span.box:nth-child(183)", "#lower-left span.box:nth-child(183)", "#lower-right span.box:nth-child(183)", 
      "#upper-left span.box:nth-child(199)", "#upper-right span.box:nth-child(199)", "#lower-left span.box:nth-child(199)", "#lower-right span.box:nth-child(199)",
      "#upper-left span.box:nth-child(215)", "#upper-right span.box:nth-child(215)", "#lower-left span.box:nth-child(215)", "#lower-right span.box:nth-child(215)",
      "#upper-left span.box:nth-child(231)", "#upper-right span.box:nth-child(231)", "#lower-left span.box:nth-child(231)", "#lower-right span.box:nth-child(231)",
      "#upper-left span.box:nth-child(247)", "#upper-right span.box:nth-child(247)", "#lower-left span.box:nth-child(247)", "#lower-right span.box:nth-child(247)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(120)", "#upper-right span.box:nth-child(120)", "#lower-left span.box:nth-child(120)", "#lower-right span.box:nth-child(120)", 
      "#upper-left span.box:nth-child(121)", "#upper-right span.box:nth-child(121)", "#lower-left span.box:nth-child(121)", "#lower-right span.box:nth-child(121)", 
      "#upper-left span.box:nth-child(122)", "#upper-right span.box:nth-child(122)", "#lower-left span.box:nth-child(122)", "#lower-right span.box:nth-child(122)", 
      "#upper-left span.box:nth-child(123)", "#upper-right span.box:nth-child(123)", "#lower-left span.box:nth-child(123)", "#lower-right span.box:nth-child(123)", 
      "#upper-left span.box:nth-child(124)", "#upper-right span.box:nth-child(124)", "#lower-left span.box:nth-child(124)", "#lower-right span.box:nth-child(124)", 
      "#upper-left span.box:nth-child(125)", "#upper-right span.box:nth-child(125)", "#lower-left span.box:nth-child(125)", "#lower-right span.box:nth-child(125)", 
      "#upper-left span.box:nth-child(126)", "#upper-right span.box:nth-child(126)", "#lower-left span.box:nth-child(126)", "#lower-right span.box:nth-child(126)", 
      "#upper-left span.box:nth-child(127)", "#upper-right span.box:nth-child(127)", "#lower-left span.box:nth-child(127)", "#lower-right span.box:nth-child(127)", 
      "#upper-left span.box:nth-child(128)", "#upper-right span.box:nth-child(128)", "#lower-left span.box:nth-child(128)", "#lower-right span.box:nth-child(128)", 
      "#upper-left span.box:nth-child(136)", "#upper-right span.box:nth-child(136)", "#lower-left span.box:nth-child(136)", "#lower-right span.box:nth-child(136)", 
      "#upper-left span.box:nth-child(152)", "#upper-right span.box:nth-child(152)", "#lower-left span.box:nth-child(152)", "#lower-right span.box:nth-child(152)", 
      "#upper-left span.box:nth-child(168)", "#upper-right span.box:nth-child(168)", "#lower-left span.box:nth-child(168)", "#lower-right span.box:nth-child(168)", 
      "#upper-left span.box:nth-child(184)", "#upper-right span.box:nth-child(184)", "#lower-left span.box:nth-child(184)", "#lower-right span.box:nth-child(184)", 
      "#upper-left span.box:nth-child(200)", "#upper-right span.box:nth-child(200)", "#lower-left span.box:nth-child(200)", "#lower-right span.box:nth-child(200)", 
      "#upper-left span.box:nth-child(216)", "#upper-right span.box:nth-child(216)", "#lower-left span.box:nth-child(216)", "#lower-right span.box:nth-child(216)", 
      "#upper-left span.box:nth-child(232)", "#upper-right span.box:nth-child(232)", "#lower-left span.box:nth-child(232)", "#lower-right span.box:nth-child(232)",
      "#upper-left span.box:nth-child(248)", "#upper-right span.box:nth-child(248)", "#lower-left span.box:nth-child(248)", "#lower-right span.box:nth-child(248)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(137)", "#upper-right span.box:nth-child(137)", "#lower-left span.box:nth-child(137)", "#lower-right span.box:nth-child(137)", 
      "#upper-left span.box:nth-child(138)", "#upper-right span.box:nth-child(138)", "#lower-left span.box:nth-child(138)", "#lower-right span.box:nth-child(138)", 
      "#upper-left span.box:nth-child(139)", "#upper-right span.box:nth-child(139)", "#lower-left span.box:nth-child(139)", "#lower-right span.box:nth-child(139)", 
      "#upper-left span.box:nth-child(140)", "#upper-right span.box:nth-child(140)", "#lower-left span.box:nth-child(140)", "#lower-right span.box:nth-child(140)", 
      "#upper-left span.box:nth-child(141)", "#upper-right span.box:nth-child(141)", "#lower-left span.box:nth-child(141)", "#lower-right span.box:nth-child(141)", 
      "#upper-left span.box:nth-child(142)", "#upper-right span.box:nth-child(142)", "#lower-left span.box:nth-child(142)", "#lower-right span.box:nth-child(142)", 
      "#upper-left span.box:nth-child(143)", "#upper-right span.box:nth-child(143)", "#lower-left span.box:nth-child(143)", "#lower-right span.box:nth-child(143)", 
      "#upper-left span.box:nth-child(144)", "#upper-right span.box:nth-child(144)", "#lower-left span.box:nth-child(144)", "#lower-right span.box:nth-child(144)", 
      "#upper-left span.box:nth-child(153)", "#upper-right span.box:nth-child(153)", "#lower-left span.box:nth-child(153)", "#lower-right span.box:nth-child(153)", 
      "#upper-left span.box:nth-child(169)", "#upper-right span.box:nth-child(169)", "#lower-left span.box:nth-child(169)", "#lower-right span.box:nth-child(169)", 
      "#upper-left span.box:nth-child(185)", "#upper-right span.box:nth-child(185)", "#lower-left span.box:nth-child(185)", "#lower-right span.box:nth-child(185)", 
      "#upper-left span.box:nth-child(201)", "#upper-right span.box:nth-child(201)", "#lower-left span.box:nth-child(201)", "#lower-right span.box:nth-child(201)", 
      "#upper-left span.box:nth-child(217)", "#upper-right span.box:nth-child(217)", "#lower-left span.box:nth-child(217)", "#lower-right span.box:nth-child(217)", 
      "#upper-left span.box:nth-child(233)", "#upper-right span.box:nth-child(233)", "#lower-left span.box:nth-child(233)", "#lower-right span.box:nth-child(233)", 
      "#upper-left span.box:nth-child(249)", "#upper-right span.box:nth-child(249)", "#lower-left span.box:nth-child(249)", "#lower-right span.box:nth-child(249)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(154)", "#upper-right span.box:nth-child(154)", "#lower-left span.box:nth-child(154)", "#lower-right span.box:nth-child(154)", 
      "#upper-left span.box:nth-child(155)", "#upper-right span.box:nth-child(155)", "#lower-left span.box:nth-child(155)", "#lower-right span.box:nth-child(155)", 
      "#upper-left span.box:nth-child(156)", "#upper-right span.box:nth-child(156)", "#lower-left span.box:nth-child(156)", "#lower-right span.box:nth-child(156)", 
      "#upper-left span.box:nth-child(157)", "#upper-right span.box:nth-child(157)", "#lower-left span.box:nth-child(157)", "#lower-right span.box:nth-child(157)", 
      "#upper-left span.box:nth-child(158)", "#upper-right span.box:nth-child(158)", "#lower-left span.box:nth-child(158)", "#lower-right span.box:nth-child(158)", 
      "#upper-left span.box:nth-child(159)", "#upper-right span.box:nth-child(159)", "#lower-left span.box:nth-child(159)", "#lower-right span.box:nth-child(159)", 
      "#upper-left span.box:nth-child(160)", "#upper-right span.box:nth-child(160)", "#lower-left span.box:nth-child(160)", "#lower-right span.box:nth-child(160)", 
      "#upper-left span.box:nth-child(170)", "#upper-right span.box:nth-child(170)", "#lower-left span.box:nth-child(170)", "#lower-right span.box:nth-child(170)", 
      "#upper-left span.box:nth-child(186)", "#upper-right span.box:nth-child(186)", "#lower-left span.box:nth-child(186)", "#lower-right span.box:nth-child(186)", 
      "#upper-left span.box:nth-child(202)", "#upper-right span.box:nth-child(202)", "#lower-left span.box:nth-child(202)", "#lower-right span.box:nth-child(202)", 
      "#upper-left span.box:nth-child(218)", "#upper-right span.box:nth-child(218)", "#lower-left span.box:nth-child(218)", "#lower-right span.box:nth-child(218)", 
      "#upper-left span.box:nth-child(234)", "#upper-right span.box:nth-child(234)", "#lower-left span.box:nth-child(234)", "#lower-right span.box:nth-child(234)", 
      "#upper-left span.box:nth-child(250)", "#upper-right span.box:nth-child(250)", "#lower-left span.box:nth-child(250)", "#lower-right span.box:nth-child(250)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(171)", "#upper-right span.box:nth-child(171)", "#lower-left span.box:nth-child(171)", "#lower-right span.box:nth-child(171)", 
      "#upper-left span.box:nth-child(172)", "#upper-right span.box:nth-child(172)", "#lower-left span.box:nth-child(172)", "#lower-right span.box:nth-child(172)", 
      "#upper-left span.box:nth-child(173)", "#upper-right span.box:nth-child(173)", "#lower-left span.box:nth-child(173)", "#lower-right span.box:nth-child(173)", 
      "#upper-left span.box:nth-child(174)", "#upper-right span.box:nth-child(174)", "#lower-left span.box:nth-child(174)", "#lower-right span.box:nth-child(174)", 
      "#upper-left span.box:nth-child(175)", "#upper-right span.box:nth-child(175)", "#lower-left span.box:nth-child(175)", "#lower-right span.box:nth-child(175)", 
      "#upper-left span.box:nth-child(176)", "#upper-right span.box:nth-child(176)", "#lower-left span.box:nth-child(176)", "#lower-right span.box:nth-child(176)", 
      "#upper-left span.box:nth-child(187)", "#upper-right span.box:nth-child(187)", "#lower-left span.box:nth-child(187)", "#lower-right span.box:nth-child(187)", 
      "#upper-left span.box:nth-child(203)", "#upper-right span.box:nth-child(203)", "#lower-left span.box:nth-child(203)", "#lower-right span.box:nth-child(203)", 
      "#upper-left span.box:nth-child(219)", "#upper-right span.box:nth-child(219)", "#lower-left span.box:nth-child(219)", "#lower-right span.box:nth-child(219)", 
      "#upper-left span.box:nth-child(235)", "#upper-right span.box:nth-child(235)", "#lower-left span.box:nth-child(235)", "#lower-right span.box:nth-child(235)", 
      "#upper-left span.box:nth-child(251)", "#upper-right span.box:nth-child(251)", "#lower-left span.box:nth-child(251)", "#lower-right span.box:nth-child(251)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(188)", "#upper-right span.box:nth-child(188)", "#lower-left span.box:nth-child(188)", "#lower-right span.box:nth-child(188)", 
      "#upper-left span.box:nth-child(189)", "#upper-right span.box:nth-child(189)", "#lower-left span.box:nth-child(189)", "#lower-right span.box:nth-child(189)", 
      "#upper-left span.box:nth-child(190)", "#upper-right span.box:nth-child(190)", "#lower-left span.box:nth-child(190)", "#lower-right span.box:nth-child(190)", 
      "#upper-left span.box:nth-child(191)", "#upper-right span.box:nth-child(191)", "#lower-left span.box:nth-child(191)", "#lower-right span.box:nth-child(191)", 
      "#upper-left span.box:nth-child(192)", "#upper-right span.box:nth-child(192)", "#lower-left span.box:nth-child(192)", "#lower-right span.box:nth-child(192)", 
      "#upper-left span.box:nth-child(204)", "#upper-right span.box:nth-child(204)", "#lower-left span.box:nth-child(204)", "#lower-right span.box:nth-child(204)", 
      "#upper-left span.box:nth-child(220)", "#upper-right span.box:nth-child(220)", "#lower-left span.box:nth-child(220)", "#lower-right span.box:nth-child(220)", 
      "#upper-left span.box:nth-child(236)", "#upper-right span.box:nth-child(236)", "#lower-left span.box:nth-child(236)", "#lower-right span.box:nth-child(236)", 
      "#upper-left span.box:nth-child(252)", "#upper-right span.box:nth-child(252)", "#lower-left span.box:nth-child(252)", "#lower-right span.box:nth-child(252)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(205)", "#upper-right span.box:nth-child(205)", "#lower-left span.box:nth-child(205)", "#lower-right span.box:nth-child(205)", 
      "#upper-left span.box:nth-child(206)", "#upper-right span.box:nth-child(206)", "#lower-left span.box:nth-child(206)", "#lower-right span.box:nth-child(206)", 
      "#upper-left span.box:nth-child(207)", "#upper-right span.box:nth-child(207)", "#lower-left span.box:nth-child(207)", "#lower-right span.box:nth-child(207)", 
      "#upper-left span.box:nth-child(208)", "#upper-right span.box:nth-child(208)", "#lower-left span.box:nth-child(208)", "#lower-right span.box:nth-child(208)", 
      "#upper-left span.box:nth-child(221)", "#upper-right span.box:nth-child(221)", "#lower-left span.box:nth-child(221)", "#lower-right span.box:nth-child(221)", 
      "#upper-left span.box:nth-child(237)", "#upper-right span.box:nth-child(237)", "#lower-left span.box:nth-child(237)", "#lower-right span.box:nth-child(237)", 
      "#upper-left span.box:nth-child(253)", "#upper-right span.box:nth-child(253)", "#lower-left span.box:nth-child(253)", "#lower-right span.box:nth-child(253)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(222)", "#upper-right span.box:nth-child(222)", "#lower-left span.box:nth-child(222)", "#lower-right span.box:nth-child(222)", 
      "#upper-left span.box:nth-child(223)", "#upper-right span.box:nth-child(223)", "#lower-left span.box:nth-child(223)", "#lower-right span.box:nth-child(223)", 
      "#upper-left span.box:nth-child(224)", "#upper-right span.box:nth-child(224)", "#lower-left span.box:nth-child(224)", "#lower-right span.box:nth-child(224)", 
      "#upper-left span.box:nth-child(238)", "#upper-right span.box:nth-child(238)", "#lower-left span.box:nth-child(238)", "#lower-right span.box:nth-child(238)", 
      "#upper-left span.box:nth-child(254)", "#upper-right span.box:nth-child(254)", "#lower-left span.box:nth-child(254)", "#lower-right span.box:nth-child(254)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(239)", "#upper-right span.box:nth-child(239)", "#lower-left span.box:nth-child(239)", "#lower-right span.box:nth-child(239)", 
      "#upper-left span.box:nth-child(240)", "#upper-right span.box:nth-child(240)", "#lower-left span.box:nth-child(240)", "#lower-right span.box:nth-child(240)", 
      "#upper-left span.box:nth-child(255)", "#upper-right span.box:nth-child(255)", "#lower-left span.box:nth-child(255)", "#lower-right span.box:nth-child(255)",
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.fromTo(
    [
      "#upper-left span.box:nth-child(256)", "#upper-right span.box:nth-child(256)", "#lower-left span.box:nth-child(256)", "#lower-right span.box:nth-child(256)"
    ],
    {
      background: "linear-gradient(-45deg, rgba(0,0,0,0) 100%, rgba(0,0,0,1) 0%)",
    },
    {
      background: "linear-gradient(-45deg,   rgba(0,0,0,0) 0%, rgba(0,0,0,1) 0%)",
      duration: 0.5,
      scale: 1.1
    },
    '<+0.1'
  );
  tl.call(() => {
    tl.reverse();
  }, [], '+=1');

  if (tl.paused()) {
    tl.play();
    button.innerText = "Stop animation";
  } else {
    tl.pause(0);
    button.innerText = "Play animation";
  }
});
