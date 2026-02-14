import { Star, MapPin, DollarSign, Clock } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Taj Mahal, Agra',
    country: 'India',
    genre: 'Historical & Cultural',
    image: 'https://images.unsplash.com/photo-1642235701410-8f466772db4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWolMjBtYWhhbCUyMG1vbnVtZW50fGVufDF8fHx8MTc2NDA3OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 2453,
    price: 299,
    duration: '3 Days',
    description: 'Experience the wonder of one of the world\'s most iconic monuments'
  },
  {
    id: 2,
    name: 'Himalayan Trek',
    country: 'Nepal',
    genre: 'Adventure',
    image: 'https://images.unsplash.com/photo-1603741614953-4187ed84cc50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGFkdmVudHVyZSUyMGhpa2luZ3xlbnwxfHx8fDE3NjQxNDg5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 1876,
    price: 899,
    duration: '7 Days',
    description: 'Conquer breathtaking mountain trails with expert guides'
  },
  {
    id: 3,
    name: 'Maldives Paradise',
    country: 'Maldives',
    genre: 'Beach & Leisure',
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzY0MDgzNTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 3241,
    price: 1599,
    duration: '5 Days',
    description: 'Relax in crystal-clear waters and pristine white sand beaches'
  },
  {
    id: 4,
    name: 'Varanasi Spiritual Journey',
    country: 'India',
    genre: 'Pilgrimage',
    image: 'https://images.unsplash.com/photo-1749528090473-cedfdcb338b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGZlc3RpdmFsJTIwdGVtcGxlfGVufDF8fHx8MTc2NDE3NDc3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 1542,
    price: 399,
    duration: '4 Days',
    description: 'Immerse yourself in ancient spirituality and sacred rituals'
  },
  {
    id: 5,
    name: 'African Safari',
    country: 'Kenya',
    genre: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHNhZmFyaSUyMGVsZXBoYW50fGVufDF8fHx8MTc2NDE3NDc3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviews: 987,
    price: 2199,
    duration: '6 Days',
    description: 'Witness the majesty of African wildlife in their natural habitat'
  },
  {
    id: 6,
    name: 'Dubai Luxury Experience',
    country: 'UAE',
    genre: 'Luxury',
    image: 'https://images.unsplash.com/photo-1750810908078-a4729905bf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHVyYmFufGVufDF8fHx8MTc2NDA4OTc0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 2156,
    price: 1799,
    duration: '4 Days',
    description: 'Indulge in world-class luxury and modern architectural wonders'
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-primary)] mb-4">
            Featured Destinations
          </h2>
          <p className="text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Handpicked experiences from around the world, curated by travel experts and 
            loved by thousands of travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span>{destination.rating}</span>
                  <span className="text-[var(--color-neutral-500)]">({destination.reviews})</span>
                </div>
                <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded-full">
                  {destination.genre}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-[var(--color-neutral-900)] mb-1">{destination.name}</h3>
                    <div className="flex items-center space-x-1 text-[var(--color-neutral-600)]">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.country}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[var(--color-neutral-600)] mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-neutral-200)]">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-[var(--color-neutral-500)]" />
                    <span className="text-[var(--color-neutral-600)]">{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-[var(--color-accent)]" />
                    <span className="text-[var(--color-primary)]">${destination.price}</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
            Explore All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
