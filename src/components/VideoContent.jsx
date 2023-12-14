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
      <div className='w-full md:w-4/5 h-3/5 flex justify-center items-center px-4'>
        <YouTube className='w-full h-full' videoId='tGj2L0iDtIY' opts={opts} />
      </div>
    </div>
  );
};

export default VideoContent;
