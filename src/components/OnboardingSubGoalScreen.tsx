import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingSubGoalScreenProps {
  userName: string;
  selectedGoal: string;
  onSelectSubGoal: (subGoal: string) => void;
}

const goalTitles: Record<string, string> = {
  'estudios': 'Mejorar mis Estudios',
  'salud-fisica': 'Mejorar mi Salud Física',
  'salud-mental': 'Mejorar mi Salud Mental',
  'personalizado': 'Personalizado'
};

export function OnboardingSubGoalScreen({ userName, selectedGoal, onSelectSubGoal }: OnboardingSubGoalScreenProps) {
  const goalTitle = goalTitles[selectedGoal] || 'tu objetivo';

  // Sub-goals específicos para "Salud Física"
  const subGoals = [
    { id: 'reducir-grasa', label: 'Reducir Porcentaje de Grasa' },
    { id: 'ganar-musculo', label: 'Ganar Fuerza y Músculo' },
    { id: 'mejorar-resistencia', label: 'Mejorar Resistencia (Correr)' },
  ];

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
              💪 {goalTitle}
            </p>
          </div>
        </div>

        {/* AI Message - Sub Goal Question */}
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
              ¡Excelente meta, <span style={{ fontWeight: '600' }}>{userName}</span>! 'Salud Física' es una gran aventura. Para personalizar tu plan, ¿cuál es tu enfoque principal?
            </p>
          </div>
        </div>

        {/* Sub-Goal Selection Cards */}
        <div className="space-y-3 pb-8">
          {subGoals.map((subGoal) => (
            <Button
              key={subGoal.id}
              onClick={() => onSelectSubGoal(subGoal.id)}
              variant="outline"
              className="w-full h-auto py-4 px-5 rounded-2xl flex items-center justify-start hover:bg-[#FFF9E6] transition-colors"
              style={{
                borderColor: '#D4AF37',
                borderWidth: '1.5px',
                backgroundColor: 'white'
              }}
            >
              <span style={{ 
                color: '#1F1F1F',
                fontSize: '15px',
                fontWeight: '500',
                textAlign: 'left'
              }}>
                {subGoal.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
