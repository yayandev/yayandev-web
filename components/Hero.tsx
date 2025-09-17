import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-primary text-white py-24 md:py-32 lg:py-40"
    >
      {/* Layer dekorasi */}
      <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-4000"></div>

      {/* Konten utama */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Transformasi Ide Anda Menjadi{" "}
          <span className="text-accent">Realitas Digital</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-text max-w-3xl mx-auto mb-8">
          Kami adalah partner digital Anda dalam membangun website dan aplikasi
          mobile yang modern, cepat, dan intuitif untuk mengembangkan bisnis
          Anda.
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          >
            Mulai Proyek Anda <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          {/* Tombol WhatsApp */}
          <a
            href="https://wa.me/6282114742261?text=Halo%20YayanDev%2C%20saya%20ingin%20konsultasi%20tentang%20pembuatan%20website%20%2F%20aplikasi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
          >
            Chat WhatsApp
            <MessageCircle className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
