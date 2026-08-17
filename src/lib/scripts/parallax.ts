import { gsap, reduced, scoped } from './gsap'; 

export const initParallax = (root: Element, start = "top bottom", end = "bottom top") => {
  scoped(() => {
    if (reduced()) return; 

    gsap.to('[data-parallax]', {
      yPercent: (i, el) => Number(el.dataset.parallaxSpeed ?? -15),
      ease: 'none',
      scrollTrigger: { 
        trigger: root, 
        start,
        end, 
        scrub: true 
      },
    });
  }, root); 
}