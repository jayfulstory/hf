const Footer = () => {
  return (
    <div className='flex flex-col justify-around items-center h-64 bg-[#0f1025] text-white'>
      <div className='flex items-center'>
        <img className='w-36' src='/logo/logo.png' alt='' />
        <h1 className='font-bold text-5xl'>StellaMeet</h1>
      </div>
      <p>2023 StellaMeet</p>
    </div>
  );
};

export default Footer;
