// to animate on scroll we need to register a plugin called scroll trigger
gsap.registerPlugin(ScrollTrigger);

// 1. same element as animate and animation trigger
// gsap.to('.square', {
//   x: 700,
//   duration: 3,
//   scrollTrigger: '.square',
// });

// 2. Another element to trigger the animation
// gsap.to('.square', {
//   scale: 1.5,
//   x: 75,
//   y: -50,
//   duration: 3,
//   scrollTrigger: '.div3',
// });

// 3. set scroll trigger as an object to explore more properties
// gsap.to('.square', {
//   x: 700,
//   duration: 3,
//   scrollTrigger: {
//     // start: 400, //means when the scroller is scrolled 400px

//     trigger: '.square',
//     toggleClass: 'active',
//     start: 'top center', // keywords- top center bottom, percentage and px values
//     // end: 'center 25%',
//     end: () => `+=${document.querySelector('.square').offsetHeight}`,
//     markers: true,
//   },
// });

// 4. toggle Actions to animate every time comes in view
// gsap.to('.square', {
//   x: 700,
//   duration: 3,
//   scrollTrigger: {
//     trigger: '.square',
//     start: 'top center',
//     end: () => `+=${document.querySelector('.square').offsetHeight}`,
//     toggleActions: 'restart pause resume reverse', // onEnter onLeave onEnterBack onLeaveBack
//     // values --> play pause resume reverse restart reset complete none
//     markers: true,
//   },
// });

// 4. Scrub --> animation object is directly attached to scroll bar
// gsap.to('.square', {
//   x: 300,
//   y: -150,
//   borderRadius: '50%',
//   scale: 2,
//   scrollTrigger: {
//     trigger: '.square',
//     start: 'top 80%',
//     end: 'top 40%',
//     toggleActions: 'restart none none none',
//     scrub: 5,
//     markers: true,
//   },
// });

// TODO --> make that ping pong animation using scrub and scroll trigger

// 5. Pining --> in one element and keep other flowing
// at scroll start element gets pinned and at scroll end element unpins means keep on the same horizontal line
// gsap.to('.square', {
//   x: 300,
//   borderRadius: '50%',
//   scrollTrigger: {
//     trigger: '.square',
//     start: 'top 80%',
//     end: 'top 40%',
//     toggleActions: 'restart none none none',
//     pin: true,
//     scrub: 2,
//     markers: true,
//   },
// });

// gsap.to('.square', {
//   x: 200,
//   borderRadius: '50%',
//   scrollTrigger: {
//     trigger: '.div3',
//     start: 'top 90%',
//     end: 'top 70%',
//     toggleActions: 'restart none none none',
//     pin: '.square',
//     pinSpacing: true, //
//     scrub: 2,
//     markers: true,
//   },
// });

// TODO --> Make that boxes template design using pinning and scroll trigger
