import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, MessageCircle, Book, Mail, Phone, FileText } from 'lucide-react';

export function HelpSupportScreen() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: 'How do I book a training session?',
      answer: 'Browse trainers on the home screen, select a trainer, choose an available time slot, and confirm your booking.'
    },
    {
      question: 'Can I cancel a booking?',
      answer: 'Yes, you can cancel a booking from your Bookings page. Please note our cancellation policy.'
    },
    {
      question: 'How do I contact my trainer?',
      answer: 'You can message your trainer directly through the Messages tab after booking a session.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, debit cards, and digital payment methods.'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-8 overflow-y-auto scrollbar-hide">
      <div className="p-6 space-y-6">
        <button
          onClick={() => navigate('/user/profile')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Help & Support</h1>
          <p className="text-muted-foreground">Get help and find answers</p>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Live Chat</p>
                  <p className="text-xs text-muted-foreground">Chat with us</p>
                </div>
              </div>
            </button>

            <button className="p-5 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-xs text-muted-foreground">Send us an email</p>
                </div>
              </div>
            </button>

            <button className="p-5 rounded-[20px] bg-card border border-border hover:border-accent/50 transition-all">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Call</p>
                  <p className="text-xs text-muted-foreground">1-800-TRAINER</p>
                </div>
              </div>
            </button>

            <button className="p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Book className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Help Center</p>
                  <p className="text-xs text-muted-foreground">Browse articles</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="p-5 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all"
              >
                <summary className="font-medium cursor-pointer flex items-center justify-between">
                  <span>{faq.question}</span>
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resources</h2>
          
          <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-primary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Terms of Service</p>
                <p className="text-sm text-muted-foreground">Read our terms and conditions</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-secondary/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Privacy Policy</p>
                <p className="text-sm text-muted-foreground">Learn how we protect your data</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button className="w-full p-4 rounded-[20px] bg-card border border-border hover:border-accent/50 transition-all text-left">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Book className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium">Community Guidelines</p>
                <p className="text-sm text-muted-foreground">Our community standards</p>
              </div>
              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* App Info */}
        <div className="p-5 rounded-[20px] bg-card border border-border text-center">
          <p className="text-sm text-muted-foreground">Training App v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-1">© 2026 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
