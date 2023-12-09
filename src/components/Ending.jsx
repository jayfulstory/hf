import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Ending = () => {
  const endingTrigger = useRef();
  const earth = useRef();
  const cloud = useRef();
  const download = useRef();
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: endingTrigger.current,
          start: 'top top',
          end: '+=3000',
          pin: true,
          scrub: true,
          ease: 'none',
        },
      })
      .to(earth.current, {
        scale: 4,
        opacity: 0,
        duration: 1,
      })
      .from(download.current, {
        scale: 1.1,
        opacity: 0,
      })
      .set(earth.current, {
        display: 'none',
      })
      .to(download.current, {});

    gsap.to(cloud.current, {
      xPercent: -200,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <div
      ref={endingTrigger}
      className='w-screen h-screen flex justify-center items-center relative'
    >
      <img
        ref={earth}
        className=' w-[85vw] md:w-[60vw] h-auto absolute bottom-[30vh]  md:-bottom-[8vh] '
        src='./bg/earth.png'
        alt=''
      />
      <img
        ref={cloud}
        className='w-full h-auto absolute translate-x-full'
        src='./bg/cloud.png'
        alt=''
      />

      <div
        ref={download}
        className='w-screen h-screen flex justify-center items-center bg-blue-300 absolute top-0 bottom-0 '
      >
        <div className=' w-[800px] h-[800px] flex flex-col items-center justify-center'>
          <div className='w-full h-[300px] bg-red-400'></div>
          <div className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-bold h-[300px] flex justify-center items-center'>
            <h2>今すぐ無料ではじめる</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
