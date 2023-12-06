// import { useEffect, useState } from 'react';
// import { gsap } from 'gsap';

const MainPage = () => {
  return (
    <div className='relative h-screen w-full'>
      {/* <img
        className='w-[200px] absolute left-8 top-8'
        src='/public/logo.svg'
        alt=''
      /> */}
      {/* <button className='sticky top-12 left-full rounded-full border border-white text-white px-4 py-2 text-xs hover:border-PURPLE hover:bg-PURPLE hover:text-white hover:scale-110 duration-300'>
        DOWNLOAD
      </button> */}
      <div className='w-full h-full flex justify-center items-center bg-[url("/public/main.png")] bg-cover bg-no-repeat bg-center'>
        {/* <h1 className='text-7xl font-bold text-white z-10'>MainPage</h1> */}
      </div>
    </div>
  );
};

export default MainPage;
