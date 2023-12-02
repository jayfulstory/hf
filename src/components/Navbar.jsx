const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-RED px-12 h-16 '>
      <div className='text-2xl font-bold text-PURPLE hover:scale-110 duration-200'>
        <a href=''>STALLA MEET</a>
      </div>
      <button className='rounded-full border border-black px-4 py-2 text-xs hover:border-PURPLE hover:bg-PURPLE hover:text-white hover:scale-110 duration-300'>
        DOWNLOAD
      </button>
    </div>
  );
};

export default Navbar;
