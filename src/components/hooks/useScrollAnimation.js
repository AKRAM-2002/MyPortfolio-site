// useScrollAnimation.js (Custom Hook)
import { useEffect, useRef } from 'react';

const useScrollAnimation = (ref, className, subElementRef = null) => {
  const elementRef = useRef();
  let lastScrollTop = 0;

  const handleScroll = () => {
    const element = elementRef.current;
    const subElement = subElementRef ? subElementRef.current : element;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      subElement.classList.add(className);
    } else {
      subElement.classList.remove(className);
    }
    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    elementRef.current = ref.current;

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, subElementRef, className]);

  return elementRef;
};

export default useScrollAnimation;
