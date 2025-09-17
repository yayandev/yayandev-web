
import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

interface ProcessStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: '1. Riset & Penemuan',
    description: 'Kami memulai dengan memahami visi, tujuan, dan target audiens Anda secara mendalam.',
  },
  {
    icon: PenTool,
    title: '2. Desain & Prototyping',
    description: 'Membuat wireframe dan mockup interaktif untuk memvisualisasikan produk akhir.',
  },
  {
    icon: Code,
    title: '3. Pengembangan',
    description: 'Mengubah desain menjadi kode yang bersih, efisien, dan dapat diskalakan.',
  },
  {
    icon: Rocket,
    title: '4. Peluncuran & Optimalisasi',
    description: 'Men-deploy produk Anda dan terus memantau performa untuk perbaikan berkelanjutan.',
  },
];

const ProcessStepCard: React.FC<{ step: ProcessStep }> = ({ step }) => (
  <div className="text-center p-6">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary border-2 border-accent mx-auto mb-4">
      <step.icon className="h-10 w-10 text-accent" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
    <p className="text-gray-text">{step.description}</p>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proses Kerja Kami</h2>
          <p className="text-lg text-gray-text mt-2">Pendekatan terstruktur untuk hasil yang maksimal.</p>
        </div>
        <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
                <ProcessStepCard key={index} step={step} />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
