import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { ArrowLeft, CheckCircle2, Smartphone } from "lucide-react";

interface AlgorithmGuideScreenProps {
  onBack: () => void;
}

export function AlgorithmGuideScreen({ onBack }: AlgorithmGuideScreenProps) {
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
            fontSize: '20px',
            fontWeight: '700'
          }}>
            Guía de Algoritmo
          </h1>
          <p style={{ 
            color: '#6B6B6B',
            fontSize: '13px'
          }}>
            TikTok / Instagram
          </p>
        </div>
      </div>

      {/* Content */}
      <ScrollArea className="flex-1">
        <div className="px-6 py-6">
          {/* Intro */}
          <div 
            className="rounded-xl p-5 mb-6"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            <h2 style={{ 
              color: '#1F1F1F',
              fontSize: '16px',
              fontWeight: '700',
              marginBottom: '8px'
            }}>
              Re-entrena tu algoritmo
            </h2>
            <p style={{ 
              color: '#1F1F1F',
              fontSize: '14px',
              lineHeight: '1.6'
            }}>
              Sigue estos pasos para que TikTok e Instagram te muestren contenido alineado con tus metas de fitness y desarrollo personal.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-6">
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  1
                </div>
                <h3 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Abre la app
                </h3>
              </div>
              <div 
                className="rounded-xl p-4 ml-11"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    Paso 1
                  </p>
                </div>
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  Abre TikTok y ve a tu perfil (icono inferior derecho). Luego toca el menú de tres líneas en la esquina superior derecha.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  2
                </div>
                <h3 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Ajustes y privacidad
                </h3>
              </div>
              <div 
                className="rounded-xl p-4 ml-11"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  En el menú, selecciona <span style={{ fontWeight: '600', color: '#1F1F1F' }}>"Ajustes y privacidad"</span>. Luego busca la sección <span style={{ fontWeight: '600', color: '#1F1F1F' }}>"Preferencias de contenido"</span> o <span style={{ fontWeight: '600', color: '#1F1F1F' }}>"Intereses"</span>.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  3
                </div>
                <h3 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Añade palabras clave
                </h3>
              </div>
              <div 
                className="rounded-xl p-4 ml-11"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '12px'
                }}>
                  Añade estas palabras clave relacionadas con tus metas:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['fitness', 'gym', 'calistenia', 'musculación', 'entrenamiento', 'motivación', 'disciplina', 'hábitos'].map((keyword) => (
                    <div 
                      key={keyword}
                      className="px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: '#D4AF37',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}
                    >
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  4
                </div>
                <h3 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Interactúa activamente
                </h3>
              </div>
              <div 
                className="rounded-xl p-4 ml-11"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '12px'
                }}>
                  Durante los próximos 3-5 días:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <p style={{ color: '#6B6B6B', fontSize: '14px' }}>
                      Dale "like" solo a contenido de fitness/motivación
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <p style={{ color: '#6B6B6B', fontSize: '14px' }}>
                      Sigue cuentas de fitness y desarrollo personal
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <p style={{ color: '#6B6B6B', fontSize: '14px' }}>
                      Marca "No me interesa" en contenido no alineado
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: '#D4AF37' }}>•</span>
                    <p style={{ color: '#6B6B6B', fontSize: '14px' }}>
                      Busca activamente contenido relacionado con tus metas
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 5 - Instagram */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: '#D4AF37',
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '700'
                  }}
                >
                  5
                </div>
                <h3 style={{ 
                  color: '#1F1F1F',
                  fontSize: '16px',
                  fontWeight: '600'
                }}>
                  Repite en Instagram
                </h3>
              </div>
              <div 
                className="rounded-xl p-4 ml-11"
                style={{
                  backgroundColor: '#F5F5F5'
                }}
              >
                <p style={{ 
                  color: '#6B6B6B',
                  fontSize: '14px',
                  lineHeight: '1.6'
                }}>
                  Sigue el mismo proceso en Instagram. Ve a <span style={{ fontWeight: '600', color: '#1F1F1F' }}>Configuración → Cuenta → Intereses</span> y añade las mismas palabras clave.
                </p>
              </div>
            </div>
          </div>

          {/* Completion Section */}
          <div 
            className="mt-8 rounded-xl p-5"
            style={{
              backgroundColor: '#FFF9E6',
              border: '2px solid #D4AF37'
            }}
          >
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6" style={{ color: '#D4AF37' }} />
              <h3 style={{ 
                color: '#1F1F1F',
                fontSize: '16px',
                fontWeight: '700'
              }}>
                ¿Completaste los pasos?
              </h3>
            </div>
            <p style={{ 
              color: '#6B6B6B',
              fontSize: '14px',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Al completar esta guía, habrás dado el primer paso para crear un entorno digital que apoye tus metas.
            </p>
            <Button
              className="w-full h-12 rounded-xl"
              style={{
                backgroundColor: '#D4AF37',
                color: '#FFFFFF',
                fontSize: '15px',
                fontWeight: '600'
              }}
            >
              ¡Lo he hecho! (Completar Misión)
            </Button>
          </div>

          {/* Tips */}
          <div className="mt-6 mb-8">
            <h4 style={{ 
              color: '#1F1F1F',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '12px'
            }}>
              💡 Consejos adicionales
            </h4>
            <ul className="space-y-2">
              <li style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                lineHeight: '1.6'
              }}>
                • El algoritmo aprende más rápido si interactúas de forma consistente
              </li>
              <li style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                lineHeight: '1.6'
              }}>
                • Revisa esta configuración cada 2-3 semanas
              </li>
              <li style={{ 
                color: '#6B6B6B',
                fontSize: '13px',
                lineHeight: '1.6'
              }}>
                • Si ves contenido no deseado, márcalo inmediatamente como "No me interesa"
              </li>
            </ul>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
