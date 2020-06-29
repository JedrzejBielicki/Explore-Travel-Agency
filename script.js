const mainBtn = document.querySelector(".main__btn");
let mainHeight = document.querySelector("main").clientHeight;

function parallax(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function () {
  parallax("h1", window.scrollY, 0.4);
  parallax(".main__bg3", window.scrollY, 0.2);
  parallax(".main__bg2", window.scrollY, 0.3);
  parallax(".main__bg1", window.scrollY, 0.5);
  parallax(".main__circle--wrapper", window.scrollY, 0.4);
});

mainBtn.addEventListener("click", () =>
  window.scrollTo({
    top: mainHeight,
    behavior: "smooth",
  })
);
