export default function Hero() {
  return (
<section className="relative h-screen bg-black flex items-center justify-center px-6">

  {/* floating orb 1 */}
  <div className="orb w-72 h-72 bg-indigo-600 rounded-full absolute top-20 left-10"></div>

  {/* floating orb 2 */}
  <div className="orb w-80 h-80 bg-pink-600 rounded-full absolute bottom-16 right-20 animation-delay-3000"></div>

  {/* content */}
  <div className="relative z-10 text-center max-w-3xl">
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
