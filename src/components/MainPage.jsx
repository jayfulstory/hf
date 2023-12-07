const MainPage = () => {
  return (
    <div className='relative h-screen w-full'>
      {/* <div className='w-full h-full flex justify-center items-center bg-[url("/public/main.png")] bg-cover bg-no-repeat bg-bottom'> */}
      <div className='w-full h-full flex justify-center items-center'>
        <h1 className='text-white font-bold text-7xl -translate-x-1/2'>
          StellaMeet
        </h1>
        <img className='absolute w-fit' src='/main.png' alt='' />
        <img
          className='absolute w-[200px] top-[30px] left-[30px]'
          src='/logo.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default MainPage;
