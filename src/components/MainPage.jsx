import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  const mainVisual = useRef();
  useEffect(() => {
    ScrollTrigger.create({
      trigger: mainVisual.current,
      start: 'top top',
      end: 'center top',
      pin: true,
      pinSpacing: false,
    });
  }, []);
  return (
    <div ref={mainVisual} className='relative h-screen w-full'>
      <div className='w-full h-full flex justify-center items-center bg-[url("/bg/main-sx.png")] sm:bg-[url("/bg/main.png")] bg-cover bg-no-repeat bg-center'>
        <div className='w-full h-full flex justify-center items-center'>
          <img
            className='absolute w-[200px] top-[30px] left-[30px]'
            src='./logo/logo.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
