import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="p-6 md:p-12 max-w-5xl mx-auto space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Adrian  Hase, PhD
        </h1>
        <p className="text-xl text-gray-600">
          Sport and Exercise Psychology | Clinical Psychology | Stress & Health | Psychophysiology
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p>
              I am a researcher and practitioner in the field of Sport and Exercise Psychology
              with a strong background in stress research, clinical psychology, and
              psychophysiology. My academic and applied work focuses on enhancing
              performance, reducing stress, and improving well-being.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Sport Psychology Services</h2>
            <p>
              I offer evidence-based coaching for athletes, teams, and people aiming to
              enhance performance, manage stress, and promote psychological resilience and
              health. Services are grounded in scientifically grounded methods and tailored to your goals.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Research</h2>
            <p>
              My research interests include the psychophysiology of stress, performance, and recovery,
              applied psychometrics, and interventions in health and sport
              psychology. In my work, I bridge scientific insights and practical application.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Photo Gallery</h2>
            <p>
              Space for personal and professional images coming soon! This section will showcase
              moments from conferences, workshops, training sessions, and more.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center pt-10 border-t mt-12">
        <div className="flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://scholar.google.com/citations?user=yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
            <BookOpen className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">&copy; {new Date().getFullYear()} Adrian  Hase, PhD. All rights reserved.</p>
      </footer>
    </main>
  );
}
