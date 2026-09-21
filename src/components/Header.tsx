import React from 'react';
import { FlaskConical, Flame, BookOpen, Printer, Sparkles } from 'lucide-react';
import { Category } from '../types';

interface HeaderProps {
  activeCategory: 'all' | Category;
  onSelectCategory: (cat: 'all' | Category) => void;
  viewMode: 'focus' | 'table' | 'all';
  onSelectViewMode: (mode: 'focus' | 'table' | 'all') => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  viewMode,
  onSelectViewMode,
  onPrint,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Resolução de Química: Soluções & Termoquímica
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  15/15 Resolvidos
                </span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1">
                Gabarito completo, resoluções passo a passo, fórmulas fundamentais e simulador interativo.
              </p>
            </div>
          </div>

          {/* Action buttons & View mode toggles */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode segmented control */}
            <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200 text-xs font-medium">
              <button
                type="button"
                onClick={() => onSelectViewMode('focus')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'focus'
                    ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Foco no Exercício
              </button>
              <button
                type="button"
                onClick={() => onSelectViewMode('table')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'table'
                    ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gabarito Rápido (1 a 15)
              </button>
              <button
                type="button"
                onClick={() => onSelectViewMode('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'all'
                    ? 'bg-white text-blue-700 shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ver Todos em Lista
              </button>
            </div>

            {/* Print button */}
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 px-3 py-1.5 rounded-xl transition-colors shadow-2xs"
              title="Imprimir ou Salvar em PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-100 overflow-x-auto no-scrollbar">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap mr-1">
            Filtrar:
          </span>
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Todos os 15 Exercícios
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory('solucoes')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'solucoes'
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
            }`}
          >
            <FlaskConical className="w-3 h-3" />
            <span>Soluções & Concentrações (1 a 9)</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectCategory('termoquimica')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              activeCategory === 'termoquimica'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Flame className="w-3 h-3" />
            <span>Calorimetria & Termoquímica (10 a 15)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
