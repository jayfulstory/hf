const MainPage = () => {
  return (
    <div className='relative h-screen w-full'>
      <div className='w-full h-full flex justify-center items-center bg-[url("/main.png")] bg-cover bg-no-repeat bg-bottom'>
        <div className='w-full h-full flex justify-center items-center'>
          <img
            className='absolute w-[200px] top-[30px] left-[30px]'
            src='/logo.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
