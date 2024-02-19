const mainCtn = document.querySelector(".main-ctn");
const loader = document.querySelector(".loader");
const loaderBtn = document.querySelector(".loader-btn");
const bgAudio = document.querySelector(".bg-audio");
const musicPlayBtn = document.querySelector(".music-play-btn");
const musicPauseBtn = document.querySelector(".music-pause-btn");

loaderBtn.addEventListener("click", () => {
  loader.style.display = "none";
  mainCtn.style.display = "unset";
  bgAudio.play();
  musicPlayBtn.style.display = "none";
  activateGSAP();
});

musicPlayBtn.addEventListener("click", () => {
  bgAudio.play();
  musicPlayBtn.style.display = "none";
  musicPauseBtn.style.display = "unset";
});

musicPauseBtn.addEventListener("click", () => {
  bgAudio.pause();
  musicPlayBtn.style.display = "unset";
  musicPauseBtn.style.display = "none";
});

// .gsap-marker-scroller-start,
// .gsap-marker-scroller-end,
// .gsap-marker-end,
// .gsap - marker - start

// GSAP animation code -

const activateGSAP = () => {
  gsap.from(".anim-headr", {
    opacity: 0,
    scale: 0,
    duration: 2,
    scrollTrigger: {
      scroller: "body",
      trigger: ".anim-headr",
      markers: true,
      start: "top 75%",
      end: "top 50%",
      scrub: true,
    },
  });

  const gmss = (document.querySelector(
    ".gsap-marker-scroller-start"
  ).style.zIndex = "20000000");

  const gmse = (document.querySelector(
    ".gsap-marker-scroller-end"
  ).style.zIndex = "20000000");

  const gms = (document.querySelector(".gsap-marker-start").style.zIndex =
    "20000000");

  const gme = (document.querySelector(".gsap-marker-end").style.zIndex =
    "20000000");
};
