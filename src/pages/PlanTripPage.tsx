import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useRouter } from '../lib/router';
import { 
  MapPin, Calendar, Users, DollarSign, ArrowRight, 
  Plane, Home, Car, UserCheck, CheckCircle
} from 'lucide-react';

export function PlanTripPage() {
  const { navigate } = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: 1000,
    interests: [] as string[],
    accommodation: '',
    transportation: '',
  });

  const interests = [
    'Historical Sites', 'Adventure', 'Beach & Relaxation', 'Cultural Experiences',
    'Food & Dining', 'Shopping', 'Wildlife', 'Photography', 'Spiritual',' Wellness'
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-[var(--color-primary)] mb-4">Where do you want to go?</h3>
            
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">Start Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--color-neutral-700)] mb-2">End Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                  <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Number of Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type="number"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: parseInt(e.target.value) })}
                  min="1"
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-[var(--color-primary)] mb-4">What's your budget?</h3>
            
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-4">
                Budget: ${formData.budget}
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-[var(--color-neutral-600)] mt-2">
                <span>$100</span>
                <span>$10,000+</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <button
                onClick={() => setFormData({ ...formData, budget: 500 })}
                className="p-4 border-2 border-[var(--color-neutral-300)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
              >
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-[var(--color-accent)]" />
                <p className="text-sm">Budget</p>
                <p className="text-xs text-[var(--color-neutral-600)]">$100-$1000</p>
              </button>
              <button
                onClick={() => setFormData({ ...formData, budget: 2000 })}
                className="p-4 border-2 border-[var(--color-neutral-300)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
              >
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-[var(--color-secondary)]" />
                <p className="text-sm">Mid-Range</p>
                <p className="text-xs text-[var(--color-neutral-600)]">$1000-$5000</p>
              </button>
              <button
                onClick={() => setFormData({ ...formData, budget: 7500 })}
                className="p-4 border-2 border-[var(--color-neutral-300)] rounded-lg hover:border-[var(--color-primary)] transition-colors"
              >
                <DollarSign className="h-6 w-6 mx-auto mb-2 text-[var(--color-primary)]" />
                <p className="text-sm">Luxury</p>
                <p className="text-xs text-[var(--color-neutral-600)]">$5000+</p>
              </button>
            </div>

            <div className="bg-[var(--color-neutral-100)] rounded-lg p-6 mt-6">
              <h5 className="text-[var(--color-neutral-900)] mb-4">Estimated Breakdown</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span>${(formData.budget * 0.4).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Transportation</span>
                  <span>${(formData.budget * 0.3).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Food & Activities</span>
                  <span>${(formData.budget * 0.2).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Miscellaneous</span>
                  <span>${(formData.budget * 0.1).toFixed(0)}</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-[var(--color-primary)] mb-4">What interests you?</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => {
                    const updated = formData.interests.includes(interest)
                      ? formData.interests.filter(i => i !== interest)
                      : [...formData.interests, interest];
                    setFormData({ ...formData, interests: updated });
                  }}
                  className={`p-4 border-2 rounded-lg transition-all ${
                    formData.interests.includes(interest)
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'border-[var(--color-neutral-300)] hover:border-[var(--color-primary)]'
                  }`}
                >
                  {formData.interests.includes(interest) && (
                    <CheckCircle className="h-5 w-5 text-[var(--color-primary)] mb-2" />
                  )}
                  <p className="text-sm">{interest}</p>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-[var(--color-primary)] mb-4">Additional Preferences</h3>
            
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Preferred Accommodation</label>
              <select
                value={formData.accommodation}
                onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              >
                <option value="">Select accommodation type</option>
                <option value="hotel">Hotel</option>
                <option value="resort">Resort</option>
                <option value="hostel">Hostel</option>
                <option value="vacation-rental">Vacation Rental</option>
                <option value="homestay">Homestay</option>
              </select>
            </div>

            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Transportation Preference</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setFormData({ ...formData, transportation: 'flight' })}
                  className={`p-4 border-2 rounded-lg transition-all flex flex-col items-center ${
                    formData.transportation === 'flight'
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'border-[var(--color-neutral-300)]'
                  }`}
                >
                  <Plane className="h-6 w-6 mb-2" />
                  <span>Flight</span>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, transportation: 'train' })}
                  className={`p-4 border-2 rounded-lg transition-all flex flex-col items-center ${
                    formData.transportation === 'train'
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'border-[var(--color-neutral-300)]'
                  }`}
                >
                  <Car className="h-6 w-6 mb-2" />
                  <span>Train</span>
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-[var(--color-neutral-700)]">I need a local guide</span>
              </label>
            </div>

            <div className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)] rounded-lg p-4">
              <p className="text-sm text-[var(--color-neutral-700)]">
                <strong>Note:</strong> Based on your preferences, we'll create a personalized itinerary 
                with recommendations for accommodations, activities, and local guides.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-[var(--color-primary)] mb-4">Plan Your Perfect Trip</h1>
            <p className="text-[var(--color-neutral-600)] text-xl">
              Tell us about your travel preferences and we'll create a personalized itinerary
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= s
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--color-neutral-300)] text-[var(--color-neutral-600)]'
                    }`}
                  >
                    {s}
                  </div>
                  {s < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > s ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-neutral-300)]'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-[var(--color-neutral-600)]">
              <span>Destination</span>
              <span>Budget</span>
              <span>Interests</span>
              <span>Preferences</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className="px-8 py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {step < 4 ? (
              <button
                onClick={handleNext}
                className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors flex items-center space-x-2"
              >
                <span>Next</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors flex items-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Create Itinerary</span>
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
