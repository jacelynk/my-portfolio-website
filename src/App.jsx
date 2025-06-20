import './styles/global.css';
import Navbar from './components/Navbar';
import './App.css';
import RevealCircle from './components/RevealCircle';
import bgImg from './assets/img/bago.png';
import nameImg from './assets/img/JACELYN A. CARATAO.png';

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '105vh',
        width: '99vw',
        background: `url(${bgImg}) center center/cover no-repeat fixed`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <div style={{ marginLeft: '3rem', marginTop: '-1rem' }}>
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
    </div>
  );
}

export default App;
