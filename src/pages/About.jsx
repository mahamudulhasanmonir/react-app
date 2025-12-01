import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl font-semibold mb-6">About Us</h1>
          <p className="text-gray-300 leading-relaxed">
            We are a next-generation technology agency that delivers impactful
            solutions for businesses worldwide. Our mission is to help companies
            grow through innovative design, seamless development and strategic
            digital transformation.
          </p>
        </div>
        
        <div className="h-64 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-2xl shadow-xl"></div>
      </div>
    </PageWrapper>
  );
}
