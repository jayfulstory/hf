import Profile from '../Profile';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const Horizontal = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function getAmountWidth() {
      let w = sectionRef.current.offsetWidth;
      return -(w - window.innerWidth);
    }

    gsap.to(sectionRef.current, {
      x: getAmountWidth,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=' + getAmountWidth() * -1,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        markers: true,
      },
    });
  }, []);

  return (
    <div ref={triggerRef} className='section-horizontal overflow-x-hidden'>
      <div
        ref={sectionRef}
        className='h-screen w-fit flex items-center lg:flex-nowrap gap-16 pl-64 pr-16'
      >
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
};

export default Horizontal;
