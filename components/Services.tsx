import React from 'react';
import { Code, Smartphone, Palette, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  className?: string; // For Bento grid spanning
}

const servicesData: Service[] = [
  {
    icon: Code,
    title: 'Pengembangan Website',
    description: 'Toko online, landing page, atau sistem informasi perusahaan. Kami membangun dengan teknologi modern (React, Next.js, Laravel) untuk performa maksimal.',
    className: 'md:col-span-2 row-span-2',
  },
  {
    icon: Smartphone,
    title: 'Aplikasi Mobile',
    description: 'Transformasi bisnis ke genggaman. Pengembangan iOS & Android dengan React Native.',
    className: 'md:col-span-1',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Desain interface yang memukau dan experience yang memudahkan pengguna.',
    className: 'md:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    description: 'Keamanan, backup, dan update berkala. Kami menjaga sistem Anda tetap hidup 24/7.',
    className: 'md:col-span-3 lg:col-span-3',
  },
];

const ServiceCard: React.FC<{ service: Service, index: number }> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 ${service.className}`}
  >
    {/* Gradient Orb Effect */}
    <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-500" />
    
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-white group-hover:bg-primary group-hover:text-white">
          <service.icon size={28} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
        <p className="text-slate-400 leading-relaxed max-w-xl">{service.description}</p>
      </div>

      <div className="mt-8 flex items-center text-sm font-semibold text-primary group-hover:text-white transition-colors">
        Pelajari Selengkapnya <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
          >
            Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Profesional</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             viewport={{ once: true }}
            className="text-lg text-slate-400"
          >
            Kami menyediakan solusi end-to-end untuk kebutuhan digital bisnis anda, mulai dari perencanaan hingga pemeliharaan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
