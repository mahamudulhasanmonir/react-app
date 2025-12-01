import PageWrapper from "../components/PageWrapper";

export default function Contact() {
  return (
    <PageWrapper>
      <h1 className="text-4xl font-semibold text-center mb-10">
        Contact Us
      </h1>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-indigo-500"
        ></textarea>

        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition-all">
          Send Message
        </button>
      </form>
    </PageWrapper>
  );
}
