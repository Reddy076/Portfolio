import StarBackground from "../Components/StarBackground";
import ThemeToggle from "../Components/ThemeToggle";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import SkillsSection from "../Components/SkillsSection";
import ProjectsSection from "../Components/ProjectsSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {
        /* Theme Toggle */
        <ThemeToggle />
      }
      {
        /* Background Effects */
        <StarBackground/>

      }

      {
        /* Navbar*/
        <Navbar/>
      }

      {
        /* Main Content */
      }

      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
      </main>

    </div>
  )
}
