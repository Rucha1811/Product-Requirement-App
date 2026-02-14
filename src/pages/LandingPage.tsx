import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { TravelGenres } from '../components/TravelGenres';
import { FeaturedDestinations } from '../components/FeaturedDestinations';
import { LocalGuides } from '../components/LocalGuides';
import { AudioStories } from '../components/AudioStories';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        <TravelGenres />
        <FeaturedDestinations />
        <Features />
        <LocalGuides />
        <AudioStories />
        <Testimonials />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
