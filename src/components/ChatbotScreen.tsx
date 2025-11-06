import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Send, Plus, Sparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface ChatbotScreenProps {
  userName: string;
  onBack: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatbotScreen({ userName, onBack }: ChatbotScreenProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `¡Hola ${userName}! Soy Wyz, tu Director de Juego personal. ¿En qué puedo ayudarte hoy? Puedo ayudarte a crear nuevas misiones, ajustar tu plan, o darte consejos para mantener tu motivación.`,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: '¡Entendido! Esta es una simulación de respuesta. En la versión final, aquí usaríamos IA real para responder a tu pregunta y ayudarte con tus metas.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleAddMission = () => {
    const aiMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: '¡Perfecto! Para crear una nueva misión, cuéntame:\n\n1. ¿Qué quieres lograr?\n2. ¿Con qué frecuencia lo harás?\n3. ¿Qué tipo de verificación prefieres? (Manual, Temporizador, o Guía)\n\nPor ejemplo: "Quiero meditar 10 minutos cada mañana"',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col"
      style={{
        backgroundColor: '#FFFFFF'
      }}
    >
      {/* Header */}
      <div 
        className="flex items-center justify-between px-6 py-4"
        style={{
          borderBottom: '1px solid #F5F5F5',
          backgroundColor: '#FFF9E6'
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: '#D4AF37'
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </div>
          <div>
            <h2 style={{ 
              color: '#1F1F1F',
              fontSize: '16px',
              fontWeight: '700'
            }}>
              Wyz
            </h2>
            <p style={{ 
              color: '#6B6B6B',
              fontSize: '12px'
            }}>
              Tu Director de Juego
            </p>
          </div>
        </div>
        <button onClick={onBack}>
          <X className="w-6 h-6" style={{ color: '#1F1F1F' }} />
        </button>
      </div>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-6"
      >
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className="max-w-[80%] rounded-2xl px-4 py-3"
                style={{
                  backgroundColor: message.role === 'user' ? '#D4AF37' : '#F5F5F5',
                  color: message.role === 'user' ? '#FFFFFF' : '#1F1F1F'
                }}
              >
                <p style={{ 
                  fontSize: '14px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap'
                }}>
                  {message.content}
                </p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start">
              <div 
                className="rounded-2xl px-4 py-3 flex gap-1"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ 
                    backgroundColor: '#D4AF37',
                    animationDelay: '0ms'
                  }}
                />
                <div 
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ 
                    backgroundColor: '#D4AF37',
                    animationDelay: '150ms'
                  }}
                />
                <div 
                  className="w-2 h-2 rounded-full animate-bounce"
                  style={{ 
                    backgroundColor: '#D4AF37',
                    animationDelay: '300ms'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="px-6 pb-3">
        <Button
          onClick={handleAddMission}
          className="w-full h-12 rounded-xl"
          variant="outline"
          style={{
            borderColor: '#D4AF37',
            color: '#D4AF37',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          <Plus className="w-5 h-5 mr-2" />
          Añadir Nueva Misión
        </Button>
      </div>

      {/* Input Area */}
      <div 
        className="px-6 pb-6"
        style={{
          borderTop: '1px solid #F5F5F5'
        }}
      >
        <div 
          className="flex gap-2 p-2 rounded-2xl"
          style={{
            backgroundColor: '#F5F5F5'
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-transparent px-4 py-2 outline-none"
            style={{
              color: '#1F1F1F',
              fontSize: '14px'
            }}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: inputValue.trim() && !isLoading ? '#D4AF37' : '#E5E5E5'
            }}
          >
            <Send 
              className="w-5 h-5" 
              style={{ 
                color: inputValue.trim() && !isLoading ? '#FFFFFF' : '#6B6B6B'
              }} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}