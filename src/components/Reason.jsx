const Reason = () => {
  const reasons = [
    '仮想デートができるマッチングアプリ利用率',
    '利用者満足度',
    '惑星デート後のマッチング率',
  ];
  return (
    <div className='relative w-screen  flex flex-col justify-center items-center text-center'>
      <img
        className='w-[350px] absolute right-[2vw] bottom-[-15vh]'
        src='/stars1.svg'
        alt=''
      />
      <h1 className='text-6xl text-white font-bold mt-[20vh] mb-32 '>
        毎日<span className='text-7xl'>30万</span>組が
        <br />
        マッチングしています
      </h1>
      <div className='px-8'>
        <div className='flex justify-center items-center gap-12'>
          {/* <div className='grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 gap-8 place-items-center z-10'> */}
          {reasons.map(text => {
            return (
              <div
                key={text}
                className='w-[280px] h-[280px] rounded-full bg-orange-400 flex justify-center items-center'
              >
                <p className='p-12 text-white text-2xl'>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='-mt-[15vh]'>
        <img className='' src='/bg-4.png' alt='' />
        <img className='-mt-[5vh]' src='/bg-2.png' alt='' />
      </div>
    </div>
  );
};

export default Reason;
