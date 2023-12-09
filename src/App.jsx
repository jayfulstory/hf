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
  // const [progress, setProgress] = useState(0);

  useEffect(() => {
    const img = [...document.querySelectorAll('img')];

    imagesLoaded(img)
      .on('progress', instance => {
        console.log(Math.round((instance.progressedCount * 100) / img.length));
      })
      .on('always', () => {
        console.log('always');
      })
      .on('done', () => {
        console.log('done');
        setIsLoading(false);
      });
  }, [isLoading]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className='w-screen'>
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
