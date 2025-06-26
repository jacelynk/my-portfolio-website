import './styles/global.css';
import Navbar from './components/Navbar';
import './App.css';
import RevealCircle from './components/RevealCircle';
import bgImg from './assets/img/JACELYN A. CARATAO (2).png';
import nameImg from './assets/img/JACELYN A. CARATAO.png';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', width: '100vw', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      {/* Background image directly below navbar, no space above, fits screen width */}
      <div style={{ position: 'relative', width: '100vw', height: 'auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', margin: 0, padding: 0, overflow: 'hidden', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <RevealCircle />
          <img src={nameImg} alt="Jacelyn A. Caratao" style={{ maxWidth: '340px', height: 'auto', margin: '10px 0 4px 0' }} />
          <div style={{ color: '#b3005e', fontWeight: 500, fontSize: '1.1rem', marginBottom: '8px' }}>
            Hi I'm Jacelyn. A UI/UX Developer and Graphic Artist.
          </div>
        </div>
        <img 
          src={bgImg} 
          alt="Background Clouds" 
          style={{
            display: 'block',
            position: 'relative',
            top: 0,
            left: 0,
            width: '100vw',
            height: 'auto',
            objectFit: 'contain',
            maxWidth: '100vw',
            pointerEvents: 'none',
            userSelect: 'none',
            opacity: 1
          }}
        />
      </div>
      {/* Hero Section */}
      <section style={{
        minHeight: '540px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '0',
        paddingBottom: '1.2rem',
        marginTop: '0',
        position: 'relative',
        textAlign: 'center',
        zIndex: 1,
      }}>
        {/* Button group just below the image */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.7rem', marginTop: '0.7rem' }}>
          <button className="bago-btn">About</button>
          <button className="bago-btn">Certs</button>
          <button className="bago-btn">Projects</button>
          <button className="bago-btn">Art Works</button>
          <button className="bago-btn">Skills</button>
          <button className="bago-btn">Contact</button>
        </div>
      </section>
      {/* White Section */}
      <section style={{
        background: '#fff',
        padding: '2.5rem 1rem',
        borderRadius: '24px',
        maxWidth: '900px',
        margin: '0 auto 2.5rem auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        marginTop: '-2.5rem', // overlap hero
        zIndex: 2,
        position: 'relative',
      }}>
        <h2 style={{ color: '#b3005e', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', fontSize: '1.5rem' }}>
          Hi I'm Jacelyn. A UI/UX Developer and Graphic Artist.
        </h2>
        <p style={{ color: '#b3005e', textAlign: 'center', marginBottom: '2rem', fontWeight: 500 }}>
          Motivated 3rd-year Computer Science student studying in University of Caloocan City - North Campus with strong foundations in programming and UI/UX design. Actively involved in campus tech organizations and eager to apply problem-solving and teamwork skills in a hands-on internship environment.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <span style={{ color: '#b3005e', fontSize: '2rem', background: '#fff', borderRadius: '8px', padding: '0.3em 0.5em' }}>🌐</span>
          <span style={{ color: '#b3005e', fontSize: '2rem', background: '#fff', borderRadius: '8px', padding: '0.3em 0.5em' }}>💼</span>
          <span style={{ color: '#b3005e', fontSize: '2rem', background: '#fff', borderRadius: '8px', padding: '0.3em 0.5em' }}>📌</span>
          <span style={{ color: '#b3005e', fontSize: '2rem', background: '#fff', borderRadius: '8px', padding: '0.3em 0.5em' }}>🎨</span>
        </div>
        <h3 style={{ color: '#b3005e', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          Campus Involvement
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <div className="bago-btn" style={{ minWidth: 180, textAlign: 'center' }}>SKILLS DEVELOPED</div>
          <div className="bago-btn" style={{ minWidth: 180, textAlign: 'center' }}>SUBJECTS TAKEN</div>
          <div className="bago-btn" style={{ minWidth: 180, textAlign: 'center' }}>ORGANIZATIONS</div>
        </div>
      </section>
    </div>
  );
}

export default App;
