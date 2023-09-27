// Then inside another script tag you can add your custom animation code!
// This tween will rotate an element with a class of .my-element 
let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  // desktop setup code here...


gsap.from('[gsap-element="heading-leben"]', {
  y: '3rem',
  ease: 'none',
  scrollTrigger: {
    trigger: '[gsap-element="trigger-leben"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="img-leben"]', {
  y: '10rem',
  ease: 'none',
  scrollTrigger: {
    trigger: '[gsap-element="trigger-leben"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="img-leben2"]', {
  y: '15rem',
  ease: 'none',
  scrollTrigger: {
  	markers: false,
    trigger: '[gsap-element="trigger-leben2"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="heading-ausblick"]', {
  y: '5rem',
  ease: 'none',
  scrollTrigger: {
  	markers: false,
    trigger: '[gsap-element="trigger-ausblick"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="img-ausblick"]', {
  y: '12rem',
  ease: 'none',
  scrollTrigger: {
  	markers: false,
    trigger: '[gsap-element="trigger-ausblick"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="heading-wohnen"]', {
  y: '3rem',
  ease: 'none',
  scrollTrigger: {
    trigger: '[gsap-element="trigger-wohnen2"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="img-wohnen"]', {
  y: '10rem',
  ease: 'none',
  scrollTrigger: {
    trigger: '[gsap-element="trigger-wohnen2"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.from('[gsap-element="img-wohnen2"]', {
  y: '15rem',
  ease: 'none',
  scrollTrigger: {
  	markers: false,
    trigger: '[gsap-element="trigger-wohnen2"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})

gsap.to('[gsap-element="heading-quartier"]', {
  y: '-3rem',
  ease: 'none',
  scrollTrigger: {
  	markers: false,
    trigger: '[gsap-element="trigger-quartier"]',
    start: 'top 100%',
    end: 'bottom 100%',
    scrub: 0.5,
  }
})
});