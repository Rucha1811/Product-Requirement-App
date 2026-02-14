import { useState } from 'react';
import { useRouter } from '../lib/router';
import { useAuth } from '../lib/auth';
import { Globe, Mail, Lock, Eye, EyeOff } from 'lucide-react';

export function LoginPage() {
  const { navigate } = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Globe className="h-12 w-12 text-white" />
            <span className="text-white text-3xl" style={{ fontFamily: 'var(--font-family-display)' }}>
              Just Roam
            </span>
          </div>
          <p className="text-white/80">Welcome back! Log in to continue your journey.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-[var(--color-primary)] mb-6 text-center">Login to Your Account</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[var(--color-neutral-700)] mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-[var(--color-neutral-700)]">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[var(--color-primary)] text-white py-3 rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-[var(--color-neutral-100)] rounded-lg">
            <p className="text-sm text-[var(--color-neutral-700)] mb-2">Demo Credentials:</p>
            <p className="text-sm text-[var(--color-neutral-600)]">
              User: user@justroam.com<br />
              Guide: guide@justroam.com<br />
              Admin: admin@justroam.com<br />
              Password: any
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-[var(--color-neutral-300)]"></div>
            <span className="px-4 text-[var(--color-neutral-500)]">or</span>
            <div className="flex-1 border-t border-[var(--color-neutral-300)]"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors flex items-center justify-center space-x-2">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5" />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-[var(--color-neutral-600)]">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              Sign up
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
