import { Star, MapPin, Languages, Shield, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const guides = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Agra, India',
    specialties: ['Historical Tours', 'Cultural Heritage', 'Photography'],
    languages: ['English', 'Hindi', 'French'],
    rating: 4.9,
    reviews: 342,
    verified: true,
    rate: 25,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    location: 'Kathmandu, Nepal',
    specialties: ['Adventure Treks', 'Mountain Guides', 'Safety Expert'],
    languages: ['English', 'Nepali'],
    rating: 5.0,
    reviews: 256,
    verified: true,
    rate: 40,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300'
  },
  {
    id: 3,
    name: 'Mohammed Al-Rashid',
    location: 'Dubai, UAE',
    specialties: ['Luxury Tours', 'Business Travel', 'City Guides'],
    languages: ['English', 'Arabic', 'Urdu'],
    rating: 4.8,
    reviews: 198,
    verified: true,
    rate: 50,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
  },
  {
    id: 4,
    name: 'Priya Sharma',
    location: 'Varanasi, India',
    specialties: ['Spiritual Tours', 'Temple Guides', 'Local Culture'],
    languages: ['English', 'Hindi'],
    rating: 4.9,
    reviews: 412,
    verified: true,
    rate: 20,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300'
  },
];

export function LocalGuides() {
  return (
    <section className="py-16 bg-[var(--color-neutral-50)]" id="guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-primary)] mb-4">
            Connect with Local Guides
          </h2>
          <p className="text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Verified local experts who bring destinations to life with authentic experiences 
            and insider knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="relative">
                <ImageWithFallback
                  src={guide.image}
                  alt={guide.name}
                  className="w-full h-64 object-cover"
                />
                {guide.verified && (
                  <div className="absolute top-4 right-4 bg-[var(--color-accent)] p-2 rounded-full">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-[var(--color-neutral-900)] mb-2">{guide.name}</h4>
                
                <div className="flex items-center space-x-1 text-[var(--color-neutral-600)] mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{guide.location}</span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>{guide.rating}</span>
                  </div>
                  <span className="text-[var(--color-neutral-500)]">({guide.reviews} reviews)</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {guide.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] rounded text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center space-x-2 mb-4 text-[var(--color-neutral-600)]">
                  <Languages className="h-4 w-4" />
                  <span>{guide.languages.join(', ')}</span>
                </div>

                {/* Rate */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-neutral-200)] mb-4">
                  <span className="text-[var(--color-neutral-600)]">Starting from</span>
                  <span className="text-[var(--color-primary)]">${guide.rate}/hour</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                    View Profile
                  </button>
                  <button className="px-3 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] rounded-lg hover:bg-[var(--color-neutral-200)] transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
            Browse All Guides
          </button>
        </div>

        {/* Become a Guide CTA */}
        <div className="mt-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl p-8 text-center">
          <h3 className="text-white mb-4">Are you a local expert?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our community of verified guides and help travelers experience authentic, 
            unforgettable journeys while earning income.
          </p>
          <button className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors">
            Become a Guide
          </button>
        </div>
      </div>
    </section>
  );
}
