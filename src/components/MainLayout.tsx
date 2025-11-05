import { useState } from "react";
import { DashboardScreen } from "./screens/DashboardScreen";
import { MissionsScreen } from "./screens/MissionsScreen";
import { CommunityScreen } from "./screens/CommunityScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { FocusCenterScreen } from "./screens/FocusCenterScreen";
import { AlgorithmGuideScreen } from "./screens/AlgorithmGuideScreen";
import { Home, ListTodo, Users, User, Sparkles } from "lucide-react";

type AppScreen = 'dashboard' | 'missions' | 'community' | 'profile' | 'focus-center' | 'algorithm-guide';

interface MainLayoutProps {
  userName: string;
}

export function MainLayout({ userName }: MainLayoutProps) {
  const [activeScreen, setActiveScreen] = useState<AppScreen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardScreen userName={userName} onOpenFocusCenter={() => setActiveScreen('focus-center')} />;
      case 'missions':
        return <MissionsScreen />;
      case 'community':
        return <CommunityScreen userName={userName} />;
      case 'profile':
        return <ProfileScreen userName={userName} />;
      case 'focus-center':
        return <FocusCenterScreen onOpenAlgorithmGuide={() => setActiveScreen('algorithm-guide')} onBack={() => setActiveScreen('dashboard')} />;
      case 'algorithm-guide':
        return <AlgorithmGuideScreen onBack={() => setActiveScreen('focus-center')} />;
      default:
        return <DashboardScreen userName={userName} onOpenFocusCenter={() => setActiveScreen('focus-center')} />;
    }
  };

  // Don't show navigation bar on certain screens
  const hideNavigation = activeScreen === 'focus-center' || activeScreen === 'algorithm-guide';

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Screen Content */}
      <div className="flex-1 overflow-hidden">
        {renderScreen()}
      </div>

      {/* Navigation Bar - Fixed at Bottom */}
      {!hideNavigation && (
        <div 
          className="flex items-center justify-around px-6"
          style={{
            height: '80px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #F5F5F5',
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)'
          }}
        >
          <button 
            onClick={() => setActiveScreen('dashboard')}
            className="flex flex-col items-center gap-1"
          >
            <Home 
              className="w-6 h-6" 
              style={{ color: activeScreen === 'dashboard' ? '#D4AF37' : '#6B6B6B' }} 
            />
            <span style={{ 
              fontSize: '11px',
              color: activeScreen === 'dashboard' ? '#D4AF37' : '#6B6B6B',
              fontWeight: activeScreen === 'dashboard' ? '600' : '400'
            }}>
              Dashboard
            </span>
          </button>
          
          <button 
            onClick={() => setActiveScreen('missions')}
            className="flex flex-col items-center gap-1"
          >
            <ListTodo 
              className="w-6 h-6" 
              style={{ color: activeScreen === 'missions' ? '#D4AF37' : '#6B6B6B' }} 
            />
            <span style={{ 
              fontSize: '11px',
              color: activeScreen === 'missions' ? '#D4AF37' : '#6B6B6B',
              fontWeight: activeScreen === 'missions' ? '600' : '400'
            }}>
              Misiones
            </span>
          </button>
          
          <button 
            onClick={() => setActiveScreen('community')}
            className="flex flex-col items-center gap-1"
          >
            <Users 
              className="w-6 h-6" 
              style={{ color: activeScreen === 'community' ? '#D4AF37' : '#6B6B6B' }} 
            />
            <span style={{ 
              fontSize: '11px',
              color: activeScreen === 'community' ? '#D4AF37' : '#6B6B6B',
              fontWeight: activeScreen === 'community' ? '600' : '400'
            }}>
              Comunidad
            </span>
          </button>
          
          <button 
            onClick={() => setActiveScreen('profile')}
            className="flex flex-col items-center gap-1"
          >
            <User 
              className="w-6 h-6" 
              style={{ color: activeScreen === 'profile' ? '#D4AF37' : '#6B6B6B' }} 
            />
            <span style={{ 
              fontSize: '11px',
              color: activeScreen === 'profile' ? '#D4AF37' : '#6B6B6B',
              fontWeight: activeScreen === 'profile' ? '600' : '400'
            }}>
              Perfil
            </span>
          </button>
        </div>
      )}

      {/* Floating Action Button (AI) - Only on main screens */}
      {!hideNavigation && (
        <button
          onClick={() => setActiveScreen('focus-center')}
          className="absolute bottom-[100px] right-6 w-[60px] h-[60px] rounded-full flex items-center justify-center"
          style={{
            backgroundColor: '#D4AF37',
            boxShadow: '0 4px 12px rgba(212, 175, 55, 0.4)',
            zIndex: 50
          }}
        >
          <Sparkles className="w-7 h-7" style={{ color: '#FFFFFF' }} />
        </button>
      )}
    </div>
  );
}
