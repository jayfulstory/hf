import YouTube from 'react-youtube';

const VideoContent = () => {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      playsinline: 1,
      rel: 0,
    },
  };
  return (
    <div className='w-screen h-screen font-bold text-white flex justify-center items-center'>
      <div className=' w-1/2 h-1/2 flex justify-center items-center'>
        <YouTube className='w-full h-full' videoId='0ghIVa_VWg0' opts={opts} />
      </div>
    </div>
  );
};

export default VideoContent;
