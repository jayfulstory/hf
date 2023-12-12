const Reason = () => {
  const reasons = [
    {
      text: '仮想デートができる\nマッチングアプリ\n利用率',
      strong: 'No.1',
    },
    {
      text: '利用者満足度',
      strong: 'No.1',
    },
    {
      text: '惑星デート後の\nマッチング率',
      strong: '90%',
    },
  ];
  return (
    <div className='relative w-screen  flex flex-col justify-center items-center text-center'>
      <img
        className='w-[20vw] absolute right-[2vw] top-[75vh]'
        src='./bg/stars1.svg'
        alt=''
      />
      <img
        className='absolute top-0 left-0 min-w-[800px] w-screen '
        src='./bg/circle.svg'
        alt=''
      />
      <h1 className='text-3xl lg:text-6xl text-white font-bold mt-[20vh] mb-24 z-10'>
        毎日<span className='text-4xl lg:text-7xl'>30万</span>組が
        <br />
        マッチングしています
      </h1>
      <div className='px-8 z-10'>
        <div className='flex flex-wrap justify-center items-center gap-12'>
          {reasons.map(({ text, strong }, i) => {
            return (
              <div
                key={text}
                style={{ backgroundImage: `url('./obj/reason${i + 1}.svg')` }}
                className='w-[280px] h-[280px] rounded-full  flex justify-center items-center bg-cover'
              >
                <p className='m-10 p-4 bg-WHITE rounded-xl text-lg sm:text-xl whitespace-pre-line'>
                  {text}
                  <br />
                  <span className='font-bold text-2xl'>{strong}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=' relative xl:-mt-[10vh] z-10'>
        <img className='w-full' src='./bg/bg-4.png' alt='' />
        <img className='w-full -mt-1 md:-mt-[5vh]' src='./bg/bg-2.png' alt='' />
        <img
          className='w-[18vw] absolute bottom-0 left-[20vw]'
          src='./stars/star3.png'
          alt=''
        />
        <img
          className='w-[12vw] absolute bottom-[20vh] right-[18vw] -z-10'
          src='./stars/star4.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Reason;
