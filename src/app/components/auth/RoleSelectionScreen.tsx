import { UserCircle, Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RoleSelectionScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Tagline */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Dumbbell className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TrainMe
          </h1>
          <p className="text-muted-foreground">
            Connect with trainers or share your expertise
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          {/* User Card */}
          <button
            onClick={() => navigate('/register/user')}
            className="w-full p-6 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all duration-300 group backdrop-blur-lg shadow-lg hover:shadow-primary/20"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold">Continue as User</h3>
                <p className="text-sm text-muted-foreground">
                  Find and book training sessions
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>

          {/* Trainer Card */}
          <button
            onClick={() => navigate('/register/trainer')}
            className="w-full p-6 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all duration-300 group backdrop-blur-lg shadow-lg hover:shadow-secondary/20"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Dumbbell className="w-8 h-8 text-secondary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold">Continue as Trainer</h3>
                <p className="text-sm text-muted-foreground">
                  Share your skills and earn
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
