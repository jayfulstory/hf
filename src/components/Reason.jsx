const Reason = () => {
  return (
    <div className='relative w-screen  flex flex-col justify-center items-center text-center px-12'>
      <img
        className='w-[350px] absolute right-[2vw] bottom-[-12vh]'
        src='/public/start.svg'
        alt=''
      />
      <h1 className='text-6xl text-white font-bold mb-32 '>
        毎日<span className='text-7xl'>30万</span>組が
        <br />
        マッチングしています
      </h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 gap-8 place-items-center z-10'>
        <div className='shadow-xl h-[400px] w-[270px] bg-white rounded-xl overflow-hidden flex flex-col'>
          <div className='bg-gray-500 h-1/2 flex justify-center items-center '>
            <div className='w-32 h-32 rounded-full bg-blue-400'></div>
          </div>
          <div className='bg-red-400 h-1/2'></div>
        </div>
        <div className='shadow-xl h-[400px] w-[270px] bg-white rounded-xl overflow-hidden flex flex-col'>
          <div className='bg-gray-500 h-1/2 flex justify-center items-center '>
            <div className='w-32 h-32 rounded-full bg-blue-400'></div>
          </div>
          <div className='bg-red-400 h-1/2'></div>
        </div>
        <div className='shadow-xl h-[400px] w-[270px] bg-white rounded-xl overflow-hidden flex flex-col'>
          <div className='bg-gray-500 h-1/2 flex justify-center items-center '>
            <div className='w-32 h-32 rounded-full bg-blue-400'></div>
          </div>
          <div className='bg-red-400 h-1/2'></div>
        </div>
        <div className='shadow-xl h-[400px] w-[270px] bg-white rounded-xl overflow-hidden flex flex-col'>
          <div className='bg-gray-500 h-1/2 flex justify-center items-center '>
            <div className='w-32 h-32 rounded-full bg-blue-400'></div>
          </div>
          <div className='bg-red-400 h-1/2'></div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
