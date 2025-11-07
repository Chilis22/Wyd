import { useState } from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

// Define los pasos del tutorial con las imágenes de TikTok
const steps = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: '¡Empecemos! Primero, ve a tu Perfil y toca el ícono de Menú (☰) en la esquina superior derecha.',
    hotspotStyle: { top: '5%', right: '5%' }
  },
  {
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: 'Genial. Ahora, en el menú inferior, selecciona "Settings and privacy".',
    hotspotStyle: { bottom: '8%', left: '10%' }
  },
  {
    image: 'https://images.unsplash.com/photo-1755182334060-1578c6cac201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: 'Estás en Ajustes. Desliza hacia abajo hasta "Contenido y pantalla" y toca "Preferencias de contenido".',
    hotspotStyle: { top: '55%', left: '10%' }
  },
  {
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: '¡Perfecto! Aquí está el núcleo. Para nuestro plan de gimnasio, toca "Gestionar temas".',
    hotspotStyle: { top: '35%', left: '10%' }
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: '¡Lo lograste! Ahora, usa el slider para decirle a TikTok que quieres ver MÁS contenido de "Salud y estado físico". ¡Toca "Guardar"!',
    hotspotStyle: { top: '60%', left: '10%' }
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    message: '¡Misión Completada! Has re-entrenado tu algoritmo. Vuelve al Centro de Enfoque.',
    hotspotStyle: { top: '5%', right: '5%' }
  }
];

interface AlgorithmGuideScreenProps {
  onBack: () => void;
  onNext?: () => void; // Opcional porque ya no se usa
}

export function AlgorithmGuideScreen({ onBack }: AlgorithmGuideScreenProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onBack(); // Termina el tutorial y vuelve al Hub
    }
  };

  const step = steps[currentStep];

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col bg-black"
      style={{
        animation: 'fadeIn 0.3s ease-out'
      }}
    >
      {/* 1. Fondo (La captura de pantalla de TikTok) */}
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${step.image})`,
          filter: 'brightness(0.65)'
        }}
      />

      {/* 2. El Overlay de "Wyz" */}
      <div className="relative z-10 flex flex-col h-full p-4">
        
        {/* Mensaje flotante de la IA - Top */}
        <div 
          className="rounded-2xl rounded-tl-sm px-5 py-4 mb-6 shadow-2xl"
          style={{ 
            backgroundColor: '#D4AF37',
            color: '#FFFFFF',
            maxWidth: '360px',
            animation: 'slideDown 0.5s ease-out'
          }}
        >
          <div className="flex gap-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: '#FFFFFF'
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#D4AF37' }} />
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.5' }}>
              {step.message}
            </p>
          </div>
        </div>

        {/* El "Hotspot" interactivo pulsante */}
        <button
          onClick={nextStep}
          className="absolute w-24 h-24 rounded-full"
          style={{
            ...step.hotspotStyle,
            backgroundColor: 'rgba(212, 175, 55, 0.4)',
            border: '3px solid #D4AF37',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.7)',
            animation: 'pulse 2s infinite',
            zIndex: 30
          }}
        >
          {/* Ícono de toque */}
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{
              fontSize: '32px',
              color: '#FFFFFF'
            }}
          >
            👆
          </div>
        </button>

        {/* Botón de Salir */}
        <button 
          onClick={onBack} 
          className="absolute bottom-6 left-6 text-white py-3 px-5 rounded-xl flex items-center gap-2"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          Salir del Tutorial
        </button>

        {/* Progress Indicator */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {steps.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full"
              style={{ 
                backgroundColor: index === currentStep ? '#D4AF37' : 'rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>

        {/* Step Counter */}
        <div 
          className="absolute top-6 right-6 px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: 'rgba(212, 175, 55, 0.9)',
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          {currentStep + 1} / {steps.length}
        </div>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes pulse {
          0% { 
            transform: scale(0.95); 
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); 
          }
          70% { 
            transform: scale(1); 
            box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); 
          }
          100% { 
            transform: scale(0.95); 
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); 
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}