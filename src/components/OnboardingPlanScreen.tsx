import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingPlanScreenProps {
  userName: string;
  selectedGoal: string;
  onStartAdventure: () => void;
}

const goalTitles: Record<string, string> = {
  'estudios': 'Mejorar mis Estudios',
  'salud-fisica': 'Mejorar mi Salud Física',
  'salud-mental': 'Mejorar mi Salud Mental',
  'personalizado': 'Personalizado'
};

const pathNames: Record<string, string> = {
  'estudios': 'Senda del Sabio',
  'salud-fisica': 'Camino del Guerrero',
  'salud-mental': 'Ruta del Equilibrio',
  'personalizado': 'Aventura Personalizada'
};

export function OnboardingPlanScreen({ userName, selectedGoal, onStartAdventure }: OnboardingPlanScreenProps) {
  const goalTitle = goalTitles[selectedGoal] || 'tu objetivo';
  const pathName = pathNames[selectedGoal] || 'tu Aventura Personalizada';

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message (Goal Selection) */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              {goalTitle}
            </p>
          </div>
        </div>

        {/* AI Message - Plan Creation */}
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
              ¡Entendido! Una gran misión. Basado en eso, he diseñado un plan inicial para ti en la <span style={{ 
                fontWeight: '600',
                color: '#D4AF37'
              }}>'{pathName}'</span>. ¿Listo para empezar tu aventura?
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
