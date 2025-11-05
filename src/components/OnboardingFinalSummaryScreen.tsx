import { Button } from "./ui/button";
import { Sparkles, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface OnboardingFinalSummaryScreenProps {
  userName: string;
  selectedFrequency: string;
  selectedExperience: string;
  onStartAdventure: () => void;
}

const frequencyText: Record<string, string> = {
  '2-3-dias': '2-3',
  '4-5-dias': '4-5',
  '6-7-dias': '6-7'
};

const experienceTitles: Record<string, string> = {
  'principiante': 'Principiante',
  'intermedio': 'Intermedio',
  'avanzado': 'Avanzado'
};

const planNames: Record<string, string> = {
  '2-3-dias': 'La Senda del Explorador',
  '4-5-dias': 'La Senda del Titán',
  '6-7-dias': 'La Senda del Conquistador'
};

export function OnboardingFinalSummaryScreen({ userName, selectedFrequency, selectedExperience, onStartAdventure }: OnboardingFinalSummaryScreenProps) {
  const [showTyping, setShowTyping] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const trainingDays = frequencyText[selectedFrequency] || '4-5';
  const experienceLevel = experienceTitles[selectedExperience] || 'Intermedio';
  const planName = planNames[selectedFrequency] || 'La Senda del Titán';

  useEffect(() => {
    // Show typing indicator for 2 seconds, then show final message
    const timer = setTimeout(() => {
      setShowTyping(false);
      setShowFinalMessage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3 max-w-[280px]"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              Ninguna, todo bien.
            </p>
          </div>
        </div>

        {/* AI Typing Indicator */}
        {showTyping && (
          <div className="flex gap-3 mb-4">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <Loader2 className="w-5 h-5 animate-spin" style={{ color: '#FFFFFF' }} />
            </div>
            <div 
              className="rounded-2xl rounded-tl-sm px-5 py-4"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
                  backgroundColor: '#D4AF37',
                  animationDelay: '0ms'
                }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
                  backgroundColor: '#D4AF37',
                  animationDelay: '150ms'
                }}></div>
                <div className="w-2 h-2 rounded-full animate-bounce" style={{ 
                  backgroundColor: '#D4AF37',
                  animationDelay: '300ms'
                }}></div>
              </div>
            </div>
          </div>
        )}

        {/* AI Final Summary Message */}
        {showFinalMessage && (
          <div className="flex gap-3 mb-6">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
            </div>
            <div 
              className="rounded-2xl rounded-tl-sm px-5 py-4 max-w-[280px]"
              style={{ backgroundColor: '#F5F5F5' }}
            >
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '15px',
                lineHeight: '1.6',
                marginBottom: '12px'
              }}>
                ¡Excelente, <span style={{ fontWeight: '600' }}>{userName}</span>! He procesado todos tus datos:
              </p>
              
              {/* Summary List */}
              <div style={{ marginBottom: '12px' }}>
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '4px'
                }}>
                  <span style={{ fontWeight: '600' }}>Meta:</span> Ganar Fuerza
                </p>
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '4px'
                }}>
                  <span style={{ fontWeight: '600' }}>Nivel:</span> {experienceLevel}
                </p>
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '4px'
                }}>
                  <span style={{ fontWeight: '600' }}>Freq:</span> {trainingDays} días
                </p>
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  <span style={{ fontWeight: '600' }}>Datos:</span> 70kg, 175cm, Gimnasio
                </p>
              </div>
              
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '15px',
                lineHeight: '1.6'
              }}>
                He diseñado un plan de <span style={{ fontWeight: '600' }}>7 días</span> para tu <span style={{ 
                  fontWeight: '600',
                  color: '#D4AF37'
                }}>'{planName}'</span>. ¿Listo para empezar?
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Button - Fixed at Bottom - Only show after final message */}
      {showFinalMessage && (
        <div className="px-6 pb-8">
          <Button
            onClick={onStartAdventure}
            className="w-full h-14 rounded-xl"
            style={{
              backgroundColor: '#D4AF37',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            ¡Empezar Aventura!
          </Button>
        </div>
      )}
    </div>
  );
}
