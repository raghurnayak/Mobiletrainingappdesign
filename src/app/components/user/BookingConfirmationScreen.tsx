import { useNavigate, useLocation } from 'react-router-dom';
import { Check, Calendar, Clock, User as UserIcon, DollarSign } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function BookingConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createBooking, currentUser } = useApp();
  const { trainer, date, time } = location.state || {};

  if (!trainer || !date || !time) {
    navigate('/user/home');
    return null;
  }

  const handleConfirm = () => {
    if (currentUser) {
      createBooking({
        trainerId: trainer.id,
        trainerName: trainer.name,
        userId: currentUser.id,
        userName: currentUser.name,
        date,
        time
      });
      navigate('/user/bookings');
    }
  };

  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Confirm Booking</h1>
          <p className="text-muted-foreground">Review your booking details</p>
        </div>

        {/* Booking Details */}
        <div className="p-6 rounded-[20px] bg-card border border-border space-y-6">
          {/* Trainer Info */}
          <div className="flex items-center space-x-4 pb-6 border-b border-border">
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-16 h-16 rounded-2xl object-cover"
            />
            <div>
              <h3 className="font-semibold">{trainer.name}</h3>
              <p className="text-sm text-muted-foreground">{trainer.skill} Trainer</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{time}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{trainer.location}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ${trainer.pricePerSession}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Confirm Booking
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full py-4 rounded-2xl bg-card border border-border text-foreground font-medium hover:border-primary/50 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
