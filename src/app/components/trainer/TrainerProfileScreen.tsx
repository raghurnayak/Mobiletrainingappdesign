import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, User, Settings, Mail, Phone, Award, MapPin, DollarSign, Edit, Save } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';
import type { Trainer } from '@/app/context/AppContext';

export function TrainerProfileScreen() {
  const navigate = useNavigate();
  const { currentUser, updateTrainerProfile } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    bio: (currentUser as Trainer)?.bio || '',
    pricePerSession: (currentUser as Trainer)?.pricePerSession || 0,
    experience: (currentUser as Trainer)?.experience || 0
  });

  const handleSave = () => {
    updateTrainerProfile(formData);
    setIsEditing(false);
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

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="text-muted-foreground">Manage your trainer profile</p>
          </div>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 flex items-center space-x-2"
          >
            {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
            <span>{isEditing ? 'Save' : 'Edit'}</span>
          </button>
        </div>

        {/* Profile Card */}
        <div className="p-6 rounded-[20px] bg-card border border-border space-y-6">
          {/* Avatar and Name */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={(currentUser as Trainer)?.photo}
                alt={currentUser?.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-card">
                <Edit className="w-4 h-4 text-white" />
              </button>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold">{currentUser?.name}</h2>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm mt-2">
                {(currentUser as Trainer)?.skill} Trainer
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-input-background text-center">
              <p className="text-2xl font-bold">{(currentUser as Trainer)?.rating || 0}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
            <div className="p-3 rounded-xl bg-input-background text-center">
              <p className="text-2xl font-bold">{(currentUser as Trainer)?.experience || 0}</p>
              <p className="text-xs text-muted-foreground">Years Exp</p>
            </div>
            <div className="p-3 rounded-xl bg-input-background text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <h3 className="font-semibold px-2">Professional Information</h3>

          {/* Bio */}
          <div className="p-4 rounded-[20px] bg-card border border-border">
            <label className="text-sm text-muted-foreground mb-2 block">Bio</label>
            {isEditing ? (
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                rows={3}
                placeholder="Tell clients about yourself..."
              />
            ) : (
              <p className="text-foreground">{(currentUser as Trainer)?.bio}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium">{currentUser?.email}</p>
              </div>
            </div>
          </div>

          {currentUser?.phone && (
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">{currentUser.phone}</p>
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-secondary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Experience (years)</p>
                {isEditing ? (
                  <input
                    type="number"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    min="0"
                  />
                ) : (
                  <p className="font-medium">{(currentUser as Trainer)?.experience} years</p>
                )}
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium">{(currentUser as Trainer)?.location}</p>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center space-x-3">
              <DollarSign className="w-5 h-5 text-secondary" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Price per Session</p>
                {isEditing ? (
                  <input
                    type="number"
                    value={formData.pricePerSession}
                    onChange={(e) => setFormData({ ...formData, pricePerSession: parseFloat(e.target.value) })}
                    className="w-full mt-1 px-3 py-2 rounded-lg bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                    min="0"
                    step="0.01"
                  />
                ) : (
                  <p className="font-medium">${(currentUser as Trainer)?.pricePerSession}</p>
                )}
              </div>
            </div>
          </div>
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
          <button className="flex flex-col items-center space-y-1 text-secondary">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Profile</span>
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
