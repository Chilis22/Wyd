import { ScrollArea } from "../ui/scroll-area";
import { Checkbox } from "../ui/checkbox";
import { Dumbbell, Apple, Timer, Target, Lock } from "lucide-react";

export function MissionsScreen() {
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
          {/* Mission 1 - Active */}
          <div 
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            <Checkbox 
              id="mission-1" 
              className="mt-1"
              style={{
                borderColor: '#D4AF37'
              }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <label 
                  htmlFor="mission-1"
                  style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Misión 1: Día de Pecho/Tríceps
                </label>
              </div>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Completa tu rutina de pecho y tríceps en el gimnasio
              </p>
              <div 
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                Verificación: Modo Enfoque
              </div>
            </div>
          </div>

          {/* Mission 2 - Active */}
          <div 
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            <Checkbox 
              id="mission-2" 
              className="mt-1"
              style={{
                borderColor: '#D4AF37'
              }}
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-4 h-4" style={{ color: '#D4AF37' }} />
                <label 
                  htmlFor="mission-2"
                  style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Misión 2: Día de Pierna
                </label>
              </div>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Entrena piernas con tu rutina personalizada
              </p>
              <div 
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor: '#D4AF37',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                Verificación: Modo Enfoque
              </div>
            </div>
          </div>

          {/* Mission 3 - TikTok Optimization */}
          <div 
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #E5E5E5'
            }}
          >
            <Checkbox 
              id="mission-3" 
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4" style={{ color: '#6B6B6B' }} />
                <label 
                  htmlFor="mission-3"
                  style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Misión 3: Optimiza tu TikTok
                </label>
              </div>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Re-entrena el algoritmo para contenido motivacional
              </p>
              <div 
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor: '#6B6B6B',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                Verificación: Guía de Algoritmo
              </div>
            </div>
          </div>

          {/* Mission 4 - Food Logging */}
          <div 
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #E5E5E5'
            }}
          >
            <Checkbox 
              id="mission-4" 
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Apple className="w-4 h-4" style={{ color: '#6B6B6B' }} />
                <label 
                  htmlFor="mission-4"
                  style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Misión 4: Registrar comida del día
                </label>
              </div>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Mantén un registro de tus comidas principales
              </p>
              <div 
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor: '#6B6B6B',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                Verificación: Manual
              </div>
            </div>
          </div>

          {/* Mission 5 - Daily Hydration */}
          <div 
            className="rounded-xl p-4 flex items-start gap-3"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #E5E5E5'
            }}
          >
            <Checkbox 
              id="mission-5" 
              className="mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Timer className="w-4 h-4" style={{ color: '#6B6B6B' }} />
                <label 
                  htmlFor="mission-5"
                  style={{ 
                    color: '#1F1F1F',
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  Misión 5: Beber 2L de agua
                </label>
              </div>
              <p style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Mantente hidratado durante el día
              </p>
              <div 
                className="inline-block px-2 py-1 rounded"
                style={{
                  backgroundColor: '#6B6B6B',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                Verificación: Manual
              </div>
            </div>
          </div>

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
    </div>
  );
}
