import { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouter } from '../lib/router';
import { loadGoogleMaps } from '../config/api';
import { 
  Search, MapPin, Star, DollarSign, Filter, Map, List,
  Clock, Users, Calendar, Heart, TrendingUp
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const destinations = [
  {
    id: 1,
    name: 'Taj Mahal, Agra',
    country: 'India',
    genre: ['Historical', 'Cultural', 'Photography'],
    image: 'https://images.unsplash.com/photo-1642235701410-8f466772db4d?w=600',
    rating: 4.9,
    reviews: 2453,
    price: 299,
    duration: '3 Days',
    description: 'Experience the wonder of one of the world\'s most iconic monuments',
    latitude: 27.1751,
    longitude: 78.0421,
    trending: true,
    budget: 'mid-range'
  },
  {
    id: 2,
    name: 'Himalayan Trek',
    country: 'Nepal',
    genre: ['Adventure', 'Mountain', 'Trekking'],
    image: 'https://images.unsplash.com/photo-1603741614953-4187ed84cc50?w=600',
    rating: 4.8,
    reviews: 1876,
    price: 899,
    duration: '7 Days',
    description: 'Conquer breathtaking mountain trails with expert guides',
    latitude: 27.9881,
    longitude: 86.9250,
    trending: false,
    budget: 'luxury'
  },
  {
    id: 3,
    name: 'Maldives Paradise',
    country: 'Maldives',
    genre: ['Beach', 'Luxury', 'Romantic'],
    image: 'https://images.unsplash.com/photo-1551727095-10465ee6b17f?w=600',
    rating: 4.9,
    reviews: 3241,
    price: 1599,
    duration: '5 Days',
    description: 'Relax in crystal-clear waters and pristine white sand beaches',
    latitude: 3.2028,
    longitude: 73.2207,
    trending: true,
    budget: 'luxury'
  },
  {
    id: 4,
    name: 'Varanasi Spiritual Journey',
    country: 'India',
    genre: ['Pilgrimage', 'Spiritual', 'Cultural'],
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600',
    rating: 4.7,
    reviews: 1542,
    price: 399,
    duration: '4 Days',
    description: 'Immerse yourself in ancient spirituality and sacred rituals',
    latitude: 25.3176,
    longitude: 82.9739,
    trending: false,
    budget: 'budget'
  },
  {
    id: 5,
    name: 'African Safari',
    country: 'Kenya',
    genre: ['Wildlife', 'Adventure', 'Photography'],
    image: 'https://images.unsplash.com/photo-1535759802691-bf5a6cfe6ce9?w=600',
    rating: 5.0,
    reviews: 987,
    price: 2199,
    duration: '6 Days',
    description: 'Witness the majesty of African wildlife in their natural habitat',
    latitude: -1.2921,
    longitude: 36.8219,
    trending: true,
    budget: 'luxury'
  },
  {
    id: 6,
    name: 'Dubai Luxury Experience',
    country: 'UAE',
    genre: ['Luxury', 'Urban', 'Business'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600',
    rating: 4.8,
    reviews: 2156,
    price: 1799,
    duration: '4 Days',
    description: 'Indulge in world-class luxury and modern architectural wonders',
    latitude: 25.2048,
    longitude: 55.2708,
    trending: true,
    budget: 'luxury'
  },
  {
    id: 7,
    name: 'Kerala Backwaters',
    country: 'India',
    genre: ['Leisure', 'Nature', 'Wellness'],
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600',
    rating: 4.7,
    reviews: 1823,
    price: 599,
    duration: '5 Days',
    description: 'Cruise through serene backwaters in traditional houseboats',
    latitude: 9.4981,
    longitude: 76.3388,
    trending: false,
    budget: 'mid-range'
  },
  {
    id: 8,
    name: 'Rajasthan Heritage Tour',
    country: 'India',
    genre: ['Heritage', 'Cultural', 'Historical'],
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600',
    rating: 4.8,
    reviews: 2034,
    price: 799,
    duration: '7 Days',
    description: 'Explore magnificent palaces, forts, and vibrant desert culture',
    latitude: 26.9124,
    longitude: 75.7873,
    trending: false,
    budget: 'mid-range'
  },
];

export function ExplorePage() {
  const { navigate } = useRouter();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (viewMode === 'map') {
      loadGoogleMaps().then(() => {
        setMapLoaded(true);
        initializeMap();
      }).catch((error) => {
        console.error('Failed to load Google Maps:', error);
      });
    }
  }, [viewMode]);

  const initializeMap = () => {
    if (typeof window.google === 'undefined') return;

    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const map = new window.google.maps.Map(mapElement, {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 4,
    });

    destinations.forEach((dest) => {
      const marker = new window.google.maps.Marker({
        position: { lat: dest.latitude, lng: dest.longitude },
        map: map,
        title: dest.name,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px;">
            <h4 style="margin: 0 0 5px 0;">${dest.name}</h4>
            <p style="margin: 0 0 5px 0; color: #666;">${dest.description}</p>
            <p style="margin: 0; color: #1e3a8a; font-weight: bold;">$${dest.price}</p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  };

  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || dest.genre.includes(selectedGenre);
    const matchesBudget = selectedBudget === 'all' || dest.budget === selectedBudget;
    return matchesSearch && matchesGenre && matchesBudget;
  });

  const genres = ['all', 'Adventure', 'Beach', 'Cultural', 'Historical', 'Pilgrimage', 'Luxury', 'Wildlife'];
  const budgets = ['all', 'budget', 'mid-range', 'luxury'];

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] py-12 mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-white mb-4">Explore Destinations</h1>
            <p className="text-white/90 text-xl mb-6">
              Discover your next adventure from over 500 curated destinations worldwide
            </p>

            {/* Search Bar */}
            <div className="max-w-3xl bg-white rounded-lg shadow-xl p-2 flex">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-[var(--color-neutral-400)] mr-2" />
                <input
                  type="text"
                  placeholder="Search destinations, countries, or experiences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[var(--color-neutral-900)]">Filters</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-[var(--color-primary)] text-white' 
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]'
                  }`}
                >
                  <List className="h-4 w-4" />
                  <span>List</span>
                </button>
                <button
                  onClick={() => setViewMode('map')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    viewMode === 'map' 
                      ? 'bg-[var(--color-primary)] text-white' 
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]'
                  }`}
                >
                  <Map className="h-4 w-4" />
                  <span>Map</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Genre Filter */}
              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Travel Genre</label>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="w-full px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre.charAt(0).toUpperCase() + genre.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget Filter */}
              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Budget Range</label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                >
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget === 'all' ? 'All Budgets' : budget.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Duration</label>
                <select className="w-full px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
                  <option>Any Duration</option>
                  <option>1-3 Days</option>
                  <option>4-7 Days</option>
                  <option>8+ Days</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-[var(--color-neutral-600)]">
              {filteredDestinations.length} destinations found
            </p>
            <select className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Highest Rated</option>
            </select>
          </div>

          {viewMode === 'list' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <div
                  key={destination.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => navigate(`/destination/${destination.id}`)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span>{destination.rating}</span>
                    </div>
                    {destination.trending && (
                      <div className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white px-3 py-1 rounded-full flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span className="text-sm">Trending</span>
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
                        <h4 className="text-[var(--color-neutral-900)] mb-1">{destination.name}</h4>
                        <div className="flex items-center space-x-1 text-[var(--color-neutral-600)]">
                          <MapPin className="h-4 w-4" />
                          <span>{destination.country}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--color-neutral-600)] mb-4">
                      {destination.description}
                    </p>

                    {/* Genre Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {destination.genre.slice(0, 2).map((genre, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded text-xs"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>

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
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div id="map" className="w-full h-[600px]"></div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
