export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <p className="hero-small">Hello, I'm</p>
        <h1>Safa Kourdi</h1>
        <h2>Front-End Developer</h2>
        <p>
          Informatics Engineering graduate from Homs University. I build
          responsive, user-friendly web apps with React and JavaScript.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a
            href="https://github.com/Safa-Kourdi"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
