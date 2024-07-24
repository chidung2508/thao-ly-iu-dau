const letters = document.querySelectorAll(".title span");
const COLORS = ["FFDD83"];

const box = document.querySelector(".box");
// const boxBody = document.querySelector(".box-body");
const boxBody = document.querySelector(".img-birthday-4");
const splashScaleUp = document.querySelector(".splash-scale-up");
const splashContainer = document.querySelector(".splash-container");
const musicEl = document.querySelector("audio");

const getRandom = (max) => {
  return Math.floor(Math.random() * max);
};

const animationFaded = () => {
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].style.transform = "translateX(20%)";
      letters[i].style.opacity = 1;
      letters[i].style.color = `#${COLORS[getRandom(COLORS.length)]}`;
    }, 100 * i);
  }
};

const animationHided = () => {
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].style.transform = "translateX(0%)";
      letters[i].style.opacity = 0;
    }, 50 * i);
  }
};

const init = () => {
  animationFaded();
  setTimeout(() => {
    animationHided();
  }, 100 * letters.length + 2000);
};

const handleScaleUpSplashScreen = () => {
  musicEl.play();
  // box.classList.remove("rotate-box");
  boxBody.classList.add("open");
  setTimeout(() => {
    splashScaleUp.style.width = "200vw";
    splashScaleUp.style.height = "200vh";
    setTimeout(() => {
      splashScaleUp.style.opacity = 0;
      splashContainer.style.opacity = 0;
      boxBody.style.display = "none";

      init();

      setInterval(() => {
        init();
      }, 100 * letters.length + 2000 + 2000);
    }, 1000);
  }, 1000);
};

boxBody.addEventListener("click", handleScaleUpSplashScreen);
