import './style.css'
import { gsap } from "gsap";

/* ============================================================= */

/* PRACTICE QUESTION 0 ↓  */

// gsap.to(".item1", {
//   x: 500,
//   duration: 2,
//   rotation: 360,
//   ease: "power2.out"
// });

/* PRACTICE QUESTION 0 ↑  */

/* ============================================================= */

/* PRACTICE QUESTION 1 ↓  */

// gsap.fromTo(
//   ".item2",
//   {
//     x: 0,
//     opacity: 0,
//     scale: 0.5
//   },
//   {
//     x: 500,
//     opacity: 1,
//     scale: 1,
//     duration: 2
//   }
// );

/* PRACTICE QUESTION 1 ↑  */

/* ============================================================= */


/* PRACTICE QUESTION 2 ↓  */

// document.querySelectorAll(".btn").forEach(btn => {

//   btn.addEventListener("mouseenter", () => {

//     if (btn.classList.contains("btn--scale")) {

//       gsap.to(btn, {
//         scale: 1.08,
//         duration: 0.3,
//         ease: "back.out(2)"
//       });

//     }

//     else if (btn.classList.contains("btn--glow")) {

//       gsap.to(btn, {
//         boxShadow: "0 0 25px rgba(79, 124, 255, 0.8)",
//         duration: 0.4,
//         ease: "power2.out"
//       });

//     }

//     else if (btn.classList.contains("btn--wiggle")) {

//       gsap.to(btn, {
//         rotation: 5,
//         duration: 0.1,
//         ease: "power1.inOut",
//         yoyo: true,
//         repeat: 1
//       });

//     }

//   });

//   btn.addEventListener("mouseleave", () => {

//     if (btn.classList.contains("btn--scale")) {

//       gsap.to(btn, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out"
//       });

//     } else if (btn.classList.contains("btn--glow")) {

//       gsap.to(btn, {
//         boxShadow: "0 0 0px rgba(79, 124, 255, 0)",
//         duration: 0.3,
//         ease: "power2.out"
//       });

//     } else if (btn.classList.contains("btn--wiggle")) {

//       gsap.to(btn, {
//         rotation: 0,
//         duration: 0.2,
//         ease: "power2.out"
//       });

//     }
//   });

// });

/* PRACTICE QUESTION 2 ↑  */

/* ============================================================= */

/* PRACTICE QUESTION 3 ↓  */

// const items = document.querySelectorAll(".item");
// const button = document.querySelector("#play");

// button.addEventListener("click", () => {
//   gsap.fromTo(
//     items,
//     {
//       scale: 0,
//       opacity: 0,
//       rotation: -180
//     },
//     {
//       scale: 1,
//       opacity: 1,
//       rotation: 0,
//       duration: 0.8,
//       ease: "back.out(1.7)",

//       stagger: {
//         each: 0.15,
//         from: "random",
//         grid: "auto"
//       }
//     }
//   );
// });

/* PRACTICE QUESTION 3 ↑  */

/* ============================================================= */

/* PRACTICE QUESTION 4 ↑  */

// const tl = gsap.timeline();

// tl.to(".box1", {
//   x: 500,
//   duration: 1,
//   ease: "power2.out"
// });

// tl.to(".box2", {
//   x: 500,
//   duration: 1,
//   ease: "back.out(1.7)"
// });

// tl.to(".box3", {
//   x: 500,
//   duration: 1,
//   ease: "power2.inOut"
// }, 0);

// tl.to(".box4", {
//   x: 500,
//   duration: 1,
//   ease: "elastic.out(1, 0.5)"
// });

// tl.to(".box5", {
//   x: 500,
//   duration: 1,
//   ease: "circ.out"
// });

// tl.to(".box6", {
//   x: 500,
//   duration: 1,
//   ease: "expo.out"
// });

/* PRACTICE QUESTION 4 ↓  */

/* ============================================================= */

/* PRACTICE QUESTION 5 ↓  */

const obj = {
  value: 0,
}

const counter = document.querySelector(".loader-count h2");

const tl = gsap.timeline({ paused: true });

tl.to(".loader", {
  yPercent: 100,
  duration: 1.2,
  ease: "expo.out"
}).from(".hero",{
  scale:1.5,
  duratino:0.5,
  ease:"expo.out"
}, "-=1")

gsap.to(obj, {

  value: 100,
  duration: 3,
  ease: "none",

  onUpdate: () => {
    counter.textContent = `${Math.round(obj.value)}%`
  },

  onComplete: () => {
    gsap.to(counter, {
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      onComplete: () => {
        tl.play()
      }
    })
  },

})



/* PRACTICE QUESTION 5 ↑  */

/* ============================================================= */