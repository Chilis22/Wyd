import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8 bg-white">
      {/* Logo */}
      <div className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1 className="text-[48px] tracking-tight" style={{ 
          color: '#D4AF37',
          fontWeight: '700',
          lineHeight: '1.2'
        }}>
          WYD
        </h1>
      </div>
      
      {/* Eslogan */}
      <p className="text-center mb-12" style={{ 
        color: '#6B6B6B',
        fontSize: '15px',
        fontWeight: '400'
      }}>
        Convierte tus metas en una aventura.
      </p>

      {/* Campos de Texto */}
      <div className="w-full space-y-4 mb-6">
        <Input
          type="email"
          placeholder="Email"
          className="h-12 rounded-xl bg-white"
          style={{
            borderColor: '#D4AF37',
            borderWidth: '1.5px'
          }}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          className="h-12 rounded-xl bg-white"
          style={{
            borderColor: '#D4AF37',
            borderWidth: '1.5px'
          }}
        />
      </div>

      {/* Botón Iniciar Sesión */}
      <Button
        onClick={onLogin}
        className="w-full h-12 rounded-xl mb-3"
        style={{
          backgroundColor: '#D4AF37',
          color: '#FFFFFF'
        }}
      >
        Iniciar Sesión
      </Button>

      {/* Botón Crear Cuenta */}
      <Button
        variant="outline"
        className="w-full h-12 rounded-xl mb-8"
        style={{
          borderColor: '#D4AF37',
          borderWidth: '1.5px',
          color: '#D4AF37',
          backgroundColor: 'transparent'
        }}
      >
        Crear Cuenta
      </Button>

      {/* Botón Google */}
      <Button
        variant="outline"
        className="w-full h-12 rounded-xl flex items-center justify-center gap-3"
        style={{
          borderColor: '#E5E5E5',
          borderWidth: '1px',
          color: '#1F1F1F',
          backgroundColor: 'white'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M19.8055 10.2292C19.8055 9.55057 19.7501 9.08473 19.6302 8.6004H10.2001V11.5166H15.6014C15.4907 12.408 14.9038 13.7285 13.5924 14.6199L13.5773 14.7222L16.5932 17.0056L16.8039 17.0264C18.7192 15.2828 19.8055 12.9454 19.8055 10.2292Z" fill="#4285F4"/>
          <path d="M10.2001 19.5001C12.6949 19.5001 14.7889 18.7026 16.8039 17.0265L13.5924 14.62C12.7504 15.1858 11.6179 15.5951 10.2001 15.5951C7.76067 15.5951 5.69609 13.8515 4.90261 11.5167L4.80543 11.5246L1.67359 13.8991L1.63867 13.992C3.64426 17.946 6.69002 19.5001 10.2001 19.5001Z" fill="#34A853"/>
          <path d="M4.90261 11.5166C4.69075 10.9233 4.56926 10.2816 4.56926 9.62076C4.56926 8.95989 4.69075 8.31819 4.89317 7.72487L4.88756 7.61588L1.71638 5.20166L1.63867 5.24937C0.987047 6.53811 0.600098 7.98937 0.600098 9.62076C0.600098 11.2521 0.987047 12.7034 1.63867 13.992L4.90261 11.5166Z" fill="#FBBC05"/>
          <path d="M10.2001 3.64648C11.9818 3.64648 13.1975 4.37594 13.896 5.02486L16.7762 2.24146C14.7797 0.610069 12.6949 -0.499878 10.2001 -0.499878C6.69002 -0.499878 3.64426 1.05422 1.63867 5.00829L4.89317 7.72379C5.69609 5.38907 7.76067 3.64648 10.2001 3.64648Z" fill="#EB4335"/>
        </svg>
        Continuar con Google
      </Button>
    </div>
  );
}
