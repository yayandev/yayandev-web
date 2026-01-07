import React from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    window.location.href = `mailto:contact@yayandev.com?subject=Project Inquiry: ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  };

  return (
    <section id="contact" className="py-24 relative">
       {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Info */}
          <div>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Let's Build Something <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Extraordinary
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Ready to transform your ideas into reality? We are here to help you grow your business with cutting-edge digital solutions.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Email Us</h4>
                  <p className="text-slate-400">contact@yayandev.com</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-secondary">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Chat WhatsApp</h4>
                  <a href="https://wa.me/6282114742261" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    +62 821 1474 2261
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-lg hover:shadow-primary/25 hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
