import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, User, Settings, Plus, Trash2 } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function TrainerAvailabilityScreen() {
  const navigate = useNavigate();
  const { currentUser, updateTrainerAvailability } = useApp();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const availableDates = ['2026-01-20', '2026-01-21', '2026-01-22', '2026-01-23', '2026-01-24', '2026-01-25', '2026-01-26'];
  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const toggleTimeSlot = (time: string) => {
    setSelectedTimes(prev =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    );
  };

  const handleSave = () => {
    if (selectedDate && selectedTimes.length > 0) {
      const availability = [{
        id: Date.now().toString(),
        date: selectedDate,
        timeSlots: selectedTimes
      }];
      updateTrainerAvailability(availability);
      setSelectedDate('');
      setSelectedTimes([]);
    }
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
          <h1 className="text-3xl font-bold">Availability</h1>
          <p className="text-muted-foreground">Set your available time slots</p>
        </div>

        {/* Select Date */}
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
                      ? 'bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30'
                      : 'bg-card border border-border hover:border-secondary/50'
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

        {/* Select Time Slots */}
        {selectedDate && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Add Time Slots</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => {
                const isSelected = selectedTimes.includes(time);
                return (
                  <button
                    key={time}
                    onClick={() => toggleTimeSlot(time)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-secondary to-accent text-white shadow-lg shadow-secondary/30'
                        : 'bg-card border border-border hover:border-secondary/50'
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Save Button */}
        {selectedDate && selectedTimes.length > 0 && (
          <button
            onClick={handleSave}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>Add Availability</span>
          </button>
        )}

        {/* Current Availability */}
        {currentUser && 'availability' in currentUser && currentUser.availability && currentUser.availability.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Current Availability</h2>
            <div className="space-y-3">
              {currentUser.availability.map((slot) => (
                <div
                  key={slot.id}
                  className="p-5 rounded-[20px] bg-card border border-border space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">
                      {new Date(slot.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </h3>
                    <button className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center hover:bg-destructive/20 transition-colors">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slot.timeSlots.map((time) => (
                      <span
                        key={time}
                        className="px-3 py-1.5 rounded-lg bg-secondary/10 text-secondary text-sm"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
          <button className="flex flex-col items-center space-y-1 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Availability</span>
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
