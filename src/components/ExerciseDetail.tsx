import React, { useState } from 'react';
import { Exercise } from '../types';
import { InteractiveSimulator } from './InteractiveSimulator';
import { ChemistryVisual } from './ChemistryVisual';
import { VisualExerciseRenderer } from './VisualExerciseRenderer';
import {
  FlaskConical,
  Flame,
  CheckCircle2,
  Lightbulb,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Calculator,
  ListOrdered,
  Layers,
  Eye,
} from 'lucide-react';

interface ExerciseDetailProps {
  exercise: Exercise;
  totalExercises: number;
  onNavigate: (id: number) => void;
}

export const ExerciseDetail: React.FC<ExerciseDetailProps> = ({
  exercise,
  totalExercises,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const isSolutions = exercise.category === 'solucoes';

  const handleCopy = () => {
    let text = `EXERCÍCIO ${exercise.number}: ${exercise.title}\n\n`;
    text += `ENUNCIADO:\n${exercise.statement}\n\n`;
    text += `RESPOSTA DIRETA:\n${exercise.directAnswer}\n\n`;
    text += `DADOS:\n${exercise.givenData.map((d) => `• ${d.label}: ${d.value}`).join('\n')}\n\n`;
    text += `FÓRMULAS:\n${exercise.formulas.join('\n')}\n\n`;
    text += `PASSO A PASSO:\n`;
    exercise.steps.forEach((st) => {
      text += `\nPasso ${st.stepNumber} - ${st.title}:\n`;
      if (st.formula) text += `Fórmula: ${st.formula}\n`;
      text += `Cálculo: ${st.calculation}\n`;
      text += `Resultado: ${st.result}\n`;
      text += `Explicação: ${st.explanation}\n`;
    });
    if (exercise.subQuestions) {
      text += `\nITENS ESPECÍFICOS:\n`;
      exercise.subQuestions.forEach((sq) => {
        text += `${sq.letter}) ${sq.label}\nCálculo: ${sq.calculation}\nResultado: ${sq.result}\n\n`;
      });
    }
    text += `\nRESPOSTA FINAL:\n${exercise.finalAnswerText}\n\n`;
    text += `DICA TEÓRICA:\n${exercise.theoreticalTip}\n`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" id={`exercise-${exercise.number}`}>
      {/* Top Banner */}
      <div className="p-5 sm:p-6 bg-slate-50/90 border-b border-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center justify-center w-8 h-8 rounded-xl font-mono text-sm font-bold shadow-xs ${
                isSolutions
                  ? 'bg-blue-600 text-white'
                  : 'bg-amber-600 text-white'
              }`}
            >
              #{exercise.number}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isSolutions
                  ? 'bg-blue-100/70 text-blue-800 border border-blue-200'
                  : 'bg-amber-100/70 text-amber-800 border border-amber-200'
              }`}
            >
              {isSolutions ? (
                <FlaskConical className="w-3.5 h-3.5" />
              ) : (
                <Flame className="w-3.5 h-3.5" />
              )}
              {exercise.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
              title="Copiar resolução completa para área de transferência"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copiar Resolução</span>
                </>
              )}
            </button>

            {/* Quick Next/Prev buttons */}
            <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-2xs">
              <button
                type="button"
                onClick={() => onNavigate(exercise.id > 1 ? exercise.id - 1 : totalExercises)}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Exercício anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500 font-mono px-2 border-x border-slate-200">
                {exercise.number}/{totalExercises}
              </span>
              <button
                type="button"
                onClick={() => onNavigate(exercise.id < totalExercises ? exercise.id + 1 : 1)}
                className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Próximo exercício"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {exercise.title}
        </h2>
      </div>

      <div className="p-5 sm:p-8 space-y-7">
        {/* Enunciado da questão */}
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
            Enunciado da Questão Original
          </span>
          <div className="p-4 sm:p-5 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl border-y border-r border-slate-200">
            <p className="text-slate-800 text-base leading-relaxed font-medium whitespace-pre-line">
              {exercise.statement}
            </p>
          </div>
        </div>

        {/* Resposta direta / Gabarito imediato */}
        <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 flex items-start gap-3.5">
          <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Gabarito Rápido / Resposta Direta
            </span>
            <div className="text-lg font-bold text-emerald-950 font-mono mt-0.5">
              {exercise.directAnswer}
            </div>
            <p className="text-xs text-emerald-800 mt-1">
              {exercise.finalAnswerText}
            </p>
          </div>
        </div>

        {/* Grid de Dados e Fórmulas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Dados fornecidos */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Dados Fornecidos e Identificados</span>
            </h4>
            <ul className="space-y-2 text-sm">
              {exercise.givenData.map((d, i) => (
                <li key={i} className="flex items-start justify-between gap-2 py-1 border-b border-slate-100 last:border-0">
                  <span className="text-slate-600 font-medium text-xs sm:text-sm">{d.label}:</span>
                  <span className="font-mono font-semibold text-slate-900 text-xs sm:text-sm text-right bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    {d.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fórmulas e Relações Fundamentais */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 mb-3">
              <Calculator className="w-4 h-4 text-indigo-600" />
              <span>Fórmulas e Princípios Aplicados</span>
            </h4>
            <div className="space-y-2">
              {exercise.formulas.map((f, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs sm:text-sm text-slate-800"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sub-questões para o Exercício 9 */}
        {exercise.subQuestions && exercise.subQuestions.length > 0 && (
          <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2 mb-4 pb-2 border-b border-slate-200">
              <ListOrdered className="w-4 h-4 text-blue-600" />
              <span>Detalhamento dos Itens Solicitados (a até h)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exercise.subQuestions.map((sq) => (
                <div
                  key={sq.letter}
                  className="bg-slate-50/70 border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center font-mono">
                      {sq.letter}
                    </span>
                    <span className="font-semibold text-slate-800 text-sm">
                      {sq.label}
                    </span>
                  </div>

                  {sq.formula && (
                    <div className="font-mono text-xs text-blue-900 bg-blue-50/60 p-1.5 rounded border border-blue-100 mb-2">
                      {sq.formula}
                    </div>
                  )}

                  <div className="text-xs text-slate-600 whitespace-pre-line mb-2 font-mono bg-white p-2 rounded border border-slate-200">
                    {sq.calculation}
                  </div>

                  <div className="flex items-baseline justify-between pt-2 border-t border-slate-200">
                    <span className="text-[11px] text-slate-500 uppercase font-semibold">
                      Resultado {sq.letter}):
                    </span>
                    <span className="font-mono font-bold text-sm text-emerald-800">
                      {sq.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Visualizador Especial para Exercício 15 (Lei de Hess) */}
        {exercise.id === 15 && (
          <div className="border-2 border-amber-200 bg-amber-50/40 rounded-xl p-5 shadow-2xs">
            <h4 className="text-sm font-bold text-amber-900 flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-amber-700" />
              <span>Diagrama Algébrico da Lei de Hess (Cancelamentos e Soma)</span>
            </h4>
            <div className="space-y-3 font-mono text-xs sm:text-sm">
              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">
                  1) Manter Combustão da Glicose (× 1):
                </span>
                <p className="text-slate-800">
                  C₆H₁₂O₆(s) + <span className="bg-red-100 px-1 rounded line-through text-red-700">6 O₂(g)</span> →{' '}
                  <span className="bg-yellow-100 px-1 rounded font-bold text-amber-800">6 CO₂(g)</span> +{' '}
                  <span className="bg-red-100 px-1 rounded line-through text-red-700">6 H₂O(l)</span>
                </p>
                <span className="text-xs text-red-700 font-bold block mt-1">ΔH₁ = -2.840 kJ</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-amber-200">
                <span className="text-xs font-bold text-slate-500 block mb-1">
                  2) Inverter e Duplicar Combustão do Etanol (× 2 com sinal invertido):
                </span>
                <p className="text-slate-800">
                  <span className="bg-yellow-100 px-1 rounded font-bold text-amber-800">4 CO₂(g)</span> +{' '}
                  <span className="bg-red-100 px-1 rounded line-through text-red-700">6 H₂O(l)</span> → 2 C₂H₅OH(l) +{' '}
                  <span className="bg-red-100 px-1 rounded line-through text-red-700">6 O₂(g)</span>
                </p>
                <span className="text-xs text-emerald-700 font-bold block mt-1">
                  ΔH₂' = 2 × (+1.350 kJ) = +2.700 kJ
                </span>
              </div>

              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-300">
                <span className="text-xs font-bold text-emerald-900 block mb-1">
                  3) Equação Global Somada (após corte dos 6 O₂, 6 H₂O e 4 CO₂):
                </span>
                <p className="text-emerald-950 font-bold text-sm">
                  C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g)
                </p>
                <div className="flex flex-wrap items-baseline gap-2 mt-2 pt-2 border-t border-emerald-200">
                  <span className="text-xs text-slate-700 font-sans">Variação de entalpia:</span>
                  <span className="font-bold text-emerald-900">ΔH = -2840 + 2700 = -140 kJ</span>
                  <span className="text-xs text-slate-600 font-sans">
                    ⟹ Como a equação tem "+ x kJ" nos produtos, <strong>x = 140</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Visualização Conceitual da Reação / Solução */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <h3 className="text-base font-bold text-slate-900">
              Esquema Visual e Transformação Química
            </h3>
          </div>
          <ChemistryVisual exerciseId={exercise.id} />
        </div>

        {/* Resolução dos Cálculos em Formato Visual (Fração, Passos e Cancelamento) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">
                Desenvolvimento dos Cálculos em Formato Visual
              </h3>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
              Frações e Fluxo Algébrico
            </span>
          </div>
          <VisualExerciseRenderer exerciseId={exercise.id} />
        </div>

        {/* Resolução Passo a Passo */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-blue-600" />
              <span>Demonstração Passo a Passo Completa</span>
            </h3>
            <span className="text-xs text-slate-500 font-medium">
              {exercise.steps.length} {exercise.steps.length === 1 ? 'etapa' : 'etapas de raciocínio'}
            </span>
          </div>

          <div className="space-y-4">
            {exercise.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {step.title}
                    </h4>
                    {step.formula && (
                      <span className="inline-block font-mono text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 mt-1">
                        {step.formula}
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 my-3">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Cálculo Algébrico e Substituição:
                  </span>
                  <div className="font-mono text-xs sm:text-sm text-slate-900 whitespace-pre-line leading-relaxed">
                    {step.calculation}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.explanation}
                  </p>
                  <div className="shrink-0 bg-emerald-50 text-emerald-900 font-mono text-xs font-bold px-3 py-1 rounded-md border border-emerald-200 text-right">
                    {step.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simulador Interativo */}
        {exercise.simulation && (
          <InteractiveSimulator
            simulation={exercise.simulation}
            exerciseNumber={exercise.number}
          />
        )}

        {/* Dica Teórica e Pegadinha de Prova */}
        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-amber-900 tracking-tight">
                Dica Teórica do Professor & Pegadinha Frequente de Prova
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 mt-1.5 leading-relaxed">
                {exercise.theoreticalTip}
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé de Navegação entre exercícios */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onNavigate(exercise.id > 1 ? exercise.id - 1 : totalExercises)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Exercício Anterior (#{exercise.id > 1 ? exercise.id - 1 : totalExercises})</span>
          </button>

          <span className="text-xs font-mono text-slate-500">
            Exercício {exercise.number} de {totalExercises}
          </span>

          <button
            type="button"
            onClick={() => onNavigate(exercise.id < totalExercises ? exercise.id + 1 : 1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-colors shadow-xs"
          >
            <span>Próximo Exercício (#{exercise.id < totalExercises ? exercise.id + 1 : 1})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
