import Navbar from './components/Navbar.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="about">
          <h2>Hello, I’m Jacelyn 👋</h2>
          <p>Welcome to my portfolio website!</p>
        </section>
      </main>
    </div>
  );

<main>
  <section id="about">
    <h2>About Me</h2>
    <p>I’m a front-end developer specializing in React and UI/UX design.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <p>Here are a few projects I've worked on recently...</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email me at: jacelyn@example.com</p>
  </section>
</main>

}

export default App;
