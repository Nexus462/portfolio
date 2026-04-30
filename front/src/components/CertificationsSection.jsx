export default function CertificationsSection() {
  const certifications = [
    {
      title: "Web Development Certification",
      issuer: "Company Name",
      date: "2024",
      description: "Completed comprehensive web development training covering HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Company Name",
      date: "2024",
      description: "Gained knowledge in network security, ethical hacking, and secure coding practices."
    },
    {
      title: "Full Stack Development",
      issuer: "Company Name",
      date: "2023",
      description: "Mastered full-stack development with Node.js, Express, React, and database management."
    }
  ]

  return (
    <section id="certifications">
      <div className="section-title">Certifications</div>
      <div className="section-header">
        <h2>Professional certifications and achievements.</h2>
        <p>Recognized credentials from leading companies in web development and cybersecurity.</p>
      </div>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h3>{cert.title}</h3>
            <div className="cert-meta">
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
