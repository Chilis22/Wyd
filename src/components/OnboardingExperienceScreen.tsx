import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

interface OnboardingExperienceScreenProps {
  userName: string;
  selectedFrequency: string;
  onSelectExperience: (experience: string) => void;
}

const frequencyTitles: Record<string, string> = {
  '2-3-dias': '2-3 días (Enfoque Ligero)',
  '4-5-dias': '4-5 días (Enfoque Intenso)',
  '6-7-dias': '6-7 días (Enfoque Total)'
};

export function OnboardingExperienceScreen({ userName, selectedFrequency, onSelectExperience }: OnboardingExperienceScreenProps) {
  const frequencyTitle = frequencyTitles[selectedFrequency] || '4-5 días';

  const experiences = [
    { id: 'principiante', label: 'Principiante (Nuevo en esto)' },
    { id: 'intermedio', label: 'Intermedio (Ya tengo una rutina)' },
    { id: 'avanzado', label: 'Avanzado (Llevo años)' },
  ];

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

        {/* AI Message - Experience Question */}
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
              Perfecto. ¿Cuál es tu nivel de experiencia actual en el gimnasio?
            </p>
          </div>
        </div>

        {/* Experience Selection Cards */}
        <div className="space-y-3 pb-8">
          {experiences.map((experience) => (
            <Button
              key={experience.id}
              onClick={() => onSelectExperience(experience.id)}
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
                {experience.label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
