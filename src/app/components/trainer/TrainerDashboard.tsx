import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Clock, Check, X, Home, Settings, User } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function TrainerDashboard() {
  const navigate = useNavigate();
  const { currentUser, bookings, updateBookingStatus } = useApp();

  const trainerBookings = bookings.filter(b => b.trainerId === currentUser?.id);
  const pendingBookings = trainerBookings.filter(b => b.status === 'pending');
  const confirmedBookings = trainerBookings.filter(b => b.status === 'confirmed');

  const handleAccept = (bookingId: string) => {
    updateBookingStatus(bookingId, 'confirmed');
  };

  const handleReject = (bookingId: string) => {
    updateBookingStatus(bookingId, 'rejected');
  };

  return (
    <div className="min-h-screen bg-background pb-24 overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="p-6 space-y-6">
        {/* Welcome */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-xl bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Welcome, {currentUser?.name}
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-[20px] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <p className="text-2xl font-bold">{trainerBookings.length}</p>
            <p className="text-sm text-muted-foreground">Total Bookings</p>
          </div>

          <div className="p-4 rounded-[20px] bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-secondary" />
            </div>
            <p className="text-2xl font-bold">{pendingBookings.length}</p>
            <p className="text-sm text-muted-foreground">Pending Requests</p>
          </div>
        </div>
      </div>

      {/* Booking Requests */}
      <div className="px-6 space-y-4">
        <h2 className="text-xl font-semibold">Booking Requests</h2>

        {pendingBookings.length === 0 ? (
          <div className="p-8 rounded-[20px] bg-card border border-border text-center">
            <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">No pending requests</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingBookings.map((booking) => (
              <div
                key={booking.id}
                className="p-5 rounded-[20px] bg-card border border-border space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{booking.userName}</h3>
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

                <div className="flex gap-3">
                  <button
                    onClick={() => handleAccept(booking.id)}
                    className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Accept</span>
                  </button>
                  <button
                    onClick={() => handleReject(booking.id)}
                    className="flex-1 py-2.5 rounded-xl bg-destructive/10 text-destructive font-medium hover:bg-destructive/20 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <X className="w-4 h-4" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Confirmed Bookings */}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="text-xl font-semibold pt-4">Upcoming Sessions</h2>
            <div className="space-y-3">
              {confirmedBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-4 rounded-[20px] bg-card border border-border"
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold">{booking.userName}</h3>
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      Confirmed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg">
        <div className="flex items-center justify-around p-4 max-w-md mx-auto">
          <button className="flex flex-col items-center space-y-1 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Dashboard</span>
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
          <button
            onClick={() => navigate('/trainer/settings')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
}