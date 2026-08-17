import { gsap, ScrollTrigger } from "./gsap";

const DEFAULT_Y = 10; 

export const initReveal = (root: HTMLElement) => { 

  const items = [...root.querySelectorAll('[data-reveal]')]

  items.forEach(it => {
    const y = (it as HTMLElement).dataset.revealY ?? DEFAULT_Y;
    gsap.set(it, { autoAlpha: 0, y }); 
    gsap.to(it, { 
      autoAlpha: 1, 
      y: 0,  
      scrollTrigger: {
      trigger: it, 
      start: 'top 85%', 
      once: true 
      }}) 
  }); 

  const grpItems = root.querySelectorAll('[data-reveal-group]');  
  
  grpItems.forEach(item => {
    const children = item.children; 
    gsap.set(children, { autoAlpha: 0, y: DEFAULT_Y })

    ScrollTrigger.batch(children, {
      start: 'top bottom', 
      once: true, 
      onEnter: (batch) => {
        gsap.to(batch, { 
          autoAlpha: 1, 
          y: 0, 
          stagger: .2,
        })
      }
    })
  })
}