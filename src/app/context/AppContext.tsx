import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'user' | 'trainer' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'trainer';
  phone?: string;
}

export interface Trainer extends User {
  role: 'trainer';
  skill: string;
  experience: number;
  location: string;
  pricePerSession: number;
  bio: string;
  rating: number;
  availability: AvailabilitySlot[];
  photo: string;
}

export interface AvailabilitySlot {
  id: string;
  date: string;
  timeSlots: string[];
}

export interface Booking {
  id: string;
  trainerId: string;
  trainerName: string;
  userId: string;
  userName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'rejected';
}

interface AppContextType {
  currentUser: User | Trainer | null;
  userRole: UserRole;
  trainers: Trainer[];
  bookings: Booking[];
  login: (user: User | Trainer) => void;
  logout: () => void;
  registerUser: (userData: Partial<User>) => void;
  registerTrainer: (trainerData: Partial<Trainer>) => void;
  createBooking: (booking: Omit<Booking, 'id' | 'status'>) => void;
  updateBookingStatus: (bookingId: string, status: 'confirmed' | 'rejected') => void;
  updateTrainerAvailability: (availability: AvailabilitySlot[]) => void;
  updateTrainerProfile: (profileData: Partial<Trainer>) => void;
  updateUserProfile: (profileData: Partial<User>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | Trainer | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  
  // Mock trainers data
  const [trainers, setTrainers] = useState<Trainer[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'trainer',
      skill: 'Fitness',
      experience: 5,
      location: 'Online',
      pricePerSession: 50,
      bio: 'Certified personal trainer specializing in strength training and nutrition.',
      rating: 4.8,
      photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400',
      availability: []
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike@example.com',
      role: 'trainer',
      skill: 'Coding',
      experience: 8,
      location: 'Offline',
      pricePerSession: 80,
      bio: 'Full-stack developer with expertise in React, Node.js, and Python.',
      rating: 4.9,
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      availability: []
    },
    {
      id: '3',
      name: 'Emma Davis',
      email: 'emma@example.com',
      role: 'trainer',
      skill: 'Yoga',
      experience: 10,
      location: 'Online',
      pricePerSession: 45,
      bio: 'Experienced yoga instructor focusing on mindfulness and flexibility.',
      rating: 4.7,
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      availability: []
    },
    {
      id: '4',
      name: 'James Wilson',
      email: 'james@example.com',
      role: 'trainer',
      skill: 'Fitness',
      experience: 7,
      location: 'Offline',
      pricePerSession: 60,
      bio: 'CrossFit coach and nutritionist helping clients achieve their fitness goals.',
      rating: 4.6,
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      availability: []
    }
  ]);

  const [bookings, setBookings] = useState<Booking[]>([]);

  const login = (user: User | Trainer) => {
    setCurrentUser(user);
    setUserRole(user.role);
  };

  const logout = () => {
    setCurrentUser(null);
    setUserRole(null);
  };

  const registerUser = (userData: Partial<User>) => {
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name || '',
      email: userData.email || '',
      phone: userData.phone,
      role: 'user'
    };
    setCurrentUser(newUser);
    setUserRole('user');
  };

  const registerTrainer = (trainerData: Partial<Trainer>) => {
    const newTrainer: Trainer = {
      id: Date.now().toString(),
      name: trainerData.name || '',
      email: trainerData.email || '',
      phone: trainerData.phone,
      role: 'trainer',
      skill: trainerData.skill || '',
      experience: trainerData.experience || 0,
      location: trainerData.location || '',
      pricePerSession: trainerData.pricePerSession || 0,
      bio: trainerData.bio || '',
      rating: 0,
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      availability: []
    };
    setTrainers(prev => [...prev, newTrainer]);
    setCurrentUser(newTrainer);
    setUserRole('trainer');
  };

  const createBooking = (bookingData: Omit<Booking, 'id' | 'status'>) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
      status: 'pending'
    };
    setBookings(prev => [...prev, newBooking]);
  };

  const updateBookingStatus = (bookingId: string, status: 'confirmed' | 'rejected') => {
    setBookings(prev =>
      prev.map(booking =>
        booking.id === bookingId ? { ...booking, status } : booking
      )
    );
  };

  const updateTrainerAvailability = (availability: AvailabilitySlot[]) => {
    if (currentUser && currentUser.role === 'trainer') {
      const updatedTrainer = { ...currentUser, availability } as Trainer;
      setCurrentUser(updatedTrainer);
      setTrainers(prev =>
        prev.map(trainer =>
          trainer.id === currentUser.id ? updatedTrainer : trainer
        )
      );
    }
  };

  const updateTrainerProfile = (profileData: Partial<Trainer>) => {
    if (currentUser && currentUser.role === 'trainer') {
      const updatedTrainer = { ...currentUser, ...profileData } as Trainer;
      setCurrentUser(updatedTrainer);
      setTrainers(prev =>
        prev.map(trainer =>
          trainer.id === currentUser.id ? updatedTrainer : trainer
        )
      );
    }
  };

  const updateUserProfile = (profileData: Partial<User>) => {
    if (currentUser && currentUser.role === 'user') {
      const updatedUser = { ...currentUser, ...profileData } as User;
      setCurrentUser(updatedUser);
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        userRole,
        trainers,
        bookings,
        login,
        logout,
        registerUser,
        registerTrainer,
        createBooking,
        updateBookingStatus,
        updateTrainerAvailability,
        updateTrainerProfile,
        updateUserProfile
      }}
    >
      {children}
    </AppContext.Provider>
  );
};