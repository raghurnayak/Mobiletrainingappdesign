import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Lock, Award, MapPin, DollarSign, ArrowLeft } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function TrainerRegistrationScreen() {
  const navigate = useNavigate();
  const { registerTrainer } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skill: 'Fitness',
    experience: '',
    location: 'Online',
    pricePerSession: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerTrainer({
      ...formData,
      experience: parseInt(formData.experience),
      pricePerSession: parseFloat(formData.pricePerSession)
    });
    navigate('/trainer/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Trainer Registration</h1>
          <p className="text-muted-foreground">Join as a trainer and start earning</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-8 rounded-[20px] bg-card border border-border backdrop-blur-lg shadow-xl space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="Jane Smith"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="jane@example.com"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            {/* Skill Category */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Skill Category</label>
              <div className="relative">
                <Award className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={formData.skill}
                  onChange={(e) => setFormData({ ...formData, skill: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none"
                  required
                >
                  <option value="Fitness">Fitness</option>
                  <option value="Coding">Coding</option>
                  <option value="Yoga">Yoga</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Experience (years)</label>
              <input
                type="number"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                placeholder="5"
                min="0"
                required
              />
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all appearance-none"
                  required
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
            </div>

            {/* Price per Session */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Price per Session ($)</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="number"
                  value={formData.pricePerSession}
                  onChange={(e) => setFormData({ ...formData, pricePerSession: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="50"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-input-background border border-border focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-medium hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 mt-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
