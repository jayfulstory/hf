import { gsap } from 'gsap';
import { useEffect } from 'react';

const Commercial = () => {
  useEffect(() => {
    const x = gsap.utils.distribute({
      base: -40,
      amount: 80,
      ease: 'none',
    });
    gsap.to('.obj div:nth-child(1)', {
      y: x,
      duration: 1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    gsap.to('.obj div:nth-child(2)', {
      rotateX: x,
      duration: 1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
    gsap.to('.obj div:nth-child(3)', {
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
    gsap.to('.obj div:nth-child(4)', {
      x: -4,
      y: -4,
      duration: 0.1,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <div className='obj h-screen w-100% bg-stone-900 relative'>
      <div className='w-[180px]  absolute top-[10vh] left-[10vw]'>
        <img className='h-100%' src='/uni3.png' alt='' />
      </div>
      <div className='w-[220px]  absolute top-[8vh] right-[8vw]'>
        <img className='h-100%' src='/uni2.png' alt='' />
      </div>
      <div className='w-[200px] absolute bottom-[10vh] left-[10vw]'>
        <img className='ufo h-100%' src='/ufo.png' alt='' />
      </div>
      <div className='w-[200px]  absolute bottom-[8vh] right-[8vw]  -rotate-45'>
        <img className='h-100%' src='/uni4.png' alt='' />
      </div>
    </div>
  );
};

export default Commercial;
