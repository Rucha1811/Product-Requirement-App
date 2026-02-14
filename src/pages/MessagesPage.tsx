import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useAuth } from '../lib/auth';
import { useRouter } from '../lib/router';
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const conversations = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Local Guide',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    lastMessage: 'Looking forward to showing you around Agra!',
    time: '2 min ago',
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Adventure Guide',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    lastMessage: 'The trek starts at 6 AM',
    time: '1 hour ago',
    unread: 0,
    online: true
  },
  {
    id: 3,
    name: 'Just Roam Support',
    role: 'Support Team',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
    lastMessage: 'Your booking has been confirmed',
    time: '3 hours ago',
    unread: 0,
    online: false
  },
];

const messages = [
  { id: 1, sender: 'other', text: 'Hello! Thanks for booking the Taj Mahal tour.', time: '10:30 AM' },
  { id: 2, sender: 'me', text: 'Hi Rajesh! I\'m excited about the tour.', time: '10:32 AM' },
  { id: 3, sender: 'other', text: 'Great! I\'ll meet you at your hotel at 9 AM. I have a few suggestions for the best photo spots.', time: '10:33 AM' },
  { id: 4, sender: 'me', text: 'Perfect! Should I bring anything specific?', time: '10:35 AM' },
  { id: 5, sender: 'other', text: 'Just your camera and comfortable walking shoes. I\'ll take care of everything else!', time: '10:36 AM' },
  { id: 6, sender: 'other', text: 'Looking forward to showing you around Agra!', time: '10:37 AM' },
];

export function MessagesPage() {
  const { isAuthenticated } = useAuth();
  const { navigate } = useRouter();
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-[var(--color-primary)] mb-8">Messages</h1>

          <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ height: 'calc(100vh - 240px)' }}>
            <div className="flex h-full">
              {/* Conversations List */}
              <div className="w-full md:w-1/3 border-r border-[var(--color-neutral-200)] flex flex-col">
                {/* Search */}
                <div className="p-4 border-b border-[var(--color-neutral-200)]">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-neutral-400)]" />
                    <input
                      type="text"
                      placeholder="Search messages..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>

                {/* Conversation List */}
                <div className="flex-1 overflow-y-auto">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedChat(conv)}
                      className={`w-full p-4 flex items-start space-x-3 hover:bg-[var(--color-neutral-50)] transition-colors border-b border-[var(--color-neutral-200)] ${
                        selectedChat.id === conv.id ? 'bg-[var(--color-primary)]/5' : ''
                      }`}
                    >
                      <div className="relative flex-shrink-0">
                        <ImageWithFallback
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-accent)] rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-[var(--color-neutral-900)]">{conv.name}</h4>
                          <span className="text-xs text-[var(--color-neutral-500)]">{conv.time}</span>
                        </div>
                        <p className="text-sm text-[var(--color-neutral-600)] mb-1">{conv.role}</p>
                        <p className="text-sm text-[var(--color-neutral-600)] truncate">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="w-6 h-6 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center text-xs">
                          {conv.unread}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b border-[var(--color-neutral-200)] flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <ImageWithFallback
                        src={selectedChat.avatar}
                        alt={selectedChat.name}
                        className="w-10 h-10 rounded-full"
                      />
                      {selectedChat.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--color-accent)] rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-[var(--color-neutral-900)]">{selectedChat.name}</h4>
                      <p className="text-sm text-[var(--color-neutral-600)]">
                        {selectedChat.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                      <Phone className="h-5 w-5 text-[var(--color-neutral-600)]" />
                    </button>
                    <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                      <Video className="h-5 w-5 text-[var(--color-neutral-600)]" />
                    </button>
                    <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                      <MoreVertical className="h-5 w-5 text-[var(--color-neutral-600)]" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          msg.sender === 'me'
                            ? 'bg-[var(--color-primary)] text-white'
                            : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-900)]'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            msg.sender === 'me' ? 'text-white/70' : 'text-[var(--color-neutral-500)]'
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-[var(--color-neutral-200)]">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-[var(--color-neutral-100)] rounded-lg transition-colors">
                      <Paperclip className="h-5 w-5 text-[var(--color-neutral-600)]" />
                    </button>
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 border border-[var(--color-neutral-300)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && messageText.trim()) {
                          // Send message logic
                          setMessageText('');
                        }
                      }}
                    />
                    <button 
                      onClick={() => setMessageText('')}
                      className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
