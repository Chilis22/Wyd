import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingTransitionScreenProps {
  userName: string;
  selectedExperience: string;
  onContinue: () => void;
}

const experienceTitles: Record<string, string> = {
  'principiante': 'Principiante (Nuevo en esto)',
  'intermedio': 'Intermedio (Ya tengo una rutina)',
  'avanzado': 'Avanzado (Llevo años)'
};

export function OnboardingTransitionScreen({ userName, selectedExperience, onContinue }: OnboardingTransitionScreenProps) {
  const experienceTitle = experienceTitles[selectedExperience] || 'Intermedio (Ya tengo una rutina)';

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message (Experience Selection) */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3 max-w-[280px]"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              {experienceTitle}
            </p>
          </div>
        </div>

        {/* AI Message - Transition */}
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
              ¡Genial! Ya tengo la base. Ahora vamos a pasar a una manera más personalizada donde me comentarás cositas más específicas para darte un plan enfocado a tus necesidades.
            </p>
          </div>
        </div>
      </div>

      {/* Action Button - Fixed at Bottom */}
      <div className="px-6 pb-8">
        <Button
          onClick={onContinue}
          className="w-full h-14 rounded-xl"
          style={{
            backgroundColor: '#D4AF37',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          OK, ¡vamos!
        </Button>
      </div>
    </div>
  );
}
