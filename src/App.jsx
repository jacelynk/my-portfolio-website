import './styles/global.css';
import Navbar from './components/Navbar';
import './App.css';
import RevealCircle from './components/RevealCircle';
import bgImg from './assets/img/JACELYN A. CARATAO 1.png';
import nameImg from './assets/img/JACELYN A. CARATAO.png';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        width: '100vw',
        background: `url(${bgImg}) center/cover no-repeat fixed`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <RevealCircle />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1.5rem',
        position: 'relative',
        zIndex: 2
      }}>
        <img src={nameImg} alt="Jacelyn A. Caratao" style={{ maxWidth: '90vw', height: 'auto' }} />
      </div>
    </div>
  );
}

export default App;
