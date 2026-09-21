import React from 'react';
import { ArrowRight, Equal, Divide, X, Plus, Minus } from 'lucide-react';

interface FractionCardProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  highlightNumerator?: boolean;
  highlightDenominator?: boolean;
  className?: string;
}

export const VisualFraction: React.FC<FractionCardProps> = ({
  numerator,
  denominator,
  prefix,
  suffix,
  highlightNumerator = false,
  highlightDenominator = false,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-2 font-mono ${className}`}>
      {prefix && <span className="text-slate-700 font-semibold text-xs sm:text-sm">{prefix}</span>}
      <div className="inline-flex flex-col items-center justify-center mx-1">
        <div
          className={`px-2 py-0.5 text-center text-xs sm:text-sm font-semibold rounded ${
            highlightNumerator ? 'bg-blue-100 text-blue-900 font-bold' : 'text-slate-800'
          }`}
        >
          {numerator}
        </div>
        <div className="w-full h-0.5 bg-slate-400 my-0.5 rounded-full" />
        <div
          className={`px-2 py-0.5 text-center text-xs sm:text-sm font-semibold rounded ${
            highlightDenominator ? 'bg-indigo-100 text-indigo-900 font-bold' : 'text-slate-800'
          }`}
        >
          {denominator}
        </div>
      </div>
      {suffix && <span className="text-slate-700 font-semibold text-xs sm:text-sm">{suffix}</span>}
    </div>
  );
};

interface StepFlowCardProps {
  title?: string;
  badge?: string;
  children: React.ReactNode;
  resultNode?: React.ReactNode;
  colorTheme?: 'blue' | 'indigo' | 'emerald' | 'amber';
}

export const StepFlowCard: React.FC<StepFlowCardProps> = ({
  title,
  badge,
  children,
  resultNode,
  colorTheme = 'blue',
}) => {
  const themeStyles = {
    blue: 'border-blue-200 bg-blue-50/40',
    indigo: 'border-indigo-200 bg-indigo-50/40',
    emerald: 'border-emerald-200 bg-emerald-50/40',
    amber: 'border-amber-200 bg-amber-50/40',
  };

  return (
    <div className={`border rounded-xl p-4 sm:p-5 shadow-2xs space-y-3 transition-all ${themeStyles[colorTheme]}`}>
      {(title || badge) && (
        <div className="flex items-center justify-between gap-2 border-b border-slate-200/80 pb-2.5">
          {title && <h5 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">{title}</h5>}
          {badge && (
            <span className="px-2 py-0.5 text-[11px] font-mono font-bold rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
              {badge}
            </span>
          )}
        </div>
      )}

      <div className="py-1">{children}</div>

      {resultNode && (
        <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-end gap-2 text-xs sm:text-sm font-mono">
          <span className="text-slate-500 font-sans font-medium text-xs">Resultado:</span>
          <div className="px-3 py-1 bg-emerald-600 text-white font-bold rounded-lg shadow-2xs">
            {resultNode}
          </div>
        </div>
      )}
    </div>
  );
};
