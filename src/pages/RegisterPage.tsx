import { useState } from 'react';
import { useRouter } from '../lib/router';
import { useAuth } from '../lib/auth';
import { Globe, Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

export function RegisterPage() {
  const { navigate } = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.email, formData.password, formData.name, formData.role);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-12 w-12 text-white" />
            <span className="text-white text-3xl" style={{ fontFamily: 'var(--font-family-display)' }}>
              Just Roam
            </span>
          </div>
          <p className="text-white/80">Start your journey with us today!</p>
        </div>

        {/* Register Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-[var(--color-primary)] mb-6 text-center">Create Your Account</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">I want to join as</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
              >
                <option value="user">Traveler</option>
                <option value="guide">Local Guide</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-600)]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start">
                <input type="checkbox" className="mr-2 mt-1" required />
                <span className="text-[var(--color-neutral-700)] text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-[var(--color-neutral-300)]"></div>
            <span className="px-4 text-[var(--color-neutral-500)]">or</span>
            <div className="flex-1 border-t border-[var(--color-neutral-300)]"></div>
          </div>

          {/* Social Register */}
          <div className="space-y-3">
            <button className="w-full py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors flex items-center justify-center space-x-2">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
              <span>Sign up with Google</span>
            </button>
          </div>

          {/* Login Link */}
          <p className="mt-6 text-center text-[var(--color-neutral-600)]">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              Login
            </button>
          </p>

          {/* Back to Home */}
          <p className="mt-4 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-700)]"
            >
              ← Back to Home
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
