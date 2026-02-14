import { Play, Headphones, Download, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stories = [
  {
    id: 1,
    title: 'The Legend of Taj Mahal',
    description: 'Discover the timeless love story behind India\'s most iconic monument',
    duration: '15 min',
    category: 'Historical',
    narrator: 'Rajesh Kumar',
    downloads: 12500,
    image: 'https://images.unsplash.com/photo-1642235701410-8f466772db4d?w=400'
  },
  {
    id: 2,
    title: 'Himalayan Mysteries',
    description: 'Ancient tales from the world\'s highest mountain range',
    duration: '22 min',
    category: 'Adventure',
    narrator: 'Sarah Johnson',
    downloads: 8900,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
  },
  {
    id: 3,
    title: 'Varanasi: City of Light',
    description: 'Spiritual journey through the oldest living city on Earth',
    duration: '18 min',
    category: 'Spiritual',
    narrator: 'Priya Sharma',
    downloads: 15200,
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400'
  },
  {
    id: 4,
    title: 'Arabian Nights in Dubai',
    description: 'From desert sands to futuristic skylines',
    duration: '12 min',
    category: 'Luxury',
    narrator: 'Mohammed Al-Rashid',
    downloads: 6700,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400'
  },
];

export function AudioStories() {
  return (
    <section className="py-16 bg-white" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-primary)] mb-4">
            Audio Stories & Cultural Narratives
          </h2>
          <p className="text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Immerse yourself in captivating stories about historical significance, cultural richness, 
            and local legends of your destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image with Play Overlay */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="h-8 w-8 text-[var(--color-primary)] ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded-full text-sm">
                  {story.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h5 className="text-[var(--color-neutral-900)] mb-2">{story.title}</h5>
                
                <p className="text-[var(--color-neutral-600)] text-sm mb-4">
                  {story.description}
                </p>

                <div className="flex items-center justify-between text-sm text-[var(--color-neutral-500)] mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{story.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Headphones className="h-4 w-4" />
                    <span>{story.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-neutral-200)]">
                  <span className="text-sm text-[var(--color-neutral-600)]">
                    By {story.narrator}
                  </span>
                  <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
            Browse Story Library
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-[var(--color-primary)]" />
            </div>
            <h5 className="text-[var(--color-neutral-900)] mb-2">Multi-Language Support</h5>
            <p className="text-[var(--color-neutral-600)]">
              Stories available in English, Hindi, and 8+ regional languages
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-[var(--color-primary)]" />
            </div>
            <h5 className="text-[var(--color-neutral-900)] mb-2">Offline Access</h5>
            <p className="text-[var(--color-neutral-600)]">
              Download stories and listen without internet connection
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="h-8 w-8 text-[var(--color-primary)]" />
            </div>
            <h5 className="text-[var(--color-neutral-900)] mb-2">Interactive Experience</h5>
            <p className="text-[var(--color-neutral-600)]">
              Location-triggered audio with 360° virtual tours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
