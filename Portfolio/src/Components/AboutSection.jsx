import { Briefcase, Code, User } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'slide-in-left' : ''}`}>
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-muted-foreground">
              A highly motivated and results-driven web developer with a strong
              passion for creating exceptional user experiences. Skilled in
              JavaScript, React, and other modern web technologies. A quick
              learner and a team player with excellent communication skills.
            </p>

            <p className="text-muted-foreground">
              Experienced in building responsive and user-friendly websites using
              the latest web technologies. Adept at collaborating with cross-functional
              teams to deliver high-quality results on time. Committed to continuous
              learning and staying up-to-date with the latest industry trends and
              best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="button-neon">
                Get In Touch
              </a>

              <a
                href="Dasthagiri_Reddy.pdf"
                download="Dasthagiri_Reddy.pdf"
                className="button-outline"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className={`grid grid-cols-1 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'slide-in-right' : ''}`}>
            <div className="glass p-6 card-3d">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass p-6 card-3d">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Developing effective solutions to complex problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass p-6 card-3d">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;