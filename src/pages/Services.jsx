import PageWrapper from "../components/PageWrapper";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive, scalable and modern websites built with high-performance technologies.",
    },
    {
      title: "UI/UX Design",
      desc: "Stunning interfaces designed to improve user experience and increase conversions.",
    },
    {
      title: "Automation Solutions",
      desc: "Save time and reduce errors with customized automation tools.",
    },
    {
      title: "Brand Strategy",
      desc: "Build recognition and trust through a powerful brand identity.",
    },
  ];

  return (
    <PageWrapper>
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
