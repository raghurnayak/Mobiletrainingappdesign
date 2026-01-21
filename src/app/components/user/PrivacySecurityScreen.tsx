import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Key, Shield, Eye, Smartphone } from 'lucide-react';

export function PrivacySecurityScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-8 overflow-y-auto scrollbar-hide">
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate('/user/profile')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Privacy & Security</h1>
          <p className="text-muted-foreground">Manage your security settings</p>
        </div>

        {/* Security Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Security</h2>
          
          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Change Password</p>
                <p className="text-sm text-muted-foreground">Update your password regularly</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Trusted Devices</p>
                <p className="text-sm text-muted-foreground">Manage devices that can access your account</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Login History</p>
                <p className="text-sm text-muted-foreground">View recent login activity</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Privacy Settings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Privacy</h2>
          
          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Profile Visibility</p>
                <p className="text-sm text-muted-foreground">Control who can see your profile</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Data & Privacy</p>
                <p className="text-sm text-muted-foreground">Download or delete your data</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Blocked Users</p>
                <p className="text-sm text-muted-foreground">Manage your blocked list</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Danger Zone */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Danger Zone</h2>
          
          <button className="w-full p-5 rounded-[20px] bg-destructive/10 border border-destructive/20 hover:bg-destructive/20 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium text-destructive">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account</p>
              </div>
              <svg className="w-5 h-5 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
