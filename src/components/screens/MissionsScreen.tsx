import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import { Dumbbell, Apple, Timer, Target, Lock } from "lucide-react";
import { useState } from "react";
import { MissionVerificationModal } from "../MissionVerificationModal";

type VerificationType = 'manual' | 'focus_mode' | 'algorithm_guide';

interface Mission {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  verificationType: VerificationType;
  isActive: boolean;
}

export function MissionsScreen() {
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  
  const missions: Mission[] = [
    {
      id: 'mission-1',
      title: 'Misión 1: Día de Pecho/Tríceps',
      description: 'Completa tu rutina de pecho y tríceps en el gimnasio',
      icon: <Dumbbell className="w-4 h-4" style={{ color: '#D4AF37' }} />,
      verificationType: 'focus_mode',
      isActive: true
    },
    {
      id: 'mission-2',
      title: 'Misión 2: Día de Pierna',
      description: 'Entrena piernas con tu rutina personalizada',
      icon: <Dumbbell className="w-4 h-4" style={{ color: '#D4AF37' }} />,
      verificationType: 'focus_mode',
      isActive: true
    },
    {
      id: 'mission-3',
      title: 'Misión 3: Optimiza tu TikTok',
      description: 'Re-entrena el algoritmo para contenido motivacional',
      icon: <Target className="w-4 h-4" style={{ color: '#6B6B6B' }} />,
      verificationType: 'algorithm_guide',
      isActive: false
    },
    {
      id: 'mission-4',
      title: 'Misión 4: Registrar comida del día',
      description: 'Mantén un registro de tus comidas principales',
      icon: <Apple className="w-4 h-4" style={{ color: '#6B6B6B' }} />,
      verificationType: 'manual',
      isActive: false
    },
    {
      id: 'mission-5',
      title: 'Misión 5: Beber 2L de agua',
      description: 'Mantente hidratado durante el día',
      icon: <Timer className="w-4 h-4" style={{ color: '#6B6B6B' }} />,
      verificationType: 'manual',
      isActive: false
    }
  ];
  
  const getVerificationLabel = (type: VerificationType) => {
    switch (type) {
      case 'focus_mode':
        return 'Verificación: Modo Enfoque';
      case 'algorithm_guide':
        return 'Verificación: Guía de Algoritmo';
      case 'manual':
        return 'Verificación: Manual';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div 
        className="px-6 py-6"
        style={{
          borderBottom: '1px solid #F5F5F5'
        }}
      >
        <h1 style={{ 
          color: '#1F1F1F',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '4px'
        }}>
          Mis Misiones
        </h1>
        <p style={{ 
          color: '#6B6B6B',
          fontSize: '14px'
        }}>
          Plan: <span style={{ color: '#D4AF37', fontWeight: '600' }}>Senda del Titán</span>
        </p>
      </div>

      {/* Missions List */}
      <ScrollArea className="flex-1 px-6 py-4">
        <div className="flex flex-col gap-3">
          {missions.map((mission) => (
            <button
              key={mission.id}
              onClick={() => setSelectedMission(mission)}
              className="rounded-xl p-4 flex items-start gap-3 text-left w-full cursor-pointer transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: mission.isActive ? '#FFF9E6' : '#FFFFFF',
                border: mission.isActive ? '2px solid #D4AF37' : '2px solid #E5E5E5'
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {mission.icon}
                  <span style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}>
                    {mission.title}
                  </span>
                </div>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px',
                  marginBottom: '8px'
                }}>
                  {mission.description}
                </p>
                <div 
                  className="inline-block px-2 py-1 rounded"
                  style={{
                    backgroundColor: mission.isActive ? '#D4AF37' : '#6B6B6B',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: '600'
                  }}
                >
                  {getVerificationLabel(mission.verificationType)}
                </div>
              </div>
            </button>
          ))}

          {/* Locked Missions Section */}
          <div className="mt-6 mb-4">
            <h2 style={{ 
              color: '#6B6B6B',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Próximamente
            </h2>

            {/* Locked Mission Example */}
            <div 
              className="rounded-xl p-4 flex items-start gap-3"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #E5E5E5',
                opacity: 0.6
              }}
            >
              <Lock className="w-5 h-5 mt-1" style={{ color: '#6B6B6B' }} />
              <div className="flex-1">
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '15px',
                  fontWeight: '600'
                }}>
                  Misión 6: Día de Espalda/Bíceps
                </p>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px'
                }}>
                  Se desbloqueará después de completar misiones anteriores
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      
      {/* Mission Verification Modal */}
      {selectedMission && (
        <MissionVerificationModal
          isOpen={selectedMission !== null}
          missionTitle={selectedMission.title}
          verificationType={selectedMission.verificationType}
          onClose={() => setSelectedMission(null)}
          onStartVerification={() => {
            // Handle verification action
            console.log('Starting verification for:', selectedMission.id);
            setSelectedMission(null);
          }}
        />
      )}
    </div>
  );
}