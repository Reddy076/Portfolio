import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="blob-bg w-96 h-96 -top-48 -left-48 absolute"></div>
        <div className="blob-bg w-80 h-80 -bottom-40 -right-40 absolute"></div>
        <div className="blob-bg w-72 h-72 top-1/3 -right-32 absolute"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(139, 92, 246) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className={`block mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Hi, I'm <span className="gradient-text">Dasthagiri</span>
            </span>
            <span className={`block transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="gradient-text">Reddy</span>
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            I create <span className="font-semibold text-primary">immersive digital experiences</span> with modern technologies.
            Specializing in <span className="underline decoration-accent">front-end development</span>, I build interfaces that are
            both beautiful and functional.
          </p>
          
          <div className={`pt-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#projects" 
              className="button-neon inline-flex items-center gap-2 group"
            >
              View My Work
              <ArrowDown className="h-5 w-5 group-hover:animate-bounce transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Explore
        </span>
        <ArrowDown className="h-6 w-6 text-primary"/>
      </div>
    </section>
  )
}