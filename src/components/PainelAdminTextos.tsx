import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';
import { Save, RotateCcw, FileText, ArrowLeft } from 'lucide-react';
import { 
  SiteTexts, 
  defaultSiteTexts, 
  loadTextsFromLocalStorage, 
  saveTextsToLocalStorage 
} from '../config/siteTexts';
import { createClient } from '@supabase/supabase-js@2.39.7';

const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

interface PainelAdminTextosProps {
  navigateTo?: (page: string) => void;
}

export function PainelAdminTextos({ navigateTo }: PainelAdminTextosProps = {}) {
  const [texts, setTexts] = useState<SiteTexts>(defaultSiteTexts);
  const [loading, setLoading] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Carregar textos ao montar o componente
  useEffect(() => {
    loadTexts();
  }, []);

  // Carregar textos do Supabase ou localStorage
  const loadTexts = async () => {
    setLoading(true);
    try {
      // Tentar carregar do Supabase primeiro
      const { data, error } = await supabase
        .from('site_texts')
        .select('texts')
        .eq('id', 1)
        .single();

      if (data && !error) {
        setTexts(data.texts);
        saveTextsToLocalStorage(data.texts);
      } else {
        // Se não houver no Supabase, tentar localStorage
        const localTexts = loadTextsFromLocalStorage();
        if (localTexts) {
          setTexts(localTexts);
        }
      }
    } catch (error) {
      console.error('Erro ao carregar textos:', error);
      // Fallback para localStorage
      const localTexts = loadTextsFromLocalStorage();
      if (localTexts) {
        setTexts(localTexts);
      }
    } finally {
      setLoading(false);
    }
  };

  // Salvar textos
  const handleSave = async () => {
    setLoading(true);
    try {
      // Salvar no localStorage primeiro (sempre funciona)
      saveTextsToLocalStorage(texts);

      // Tentar salvar no Supabase
      const { error } = await supabase
        .from('site_texts')
        .upsert({ 
          id: 1, 
          texts: texts,
          updated_at: new Date().toISOString()
        });

      if (error) {
        console.error('Erro ao salvar no Supabase:', error);
        toast.warning('Textos salvos localmente. Configure o Supabase para salvar na nuvem.');
      } else {
        toast.success('Textos salvos com sucesso!');
      }
      
      setHasChanges(false);
    } catch (error) {
      console.error('Erro ao salvar textos:', error);
      toast.error('Erro ao salvar textos. Salvos apenas localmente.');
    } finally {
      setLoading(false);
    }
  };

  // Restaurar padrões
  const handleReset = () => {
    if (confirm('Tem certeza que deseja restaurar todos os textos para os padrões? Esta ação não pode ser desfeita.')) {
      setTexts(defaultSiteTexts);
      setHasChanges(true);
      toast.info('Textos restaurados para os padrões. Clique em Salvar para confirmar.');
    }
  };

  // Atualizar um texto específico
  const updateText = (section: keyof SiteTexts, field: string, value: string) => {
    setTexts(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setHasChanges(true);
  };

  // Atualizar item de array
  const updateArrayItem = (section: keyof SiteTexts, index: number, field: string, value: string) => {
    setTexts(prev => {
      const sectionData = prev[section] as any;
      const newItems = [...sectionData.items];
      newItems[index] = {
        ...newItems[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: {
          ...sectionData,
          items: newItems
        }
      };
    });
    setHasChanges(true);
  };

  return (
    <div className="min-h-screen bg-[#FEFBF3] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {navigateTo && (
              <Button
                variant="ghost"
                onClick={() => navigateTo('admindashboard')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">Editor de Textos do Site</h1>
              <p className="text-gray-600">
                Edite todos os textos do site em um só lugar
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleReset}
              disabled={loading}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restaurar Padrões
            </Button>
            <Button
              onClick={handleSave}
              disabled={loading || !hasChanges}
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? 'Salvando...' : 'Salvar Alterações'}
            </Button>
          </div>
        </div>

        {hasChanges && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              <FileText className="w-4 h-4 inline mr-2" />
              Você tem alterações não salvas. Clique em "Salvar Alterações" para aplicá-las.
            </p>
          </div>
        )}

        {/* Tabs para organizar as seções */}
        <Tabs defaultValue="navbar" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 mb-6">
            <TabsTrigger value="navbar">Navbar</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="quemSomos">Quem Somos</TabsTrigger>
            <TabsTrigger value="abordagem">Abordagem</TabsTrigger>
            <TabsTrigger value="trabalhos">Trabalhos</TabsTrigger>
            <TabsTrigger value="cta">CTA</TabsTrigger>
            <TabsTrigger value="newsletter">Newsletter</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          {/* Navbar */}
          <TabsContent value="navbar">
            <Card>
              <CardHeader>
                <CardTitle>Textos da Navegação</CardTitle>
                <CardDescription>
                  Edite os textos do menu de navegação
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="navbar-logo">Texto do Logo</Label>
                  <Input
                    id="navbar-logo"
                    value={texts.navbar.logoText}
                    onChange={(e) => updateText('navbar', 'logoText', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="menu-inicio">Menu: Início</Label>
                    <Input
                      id="menu-inicio"
                      value={texts.navbar.menuItems.inicio}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              inicio: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-ocurso">Menu: O Curso</Label>
                    <Input
                      id="menu-ocurso"
                      value={texts.navbar.menuItems.oCurso}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              oCurso: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-trabalhos">Menu: Trabalhos</Label>
                    <Input
                      id="menu-trabalhos"
                      value={texts.navbar.menuItems.trabalhos}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              trabalhos: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-blog">Menu: Blog</Label>
                    <Input
                      id="menu-blog"
                      value={texts.navbar.menuItems.blog}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              blog: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-contato">Menu: Contato</Label>
                    <Input
                      id="menu-contato"
                      value={texts.navbar.menuItems.contato}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              contato: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-faq">Menu: FAQ</Label>
                    <Input
                      id="menu-faq"
                      value={texts.navbar.menuItems.faq}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              faq: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-area">Menu: Área do Aluno</Label>
                    <Input
                      id="menu-area"
                      value={texts.navbar.menuItems.areaDoAluno}
                      onChange={(e) => {
                        setTexts(prev => ({
                          ...prev,
                          navbar: {
                            ...prev.navbar,
                            menuItems: {
                              ...prev.navbar.menuItems,
                              areaDoAluno: e.target.value
                            }
                          }
                        }));
                        setHasChanges(true);
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero */}
          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Seção Hero (Cabeçalho Principal)</CardTitle>
                <CardDescription>
                  Edite os textos da seção principal da página inicial
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="hero-titulo">Título Principal</Label>
                  <Input
                    id="hero-titulo"
                    value={texts.hero.titulo}
                    onChange={(e) => updateText('hero', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="hero-subtitulo">Subtítulo</Label>
                  <Textarea
                    id="hero-subtitulo"
                    value={texts.hero.subtitulo}
                    onChange={(e) => updateText('hero', 'subtitulo', e.target.value)}
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="hero-btn1">Texto Botão Principal</Label>
                    <Input
                      id="hero-btn1"
                      value={texts.hero.textoBotaoPrincipal}
                      onChange={(e) => updateText('hero', 'textoBotaoPrincipal', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="hero-btn2">Texto Botão Secundário</Label>
                    <Input
                      id="hero-btn2"
                      value={texts.hero.textoBotaoSecundario}
                      onChange={(e) => updateText('hero', 'textoBotaoSecundario', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Quem Somos */}
          <TabsContent value="quemSomos">
            <Card>
              <CardHeader>
                <CardTitle>Seção Quem Somos</CardTitle>
                <CardDescription>
                  Edite os textos da seção sobre a escola
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="quem-titulo">Título</Label>
                  <Input
                    id="quem-titulo"
                    value={texts.quemSomos.titulo}
                    onChange={(e) => updateText('quemSomos', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="quem-desc">Descrição</Label>
                  <Textarea
                    id="quem-desc"
                    value={texts.quemSomos.descricao}
                    onChange={(e) => updateText('quemSomos', 'descricao', e.target.value)}
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Abordagem */}
          <TabsContent value="abordagem">
            <Card>
              <CardHeader>
                <CardTitle>Seção Nossa Abordagem</CardTitle>
                <CardDescription>
                  Edite os textos da metodologia e diferenciais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="abord-titulo">Título</Label>
                  <Input
                    id="abord-titulo"
                    value={texts.abordagem.titulo}
                    onChange={(e) => updateText('abordagem', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="abord-desc">Descrição</Label>
                  <Input
                    id="abord-desc"
                    value={texts.abordagem.descricao}
                    onChange={(e) => updateText('abordagem', 'descricao', e.target.value)}
                  />
                </div>
                <div className="space-y-6 mt-6">
                  <h3 className="font-semibold">Itens da Abordagem</h3>
                  {texts.abordagem.items.map((item, index) => (
                    <Card key={index} className="p-4">
                      <h4 className="font-medium mb-3">Item {index + 1}</h4>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor={`item-${index}-titulo`}>Título</Label>
                          <Input
                            id={`item-${index}-titulo`}
                            value={item.titulo}
                            onChange={(e) => updateArrayItem('abordagem', index, 'titulo', e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`item-${index}-desc`}>Descrição</Label>
                          <Textarea
                            id={`item-${index}-desc`}
                            value={item.descricao}
                            onChange={(e) => updateArrayItem('abordagem', index, 'descricao', e.target.value)}
                            rows={2}
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Trabalhos */}
          <TabsContent value="trabalhos">
            <Card>
              <CardHeader>
                <CardTitle>Seção Trabalhos dos Alunos</CardTitle>
                <CardDescription>
                  Edite os textos da galeria de trabalhos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="trab-titulo">Título</Label>
                  <Input
                    id="trab-titulo"
                    value={texts.trabalhos.titulo}
                    onChange={(e) => updateText('trabalhos', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="trab-sub">Subtítulo</Label>
                  <Input
                    id="trab-sub"
                    value={texts.trabalhos.subtitulo}
                    onChange={(e) => updateText('trabalhos', 'subtitulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="trab-btn">Texto do Botão</Label>
                  <Input
                    id="trab-btn"
                    value={texts.trabalhos.textoBotao}
                    onChange={(e) => updateText('trabalhos', 'textoBotao', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* CTA */}
          <TabsContent value="cta">
            <Card>
              <CardHeader>
                <CardTitle>Call to Action (Aula Aberta)</CardTitle>
                <CardDescription>
                  Edite os textos do convite para aula aberta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cta-titulo">Título</Label>
                  <Input
                    id="cta-titulo"
                    value={texts.ctaAulaAberta.titulo}
                    onChange={(e) => updateText('ctaAulaAberta', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="cta-desc">Descrição</Label>
                  <Textarea
                    id="cta-desc"
                    value={texts.ctaAulaAberta.descricao}
                    onChange={(e) => updateText('ctaAulaAberta', 'descricao', e.target.value)}
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="cta-btn">Texto do Botão</Label>
                  <Input
                    id="cta-btn"
                    value={texts.ctaAulaAberta.textoBotao}
                    onChange={(e) => updateText('ctaAulaAberta', 'textoBotao', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Newsletter */}
          <TabsContent value="newsletter">
            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
                <CardDescription>
                  Edite os textos do formulário de newsletter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="news-titulo">Título</Label>
                  <Input
                    id="news-titulo"
                    value={texts.newsletter.titulo}
                    onChange={(e) => updateText('newsletter', 'titulo', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="news-placeholder">Placeholder do Campo</Label>
                  <Input
                    id="news-placeholder"
                    value={texts.newsletter.placeholder}
                    onChange={(e) => updateText('newsletter', 'placeholder', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="news-btn">Texto do Botão</Label>
                  <Input
                    id="news-btn"
                    value={texts.newsletter.textoBotao}
                    onChange={(e) => updateText('newsletter', 'textoBotao', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Footer */}
          <TabsContent value="footer">
            <Card>
              <CardHeader>
                <CardTitle>Rodapé</CardTitle>
                <CardDescription>
                  Edite os textos e informações do rodapé
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="footer-desc">Descrição da Escola</Label>
                  <Textarea
                    id="footer-desc"
                    value={texts.footer.descricao}
                    onChange={(e) => updateText('footer', 'descricao', e.target.value)}
                    rows={2}
                  />
                </div>
                <div>
                  <Label htmlFor="footer-direitos">Direitos Autorais</Label>
                  <Input
                    id="footer-direitos"
                    value={texts.footer.direitos}
                    onChange={(e) => updateText('footer', 'direitos', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="footer-menu">Título Menu</Label>
                    <Input
                      id="footer-menu"
                      value={texts.footer.menuTitulo}
                      onChange={(e) => updateText('footer', 'menuTitulo', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer-contato">Título Contato</Label>
                    <Input
                      id="footer-contato"
                      value={texts.footer.contatoTitulo}
                      onChange={(e) => updateText('footer', 'contatoTitulo', e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="footer-email">E-mail</Label>
                    <Input
                      id="footer-email"
                      type="email"
                      value={texts.footer.email}
                      onChange={(e) => updateText('footer', 'email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer-tel">Telefone</Label>
                    <Input
                      id="footer-tel"
                      value={texts.footer.telefone}
                      onChange={(e) => updateText('footer', 'telefone', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="footer-end">Endereço</Label>
                    <Input
                      id="footer-end"
                      value={texts.footer.endereco}
                      onChange={(e) => updateText('footer', 'endereco', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}