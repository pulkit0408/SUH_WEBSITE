export default function Layout({ children }) {
  return (
    <div
      className="min-h-screen overflow-hidden relative w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      style={{
        background: 'linear-gradient(90deg, rgba(32, 49, 120, 0.90) 0%, rgba(74, 29, 115, 0.90) 50%, rgba(104, 24, 88, 0.90) 100%)'
      }}
    >

      <div className="relative z-10 space-y-8 sm:space-y-12 lg:space-y-16 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}
