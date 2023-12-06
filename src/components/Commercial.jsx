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
    <div className='obj h-screen w-100% relative flex justify-center items-center'>
      <div className='w-3/4 h-3/4  flex flex-col justify-center items-center'>
        <div className='text-center text-xl text-white leading-10 mb-12'>
          <h3 className='text-6xl font-bold mb-6'>まずは宇宙でデートしよう</h3>
          <p className=''>
            StellaMeetでは二人だけの惑星でデートをすることができます。
          </p>
          <p className=''>
            宇宙の美しさに包まれた中でのデートは、まるで夢のよう
          </p>
          <p className=''>
            星の数ほど訪れる出会いの中から、だった一つの運命の出会いを見つけませんか？
          </p>
        </div>
        <div className=''>
          <div className='h-[500px]'>
            <img className='h-full' src='/uni3.png' alt='' />
          </div>
        </div>
      </div>
      <div ref={img1} className='w-[180px]  absolute top-[10vh] left-[10vw]'>
        <img className='h-ful' src='/uni3.png' alt='' />
      </div>
      <div ref={img2} className='w-[220px]  absolute top-[8vh] right-[8vw]'>
        <img className='h-ful' src='/uni2.png' alt='' />
      </div>
      <div ref={img3} className='w-[200px] absolute bottom-[10vh] left-[10vw]'>
        <img className='ufo h-ful' src='/ufo.png' alt='' />
      </div>
      <div
        ref={img4}
        className='w-[200px]  absolute bottom-[8vh] right-[8vw]  -rotate-45'
      >
        <img className='h-ful' src='/uni4.png' alt='' />
      </div>
    </div>
  );
};

export default Commercial;
