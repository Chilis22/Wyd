import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";

interface FocusPermissionScreenProps {
  onDismiss: () => void;
  onAccept: () => void;
}

export function FocusPermissionScreen({ onDismiss, onAccept }: FocusPermissionScreenProps) {
  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Overlay Background */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          zIndex: 10
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6">
        {/* Wyz Icon */}
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{
            backgroundColor: '#D4AF37',
            boxShadow: '0 8px 24px rgba(212, 175, 55, 0.5)'
          }}
        >
          <Sparkles className="w-12 h-12" style={{ color: '#FFFFFF' }} />
        </div>

        {/* Title */}
        <h1 
          className="text-center mb-4"
          style={{ 
            color: '#FFFFFF',
            fontSize: '28px',
            fontWeight: '700'
          }}
        >
          Wyz necesita tu permiso
        </h1>

        {/* Description */}
        <p 
          className="text-center mb-8 max-w-sm"
          style={{ 
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '1.6',
            opacity: 0.9
          }}
        >
          Voy a abrir TikTok y te guiaré con mensajes flotantes (overlays) para ayudarte a configurar tus preferencias. ¿Estás listo?
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-sm">
          <Button
            onClick={onAccept}
            className="w-full h-14 rounded-xl"
            style={{
              backgroundColor: '#D4AF37',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)'
            }}
          >
            Sí, ¡vamos!
          </Button>

          <Button
            onClick={onDismiss}
            className="w-full h-14 rounded-xl"
            style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            Ahora no
          </Button>
        </div>
      </div>
    </div>
  );
}
