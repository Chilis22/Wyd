import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { 
  User, 
  ShoppingBag, 
  Gift, 
  BarChart3, 
  Settings, 
  LogOut,
  Heart,
  Activity,
  Coins,
  Shield,
  Crown,
  Calendar
} from "lucide-react";

interface ProfileScreenProps {
  userName: string;
  onOpenStats?: () => void;
  onOpenCalendar?: () => void;
}

export function ProfileScreen({ userName, onOpenStats, onOpenCalendar }: ProfileScreenProps) {
  const userLevel = 1;
  const hp = 100;
  const maxHp = 100;
  const xp = 0;
  const maxXp = 1000;
  const coins = 0;

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
          fontWeight: '700'
        }}>
          Mi Perfil
        </h1>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-6 py-6 flex flex-col items-center">
          {/* Hero Avatar */}
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center mb-6 relative"
            style={{
              border: '4px solid #D4AF37',
              backgroundColor: '#FFF9E6'
            }}
          >
            <User className="w-16 h-16" style={{ color: '#D4AF37' }} />
            
            {/* Level Badge */}
            <div 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
              style={{
                backgroundColor: '#D4AF37',
                border: '3px solid #FFFFFF'
              }}
            >
              <p style={{ 
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '700'
              }}>
                Nivel {userLevel}
              </p>
            </div>
          </div>

          {/* User Name */}
          <h2 style={{ 
            color: '#1F1F1F',
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '4px'
          }}>
            {userName}
          </h2>
          <p style={{ 
            color: '#D4AF37',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            Senda del Titán
          </p>

          {/* Stats Cards */}
          <div className="w-full grid grid-cols-2 gap-3 mb-6">
            {/* HP Card */}
            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4" style={{ color: '#EF4444' }} />
                <span style={{ 
                  color: '#1F1F1F',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  HP
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '6px'
              }}>
                {hp}/{maxHp}
              </p>
              <Progress 
                value={(hp / maxHp) * 100} 
                className="h-2"
                style={{
                  backgroundColor: '#E5E5E5'
                }}
              />
            </div>

            {/* XP Card */}
            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span style={{ 
                  color: '#1F1F1F',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  XP
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '6px'
              }}>
                {xp}/{maxXp}
              </p>
              <Progress 
                value={(xp / maxXp) * 100} 
                className="h-2"
                style={{
                  backgroundColor: '#E5E5E5'
                }}
              />
            </div>
          </div>

          {/* Coins Display */}
          <div 
            className="w-full rounded-xl p-4 mb-6 flex items-center justify-between"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: '#D4AF37'
                }}
              >
                <Coins className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
              <div>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px'
                }}>
                  Monedero
                </p>
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '20px',
                  fontWeight: '700'
                }}>
                  {coins} 🪙
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="w-full flex flex-col gap-3">
            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              <ShoppingBag className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              Tienda (Skins de Avatar)
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              <Gift className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              Recompensas (Cupones Reales)
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              <Crown className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              Insignias y Logros
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
              onClick={onOpenStats}
            >
              <BarChart3 className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              Estadísticas Detalladas
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
              onClick={onOpenCalendar}
            >
              <Calendar className="w-5 h-5 mr-3" style={{ color: '#D4AF37' }} />
              Calendario
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl"
              variant="outline"
              style={{
                borderColor: '#E5E5E5',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              <Settings className="w-5 h-5 mr-3" style={{ color: '#6B6B6B' }} />
              Configuración
            </Button>

            <Button
              className="w-full justify-start h-14 rounded-xl mt-4"
              variant="outline"
              style={{
                borderColor: '#EF4444',
                color: '#EF4444',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}