import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, Home, MessageSquare, User } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function UserBookingsScreen() {
  const navigate = useNavigate();
  const { bookings, currentUser } = useApp();

  const userBookings = bookings.filter(b => b.userId === currentUser?.id);
  const pendingBookings = userBookings.filter(b => b.status === 'pending');
  const confirmedBookings = userBookings.filter(b => b.status === 'confirmed');

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
          <h1 className="text-3xl font-bold">My Bookings</h1>
          <p className="text-muted-foreground">Manage your training sessions</p>
        </div>

        {/* Pending Bookings */}
        {pendingBookings.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Pending Confirmation</h2>
            <div className="space-y-3">
              {pendingBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 rounded-[20px] bg-card border border-border space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{booking.trainerName}</h3>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">
                      Pending
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Confirmed Bookings */}
        {confirmedBookings.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Confirmed Sessions</h2>
            <div className="space-y-3">
              {confirmedBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-5 rounded-[20px] bg-card border border-border space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{booking.trainerName}</h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Confirmed
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {userBookings.length === 0 && (
          <div className="p-12 rounded-[20px] bg-card border border-border text-center space-y-4">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto" />
            <div>
              <p className="font-semibold">No bookings yet</p>
              <p className="text-sm text-muted-foreground mt-1">Find a trainer to get started</p>
            </div>
            <button
              onClick={() => navigate('/user/home')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Browse Trainers
            </button>
          </div>
        )}
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
          <button className="flex flex-col items-center space-y-1 text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Bookings</span>
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
          <button
            onClick={() => navigate('/user/profile')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
