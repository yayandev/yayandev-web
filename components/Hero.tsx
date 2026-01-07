import React from "react";
import { ArrowRight, MessageCircle, Code2, Rocket, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Glows are handled in App.tsx generally, but we can add specific ones here if needed */}

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for new projects
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
                Membangun <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
                  Solusi Digital
                </span>{" "}
                <br />
                Masa Depan
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Kami membantu bisnis Anda tumbuh dengan website modern, aplikasi mobile responsif, dan sistem yang handal. Fokus pada performa, estetika, dan konversi.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                  Mulai Konsultasi <ArrowRight size={20} />
                </a>
                <a
                  href="#portfolio"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Lihat Portfolio
                </a>
              </div>

              {/* Stats / Trust Badges */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-white/5 pt-8">
                <div>
                  <h4 className="text-2xl font-bold text-white">50+</h4>
                  <p className="text-slate-500 text-sm">Proyek Selesai</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">100%</h4>
                  <p className="text-slate-500 text-sm">Kepuasan Klien</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">24/7</h4>
                  <p className="text-slate-500 text-sm">Support</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual Content (Right Side) */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative hidden md:block">
             <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
             >
                {/* Abstract Code Window Visual */}
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-auto text-xs text-slate-500 font-mono">App.tsx</div>
                  </div>
                  
                  <div className="space-y-3 font-mono text-sm">
                    <div className="flex gap-2">
                       <span className="text-purple-400">const</span>
                       <span className="text-yellow-200">BoostBusiness</span>
                       <span className="text-white">=</span>
                       <span className="text-blue-400">async</span>
                       <span className="text-white">()</span>
                       <span className="text-purple-400">=&gt;</span>
                       <span className="text-white">{`{`}</span>
                    </div>
                    <div className="pl-4 flex gap-2">
                      <span className="text-purple-400">await</span>
                      <span className="text-green-400">YayanDev</span>
                      <span className="text-white">.</span>
                      <span className="text-blue-300">create</span>
                      <span className="text-white">({`{`}</span>
                    </div>
                    <div className="pl-8 text-slate-400">
                       web: <span className="text-orange-300">'Professional'</span>,<br/>
                       mobile: <span className="text-orange-300">'Responsive'</span>,<br/>
                       performance: <span className="text-orange-300">'Fast'</span>,
                    </div>
                    <div className="pl-4 text-white">{`});`}</div>
                    <div className="pl-4 flex gap-2">
                       <span className="text-purple-400">return</span>
                       <span className="text-green-300">"Success"</span>
                       <span className="text-white">;</span>
                    </div>
                    <div className="text-white">{`}`}</div>
                  </div>

                  {/* Floating Elements on top of code window */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 p-4 bg-background border border-white/10 rounded-xl shadow-xl flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                      <Rocket size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Growth</div>
                      <div className="font-bold text-white">+150%</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-8 -left-8 p-4 bg-background border border-white/10 rounded-xl shadow-xl flex items-center gap-3"
                  >
                     <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <Globe size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Global Reach</div>
                      <div className="font-bold text-white">Unlimited</div>
                    </div>
                  </motion.div>
                </div>
             </motion.div>

             {/* Background Blob behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
