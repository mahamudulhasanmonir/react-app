export default function PageWrapper({ children }) {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-black text-white px-6">
      {children}
    </div>
  );
}
