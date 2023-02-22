// lấy chiều cao màn hình không gồm 2 thanh điều hướng bên trên và bên dưới
const setHeight = () => {
  const mainMobile = document.querySelector("#main_mobile");
  if (mainMobile) {
    document.querySelector("#main_mobile").style.height =
      window.innerHeight + "px";
  }
};

setHeight();

window.onload = function (e) {
  setHeight();
};

// reload lại page khi xoay ngang màn hình
window.addEventListener("orientationchange", function () {
  var afterOrientationChange = function () {
    window.location.reload();
    setHeight();
    window.removeEventListener("resize", afterOrientationChange);
  };
  window.addEventListener("resize", afterOrientationChange);
});

$(document).ready(function () {});
