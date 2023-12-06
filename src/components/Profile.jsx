const Profile = () => {
  return (
    <div className='flex-shrink-0'>
      <div className='flex flex-col justify-between items-center  bg-gray-200 border-[1px] border-[hsla(0,0%,100%,.2);] backdrop-blur w-[380px] h-[500px] p-8 drop-shadow-lg  rounded-2xl'>
        <img
          className='w-32 h-32 border-4 bg-blue-400 rounded-full'
          src='./profile.png'
          alt=''
        />
        <div className='text-center -translate-y-4'>
          <h1 className='text-3xl  font-poppins font-bold'>Jaehyeon Kim</h1>
          <h3 className=' text-gray-500 text-sm'>ジェヒョン キム</h3>
        </div>
        <p className='text-center -translate-y-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, beatae
          accusantium dolorem accusamus non architecto fugit neque quo
          voluptate! Voluptatum incidunt fuga saepe doloremque.
        </p>
        <div className='space-x-8'>
          <a href='#'>
            <i className='fa-brands fa-instagram text-3xl text-pink-500'></i>
          </a>
          <a href='#'>
            <i className='fa-brands fa-x-twitter text-3xl'></i>
          </a>
          <a href='#'>
            <i className='fa-brands fa-facebook text-3xl text-blue-600'></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
