const targetDiv = document.querySelector("#event-second-node");
const headerSession = document.querySelector("#header-session");
const modeRank = document.querySelector(".mode-rank-effect");
const modeRankNode = document.querySelector(".mode-rank-node");
const headerTop = document.querySelector(".header-top");
const scrollableFirst = document.getElementById("container");
const boxes = document.querySelectorAll(".box");
const flareEffectNode = document.querySelectorAll(".flare-item-effect");
const rayLightContainer = document.querySelectorAll(".ray-light-container");
const lettters = document.querySelectorAll(".letter");
const slogan1 = document.querySelector(".slogan_1");
const slogan2 = document.querySelector(".slogan_2");
const titleBg = document.querySelector(".title_bg");
const effectNode5 = document.querySelector(".effect-node5");
const lstFlare5 = document.querySelectorAll(".flare5-item-effect");

const timeoutEffect = [];

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        addEffect();
        // console.log("Div xuất hiện trên màn hình!");
      } else {
        removeEffect();
        // console.log("Div ra ngoài màn hình!");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  }
);
observer.observe(scrollableFirst);

const observer1 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lettters.forEach((letter) => {
          letter.classList.add("letter-active");
        });
        slogan1.classList.add("slogan1-active");
        slogan2.classList.add("slogan2-active");
        titleBg.classList.add("title_bg-active");
      } else {
        lettters.forEach((letter) => {
          letter.classList.remove("letter-active");
        });
        slogan1.classList.remove("slogan1-active");
        slogan2.classList.remove("slogan2-active");
        titleBg.classList.remove("title_bg-active");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  }
);
observer1.observe(headerSession);

const observer2 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        modeRank.classList.add("mode-rank-effect-active");
      } else {
        modeRank.classList.remove("mode-rank-effect-active");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
  }
);
observer2.observe(modeRankNode);

const observer3 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lstFlare5.forEach((flareNode, index) => {
          timeoutEffect.push(
            setTimeout(() => {
              flareNode.classList.add("flare-effect-active");
            }, index * 150 + 300)
          );
        });
      } else {
        lstFlare5.forEach((flareNode) => {
          flareNode.classList.remove("flare-effect-active");
        });
        timeoutEffect.forEach((timeout) => {
          clearTimeout(timeout);
        });
        timeoutEffect.length = 0;
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.35,
  }
);
observer3.observe(effectNode5);

function addEffect() {
  rayLightEffect(true);
  flareEffect(true);
  boxEffect(true);
}

function boxEffect(isIntersecting) {
  boxes.forEach((box, index) => {
    if (isIntersecting) {
      timeoutEffect.push(
        setTimeout(() => {
          box.classList.add("active");
        }, index * 100 + 200)
      );
    } else {
      box.classList.remove("active");
    }
  });
}

function flareEffect(isIntersecting) {
  flareEffectNode.forEach((flareNode, index) => {
    if (isIntersecting) {
      timeoutEffect.push(
        setTimeout(() => {
          flareNode.classList.add("flare-effect-active");
        }, index * 250 + 2800)
      );
    } else {
      flareNode.classList.remove("flare-effect-active");
    }
  });
}

function rayLightEffect(isIntersecting) {
  rayLightContainer.forEach((rayLightNode, index) => {
    const rayLight = rayLightNode.querySelector(".ray-light-effect");
    const rayTopLight = rayLightNode.querySelector(".ray_light_top");
    const rayBottomLight = rayLightNode.querySelector(".ray_light_bottom");
    if (isIntersecting) {
      timeoutEffect.push(
        setTimeout(() => {
          rayLight.classList.add("ray-light-effect-active");
          rayTopLight.classList.add("ray_light_top-active");
          rayBottomLight.classList.add("ray_light_bottom-active");
        }, index * 150 + 2000)
      );
    } else {
      rayLight.classList.remove("ray-light-effect-active");
      rayTopLight.classList.remove("ray_light_top-active");
      rayBottomLight.classList.remove("ray_light_bottom-active");
    }
  });
}

function removeEffect() {
  timeoutEffect.forEach((timeout) => {
    clearTimeout(timeout);
  });
  timeoutEffect.length = 0;
  rayLightEffect(false);
  flareEffect(false);
  boxEffect(false);
}

document.addEventListener("scroll", () => {
  if (window.scrollY > headerTop.offsetHeight + 15) {
    headerTop.classList.add("header-top-active");
  } else {
    headerTop.classList.remove("header-top-active");
  }
});
