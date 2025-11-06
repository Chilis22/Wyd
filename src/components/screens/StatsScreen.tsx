import { ScrollArea } from "../ui/scroll-area";
import { ArrowLeft, TrendingUp, Target, Clock, Award } from "lucide-react";

interface StatsScreenProps {
  onBack: () => void;
}

export function StatsScreen({ onBack }: StatsScreenProps) {
  const weeklyXP = [120, 150, 80, 200, 180, 100, 0]; // XP por día
  const maxXP = Math.max(...weeklyXP);
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div 
        className="flex items-center gap-3 px-6 py-6"
        style={{
          borderBottom: '1px solid #F5F5F5'
        }}
      >
        <button onClick={onBack}>
          <ArrowLeft className="w-6 h-6" style={{ color: '#1F1F1F' }} />
        </button>
        <h1 style={{ 
          color: '#1F1F1F',
          fontSize: '24px',
          fontWeight: '700'
        }}>
          Estadísticas
        </h1>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-6 py-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span style={{ 
                  color: '#6B6B6B',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  MISIONES
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '24px',
                fontWeight: '700'
              }}>
                5
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                Completadas
              </p>
            </div>

            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span style={{ 
                  color: '#6B6B6B',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  ENFOQUE
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '24px',
                fontWeight: '700'
              }}>
                3h
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                Esta semana
              </p>
            </div>

            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span style={{ 
                  color: '#6B6B6B',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  RACHA
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '24px',
                fontWeight: '700'
              }}>
                2
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                Días seguidos
              </p>
            </div>

            <div 
              className="rounded-xl p-4"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <span style={{ 
                  color: '#6B6B6B',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  XP TOTAL
                </span>
              </div>
              <p style={{ 
                color: '#1F1F1F',
                fontSize: '24px',
                fontWeight: '700'
              }}>
                830
              </p>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '12px'
              }}>
                Esta semana
              </p>
            </div>
          </div>

          {/* Weekly Progress Chart */}
          <div 
            className="rounded-2xl p-5 mb-6"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #E5E5E5'
            }}
          >
            <h2 style={{ 
              color: '#1F1F1F',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Progreso Semanal (XP Ganados)
            </h2>
            
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyXP.map((xp, index) => {
                const height = maxXP > 0 ? (xp / maxXP) * 100 : 0;
                const isToday = index === 5; // Saturday
                
                return (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 flex items-end w-full">
                      <div 
                        className="w-full rounded-t-lg transition-all"
                        style={{
                          height: `${height}%`,
                          backgroundColor: isToday ? '#D4AF37' : '#FFF9E6',
                          border: `2px solid ${isToday ? '#D4AF37' : '#E5E5E5'}`,
                          minHeight: xp > 0 ? '20px' : '0px'
                        }}
                      />
                    </div>
                    <div className="text-center">
                      <span style={{ 
                        color: isToday ? '#D4AF37' : '#6B6B6B',
                        fontSize: '12px',
                        fontWeight: isToday ? '700' : '500'
                      }}>
                        {days[index]}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Stats */}
          <div>
            <h3 style={{ 
              color: '#1F1F1F',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px'
            }}>
              Estadísticas Detalladas
            </h3>

            <div className="flex flex-col gap-3">
              <div 
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div>
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Misiones totales completadas
                  </p>
                  <p style={{ 
                    color: '#6B6B6B',
                    fontSize: '13px'
                  }}>
                    Desde el inicio
                  </p>
                </div>
                <span style={{ 
                  color: '#D4AF37',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>
                  5
                </span>
              </div>

              <div 
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div>
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Horas de enfoque totales
                  </p>
                  <p style={{ 
                    color: '#6B6B6B',
                    fontSize: '13px'
                  }}>
                    Tiempo concentrado
                  </p>
                </div>
                <span style={{ 
                  color: '#D4AF37',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>
                  3
                </span>
              </div>

              <div 
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div>
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Mejor racha
                  </p>
                  <p style={{ 
                    color: '#6B6B6B',
                    fontSize: '13px'
                  }}>
                    Días consecutivos
                  </p>
                </div>
                <span style={{ 
                  color: '#D4AF37',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>
                  2
                </span>
              </div>

              <div 
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div>
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Tasa de completitud
                  </p>
                  <p style={{ 
                    color: '#6B6B6B',
                    fontSize: '13px'
                  }}>
                    Misiones completadas vs asignadas
                  </p>
                </div>
                <span style={{ 
                  color: '#D4AF37',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
