import suImg from '../assets/su.png'

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-card">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-tag">Hello I'm</div>
            <h1 className="hero-title">Sumairaa Yimam</h1>
            <p className="hero-subtitle">Software Engineering Student</p>
            <ul className="info-list">
              <li className="info-item"><strong>Email:</strong> sumairaayimam@gmail.com</li>
              <li className="info-item"><strong>Phone:</strong> 0946200026</li>
              <li className="info-item"><strong>Location:</strong> Dessie, Ethiopia</li>
            </ul>
            <div className="button-row">
              <a className="button button-primary" href="https://github.com/nexus462" target="_blank" rel="noreferrer">View My GitHub</a>
              <a className="button button-secondary" href="/Sumairaa_CV_A4.pdf" target="_blank" download="Sumairaa_CV_A4.pdf">Download CV</a>
            </div>
            <div className="social-row">
              <span className="social-label">Connect</span>
              <a className="social-link" href="mailto:sumairaayimam@gmail.com" title="Email">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1 0.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 4.5l-8 5-8-5V6l8 5 8-5v2.5z"/>
                </svg>
              </a>
              <a className="social-link" href="https://github.com/nexus462" target="_blank" rel="noreferrer" title="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.114 2.51.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              <a className="social-link" href="https://instagram.com/su.mi_3539" target="_blank" rel="noreferrer" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A4.5 4.5 0 007.5 12 4.5 4.5 0 0012 16.5 4.5 4.5 0 0016.5 12 4.5 4.5 0 0012 7.5zm0 2A2.5 2.5 0 0114.5 12 2.5 2.5 0 0112 14.5 2.5 2.5 0 019.5 12 2.5 2.5 0 0112 9.5zm4.75-2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                </svg>
              </a>
              <a className="social-link" href="https://t.me/sumi_46" target="_blank" rel="noreferrer" title="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.5 3.5a1 1 0 00-1.3-.2L3.8 10.2a1 1 0 00.01 1.8l3.9 1.5 1.5 5.1c.2.7.9 1.2 1.7 1s1.1-.9.9-1.7l-.9-4.1 4.4 3.2c.6.4 1.5.1 1.8-.6l3.5-13.3c.2-.6-.1-1.2-.7-1.4zM8.1 12.7l-.9-3.5 10.9-5.2-7.6 8.7-1.2-.5z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-avatar">
              <img src={suImg} alt="Sumairaa Yimam profile" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
