import { Button } from "./ui/button";
import { Sparkles, Send } from "lucide-react";

interface OnboardingDataScreen1Props {
  userName: string;
  onSubmit: () => void;
}

export function OnboardingDataScreen1({ userName, onSubmit }: OnboardingDataScreen1Props) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* AI Message - Question about Weight/Height */}
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
              lineHeight: '1.6'
            }}>
              Perfecto. Para la <span style={{ 
                fontWeight: '600',
                color: '#D4AF37'
              }}>'Senda del Titán'</span>, necesito tus métricas. ¿Cuál es tu peso actual (en kg) y tu estatura (en cm)?
            </p>
          </div>
        </div>

        {/* User's Response (Simulated) */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3 max-w-[280px]"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              Claro, peso 70kg y mido 175cm.
            </p>
          </div>
        </div>
      </div>

      {/* Simulated Text Input at Bottom */}
      <div className="px-6 pb-8">
        <div className="flex items-center gap-3">
          {/* Fake Text Input with Pre-filled Text */}
          <div 
            className="flex-1 px-5 py-4 rounded-2xl"
            style={{
              backgroundColor: '#F5F5F5',
              border: '1.5px solid #D4AF37'
            }}
          >
            <p style={{ 
              color: '#1F1F1F',
              fontSize: '15px'
            }}>
              Claro, peso 70kg y mido 175cm.
            </p>
          </div>
          
          {/* Fake Send Button */}
          <Button
            onClick={onSubmit}
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
              backgroundColor: '#D4AF37',
              color: '#FFFFFF'
            }}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
