import { Button } from "./ui/button";
import { Sparkles, GraduationCap, Dumbbell, Brain, Sparkle } from "lucide-react";

interface OnboardingGoalScreenProps {
  userName: string;
  onSelectGoal: (goal: string) => void;
}

export function OnboardingGoalScreen({ userName, onSelectGoal }: OnboardingGoalScreenProps) {
  const goals = [
    { 
      id: 'estudios', 
      icon: GraduationCap, 
      label: '🎓 Mejorar mis Estudios',
      title: 'Mejorar mis Estudios'
    },
    { 
      id: 'salud-fisica', 
      icon: Dumbbell, 
      label: '💪 Mejorar mi Salud Física',
      title: 'Mejorar mi Salud Física'
    },
    { 
      id: 'salud-mental', 
      icon: Brain, 
      label: '🧘 Mejorar mi Salud Mental',
      title: 'Mejorar mi Salud Mental'
    },
    { 
      id: 'personalizado', 
      icon: Sparkle, 
      label: '✨ Personalizado',
      title: 'Personalizado'
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col px-6 pt-8">
        {/* User's Previous Message */}
        <div className="flex justify-end mb-4">
          <div 
            className="rounded-2xl rounded-tr-sm px-5 py-3"
            style={{ backgroundColor: '#D4AF37' }}
          >
            <p style={{ 
              color: '#FFFFFF',
              fontSize: '15px'
            }}>
              {userName}
            </p>
          </div>
        </div>

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
              ¡Un gusto, <span style={{ fontWeight: '600' }}>{userName}</span>! Para diseñar tu aventura, cuéntame, ¿cuál es tu objetivo principal ahora mismo?
            </p>
          </div>
        </div>

        {/* Goal Selection Cards */}
        <div className="space-y-3 pb-8">
          {goals.map((goal) => (
            <Button
              key={goal.id}
              onClick={() => onSelectGoal(goal.id)}
              variant="outline"
              className="w-full h-auto py-4 px-5 rounded-2xl flex items-center justify-start gap-4 hover:bg-[#FFF9E6] transition-colors"
              style={{
                borderColor: '#D4AF37',
                borderWidth: '1.5px',
                backgroundColor: 'white'
              }}
            >
              <span style={{ fontSize: '24px' }}>
                {goal.label.split(' ')[0]}
              </span>
              <span style={{ 
                color: '#1F1F1F',
                fontSize: '15px',
                fontWeight: '500'
              }}>
                {goal.title}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
