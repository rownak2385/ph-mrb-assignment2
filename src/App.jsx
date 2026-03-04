import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-shell">
      <div className="site-board">
        <Navbar />
        <div className="board-content">
          <Banner />
          <MainSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
