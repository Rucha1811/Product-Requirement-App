import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from '../lib/router';
import { 
  Users, MapPin, DollarSign, TrendingUp, Calendar, 
  Settings, LogOut, BarChart3, Package, MessageSquare,
  Shield, AlertCircle, CheckCircle, Clock, FileText
} from 'lucide-react';

export function AdminDashboard() {
  const { user, isAdmin, logout } = useAuth();
  const { navigate } = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  if (!isAdmin) {
    navigate('/dashboard');
    return null;
  }

  const stats = [
    { icon: Users, label: 'Total Users', value: '12,459', change: '+12%', color: 'text-blue-500' },
    { icon: MapPin, label: 'Active Destinations', value: '523', change: '+8%', color: 'text-green-500' },
    { icon: DollarSign, label: 'Revenue (MTD)', value: '$124,567', change: '+15%', color: 'text-purple-500' },
    { icon: Package, label: 'Total Bookings', value: '3,847', change: '+23%', color: 'text-orange-500' },
  ];

  const recentBookings = [
    { id: 1, user: 'John Doe', destination: 'Taj Mahal', date: '2025-12-15', status: 'confirmed', amount: 299 },
    { id: 2, user: 'Sarah Smith', destination: 'Dubai Tour', date: '2026-01-05', status: 'pending', amount: 1799 },
    { id: 3, user: 'Mike Johnson', destination: 'Himalayan Trek', date: '2025-12-20', status: 'confirmed', amount: 899 },
    { id: 4, user: 'Emily Chen', destination: 'Kerala Backwaters', date: '2026-01-12', status: 'confirmed', amount: 599 },
    { id: 5, user: 'David Lee', destination: 'Varanasi Spiritual', date: '2025-12-18', status: 'pending', amount: 399 },
  ];

  const pendingApprovals = [
    { id: 1, type: 'Guide', name: 'Rajesh Kumar', location: 'Agra', status: 'pending' },
    { id: 2, type: 'Artisan', name: 'Lakshmi Devi', location: 'Varanasi', status: 'pending' },
    { id: 3, type: 'Destination', name: 'Kerala Houseboat', location: 'Alleppey', status: 'pending' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                      <span className="text-[var(--color-accent)] text-sm">{stat.change}</span>
                    </div>
                    <div className="text-[var(--color-neutral-900)] mb-1">{stat.value}</div>
                    <p className="text-[var(--color-neutral-600)] text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-[var(--color-neutral-900)] mb-4">Recent Bookings</h4>
                <div className="space-y-3">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border border-[var(--color-neutral-200)] rounded-lg">
                      <div>
                        <p className="text-[var(--color-neutral-900)]">{booking.user}</p>
                        <p className="text-[var(--color-neutral-600)] text-sm">{booking.destination}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[var(--color-primary)]">${booking.amount}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                          booking.status === 'confirmed' 
                            ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Approvals */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="text-[var(--color-neutral-900)] mb-4">Pending Approvals</h4>
                <div className="space-y-3">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="p-4 border border-[var(--color-neutral-200)] rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className="inline-block px-2 py-1 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded text-xs mr-2">
                            {item.type}
                          </span>
                          <span className="text-[var(--color-neutral-900)]">{item.name}</span>
                        </div>
                        <Clock className="h-4 w-4 text-yellow-500" />
                      </div>
                      <p className="text-[var(--color-neutral-600)] text-sm mb-3">{item.location}</p>
                      <div className="flex space-x-2">
                        <button className="flex-1 px-3 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors text-sm">
                          Approve
                        </button>
                        <button className="flex-1 px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors text-sm">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-[var(--color-neutral-200)]">
              <h3 className="text-[var(--color-neutral-900)]">User Management</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[var(--color-neutral-50)]">
                  <tr>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">User</th>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">Email</th>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">Role</th>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">Joined</th>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">Status</th>
                    <th className="px-6 py-3 text-left text-[var(--color-neutral-700)]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-neutral-200)]">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <tr key={idx} className="hover:bg-[var(--color-neutral-50)]">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-[var(--color-primary)]" />
                          </div>
                          <span className="text-[var(--color-neutral-900)]">User {idx + 1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-600)]">user{idx + 1}@example.com</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Traveler</span>
                      </td>
                      <td className="px-6 py-4 text-[var(--color-neutral-600)]">Nov {idx + 10}, 2025</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Active</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'bookings':
        return (
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-[var(--color-neutral-900)] mb-6">Booking Management</h3>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="p-4 border border-[var(--color-neutral-200)] rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[var(--color-neutral-900)] mb-1">Booking #{booking.id}</h4>
                      <p className="text-[var(--color-neutral-600)]">{booking.user} • {booking.destination}</p>
                      <p className="text-[var(--color-neutral-500)] text-sm mt-1">{booking.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[var(--color-primary)] mb-2">${booking.amount}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                        booking.status === 'confirmed' 
                          ? 'bg-[var(--color-accent)]/20 text-[var(--color-accent)]'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <MapPin className="h-8 w-8 text-[var(--color-primary)] mb-4" />
              <h4 className="text-[var(--color-neutral-900)] mb-2">Destinations</h4>
              <p className="text-[var(--color-neutral-600)] mb-4">Manage travel destinations and itineraries</p>
              <button className="w-full px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
                Manage
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <Users className="h-8 w-8 text-[var(--color-secondary)] mb-4" />
              <h4 className="text-[var(--color-neutral-900)] mb-2">Guides</h4>
              <p className="text-[var(--color-neutral-600)] mb-4">Manage local guides and approvals</p>
              <button className="w-full px-4 py-2 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                Manage
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <Package className="h-8 w-8 text-[var(--color-accent)] mb-4" />
              <h4 className="text-[var(--color-neutral-900)] mb-2">Artisans</h4>
              <p className="text-[var(--color-neutral-600)] mb-4">Manage local artisan profiles</p>
              <button className="w-full px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent-dark)] transition-colors">
                Manage
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      {/* Top Bar */}
      <div className="bg-white shadow-sm border-b border-[var(--color-neutral-200)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-[var(--color-primary)]" />
              <div>
                <h4 className="text-[var(--color-neutral-900)]">Admin Dashboard</h4>
                <p className="text-[var(--color-neutral-500)] text-sm">Just Roam Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="text-[var(--color-neutral-600)] hover:text-[var(--color-primary)]"
              >
                User Dashboard
              </button>
              <button 
                onClick={() => {
                  logout();
                  navigate('/');
                }}
                className="flex items-center space-x-2 text-[var(--color-neutral-600)] hover:text-red-600"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-md p-4 space-y-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'users' 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                <Users className="h-5 w-5" />
                <span>Users</span>
              </button>
              <button
                onClick={() => setActiveTab('bookings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'bookings' 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Bookings</span>
              </button>
              <button
                onClick={() => setActiveTab('content')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'content' 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                <FileText className="h-5 w-5" />
                <span>Content</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-[var(--color-primary)] text-white' 
                    : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                }`}
              >
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
