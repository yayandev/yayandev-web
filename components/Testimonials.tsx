import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string; // Using real external placeholder or import
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Working with YayanDev was a game-changer. The new website increased our conversion rate by 40% in just two months.",
    name: "Andi Pratama",
    title: "CEO, TechFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi",
    rating: 5
  },
  {
    quote: "Highly professional and skilled. They understood our brand vision perfectly and delivered a masterpiece.",
    name: "Sarah Wijaya",
    title: "Marketing Director, Luxora",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5
  },
  {
    quote: "Support after launch has been incredible. Any issues are resolved within minutes. Truly a reliable partner.",
    name: "Budi Santoso",
    title: "Founder, StartUpIndo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi",
    rating: 5
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-white/5 border border-white/5 p-8 rounded-2xl relative hover:bg-white/10 transition-colors"
  >
    <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
    
    <div className="flex gap-1 mb-6 text-yellow-400">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} fill="currentColor" size={18} />
      ))}
    </div>

    <p className="text-slate-300 text-lg italic mb-8 leading-relaxed">
      "{testimonial.quote}"
    </p>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-slate-700 overflow-hidden">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="text-white font-bold">{testimonial.name}</h4>
        <p className="text-slate-500 text-sm">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Client Stories</h2>
          <p className="text-lg text-slate-400">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
