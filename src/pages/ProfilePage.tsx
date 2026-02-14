import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useAuth } from '../lib/auth';
import { useRouter } from '../lib/router';
import { User, Mail, Phone, MapPin, Calendar, Camera, Save } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const { navigate } = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '+1 (234) 567-8900',
    location: 'San Francisco, CA',
    bio: 'Passionate traveler exploring the world one destination at a time.',
    interests: ['Adventure', 'Photography', 'Cultural', 'Food'],
  });

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
            <div className="h-32 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]"></div>
            <div className="px-8 pb-8">
              <div className="flex items-end justify-between -mt-16 mb-4">
                <div className="relative">
                  <ImageWithFallback
                    src={user?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200'}
                    alt={user?.name || 'User'}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                  />
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-primary-dark)] transition-colors">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              <h2 className="text-[var(--color-neutral-900)] mb-2">{formData.name}</h2>
              <p className="text-[var(--color-neutral-600)] mb-4">{formData.bio}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <div className="text-[var(--color-primary)] mb-1">8</div>
                  <p className="text-[var(--color-neutral-600)] text-sm">Trips</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <div className="text-[var(--color-primary)] mb-1">23</div>
                  <p className="text-[var(--color-neutral-600)] text-sm">Destinations</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <div className="text-[var(--color-primary)] mb-1">15</div>
                  <p className="text-[var(--color-neutral-600)] text-sm">Wishlist</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <div className="text-[var(--color-primary)] mb-1">12</div>
                  <p className="text-[var(--color-neutral-600)] text-sm">Badges</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-[var(--color-primary)] mb-6">Personal Information</h3>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:bg-[var(--color-neutral-50)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:bg-[var(--color-neutral-50)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:bg-[var(--color-neutral-50)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      disabled={!isEditing}
                      className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:bg-[var(--color-neutral-50)]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] disabled:bg-[var(--color-neutral-50)]"
                />
              </div>

              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Travel Interests</label>
                <div className="flex flex-wrap gap-2">
                  {['Adventure', 'Beach', 'Cultural', 'Food', 'Photography', 'Historical', 'Wildlife', 'Wellness'].map((interest) => (
                    <button
                      key={interest}
                      disabled={!isEditing}
                      onClick={() => {
                        if (formData.interests.includes(interest)) {
                          setFormData({ ...formData, interests: formData.interests.filter(i => i !== interest) });
                        } else {
                          setFormData({ ...formData, interests: [...formData.interests, interest] });
                        }
                      }}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        formData.interests.includes(interest)
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)]'
                      } disabled:opacity-50`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>

              {isEditing && (
                <button className="w-full px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors flex items-center justify-center space-x-2">
                  <Save className="h-5 w-5" />
                  <span>Save Changes</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
