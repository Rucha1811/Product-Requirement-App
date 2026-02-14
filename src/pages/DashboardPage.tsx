import { useAuth } from '../lib/auth';
import { useRouter } from '../lib/router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { 
  MapPin, Calendar, User, MessageCircle, Heart, 
  Clock, TrendingUp, Award, Compass, Plane
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const { navigate } = useRouter();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const upcomingTrips = [
    {
      id: 1,
      destination: 'Taj Mahal, Agra',
      date: 'Dec 15-18, 2025',
      image: 'https://images.unsplash.com/photo-1642235701410-8f466772db4d?w=400',
      status: 'Confirmed',
      guide: 'Rajesh Kumar'
    },
    {
      id: 2,
      destination: 'Dubai, UAE',
      date: 'Jan 5-9, 2026',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400',
      status: 'Pending',
      guide: 'Mohammed Al-Rashid'
    }
  ];

  const recentActivity = [
    { icon: Heart, text: 'Saved "Himalayan Trek" to wishlist', time: '2 hours ago' },
    { icon: MessageCircle, text: 'New message from guide Priya Sharma', time: '5 hours ago' },
    { icon: MapPin, text: 'Downloaded offline map for Varanasi', time: '1 day ago' },
    { icon: Award, text: 'Earned "Explorer" badge', time: '2 days ago' },
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Varanasi Spiritual Tour',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400',
      price: 399,
      match: 95
    },
    {
      id: 2,
      name: 'Kerala Backwaters',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
      price: 599,
      match: 89
    },
    {
      id: 3,
      name: 'Rajasthan Heritage',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400',
      price: 799,
      match: 87
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Header */}
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-8 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-white mb-2">Welcome back, {user?.name}!</h1>
                <p className="text-white/80">Ready for your next adventure?</p>
              </div>
              <div className="hidden md:block">
                <ImageWithFallback
                  src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'}
                  alt={user?.name || 'User'}
                  className="w-20 h-20 rounded-full border-4 border-white/20"
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Plane className="h-8 w-8 text-[var(--color-primary)]" />
                <span className="text-[var(--color-accent)]">+2</span>
              </div>
              <div className="text-[var(--color-neutral-900)] mb-1">8</div>
              <p className="text-[var(--color-neutral-600)]">Trips Completed</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <MapPin className="h-8 w-8 text-[var(--color-secondary)]" />
                <span className="text-[var(--color-accent)]">+5</span>
              </div>
              <div className="text-[var(--color-neutral-900)] mb-1">23</div>
              <p className="text-[var(--color-neutral-600)]">Destinations Visited</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="text-[var(--color-accent)]">+3</span>
              </div>
              <div className="text-[var(--color-neutral-900)] mb-1">15</div>
              <p className="text-[var(--color-neutral-600)]">Saved Wishlist</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-2">
                <Award className="h-8 w-8 text-yellow-500" />
                <span className="text-[var(--color-accent)]">+1</span>
              </div>
              <div className="text-[var(--color-neutral-900)] mb-1">12</div>
              <p className="text-[var(--color-neutral-600)]">Badges Earned</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Trips */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[var(--color-primary)]">Upcoming Trips</h3>
                  <button 
                    onClick={() => navigate('/plan-trip')}
                    className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                  >
                    Plan New Trip
                  </button>
                </div>

                <div className="space-y-4">
                  {upcomingTrips.map(trip => (
                    <div key={trip.id} className="flex space-x-4 p-4 border border-[var(--color-neutral-200)] rounded-lg hover:shadow-md transition-shadow">
                      <ImageWithFallback
                        src={trip.image}
                        alt={trip.destination}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-[var(--color-neutral-900)] mb-1">{trip.destination}</h4>
                        <div className="flex items-center space-x-2 text-[var(--color-neutral-600)] mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{trip.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[var(--color-neutral-600)] mb-2">
                          <User className="h-4 w-4" />
                          <span>Guide: {trip.guide}</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                          trip.status === 'Confirmed' 
                            ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {trip.status}
                        </span>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <button className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                          View Details
                        </button>
                        <button className="px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors">
                          Message Guide
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personalized Recommendations */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[var(--color-primary)]">Recommended for You</h3>
                  <Compass className="h-6 w-6 text-[var(--color-secondary)]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {recommendations.map(rec => (
                    <div key={rec.id} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <ImageWithFallback
                          src={rec.image}
                          alt={rec.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-[var(--color-accent)] text-white px-2 py-1 rounded-full text-sm">
                          {rec.match}% Match
                        </div>
                      </div>
                      <h5 className="text-[var(--color-neutral-900)] mb-1">{rec.name}</h5>
                      <p className="text-[var(--color-primary)]">From ${rec.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-[var(--color-neutral-900)] mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <button 
                    onClick={() => navigate('/explore')}
                    className="w-full px-4 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors text-left flex items-center space-x-2"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Explore Destinations</span>
                  </button>
                  <button 
                    onClick={() => navigate('/guides')}
                    className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors text-left flex items-center space-x-2"
                  >
                    <User className="h-5 w-5" />
                    <span>Find Local Guides</span>
                  </button>
                  <button 
                    onClick={() => navigate('/artisans')}
                    className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors text-left flex items-center space-x-2"
                  >
                    <Award className="h-5 w-5" />
                    <span>Discover Artisans</span>
                  </button>
                  <button 
                    onClick={() => navigate('/messages')}
                    className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors text-left flex items-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Messages (2)</span>
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-[var(--color-neutral-900)] mb-4">Recent Activity</h4>
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => {
                    const Icon = activity.icon;
                    return (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4 w-4 text-[var(--color-primary)]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-[var(--color-neutral-700)] text-sm">{activity.text}</p>
                          <p className="text-[var(--color-neutral-500)] text-xs mt-1">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
