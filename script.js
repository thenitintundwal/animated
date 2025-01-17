const tl = gsap.timeline();

tl.from("#logo, #navlink ul li, #navlink button", {
  y: -50,
  opacity: 0,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.15,
});

tl.from(".hero, .hero h1, .hero p, .hero button", {
  x: -80,
  duration: 0.3,
  opacity: 0,
  stagger: 0.18,
});
tl.from(".heroimg", {
  scale: 0,
  duration: 0.3,
  opacity: 0,
});

tl.from(".animate", {
  y: 80,
  duration: 0.3,
  opacity: 0,
  stagger: 0.18,
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".servicesCard",
    scroller: "body",
    start: "top 60%",
    end: "top 2%",
    scrub: 2,
  },
});

tl2.from(".services h1", {
  x: -80,
  delay: 0.3,
  duration: 0.3,
  opacity: 0,
});
tl2.from(".services p", {
  x: 80,
  delay: 0.3,
  duration: 0.3,
  opacity: 0,
});

tl2.from(
  ".anim1",
  {
    x: -80,
    duration: 0.8,
    opacity: 0,
  },
  "start"
);
tl2.from(
  ".anim2",
  {
    y: 80,
    duration: 0.8,
    opacity: 0,
  },
  "start"
);
tl2.from(
  ".anim3",
  {
    y: -80,
    duration: 0.8,
    opacity: 0,
  },
  "end"
);
tl2.from(
  ".anim4",
  {
    x: 80,
    duration: 0.8,
    opacity: 0,
  },
  "end"
);

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trialSection",
    scroller: "body",
    start: "top 50%",
    end: "top 20%",
    scrub: 2,
  },
});

tl3.from(".trialR h1, .trialR h4, .trialR button", {
  x: 180,
  duration: 0.8,
  delay: 0.6,
  opacity: 0,
  stagger: 0.15,
});
tl3.from(".trialL", {
  scale: 0,
  duration: 0.8,
  rotate: 360,
});

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".caseStudy",
    scroller: "body",
    start: "top 60%",
    end: "top 10%",
    scrub: 2,
  },
});

tl4.from(".caseStudy", {
  y: -200,
  opacity: 0,
  duration: 0.8,
});
tl4.from(".footerLeft", {
  x: -200,
  opacity: 0,
  duration: 0.8,
});

tl4.from(".footerRight", {
  x: 200,
  opacity: 0,
  duration: 0.8,
});
