import { ScrollArea } from "../ui/scroll-area";
import { ArrowLeft, Calendar as CalendarIcon, Dumbbell, Apple } from "lucide-react";

interface CalendarScreenProps {
  onBack: () => void;
}

export function CalendarScreen({ onBack }: CalendarScreenProps) {
  const daysInMonth = 30;
  const today = 15;
  
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
        <div className="flex-1">
          <h1 style={{ 
            color: '#1F1F1F',
            fontSize: '24px',
            fontWeight: '700'
          }}>
            Calendario
          </h1>
          <p style={{ 
            color: '#6B6B6B',
            fontSize: '13px'
          }}>
            Noviembre 2025
          </p>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-6 py-6">
          {/* Calendar Grid */}
          <div 
            className="rounded-2xl p-5 mb-6"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            {/* Days of week */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day) => (
                <div key={day} className="text-center">
                  <span style={{ 
                    color: '#6B6B6B',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {day}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                const isToday = day === today;
                const hasActivity = [12, 13, 14, 15].includes(day);
                
                return (
                  <button
                    key={day}
                    className="aspect-square rounded-lg flex items-center justify-center relative"
                    style={{
                      backgroundColor: isToday ? '#D4AF37' : hasActivity ? '#FFF9E6' : 'transparent',
                      border: hasActivity && !isToday ? '1px solid #D4AF37' : 'none'
                    }}
                  >
                    <span style={{ 
                      color: isToday ? '#FFFFFF' : '#1F1F1F',
                      fontSize: '14px',
                      fontWeight: isToday ? '700' : '500'
                    }}>
                      {day}
                    </span>
                    {hasActivity && !isToday && (
                      <div 
                        className="absolute bottom-1 w-1 h-1 rounded-full"
                        style={{ backgroundColor: '#D4AF37' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Today's missions */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-5 h-5" style={{ color: '#D4AF37' }} />
              <h2 style={{ 
                color: '#1F1F1F',
                fontSize: '18px',
                fontWeight: '700'
              }}>
                Hoy - 15 de Noviembre
              </h2>
            </div>

            <div 
              className="rounded-xl p-4 mb-6"
              style={{
                backgroundColor: '#FFF9E6',
                border: '2px solid #D4AF37'
              }}
            >
              <p style={{ 
                color: '#D4AF37',
                fontSize: '12px',
                fontWeight: '600',
                marginBottom: '8px'
              }}>
                SENDA DEL TITÁN
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Día de Pecho/Tríceps
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Apple className="w-4 h-4" style={{ color: '#D4AF37' }} />
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Registrar comida del día
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming */}
            <h3 style={{ 
              color: '#1F1F1F',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              Próximas misiones
            </h3>

            <div className="flex flex-col gap-3">
              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ 
                    color: '#6B6B6B',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    16 NOV - JUEVES
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-4 h-4" style={{ color: '#6B6B6B' }} />
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Día de Espalda/Bíceps
                  </p>
                </div>
              </div>

              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span style={{ 
                    color: '#6B6B6B',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    17 NOV - VIERNES
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-4 h-4" style={{ color: '#6B6B6B' }} />
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Día de Pierna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
