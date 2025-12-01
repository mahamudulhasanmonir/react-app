export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      desc: "Custom, modern & scalable web apps using the latest technologies.",
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, user-centered designs optimized for conversions.",
    },
    {
      title: "Business Automation",
      desc: "Save time & optimize workflows using smart automation tools.",
    },
  ];

  return (
    <section className="py-24 bg-black px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-105 hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-4 text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
