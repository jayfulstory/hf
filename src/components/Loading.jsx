import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
// gsap.registerPlugin();

// eslint-disable-next-line react/prop-types
const Loading = () => {
  const loadingRef = useRef();
  useEffect(() => {
    const text = new SplitType(loadingRef.current, { types: 'chars' });
    console.log(text.chars);

    gsap.defaults({
      duration: 1,
    });

    const x = gsap.utils.distribute({
      base: -120,
      amount: 240,
    });

    gsap
      .timeline({
        repeat: -1,
      })
      .from(text.chars, { opacity: 0, y: 30, stagger: { each: 0.05 } })
      .to(text.chars, {
        x,
        // stagger: {
        //   each: 0.05,
        //   from: 'center',
        // },
      })
      .to(text.chars, { opacity: 0, y: -30, stagger: 0.05 });
  }, []);
  return (
    <div className='w-screen h-screen  bg-black text-white font-bold text-7xl flex justify-center items-center fixed top-0 left-0 z-50 overflow-hidden'>
      <div ref={loadingRef} className=''>
        StellaMeet
      </div>
    </div>
  );
};

export default Loading;
