import React from 'react';
import {
  FlaskConical,
  Flame,
  Droplets,
  Scale,
  Thermometer,
  Percent,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Shuffle,
  Gauge,
  Activity,
  Layers,
} from 'lucide-react';

interface ChemistryVisualProps {
  exerciseId: number;
}

export const ChemistryVisual: React.FC<ChemistryVisualProps> = ({ exerciseId }) => {
  switch (exerciseId) {
    case 1:
      return <VisualHydratedSalt />;
    case 2:
      return <VisualK2CrO4Solution />;
    case 3:
      return <VisualCalciumMilk />;
    case 4:
      return <VisualDilutionBeakers />;
    case 5:
      return <VisualEvaporationBeaker />;
    case 6:
      return <VisualGasDissolution />;
    case 7:
      return <VisualDensityMassFlow />;
    case 8:
      return <VisualTernaryPie />;
    case 9:
      return <VisualCompleteSolutionMap />;
    case 10:
      return <VisualCalorimetryHeating />;
    case 11:
      return <VisualCalorimeterWaterMetal />;
    case 12:
      return <VisualNeutralizationScale />;
    case 13:
      return <VisualAcetyleneCombustion />;
    case 14:
      return <VisualBombCalorimeter />;
    case 15:
      return <VisualHessEnergyDiagram />;
    default:
      return null;
  }
};

/* ==================== 1: SAL HIDRATADO (CuSO4·5H2O) ==================== */
function VisualHydratedSalt() {
  return (
    <div className="bg-gradient-to-br from-blue-900/5 via-indigo-900/5 to-cyan-900/5 border border-blue-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 text-white rounded-xl shadow-xs">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Sal Hidratado e Partição da Massa Molar
            </h4>
            <span className="text-xs text-slate-500">
              Visualização molecular de CuSO₄ · 5 H₂O (Massa pesada no frasco com água de rede cristalina)
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-mono font-bold">
          M = 7,62 mol/L
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Cristal Hidratado */}
        <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 text-white shadow-md mx-auto relative group">
            <FlaskConical className="w-8 h-8" />
            <span className="absolute -top-1.5 -right-1.5 px-1.5 py-0.5 bg-cyan-400 text-slate-900 font-mono text-[10px] font-bold rounded-full">
              ·5H₂O
            </span>
          </div>
          <div className="font-bold text-slate-800 text-sm">Frasco de Soluto Pesado</div>
          <div className="text-xs font-mono text-blue-700 font-semibold">2.760 g de cristais azuis</div>
          <p className="text-[11px] text-slate-500">
            Cada 1 mol do sal arrasta 5 mols de água presa na rede de cristais.
          </p>
        </div>

        {/* Partição da Massa Molar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center">
            Composição Percentual da Massa Molar
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-blue-700 font-semibold">CuSO₄ (Anidro):</span>
              <span className="font-bold text-slate-800">159,61 g/mol (63,9%)</span>
            </div>
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
              <div className="bg-blue-600 h-full w-[63.9%]" title="CuSO4 anidro" />
              <div className="bg-cyan-400 h-full w-[36.1%]" title="5 H2O hidratada" />
            </div>
            <div className="flex justify-between text-xs font-mono">
              <span className="text-cyan-700 font-semibold">5 H₂O de cristalização:</span>
              <span className="font-bold text-slate-800">90,08 g/mol (36,1%)</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-500 text-center font-mono border-t border-slate-100 pt-1.5">
            MM Total = <strong>249,69 g/mol</strong>
          </div>
        </div>

        {/* Balão de Solução */}
        <div className="bg-white p-4 rounded-xl border border-blue-200 shadow-2xs text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-2xs mx-auto">
            <Droplets className="w-8 h-8" />
          </div>
          <div className="font-bold text-slate-800 text-sm">Solução Líquida Final</div>
          <div className="text-xs font-mono text-indigo-700 font-semibold">Volume = 1,45 Litros</div>
          <div className="p-2 bg-emerald-50 text-emerald-900 rounded-lg font-mono font-bold text-xs border border-emerald-200">
            11,054 mol ÷ 1,45 L = 7,62 M
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 2: K2CrO4 (Mols e Massa) ==================== */
function VisualK2CrO4Solution() {
  return (
    <div className="bg-gradient-to-br from-amber-900/5 via-yellow-900/5 to-orange-900/5 border border-amber-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-500 text-white rounded-xl shadow-xs">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Cálculo de Massa a Partir de Concentração Molar
            </h4>
            <span className="text-xs text-slate-500">
              Solução aquosa amarela de Cromato de Potássio (K₂CrO₄)
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-mono font-bold">
          m = 5,510 g
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-amber-200 text-center space-y-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Volume Líquido</span>
          <div className="text-2xl font-mono font-bold text-amber-900">250,0 mL</div>
          <div className="text-xs text-slate-500 font-mono">0,2500 Litros</div>
          <div className="h-2 w-full bg-amber-100 rounded-full overflow-hidden">
            <div className="h-full bg-amber-400 w-1/4" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-amber-200 text-center space-y-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Mols Dissolvidos</span>
          <div className="text-2xl font-mono font-bold text-blue-900">0,02838 mol</div>
          <div className="text-xs text-slate-500 font-mono">n = 0,1135 M × 0,2500 L</div>
          <div className="text-[11px] text-blue-600 font-mono">2,838 × 10⁻² mol</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 text-center space-y-2">
          <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Massa na Balança</span>
          <div className="text-2xl font-mono font-bold text-emerald-950">5,510 g</div>
          <div className="text-xs text-slate-600 font-mono">m = n × 194,20 g/mol</div>
          <div className="text-[11px] text-emerald-700 font-semibold">Precisão: 4 algarismos sign.</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 3: CÁLCIO NO LEITE ==================== */
function VisualCalciumMilk() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 text-white rounded-xl shadow-xs">
            <Droplets className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Concentração Bioquímica de Ca²⁺ no Leite
            </h4>
            <span className="text-xs text-slate-500">
              Relação entre massa de mineral (1,0 g) e molaridade em 1,0 Litro
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-mono font-bold">
          [Ca²⁺] = 0,025 M
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1">
          <span className="text-xs text-slate-500 block font-semibold uppercase">1 Litro de Leite</span>
          <div className="text-2xl font-bold text-slate-800 font-mono">1.000 mL</div>
          <p className="text-[11px] text-slate-400">Volume padrão de consumo diário</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-200 text-center space-y-1">
          <span className="text-xs text-blue-600 block font-semibold uppercase">Teor Mineral</span>
          <div className="text-2xl font-bold text-blue-900 font-mono">1,0 g de Ca²⁺</div>
          <div className="text-xs font-mono text-slate-500">MM = 40,08 g/mol</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-300 text-center space-y-1 bg-emerald-50/50">
          <span className="text-xs text-emerald-700 block font-semibold uppercase">Molaridade</span>
          <div className="text-2xl font-bold text-emerald-950 font-mono">25 mmol/L</div>
          <div className="text-xs font-mono text-emerald-800">0,025 mol/L (2,5 × 10⁻² M)</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 4: DILUIÇÃO DE SACAROSE (Béqueres) ==================== */
function VisualDilutionBeakers() {
  return (
    <div className="bg-gradient-to-br from-indigo-900/5 via-blue-900/5 to-cyan-900/5 border border-indigo-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-xs">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual de Laboratório: Diluição de Solução Estoque
            </h4>
            <span className="text-xs text-slate-500">
              Conservação de mols: n₁ = n₂ ➔ M₁·V₁ = M₂·V₂
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-mono font-bold">
          V₁ = 1,89 mL
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Frasco Concentrado */}
        <div className="bg-white p-4 rounded-xl border border-indigo-200 shadow-2xs space-y-2 text-center">
          <div className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
            1. Pipetar da Solução Estoque
          </div>
          <div className="p-3 bg-indigo-50/80 rounded-lg border border-indigo-100 font-mono space-y-1">
            <div className="text-xs text-slate-600">Concentração M₁: <strong>0,33 M</strong></div>
            <div className="text-base font-bold text-indigo-950">Volume V₁ = 1,89 mL</div>
          </div>
          <p className="text-[11px] text-slate-500">
            Contém exatamente <strong>0,000625 mol</strong> de sacarose.
          </p>
        </div>

        {/* Adição de Água */}
        <div className="bg-white p-4 rounded-xl border border-cyan-200 shadow-2xs space-y-2 text-center">
          <div className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">
            2. Adicionar Água Destilada
          </div>
          <div className="p-3 bg-cyan-50/80 rounded-lg border border-cyan-100 font-mono space-y-1">
            <div className="text-xs text-slate-600">V_solvente = V₂ - V₁</div>
            <div className="text-base font-bold text-cyan-950">+ 23,11 mL de H₂O</div>
          </div>
          <p className="text-[11px] text-slate-500">
            Completar até a marca de 25 mL no balão volumétrico.
          </p>
        </div>

        {/* Solução Final Diluída */}
        <div className="bg-white p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 shadow-2xs space-y-2 text-center">
          <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
            3. Solução Diluída Desejada
          </div>
          <div className="p-3 bg-white rounded-lg border border-emerald-200 font-mono space-y-1">
            <div className="text-xs text-slate-600">Volume Total V₂: <strong>25,0 mL</strong></div>
            <div className="text-base font-bold text-emerald-950">M₂ = 0,025 M</div>
          </div>
          <p className="text-[11px] text-emerald-800 font-medium">
            Mesmos 0,000625 mol espalhados em maior volume!
          </p>
        </div>
      </div>
    </div>
  );
}

/* ==================== 5: EVAPORAÇÃO DE NaCl ==================== */
function VisualEvaporationBeaker() {
  return (
    <div className="bg-gradient-to-br from-amber-900/5 via-orange-900/5 to-slate-900/5 border border-amber-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-600 text-white rounded-xl shadow-xs">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Efeito da Evaporação na Concentração Molar
            </h4>
            <span className="text-xs text-slate-500">
              O vapor de água escapa, mas o sal (soluto não-volátil) permanece inalterado
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-mono font-bold">
          0,556 M ➔ 0,794 M
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Antes */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-700 uppercase">Antes da Evaporação</span>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">150 mL</span>
          </div>
          <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 font-mono text-xs space-y-1">
            <div>Concentração: <strong>0,556 mol/L</strong></div>
            <div>Mols de NaCl: <strong>0,0834 mol</strong></div>
          </div>
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-full" />
          </div>
        </div>

        {/* Depois */}
        <div className="bg-white p-4 rounded-xl border border-amber-300 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-800 uppercase">Após Evaporação (45 mL de H₂O saíram)</span>
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">105 mL</span>
          </div>
          <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-100 font-mono text-xs space-y-1">
            <div>Nova Concentração: <strong className="text-emerald-800">0,794 mol/L</strong></div>
            <div>Mols de NaCl mantidos: <strong>0,0834 mol</strong></div>
          </div>
          <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 6: DISSOLUÇÃO DE GÁS HCl ==================== */
function VisualGasDissolution() {
  return (
    <div className="bg-gradient-to-br from-blue-900/5 via-cyan-900/5 to-slate-900/5 border border-blue-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 text-white rounded-xl shadow-xs">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Ácido Clorídrico Concentrado Comercial
            </h4>
            <span className="text-xs text-slate-500">
              Dissolução de 868,8 g de cloreto de hidrogênio (gás) para formar 2,00 L de solução
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-blue-100 text-blue-800 rounded-lg text-xs font-mono font-bold">
          M = 11,9 M
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
          <span className="text-[10px] text-slate-500 uppercase font-bold font-sans block">Massa de Gás HCl</span>
          <div className="text-xl font-bold text-blue-900">868,8 g</div>
          <p className="text-[11px] text-slate-400 font-sans">Soluto puro borbulhado</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-blue-200 space-y-1">
          <span className="text-[10px] text-blue-600 uppercase font-bold font-sans block">Mols de HCl (MM = 36,46)</span>
          <div className="text-xl font-bold text-blue-950">23,828 mol</div>
          <p className="text-[11px] text-blue-500 font-sans">868,8 ÷ 36,461</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-emerald-300 bg-emerald-50/40 space-y-1">
          <span className="text-[10px] text-emerald-800 uppercase font-bold font-sans block">Molaridade em 2,00 L</span>
          <div className="text-xl font-bold text-emerald-950">11,91 mol/L</div>
          <p className="text-[11px] text-emerald-700 font-sans">23,828 ÷ 2,00 L = 11,9 M</p>
        </div>
      </div>
    </div>
  );
}

/* ==================== 7: DENSIDADE E TÍTULO ==================== */
function VisualDensityMassFlow() {
  return (
    <div className="bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-slate-900/5 border border-indigo-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-xs">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Extração do Soluto Puro por Densidade & Título
            </h4>
            <span className="text-xs text-slate-500">
              Como converter volume de frasco (45,0 cm³) em gramas de HCl ativo (37,21% em massa)
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-mono font-bold">
          19,9 g de HCl
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
        <div className="flex justify-between items-center text-xs font-mono">
          <span className="text-indigo-800 font-bold">HCl puro (37,21%): 19,93 g</span>
          <span className="text-slate-500">Água solvente (62,79%): 33,62 g</span>
        </div>
        <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
          <div className="bg-indigo-600 h-full w-[37.21%]" title="HCl ativo" />
          <div className="bg-slate-300 h-full w-[62.79%]" title="Água" />
        </div>
        <div className="flex items-center justify-between text-xs text-slate-600 font-mono pt-1">
          <span>Massa total da proveta: <strong>53,55 g</strong></span>
          <span className="text-emerald-700 font-bold">m = 45,0 × 1,19 × 0,3721 = 19,9 g</span>
        </div>
      </div>
    </div>
  );
}

/* ==================== 8: MISTURA TERNÁRIA (Pie Visual) ==================== */
function VisualTernaryPie() {
  return (
    <div className="bg-gradient-to-br from-blue-900/5 via-amber-900/5 to-cyan-900/5 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-800 text-white rounded-xl shadow-xs">
            <Percent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Comparação Visual: Fração em Massa (%) vs. Fração Molar (X)
            </h4>
            <span className="text-xs text-slate-500">
              Note como a fração molar do Metanol cresce porque sua molécula é mais leve (32 vs 46 g/mol)
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-mono font-bold">
          ∑X = 1,000
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Fração em Massa */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
          <span className="text-xs font-bold text-slate-700 uppercase block">1. Porcentagem em Massa</span>
          <div className="w-full h-4 rounded-full overflow-hidden flex font-mono text-[10px] text-white font-bold">
            <div className="bg-blue-600 h-full w-[40%] flex items-center justify-center">40%</div>
            <div className="bg-amber-500 h-full w-[40%] flex items-center justify-center">40%</div>
            <div className="bg-cyan-500 h-full w-[20%] flex items-center justify-center">20%</div>
          </div>
          <div className="flex justify-between text-xs text-slate-600 font-mono">
            <span className="text-blue-700">Metanol: 40%</span>
            <span className="text-amber-700">Etanol: 40%</span>
            <span className="text-cyan-700">Água: 20%</span>
          </div>
        </div>

        {/* Fração Molar */}
        <div className="bg-white p-4 rounded-xl border border-emerald-300 space-y-2">
          <span className="text-xs font-bold text-emerald-800 uppercase block">2. Fração Molar (Nº de Moléculas)</span>
          <div className="w-full h-4 rounded-full overflow-hidden flex font-mono text-[10px] text-white font-bold">
            <div className="bg-blue-600 h-full w-[38.7%] flex items-center justify-center">38,7%</div>
            <div className="bg-amber-500 h-full w-[26.9%] flex items-center justify-center">26,9%</div>
            <div className="bg-cyan-500 h-full w-[34.4%] flex items-center justify-center">34,4%</div>
          </div>
          <div className="flex justify-between text-xs text-slate-600 font-mono">
            <span className="text-blue-700">X₁ = 0,387</span>
            <span className="text-amber-700">X₂ = 0,269</span>
            <span className="text-cyan-700">X₃ = 0,344</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 9: MAPA COMPLETO DE SOLUÇÃO (HNO3) ==================== */
function VisualCompleteSolutionMap() {
  return (
    <div className="bg-gradient-to-br from-indigo-900/5 via-blue-900/5 to-emerald-900/5 border border-indigo-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-xs">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Mapa Conceitual de Todas as Concentrações (Solução de HNO₃)
            </h4>
            <span className="text-xs text-slate-500">
              Interconexão entre massa, volume, densidade, molaridade e molalidade
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-lg text-xs font-mono font-bold">
          8 Grandezas
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-[10px] text-slate-500 font-sans block uppercase font-bold">Volume Total</span>
          <div className="text-base font-bold text-slate-800 mt-1">200 mL</div>
          <span className="text-[11px] text-slate-400">0,200 L</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-blue-200 shadow-2xs">
          <span className="text-[10px] text-blue-600 font-sans block uppercase font-bold">Conc. Comum (C)</span>
          <div className="text-base font-bold text-blue-900 mt-1">250 g/L</div>
          <span className="text-[11px] text-blue-400">50 g ÷ 0,2 L</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-indigo-200 shadow-2xs">
          <span className="text-[10px] text-indigo-600 font-sans block uppercase font-bold">Molaridade (M)</span>
          <div className="text-base font-bold text-indigo-900 mt-1">3,97 mol/L</div>
          <span className="text-[11px] text-indigo-400">0,794 mol ÷ 0,2 L</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-purple-200 shadow-2xs">
          <span className="text-[10px] text-purple-600 font-sans block uppercase font-bold">Molalidade (W)</span>
          <div className="text-base font-bold text-purple-900 mt-1">3,17 mol/kg</div>
          <span className="text-[11px] text-purple-400">0,794 ÷ 0,250 kg</span>
        </div>
      </div>
    </div>
  );
}

/* ==================== 10: CALORIMETRIA SIMPLES (Aquecimento) ==================== */
function VisualCalorimetryHeating() {
  return (
    <div className="bg-gradient-to-br from-amber-900/5 via-orange-900/5 to-red-900/5 border border-amber-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-600 text-white rounded-xl shadow-xs">
            <Thermometer className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Aquecimento Térmico e Calor Específico
            </h4>
            <span className="text-xs text-slate-500">
              Relação fundamental: q = m · c · ΔT
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-mono font-bold">
          c = 0,711 J/(g·°C)
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-blue-700 font-semibold">T_inicial: 23,2 °C</span>
          <span className="text-amber-600 font-bold">Energia injetada: +2.110 Joules</span>
          <span className="text-red-700 font-semibold">T_final: 89,6 °C</span>
        </div>

        <div className="relative w-full h-5 bg-slate-100 rounded-full overflow-hidden flex items-center">
          <div className="h-full bg-gradient-to-r from-blue-400 via-amber-400 to-red-500 w-full" />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>Massa da amostra: <strong>44,7 g</strong></span>
          <span className="text-emerald-700 font-bold">ΔT = +66,4 °C</span>
          <span>c = 2110 ÷ (44,7 × 66,4) = <strong>0,711 J/g·°C</strong></span>
        </div>
      </div>
    </div>
  );
}

/* ==================== 11: TROCA DE CALOR NO CALORÍMETRO ==================== */
function VisualCalorimeterWaterMetal() {
  return (
    <div className="bg-gradient-to-br from-cyan-900/5 via-amber-900/5 to-slate-900/5 border border-cyan-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-cyan-600 text-white rounded-xl shadow-xs">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Equilíbrio Térmico Metal ➔ Água
            </h4>
            <span className="text-xs text-slate-500">
              Calorímetro isolado: todo calor que sai do metal quente é absorvido pela água fria
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 rounded-lg text-xs font-mono font-bold">
          q = 1.086,8 J
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
        {/* Metal Quente */}
        <div className="bg-white p-4 rounded-xl border border-amber-300 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-amber-800 font-sans uppercase">Peça Metálica (70,0 g)</span>
            <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">Resfria</span>
          </div>
          <div className="text-xs text-slate-600 space-y-1">
            <div>80,0 °C ➔ 24,6 °C</div>
            <div className="font-bold text-red-700">ΔT_m = -55,4 °C</div>
            <div>Calor cedido = <strong>1.086,8 J</strong></div>
            <div className="pt-1 text-emerald-800 font-bold border-t border-slate-100">
              c_metal = 0,280 J/(g·°C)
            </div>
          </div>
        </div>

        {/* Água Fria */}
        <div className="bg-white p-4 rounded-xl border border-cyan-300 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-cyan-800 font-sans uppercase">Água Líquida (100 g)</span>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Aquece</span>
          </div>
          <div className="text-xs text-slate-600 space-y-1">
            <div>22,0 °C ➔ 24,6 °C</div>
            <div className="font-bold text-blue-700">ΔT_a = +2,6 °C</div>
            <div>Calor absorvido = <strong>1.086,8 J</strong></div>
            <div className="pt-1 text-cyan-800 font-bold border-t border-slate-100">
              c_água = 4,18 J/(g·°C)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 12: ESCALA DE NEUTRALIZAÇÃO ==================== */
function VisualNeutralizationScale() {
  return (
    <div className="bg-gradient-to-br from-indigo-900/5 via-blue-900/5 to-slate-900/5 border border-indigo-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-600 text-white rounded-xl shadow-xs">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Por que o Dobro de Volume Gera o Mesmo Aumento de Temperatura?
            </h4>
            <span className="text-xs text-slate-500">
              O dobro de calor liberado é dividido pelo dobro da massa de água: os fatores cancelam!
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-mono font-bold">
          ΔT = 6,9 °C (Invariante)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center font-mono">
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
          <span className="text-xs font-bold text-slate-500 font-sans block uppercase">Ensaio 1 (50 + 50 mL)</span>
          <div className="text-lg font-bold text-blue-900">100 mL de solução</div>
          <div className="text-xs text-slate-500">Gera q Joules</div>
          <div className="text-sm font-bold text-emerald-700 pt-1">ΔT = 6,9 °C</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-indigo-300 space-y-1">
          <span className="text-xs font-bold text-indigo-700 font-sans block uppercase">Ensaio 2 (100 + 100 mL)</span>
          <div className="text-lg font-bold text-indigo-950">200 mL de solução (2× massa)</div>
          <div className="text-xs text-indigo-600">Gera 2q Joules (2× calor)</div>
          <div className="text-sm font-bold text-emerald-700 pt-1">ΔT = 2q ÷ (2m·c) = 6,9 °C</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 13: COMBUSTÃO DO ACETILENO ==================== */
function VisualAcetyleneCombustion() {
  return (
    <div className="bg-gradient-to-br from-amber-900/5 via-red-900/5 to-orange-900/5 border border-amber-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-600 text-white rounded-xl shadow-xs">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Liberação de Energia na Chama de Maçarico (Acetileno)
            </h4>
            <span className="text-xs text-slate-500">
              C₂H₂(g) + 5/2 O₂(g) ➔ 2 CO₂(g) + H₂O(l) + 1.301,1 kJ/mol
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-mono font-bold">
          Q = 5.204,4 kJ
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-around gap-4 font-mono text-center">
        <div>
          <span className="text-[10px] text-slate-500 uppercase font-bold font-sans block">1 Mol de C₂H₂</span>
          <div className="text-base font-bold text-slate-800">1.301,1 kJ</div>
        </div>
        <span className="text-xl text-slate-400">➔</span>
        <div>
          <span className="text-[10px] text-amber-600 uppercase font-bold font-sans block">Multiplicador</span>
          <div className="text-base font-bold text-amber-700">× 4,00 mols</div>
        </div>
        <span className="text-xl text-slate-400">➔</span>
        <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-300">
          <span className="text-[10px] text-emerald-800 uppercase font-bold font-sans block">Total Produzido</span>
          <div className="text-lg font-bold text-emerald-950">5.204,4 kJ</div>
        </div>
      </div>
    </div>
  );
}

/* ==================== 14: BOMBA CALORIMÉTRICA ==================== */
function VisualBombCalorimeter() {
  return (
    <div className="bg-gradient-to-br from-slate-900/5 via-amber-900/5 to-red-900/5 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-slate-800 text-white rounded-xl shadow-xs">
            <Gauge className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Esquema Visual: Calibração de Bomba Calorimétrica com Carbono
            </h4>
            <span className="text-xs text-slate-500">
              C_cal = q_combustão ÷ ΔT
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-lg text-xs font-mono font-bold">
          C_cal = 15,47 kJ/°C
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono">
        <div className="bg-white p-3 rounded-xl border border-slate-200">
          <span className="text-[10px] text-slate-500 uppercase font-sans font-bold block">Carbono Puro</span>
          <div className="text-base font-bold text-slate-800 mt-1">0,562 g</div>
          <span className="text-[11px] text-slate-400">0,04679 mol</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-amber-200">
          <span className="text-[10px] text-amber-600 uppercase font-sans font-bold block">Calor Liberado</span>
          <div className="text-base font-bold text-amber-900 mt-1">18,412 kJ</div>
          <span className="text-[11px] text-amber-500">n × 393,5 kJ/mol</span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-emerald-300 bg-emerald-50/50">
          <span className="text-[10px] text-emerald-800 uppercase font-sans font-bold block">Capacidade Térmica</span>
          <div className="text-base font-bold text-emerald-950 mt-1">15,47 kJ/°C</div>
          <span className="text-[11px] text-emerald-700">18,412 ÷ 1,19 °C</span>
        </div>
      </div>
    </div>
  );
}

/* ==================== 15: DIAGRAMA DE ENERGIA LEI DE HESS ==================== */
function VisualHessEnergyDiagram() {
  return (
    <div className="bg-gradient-to-br from-emerald-900/5 via-teal-900/5 to-cyan-900/5 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-xs">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Diagrama Visual de Entalpia: Fermentação da Glicose (Lei de Hess)
            </h4>
            <span className="text-xs text-slate-500">
              C₆H₁₂O₆(s) ➔ 2 C₂H₅OH(l) + 2 CO₂(g) + x kJ
            </span>
          </div>
        </div>
        <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-mono font-bold">
          x = 140 kJ
        </span>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-4">
        {/* Barra de Entalpia Comparativa */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-blue-800 font-bold">1) Respiração / Combustão Glicose:</span>
            <span className="text-slate-800 font-bold">2.840 kJ liberados</span>
          </div>
          <div className="w-full h-5 bg-slate-100 rounded-full overflow-hidden flex">
            <div className="bg-amber-500 h-full w-[95%]" title="Energia retida no etanol (2700 kJ)" />
            <div className="bg-emerald-600 h-full w-[5%]" title="Energia liberada na fermentação (140 kJ)" />
          </div>
          <div className="flex justify-between text-xs font-mono pt-1">
            <span className="text-amber-700">Retido no etanol (2 × 1.350 = 2.700 kJ - 95%)</span>
            <span className="text-emerald-800 font-bold">Liberado na fermentação: x = 140 kJ (5%)</span>
          </div>
        </div>

        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-xs font-mono flex items-center justify-between">
          <span>ΔH = -2.840 kJ + 2 × (+1.350 kJ) = <strong>-140 kJ</strong></span>
          <span className="text-emerald-900 font-bold">Valor escalar de x = 140 kJ/mol</span>
        </div>
      </div>
    </div>
  );
}
