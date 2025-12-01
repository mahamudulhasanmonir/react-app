export default function Hero() {
  return (
<section className="relative h-screen animated-gradient flex items-center justify-center text-center px-6">
  <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Empowering Businesses with
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            Next-Gen Digital Solutions
          </span>
        </h1>

        <p className="mt-6 text-gray-300 max-w-xl mx-auto">
          We build innovative, scalable and high-performance solutions that
          transform your business digitally.
        </p>

        <button className="mt-8 px-8 py-3 rounded-xl text-lg font-semibold text-black bg-white hover:bg-gray-200 transition-all shadow-lg">
          Get Started
        </button>
      </div>
    </section>
  );
}



