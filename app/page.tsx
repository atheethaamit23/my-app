import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">

        {/* HERO SECTION (using external Activitar image) */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://themewagon.github.io/activitar/images/hero_1.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative text-center text-white max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold uppercase">
              Leverage Star Boxing Club
            </h1>

            <p className="mt-4 text-lg text-gray-200">
              Train like a champion. Build strength, discipline, and endurance.
            </p>

            <button className="mt-6 bg-red-600 hover:bg-red-500 px-6 py-3 font-semibold uppercase">
              Join Now
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

            <div className="bg-white p-8 shadow">
              <h3 className="font-bold text-xl mb-2">Boxing Training</h3>
              <p className="text-gray-600">
                Professional boxing coaching for all levels.
              </p>
            </div>

            <div className="bg-white p-8 shadow">
              <h3 className="font-bold text-xl mb-2">Fitness Programs</h3>
              <p className="text-gray-600">
                Strength and conditioning workouts.
              </p>
            </div>

            <div className="bg-white p-8 shadow">
              <h3 className="font-bold text-xl mb-2">Personal Coaching</h3>
              <p className="text-gray-600">
                One-on-one training for faster results.
              </p>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6 bg-black text-white text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Leverage Star Boxing Club is a premium training facility focused on
            boxing excellence, fitness transformation, and discipline building in Dubai.
          </p>
        </section>

        {/* CTA */}
        <section className="py-24 bg-red-600 text-white text-center">
          <h2 className="text-4xl font-bold uppercase">
            Start Your Training Today
          </h2>
          <p className="mt-4">Join Dubai’s growing boxing community</p>

          <button className="mt-6 bg-white text-red-600 px-6 py-3 font-bold uppercase">
            Book Free Trial
          </button>
        </section>

        {/* CONTACT */}
        <section className="py-20 bg-black text-white text-center">
          <h2 className="text-3xl font-bold mb-6 uppercase">Contact</h2>

          <p className="text-gray-300">
            First Floor, Blue Wave Tower - Office 9<br />
            Al Ain - Dubai Rd - Wadi Al Safa 5<br />
            Dubai, UAE
          </p>

          <p className="mt-4 text-gray-400">
            +971 52 745 0997
          </p>
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Leverage Star Boxing Club
        </footer>

      </main>
    </>
  );
}
