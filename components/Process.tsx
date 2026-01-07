import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: 'Research & Discovery',
    description: 'Kami menganalisis kebutuhan, target audiens, dan kompetitor untuk merancang strategi yang tepat.',
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'Membuat wireframe dan desain visual (UI/UX) yang modern, intuitif, dan sesuai brand Anda.',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Menulis kode yang bersih dan performa tinggi menggunakan teknologi terbaru.',
  },
  {
    icon: Rocket,
    title: 'Launch & Grow',
    description: 'Deployment, testing, dan optimasi. Kami memastikan produk Anda siap terbang tinggi.',
  },
];

const ProcessStepCard: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="relative flex flex-col items-center text-center p-6 z-10"
  >
    <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center mb-6 shadow-xl shadow-primary/5 group hover:scale-110 transition-transform duration-300">
      <step.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
    </div>
    <h3 className="text-xl font-heading font-bold text-white mb-3">{step.title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
    
    {/* Connector Line for Desktop */}
    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 transform translate-x-1/2" />
  </motion.div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-wider uppercase text-sm"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mt-2"
          >
            Our Workflow
          </motion.h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {processSteps.map((step, index) => (
            <ProcessStepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
