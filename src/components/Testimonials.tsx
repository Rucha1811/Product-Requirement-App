import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Emily Chen',
    location: 'San Francisco, USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    rating: 5,
    text: 'Just Roam transformed my trip to India! The local guide in Varanasi was incredible, and the audio stories made every monument come alive. The budget planning tool helped me stay within my limits while experiencing everything I wanted.',
    trip: 'Spiritual Journey to India'
  },
  {
    id: 2,
    name: 'David Martinez',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
    rating: 5,
    text: 'As a solo backpacker, I was concerned about safety and planning. Just Roam\'s verified guides and comprehensive itineraries gave me confidence. The offline maps saved me countless times!',
    trip: 'Himalayan Adventure Trek'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    location: 'Mumbai, India',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
    rating: 5,
    text: 'The multi-modal transportation booking feature is a game-changer! I booked my flights, train to the city, and local cab all through Just Roam. The AI assistant answered all my questions instantly.',
    trip: 'Dubai Luxury Getaway'
  },
  {
    id: 4,
    name: 'James Wilson',
    location: 'London, UK',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
    rating: 5,
    text: 'Planning a family trip can be stressful, but Just Roam made it effortless. The personalized recommendations based on our budget and interests were spot-on. Our guide in Agra was patient with the kids and extremely knowledgeable.',
    trip: 'Family Cultural Tour'
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-[var(--color-neutral-50)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[var(--color-primary)] mb-4">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-[var(--color-neutral-600)] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community of travelers 
            has to say about their Just Roam experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-[var(--color-primary)]" />
              </div>

              {/* Header */}
              <div className="flex items-start space-x-4 mb-4 relative z-10">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-[var(--color-neutral-900)]">{testimonial.name}</h5>
                  <p className="text-[var(--color-neutral-600)]">{testimonial.location}</p>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[var(--color-neutral-700)] mb-4 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Trip Badge */}
              <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm">
                {testimonial.trip}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-[var(--color-primary)] mb-2">50,000+</div>
            <p className="text-[var(--color-neutral-600)]">Happy Travelers</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-[var(--color-primary)] mb-2">4.9/5</div>
            <p className="text-[var(--color-neutral-600)]">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-[var(--color-primary)] mb-2">500+</div>
            <p className="text-[var(--color-neutral-600)]">Destinations</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-[var(--color-primary)] mb-2">1,000+</div>
            <p className="text-[var(--color-neutral-600)]">Verified Guides</p>
          </div>
        </div>
      </div>
    </section>
  );
}
