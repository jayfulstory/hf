import Profile from './Profile';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    function getAmountWidth() {
      // let w = sectionRef.current.scrollWidth;
      let w = sectionRef.current.offsetWidth;
      return -(w - window.innerWidth);
    }

    // const tween = gsap.to(sectionRef.current, {
    //   x: getAmountWidth,
    //   duration: 3,
    //   ease: 'none',
    // });

    // ScrollTrigger.create({
    //   trigger: triggerRef.current,
    //   start: 'top top',
    //   end: '+=3000',
    //   // end: '+=' + getAmountWidth() * -1,
    //   animation: tween,
    //   pin: true,
    //   scrub: 1,
    //   invalidateOnRefresh: true,
    //   markers: true,
    // });

    let t = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '+=3000',
        // end: '+=' + getAmountWidth() * -1,
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
        ease: 'none',
        // markers: true,
      },
    });
    t.to(sectionRef.current, { duration: 1 }) //
      .to(sectionRef.current, {
        x: getAmountWidth,
        duration: 4,
        ease: 'none',
      })
      .to(sectionRef.current, { duration: 1 });
  }, []);

  return (
    <div ref={triggerRef} className='w-screen h-screen '>
      <img
        className='w-[500px] absolute bottom-[-10vh] left-[5vw]'
        src='/public/stars2.svg'
        alt=''
      />
      <div
        ref={sectionRef}
        className='h-screen w-fit flex items-center lg:flex-nowrap  gap-64 pl-64 pr-16'
      >
        <Profile />
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
