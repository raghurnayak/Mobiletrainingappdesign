import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from '@/app/context/AppContext';
import { RoleSelectionScreen } from '@/app/components/auth/RoleSelectionScreen';
import { UserRegistrationScreen } from '@/app/components/auth/UserRegistrationScreen';
import { TrainerRegistrationScreen } from '@/app/components/auth/TrainerRegistrationScreen';
import { UserHomeScreen } from '@/app/components/user/UserHomeScreen';
import { TrainerDetailScreen } from '@/app/components/user/TrainerDetailScreen';
import { BookingConfirmationScreen } from '@/app/components/user/BookingConfirmationScreen';
import { UserBookingsScreen } from '@/app/components/user/UserBookingsScreen';
import { UserMessagesScreen } from '@/app/components/user/UserMessagesScreen';
import { UserProfileScreen } from '@/app/components/user/UserProfileScreen';
import { EditProfileScreen } from '@/app/components/user/EditProfileScreen';
import { NotificationsScreen } from '@/app/components/user/NotificationsScreen';
import { PrivacySecurityScreen } from '@/app/components/user/PrivacySecurityScreen';
import { HelpSupportScreen } from '@/app/components/user/HelpSupportScreen';
import { TrainerDashboard } from '@/app/components/trainer/TrainerDashboard';
import { TrainerAvailabilityScreen } from '@/app/components/trainer/TrainerAvailabilityScreen';
import { TrainerProfileScreen } from '@/app/components/trainer/TrainerProfileScreen';
import { TrainerSettingsScreen } from '@/app/components/trainer/TrainerSettingsScreen';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="size-full">
          <Routes>
            {/* Auth Routes */}
            <Route path="/" element={<RoleSelectionScreen />} />
            <Route path="/register/user" element={<UserRegistrationScreen />} />
            <Route path="/register/trainer" element={<TrainerRegistrationScreen />} />
            
            {/* User Routes */}
            <Route path="/user/home" element={<UserHomeScreen />} />
            <Route path="/user/trainer/:trainerId" element={<TrainerDetailScreen />} />
            <Route path="/user/booking/confirm" element={<BookingConfirmationScreen />} />
            <Route path="/user/bookings" element={<UserBookingsScreen />} />
            <Route path="/user/messages" element={<UserMessagesScreen />} />
            <Route path="/user/profile" element={<UserProfileScreen />} />
            <Route path="/user/edit-profile" element={<EditProfileScreen />} />
            <Route path="/user/notifications" element={<NotificationsScreen />} />
            <Route path="/user/privacy-security" element={<PrivacySecurityScreen />} />
            <Route path="/user/help-support" element={<HelpSupportScreen />} />
            
            {/* Trainer Routes */}
            <Route path="/trainer/dashboard" element={<TrainerDashboard />} />
            <Route path="/trainer/availability" element={<TrainerAvailabilityScreen />} />
            <Route path="/trainer/profile" element={<TrainerProfileScreen />} />
            <Route path="/trainer/settings" element={<TrainerSettingsScreen />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}