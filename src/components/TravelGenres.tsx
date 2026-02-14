import { 
  Church, Mountain, Palmtree, Heart, Camera, Users, 
  Briefcase, Sparkles, Leaf, Crown, Backpack, Music,
  Sunrise, Baby, Waves, Building, MapPin, TreePine,
  Tent, Trophy
} from 'lucide-react';

const genres = [
  { icon: Church, name: 'Pilgrimage', color: 'bg-purple-100 text-purple-600' },
  { icon: Mountain, name: 'Adventure', color: 'bg-orange-100 text-orange-600' },
  { icon: Palmtree, name: 'Beach', color: 'bg-cyan-100 text-cyan-600' },
  { icon: Heart, name: 'Romantic', color: 'bg-pink-100 text-pink-600' },
  { icon: Camera, name: 'Photography', color: 'bg-indigo-100 text-indigo-600' },
  { icon: Users, name: 'Family', color: 'bg-green-100 text-green-600' },
  { icon: Briefcase, name: 'Business', color: 'bg-gray-100 text-gray-600' },
  { icon: Sparkles, name: 'Wellness', color: 'bg-teal-100 text-teal-600' },
  { icon: Leaf, name: 'Eco-Tourism', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Crown, name: 'Luxury', color: 'bg-yellow-100 text-yellow-600' },
  { icon: Backpack, name: 'Backpacking', color: 'bg-amber-100 text-amber-600' },
  { icon: Music, name: 'Festival', color: 'bg-rose-100 text-rose-600' },
  { icon: Sunrise, name: 'Cultural', color: 'bg-violet-100 text-violet-600' },
  { icon: Baby, name: 'Solo', color: 'bg-fuchsia-100 text-fuchsia-600' },
  { icon: Waves, name: 'Wildlife', color: 'bg-lime-100 text-lime-600' },
  { icon: Building, name: 'Historical', color: 'bg-red-100 text-red-600' },
  { icon: MapPin, name: 'Food', color: 'bg-orange-100 text-orange-600' },
  { icon: TreePine, name: 'Mountain', color: 'bg-green-100 text-green-600' },
  { icon: Tent, name: 'Camping', color: 'bg-brown-100 text-brown-600' },
  { icon: Trophy, name: 'Heritage', color: 'bg-blue-100 text-blue-600' },
];

export function TravelGenres() {
  return (
    <section className="py-16 bg-[var(--color-neutral-50)]" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-primary)] mb-4">
            Explore by Travel Genre
          </h2>
          <p className="text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Choose from over 20 carefully curated travel experiences tailored to your interests, 
            budget, and travel mood.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {genres.map((genre) => {
            const Icon = genre.icon;
            return (
              <button
                key={genre.name}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 ${genre.color} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-[var(--color-neutral-700)] text-center">{genre.name}</p>
              </button>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
            View All Genres
          </button>
        </div>
      </div>
    </section>
  );
}
