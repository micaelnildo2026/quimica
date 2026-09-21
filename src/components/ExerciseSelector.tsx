import React from 'react';
import { Exercise } from '../types';
import { Search, FlaskConical, Flame, Check } from 'lucide-react';

interface ExerciseSelectorProps {
  exercises: Exercise[];
  activeExerciseId: number;
  onSelect: (id: number) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({
  exercises,
  activeExerciseId,
  onSelect,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-2xs space-y-4" id="exercise-selector">
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Buscar por fórmula, termo ou número (ex: Hess, diluição, 15, molaridade)..."
          className="w-full text-xs sm:text-sm pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-slate-800 placeholder-slate-400"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200/70 hover:bg-slate-300 w-5 h-5 rounded-full flex items-center justify-center font-bold"
          >
            ×
          </button>
        )}
      </div>

      {/* Numerical Quick Grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Navegação Direta (1 a 15)
          </span>
          <span className="text-[11px] text-slate-400">
            {exercises.length} disponíveis
          </span>
        </div>

        <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-15 gap-1.5">
          {exercises.map((ex) => {
            const isSelected = activeExerciseId === ex.id;
            const isSolutions = ex.category === 'solucoes';

            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => onSelect(ex.id)}
                className={`relative group flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold font-mono transition-all ${
                  isSelected
                    ? isSolutions
                      ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-400 ring-offset-1 scale-105 z-10'
                      : 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400 ring-offset-1 scale-105 z-10'
                    : isSolutions
                    ? 'bg-blue-50 text-blue-800 border border-blue-200/80 hover:bg-blue-100 hover:border-blue-300'
                    : 'bg-amber-50 text-amber-800 border border-amber-200/80 hover:bg-amber-100 hover:border-amber-300'
                }`}
                title={`Exercício ${ex.number}: ${ex.title}`}
              >
                <span>#{ex.number}</span>
                <span className="text-[9px] opacity-75 font-sans font-normal mt-0.5 truncate max-w-full">
                  {isSolutions ? 'Sol' : 'Term'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
