// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

const MainPage = () => {
  // const [mousePosition, setMousePosition] = useState({
  //   x: 0,
  //   y: 0,
  // });
  // useEffect(() => {
  //   const bgLight = document.querySelector('.bgLight');
  //   const section = document.querySelector('.section1');
  //   const handleMouseEnter = () => {
  //     bgLight.style.display = 'block';
  //   };
  //   const handleMouseLeave = () => {
  //     bgLight.style.display = 'none';
  //   };
  //   const handleMouseMove = e => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   section.addEventListener('mouseenter', handleMouseEnter);
  //   section.addEventListener('mouseleave', handleMouseLeave);
  //   section.addEventListener('mousemove', handleMouseMove);

  //   gsap.set(bgLight, {
  //     x: mousePosition.x,
  //     y: mousePosition.y,
  //   });
  //   return () => {
  //     section.removeEventListener('mouseenter', handleMouseEnter);
  //     section.removeEventListener('mouseleave', handleMouseLeave);
  //     section.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, [mousePosition]);
  return (
    <div className='section1 h-screen flex justify-center items-center bg-PURPLE'>
      {/* <div className='bgLight cursor w-[200px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[200px] rounded-full fixed bg-blue-100 blur-[100px] '></div> */}
      <h1 className='text-7xl font-bold text-white z-10'>MainPage</h1>
      <button className='absolute bottom-16 right-32 border text-white border-white p-2 cursor-pointer hover:bg-RED  hover:border-RED duration-300 rounded-md'>
        ダウンロード
      </button>
    </div>
  );
};

export default MainPage;
