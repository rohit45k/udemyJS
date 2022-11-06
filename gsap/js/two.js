gsap.registerPlugin(ScrollTrigger);

// gsap.to('.box', { x: 200, duration: 2, });
// gsap.to('.box', { y: 200, borderRadius: '50%', delay: 2, duration: 2, });
// gsap.to('.box', { x: 400, y: 400, delay: 4, duration: 2, });
// gsap.to('.box', { x: 600, y: 0, delay: 6, duration: 2, });
// gsap.to('.box', { x: 0, borderRadius: 0, delay: 8, duration: 2, });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    start: 'top center',
    end: 'top 20%',
    toggleActions: 'restart none none none',
    scrub: 2,
    markers: true,
  },
});

tl.to('.box', { x: 200, duration: 2 })
  .to('.box', { y: 200, borderRadius: '50%', duration: 2 })
  .to('.box', { x: 400, y: 400, duration: 2 })
  .to('.box', { x: 600, y: 0, duration: 2 })
  .to('.box', { x: 0, borderRadius: '0%', duration: 2 });
