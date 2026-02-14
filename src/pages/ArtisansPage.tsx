import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouter } from '../lib/router';
import { 
  Search, MapPin, Star, Shield, Award, Filter, 
  Heart, MessageCircle, Palette, Scissors, Sparkles
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const artisanCategories = [
  { icon: Palette, name: 'Pottery & Ceramics', count: 45 },
  { icon: Scissors, name: 'Textiles & Weaving', count: 67 },
  { icon: Sparkles, name: 'Jewelry Making', count: 52 },
  { icon: Award, name: 'Wood Carving', count: 38 },
  { icon: Palette, name: 'Painting & Art', count: 41 },
  { icon: Scissors, name: 'Leather Crafts', count: 29 },
];

const artisans = [
  {
    id: 1,
    name: 'Ravi Patel',
    craft: 'Traditional Pottery',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1589051079002-b140a970f568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwd29ya3Nob3AlMjBhcnRpc3R8ZW58MXx8fHwxNzY0MTc1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 156,
    verified: true,
    experience: '25 years',
    workshopPrice: 30,
    products: ['Vases', 'Plates', 'Decorative Items'],
    description: 'Master potter specializing in blue pottery, a traditional Rajasthani art form',
    workshopAvailable: true,
    storeLocation: 'Traditional Bazaar, Jaipur'
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    craft: 'Handloom Weaving',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1760328715296-9714daa8a737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwd2VhdmluZyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2NDE3NTUwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    reviews: 203,
    verified: true,
    experience: '30 years',
    workshopPrice: 25,
    products: ['Sarees', 'Shawls', 'Fabrics'],
    description: 'Expert in Banarasi silk weaving, creating exquisite traditional textiles',
    workshopAvailable: true,
    storeLocation: 'Silk Weaving Village, Varanasi'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    craft: 'Silver Jewelry',
    location: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1715374033196-0ff662284a7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFraW5nJTIwY3JhZnR8ZW58MXx8fHwxNzY0MTM0NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 178,
    verified: true,
    experience: '18 years',
    workshopPrice: 40,
    products: ['Necklaces', 'Bracelets', 'Rings'],
    description: 'Traditional silver jewelry maker using ancient Rajasthani techniques',
    workshopAvailable: true,
    storeLocation: 'City Palace Road, Udaipur'
  },
  {
    id: 4,
    name: 'Meera Sharma',
    craft: 'Miniature Painting',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1762628437902-315a5efb810c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY3JhZnRzJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzY0MTc1NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 145,
    verified: true,
    experience: '22 years',
    workshopPrice: 35,
    products: ['Miniature Paintings', 'Art Pieces', 'Custom Orders'],
    description: 'Award-winning miniature artist preserving centuries-old Rajput painting traditions',
    workshopAvailable: true,
    storeLocation: 'Art District, Jaipur'
  },
  {
    id: 5,
    name: 'Suresh Rao',
    craft: 'Wood Carving',
    location: 'Mysore, Karnataka',
    image: 'https://images.unsplash.com/photo-1595814433633-89e2f7446540?w=400',
    rating: 4.7,
    reviews: 132,
    verified: true,
    experience: '28 years',
    workshopPrice: 28,
    products: ['Sculptures', 'Furniture', 'Decorative Items'],
    description: 'Master craftsman in traditional Mysore wood carving and inlay work',
    workshopAvailable: true,
    storeLocation: 'Handicrafts Center, Mysore'
  },
  {
    id: 6,
    name: 'Fatima Begum',
    craft: 'Embroidery Art',
    location: 'Lucknow, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400',
    rating: 5.0,
    reviews: 189,
    verified: true,
    experience: '20 years',
    workshopPrice: 32,
    products: ['Chikankari Clothing', 'Home Textiles', 'Custom Embroidery'],
    description: 'Expert in Chikankari embroidery, a delicate and artistic needlework',
    workshopAvailable: true,
    storeLocation: 'Chowk Market, Lucknow'
  },
];

export function ArtisansPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-4">Discover Local Artisans</h1>
            <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
              Connect with master craftspeople, learn traditional arts, and take home authentic handmade treasures
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-2 flex">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-[var(--color-neutral-400)] mr-2" />
                <input
                  type="text"
                  placeholder="Search artisans, crafts, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-[var(--color-primary)] mb-6">Browse by Craft</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {artisanCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(category.name)}
                    className="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                      <Icon className="h-6 w-6 text-[var(--color-secondary)]" />
                    </div>
                    <p className="text-[var(--color-neutral-700)] text-center text-sm mb-1">{category.name}</p>
                    <p className="text-[var(--color-neutral-500)] text-center text-xs">{category.count} artisans</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors">
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
              </button>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="workshop" className="mr-1" />
                <label htmlFor="workshop" className="text-[var(--color-neutral-700)]">Workshop Available</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="verified" className="mr-1" />
                <label htmlFor="verified" className="text-[var(--color-neutral-700)]">Verified Only</label>
              </div>
            </div>
            <p className="text-[var(--color-neutral-600)]">{artisans.length} artisans found</p>
          </div>

          {/* Artisans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan) => (
              <div
                key={artisan.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden group">
                  <ImageWithFallback
                    src={artisan.image}
                    alt={artisan.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {artisan.verified && (
                    <div className="absolute top-4 right-4 bg-[var(--color-accent)] p-2 rounded-full">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                  )}
                  {artisan.workshopAvailable && (
                    <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded-full text-sm">
                      Workshop Available
                    </div>
                  )}
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-5 w-5 text-[var(--color-primary)]" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-[var(--color-neutral-900)] mb-1">{artisan.name}</h4>
                      <p className="text-[var(--color-secondary)]">{artisan.craft}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-[var(--color-neutral-600)] mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{artisan.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{artisan.rating}</span>
                    </div>
                    <span className="text-[var(--color-neutral-500)]">({artisan.reviews} reviews)</span>
                    <span className="text-[var(--color-neutral-400)]">•</span>
                    <span className="text-[var(--color-neutral-600)]">{artisan.experience} exp.</span>
                  </div>

                  <p className="text-[var(--color-neutral-600)] text-sm mb-4">
                    {artisan.description}
                  </p>

                  {/* Products */}
                  <div className="mb-4">
                    <p className="text-[var(--color-neutral-700)] text-sm mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {artisan.products.slice(0, 3).map((product, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] rounded text-xs"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Workshop Price */}
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--color-neutral-200)] mb-4">
                    <div>
                      <p className="text-[var(--color-neutral-500)] text-sm">Workshop</p>
                      <p className="text-[var(--color-primary)]">${artisan.workshopPrice}/person</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[var(--color-neutral-500)] text-sm">Store Location</p>
                      <p className="text-[var(--color-neutral-700)] text-sm">{artisan.storeLocation.split(',')[0]}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => navigate(`/artisan/${artisan.id}`)}
                      className="flex-1 bg-[var(--color-primary)] text-white py-2 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                    >
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

          {/* Info Section */}
          <div className="mt-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-white mb-2">Authentic Craftsmanship</h4>
                <p className="text-white/80">All artisans are verified masters with years of experience in traditional crafts</p>
              </div>
              <div className="text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-white mb-2">Hands-On Workshops</h4>
                <p className="text-white/80">Learn traditional techniques directly from master craftspeople</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-white mb-2">Support Local Art</h4>
                <p className="text-white/80">Your purchases directly support artisan families and preserve cultural heritage</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
