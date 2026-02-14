import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { askGemini } from '../config/api';
import { 
  Search, MessageCircle, Send, Loader, HelpCircle,
  Book, PhoneCall, Mail, Clock, ChevronRight, Bot
} from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I plan my first trip?',
        a: 'Start by browsing our destinations, then use the Plan Trip wizard to create a personalized itinerary based on your budget and preferences.'
      },
      {
        q: 'Is registration required?',
        a: 'You can browse destinations without registration, but creating an account unlocks features like booking, messaging guides, and saving trips.'
      },
    ]
  },
  {
    category: 'Booking & Payment',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, debit cards, and popular digital payment methods including PayPal and Google Pay.'
      },
      {
        q: 'Can I cancel or modify my booking?',
        a: 'Yes, cancellation policies vary by booking type. Most bookings can be modified up to 48 hours before departure.'
      },
    ]
  },
  {
    category: 'Local Guides',
    questions: [
      {
        q: 'Are local guides verified?',
        a: 'Yes, all guides undergo background checks, identity verification, and must maintain a minimum rating to stay active on the platform.'
      },
      {
        q: 'How do I communicate with my guide?',
        a: 'Use our built-in messaging system to communicate directly with guides. Messages are translated automatically if needed.'
      },
    ]
  },
  {
    category: 'Travel Safety',
    questions: [
      {
        q: 'What safety measures are in place?',
        a: 'All guides are verified, we provide emergency contact systems, travel insurance options, and 24/7 support during your trip.'
      },
      {
        q: 'Can I access help during my trip?',
        a: 'Yes, our support team is available 24/7 via chat, phone, or email. Your guide also provides local emergency contacts.'
      },
    ]
  },
];

const quickLinks = [
  { icon: Book, title: 'User Guide', description: 'Complete guide to using Just Roam', link: '#' },
  { icon: PhoneCall, title: '24/7 Support', description: 'Call us anytime for assistance', link: '#' },
  { icon: Mail, title: 'Email Support', description: 'support@justroam.com', link: '#' },
  { icon: Clock, title: 'Track Your Booking', description: 'Check your booking status', link: '#' },
];

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ role: 'user' | 'ai'; message: string }>>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleAskAI = async () => {
    if (!aiQuestion.trim()) return;

    setIsLoading(true);
    const userMessage = aiQuestion;
    setAiQuestion('');

    // Add user message to chat
    setChatHistory([...chatHistory, { role: 'user', message: userMessage }]);

    try {
      const response = await askGemini(userMessage);
      setChatHistory(prev => [...prev, { role: 'ai', message: response }]);
      setAiResponse(response);
    } catch (error) {
      setChatHistory(prev => [...prev, { 
        role: 'ai', 
        message: 'Sorry, I encountered an error. Please try again or contact support.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] py-16 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-white mb-4">How can we help you?</h1>
            <p className="text-white/90 text-xl mb-8">
              Find answers, get support, or chat with our AI assistant
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-2 flex">
              <div className="flex-1 flex items-center px-4">
                <Search className="h-5 w-5 text-[var(--color-neutral-400)] mr-2" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none"
                />
              </div>
              <button className="px-8 py-3 bg-[var(--color-secondary)] text-white rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.link}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[var(--color-primary)]" />
                  </div>
                  <h4 className="text-[var(--color-neutral-900)] mb-2">{link.title}</h4>
                  <p className="text-[var(--color-neutral-600)] text-sm">{link.description}</p>
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* FAQs Section */}
            <div className="lg:col-span-2">
              <h2 className="text-[var(--color-primary)] mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                {(searchQuery ? filteredFAQs : faqs).map((category, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <button
                      onClick={() => setSelectedCategory(selectedCategory === category.category ? null : category.category)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-[var(--color-neutral-50)] hover:bg-[var(--color-neutral-100)] transition-colors"
                    >
                      <h3 className="text-[var(--color-neutral-900)]">{category.category}</h3>
                      <ChevronRight className={`h-5 w-5 text-[var(--color-neutral-600)] transition-transform ${
                        selectedCategory === category.category ? 'rotate-90' : ''
                      }`} />
                    </button>
                    
                    {selectedCategory === category.category && (
                      <div className="p-6 space-y-4">
                        {category.questions.map((item, qIdx) => (
                          <div key={qIdx} className="border-b border-[var(--color-neutral-200)] last:border-0 pb-4 last:pb-0">
                            <div className="flex items-start space-x-3 mb-2">
                              <HelpCircle className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0 mt-1" />
                              <h5 className="text-[var(--color-neutral-900)]">{item.q}</h5>
                            </div>
                            <p className="text-[var(--color-neutral-600)] ml-8">{item.a}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat Assistant */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-24">
                <div className="bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary-dark)] p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white">AI Travel Assistant</h4>
                      <p className="text-white/80 text-sm">Powered by Google Gemini</p>
                    </div>
                  </div>
                </div>

                {/* Chat History */}
                <div className="p-4 h-96 overflow-y-auto bg-[var(--color-neutral-50)]">
                  {chatHistory.length === 0 ? (
                    <div className="text-center text-[var(--color-neutral-500)] mt-20">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Ask me anything about travel!</p>
                      <p className="text-sm mt-2">I can help with planning, bookings, destinations, and more.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {chatHistory.map((chat, idx) => (
                        <div
                          key={idx}
                          className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              chat.role === 'user'
                                ? 'bg-[var(--color-primary)] text-white'
                                : 'bg-white text-[var(--color-neutral-800)] shadow-sm'
                            }`}
                          >
                            <p className="text-sm">{chat.message}</p>
                          </div>
                        </div>
                      ))}
                      {isLoading && (
                        <div className="flex justify-start">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <Loader className="h-5 w-5 text-[var(--color-primary)] animate-spin" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-[var(--color-neutral-200)]">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={aiQuestion}
                      onChange={(e) => setAiQuestion(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAskAI()}
                      placeholder="Ask a question..."
                      className="flex-1 px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleAskAI}
                      disabled={isLoading || !aiQuestion.trim()}
                      className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                  <p className="text-xs text-[var(--color-neutral-500)] mt-2">
                    AI responses are generated and may not always be accurate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-8 text-white text-center">
            <h2 className="text-white mb-4">Still need help?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3 bg-white text-[var(--color-primary)] rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors flex items-center space-x-2">
                <PhoneCall className="h-5 w-5" />
                <span>Call Support</span>
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
