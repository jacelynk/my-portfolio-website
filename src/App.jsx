import './styles/global.css';
import Navbar from './components/Navbar';
import './App.css';
import RevealCircle from './components/RevealCircle';
import bgImg from './assets/img/JACELYN A. CARATAO (2).png';
import nameImg from './assets/img/JACELYN A. CARATAO.png';
import { BorderBeam } from './components/BorderBeam';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', width: '100vw', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Navbar />
      {/* Background image directly below navbar, no space above, fits screen width */}
      <div style={{ position: 'relative', width: '100vw', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, padding: 0, overflow: 'hidden' }}>
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
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
          <RevealCircle />
        </div>
      </div>
      {/* Hero Section */}
      <section style={{
        minHeight: '540px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '0',
        paddingBottom: '2.5rem',
        marginTop: '0',
        position: 'relative',
        textAlign: 'center',
        zIndex: 1,
      }}>
        {/* Move name image, intro text, and buttons up by 45% */}
        <div style={{ marginTop: '-45%' }}>
          <img src={nameImg} alt="Jacelyn A. Caratao" style={{ maxWidth: '420px', width: '90vw', height: 'auto', margin: '1.2rem 0 0.5rem 0' }} />
          <div style={{ color: '#b3005e', fontWeight: 500, fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            Hi I'm Jacelyn. A UI/UX Developer and Graphic Artist.
          </div>
          {/* Button group just below the intro text, bigger buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.2rem', marginTop: '5%' }}>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>About</button>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>Certs</button>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>Projects</button>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>Art Works</button>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>Skills</button>
            <button className="bago-btn" style={{ padding: '20px 36px', fontSize: '1.15rem' }}>Contact</button>
          </div>
        </div>
      </section>
      {/* White Section with BorderBeam */}
      <div className="relative" style={{ marginTop: '-30%', borderRadius: '24px', overflow: 'visible', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        <section style={{
          background: '#fff',
          padding: '2.5rem 1rem',
          borderRadius: '24px',
          width: '100%',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          zIndex: 2,
          position: 'relative',
        }}>
          <BorderBeam className="rounded-[24px]" borderWidth={2} colorFrom="#ff69b4" colorTo="#ffb6e6" />
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
    </div>
  );
}

export default App;
