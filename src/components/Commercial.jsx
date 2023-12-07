import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Commercial = () => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();

  useEffect(() => {
    const x = gsap.utils.distribute({
      base: -40,
      amount: 80,
      ease: 'none',
    });
    gsap.to(img1.current, {
      y: x,
      duration: 1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    gsap.to(img2.current, {
      rotateX: x,
      duration: 1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
    gsap.to(img3.current, {
      // y: 30,
      keyframes: {
        '0%': { scale: 1, x: 0 },
        '25%': { scale: 0.9, x: -20 },
        '50%': { scale: 0.8, x: 0 },
        '75%': { scale: 0.9, x: 20 },
        '100%': { scale: 1, x: 0 },
        easeEach: 'none',
      },
      duration: 3,
      ease: 'none',
      repeat: -1,
      // yoyo: true,
    });
    gsap.to(img4.current, {
      x: -4,
      y: -4,
      duration: 0.1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className='mt-[25vh]'>
      {/* <img src='/public/bg-1.png' alt='' /> */}
      <div className='obj h-screen w-full relative flex justify-center items-center text-white'>
        <div className='w-full h-full  flex flex-col justify-center items-center z-10'>
          <div className='text-center text-xl  leading-10 mb-12'>
            <h3 className='text-6xl font-bold mb-12'>
              まずは宇宙でデートしよう
            </h3>
            <p className=''>
              StellaMeetでは二人だけの惑星でデートをすることができます。
              <br />
              宇宙の美しさに包まれた中でのデートは、まるで夢のよう
              <br />
              星の数ほど訪れる出会いの中から、だった一つの運命の出会いを見つけませんか？
              <br />
            </p>
          </div>
          <div className='z-10'>
            <div className='h-[400px]'>
              <img className='h-full' src='/uni3.png' alt='' />
            </div>
          </div>
        </div>
        <div className=''>
          <div
            ref={img1}
            className='w-[180px]  absolute top-[10vh] left-[10vw]'
          >
            <img className='h-ful' src='/uni3.png' alt='' />
          </div>
          <div ref={img2} className='w-[220px]  absolute top-[8vh] right-[8vw]'>
            <img className='h-ful' src='/uni2.png' alt='' />
          </div>
          <div
            ref={img3}
            className='w-[200px] absolute bottom-[10vh] left-[10vw]'
          >
            <img className='ufo h-ful' src='/ufo.png' alt='' />
          </div>
          <div
            ref={img4}
            className='w-[200px]  absolute bottom-[8vh] right-[8vw]  -rotate-45'
          >
            <img className='h-ful' src='/uni4.png' alt='' />
          </div>
        </div>
      </div>
      <div className='relative'>
        <img
          className='absolute top-2/3 left-1/4 w-[280px]'
          src='/public/stars4.svg'
          alt=''
        />
        <img
          className='absolute top-1/4 left-3/4  w-[150px] -z-10'
          src='/public/stars5.svg'
          alt=''
        />
      </div>
    </div>
  );
};

export default Commercial;
