import './App.css';
import Contents from './components/Contents';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Commercial from './components/contents/Commercial';
import Horizontal from './components/contents/Horizontal';

function App() {
  return (
    <div className='w-screen'>
      <Navbar />
      <MainPage />
      <Commercial />
      <Horizontal />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
