const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-RED px-12 h-16 '>
      <div className='h-full text-PURPLE hover:scale-110 duration-200'>
        <img className='h-full' src='/public/logo.png' alt='' />
      </div>
      <button className='rounded-full border border-black px-4 py-2 text-xs hover:border-PURPLE hover:bg-PURPLE hover:text-white hover:scale-110 duration-300'>
        DOWNLOAD
      </button>
    </div>
  );
};

export default Navbar;
