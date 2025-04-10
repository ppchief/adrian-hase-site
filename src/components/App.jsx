import React from "react";

export default function App() {
  return (
    <main className="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Firstname Lastname, PhD
        </h1>
        <p className="text-xl text-gray-600">
          Sport and Exercise Psychology | Clinical Psychology | Stress & Health | Psychophysiology
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I am a researcher and practitioner in the field of Sport and Exercise Psychology
            with a strong background in stress research, clinical psychology, and
            psychophysiology. My academic and applied work focuses on enhancing
            performance, reducing stress, and improving well-being.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">Sport Psychology Services</h2>
          <p>
            I offer evidence-based coaching for athletes, teams, and individuals aiming to
            enhance performance, manage stress, and promote psychological resilience and
            health. Services are grounded in scientific methods and tailored to your goals.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">Research</h2>
          <p>
            My research interests include the psychophysiology of stress, recovery and
            performance, applied psychometrics, and interventions in health and sport
            psychology. I aim to bridge scientific insight with practical application.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow">
          <h2 className="text-2xl font-semibold mb-2">Photo Gallery</h2>
          <p>
            Space for personal and professional images coming soon! This section will showcase
            moments from conferences, workshops, training sessions, and more.
          </p>
        </div>
      </section>

      <footer className="text-center pt-10 border-t mt-12">
        <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Firstname Lastname, PhD. All rights reserved.</p>
      </footer>
    </main>
  );
}
