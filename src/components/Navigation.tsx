import { useState } from 'react';
import { Menu, X, Search, User, Globe } from 'lucide-react';
import { useRouter } from '../lib/router';
import { useAuth } from '../lib/auth';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { navigate } = useRouter();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-[var(--color-primary)]" />
              <span className="text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-family-display)' }}>
                Just Roam
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/explore')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Explore Destinations
            </button>
            <button onClick={() => navigate('/plan-trip')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Plan Trip
            </button>
            <button onClick={() => navigate('/guides')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Local Guides
            </button>
            <button onClick={() => navigate('/artisans')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Artisans
            </button>
            <button onClick={() => navigate('/stories')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Audio Stories
            </button>
            <button onClick={() => navigate('/help')} className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              Help & Support
            </button>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[var(--color-neutral-300)] hover:border-[var(--color-primary)] transition-colors"
              >
                <User className="h-5 w-5 text-[var(--color-neutral-700)]" />
                {isAuthenticated && <span className="text-sm">{user?.name}</span>}
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-[var(--color-neutral-200)]">
                  {isAuthenticated ? (
                    <>
                      <button onClick={() => navigate('/dashboard')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                        Dashboard
                      </button>
                      <button onClick={() => navigate('/profile')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                        Profile
                      </button>
                      <button onClick={() => navigate('/messages')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                        Messages
                      </button>
                      {user?.role === 'admin' && (
                        <button onClick={() => navigate('/admin')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                          Admin Panel
                        </button>
                      )}
                      <hr className="my-2" />
                      <button onClick={() => { logout(); navigate('/'); }} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => navigate('/login')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                        Login
                      </button>
                      <button onClick={() => navigate('/register')} className="block w-full text-left px-4 py-2 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]">
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--color-neutral-700)]"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-neutral-200)]">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => { navigate('/explore'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Explore Destinations
            </button>
            <button onClick={() => { navigate('/plan-trip'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Plan Trip
            </button>
            <button onClick={() => { navigate('/guides'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Local Guides
            </button>
            <button onClick={() => { navigate('/artisans'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Artisans
            </button>
            <button onClick={() => { navigate('/stories'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Audio Stories
            </button>
            <button onClick={() => { navigate('/help'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Help & Support
            </button>
            <div className="pt-3 border-t border-[var(--color-neutral-200)] space-y-2">
              {isAuthenticated ? (
                <>
                  <button onClick={() => { navigate('/dashboard'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                    Dashboard
                  </button>
                  <button onClick={() => { navigate('/profile'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                    Profile
                  </button>
                  <button onClick={() => { logout(); navigate('/'); setIsMenuOpen(false); }} className="block w-full text-left text-red-600 hover:text-red-700">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => { navigate('/login'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                    Login
                  </button>
                  <button onClick={() => { navigate('/register'); setIsMenuOpen(false); }} className="block w-full text-left text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}