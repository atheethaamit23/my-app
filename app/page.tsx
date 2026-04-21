import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-white text-black">

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center bg-[url('/assets/hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative text-center text-white max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold uppercase">
              Activitar Fitness Club
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Train hard. Stay strong. Become the best version of yourself.
            </p>
            <button className="mt-6 bg-red-600 hover:bg-red-500 px-6 py-3 font-semibold uppercase tracking-wide">
              Join Now
            </button>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase">What We Offer</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

            <div className="bg-white p-8 shadow">
              <h3 className="text-xl font-bold mb-2">Personal Training</h3>
              <p className="text-gray-600">
                One-on-one coaching to reach your fitness goals faster.
              </p>
            </div>

            <div className="bg-white p-8 shadow">
              <h3 className="text-xl font-bold mb-2">Boxing Training</h3>
              <p className="text-gray-600">
                Professional boxing sessions for strength and discipline.
              </p>
            </div>

            <div className="bg-white p-8 shadow">
              <h3 className="text-xl font-bold mb-2">Fitness Classes</h3>
              <p className="text-gray-600">
                Group workouts to stay motivated and fit.
              </p>
            </div>

          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-24 px-6 bg-black text-white text-center">
          <h2 className="text-4xl font-bold mb-6 uppercase">About Us</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Activitar is a premium fitness and boxing training club focused on
            strength, endurance, and discipline. We help athletes and beginners
            achieve real transformation.
          </p>
        </section>

        {/* SCHEDULE SECTION */}
        <section className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold mb-10 uppercase">Class Schedule</h2>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6 text-left">

            <div className="border p-4">
              <h3 className="font-bold">Morning Boxing</h3>
              <p className="text-gray-600">Mon - Fri | 6:00 AM - 8:00 AM</p>
            </div>

            <div className="border p-4">
              <h3 className="font-bold">Strength Training</h3>
              <p className="text-gray-600">Mon - Sat | 5:00 PM - 7:00 PM</p>
            </div>

            <div className="border p-4">
              <h3 className="font-bold">Cardio Blast</h3>
              <p className="text-gray-600">Tue - Thu | 7:00 PM - 8:00 PM</p>
            </div>

            <div className="border p-4">
              <h3 className="font-bold">Weekend Sparring</h3>
              <p className="text-gray-600">Sat - Sun | 9:00 AM - 11:00 AM</p>
            </div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-red-600 text-white text-center">
          <h2 className="text-4xl font-bold uppercase">
            Ready to Transform Yourself?
          </h2>
          <p className="mt-4 text-lg">
            Join Activitar Fitness Club today
          </p>
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
        <footer className="py-6 text-center text-gray-500 text-sm bg-white border-t">
          © {new Date().getFullYear()} Activitar Fitness Club. All rights reserved.
        </footer>

      </main>
    </>
  );
}
