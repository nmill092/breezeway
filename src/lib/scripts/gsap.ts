import gsap from 'gsap'; 
import ScrollTrigger from 'gsap/ScrollTrigger'; 

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

document.fonts.ready.then(() => ScrollTrigger.refresh());

const reduced = () => 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches; 

const scoped = (fn: () => void, el: Element) => {
  const ctx = gsap.context(fn, el);
  const cleanup = () => ctx.revert();
  cleanup.ctx = ctx;
  return cleanup;
}

export { 
  gsap, 
  reduced, 
  scoped, 
  ScrollTrigger 
}; 
