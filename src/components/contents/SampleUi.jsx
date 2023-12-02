const SampleUi = () => {
  return (
    <div className='flex  flex-col-reverse justify-center  md:flex-row w-full h-[4000px] py-48 px-16 bg-gradient-to-b from-[#120331] to-[#091a68] '>
      <div className='h-full mt-48 md:mt-0 md:w-1/2 flex flex-col  items-center justify-between'>
        <div className='w-[300px] '>
          <img className='w-full rounded-3xl' src='./1.png' alt='' />
        </div>
        <div className='w-[300px] '>
          <img className='w-full rounded-3xl' src='./1.png' alt='' />
        </div>
        <div className='w-[300px] '>
          <img className='w-full rounded-3xl' src='./1.png' alt='' />
        </div>
        <div className='w-[300px] '>
          <img className='w-full rounded-3xl' src='./1.png' alt='' />
        </div>
      </div>
      <div className='md:w-1/2'>
        <div className='md:sticky  top-1/4 md:pl-8 lg:pr-16 text-center text-white'>
          <h2 className='text-7xl font-bold mb-12'>HELLO</h2>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            quibusdam, sed qui quas vitae sapiente praesentium nemo et deserunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default SampleUi;
