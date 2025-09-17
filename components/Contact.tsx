import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    window.location.href =
      `mailto:${email}?subject=Mari Wujudkan Ide Anda&body=Nama: ${name}%0A%0AMessage: ${message}`.replace(
        /\s/g,
        "%20"
      );
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-secondary rounded-xl p-8 md:p-12 border border-gray-700/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Mari Wujudkan Ide Anda
            </h2>
            <p className="text-lg text-gray-text mt-2">
              Hubungi kami untuk konsultasi gratis. Kami siap membantu Anda
              membangun proyek digital berikutnya.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-text mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-text mb-2"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-text mb-2"
              >
                Pesan Anda
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-primary border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Jelaskan kebutuhan proyek Anda di sini..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
