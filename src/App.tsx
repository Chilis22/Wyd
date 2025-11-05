import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import { OnboardingNameScreen } from "./components/OnboardingNameScreen";
import { OnboardingGoalScreen } from "./components/OnboardingGoalScreen";
import { OnboardingPlanScreen } from "./components/OnboardingPlanScreen";
import { OnboardingSubGoalScreen } from "./components/OnboardingSubGoalScreen";
import { OnboardingFrequencyScreen } from "./components/OnboardingFrequencyScreen";
import { OnboardingFinalScreen } from "./components/OnboardingFinalScreen";
import { OnboardingExperienceScreen } from "./components/OnboardingExperienceScreen";
import { OnboardingTransitionScreen } from "./components/OnboardingTransitionScreen";
import { OnboardingDataScreen1 } from "./components/OnboardingDataScreen1";
import { OnboardingDataScreen2 } from "./components/OnboardingDataScreen2";
import { OnboardingDataScreen3 } from "./components/OnboardingDataScreen3";
import { OnboardingFinalSummaryScreen } from "./components/OnboardingFinalSummaryScreen";

type Screen = 'login' | 'onboarding-name' | 'onboarding-goal' | 'onboarding-subgoal' | 'onboarding-frequency' | 'onboarding-experience' | 'onboarding-transition' | 'onboarding-data1' | 'onboarding-data2' | 'onboarding-data3' | 'onboarding-summary' | 'onboarding-final' | 'onboarding-plan' | 'complete';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userName, setUserName] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [selectedSubGoal, setSelectedSubGoal] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  const handleLogin = () => {
    setCurrentScreen('onboarding-name');
  };

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    setCurrentScreen('onboarding-goal');
  };

  const handleGoalSelect = (goal: string) => {
    setSelectedGoal(goal);
    // Si el usuario selecciona "salud-fisica", ir al flujo de profundización
    if (goal === 'salud-fisica') {
      setCurrentScreen('onboarding-subgoal');
    } else {
      // Para otros objetivos, ir directamente al plan genérico
      setCurrentScreen('onboarding-plan');
    }
  };

  const handleSubGoalSelect = (subGoal: string) => {
    setSelectedSubGoal(subGoal);
    setCurrentScreen('onboarding-frequency');
  };

  const handleFrequencySelect = (frequency: string) => {
    setSelectedFrequency(frequency);
    setCurrentScreen('onboarding-experience');
  };

  const handleExperienceSelect = (experience: string) => {
    setSelectedExperience(experience);
    setCurrentScreen('onboarding-transition');
  };

  const handleTransitionContinue = () => {
    setCurrentScreen('onboarding-data1');
  };

  const handleData1Submit = () => {
    setCurrentScreen('onboarding-data2');
  };

  const handleData2Submit = () => {
    setCurrentScreen('onboarding-data3');
  };

  const handleData3Submit = () => {
    setCurrentScreen('onboarding-summary');
  };

  const handleStartAdventure = () => {
    setCurrentScreen('complete');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'onboarding-name':
        return <OnboardingNameScreen onNext={handleNameSubmit} />;
      case 'onboarding-goal':
        return <OnboardingGoalScreen userName={userName} onSelectGoal={handleGoalSelect} />;
      case 'onboarding-subgoal':
        return <OnboardingSubGoalScreen userName={userName} selectedGoal={selectedGoal} onSelectSubGoal={handleSubGoalSelect} />;
      case 'onboarding-frequency':
        return <OnboardingFrequencyScreen userName={userName} selectedSubGoal={selectedSubGoal} onSelectFrequency={handleFrequencySelect} />;
      case 'onboarding-experience':
        return <OnboardingExperienceScreen userName={userName} selectedFrequency={selectedFrequency} onSelectExperience={handleExperienceSelect} />;
      case 'onboarding-transition':
        return <OnboardingTransitionScreen userName={userName} selectedExperience={selectedExperience} onContinue={handleTransitionContinue} />;
      case 'onboarding-data1':
        return <OnboardingDataScreen1 userName={userName} onSubmit={handleData1Submit} />;
      case 'onboarding-data2':
        return <OnboardingDataScreen2 userName={userName} onSubmit={handleData2Submit} />;
      case 'onboarding-data3':
        return <OnboardingDataScreen3 userName={userName} onSubmit={handleData3Submit} />;
      case 'onboarding-summary':
        return <OnboardingFinalSummaryScreen userName={userName} selectedFrequency={selectedFrequency} selectedExperience={selectedExperience} onStartAdventure={handleStartAdventure} />;
      case 'onboarding-final':
        return <OnboardingFinalScreen userName={userName} selectedFrequency={selectedFrequency} onStartAdventure={handleStartAdventure} />;
      case 'onboarding-plan':
        return <OnboardingPlanScreen userName={userName} selectedGoal={selectedGoal} onStartAdventure={handleStartAdventure} />;
      case 'complete':
        return (
          <div className="flex flex-col items-center justify-center h-full px-8 bg-white">
            <div className="mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <h1 className="text-[36px] text-center" style={{ 
                color: '#D4AF37',
                fontWeight: '700'
              }}>
                ¡Tu aventura comienza!
              </h1>
            </div>
            <p className="text-center mb-8" style={{ 
              color: '#6B6B6B',
              fontSize: '15px'
            }}>
              Hola {userName}, estamos preparando tu experiencia personalizada para {selectedGoal}.
            </p>
            <button
              onClick={() => setCurrentScreen('login')}
              className="px-6 py-3 rounded-xl"
              style={{
                backgroundColor: '#D4AF37',
                color: '#FFFFFF'
              }}
            >
              Reiniciar Demo
            </button>
          </div>
        );
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">
      {/* iPhone 14/15 Pro Frame (393 x 852 px) */}
      <div 
        className="bg-white rounded-[40px] shadow-2xl overflow-hidden relative"
        style={{
          width: '393px',
          height: '852px',
          border: '12px solid #1F1F1F'
        }}
      >
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-white z-10 flex items-center justify-between px-8">
          <span style={{ color: '#1F1F1F', fontSize: '14px', fontWeight: '600' }}>
            9:41
          </span>
          <div className="flex items-center gap-2">
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M15.75 1.5H14.25V2.5C14.25 3.32843 13.5784 4 12.75 4H11.25C10.4216 4 9.75 3.32843 9.75 2.5V1.5H6.75V2.5C6.75 3.32843 6.07843 4 5.25 4H3.75C2.92157 4 2.25 3.32843 2.25 2.5V1.5H0.75C0.335786 1.5 0 1.83579 0 2.25V10.25C0 10.6642 0.335786 11 0.75 11H15.75C16.1642 11 16.5 10.6642 16.5 10.25V2.25C16.5 1.83579 16.1642 1.5 15.75 1.5Z" fill="#1F1F1F"/>
            </svg>
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
              <rect x="0.5" y="0.5" width="13" height="11" rx="1.5" stroke="#1F1F1F"/>
              <rect x="14.5" y="3.5" width="1" height="5" rx="0.5" fill="#1F1F1F"/>
            </svg>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-full pt-12">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}
