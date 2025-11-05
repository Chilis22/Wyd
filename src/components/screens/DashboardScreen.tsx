import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { 
  Dumbbell, 
  Lock,
  Activity,
  Heart,
  ChevronRight,
  Coins,
  User
} from "lucide-react";

interface DashboardScreenProps {
  userName: string;
  onOpenFocusCenter: () => void;
}

export function DashboardScreen({ userName, onOpenFocusCenter }: DashboardScreenProps) {
  const userLevel = 1;
  const hp = 100;
  const xp = 0;
  const coins = 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - Fixed */}
      <div 
        className="flex items-center justify-between px-6 py-4"
        style={{
          height: '100px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #F5F5F5'
        }}
      >
        {/* Left - Avatar */}
        <div className="flex items-center gap-3">
          <div 
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center"
            style={{
              border: '3px solid #D4AF37',
              backgroundColor: '#FFF9E6'
            }}
          >
            <User className="w-6 h-6" style={{ color: '#D4AF37' }} />
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-1">
            <p style={{ 
              color: '#1F1F1F',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {userName} <span style={{ color: '#D4AF37' }}>(Nivel {userLevel})</span>
            </p>
            
            {/* HP Bar */}
            <div className="flex items-center gap-2">
              <Heart className="w-3 h-3" style={{ color: '#EF4444' }} />
              <div className="w-[80px]">
                <Progress 
                  value={hp} 
                  className="h-1.5"
                  style={{
                    backgroundColor: '#F5F5F5'
                  }}
                />
              </div>
            </div>

            {/* XP Bar */}
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3" style={{ color: '#D4AF37' }} />
              <div className="w-[80px]">
                <Progress 
                  value={xp} 
                  className="h-1.5"
                  style={{
                    backgroundColor: '#F5F5F5'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right - Coins */}
        <div 
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: '#FFF9E6',
            border: '1px solid #D4AF37'
          }}
        >
          <Coins className="w-4 h-4" style={{ color: '#D4AF37' }} />
          <span style={{ 
            color: '#1F1F1F',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            {coins}
          </span>
        </div>
      </div>

      {/* Scrollable Map Content */}
      <ScrollArea className="flex-1">
        <div 
          className="px-6 py-8 relative"
          style={{
            minHeight: '1500px'
          }}
        >
          {/* SVG Path - The "Caminito" */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{
              zIndex: 0
            }}
          >
            <path
              d="M 196 50 Q 250 150 196 250 Q 140 350 196 450 Q 250 550 196 650 Q 140 750 196 850 Q 250 950 196 1050 Q 140 1150 196 1250 Q 250 1350 196 1450"
              stroke="#C0A062"
              strokeWidth="4"
              strokeDasharray="10,10"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Mission 1 - Active (Current) */}
          <div 
            className="relative flex flex-col items-center mb-24"
            style={{
              zIndex: 1,
              marginTop: '20px'
            }}
          >
            {/* Mission Circle */}
            <div 
              className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-4 relative"
              style={{
                backgroundColor: '#D4AF37',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
              }}
            >
              <Dumbbell className="w-8 h-8" style={{ color: '#FFFFFF' }} />
              
              {/* Player Avatar */}
              <div 
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '3px solid #D4AF37'
                }}
              >
                <User className="w-5 h-5" style={{ color: '#D4AF37' }} />
              </div>
            </div>

            {/* Mission Info Card */}
            <div 
              className="rounded-2xl px-5 py-4 mb-4"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #D4AF37',
                maxWidth: '280px'
              }}
            >
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '15px',
                fontWeight: '600',
                marginBottom: '4px'
              }}>
                Misión 1: Día de Pecho/Tríceps
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px'
              }}>
                ¡Tu primera aventura te espera!
              </p>
            </div>

            {/* Action Button */}
            <Button
              onClick={onOpenFocusCenter}
              className="rounded-xl px-6"
              style={{
                backgroundColor: '#D4AF37',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600',
                height: '44px'
              }}
            >
              Abrir Centro de Enfoque
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mission 2 - Locked */}
          <div 
            className="relative flex flex-col items-center mb-24"
            style={{
              zIndex: 1,
              marginTop: '180px'
            }}
          >
            <div 
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: '#E5E5E5',
                border: '3px solid #6B6B6B'
              }}
            >
              <Lock className="w-6 h-6" style={{ color: '#6B6B6B' }} />
            </div>

            <div 
              className="rounded-2xl px-5 py-3"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #E5E5E5',
                maxWidth: '280px'
              }}
            >
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Misión 2: Día de Pierna
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                (Bloqueado)
              </p>
            </div>
          </div>

          {/* Mission 3 - Locked */}
          <div 
            className="relative flex flex-col items-center mb-24"
            style={{
              zIndex: 1,
              marginTop: '180px'
            }}
          >
            <div 
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: '#E5E5E5',
                border: '3px solid #6B6B6B'
              }}
            >
              <Lock className="w-6 h-6" style={{ color: '#6B6B6B' }} />
            </div>

            <div 
              className="rounded-2xl px-5 py-3"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #E5E5E5',
                maxWidth: '280px'
              }}
            >
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Misión 3: Día de Espalda/Bíceps
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                (Bloqueado)
              </p>
            </div>
          </div>

          {/* Mission 4 - Locked */}
          <div 
            className="relative flex flex-col items-center mb-24"
            style={{
              zIndex: 1,
              marginTop: '180px'
            }}
          >
            <div 
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: '#E5E5E5',
                border: '3px solid #6B6B6B'
              }}
            >
              <Lock className="w-6 h-6" style={{ color: '#6B6B6B' }} />
            </div>

            <div 
              className="rounded-2xl px-5 py-3"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #E5E5E5',
                maxWidth: '280px'
              }}
            >
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Misión 4: Día de Cardio
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                (Bloqueado)
              </p>
            </div>
          </div>

          {/* Mission 5 - Locked */}
          <div 
            className="relative flex flex-col items-center"
            style={{
              zIndex: 1,
              marginTop: '180px'
            }}
          >
            <div 
              className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4"
              style={{
                backgroundColor: '#E5E5E5',
                border: '3px solid #6B6B6B'
              }}
            >
              <Lock className="w-6 h-6" style={{ color: '#6B6B6B' }} />
            </div>

            <div 
              className="rounded-2xl px-5 py-3"
              style={{
                backgroundColor: '#F5F5F5',
                border: '2px solid #E5E5E5',
                maxWidth: '280px'
              }}
            >
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '14px',
                fontWeight: '600'
              }}>
                Misión 5: Día de Recuperación
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                (Bloqueado)
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
