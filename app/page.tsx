import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">

        {/* HERO SECTION */}
        <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-[url('/boxing-bg.jpg')] bg-cover bg-center">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Leverage Star Boxing Club
          </h1>
          <p className="text-lg mb-6 max-w-2xl text-gray-200">
            Train like a champion. Build strength, discipline, and confidence with
            professional boxing coaching in Dubai.
          </p>
          <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-500 transition font-semibold">
            Join Free Trial Class
          </button>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 text-center bg-gray-900">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Leverage Star Boxing Club is a premium boxing and fitness training center
            located in Dubai. We help beginners, amateurs, and professional fighters
            improve technique, endurance, and overall fitness under expert coaching.
          </p>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-6 bg-black text-center">
          <h2 className="text-3xl font-semibold mb-12">Our Training Programs</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-900 rounded">
              <h3 className="text-xl font-bold mb-3">Boxing Fundamentals</h3>
              <p className="text-gray-400">
                Learn stance, footwork, punches, and defensive techniques.
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded">
              <h3 className="text-xl font-bold mb-3">Fitness & Conditioning</h3>
              <p className="text-gray-400">
                High-intensity workouts to build endurance and strength.
              </p>
            </div>

            <div className="p-6 bg-gray-900 rounded">
              <h3 className="text-xl font-bold mb-3">Pro Fight Training</h3>
              <p className="text-gray-400">
                Advanced coaching for competitive boxing athletes.
              </p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 px-6 text-center bg-gray-900">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Us?</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-gray-300">
            <div>
              <h4 className="font-bold mb-2">Professional Coaches</h4>
              <p>Experienced trainers with real fight backgrounds.</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">Modern Facility</h4>
              <p>Fully equipped boxing gym with premium training gear.</p>
            </div>

            <div>
              <h4 className="font-bold mb-2">All Levels Welcome</h4>
              <p>From beginners to pro fighters, everyone is welcome.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-red-600 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your Boxing Journey Today
          </h2>
          <p className="mb-6">
            Book your free trial session and train with professionals.
          </p>
          <button className="bg-white text-red-600 px-6 py-3 rounded font-semibold">
            Book Trial Class
          </button>
        </section>

        {/* CONTACT */}
        <section className="py-16 px-6 bg-black text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">
            First Floor, Blue Wave Tower - Office 9<br />
            Al Ain - Dubai Rd - Wadi Al Safa 5<br />
            Dubai, United Arab Emirates
          </p>
          <p className="mt-4 text-gray-400">
            Phone: +971 52 745 0997
          </p>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
          © {new Date().getFullYear()} Leverage Star Boxing Club. All rights reserved.
        </footer>

      </main>
    </>
  );
}
