import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white font-sans">

        {/* HERO */}
        <section className="relative flex items-center justify-center text-center min-h-screen px-6 bg-[url('/boxing-bg.jpg')] bg-cover bg-center">
          
          {/* overlay */}
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Leverage Star<br />
              <span className="text-red-500">Boxing Club</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
              Train like a champion with elite boxing coaching, strength training,
              and professional fight preparation in Dubai.
            </p>

            <div className="mt-8 flex gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-full font-semibold transition">
                Join Free Trial
              </button>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                View Programs
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-24 px-6 bg-gray-950 text-center">
          <h2 className="text-4xl font-bold mb-6">About the Club</h2>
          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
            Leverage Star Boxing Club is a premium training facility in Dubai focused
            on boxing excellence, fitness transformation, and discipline building.
            We train beginners, amateurs, and competitive fighters with world-class coaching.
          </p>
        </section>

        {/* PROGRAMS */}
        <section className="py-24 px-6 bg-black text-center">
          <h2 className="text-4xl font-bold mb-12">Training Programs</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {[
              {
                title: "Boxing Fundamentals",
                desc: "Learn footwork, stance, punches, and defense techniques."
              },
              {
                title: "Strength & Conditioning",
                desc: "Build endurance, speed, and explosive power."
              },
              {
                title: "Pro Fight Camp",
                desc: "Advanced training for competitive boxing athletes."
              }
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-xl hover:scale-105 transition">
                <h3 className="text-xl font-bold text-red-500 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}

          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 px-6 bg-gray-950 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Leverage Star?</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-gray-300">
            <div>
              <h4 className="text-xl font-semibold mb-2">Elite Coaches</h4>
              <p>Experienced fighters and certified trainers.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">Modern Gym</h4>
              <p>Professional boxing ring & advanced equipment.</p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2">All Levels</h4>
              <p>From beginners to competitive athletes.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-red-600 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Body?
          </h2>
          <p className="text-white/90 mb-6">
            Join Leverage Star Boxing Club today and start your journey.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Book Free Trial
          </button>
        </section>

        {/* CONTACT */}
        <section className="py-20 px-6 bg-black text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <p className="text-gray-300 leading-relaxed">
            First Floor, Blue Wave Tower - Office 9<br />
            Al Ain - Dubai Rd - Wadi Al Safa 5<br />
            Dubai, United Arab Emirates
          </p>

          <p className="mt-4 text-gray-400">
            📞 +971 52 745 0997
          </p>
        </section>

        {/* FOOTER */}
        <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} Leverage Star Boxing Club. All rights reserved.
        </footer>

      </main>
    </>
  );
}
