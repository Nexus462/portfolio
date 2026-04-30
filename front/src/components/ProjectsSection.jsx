export default function ProjectsSection() {
  const projects = [
    {
      title: "Cafe Management System",
      description: "A full-stack web application for managing cafe operations including orders, inventory, and customer management. Built with Node.js, Express, MySQL, and React.",
      tech: ["Node.js", "Express", "MySQL", "React"],
      github: "https://github.com/nexus462",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "E-commerce Web Application",
      description: "A secure online shopping platform with user authentication, product catalog, shopping cart, and payment integration. Focused on scalability and security.",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/nexus462",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio showcasing my projects and skills. Built with React and optimized for performance and user experience.",
      tech: ["React", "Node.js", "MySQL"],
      github: "https://github.com/nexus462",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Python Automation Tool",
      description: "An automation script for data processing and web scraping. Streamlines repetitive tasks and improves workflow efficiency.",
      tech: ["Python", "BeautifulSoup", "Pandas"],
      github: "https://github.com/nexus462",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Cybersecurity Project",
      description: "A security analysis tool for vulnerability assessment and network monitoring. Implements secure coding practices and ethical hacking techniques.",
      tech: ["Python", "Kali Linux", "Wireshark"],
      github: "https://github.com/nexus462",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
    }
  ]

  return (
    <section id="projects">
      <div className="section-title">My Projects</div>
      <div className="section-header">
        <h2>Recent work and personal projects.</h2>
        <p>A collection of projects that demonstrate my skills in full-stack development, system design, and problem-solving.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}>
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.114 2.51.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
