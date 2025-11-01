import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Cafiend",
    description: "A full-stack caffeine intake management app using React and Firebase.",
    image: "/Caffiend.png",
    tags: ["React", "Firebase"],
    demoUrl: "https://coffee-tracker-psi.vercel.app/",
    githubUrl: "https://github.com/Reddy076/Coffee-Tracker.git",
  },
  {
    id: 2,
    title: "Netflix",
    description:
      "A streaming service clone with React and CSS.",
    image: "/Netflix.png",
    tags: ["HTML/CSS", "React.js"],
    demoUrl: "https://netflix-zvlg.vercel.app/",
    githubUrl: "https://github.com/Reddy076/Netflix.git",
  },
  {
    id: 3,
    title: "Task-Manager-Pro",
    description:
      "A comprehensive task management application with user authentication and data persistence.",
    image: "/Task_Manager_Pro.png",
    tags: ["HTML/CSS", "React.js"],
    demoUrl: "https://task-manager-omega-rust.vercel.app/",
    githubUrl: "https://github.com/Reddy076/Task-manager.git",
  },
];

export const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.style.display = 'flex';
  };

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden card-3d"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : `translateY(${20 + index * 10}px)`,
                transition: `all 0.5s ease-out ${index * 0.1}s`
              }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary/30 mb-2">{project.title}</div>
                    <div className="text-sm text-primary/50">Project Preview</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300"
                      aria-label="Live Demo"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} className="text-foreground" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors duration-300"
                      aria-label="GitHub Repository"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} className="text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="button-neon inline-flex items-center gap-2"
            target="_blank"
            href="https://github.com/Reddy076"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;