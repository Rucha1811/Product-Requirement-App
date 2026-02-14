import { AudioStories } from '../components/AudioStories';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function StoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        <AudioStories />
      </main>
      <Footer />
    </div>
  );
}
