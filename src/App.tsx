import React, { useState, useMemo } from 'react';
import { EXERCISES } from './data/exercisesData';
import { Category, Exercise } from './types';
import { Header } from './components/Header';
import { ExerciseSelector } from './components/ExerciseSelector';
import { ExerciseDetail } from './components/ExerciseDetail';
import { QuickAnswersTable } from './components/QuickAnswersTable';
import {
  FlaskConical,
  Flame,
  CheckCircle2,
  BookOpen,
  Calculator,
  Search,
  ArrowUp,
  FileQuestion,
  HelpCircle,
} from 'lucide-react';

export default function App() {
  const [activeExerciseId, setActiveExerciseId] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<'all' | Category>('all');
  const [viewMode, setViewMode] = useState<'focus' | 'table' | 'all'>('focus');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter exercises based on category and search query
  const filteredExercises = useMemo(() => {
    return EXERCISES.filter((ex) => {
      const matchCategory =
        categoryFilter === 'all' || ex.category === categoryFilter;

      if (!matchCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const numMatch = ex.number.toString() === q || `#${ex.number}` === q;
      const titleMatch = ex.title.toLowerCase().includes(q);
      const statementMatch = ex.statement.toLowerCase().includes(q);
      const answerMatch = ex.directAnswer.toLowerCase().includes(q);
      const formulaMatch = ex.formulas.some((f) => f.toLowerCase().includes(q));

      return numMatch || titleMatch || statementMatch || answerMatch || formulaMatch;
    });
  }, [categoryFilter, searchQuery]);

  const activeExercise = useMemo(() => {
    return (
      EXERCISES.find((ex) => ex.id === activeExerciseId) || EXERCISES[0]
    );
  }, [activeExerciseId]);

  const handleSelectExercise = (id: number) => {
    setActiveExerciseId(id);
    if (viewMode === 'table') {
      setViewMode('focus');
    }
    // Scroll smoothly to the exercise top if on mobile or in continuous mode
    const el = document.getElementById(`exercise-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Header bar */}
      <Header
        activeCategory={categoryFilter}
        onSelectCategory={setCategoryFilter}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
        onPrint={handlePrint}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Numerical grid and search selector */}
        <ExerciseSelector
          exercises={EXERCISES}
          activeExerciseId={activeExerciseId}
          onSelect={handleSelectExercise}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Informational banner when searching */}
        {searchQuery && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between">
            <span>
              Exibindo <strong>{filteredExercises.length}</strong> de 15 exercícios correspondentes a &ldquo;{searchQuery}&rdquo;
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-blue-700 font-semibold underline hover:text-blue-900"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* View Mode: Quick Answers Table */}
        {viewMode === 'table' && (
          <QuickAnswersTable
            exercises={filteredExercises}
            onSelectExercise={handleSelectExercise}
            activeExerciseId={activeExerciseId}
          />
        )}

        {/* View Mode: Focus Single Exercise */}
        {viewMode === 'focus' && (
          <div className="space-y-6">
            <ExerciseDetail
              exercise={activeExercise}
              totalExercises={EXERCISES.length}
              onNavigate={handleSelectExercise}
            />
          </div>
        )}

        {/* View Mode: Continuous Scroll / All Exercises */}
        {viewMode === 'all' && (
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
              <h2 className="text-base font-bold text-slate-900">
                Lista Completa dos 15 Exercícios com Resolução Passo a Passo
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Visualização contínua ideal para estudo sequencial e impressão completa.
              </p>
            </div>

            {filteredExercises.map((ex) => (
              <ExerciseDetail
                key={ex.id}
                exercise={ex}
                totalExercises={EXERCISES.length}
                onNavigate={handleSelectExercise}
              />
            ))}

            {filteredExercises.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
                <FileQuestion className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-base font-semibold text-slate-800">
                  Nenhum exercício encontrado
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tente alterar ou limpar o termo de pesquisa.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCategoryFilter('all');
                  }}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700"
                >
                  Ver todos os exercícios
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bottom Floating Scroll to Top button */}
        <div className="fixed bottom-6 right-6 z-20">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 font-medium">
            <span>Química Geral & Físico-Química</span>
            <span>•</span>
            <span>Soluções, Diluição, Misturas & Titulações (1-9)</span>
            <span>•</span>
            <span>Calorimetria, Capacidade Térmica & Lei de Hess (10-15)</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Resoluções detalhadas com rigor matemático, algarismos significativos e fórmulas padronizadas pela IUPAC.
          </p>
        </div>
      </footer>
    </div>
  );
}
