import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Globe, Users, Award, Heart, Target, Eye } from 'lucide-react';

export function AboutPage() {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300'
    },
    {
      name: 'Emily Watson',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-4">About Just Roam</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Connecting travelers with authentic local experiences across the globe
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-[var(--color-primary)] mb-6">Our Story</h2>
              <p className="text-[var(--color-neutral-600)] mb-4">
                Just Roam was born from a simple idea: travel should be personal, authentic, and accessible to everyone. 
                Founded in 2023, we set out to bridge the gap between travelers seeking genuine experiences and local 
                experts who know their destinations inside out.
              </p>
              <p className="text-[var(--color-neutral-600)] mb-4">
                We believe that the best travel experiences come from connecting with people who call a place home. 
                That's why we've built a platform that not only helps you plan your journey but also introduces you to 
                verified local guides, artisans, and cultural ambassadors who can show you the soul of their cities.
              </p>
              <p className="text-[var(--color-neutral-600)]">
                Today, we're proud to serve over 50,000 travelers and work with more than 1,000 local experts across 
                500+ destinations worldwide.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
                alt="Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[var(--color-neutral-50)] rounded-xl p-8">
              <Target className="h-12 w-12 text-[var(--color-primary)] mb-4" />
              <h3 className="text-[var(--color-neutral-900)] mb-4">Our Mission</h3>
              <p className="text-[var(--color-neutral-600)]">
                To make authentic travel experiences accessible to everyone by connecting travelers with local experts 
                who can provide genuine insights, cultural understanding, and unforgettable memories.
              </p>
            </div>
            <div className="bg-[var(--color-neutral-50)] rounded-xl p-8">
              <Eye className="h-12 w-12 text-[var(--color-secondary)] mb-4" />
              <h3 className="text-[var(--color-neutral-900)] mb-4">Our Vision</h3>
              <p className="text-[var(--color-neutral-600)]">
                A world where every traveler can experience destinations like a local, where cultural exchange enriches 
                both visitors and hosts, and where travel creates meaningful connections across borders.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-[var(--color-primary)] text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-[var(--color-primary)]" />
                </div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">Authenticity</h4>
                <p className="text-[var(--color-neutral-600)]">Real experiences with real people</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[var(--color-secondary)]" />
                </div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">Community</h4>
                <p className="text-[var(--color-neutral-600)]">Building connections worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[var(--color-accent)]" />
                </div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">Quality</h4>
                <p className="text-[var(--color-neutral-600)]">Verified experts and experiences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-pink-500" />
                </div>
                <h4 className="text-[var(--color-neutral-900)] mb-2">Passion</h4>
                <p className="text-[var(--color-neutral-600)]">Love for travel and culture</p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-[var(--color-primary)] text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-[var(--color-neutral-900)] mb-1">{member.name}</h4>
                  <p className="text-[var(--color-neutral-600)]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
              <div>
                <div className="mb-2">50,000+</div>
                <p className="text-white/80">Happy Travelers</p>
              </div>
              <div>
                <div className="mb-2">500+</div>
                <p className="text-white/80">Destinations</p>
              </div>
              <div>
                <div className="mb-2">1,000+</div>
                <p className="text-white/80">Local Experts</p>
              </div>
              <div>
                <div className="mb-2">4.9/5</div>
                <p className="text-white/80">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
