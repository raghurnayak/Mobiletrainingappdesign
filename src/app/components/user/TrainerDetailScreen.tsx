import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, DollarSign, Star, Calendar } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function TrainerDetailScreen() {
  const { trainerId } = useParams();
  const navigate = useNavigate();
  const { trainers } = useApp();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const trainer = trainers.find(t => t.id === trainerId);

  if (!trainer) {
    return <div className="min-h-screen bg-background p-6">Trainer not found</div>;
  }

  const availableDates = ['2026-01-20', '2026-01-21', '2026-01-22', '2026-01-23', '2026-01-24'];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      navigate(`/user/booking/confirm`, {
        state: { trainer, date: selectedDate, time: selectedTime }
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pb-8 overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate('/user/home')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Trainer Card */}
        <div className="p-6 rounded-[20px] bg-card border border-border space-y-6">
          <div className="flex items-start space-x-4">
            <img
              src={trainer.photo}
              alt={trainer.name}
              className="w-24 h-24 rounded-2xl object-cover"
            />
            <div className="flex-1 space-y-2">
              <h1 className="text-2xl font-bold">{trainer.name}</h1>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                  {trainer.skill}
                </span>
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>{trainer.rating}</span>
                </div>
              </div>
              <div className="flex flex-col space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{trainer.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span>${trainer.pricePerSession}/session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <h3 className="font-semibold">About</h3>
            <p className="text-muted-foreground">{trainer.bio}</p>
            <p className="text-sm text-muted-foreground">
              {trainer.experience} years of experience
            </p>
          </div>
        </div>

        {/* Availability Calendar */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>Select Date</span>
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {availableDates.map((date) => {
              const dateObj = new Date(date);
              const isSelected = selectedDate === date;
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`flex-shrink-0 w-20 p-3 rounded-2xl text-center transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30'
                      : 'bg-card border border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-xs opacity-75">{dateObj.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="text-lg font-semibold">{dateObj.getDate()}</div>
                  <div className="text-xs opacity-75">{dateObj.toLocaleDateString('en-US', { month: 'short' })}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        {selectedDate && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Select Time</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30'
                        : 'bg-card border border-border hover:border-primary/50'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Book Button */}
        {selectedDate && selectedTime && (
          <button
            onClick={handleBooking}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Book Slot
          </button>
        )}
      </div>
    </div>
  );
}