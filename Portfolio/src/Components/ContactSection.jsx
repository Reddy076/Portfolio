import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/Hooks/use-toast";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 15% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 30%), 
                            radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 30%)`,
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'slide-in-left' : ''}`}>
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 glass p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:mulachinna102@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mulachinna102@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 glass p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+91 6305111737"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 6305111737
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 glass p-4 rounded-lg">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Proddatur, Kadapa
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <Linkedin className="text-foreground" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <Twitter className="text-foreground" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <Instagram className="text-foreground" />
                </a>
                <a href="#" target="_blank" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors duration-300">
                  <Twitch className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`glass p-8 rounded-xl transition-all duration-700 delay-300 ${isVisible ? 'slide-in-right' : ''}`}
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Dasthagiri Reddy...."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="mulachinna102@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "button-neon w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;