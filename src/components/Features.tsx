import { 
  DollarSign, Plane, MapPin, MessageCircle, 
  Shield, Smartphone, Map, Sparkles 
} from 'lucide-react';

const features = [
  {
    icon: DollarSign,
    title: 'Budget-Based Planning',
    description: 'Get personalized recommendations tailored to your budget with detailed cost breakdowns for every aspect of your journey.'
  },
  {
    icon: Plane,
    title: 'Multi-Modal Transportation',
    description: 'Book flights, trains, buses, and local cabs all in one place with real-time price comparison and door-to-door journey planning.'
  },
  {
    icon: MapPin,
    title: 'Local Assistance',
    description: 'Connect with verified local guides for authentic experiences, emergency support, and insider knowledge of your destination.'
  },
  {
    icon: MessageCircle,
    title: 'AI Travel Assistant',
    description: 'Get instant answers to all your travel queries with our AI-powered chatbot available 24/7 in multiple languages.'
  },
  {
    icon: Map,
    title: 'Offline Maps',
    description: 'Download destination maps for offline use with points of interest, route optimization, and GPS-based directions.'
  },
  {
    icon: Shield,
    title: 'Verified & Secure',
    description: 'All local guides undergo background checks and verification. Your bookings and personal information are fully protected.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Access your itineraries, bookings, and guides on the go with our responsive web application and PWA features.'
  },
  {
    icon: Sparkles,
    title: 'Personalized Recommendations',
    description: 'Our AI learns your preferences to suggest destinations and experiences that match your travel style and interests.'
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]" id="plan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Everything You Need for Perfect Travel
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            From planning to booking to exploring, Just Roam provides comprehensive travel support 
            for every step of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h5 className="text-white mb-3">{feature.title}</h5>
                <p className="text-white/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
