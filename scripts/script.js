const mainCtn = document.querySelector(".main-ctn");
const loader = document.querySelector(".loader");
const loaderBtn = document.querySelector(".loader-btn");
const bgAudio = document.querySelector(".bg-audio");
const musicPlayBtn = document.querySelector(".music-play-btn");
const musicPauseBtn = document.querySelector(".music-pause-btn");
const textAnim = document.querySelectorAll(".text-anim");
const boxAnim = document.querySelectorAll(".box-anim");

loaderBtn.addEventListener("click", () => {
  loader.style.display = "none";
  mainCtn.style.display = "unset";
  musicPlayBtn.style.display = "none";
  bgAudio.play();
  activateGSAP();
});

musicPlayBtn.addEventListener("click", () => {
  musicPlayBtn.style.display = "none";
  musicPauseBtn.style.display = "unset";
  bgAudio.play();
});

musicPauseBtn.addEventListener("click", () => {
  musicPlayBtn.style.display = "unset";
  musicPauseBtn.style.display = "none";
  bgAudio.pause();
});

const activateGSAP = () => {
  gsap.from(".landing-page-card", {
    opacity: 0,
    scale: 0,
    duration: 1.5,
    delay: 2,
    ease: "power1.inOut",
  });

  textAnim.forEach((elem) => {
    return gsap.from(elem, {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        scroller: "body",
        trigger: elem,
        start: "top 85%",
        end: "top 50%",
        // markers: true,
        // scrub: true,
      },
    });
  });

  boxAnim.forEach((elem) => {
    return gsap.from(elem, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        scroller: "body",
        trigger: elem,
        start: "top 85%",
        end: "top 50%",
        // markers: true,
        // scrub: true,
      },
    });
  });

  gsap.from(".sec-eight-svg-anim", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      scroller: "body",
      trigger: ".sec-eight",
      start: "top 70%",
      end: "top 40%",
      // markers: true,
      // scrub: true,
    },
  });

  gsap.from(".social-icn-ctn", {
    opacity: 0,
    scale: 0,
    y: "30%",
    duration: 1,
    scrollTrigger: {
      scroller: "body",
      trigger: ".sec-eight-svg-anim",
      start: "top 85%",
      end: "top 60%",
      // markers: true,
      // scrub: true,
    },
  });

  gsap.from(".top", {
    opacity: 0,
    y: "20%",
    duration: 0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".top",
      start: "top 85%",
      end: "top 60%",
      // markers: true,
      // scrub: true,
    },
  });

  gsap.from(".bottom", {
    opacity: 0,
    y: "40%",
    duration: 0.5,
    scrollTrigger: {
      scroller: "body",
      trigger: ".bottom",
      start: "top 85%",
      end: "top 60%",
      // markers: true,
      // scrub: true,
    },
  });

  const gmss = document.querySelectorAll(".gsap-marker-scroller-start");

  gmss.forEach((marker) => {
    marker.style.zIndex = "20000000";
  });

  const gmse = document.querySelectorAll(".gsap-marker-scroller-end");

  gmse.forEach((marker) => {
    marker.style.zIndex = "20000000";
  });

  const gms = document.querySelectorAll(".gsap-marker-start");

  gms.forEach((marker) => {
    marker.style.zIndex = "20000000";
  });

  const gme = document.querySelectorAll(".gsap-marker-end");

  gme.forEach((marker) => {
    marker.style.zIndex = "20000000";
  });
};
