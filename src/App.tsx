import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div className="font-primary text-gray-900 bg-white min-h-screen">
      {/* Navigation Component */}
      <Navbar />

      {/* Main content with section targets for scroll spy testing */}
      <main className="pt-[72px]">
        {/* Placeholder sections to verify Scroll Spy */}
        <section
          id="product"
          className="container min-h-screen flex items-center justify-center border-b border-gray-100"
        >
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold font-secondary">Product</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              One operational layer that quietly connects every part of your restaurant.
            </p>
          </div>
        </section>

        <section
          id="pricing"
          className="container min-h-screen flex items-center justify-center border-b border-gray-100"
        >
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold font-secondary">Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Simple, transparent pricing built around the size of your restaurant operations.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="container min-h-screen flex items-center justify-center"
        >
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold font-secondary">About</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Steward is built by operational specialists who understand the daily rhythm of hospitality.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
