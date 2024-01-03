import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const SampleUi = () => {
  const contents = [
    {
      scr: './ui/ui8.png',
      text: `まず、好きな雰囲気の惑星の\n主と話してみてください`,
    },
    {
      scr: './ui/ui4.png',
      text: '自分と似ている惑星を\n探すこともできます！',
    },
    {
      scr: './ui/ui2.png',
      text: '話も合うし会ってみたいけど\n少し不安なところが、、、',
    },
    {
      scr: './ui/ui1.png',
      text: '仮想空間で安全に出会いを\nお楽しみください！',
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
          y: 30,
          scale: 0.8,
          opacity: 0,
        })
        .to(section, {})
        .to(section, {
          y: -30,
          scale: 0.8,
          opacity: 0,
        });

      ScrollTrigger.create({
        trigger: ending.current[i],
        start: 'top 45%',
        end: 'bottom 65%',
        animation: tl,
        scrub: true,
        ease: 'power2.inOut',
        // markers: true,
      });
    });
    gsap.to(sections.current[0], {
      scrollTrigger: {
        trigger: textTrigger.current,
        start: 'top 45%',
        endTrigger: ending.current[3],
        end: 'bottom 65%',
        pin: true,
        ease: 'none',
      },
    });
  }, []);

  return (
    <>
      <img
        className='lg:w-[65vw] lg:my-24 mx-auto'
        src='./text/text3.svg'
        alt=''
      />
      <div className='relative lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-center px-4 sm:px-8 md:px-16'>
        <div className='absolute h-[200%] w-[200%] pointer-events-none'>
          <img
            className='absolute  top-1/4 -left-1/3'
            src='./bg/stars3.svg'
            alt=''
          />
        </div>
        <div className='w-5/12'>
          {contents.map(content => {
            return (
              <div
                ref={endingRef}
                key={content.text}
                className='h-screen flex flex-col items-center justify-center sm:mb-[10vh]'
              >
                <img
                  className=' max-h-[75vh] rounded-3xl border-[1px] border-[hsla(0,0%,100%,.2);] backdrop-blur z-10'
                  src={content.scr}
                  alt=''
                />
              </div>
            );
          })}
        </div>
        <div
          ref={textTrigger}
          className='relative w-7/12 h-screen flex justify-center items-center  pointer-events-none'
        >
          {contents.map(content => {
            return (
              <div
                ref={addToRef}
                style={{ whiteSpace: 'pre-line' }}
                key={content.text}
                className='w-full h-full absolute flex  justify-center'
              >
                <p className='text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold text-white text-center z-10'>
                  {content.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SampleUi;
