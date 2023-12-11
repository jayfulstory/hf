import './App.css';
import Loading from './components/Loading';
import MainPage from './components/MainPage';
import Commercial from './components/Commercial';
import Horizontal from './components/Horizontal';
import Reason from './components/Reason';
import SampleUi from './components/SampleUi';
import VideoContent from './components/VideoContent';
import Ending from './components/Ending';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import imagesLoaded from 'imagesloaded';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleWindowLoad = () => {
    setIsLoading(false);
    window.scrollTo(0, 0);
  };
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    const img = document.querySelectorAll('img');
    const getProgress = instance => {
      // setProgress(Math.round((instance.progressedCount * 100) / img.length));
      console.log(
        'progress',
        Math.round((instance.progressedCount * 100) / img.length)
      );
    };

    imagesLoaded(img).on('progress', getProgress);

    if (document.readyState === 'complete') {
      handleWindowLoad();
    }
    window.addEventListener('load', handleWindowLoad);
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  // useEffect(() => {
  //   console.log(progress);
  // }, [progress]);

  return (
    <div className={`w-screen ${isLoading && 'h-screen'}`}>
      {/* {isLoading && <Loading isLoading={isLoading} />} */}
      <Loading isLoading={isLoading} />
      <MainPage />
      <div className='max-w-full bg-gradient-to-b from-DARK_BLUE to-BLUE'>
        <Commercial />
        <Horizontal />
        <Reason />
        <SampleUi />
        <VideoContent />
        <Ending />
      </div>
      <Footer />
    </div>
  );
}

export default App;
