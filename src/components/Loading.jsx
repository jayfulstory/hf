import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

// eslint-disable-next-line react/prop-types
const Loading = ({ isLoading }) => {
  const loadingRef = useRef();
  const loadingRefBg = useRef();
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  useEffect(() => {
    const text = new SplitType(loadingRef.current, { types: 'chars' });

    const x = gsap.utils.distribute({
      base: -100,
      amount: 200,
    });

    tl.from(text.chars, { opacity: 0, y: 30, stagger: { each: 0.05 } })
      .to(text.chars, { x })
      .to(text.chars, { opacity: 0, y: -30, stagger: 0.05 });

    // return () => {
    //   tl.kill();
    // };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.to(loadingRefBg.current, {
        autoAlpha: 0,
        duration: 1.5,
        onComplete() {},
      });
    }
    return () => {
      setTimeout(() => {
        gsap.set(loadingRefBg.current, { display: 'none' });
        tl.kill();
      }, 1500);
    };
  }, [isLoading]);

  return (
    <div
      ref={loadingRefBg}
      className={`w-screen h-screen  bg-black text-white font-bold
     text-2xl md:text-5xl lg:text-7xl flex justify-center items-center fixed top-0 left-0 z-50 overflow-hidden duration-1000 `}
    >
      <div ref={loadingRef} className=''>
        StellaMeet
      </div>
    </div>
  );
};

export default Loading;
