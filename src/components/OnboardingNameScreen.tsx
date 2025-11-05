import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles } from "lucide-react";

interface OnboardingNameScreenProps {
  onNext: (name: string) => void;
}

export function OnboardingNameScreen({ onNext }: OnboardingNameScreenProps) {
  const [userName, setUserName] = useState("");

  const handleSubmit = () => {
    if (userName.trim()) {
      onNext(userName);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-end px-6 pb-6">
        {/* AI Message */}
        <div className="flex gap-3 mb-6">
          {/* Avatar */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
          </div>
          
          {/* Message Bubble */}
          <div 
            className="rounded-2xl rounded-tl-sm px-5 py-4 max-w-[280px]"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            <p style={{ 
              color: '#1F1F1F',
              fontSize: '15px',
              lineHeight: '1.5'
            }}>
              ¡Bienvenido/a! Soy <span style={{ fontWeight: '600' }}>Wyz</span>, tu Director de Juego personal. Para empezar, ¿cómo te llamas?
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 pb-8">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Escribe tu nombre..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className="h-12 rounded-xl flex-1"
            style={{
              borderColor: '#D4AF37',
              borderWidth: '1.5px',
              backgroundColor: 'white'
            }}
          />
          <Button
            onClick={handleSubmit}
            disabled={!userName.trim()}
            className="h-12 px-6 rounded-xl"
            style={{
              backgroundColor: userName.trim() ? '#D4AF37' : '#E5E5E5',
              color: '#FFFFFF'
            }}
          >
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
