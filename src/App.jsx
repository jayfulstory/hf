import './App.css';
import MainPage from './components/MainPage';
import Commercial from './components/Commercial';
import Horizontal from './components/Horizontal';
import Reason from './components/Reason';
import SampleUi from './components/SampleUi';
import VideoContent from './components/VideoContent';
import Ending from './components/Ending';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-screen '>
      <div className='max-w-full bg-[#303560]'>
        <MainPage />
        <Commercial />
        <Horizontal />
        <Reason />
        <SampleUi />
        <VideoContent />
        <Ending />
        <Footer />
      </div>
    </div>
  );
}

export default App;
