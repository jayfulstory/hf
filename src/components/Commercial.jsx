import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Commercial = () => {
  const img1 = useRef();
  const img2 = useRef();
  const img3 = useRef();
  const img4 = useRef();
  useEffect(() => {
    const x = gsap.utils.distribute({
      base: -30,
      amount: 60,
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
    <div className=' relative w-full text-white '>
      <img className='w-full' src='./bg/bg-cover1.svg' alt='' />

      <div className='relative w-full  flex flex-col justify-center items-center bg-[#3D3584]'>
        <div className=' max-w-[80vw] text-center '>
          <h3 className='text-3xl lg:text-6xl 2xl:text-7xl font-bold my-8 '>
            まずは宇宙でデートしよう
          </h3>
          <p className='text-md lg:text-xl 2xl:text-2xl leading-10'>
            StellaMeetでは二人だけの惑星でデートをすることができます。
            <br />
            宇宙の美しさに包まれた中でのデートは、まるで夢のよう。
            <br />
            星の数ほど訪れる出会いの中から、
            <br />
            だった一つの運命の出会いを見つけませんか？
            <br />
          </p>
        </div>
        <div className='w-[90vw] md:w-[65vw]'>
          <img className='w-full' src='./stars/star.png' alt='' />
        </div>
        <div className=' w-full h-full'>
          <img
            ref={img1}
            className='w-[15vw]  absolute top-0 left-[8vw] h-ful'
            src='./obj/uni3.png'
            alt=''
          />
          <img
            ref={img2}
            className='w-[16vw]  absolute top-0 right-[6vw] h-ful'
            src='./stars/uni2.png'
            alt=''
          />
          <img
            ref={img3}
            className='w-[15vw] absolute bottom-[12vh] left-[10vw] ufo h-ful'
            src='./obj/ufo.png'
            alt=''
          />
          <img
            ref={img4}
            className='w-[15vw] absolute ute bottom-[4vh] right-[4vw] -rotate-45h-ful'
            src='./obj/uni4.png'
            alt=''
          />
        </div>
      </div>
      <img className='w-full ' src='./bg/bg-cover2.svg' alt='' />
    </div>
  );
};

export default Commercial;
