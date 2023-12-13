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

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handleWindowLoad = () => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  };
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (document.readyState === 'complete') {
      console.log(123);
      handleWindowLoad();
      window.scrollTo(0, 0);
    }
    console.log(123);
    window.addEventListener('load', handleWindowLoad);
    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };
  }, []);

  return (
    <div className={`w-screen ${isLoading && 'h-screen'}`}>
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
