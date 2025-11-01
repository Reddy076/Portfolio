import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Vue.js", level: 70, category: "frontend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Webpack", level: 70, category: "tools" },
];

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend" },
  { id: "tools", name: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    // Trigger animation when component mounts or category changes
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="bg-background/30 p-6 rounded-xl border-0 outline-none"
              style={{ 
                transition: 'all 0.5s ease-out',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : `translateY(${20 + index * 5}px)`,
                transitionDelay: `${index * 100}ms`,
                boxShadow: 'none'
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="w-full bg-secondary/30 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-primary to-accent h-3 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;