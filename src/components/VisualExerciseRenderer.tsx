import React from 'react';
import { VisualFraction, StepFlowCard } from './VisualMathHelpers';
import { ArrowRight, Equal, CheckCircle, Flame, FlaskConical, Beaker, Plus, Minus, X } from 'lucide-react';

interface VisualExerciseRendererProps {
  exerciseId: number;
}

export const VisualExerciseRenderer: React.FC<VisualExerciseRendererProps> = ({ exerciseId }) => {
  switch (exerciseId) {
    case 1:
      return <VisualExercise1 />;
    case 2:
      return <VisualExercise2 />;
    case 3:
      return <VisualExercise3 />;
    case 4:
      return <VisualExercise4 />;
    case 5:
      return <VisualExercise5 />;
    case 6:
      return <VisualExercise6 />;
    case 7:
      return <VisualExercise7 />;
    case 8:
      return <VisualExercise8 />;
    case 9:
      return <VisualExercise9 />;
    case 10:
      return <VisualExercise10 />;
    case 11:
      return <VisualExercise11 />;
    case 12:
      return <VisualExercise12 />;
    case 13:
      return <VisualExercise13 />;
    case 14:
      return <VisualExercise14 />;
    case 15:
      return <VisualExercise15 />;
    default:
      return null;
  }
};

/* ==================== EXERCÍCIO 1 ==================== */
function VisualExercise1() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      {/* Etapa 1: Massa Molar com Partição Hidratada */}
      <StepFlowCard title="1. Montagem da Massa Molar (Sal Anidro + 5 Águas de Hidratação)" badge="MM(CuSO₄·5H₂O)">
        <div className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded-lg border border-blue-200">
              <span className="text-[11px] font-semibold text-blue-700 block uppercase">Fração Anidra (CuSO₄)</span>
              <p className="font-mono text-xs text-slate-700 mt-1">
                63,55 (Cu) + 32,06 (S) + 4×16,00 (O)
              </p>
              <div className="text-right font-mono font-bold text-blue-900 mt-1.5 text-sm">= 159,61 g/mol</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-indigo-200">
              <span className="text-[11px] font-semibold text-indigo-700 block uppercase">5 Águas de Cristalização (5 H₂O)</span>
              <p className="font-mono text-xs text-slate-700 mt-1">
                5 × [ 2×1,008 (H) + 16,00 (O) ] = 5 × 18,016
              </p>
              <div className="text-right font-mono font-bold text-indigo-900 mt-1.5 text-sm">= 90,08 g/mol</div>
            </div>
          </div>
          <div className="bg-slate-100/80 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between font-mono">
            <span className="text-slate-600 font-sans text-xs">Soma total: 159,61 + 90,08</span>
            <span className="font-bold text-slate-900 text-sm">= 249,69 g/mol</span>
          </div>
        </div>
      </StepFlowCard>

      {/* Etapa 2: Mols e Molaridade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StepFlowCard title="2. Mols de Soluto (n)" badge="n = m / MM" resultNode="11,054 mol">
          <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-slate-200">
            <VisualFraction
              prefix={<span className="text-blue-800 font-bold">n =</span>}
              numerator="2.760 g (convertido de 2,76 kg)"
              denominator="249,69 g/mol"
              highlightNumerator
              highlightDenominator
              suffix={
                <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  11,054 mol
                </span>
              }
            />
          </div>
        </StepFlowCard>

        <StepFlowCard title="3. Concentração Molar (M)" badge="M = n / V" resultNode="7,62 mol/L">
          <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-slate-200">
            <VisualFraction
              prefix={<span className="text-blue-800 font-bold">M =</span>}
              numerator="11,054 mol"
              denominator="1,45 L"
              highlightNumerator
              highlightDenominator
              suffix={
                <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  7,62 mol/L (M)
                </span>
              }
            />
          </div>
        </StepFlowCard>
      </div>
    </div>
  );
}

/* ==================== EXERCÍCIO 2 ==================== */
function VisualExercise2() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StepFlowCard title="1. Quantidade de Mols (n)" badge="n = M × V" resultNode="0,02838 mol">
          <div className="bg-white p-3 rounded-lg border border-slate-200 space-y-2">
            <div className="flex items-center justify-center gap-2 font-mono flex-wrap">
              <span className="font-bold text-blue-700">n</span>
              <span>=</span>
              <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded font-bold text-blue-900">0,1135 mol/L</span>
              <span>×</span>
              <span className="px-2 py-0.5 bg-indigo-50 border border-indigo-200 rounded font-bold text-indigo-900">0,2500 L</span>
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              (Os litros cancelam mutuamente com o denominador de mol/L)
            </p>
          </div>
        </StepFlowCard>

        <StepFlowCard title="2. Massa Molar K₂CrO₄" badge="MM = ∑ massas atômicas" resultNode="194,20 g/mol">
          <div className="bg-white p-3 rounded-lg border border-slate-200 text-center font-mono space-y-1">
            <div className="text-xs text-slate-700">
              2×(39,10) + 1×(52,00) + 4×(16,00)
            </div>
            <div className="text-xs text-slate-500">
              78,20 + 52,00 + 64,00
            </div>
            <div className="font-bold text-slate-900 text-sm pt-1 border-t border-slate-100">
              = 194,20 g/mol
            </div>
          </div>
        </StepFlowCard>
      </div>

      <StepFlowCard title="3. Massa do Soluto Pesada na Balança (m)" badge="m = n × MM" resultNode="5,510 g">
        <div className="bg-white p-3.5 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-mono flex-wrap">
            <span className="text-blue-900 font-bold">m</span>
            <span>=</span>
            <span className="px-2 py-1 bg-blue-50 border border-blue-200 rounded font-bold">0,028375 mol</span>
            <span>×</span>
            <span className="px-2 py-1 bg-amber-50 border border-amber-200 rounded font-bold">194,20 g/mol</span>
          </div>
          <div className="font-mono text-sm font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
            = 5,5104 g ≈ 5,510 g (4 algarismos significativos)
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 3 ==================== */
function VisualExercise3() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
      <StepFlowCard title="1. Quantidade de Íons Ca²⁺ (n)" badge="n = m / MM" resultNode="0,025 mol">
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
          <VisualFraction
            prefix={<span className="text-blue-800 font-bold">n =</span>}
            numerator="1,0 g de Ca"
            denominator="40,08 g/mol"
            highlightNumerator
            highlightDenominator
            suffix={
              <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                <ArrowRight className="w-4 h-4 text-slate-400" />
                0,02495 mol
              </span>
            }
          />
          <span className="text-[11px] text-slate-500 mt-2 text-center">
            *A perda de 2 elétrons no íon Ca²⁺ não altera a massa molar atômica de 40,08 g/mol.
          </span>
        </div>
      </StepFlowCard>

      <StepFlowCard title="2. Molaridade em 1,0 L de Leite" badge="M = n / V" resultNode="0,025 mol/L (25 mmol/L)">
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
          <VisualFraction
            prefix={<span className="text-blue-800 font-bold">[Ca²⁺] =</span>}
            numerator="0,02495 mol"
            denominator="1,0 L"
            highlightNumerator
            highlightDenominator
            suffix={
              <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                <ArrowRight className="w-4 h-4 text-slate-400" />
                0,025 mol/L
              </span>
            }
          />
          <div className="mt-3 flex items-center gap-2 text-xs font-mono">
            <span className="px-2 py-0.5 bg-blue-100 text-blue-900 rounded font-semibold">2,5 × 10⁻² M</span>
            <span>=</span>
            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-900 rounded font-semibold">25 mmol/L</span>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 4 ==================== */
function VisualExercise4() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Equilíbrio de Matéria na Diluição (Conservação de Soluto)" badge="M₁ · V₁ = M₂ · V₂">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200 text-center">
              <span className="text-[11px] font-bold text-blue-800 uppercase tracking-wider block">Solução Estoque (Concentrada)</span>
              <div className="font-mono text-sm mt-1 text-blue-950 font-bold">
                0,33 M × <span className="text-amber-600 underline">V₁</span>
              </div>
            </div>

            <div className="p-3 bg-indigo-50/80 rounded-lg border border-indigo-200 text-center">
              <span className="text-[11px] font-bold text-indigo-800 uppercase tracking-wider block">Solução Diluída Final</span>
              <div className="font-mono text-sm mt-1 text-indigo-950 font-bold">
                0,025 M × 25 mL = <span className="text-emerald-700">0,625</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 border-t border-slate-100">
            <VisualFraction
              prefix={<span className="text-amber-700 font-bold text-sm">V₁ =</span>}
              numerator="0,025 × 25"
              denominator="0,33"
              highlightNumerator
              highlightDenominator
              suffix={<span className="text-slate-500">=</span>}
            />
            <VisualFraction
              numerator="0,625"
              denominator="0,33"
              suffix={
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-sm bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  1,89 mL
                </span>
              }
            />
          </div>

          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-slate-600 text-xs flex items-center justify-between">
            <span>Água a adicionar (V_H₂O = 25 - 1,89):</span>
            <span className="font-mono font-bold text-slate-800">23,11 mL de solvente</span>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 5 ==================== */
function VisualExercise5() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Fluxo de Concentração por Evaporação de Água" badge="n₁ = n₂  (soluto não evapora)">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-200">
              <span className="text-[11px] font-bold text-blue-700 block uppercase">1. Mols Iniciais de NaCl</span>
              <div className="font-mono mt-1 text-slate-800 font-semibold">
                n = 0,556 mol/L × 0,150 L
              </div>
              <div className="font-mono font-bold text-blue-900 mt-1 text-sm">= 0,0834 mol</div>
            </div>

            <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200">
              <span className="text-[11px] font-bold text-amber-700 block uppercase">2. Volume Reduzido por Evaporação</span>
              <div className="font-mono mt-1 text-slate-800 font-semibold">
                V₂ = 105 mL = 0,105 L
              </div>
              <div className="font-mono font-bold text-amber-900 mt-1 text-sm">45 mL de água evaporada</div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
            <VisualFraction
              prefix={<span className="text-slate-800 font-bold">M₂ =</span>}
              numerator="0,0834 mol"
              denominator="0,105 L"
              highlightNumerator
              highlightDenominator
              suffix={
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  0,794 mol/L (M)
                </span>
              }
            />
            <p className="text-[11px] text-slate-500 mt-2">
              A concentração aumentou de 0,556 M para 0,794 M devido à perda de 30% do solvente.
            </p>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 6 ==================== */
function VisualExercise6() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
      <StepFlowCard title="1. Mols de HCl Gasoso Dissolvido" badge="n = m / MM" resultNode="23,828 mol">
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center justify-center space-y-2">
          <VisualFraction
            prefix={<span className="text-blue-800 font-bold">n =</span>}
            numerator="868,8 g de HCl"
            denominator="36,461 g/mol"
            highlightNumerator
            highlightDenominator
            suffix={
              <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                <ArrowRight className="w-4 h-4 text-slate-400" />
                23,828 mol
              </span>
            }
          />
          <div className="text-[11px] text-slate-500 text-center font-mono">
            MM(HCl) = 1,008 (H) + 35,453 (Cl) = 36,461 g/mol
          </div>
        </div>
      </StepFlowCard>

      <StepFlowCard title="2. Molaridade em 2,00 L de Solução" badge="M = n / V" resultNode="11,91 mol/L (ou 11,9 M)">
        <div className="bg-white p-3 rounded-lg border border-slate-200 flex flex-col items-center justify-center space-y-2">
          <VisualFraction
            prefix={<span className="text-blue-800 font-bold">M =</span>}
            numerator="23,828 mol"
            denominator="2,00 L"
            highlightNumerator
            highlightDenominator
            suffix={
              <span className="inline-flex items-center gap-1 text-emerald-800 font-bold ml-2">
                <ArrowRight className="w-4 h-4 text-slate-400" />
                11,914 mol/L
              </span>
            }
          />
          <div className="text-[11px] text-slate-500 text-center">
            Com 3 algarismos significativos: <strong className="font-mono text-slate-800">11,9 M</strong>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 7 ==================== */
function VisualExercise7() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Determinação em Cascata: Volume ➔ Massa Total ➔ Soluto Puro" badge="m_sol = d × V  e  m_HCl = m_sol × τ">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center font-mono">
            {/* Bloco 1: Volume */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-[10px] uppercase font-bold text-blue-600 block font-sans">1. Volume Medido</span>
              <div className="text-sm font-bold text-blue-900 mt-0.5">45,0 cm³</div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            {/* Bloco 2: Densidade */}
            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="text-[10px] uppercase font-bold text-indigo-600 block font-sans">2. Multiplica por d</span>
              <div className="text-xs text-indigo-900 mt-0.5">45,0 × 1,19 g/cm³</div>
              <div className="text-sm font-bold text-indigo-950 mt-1">= 53,55 g (solução)</div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />

            {/* Bloco 3: Título */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
              <span className="text-[10px] uppercase font-bold text-emerald-600 block font-sans">3. Aplica o Título (37,21%)</span>
              <div className="text-xs text-emerald-900 mt-0.5">53,55 g × 0,3721</div>
              <div className="text-sm font-bold text-emerald-950 mt-1">= 19,93 g de HCl</div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-center text-slate-700">
            Fórmula direta compacta: <span className="font-mono font-bold text-blue-900">m = V × d × τ = 45,0 × 1,19 × 0,3721 = 19,93 g ≈ 19,9 g de HCl</span>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 8 ==================== */
function VisualExercise8() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Partição Molar em Mistura Ternária (Base de Cálculo: 100 g de Solução)" badge="X_i = n_i / ∑n">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Metanol */}
          <div className="bg-white p-3 rounded-lg border border-blue-200 space-y-2">
            <span className="text-xs font-bold text-blue-700 block uppercase">1. Metanol (CH₃OH)</span>
            <VisualFraction
              prefix="n₁ ="
              numerator="40 g"
              denominator="32,04 g/mol"
              highlightNumerator
              highlightDenominator
              suffix={<span className="text-slate-500">=</span>}
            />
            <div className="font-mono font-bold text-blue-900 text-sm">1,248 mol</div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 font-sans">Fração X₁:</span>
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">0,387 (38,7%)</span>
            </div>
          </div>

          {/* Etanol */}
          <div className="bg-white p-3 rounded-lg border border-amber-200 space-y-2">
            <span className="text-xs font-bold text-amber-700 block uppercase">2. Etanol (C₂H₅OH)</span>
            <VisualFraction
              prefix="n₂ ="
              numerator="40 g"
              denominator="46,07 g/mol"
              highlightNumerator
              highlightDenominator
              suffix={<span className="text-slate-500">=</span>}
            />
            <div className="font-mono font-bold text-amber-900 text-sm">0,868 mol</div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 font-sans">Fração X₂:</span>
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">0,269 (26,9%)</span>
            </div>
          </div>

          {/* Água */}
          <div className="bg-white p-3 rounded-lg border border-cyan-200 space-y-2">
            <span className="text-xs font-bold text-cyan-700 block uppercase">3. Água (H₂O)</span>
            <VisualFraction
              prefix="n₃ ="
              numerator="20 g"
              denominator="18,02 g/mol"
              highlightNumerator
              highlightDenominator
              suffix={<span className="text-slate-500">=</span>}
            />
            <div className="font-mono font-bold text-cyan-900 text-sm">1,110 mol</div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 font-sans">Fração X₃:</span>
              <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">0,344 (34,4%)</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 flex items-center justify-between font-mono text-xs">
          <span>n_total = 1,248 + 0,868 + 1,110 = <strong>3,226 mol</strong></span>
          <span className="text-emerald-700 font-bold">∑X = 0,387 + 0,269 + 0,344 = 1,000 (100%)</span>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 9 ==================== */
function VisualExercise9() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Quadro Sinóptico Visual de Grandezas (HNO₃ em Água)" badge="m₁ = 50 g ; m₂ = 250 g ; d = 1,5 g/mL">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono">
          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">a) Mols Soluto</span>
            <VisualFraction numerator="50 g" denominator="63,0 g/mol" />
            <div className="text-xs font-bold text-blue-900 mt-1">= 0,794 mol</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">a) Mols Solvente</span>
            <VisualFraction numerator="250 g" denominator="18,0 g/mol" />
            <div className="text-xs font-bold text-blue-900 mt-1">= 13,88 mol</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">b) Totais</span>
            <div className="text-xs font-bold text-slate-800 mt-1">300 g</div>
            <div className="text-xs font-bold text-slate-800">14,67 mol</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">c) Volume</span>
            <VisualFraction numerator="300 g" denominator="1,5 g/mL" />
            <div className="text-xs font-bold text-emerald-900 mt-1">= 200 mL (0,2 L)</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">d) Conc. Comum (C)</span>
            <VisualFraction numerator="50 g" denominator="0,200 L" />
            <div className="text-xs font-bold text-emerald-900 mt-1">= 250 g/L</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">e) Molaridade (M)</span>
            <VisualFraction numerator="0,794 mol" denominator="0,200 L" />
            <div className="text-xs font-bold text-indigo-900 mt-1">= 3,97 mol/L</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">f) Título em Massa (τ)</span>
            <VisualFraction numerator="50 g" denominator="300 g" />
            <div className="text-xs font-bold text-amber-900 mt-1">= 0,167 (16,7%)</div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-slate-200">
            <span className="text-[10px] font-bold text-slate-500 font-sans block">h) Molalidade (W)</span>
            <VisualFraction numerator="0,794 mol" denominator="0,250 kg" />
            <div className="text-xs font-bold text-purple-900 mt-1">= 3,17 mol/kg</div>
          </div>
        </div>

        <div className="bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 text-center font-mono text-xs">
          <span>g) Frações molares: <strong>X₁ = 0,794 / 14,67 = 0,054</strong> | <strong>X₂ = 13,88 / 14,67 = 0,946</strong> (Soma = 1,000)</span>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 10 ==================== */
function VisualExercise10() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Isolamento e Resolução do Calor Específico (Equação Fundamental)" badge="q = m · c · ΔT ⟹ c = q / (m · ΔT)" colorTheme="amber">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-amber-50/60 rounded-lg border border-amber-200 text-center font-mono">
              <span className="text-[10px] font-bold text-amber-700 block uppercase font-sans">1. Variação Térmica (ΔT)</span>
              <div className="text-sm font-bold text-amber-950 mt-1">89,6 °C - 23,2 °C = +66,4 °C</div>
            </div>

            <div className="p-3 bg-blue-50/60 rounded-lg border border-blue-200 text-center font-mono">
              <span className="text-[10px] font-bold text-blue-700 block uppercase font-sans">2. Produto Massa × ΔT</span>
              <div className="text-sm font-bold text-blue-950 mt-1">44,7 g × 66,4 °C = 2.968,08 g·°C</div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
            <VisualFraction
              prefix={<span className="text-amber-800 font-bold">c =</span>}
              numerator="2.110 J (energia fornecida)"
              denominator="44,7 g × 66,4 °C"
              highlightNumerator
              highlightDenominator
              suffix={<span className="text-slate-500">=</span>}
            />
            <div className="mt-2">
              <VisualFraction
                numerator="2.110 J"
                denominator="2.968,08 g·°C"
                suffix={
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 ml-2">
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    0,711 J/(g·°C)
                  </span>
                }
              />
            </div>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 11 ==================== */
function VisualExercise11() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Balanço Térmico no Calorímetro: Metal ➔ Água" badge="q_cedido + q_absorvido = 0" colorTheme="amber">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Lado Água */}
            <div className="p-3 bg-cyan-50/70 border border-cyan-200 rounded-lg space-y-1 font-mono">
              <span className="text-[11px] font-bold text-cyan-800 uppercase block font-sans">1. Calor Absorvido pela Água</span>
              <div className="text-xs text-slate-600">q_água = m_a × c_a × (T_e - T_i,a)</div>
              <div className="text-xs text-slate-800">100 g × 4,18 J/(g·°C) × (24,6 - 22,0) °C</div>
              <div className="text-xs text-slate-800">100 × 4,18 × 2,6 °C</div>
              <div className="text-sm font-bold text-cyan-950 pt-1 border-t border-cyan-100">= +1.086,8 J (absorvidos)</div>
            </div>

            {/* Lado Metal */}
            <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-lg space-y-1 font-mono">
              <span className="text-[11px] font-bold text-amber-800 uppercase block font-sans">2. Calor Cedido pelo Metal</span>
              <div className="text-xs text-slate-600">q_cedido = 1.086,8 J</div>
              <div className="text-xs text-slate-800">q_metal = -1.086,8 J</div>
              <div className="text-xs text-slate-800">ΔT_metal = 24,6 - 80,0 = -55,4 °C</div>
              <div className="text-sm font-bold text-amber-950 pt-1 border-t border-amber-100">Esfriamento: -55,4 °C</div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-slate-600 font-sans mb-1">Cálculo do Calor Específico do Metal:</span>
            <VisualFraction
              prefix={<span className="text-amber-800 font-bold">c_metal =</span>}
              numerator="1.086,8 J"
              denominator="70,0 g × 55,4 °C"
              highlightNumerator
              highlightDenominator
              suffix={
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  0,280 J/(g·°C)
                </span>
              }
            />
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 12 ==================== */
function VisualExercise12() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Cancelamento Matemático do Dobro de Escala" badge="Propriedade Intensiva" colorTheme="indigo">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="text-xs font-bold text-blue-700 block uppercase">Ensaio 1 (Original)</span>
              <div className="font-mono text-xs text-slate-600 mt-1">50 mL + 50 mL = 100 mL (m)</div>
              <div className="font-mono text-xs text-slate-600">Calor liberado = q</div>
              <div className="font-mono font-bold text-blue-900 text-sm mt-1">ΔT₁ = q / (m · c) = 6,9 °C</div>
            </div>

            <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg">
              <span className="text-xs font-bold text-indigo-700 block uppercase">Ensaio 2 (Volumes Dobrados)</span>
              <div className="font-mono text-xs text-slate-600 mt-1">100 mL + 100 mL = 200 mL (2m)</div>
              <div className="font-mono text-xs text-slate-600">Calor liberado = 2q (mols dobrados)</div>
              <div className="font-mono font-bold text-indigo-900 text-sm mt-1">ΔT₂ = 2q / (2m · c)</div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center font-mono">
            <VisualFraction
              prefix={<span className="text-slate-800 font-bold text-sm">ΔT₂ =</span>}
              numerator={<span><span className="text-red-600 font-bold line-through">2</span> × q₁</span>}
              denominator={<span><span className="text-red-600 font-bold line-through">2</span> × m₁ × c</span>}
              suffix={
                <span className="inline-flex items-center gap-2 font-bold text-emerald-800 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 ml-2">
                  <span>= ΔT₁ =</span>
                  <span>6,9 °C</span>
                </span>
              }
            />
          </div>

          <div className="text-center font-mono text-xs text-slate-600">
            Temperatura final: 22,0 °C + 6,9 °C = <strong className="text-slate-900 font-bold">28,9 °C</strong>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 13 ==================== */
function VisualExercise13() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Proporcionalidade Estequiométrica da Combustão" badge="Q = n × |ΔHc°|" colorTheme="amber">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="flex items-center justify-center gap-3 font-mono flex-wrap">
            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-amber-700 block font-sans">Mols Queimados</span>
              <div className="text-sm font-bold text-amber-900">4,00 mol</div>
            </div>

            <span className="text-slate-400 font-bold">×</span>

            <div className="p-2.5 bg-orange-50 border border-orange-200 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-orange-700 block font-sans">Entalpia de Combustão</span>
              <div className="text-sm font-bold text-orange-900">1.301,1 kJ/mol</div>
            </div>

            <span className="text-slate-400 font-bold">=</span>

            <div className="p-2.5 bg-emerald-50 border border-emerald-300 rounded-lg text-center">
              <span className="text-[10px] uppercase font-bold text-emerald-800 block font-sans">Calor Produzido</span>
              <div className="text-sm font-bold text-emerald-950">5.204,4 kJ</div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 text-center font-mono">
            Variação termodinâmica de entalpia: <strong className="text-slate-900">ΔH = -5.204,4 kJ</strong> (processo exotérmico).
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 14 ==================== */
function VisualExercise14() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Calibração da Bomba Calorimétrica (Combustão do Carbono)" badge="C_cal = q / ΔT" colorTheme="amber">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg font-mono text-center">
              <span className="text-[10px] font-bold text-amber-700 block uppercase font-sans">1. Mols de Carbono Queimado</span>
              <VisualFraction numerator="0,562 g" denominator="12,011 g/mol" />
              <div className="text-xs font-bold text-amber-900 mt-1">= 0,04679 mol</div>
            </div>

            <div className="p-3 bg-blue-50/60 border border-blue-200 rounded-lg font-mono text-center">
              <span className="text-[10px] font-bold text-blue-700 block uppercase font-sans">2. Calor Liberado na Queima</span>
              <div className="text-xs text-slate-700 mt-1">0,04679 mol × 393,5 kJ/mol</div>
              <div className="text-xs font-bold text-blue-900 mt-1">= 18,412 kJ (18.412 J)</div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-col items-center justify-center">
            <div className="text-xs text-slate-600 font-mono mb-2">
              ΔT = 27,93 °C - 26,74 °C = <strong className="text-slate-900">1,19 °C</strong>
            </div>
            <VisualFraction
              prefix={<span className="text-amber-800 font-bold">C_cal =</span>}
              numerator="18,412 kJ"
              denominator="1,19 °C"
              highlightNumerator
              highlightDenominator
              suffix={
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 text-sm bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 ml-2">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  15,47 kJ/°C
                </span>
              }
            />
            <div className="text-[11px] text-slate-500 mt-2 font-mono">
              Equivalente a <strong className="text-slate-800">15.472 J/°C</strong> (ou 15,47 kJ/K)
            </div>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}

/* ==================== EXERCÍCIO 15 ==================== */
function VisualExercise15() {
  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <StepFlowCard title="Demonstração Algébrica Visual pela Lei de Hess" badge="ΔH = ΔH₁ + 2·(-ΔH₂)" colorTheme="emerald">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
          {/* Equação 1 */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-blue-700">1) Manter Combustão da Glicose (×1):</span>
              <span className="font-mono text-red-700 font-bold">ΔH₁ = -2.840 kJ</span>
            </div>
            <div className="font-mono text-xs text-slate-800 bg-white p-2 rounded border border-slate-200">
              C₆H₁₂O₆(s) + <span className="bg-amber-100 text-amber-900 px-1 rounded line-through">6 O₂(g)</span> ➔{' '}
              <span className="bg-purple-100 text-purple-900 px-1 rounded">6 CO₂(g)</span> +{' '}
              <span className="bg-cyan-100 text-cyan-900 px-1 rounded line-through">6 H₂O(l)</span>
            </div>
          </div>

          {/* Equação 2 Invertida e Dobrada */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-indigo-700">2) Inverter e Dobrar Combustão do Etanol [× (-2)]:</span>
              <span className="font-mono text-emerald-700 font-bold">ΔH₂' = +2.700 kJ</span>
            </div>
            <div className="font-mono text-xs text-slate-800 bg-white p-2 rounded border border-slate-200">
              <span className="bg-purple-100 text-purple-900 px-1 rounded">4 CO₂(g)</span> +{' '}
              <span className="bg-cyan-100 text-cyan-900 px-1 rounded line-through">6 H₂O(l)</span> ➔{' '}
              <strong className="text-blue-800">2 C₂H₅OH(l)</strong> +{' '}
              <span className="bg-amber-100 text-amber-900 px-1 rounded line-through">6 O₂(g)</span>
            </div>
          </div>

          {/* Soma Final com Cancelamentos */}
          <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-300 space-y-2">
            <span className="text-xs font-bold text-emerald-900 uppercase block tracking-wider">
              3) Equação Global Somada & Cancelamentos:
            </span>
            <div className="text-xs text-slate-600 font-sans">
              • 6 O₂(g) nos reagentes cancelam com 6 O₂(g) nos produtos.<br />
              • 6 H₂O(l) nos reagentes cancelam com 6 H₂O(l) nos produtos.<br />
              • 4 CO₂(g) nos reagentes simplificam com 6 CO₂(g) nos produtos ➔ restam <strong className="font-mono text-emerald-900">2 CO₂(g)</strong>.
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-emerald-300 font-mono font-bold text-emerald-950 text-sm text-center">
              C₆H₁₂O₆(s) ➔ 2 C₂H₅OH(l) + 2 CO₂(g)
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-emerald-200 font-mono text-xs">
              <span className="text-slate-700 font-sans">ΔH = -2.840 kJ + 2.700 kJ:</span>
              <span className="font-bold text-emerald-900 text-sm">ΔH = -140 kJ</span>
              <span className="bg-emerald-600 text-white font-bold px-2.5 py-1 rounded-md text-xs shadow-2xs">
                x = 140 kJ/mol
              </span>
            </div>
          </div>
        </div>
      </StepFlowCard>
    </div>
  );
}
