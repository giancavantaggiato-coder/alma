import { useState } from 'react';
import { CalendarClock, RefreshCw, X, Check, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner';

interface AulaFaltada {
  id: string;
  data: string;
  diaSemana: string;
  horario: string;
  tipo: string;
  modulo: string;
}

interface DataDisponivel {
  data: string;
  diaSemana: string;
  horario: string;
  vagasDisponiveis: number;
}

export function ReagendarAula() {
  const [showDialog, setShowDialog] = useState(false);
  const [aulasSelecionadas, setAulasSelecionadas] = useState<string[]>([]);
  const [dataEscolhida, setDataEscolhida] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Dados simulados - em produção viria do backend
  const aulasFaltadas: AulaFaltada[] = [
    {
      id: 'aula_1',
      data: '2024-01-15',
      diaSemana: 'Segunda-feira',
      horario: '14:00 - 17:00',
      tipo: 'Fundamentos e Desenho',
      modulo: 'Módulo 1'
    },
    {
      id: 'aula_2',
      data: '2024-01-17',
      diaSemana: 'Quarta-feira',
      horario: '14:00 - 17:00',
      tipo: 'Cores e Teoria',
      modulo: 'Módulo 3'
    },
  ];

  const datasDisponiveis: DataDisponivel[] = [
    {
      data: '2024-01-29',
      diaSemana: 'Segunda-feira',
      horario: '14:00 - 17:00',
      vagasDisponiveis: 3
    },
    {
      data: '2024-01-30',
      diaSemana: 'Terça-feira',
      horario: '14:00 - 17:00',
      vagasDisponiveis: 5
    },
    {
      data: '2024-01-31',
      diaSemana: 'Quarta-feira',
      horario: '14:00 - 17:00',
      vagasDisponiveis: 2
    },
    {
      data: '2024-02-01',
      diaSemana: 'Quinta-feira',
      horario: '14:00 - 17:00',
      vagasDisponiveis: 4
    },
    {
      data: '2024-02-02',
      diaSemana: 'Sexta-feira',
      horario: '14:00 - 17:00',
      vagasDisponiveis: 6
    },
  ];

  const handleSelecionarAula = (aulaId: string) => {
    if (aulasSelecionadas.includes(aulaId)) {
      setAulasSelecionadas(aulasSelecionadas.filter(id => id !== aulaId));
    } else {
      setAulasSelecionadas([...aulasSelecionadas, aulaId]);
    }
  };

  const handleConfirmarReagendamento = async () => {
    if (aulasSelecionadas.length === 0) {
      toast.error('Selecione pelo menos uma aula para reagendar');
      return;
    }

    if (!dataEscolhida) {
      toast.error('Escolha uma data para a reposição');
      return;
    }

    setIsProcessing(true);

    // Simular chamada ao backend
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Aula(s) reagendada(s) com sucesso! Você receberá um email de confirmação.');
      setShowDialog(false);
      setAulasSelecionadas([]);
      setDataEscolhida('');
    }, 2000);
  };

  const formatarData = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      <Card className="border-2 border-[#c8b372] shadow-lg">
        <CardHeader className="pb-4 bg-gradient-to-br from-[#fae08f] to-[#f5d67a]">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="font-['DM_Sans:Bold',sans-serif] text-black text-xl flex items-center gap-2">
                <CalendarClock className="w-6 h-6" />
                Reagendar Aulas
              </CardTitle>
              <CardDescription className="font-['DM_Sans:Regular',sans-serif] text-black/80 text-sm mt-1">
                Reponha as aulas que você não pôde comparecer
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          {/* Informações sobre aulas faltadas */}
          {aulasFaltadas.length > 0 ? (
            <>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-orange-50 border-2 border-orange-200">
                <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-['DM_Sans:Medium',sans-serif] text-sm text-orange-900">
                    Você tem {aulasFaltadas.length} aula{aulasFaltadas.length > 1 ? 's' : ''} para repor
                  </h4>
                  <p className="text-sm text-orange-800 font-['DM_Sans:Regular',sans-serif] mt-1">
                    Agende sua reposição o quanto antes para não perder o ritmo do curso.
                  </p>
                </div>
              </div>

              {/* Lista de aulas faltadas */}
              <div className="space-y-3">
                <h5 className="font-['DM_Sans:Medium',sans-serif] text-sm text-gray-700">
                  Aulas a repor:
                </h5>
                {aulasFaltadas.map((aula) => (
                  <div
                    key={aula.id}
                    className="p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-['DM_Sans:Medium',sans-serif] text-base text-black">
                            {aula.tipo}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full font-['DM_Sans:Medium',sans-serif]">
                            {aula.modulo}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif]">
                          {aula.diaSemana}, {formatarData(aula.data)}
                        </p>
                        <p className="text-sm text-gray-500 font-['DM_Sans:Regular',sans-serif]">
                          {aula.horario}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botão para abrir dialog */}
              <Button
                onClick={() => setShowDialog(true)}
                className="w-full bg-black hover:bg-gray-800 text-white font-['DM_Sans:Medium',sans-serif] flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Reagendar Aulas
              </Button>

              {/* Informações importantes */}
              <div className="p-4 rounded-lg bg-blue-50 border-2 border-blue-200">
                <h5 className="font-['DM_Sans:Medium',sans-serif] text-sm text-blue-900 mb-2">
                  ℹ️ Informações Importantes
                </h5>
                <ul className="text-sm text-blue-800 font-['DM_Sans:Regular',sans-serif] space-y-1 list-disc list-inside">
                  <li>Você pode reagendar até 2 aulas por mês</li>
                  <li>A reposição deve ser agendada com no mínimo 24h de antecedência</li>
                  <li>As vagas para reposição são limitadas</li>
                  <li>Você receberá confirmação por email após o agendamento</li>
                </ul>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
              <h4 className="font-['DM_Sans:Medium',sans-serif] text-lg text-gray-900 mb-2">
                Você está em dia com suas aulas!
              </h4>
              <p className="text-sm text-gray-600 font-['DM_Sans:Regular',sans-serif]">
                Não há aulas pendentes para reposição no momento.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Dialog de Reagendamento */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="font-['Inter:Medium',sans-serif] text-2xl font-medium mb-2 flex items-center gap-2">
              <CalendarClock className="w-6 h-6" />
              Reagendar Aulas
            </DialogTitle>
            <DialogDescription className="font-['DM_Sans:Regular',sans-serif] text-[16px] text-gray-600">
              Selecione as aulas que deseja reagendar e escolha uma data disponível para reposição
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {/* Seleção de aulas */}
            <div>
              <Label className="font-['DM_Sans:Medium',sans-serif] text-base mb-3 block">
                1. Selecione as aulas para reagendar:
              </Label>
              <div className="space-y-2">
                {aulasFaltadas.map((aula) => (
                  <div
                    key={aula.id}
                    onClick={() => handleSelecionarAula(aula.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      aulasSelecionadas.includes(aula.id)
                        ? 'border-black bg-black/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          aulasSelecionadas.includes(aula.id)
                            ? 'border-black bg-black'
                            : 'border-gray-300'
                        }`}
                      >
                        {aulasSelecionadas.includes(aula.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-['DM_Sans:Medium',sans-serif] text-sm">
                            {aula.tipo}
                          </span>
                          <span className="text-xs px-2 py-0.5 bg-gray-200 rounded-full font-['DM_Sans:Medium',sans-serif]">
                            {aula.modulo}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 font-['DM_Sans:Regular',sans-serif]">
                          {aula.diaSemana}, {formatarData(aula.data)} • {aula.horario}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Seleção de data */}
            <div>
              <Label className="font-['DM_Sans:Medium',sans-serif] text-base mb-3 block">
                2. Escolha uma data para reposição:
              </Label>
              <div className="space-y-2">
                {datasDisponiveis.map((dataDisp, index) => (
                  <div
                    key={index}
                    onClick={() => setDataEscolhida(dataDisp.data)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      dataEscolhida === dataDisp.data
                        ? 'border-black bg-black/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            dataEscolhida === dataDisp.data
                              ? 'border-black bg-black'
                              : 'border-gray-300'
                          }`}
                        >
                          {dataEscolhida === dataDisp.data && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full" />
                          )}
                        </div>
                        <div>
                          <p className="font-['DM_Sans:Medium',sans-serif] text-sm">
                            {dataDisp.diaSemana}, {formatarData(dataDisp.data)}
                          </p>
                          <p className="text-xs text-gray-600 font-['DM_Sans:Regular',sans-serif]">
                            {dataDisp.horario}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-['DM_Sans:Medium',sans-serif] ${
                            dataDisp.vagasDisponiveis <= 2
                              ? 'bg-red-100 text-red-700'
                              : dataDisp.vagasDisponiveis <= 4
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {dataDisp.vagasDisponiveis} vaga{dataDisp.vagasDisponiveis !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumo */}
            {aulasSelecionadas.length > 0 && dataEscolhida && (
              <div className="p-4 rounded-lg bg-green-50 border-2 border-green-200">
                <h5 className="font-['DM_Sans:Medium',sans-serif] text-sm text-green-900 mb-2">
                  ✅ Resumo do Reagendamento
                </h5>
                <p className="text-sm text-green-800 font-['DM_Sans:Regular',sans-serif]">
                  Você está reagendando <strong>{aulasSelecionadas.length} aula{aulasSelecionadas.length > 1 ? 's' : ''}</strong> para{' '}
                  <strong>
                    {datasDisponiveis.find(d => d.data === dataEscolhida)?.diaSemana},{' '}
                    {formatarData(dataEscolhida)}
                  </strong>
                  .
                </p>
              </div>
            )}

            {/* Botões */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => {
                  setShowDialog(false);
                  setAulasSelecionadas([]);
                  setDataEscolhida('');
                }}
                variant="outline"
                className="flex-1 font-['DM_Sans:Medium',sans-serif]"
                disabled={isProcessing}
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button
                onClick={handleConfirmarReagendamento}
                disabled={isProcessing || aulasSelecionadas.length === 0 || !dataEscolhida}
                className="flex-1 bg-black hover:bg-gray-800 text-white font-['DM_Sans:Medium',sans-serif]"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Processando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Confirmar Reagendamento
                  </span>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
