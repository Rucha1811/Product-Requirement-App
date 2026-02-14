import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useAuth } from '../lib/auth';
import { useRouter } from '../lib/router';
import { 
  Bell, Lock, Globe, CreditCard, Shield, 
  Download, Trash2, Save, Eye, EyeOff 
} from 'lucide-react';

export function SettingsPage() {
  const { isAuthenticated } = useAuth();
  const { navigate } = useRouter();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: true,
    bookingUpdates: true,
    travelTips: true,
    language: 'en',
    currency: 'usd',
    timezone: 'pst',
    twoFactor: false,
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
          <h1 className="text-[var(--color-primary)] mb-8">Settings</h1>

          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Bell className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="text-[var(--color-neutral-900)]">Notifications</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[var(--color-neutral-900)]">Email Notifications</p>
                    <p className="text-sm text-[var(--color-neutral-600)]">Receive updates via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.emailNotifications}
                      onChange={(e) => setSettings({ ...settings, emailNotifications: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[var(--color-neutral-300)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--color-neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[var(--color-neutral-900)]">Push Notifications</p>
                    <p className="text-sm text-[var(--color-neutral-600)]">Receive push notifications</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.pushNotifications}
                      onChange={(e) => setSettings({ ...settings, pushNotifications: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[var(--color-neutral-300)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--color-neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[var(--color-neutral-900)]">Booking Updates</p>
                    <p className="text-sm text-[var(--color-neutral-600)]">Get notified about booking changes</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.bookingUpdates}
                      onChange={(e) => setSettings({ ...settings, bookingUpdates: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-[var(--color-neutral-300)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--color-neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="text-[var(--color-neutral-900)]">Security</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showOldPassword ? 'text' : 'password'}
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 pr-12 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-neutral-400)]"
                    >
                      {showOldPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 pr-12 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-neutral-400)]"
                    >
                      {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                  Update Password
                </button>

                <div className="pt-4 border-t border-[var(--color-neutral-200)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[var(--color-neutral-900)]">Two-Factor Authentication</p>
                      <p className="text-sm text-[var(--color-neutral-600)]">Add an extra layer of security</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.twoFactor}
                        onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-[var(--color-neutral-300)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[var(--color-primary)]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[var(--color-neutral-300)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Globe className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="text-[var(--color-neutral-900)]">Preferences</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिंदी (Hindi)</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--color-neutral-700)] mb-2">Currency</label>
                  <select
                    value={settings.currency}
                    onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="inr">INR (₹)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data & Privacy */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-6 w-6 text-[var(--color-primary)]" />
                <h3 className="text-[var(--color-neutral-900)]">Data & Privacy</h3>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between px-4 py-3 border border-[var(--color-neutral-300)] rounded-lg hover:bg-[var(--color-neutral-50)] transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="h-5 w-5 text-[var(--color-primary)]" />
                    <span>Download My Data</span>
                  </div>
                </button>

                <button className="w-full flex items-center justify-between px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Trash2 className="h-5 w-5" />
                    <span>Delete Account</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <button className="w-full px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors flex items-center justify-center space-x-2">
              <Save className="h-5 w-5" />
              <span>Save All Changes</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
