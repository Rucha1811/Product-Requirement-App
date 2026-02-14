import { Globe, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-[var(--color-secondary)]" />
              <span className="text-white" style={{ fontFamily: 'var(--font-family-display)' }}>
                Just Roam
              </span>
            </div>
            <p className="text-white/70 mb-4">
              Your trusted companion for personalized travel experiences across 20+ genres 
              with local expertise and comprehensive support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="#explore" className="text-white/70 hover:text-white transition-colors">
                  Explore Destinations
                </a>
              </li>
              <li>
                <a href="#plan" className="text-white/70 hover:text-white transition-colors">
                  Plan Trip
                </a>
              </li>
              <li>
                <a href="#guides" className="text-white/70 hover:text-white transition-colors">
                  Local Guides
                </a>
              </li>
              <li>
                <a href="#stories" className="text-white/70 hover:text-white transition-colors">
                  Audio Stories
                </a>
              </li>
              <li>
                <a href="#help" className="text-white/70 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-white/70 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/become-guide" className="text-white/70 hover:text-white transition-colors">
                  Become a Guide
                </a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-white transition-colors">
                  Travel Blog
                </a>
              </li>
              <li>
                <a href="/press" className="text-white/70 hover:text-white transition-colors">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[var(--color-secondary)] mt-0.5" />
                <a href="mailto:support@justroam.com" className="text-white/70 hover:text-white transition-colors">
                  support@justroam.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[var(--color-secondary)] mt-0.5" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--color-secondary)] mt-0.5" />
                <span className="text-white/70">
                  123 Travel Street<br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 Just Roam. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <select className="bg-white/10 text-white border border-white/20 rounded px-3 py-1 text-sm outline-none">
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
              <select className="bg-white/10 text-white border border-white/20 rounded px-3 py-1 text-sm outline-none">
                <option value="usd">USD $</option>
                <option value="eur">EUR €</option>
                <option value="gbp">GBP £</option>
                <option value="inr">INR ₹</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
