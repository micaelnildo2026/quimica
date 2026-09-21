import React from 'react';
import { Exercise } from '../types';
import { ArrowRight, CheckCircle2, FlaskConical, Flame } from 'lucide-react';

interface QuickAnswersTableProps {
  exercises: Exercise[];
  onSelectExercise: (id: number) => void;
  activeExerciseId?: number;
}

export const QuickAnswersTable: React.FC<QuickAnswersTableProps> = ({
  exercises,
  onSelectExercise,
  activeExerciseId,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs" id="quick-answers-table">
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Gabarito Rápido e Matriz de Respostas (1 a 15)</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Visualize as respostas finais de todas as 15 questões ou clique em qualquer linha para abrir a resolução completa passo a passo.
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
            1-9: Soluções
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
            10-15: Termoquímica
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100/80 text-slate-700 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
              <th className="py-3 px-4 w-14 text-center">Nº</th>
              <th className="py-3 px-4">Tema / Enunciado Resumido</th>
              <th className="py-3 px-4 w-36">Área</th>
              <th className="py-3 px-4 font-bold text-slate-900">Resposta Final</th>
              <th className="py-3 px-4 w-28 text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {exercises.map((ex) => {
              const isSelected = activeExerciseId === ex.id;
              const isSolutions = ex.category === 'solucoes';

              return (
                <tr
                  key={ex.id}
                  onClick={() => onSelectExercise(ex.id)}
                  className={`cursor-pointer transition-colors hover:bg-slate-50 ${
                    isSelected ? 'bg-blue-50/70 font-medium' : ''
                  }`}
                >
                  <td className="py-3 px-4 text-center font-mono font-bold text-slate-800">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold ${
                        isSolutions
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {ex.number}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-800 text-sm">{ex.title}</div>
                    <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {ex.statement}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        isSolutions
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {isSolutions ? (
                        <FlaskConical className="w-3 h-3" />
                      ) : (
                        <Flame className="w-3 h-3" />
                      )}
                      {isSolutions ? 'Soluções' : 'Termoquímica'}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block font-mono font-semibold text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-xs border border-slate-200">
                      {ex.directAnswer}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold px-2 py-1 rounded hover:bg-blue-100/50 transition-colors"
                    >
                      <span>Ver Passos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
