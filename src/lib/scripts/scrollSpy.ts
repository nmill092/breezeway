export const initScrollSpy = () => {
  const header = document.querySelector<HTMLElement>('.header');
  const links = document.querySelectorAll<HTMLAnchorElement>('.header__nav a[href^="#"]');

  const items = [...links].map(link => ({
    link, 
    section: document.querySelector<HTMLElement>(link.hash)
  })).filter((item): item is { 
    link: HTMLAnchorElement;
    section: HTMLElement; 
  } => Boolean(item.section))


  if (!header || !items.length) return; 

  const setActive = (id: string) => {
    for(const { link } of items) {
      const active = id !== null && link.hash === `#${id}`;

      link.classList.toggle('header__link--active', active);

      if (active) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  }

  const headerHeight = header.getBoundingClientRect().height; 
  const intersecting = new Set<HTMLElement>();

  const observer = new IntersectionObserver(
    entries => {
      for(const entry of entries) {
        const section = entry.target as HTMLElement; 
        if (entry.isIntersecting) {
          intersecting.add(section);
        } else {
          intersecting.delete(section); 
        }
        
        const activeSection = [...intersecting][0] ?? null; 
        setActive(activeSection?.id ?? null);
      }
    }, {
      rootMargin: `-${headerHeight + 20}px 0px -65% 0px`,
      threshold: 0
    }
  ); 

  for(const { section } of items) {
    observer.observe(section);
  }

 }
