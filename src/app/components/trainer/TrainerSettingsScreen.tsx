import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, User, Settings, Bell, Lock, HelpCircle, LogOut } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function TrainerSettingsScreen() {
  const navigate = useNavigate();
  const { logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-24 overflow-y-auto scrollbar-hide">
      {/* Header with Back Button */}
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate('/trainer/dashboard')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Account Settings */}
          <div className="space-y-3">
            <h3 className="font-semibold px-2">Account</h3>
            
            <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Edit Profile</p>
                  <p className="text-sm text-muted-foreground">Update your information</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Password & Security</p>
                  <p className="text-sm text-muted-foreground">Change password and 2FA</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Preferences */}
          <div className="space-y-3">
            <h3 className="font-semibold px-2">Preferences</h3>
            
            <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-muted-foreground">Manage notification settings</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <div className="p-4 rounded-[20px] bg-card border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Auto-Accept Bookings</p>
                    <p className="text-sm text-muted-foreground">Automatically confirm requests</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-semibold px-2">Support</h3>
            
            <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Help & Support</p>
                  <p className="text-sm text-muted-foreground">FAQs and contact us</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Terms & Privacy</p>
                  <p className="text-sm text-muted-foreground">Legal information</p>
                </div>
                <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full p-4 rounded-[20px] bg-destructive/10 border border-destructive/20 hover:bg-destructive/20 transition-all text-destructive font-medium flex items-center justify-center space-x-2"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg">
        <div className="flex items-center justify-around p-4 max-w-md mx-auto">
          <button
            onClick={() => navigate('/trainer/dashboard')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => navigate('/trainer/availability')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs">Availability</span>
          </button>
          <button
            onClick={() => navigate('/trainer/profile')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs">Profile</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}
