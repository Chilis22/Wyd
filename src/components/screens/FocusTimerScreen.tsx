import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";

interface FocusTimerScreenProps {
  onBack: () => void;
}

export function FocusTimerScreen({ onBack }: FocusTimerScreenProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };
  
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
          Temporizador de Enfoque
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
        {/* Timer Display */}
        <div 
          className="w-72 h-72 rounded-full flex flex-col items-center justify-center mb-12 relative"
          style={{
            border: '12px solid #FFF9E6',
            backgroundColor: '#FFFFFF',
            boxShadow: '0 10px 40px rgba(212, 175, 55, 0.2)'
          }}
        >
          {/* Progress Ring */}
          <svg 
            className="absolute top-0 left-0 w-full h-full -rotate-90"
            style={{ 
              transform: 'rotate(-90deg)',
              strokeDasharray: `${(1 - timeLeft / (25 * 60)) * 800} 800`
            }}
          >
            <circle
              cx="144"
              cy="144"
              r="128"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="12"
              strokeLinecap="round"
            />
          </svg>
          
          <div className="text-center z-10">
            <div style={{ 
              fontSize: '64px',
              fontWeight: '700',
              color: '#1F1F1F',
              lineHeight: '1',
              marginBottom: '8px'
            }}>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <p style={{ 
              color: '#6B6B6B',
              fontSize: '14px',
              fontWeight: '600'
            }}>
              {isRunning ? 'En progreso...' : timeLeft === 0 ? '¡Completado!' : 'Listo para comenzar'}
            </p>
          </div>
        </div>

        {/* Info Card */}
        <div 
          className="w-full rounded-xl p-4 mb-8"
          style={{
            backgroundColor: '#FFF9E6',
            border: '2px solid #D4AF37'
          }}
        >
          <p style={{ 
            color: '#1F1F1F',
            fontSize: '14px',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            Completa esta sesión de enfoque para verificar misiones y ganar monedas. Mantén el enfoque durante todo el tiempo.
          </p>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4 w-full">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            disabled={timeLeft === 0}
            className="flex-1 h-14 rounded-xl"
            style={{
              backgroundColor: timeLeft === 0 ? '#E5E5E5' : '#D4AF37',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '700'
            }}
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                PAUSAR
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                {timeLeft === 25 * 60 ? 'INICIAR ENFOQUE' : 'CONTINUAR'}
              </>
            )}
          </Button>
          
          <Button
            onClick={handleReset}
            variant="outline"
            className="h-14 px-6 rounded-xl"
            style={{
              borderColor: '#D4AF37',
              color: '#D4AF37'
            }}
          >
            <RotateCcw className="w-5 h-5" />
          </Button>
        </div>

        {/* Rewards Info */}
        {timeLeft === 0 && (
          <div 
            className="w-full rounded-xl p-4 mt-6"
            style={{
              backgroundColor: '#D4AF37',
              color: '#FFFFFF'
            }}
          >
            <p style={{ 
              fontSize: '16px',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '4px'
            }}>
              ¡Sesión completada!
            </p>
            <p style={{ 
              fontSize: '14px',
              textAlign: 'center'
            }}>
              Has ganado 50 XP + 10 Monedas 🪙
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
