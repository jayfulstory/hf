import './App.css';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
// import Navbar from './components/Navbar';
import Commercial from './components/Commercial';
import Horizontal from './components/Horizontal';
import Reason from './components/Reason';
import SampleUi from './components/SampleUi';
import VideoContent from './components/VideoContent';
import Ending from './components/Ending';

function App() {
  return (
    <div className='w-screen '>
      {/* <Navbar /> */}
      {/* <div className='max-w-full bg-gradient-to-b from-[#0f1025] via-[#0f1025] to-[#0f1025]'> */}
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
