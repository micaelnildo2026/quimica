export type Category = 'solucoes' | 'termoquimica';

export interface GivenDataItem {
  label: string;
  value: string;
  symbol?: string;
}

export interface StepDetail {
  stepNumber: number;
  title: string;
  formula?: string;
  calculation: string;
  result: string;
  explanation: string;
}

export interface SimulationField {
  id: string;
  label: string;
  unit: string;
  defaultValue: number;
  min: number;
  max: number;
  step: number;
}

export interface ExerciseSimulation {
  fields: SimulationField[];
  calculate: (values: Record<string, number>) => {
    results: { label: string; value: string; unit: string }[];
    explanation: string;
  };
}

export interface SubQuestion {
  letter: string;
  label: string;
  formula?: string;
  calculation: string;
  result: string;
}

export interface Exercise {
  id: number;
  number: number;
  title: string;
  category: Category;
  categoryLabel: string;
  statement: string;
  directAnswer: string;
  givenData: GivenDataItem[];
  formulas: string[];
  subQuestions?: SubQuestion[];
  steps: StepDetail[];
  finalAnswerText: string;
  theoreticalTip: string;
  simulation?: ExerciseSimulation;
}
