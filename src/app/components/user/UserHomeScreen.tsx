import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, MapPin, DollarSign, Calendar, Home, MessageSquare, User } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function UserHomeScreen() {
  const navigate = useNavigate();
  const { trainers, currentUser } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['All', 'Fitness', 'Coding', 'Yoga'];

  const filteredTrainers = trainers.filter(trainer => {
    const matchesSearch = trainer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trainer.skill.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || trainer.skill === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-24 overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="p-6 space-y-6">
        {/* Welcome */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Welcome back,</h1>
          <p className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {currentUser?.name}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search trainers..."
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className={`px-6 py-2.5 rounded-full whitespace-nowrap transition-all ${
                (category === 'All' && !selectedCategory) || selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Top Trainers */}
      <div className="px-6 space-y-4">
        <h2 className="text-xl font-semibold">Top Trainers</h2>
        <div className="space-y-4">
          {filteredTrainers.map((trainer) => (
            <button
              key={trainer.id}
              onClick={() => navigate(`/user/trainer/${trainer.id}`)}
              className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                {/* Trainer Photo */}
                <div className="relative">
                  <img
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-2 border-card">
                    <span className="text-xs text-white font-bold">{trainer.rating}</span>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="flex-1 text-left space-y-1">
                  <h3 className="font-semibold">{trainer.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">
                      {trainer.skill}
                    </span>
                    <span>•</span>
                    <span>{trainer.experience} years</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{trainer.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3.5 h-3.5" />
                      <span>${trainer.pricePerSession}/session</span>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg">
        <div className="flex items-center justify-around p-4 max-w-md mx-auto">
          <button className="flex flex-col items-center space-y-1 text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Home</span>
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