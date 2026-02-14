import { LocalGuides } from '../components/LocalGuides';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function GuidesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <LocalGuides />
      </main>
      <Footer />
    </div>
  );
}
