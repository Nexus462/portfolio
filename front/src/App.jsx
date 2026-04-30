import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
        <div className="footer">Designed for a clean, modern portfolio experience.</div>
      </main>
    </div>
  )
}
