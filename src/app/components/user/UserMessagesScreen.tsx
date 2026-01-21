import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Calendar, MessageSquare, User, Search } from 'lucide-react';
import { useApp } from '@/app/context/AppContext';

export function UserMessagesScreen() {
  const navigate = useNavigate();
  const { trainers } = useApp();

  // Mock messages based on trainers
  const messages = trainers.slice(0, 3).map((trainer, index) => ({
    id: trainer.id,
    name: trainer.name,
    photo: trainer.photo,
    lastMessage: index === 0 ? "See you at 2 PM tomorrow!" : index === 1 ? "Thanks for booking!" : "Looking forward to our session",
    time: index === 0 ? "2m ago" : index === 1 ? "1h ago" : "2h ago",
    unread: index === 0
  }));

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
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">Chat with your trainers</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search messages..."
          />
        </div>

        {/* Messages List */}
        <div className="space-y-3">
          {messages.map((message) => (
            <button
              key={message.id}
              className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all duration-300 text-left"
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={message.photo}
                    alt={message.name}
                    className="w-14 h-14 rounded-2xl object-cover"
                  />
                  {message.unread && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-xs text-white font-bold">1</span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold truncate">{message.name}</h3>
                    <span className="text-xs text-muted-foreground ml-2">{message.time}</span>
                  </div>
                  <p className={`text-sm truncate ${message.unread ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                    {message.lastMessage}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {messages.length === 0 && (
          <div className="p-12 rounded-[20px] bg-card border border-border text-center space-y-4">
            <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto" />
            <div>
              <p className="font-semibold">No messages yet</p>
              <p className="text-sm text-muted-foreground mt-1">Start a conversation with a trainer</p>
            </div>
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
          <button
            onClick={() => navigate('/user/bookings')}
            className="flex flex-col items-center space-y-1 text-muted-foreground hover:text-foreground transition-colors"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-xs">Bookings</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-primary">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Messages</span>
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
