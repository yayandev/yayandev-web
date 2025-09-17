
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: 'YayanDev mengubah konsep kami menjadi aplikasi yang luar biasa. Profesionalisme dan keahlian mereka patut diacungi jempol. Sangat direkomendasikan!',
    name: 'Andi Pratama',
    title: 'CEO, Startup Maju',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: 'Website baru kami tidak hanya terlihat fantastis, tapi juga sangat cepat. Tim YayanDev sangat responsif dan mudah diajak bekerja sama.',
    name: 'Citra Lestari',
    title: 'Marketing Manager, Brand Lokal',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: 'Dari desain UI/UX hingga peluncuran, prosesnya berjalan mulus. Mereka benar-benar mengerti kebutuhan kami dan memberikan hasil yang melebihi ekspektasi.',
    name: 'Budi Santoso',
    title: 'Founder, Tech Innovators',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const Rating: React.FC = () => (
    <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="h-5 w-5" />)}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-secondary p-8 rounded-lg border border-gray-700/50 flex flex-col h-full">
        <Rating />
        <p className="text-gray-text italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4" />
            <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-text">{testimonial.title}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Apa Kata Klien Kami</h2>
          <p className="text-lg text-gray-text mt-2">Kepuasan klien adalah prioritas utama kami.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
