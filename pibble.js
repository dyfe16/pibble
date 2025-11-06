var theme = document.getElementById("theme");
var img = document.getElementById("img");

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  let soap = null;
  let touching = false;

  document.body.addEventListener("touchstart", (e) => {
    touching = true;
    const touch = e.touches[0];
    createSoap(touch.clientX, touch.clientY);
  });

  document.body.addEventListener("touchmove", (e) => {
    if (!touching || !soap) return;
    const touch = e.touches[0];
    moveSoap(touch.clientX, touch.clientY);
  });

  document.body.addEventListener("touchend", () => {
    touching = false;
    if (soap) {
      soap.remove();
      soap = null;
    }
  });

  function createSoap(x, y) {
    soap = document.createElement("div");
    soap.classList.add("soap-touch");
    document.body.appendChild(soap);
    soap.style.left = `${x - 30}px`;
    soap.style.top = `${y - 30}px`;
  }

  function moveSoap(x, y) {
    soap.style.left = `${x - 30}px`;
    soap.style.top = `${y - 30}px`;
  }
}

function play() {
  theme.play();
}

function stop() {
  theme.pause();
}

img.addEventListener("mouseover", play);
img.addEventListener("mouseout", stop);

img.addEventListener("touchstart", play);
img.addEventListener("touchend", stop);
