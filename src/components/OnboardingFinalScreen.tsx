import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingFinalScreenProps {
  userName: string;
  selectedFrequency: string;
  onStartAdventure: () => void;
}

const frequencyTitles: Record<string, string> = {
  '2-3-dias': '2-3 días (Enfoque Ligero)',
  '4-5-dias': '4-5 días (Enfoque Intenso)',
  '6-7-dias': '6-7 días (Enfoque Total)'
};

const planNames: Record<string, string> = {
  '2-3-dias': 'La Senda del Explorador',
  '4-5-dias': 'La Senda del Titán',
  '6-7-dias': 'La Senda del Conquistador'
};

const missionCounts: Record<string, string> = {
  '2-3-dias': '3',
  '4-5-dias': '5',
  '6-7-dias': '7'
};

const trainingDays: Record<string, string> = {
  '2-3-dias': '2-3',
  '4-5-dias': '4-5',
  '6-7-dias': '6-7'
};

export function OnboardingFinalScreen({ userName, selectedFrequency, onStartAdventure }: OnboardingFinalScreenProps) {
  const frequencyTitle = frequencyTitles[selectedFrequency] || '4-5 días';
  const planName = planNames[selectedFrequency] || 'La Senda del Titán';
  const missionCount = missionCounts[selectedFrequency] || '5';
  const trainingDaysText = trainingDays[selectedFrequency] || '4-5';

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message (Frequency Selection) */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              {frequencyTitle}
            </p>
          </div>
        </div>

        {/* AI Message - Final Plan */}
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
              Perfecto, <span style={{ fontWeight: '600' }}>{userName}</span>. He diseñado un plan de <span style={{ fontWeight: '600' }}>{missionCount} misiones</span> para ti llamado <span style={{ 
                fontWeight: '600',
                color: '#D4AF37'
              }}>'{planName}'</span>, enfocado en {trainingDaysText} días de entrenamiento de fuerza. ¿Listo para empezar tu aventura?
            </p>
          </div>
        </div>
      </div>

      {/* Action Button - Fixed at Bottom */}
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
    </div>
  );
}
