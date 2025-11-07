import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Sparkles, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface AlgorithmGuideScreen_Step2Props {
  onBack: () => void;
  onComplete: () => void;
}

export function AlgorithmGuideScreen_Step2({ onBack, onComplete }: AlgorithmGuideScreen_Step2Props) {
  const [keywords] = useState(['fitness', 'gym', 'motivación', 'entrenamiento']);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background Image - Simulated TikTok Keyword Filter Screen */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyNDQ1NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="TikTok Keyword Filter"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        />
      </div>

      {/* Wyz Chat Bubble - Top */}
      <div 
        className="absolute top-20 left-4 right-4 z-20"
        style={{
          animation: 'slideDown 0.5s ease-out'
        }}
      >
        <div 
          className="rounded-3xl p-5 shadow-2xl"
          style={{
            backgroundColor: '#D4AF37',
            maxWidth: '360px'
          }}
        >
          <div className="flex items-start gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: '#FFFFFF'
              }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#D4AF37' }} />
            </div>
            <div className="flex-1">
              <p 
                className="mb-1"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: '600'
                }}
              >
                Wyz te guía
              </p>
              <p 
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '15px',
                  lineHeight: '1.5',
                  marginBottom: '12px'
                }}
              >
                ¡Genial! Ahora, añade palabras clave de tus metas. Aquí hay algunas sugerencias:
              </p>
              
              {/* Keyword Suggestions */}
              <div className="flex flex-wrap gap-2 mb-3">
                {keywords.map((keyword) => (
                  <div 
                    key={keyword}
                    className="px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: '#D4AF37',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}
                  >
                    {keyword}
                  </div>
                ))}
              </div>

              <p 
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '15px',
                  lineHeight: '1.5'
                }}
              >
                Toca 'Añadir' cuando termines.
              </p>
            </div>
          </div>
        </div>
        {/* Chat Bubble Tail */}
        <div 
          className="ml-8"
          style={{
            width: 0,
            height: 0,
            borderLeft: '12px solid transparent',
            borderRight: '12px solid transparent',
            borderTop: '12px solid #D4AF37'
          }}
        />
      </div>

      {/* Pulsating Hotspot - Bottom Right (Add Button) */}
      <button
        onClick={onComplete}
        className="absolute z-30"
        style={{
          bottom: '15%',
          right: '10%'
        }}
      >
        {/* Pulsating Circle */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Outer Glow */}
          <div 
            className="absolute w-32 h-32 rounded-full"
            style={{
              backgroundColor: '#D4AF37',
              opacity: 0.3,
              filter: 'blur(20px)'
            }}
          />
          
          {/* Main Circle */}
          <div 
            className="relative w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: '#D4AF37',
              boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)',
              border: '4px solid #FFFFFF'
            }}
          >
            <Plus className="w-10 h-10" style={{ color: '#FFFFFF' }} />
          </div>
        </motion.div>

        {/* Label */}
        <div 
          className="mt-4 px-4 py-2 rounded-full"
          style={{
            backgroundColor: '#D4AF37',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.5)'
          }}
        >
          <p 
            style={{ 
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}
          >
            Añadir
          </p>
        </div>
      </button>

      {/* Decorative Box pointing to keyword area */}
      <motion.div
        className="absolute z-20"
        style={{
          top: '45%',
          left: '10%',
          right: '10%',
          height: '120px',
          border: '3px dashed #D4AF37',
          borderRadius: '16px',
          backgroundColor: 'rgba(212, 175, 55, 0.1)',
          pointerEvents: 'none'
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Corner accents */}
        <div 
          className="absolute top-0 left-0 w-4 h-4"
          style={{
            borderTop: '4px solid #D4AF37',
            borderLeft: '4px solid #D4AF37',
            borderRadius: '4px 0 0 0'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-4 h-4"
          style={{
            borderTop: '4px solid #D4AF37',
            borderRight: '4px solid #D4AF37',
            borderRadius: '0 4px 0 0'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-4 h-4"
          style={{
            borderBottom: '4px solid #D4AF37',
            borderLeft: '4px solid #D4AF37',
            borderRadius: '0 0 0 4px'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-4 h-4"
          style={{
            borderBottom: '4px solid #D4AF37',
            borderRight: '4px solid #D4AF37',
            borderRadius: '0 0 4px 0'
          }}
        />
      </motion.div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 z-40 w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <span style={{ color: '#FFFFFF', fontSize: '20px' }}>×</span>
      </button>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        <div 
          className="w-8 h-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
        />
        <div 
          className="w-8 h-1.5 rounded-full"
          style={{ backgroundColor: '#D4AF37' }}
        />
      </div>

      <style>{`
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
