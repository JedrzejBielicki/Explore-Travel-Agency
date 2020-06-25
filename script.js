function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}
window.addEventListener("scroll", function () {
    parallax("h1", window.scrollY, 0.1);
    parallax(".main__bg3", window.scrollY, 0.1);
    parallax(".main__bg2", window.scrollY, 0.1);
    parallax(".main__bg1", window.scrollY, 0.2);
})