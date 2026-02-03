import { useState, useEffect } from 'react';
import { User, Shield, Mail, Lock, UserPlus, Eye, EyeOff } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface AcessoProps {
  navigateTo: (page: string) => void;
}

export default function Acesso({ navigateTo }: AcessoProps) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupAccessCode, setSignupAccessCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  
  const CORRECT_ACCESS_CODE = 'Atelier01';

  // Carregar credenciais salvas e verificar email temporário ao montar o componente
  useEffect(() => {
    // Verificar se o usuário já está logado
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      // Redirecionar automaticamente para a área do aluno
      navigateTo('areaaluno');
      return;
    }

    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');
    
    if (savedEmail && savedPassword) {
      setLoginEmail(savedEmail);
      setLoginPassword(savedPassword);
      setRememberMe(true);
    }

    // Verificar se há um email temporário vindo do footer
    const tempEmail = localStorage.getItem('signupEmailTemp');
    if (tempEmail) {
      setSignupEmail(tempEmail);
      setActiveTab('signup'); // Mudar para a aba de cadastro
      localStorage.removeItem('signupEmailTemp'); // Limpar o email temporário
    }
  }, [navigateTo]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Verificar se é admin
    if (loginEmail === 'admin@alma.com' && loginPassword === 'alma2024') {
      toast.success('Login administrativo realizado com sucesso!');
      
      // Salvar credenciais se "Lembrar-me" estiver marcado
      if (rememberMe) {
        localStorage.setItem('savedEmail', loginEmail);
        localStorage.setItem('savedPassword', loginPassword);
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
      }
      
      setTimeout(() => {
        navigateTo('admindashboard');
      }, 1000);
      setIsLoading(false);
      return;
    }

    // Login de aluno - salvar no banco de dados
    try {
      if (loginEmail && loginPassword) {
        // Salvar dados no banco via API
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-625cbc27/save-login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword,
            loginDate: new Date().toISOString()
          })
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro ao salvar login:', errorText);
          throw new Error('Erro ao salvar dados de login');
        }

        toast.success('Login realizado com sucesso!');
        
        // Salvar credenciais se "Lembrar-me" estiver marcado
        if (rememberMe) {
          localStorage.setItem('savedEmail', loginEmail);
          localStorage.setItem('savedPassword', loginPassword);
        } else {
          localStorage.removeItem('savedEmail');
          localStorage.removeItem('savedPassword');
        }
        
        // Salvar no localStorage
        localStorage.setItem('userEmail', loginEmail);
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => {
          navigateTo('areaaluno');
        }, 1000);
      } else {
        toast.error('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      toast.error('Erro ao realizar login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validações
    if (!signupName || !signupEmail || !signupPassword || !signupConfirmPassword || !signupAccessCode) {
      toast.error('Por favor, preencha todos os campos');
      setIsLoading(false);
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      toast.error('As senhas não coincidem');
      setIsLoading(false);
      return;
    }

    if (signupPassword.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      setIsLoading(false);
      return;
    }

    if (signupAccessCode !== CORRECT_ACCESS_CODE) {
      toast.error('Código de acesso inválido');
      setIsLoading(false);
      return;
    }

    // Simular cadastro (integrar com Supabase)
    setTimeout(() => {
      toast.success('Cadastro realizado com sucesso!');
      // Salvar no localStorage
      localStorage.setItem('userName', signupName);
      localStorage.setItem('userEmail', signupEmail);
      localStorage.setItem('isLoggedIn', 'true');
      
      // Limpar formulário
      setSignupName('');
      setSignupEmail('');
      setSignupPassword('');
      setSignupConfirmPassword('');
      setSignupAccessCode('');
      
      setTimeout(() => {
        navigateTo('areaaluno');
      }, 1000);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#fefbf3] flex flex-col">
      <Navbar currentPage="acesso" navigateTo={navigateTo} />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[480px]">
          <div className="text-center mb-8">
            <h1 className="font-['DM_Sans:Bold',sans-serif] text-4xl mb-4 text-black">
              Área de Acesso
            </h1>
            <p className="font-['DM_Sans:Regular',sans-serif] text-lg text-gray-600">
              Entre ou cadastre-se para acessar sua área exclusiva
            </p>
          </div>

          <Tabs defaultValue={activeTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Entrar
              </TabsTrigger>
              <TabsTrigger value="signup" className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Cadastrar
              </TabsTrigger>
            </TabsList>

            {/* Tab de Login */}
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Entrar na sua conta
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Digite suas credenciais para acessar sua área
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email" className="font-['DM_Sans:Medium',sans-serif]">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          placeholder="seu@email.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="login-password" className="font-['DM_Sans:Medium',sans-serif]">
                        Senha
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type={showLoginPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                        >
                          {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Checkbox
                        id="remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked)}
                        className="mr-2"
                      />
                      <Label htmlFor="remember-me" className="font-['DM_Sans:Medium',sans-serif]">
                        Lembrar-me
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-black hover:bg-gray-800 font-['DM_Sans:Medium',sans-serif]"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Entrando...' : 'Entrar'}
                    </Button>
                  </form>

                  {/* Área administrativa */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3 font-['DM_Sans:Regular',sans-serif]">
                      Acesso administrativo:
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-black hover:bg-black hover:text-white font-['DM_Sans:Medium',sans-serif]"
                      onClick={() => navigateTo('admindashboard')}
                    >
                      <Shield className="w-4 h-4 mr-2" />
                      Painel Administrativo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab de Cadastro */}
            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['DM_Sans:SemiBold',sans-serif]">
                    Criar nova conta
                  </CardTitle>
                  <CardDescription className="font-['DM_Sans:Regular',sans-serif]">
                    Preencha os dados para se cadastrar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="font-['DM_Sans:Medium',sans-serif]">
                        Nome completo
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Seu nome"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="font-['DM_Sans:Medium',sans-serif]">
                        Email
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="seu@email.com"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="font-['DM_Sans:Medium',sans-serif]">
                        Senha
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="signup-password"
                          type={showSignupPassword ? 'text' : 'password'}
                          placeholder="Mínimo 6 caracteres"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                          onClick={() => setShowSignupPassword(!showSignupPassword)}
                        >
                          {showSignupPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password" className="font-['DM_Sans:Medium',sans-serif]">
                        Confirmar senha
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="signup-confirm-password"
                          type={showSignupConfirmPassword ? 'text' : 'password'}
                          placeholder="Digite a senha novamente"
                          value={signupConfirmPassword}
                          onChange={(e) => setSignupConfirmPassword(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                          onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                        >
                          {showSignupConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-access-code" className="font-['DM_Sans:Medium',sans-serif]">
                        Código de acesso
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="signup-access-code"
                          type="text"
                          placeholder="Digite o código de acesso"
                          value={signupAccessCode}
                          onChange={(e) => setSignupAccessCode(e.target.value)}
                          className="pl-10 font-['DM_Sans:Regular',sans-serif]"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-black hover:bg-gray-800 font-['DM_Sans:Medium',sans-serif]"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Cadastrando...' : 'Criar conta'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer navigateTo={navigateTo} />
    </div>
  );
}