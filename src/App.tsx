import { Router, Routes, Route } from './lib/router';
import { AuthProvider } from './lib/auth';

// Pages
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { ExplorePage } from './pages/ExplorePage';
import { PlanTripPage } from './pages/PlanTripPage';
import { GuidesPage } from './pages/GuidesPage';
import { ArtisansPage } from './pages/ArtisansPage';
import { StoriesPage } from './pages/StoriesPage';
import { HelpPage } from './pages/HelpPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagesPage } from './pages/MessagesPage';
import { SettingsPage } from './pages/SettingsPage';
import { AboutPage } from './pages/AboutPage';
import { AdminDashboard } from './pages/AdminDashboard';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/artisans" element={<ArtisansPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
