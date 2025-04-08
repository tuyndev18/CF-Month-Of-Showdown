const targetDiv = document.querySelector("#event-second-node");
const scrollableFirst = document.getElementById("container");
const boxes = document.querySelectorAll(".box");
const flareEffectNode = document.querySelectorAll(".flare-item-effect");
const rayLightContainer = document.querySelectorAll(".ray-light-container");

const timeoutEffect = [];

const options = {
  root: null, // sử dụng cửa sổ trình duyệt làm vùng gốc
  rootMargin: "0px", // không có margin
  threshold: 0, // khi ít nhất 50% thẻ div xuất hiện trong cửa sổ
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      addEffect();
      console.log("Div xuất hiện trên màn hình!");
    } else {
      removeEffect();
      console.log("Div ra ngoài màn hình!");
    }
  });
}, options);

observer.observe(scrollableFirst);

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
