
import React from 'react';
import { Code, Smartphone, Palette, ShieldCheck } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const servicesData: Service[] = [
  {
    icon: Code,
    title: 'Pengembangan Website',
    description: 'Menciptakan website yang cepat, responsif, dan aman untuk menjangkau audiens Anda secara efektif.',
  },
  {
    icon: Smartphone,
    title: 'Pengembangan Aplikasi Mobile',
    description: 'Aplikasi native dan cross-platform yang memberikan pengalaman pengguna yang mulus dan tak terlupakan.',
  },
  {
    icon: Palette,
    title: 'Desain UI/UX',
    description: 'Desain yang intuitif dan indah yang membuat produk Anda menyenangkan untuk digunakan oleh pengguna.',
  },
  {
    icon: ShieldCheck,
    title: 'Perawatan & Dukungan',
    description: 'Layanan pemeliharaan berkelanjutan untuk memastikan website dan aplikasi Anda selalu optimal dan aman.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-secondary p-8 rounded-xl border border-gray-700/50 hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
    <div className="mb-4">
      <service.icon className="h-12 w-12 text-accent" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-gray-text">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Profesional Kami</h2>
          <p className="text-lg text-gray-text mt-2">Solusi digital untuk setiap kebutuhan bisnis Anda.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
