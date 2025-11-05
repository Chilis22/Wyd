import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Sparkles, Trophy, Heart, MessageCircle, Share2 } from "lucide-react";

interface CommunityScreenProps {
  userName: string;
}

export function CommunityScreen({ userName }: CommunityScreenProps) {
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
          fontWeight: '700'
        }}>
          Comunidad
        </h1>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="global" className="flex-1 flex flex-col">
        <TabsList 
          className="w-full grid grid-cols-2 rounded-none px-6 py-2"
          style={{
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid #F5F5F5'
          }}
        >
          <TabsTrigger 
            value="global"
            style={{
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Global
          </TabsTrigger>
          <TabsTrigger 
            value="grupos"
            style={{
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Mis Grupos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="global" className="flex-1 mt-0">
          <ScrollArea className="h-full">
            <div className="px-6 py-4 flex flex-col gap-4">
              {/* Post 1 - Wyz Challenge */}
              <div 
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #D4AF37'
                }}
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 p-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#D4AF37'
                    }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ 
                      color: '#1F1F1F',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Wyz (Asesor IA)
                    </p>
                    <p style={{ 
                      color: '#6B6B6B',
                      fontSize: '12px'
                    }}>
                      Hace 2 horas
                    </p>
                  </div>
                </div>

                {/* Post Image */}
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1750698544932-c7471990f1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dHxlbnwxfHx8fDE3NjIzNTcxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fitness challenge"
                  className="w-full h-[200px] object-cover"
                />

                {/* Post Content */}
                <div className="p-4">
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginBottom: '12px'
                  }}>
                    ¡Nuevo desafío grupal! ¿Quién se une a la meta <span style={{ 
                      fontWeight: '600',
                      color: '#D4AF37'
                    }}>'Senda del Titán'</span>? 💪✨
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1">
                      <Heart className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                      <span style={{ 
                        color: '#6B6B6B',
                        fontSize: '13px'
                      }}>
                        124
                      </span>
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageCircle className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                      <span style={{ 
                        color: '#6B6B6B',
                        fontSize: '13px'
                      }}>
                        32
                      </span>
                    </button>
                    <button className="flex items-center gap-1 ml-auto">
                      <Share2 className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Post 2 - User Achievement */}
              <div 
                className="rounded-xl p-4"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #E5E5E5'
                }}
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#F5F5F5',
                      border: '2px solid #D4AF37'
                    }}
                  >
                    <span style={{ 
                      color: '#D4AF37',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      A
                    </span>
                  </div>
                  <div>
                    <p style={{ 
                      color: '#1F1F1F',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Ana
                    </p>
                    <p style={{ 
                      color: '#6B6B6B',
                      fontSize: '12px'
                    }}>
                      Hace 5 horas
                    </p>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div 
                  className="rounded-xl p-4 mb-3 flex items-center gap-3"
                  style={{
                    backgroundColor: '#FFF9E6',
                    border: '2px solid #D4AF37'
                  }}
                >
                  <Trophy className="w-8 h-8" style={{ color: '#D4AF37' }} />
                  <div>
                    <p style={{ 
                      color: '#D4AF37',
                      fontSize: '13px',
                      fontWeight: '700'
                    }}>
                      INSIGNIA DESBLOQUEADA
                    </p>
                    <p style={{ 
                      color: '#1F1F1F',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Racha de 3 Días
                    </p>
                  </div>
                </div>

                {/* Post Content */}
                <p style={{ 
                  color: '#1F1F1F',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '12px'
                }}>
                  ¡Gané la insignia 'Racha de 3 Días' en mi plan de estudios! 🎯📚
                </p>

                {/* Post Actions */}
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1">
                    <Heart className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                    <span style={{ 
                      color: '#6B6B6B',
                      fontSize: '13px'
                    }}>
                      87
                    </span>
                  </button>
                  <button className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                    <span style={{ 
                      color: '#6B6B6B',
                      fontSize: '13px'
                    }}>
                      15
                    </span>
                  </button>
                  <button className="flex items-center gap-1 ml-auto">
                    <Share2 className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                  </button>
                </div>
              </div>

              {/* Post 3 - Welcome Message */}
              <div 
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #D4AF37'
                }}
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 p-4">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#D4AF37'
                    }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: '#FFFFFF' }} />
                  </div>
                  <div>
                    <p style={{ 
                      color: '#1F1F1F',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Wyz (Asesor IA)
                    </p>
                    <p style={{ 
                      color: '#6B6B6B',
                      fontSize: '12px'
                    }}>
                      Hace 10 minutos
                    </p>
                  </div>
                </div>

                {/* Post Image */}
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1575142109920-59072c730df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxjb21lJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjg4Njc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Welcome celebration"
                  className="w-full h-[200px] object-cover"
                />

                {/* Post Content */}
                <div className="p-4">
                  <p style={{ 
                    color: '#1F1F1F',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    marginBottom: '12px'
                  }}>
                    ¡Demos la bienvenida a <span style={{ 
                      fontWeight: '600',
                      color: '#D4AF37'
                    }}>{userName}</span> que acaba de unirse a la <span style={{ 
                      fontWeight: '600',
                      color: '#D4AF37'
                    }}>'Senda del Titán'</span>! 🎉✨
                  </p>

                  {/* Post Actions */}
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1">
                      <Heart className="w-5 h-5" style={{ color: '#EF4444' }} fill="#EF4444" />
                      <span style={{ 
                        color: '#6B6B6B',
                        fontSize: '13px'
                      }}>
                        256
                      </span>
                    </button>
                    <button className="flex items-center gap-1">
                      <MessageCircle className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                      <span style={{ 
                        color: '#6B6B6B',
                        fontSize: '13px'
                      }}>
                        48
                      </span>
                    </button>
                    <button className="flex items-center gap-1 ml-auto">
                      <Share2 className="w-5 h-5" style={{ color: '#6B6B6B' }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="grupos" className="flex-1 mt-0">
          <div className="flex flex-col items-center justify-center h-full px-8">
            <p style={{ 
              color: '#6B6B6B',
              fontSize: '15px',
              textAlign: 'center'
            }}>
              Aún no te has unido a ningún grupo. ¡Explora la comunidad y encuentra tu tribu!
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
