import { ArrowRight, Smartphone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Smartphone className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-white mb-6">
            Start Your Journey Today
          </h2>
          
          <p className="text-white/90 text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of travelers who have discovered their perfect destinations with Just Roam. 
            Create your personalized travel experience in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="px-8 py-4 bg-white text-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors flex items-center space-x-2 group">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Explore Destinations
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to browse & plan</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
