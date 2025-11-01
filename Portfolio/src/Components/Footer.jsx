import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative mt-12 pt-8">
      <div className="container max-w-5xl mx-auto">
        <div className="glass rounded-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="text-foreground">Dasthagiri Reddy</span>. All rights reserved.
          </p>
          <a
            href="#hero"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;