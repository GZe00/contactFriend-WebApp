


let menuToggle = document.querySelector('#nav');
let iconToggle = document.querySelector('.toggle');

iconToggle.onclick = () => {
    iconToggle.classList.toggle('active');
    menuToggle.classList.toggle('show')
}


var tl = new TimelineMax({
    paused: true
});
// letter animation
tl.fromTo(".anim-typewriter", 5, {
    width: "0",
}, {
    width: "6em", /* same as CSS .line-1 width */
    ease: SteppedEase.config(37)
}, 0);
// text cursor animation
tl.fromTo(".anim-typewriter", 0.5, {
    "border-right-color": "rgba(255,255,255,0.75)"
}, {
    "border-right-color": "rgba(255,255,255,0)",
    repeat: 0,
    ease: SteppedEase.config(37)
}, 0);

tl.play();