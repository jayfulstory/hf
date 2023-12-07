import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const SampleUi = () => {
  const contents = [
    {
      scr: '/public/1.png',
      text: `まず、好きな雰囲気の惑星の主と話してみてください`,
    },
    {
      scr: '/public/1.png',
      text: '自分と似ている惑星を探すこともできます！',
    },
    {
      scr: '/public/1.png',
      text: '話も合うし会ってみたいけど少し不安なところが、、、',
    },
    {
      scr: '/public/1.png',
      text: '仮想空間で安全に出会いをお楽しみください！',
    },
  ];
  const textTrigger = useRef();
  const ending = useRef([]);
  ending.current = [];
  const sections = useRef([]);
  sections.current = [];
  const addToRef = el => {
    if (el && !sections.current.includes(el)) {
      sections.current.push(el);
    }
  };
  const endingRef = el => {
    if (el && !ending.current.includes(el)) {
      ending.current.push(el);
    }
  };

  useEffect(() => {
    sections.current.forEach((section, i) => {
      const tl = gsap
        .timeline({ ease: 'none' }) //
        .from(section, {
          scale: 0.8,
          opacity: 0,
        })
        .to(section, {})
        .to(section, {
          scale: 0.8,
          opacity: 0,
        });

      ScrollTrigger.create({
        trigger: ending.current[i],
        start: 'top 45%',
        end: 'bottom 55%',
        animation: tl,
        scrub: true,
      });
    });
    gsap.to(sections.current[0], {
      scrollTrigger: {
        trigger: textTrigger.current,
        start: 'top top',
        endTrigger: ending.current[3],
        end: 'bottom bottom',
        pin: true,
      },
    });
  }, []);

  return (
    <div className='relative w-screen flex justify-center px-16'>
      <div className='absolute w-full h-full'>
        <img
          className='absolute top-1/4 -left-1/3'
          src='/public/stars3.svg'
          alt=''
        />
      </div>
      <div className='w-5/12'>
        {contents.map(content => {
          return (
            <div
              ref={endingRef}
              key={content.text}
              className='h-screen flex flex-col items-center justify-center mb-[10vh]'
            >
              <img
                className=' h-[75vh] rounded-3xl z-10'
                src={content.scr}
                alt=''
              />
            </div>
          );
        })}
      </div>
      <div
        ref={textTrigger}
        className='relative w-7/12 h-screen flex justify-center items-center'
      >
        {contents.map(content => {
          return (
            <div
              ref={addToRef}
              key={content.text}
              className='w-full h-full absolute flex justify-center items-center'
            >
              <h2 className='text-5xl font-bold text-white text-center z-10'>
                {content.text}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SampleUi;
