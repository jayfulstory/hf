import YouTube from 'react-youtube';

const VideoContent = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className='w-screen h-screen font-bold text-white flex justify-center items-center'>
      <div className=' w-1/2 h-1/2 flex justify-center items-center'>
        <YouTube videoId='0ghIVa_VWg0' otps={opts} />
      </div>
    </div>
  );
};

export default VideoContent;
