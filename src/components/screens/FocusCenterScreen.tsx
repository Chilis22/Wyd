import { Button } from "../ui/button";
import { ArrowLeft, BookOpen, Timer, Search, Sparkles } from "lucide-react";

interface FocusCenterScreenProps {
  onOpenAlgorithmGuide: () => void;
  onOpenFocusTimer: () => void;
  onBack: () => void;
}

export function FocusCenterScreen({ onOpenAlgorithmGuide, onOpenFocusTimer, onBack }: FocusCenterScreenProps) {
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
          Centro de Enfoque
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 flex flex-col">
        {/* Hero Section */}
        <div 
          className="rounded-2xl p-6 mb-8"
          style={{
            backgroundColor: '#FFF9E6',
            border: '2px solid #D4AF37'
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: '#D4AF37'
              }}
            >
              <Sparkles className="w-6 h-6" style={{ color: '#FFFFFF' }} />
            </div>
            <h2 style={{ 
              color: '#1F1F1F',
              fontSize: '18px',
              fontWeight: '700'
            }}>
              Wyz - Tu Asistente IA
            </h2>
          </div>
          <p style={{ 
            color: '#1F1F1F',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            Bienvenido al Centro de Enfoque. Aquí encontrarás herramientas para optimizar tu entorno digital, verificar misiones y mantener tu concentración.
          </p>
        </div>

        {/* Tools Section */}
        <div className="flex flex-col gap-4">
          <h3 style={{ 
            color: '#1F1F1F',
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '8px'
          }}>
            Herramientas Disponibles
          </h3>

          {/* Algorithm Guide Button */}
          <button
            onClick={onOpenAlgorithmGuide}
            className="rounded-xl p-5 text-left w-full"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #D4AF37',
              transition: 'all 0.2s'
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: '#FFF9E6'
                }}
              >
                <BookOpen className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </div>
              <div className="flex-1">
                <h4 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px'
                }}>
                  Guía de Optimización de Algoritmo
                </h4>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  Aprende a re-entrenar TikTok/Instagram para contenido motivacional
                </p>
                <div 
                  className="inline-block mt-2 px-2 py-1 rounded"
                  style={{
                    backgroundColor: '#D4AF37',
                    fontSize: '11px',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}
                >
                  DISPONIBLE
                </div>
              </div>
            </div>
          </button>

          {/* Focus Timer Button */}
          <button
            onClick={onOpenFocusTimer}
            className="rounded-xl p-5 text-left w-full"
            style={{
              backgroundColor: '#FFFFFF',
              border: '2px solid #D4AF37',
              transition: 'all 0.2s'
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: '#FFF9E6'
                }}
              >
                <Timer className="w-6 h-6" style={{ color: '#D4AF37' }} />
              </div>
              <div className="flex-1">
                <h4 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px'
                }}>
                  Temporizador de Enfoque
                </h4>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  Verifica tus misiones de tiempo con un temporizador inteligente
                </p>
                <div 
                  className="inline-block mt-2 px-2 py-1 rounded"
                  style={{
                    backgroundColor: '#D4AF37',
                    fontSize: '11px',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}
                >
                  DISPONIBLE
                </div>
              </div>
            </div>
          </button>

          {/* Assisted Search Button */}
          <div
            className="rounded-xl p-5 text-left w-full"
            style={{
              backgroundColor: '#F5F5F5',
              border: '2px solid #E5E5E5',
              opacity: 0.6
            }}
          >
            <div className="flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: '#E5E5E5'
                }}
              >
                <Search className="w-6 h-6" style={{ color: '#6B6B6B' }} />
              </div>
              <div className="flex-1">
                <h4 style={{ 
                  color: '#6B6B6B',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '4px'
                }}>
                  Búsqueda Asistida
                </h4>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  Encuentra recursos y contenido alineado con tus metas
                </p>
                <div 
                  className="inline-block mt-2 px-2 py-1 rounded"
                  style={{
                    backgroundColor: '#6B6B6B',
                    fontSize: '11px',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}
                >
                  PRÓXIMAMENTE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div 
          className="mt-auto pt-6"
          style={{
            borderTop: '1px solid #F5F5F5'
          }}
        >
          <p style={{ 
            color: '#6B6B6B',
            fontSize: '13px',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            Más herramientas de enfoque estarán disponibles pronto. Mantén tus misiones activas para desbloquear nuevas funciones.
          </p>
        </div>
      </div>
    </div>
  );
}