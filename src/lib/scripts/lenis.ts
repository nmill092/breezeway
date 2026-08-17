import { gsap, ScrollTrigger, reduced } from "./gsap";
import Lenis from 'lenis';

export const initLenis = () => {
  if (reduced()) return null; 

  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  gsap.ticker.lagSmoothing(0);

  return lenis; 
}