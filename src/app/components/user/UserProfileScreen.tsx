import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, MessageSquare, User, Mail, Phone, LogOut, Edit } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function UserProfileScreen() {
  const navigate = useNavigate();
  const { currentUser, logout } = useApp();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-24 overflow-y-auto scrollbar-hide">
      {/* Header with Back Button */}
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate('/user/home')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your account</p>
        </div>

        {/* Profile Card */}
        <div className="p-6 rounded-[20px] bg-card border border-border space-y-6">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-2 border-card">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{currentUser?.name}</h2>
              <p className="text-sm text-muted-foreground">User Account</p>
            </div>
          </div>

          {/* Info Fields */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-input-background border border-border">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{currentUser?.email}</p>
                </div>
              </div>
            </div>

            {currentUser?.phone && (
              <div className="p-4 rounded-xl bg-input-background border border-border">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">{currentUser.phone}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Settings Section */}
        <div className="space-y-3">
          <h3 className="font-semibold px-2">Settings</h3>
          
          <button 
            onClick={() => navigate('/user/edit-profile')}
            className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="font-medium">Edit Profile</span>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button 
            onClick={() => navigate('/user/notifications')}
            className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="font-medium">Notifications</span>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button 
            onClick={() => navigate('/user/privacy-security')}
            className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="font-medium">Privacy & Security</span>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button 
            onClick={() => navigate('/user/help-support')}
            className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center justify-between">
              <span className="font-medium">Help & Support</span>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full p-4 rounded-[20px] bg-destructive/10 border border-destructive/20 hover:bg-destructive/20 transition-all text-destructive font-medium flex items-center justify-center space-x-2"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg">
        <div className="flex items-center justify-around p-4 max-w-md mx-auto">
          <button
            onClick={() => navigate('/user/home')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => navigate('/user/bookings')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs">Bookings</span>
          </button>
          <button
            onClick={() => navigate('/user/messages')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs">Messages</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}