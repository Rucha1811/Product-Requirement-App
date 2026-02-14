import { Search, MapPin, Calendar, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920"
          alt="Travel Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/80 to-[var(--color-primary)]/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-white mb-6">
          Discover Your Perfect Journey
        </h1>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          Personalized travel experiences across 20+ genres. From pilgrimage to adventure, 
          we'll help you explore the world your way.
        </p>

        {/* Search Box */}
        <div className="bg-white rounded-lg shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 border border-[var(--color-neutral-300)] rounded-lg px-4 py-3">
              <MapPin className="h-5 w-5 text-[var(--color-primary)]" />
              <input
                type="text"
                placeholder="Where to?"
                className="flex-1 outline-none"
              />
            </div>
            <div className="flex items-center space-x-3 border border-[var(--color-neutral-300)] rounded-lg px-4 py-3">
              <Calendar className="h-5 w-5 text-[var(--color-primary)]" />
              <input
                type="text"
                placeholder="When?"
                className="flex-1 outline-none"
              />
            </div>
            <div className="flex items-center space-x-3 border border-[var(--color-neutral-300)] rounded-lg px-4 py-3">
              <Users className="h-5 w-5 text-[var(--color-primary)]" />
              <input
                type="text"
                placeholder="Travelers"
                className="flex-1 outline-none"
              />
            </div>
            <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <Search className="h-5 w-5" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-white">20+</div>
            <div className="text-white/80">Travel Genres</div>
          </div>
          <div className="text-center">
            <div className="text-white">500+</div>
            <div className="text-white/80">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-white">1000+</div>
            <div className="text-white/80">Local Guides</div>
          </div>
          <div className="text-center">
            <div className="text-white">50k+</div>
            <div className="text-white/80">Happy Travelers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
