const section = document.querySelector('.section');
const w = section.offsetWidth - 100;
const h = section.offsetHeight - 100;
console.log(w, h);

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  ease: 'none',
  scrollTrigger: {
    trigger: '.full-page',
    scrub: 2,
  },
});

tl.to('.ball', { x: w, y: h })
  .to('.ball', { x: 50, y: h * 2 })
  .to('.ball', { x: w, y: h * 3 })
  .to('.ball', { x: -90, y: h * 4 });
