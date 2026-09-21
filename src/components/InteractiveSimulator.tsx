import React, { useState } from 'react';
import { ExerciseSimulation } from '../types';
import { Sliders, RotateCcw, CheckCircle2 } from 'lucide-react';

interface InteractiveSimulatorProps {
  simulation: ExerciseSimulation;
  exerciseNumber: number;
}

export const InteractiveSimulator: React.FC<InteractiveSimulatorProps> = ({
  simulation,
  exerciseNumber,
}) => {
  // Initialize state from defaultValues
  const [values, setValues] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    simulation.fields.forEach((field) => {
      initial[field.id] = field.defaultValue;
    });
    return initial;
  });

  const handleReset = () => {
    const resetVals: Record<string, number> = {};
    simulation.fields.forEach((field) => {
      resetVals[field.id] = field.defaultValue;
    });
    setValues(resetVals);
  };

  const handleChange = (id: string, val: number) => {
    setValues((prev) => ({
      ...prev,
      [id]: val,
    }));
  };

  const calculated = simulation.calculate(values);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-4" id={`sim-ex-${exerciseNumber}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-blue-100 text-blue-700 rounded-lg">
            <Sliders className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 tracking-tight">
              Simulador Dinâmico com Recálculo Imediato
            </h4>
            <p className="text-xs text-slate-500">
              Altere os parâmetros do exercício para verificar como as variáveis e resultados se comportam
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-2.5 py-1.5 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
          title="Restaurar valores padrão do enunciado"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restaurar Enunciado</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {/* Sliders and inputs */}
        <div className="space-y-4">
          <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
            Parâmetros de Entrada
          </span>
          {simulation.fields.map((field) => (
            <div key={field.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
              <div className="flex justify-between items-center mb-1.5">
                <label
                  htmlFor={`input-${exerciseNumber}-${field.id}`}
                  className="text-xs font-medium text-slate-700"
                >
                  {field.label}
                </label>
                <div className="flex items-center gap-1">
                  <input
                    id={`input-${exerciseNumber}-${field.id}`}
                    type="number"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={values[field.id] ?? field.defaultValue}
                    onChange={(e) => handleChange(field.id, parseFloat(e.target.value) || 0)}
                    className="w-20 text-right text-xs font-semibold text-blue-900 bg-slate-50 border border-slate-300 rounded px-1.5 py-0.5 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                  />
                  <span className="text-xs text-slate-500 font-mono">{field.unit}</span>
                </div>
              </div>
              <input
                type="range"
                min={field.min}
                max={field.max}
                step={field.step}
                value={values[field.id] ?? field.defaultValue}
                onChange={(e) => handleChange(field.id, parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>{field.min} {field.unit}</span>
                <span>Padrão: {field.defaultValue} {field.unit}</span>
                <span>{field.max} {field.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Results output */}
        <div className="flex flex-col justify-between bg-white p-4 rounded-lg border border-blue-200 shadow-2xs">
          <div>
            <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider block mb-2">
              Resultados Calculados em Tempo Real
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
              {calculated.results.map((res, idx) => (
                <div key={idx} className="bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
                  <span className="text-[11px] text-slate-600 block">{res.label}</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-base font-bold text-blue-950 font-mono tracking-tight">
                      {res.value}
                    </span>
                    <span className="text-xs text-blue-800 font-medium">{res.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">{calculated.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
