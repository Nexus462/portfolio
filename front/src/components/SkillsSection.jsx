export default function SkillsSection() {
  const technicalSkills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MySQL", icon: "�️" },
    { name: "Python", icon: "🐍" },
    { name: "Git & GitHub", icon: "�" }
  ]

  const softSkills = [
    { name: "Communication", icon: "💬" },
    { name: "Teamwork", icon: "🤝" },
    { name: "Time Management", icon: "⏰" },
    { name: "Adaptability", icon: "🔄" }
  ]

  const languages = [
    { name: "English", icon: "🇬🇧" },
    { name: "Arabic", icon: "🇸🇦" },
    { name: "Amharic", icon: "🇪🇹" },
    { name: "Tigrinya", level: "(basic speaking)", icon: "💬" }
  ]

  return (
    <section id="skills">
      <div className="section-title">Skills</div>
      <div className="section-header">
        <h2>Technical and personal strengths for modern development teams.</h2>
        <p>Organized skills emphasize technical depth and strong soft skills for collaborative work.</p>
      </div>
      <div className="skill-grid">
        <div className="skill-block">
          <h4>💻 Technical Skills</h4>
          <ul className="skill-list">
            {technicalSkills.map((skill, i) => (
              <li key={i}>
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="skill-block">
          <h4>🌟 Soft Skills</h4>
          <ul className="skill-list">
            {softSkills.map((skill, i) => (
              <li key={i}>
                <span className="skill-icon">{skill.icon}</span>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="skill-block">
          <h4>🌍 Languages</h4>
          <div className="language-list">
            {languages.map((lang, i) => (
              <span key={i} className="language-pill">
                <span className="skill-icon">{lang.icon}</span>
                {lang.name} {lang.level || ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
