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
      // .to(trigger.current, { duration: 1 })
      .to(earth.current, {
        scale: 4,
        // duration: 4,
      })
      .set(endingTrigger.current, {
        backgroundColor: 'white',
      })
      .to(earth.current, {
        opacity: 0,
        // duration: 4,
      })
      .from(
        download.current,
        {
          scale: 1.1,
          opacity: 0,
          // duration: 4,
        },
        '<'
      );

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
      className='w-full h-screen flex justify-center items-center relative'
    >
      <img
        ref={earth}
        className='w-[60vw] h-auto absolute top-auto -bottom-[8vh] '
        src='/earth.svg'
        alt=''
      />
      <img
        ref={cloud}
        className='w-screen h-auto absolute top-auto translate-x-full'
        src='/cloud.png'
        alt=''
      />

      <div
        ref={download}
        className='w-full h-full flex justify-center items-center bg-blue-300 absolute top-0 bottom-0 '
      >
        <div className=' w-[800px] h-[800px] flex flex-col items-center justify-center'>
          <div className='w-full h-[300px] bg-red-400'></div>
          <div className='text-7xl text-white font-bold h-[300px] flex justify-center items-center'>
            <h2>今すぐ無料ではじめる</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ending;
