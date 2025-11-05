import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingFrequencyScreenProps {
  userName: string;
  selectedSubGoal: string;
  onSelectFrequency: (frequency: string) => void;
}

const subGoalTitles: Record<string, string> = {
  'reducir-grasa': 'Reducir Porcentaje de Grasa',
  'ganar-musculo': 'Ganar Fuerza y Músculo',
  'mejorar-resistencia': 'Mejorar Resistencia (Correr)'
};

export function OnboardingFrequencyScreen({ userName, selectedSubGoal, onSelectFrequency }: OnboardingFrequencyScreenProps) {
  const subGoalTitle = subGoalTitles[selectedSubGoal] || 'tu enfoque';

  const frequencies = [
    { id: '2-3-dias', label: '2-3 días (Enfoque Ligero)' },
    { id: '4-5-dias', label: '4-5 días (Enfoque Intenso)' },
    { id: '6-7-dias', label: '6-7 días (Enfoque Total)' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message (Sub-Goal Selection) */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              {subGoalTitle}
            </p>
          </div>
        </div>

        {/* AI Message - Frequency Question */}
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
              Entendido: <span style={{ fontWeight: '600' }}>Ganar Fuerza</span>. ¿Cuántos días a la semana puedes entrenar de forma realista?
            </p>
          </div>
        </div>

        {/* Frequency Selection Cards */}
        <div className="space-y-3 pb-8">
          {frequencies.map((frequency) => (
            <Button
              key={frequency.id}
              onClick={() => onSelectFrequency(frequency.id)}
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
                {frequency.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
