import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { ShieldCheck, Timer, BookOpen, AlertCircle } from "lucide-react";

interface MissionVerificationModalProps {
  isOpen: boolean;
  missionTitle: string;
  verificationType: 'manual' | 'focus_mode' | 'algorithm_guide';
  onClose: () => void;
  onStartVerification: () => void;
}

export function MissionVerificationModal({ 
  isOpen, 
  missionTitle, 
  verificationType,
  onClose,
  onStartVerification 
}: MissionVerificationModalProps) {
  
  const getVerificationContent = () => {
    switch (verificationType) {
      case 'manual':
        return {
          icon: <ShieldCheck className="w-12 h-12" style={{ color: '#D4AF37' }} />,
          title: 'Verificación Manual',
          description: 'Esta misión se basa en tu honor. Solo recibirás XP (sin monedas).',
          question: '¿Completaste esta misión?',
          buttonText: 'SÍ, LA COMPLETÉ',
          buttonColor: '#D4AF37',
          showWarning: true
        };
      case 'focus_mode':
        return {
          icon: <Timer className="w-12 h-12" style={{ color: '#D4AF37' }} />,
          title: 'Verificación con Temporizador',
          description: 'Esta misión requiere el Temporizador de Enfoque para verificarse y ganar monedas.',
          question: '¿Quieres iniciar el temporizador ahora?',
          buttonText: 'INICIAR TEMPORIZADOR',
          buttonColor: '#D4AF37',
          showWarning: false
        };
      case 'algorithm_guide':
        return {
          icon: <BookOpen className="w-12 h-12" style={{ color: '#D4AF37' }} />,
          title: 'Verificación con Guía',
          description: 'Esta misión requiere completar la Guía de Optimización de Algoritmo.',
          question: '¿Quieres ir a la guía ahora?',
          buttonText: 'IR A LA GUÍA',
          buttonColor: '#D4AF37',
          showWarning: false
        };
    }
  };
  
  const content = getVerificationContent();
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[340px] rounded-2xl"
        style={{
          backgroundColor: '#FFFFFF',
          border: '2px solid #D4AF37'
        }}
      >
        <DialogHeader>
          <DialogTitle className="sr-only">{content.title}</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center py-6">
          {/* Icon */}
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
            style={{
              backgroundColor: '#FFF9E6'
            }}
          >
            {content.icon}
          </div>
          
          {/* Mission Title */}
          <h3 style={{ 
            color: '#1F1F1F',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '8px',
            textAlign: 'center'
          }}>
            {missionTitle}
          </h3>
          
          {/* Verification Type */}
          <div 
            className="px-3 py-1 rounded-full mb-6"
            style={{
              backgroundColor: '#FFF9E6',
              border: '1px solid #D4AF37'
            }}
          >
            <p style={{ 
              color: '#D4AF37',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {content.title}
            </p>
          </div>
          
          {/* Description */}
          <p style={{ 
            color: '#6B6B6B',
            fontSize: '14px',
            lineHeight: '1.6',
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            {content.description}
          </p>
          
          {/* Warning for manual verification */}
          {content.showWarning && (
            <div 
              className="w-full rounded-lg p-3 mb-6"
              style={{
                backgroundColor: '#FFF3E0',
                border: '1px solid #FFB74D'
              }}
            >
              <div className="flex gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#FF9800' }} />
                <p style={{ 
                  color: '#E65100',
                  fontSize: '13px',
                  lineHeight: '1.5'
                }}>
                  La verificación manual solo otorga XP. Para ganar monedas, usa el Temporizador de Enfoque.
                </p>
              </div>
            </div>
          )}
          
          {/* Question */}
          <p style={{ 
            color: '#1F1F1F',
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            {content.question}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full">
            <Button
              onClick={onStartVerification}
              className="w-full h-12 rounded-xl"
              style={{
                backgroundColor: content.buttonColor,
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '700'
              }}
            >
              {content.buttonText}
            </Button>
            
            <Button
              onClick={onClose}
              variant="outline"
              className="w-full h-12 rounded-xl"
              style={{
                borderColor: '#E5E5E5',
                color: '#6B6B6B',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              CANCELAR
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
