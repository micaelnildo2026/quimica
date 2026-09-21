import { Exercise } from '../types';

export const EXERCISES: Exercise[] = [
  {
    id: 1,
    number: 1,
    title: 'Molaridade de Solução com Sal Hidratado (CuSO₄·5H₂O)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Determine a molaridade para a solução composta de 2,76 kg de CuSO₄·5H₂O em 1,45 L de solução.',
    directAnswer: '7,62 mol/L (ou M)',
    givenData: [
      { label: 'Massa do soluto (m)', value: '2,76 kg = 2.760 g', symbol: 'm' },
      { label: 'Volume da solução (V)', value: '1,45 L', symbol: 'V' },
      { label: 'Composto', value: 'Sulfato de cobre(II) penta-hidratado (CuSO₄·5H₂O)' },
      { label: 'Massas molares atômicas', value: 'Cu = 63,55; S = 32,06; O = 16,00; H = 1,008 g/mol' },
    ],
    formulas: [
      'M_M(CuSO₄·5H₂O) = M_M(CuSO₄) + 5 × M_M(H₂O)',
      'n = m / M_M',
      'M = n / V',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da Massa Molar do Soluto Hidratado',
        formula: 'M_M = 63,55 + 32,06 + (4 × 16,00) + 5 × [ (2 × 1,008) + 16,00 ]',
        calculation: 'M_M = 159,61 + 5 × (18,016) = 159,61 + 90,08 = 249,69 g/mol',
        result: '249,69 g/mol (≈ 249,7 g/mol)',
        explanation: 'Atenção essencial: as 5 moléculas de água de cristalização fazem parte da massa pesada do sal no frasco e devem ser computadas na massa molar do soluto.',
      },
      {
        stepNumber: 2,
        title: 'Conversão de Unidade e Cálculo da Quantidade de Matéria (n)',
        formula: 'n = m / M_M',
        calculation: 'n = 2.760 g / 249,69 g/mol',
        result: '11,054 mol de CuSO₄·5H₂O',
        explanation: 'Convertemos 2,76 kg para 2.760 gramas para manter a compatibilidade com a massa molar expressa em g/mol.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo da Concentração em Quantidade de Matéria (Molaridade)',
        formula: 'M = n / V',
        calculation: 'M = 11,054 mol / 1,45 L',
        result: '7,623 mol/L ≈ 7,62 mol/L (ou 7,62 M)',
        explanation: 'Dividimos o número de mols de soluto pelo volume total da solução em litros.',
      },
    ],
    finalAnswerText: 'A molaridade da solução é de aproximadamente 7,62 mol/L (ou 7,62 M, podendo ser 7,63 M dependendo do arredondamento das massas atômicas da tabela periódica adotada).',
    theoreticalTip: 'Em sais hidratados, o erro mais comum de estudantes é esquecer de incluir as moléculas de água (·xH₂O) na massa molar ao calcular os mols a partir da massa pesada.',
    simulation: {
      fields: [
        { id: 'massKg', label: 'Massa do sal (kg)', unit: 'kg', defaultValue: 2.76, min: 0.1, max: 10, step: 0.05 },
        { id: 'volumeL', label: 'Volume da solução (L)', unit: 'L', defaultValue: 1.45, min: 0.1, max: 10, step: 0.05 },
      ],
      calculate: (vals) => {
        const massG = (vals.massKg || 2.76) * 1000;
        const mm = 249.69;
        const mols = massG / mm;
        const vol = vals.volumeL || 1.45;
        const molarity = mols / vol;
        return {
          results: [
            { label: 'Quantidade de mols (n)', value: mols.toFixed(3), unit: 'mol' },
            { label: 'Molaridade calculada (M)', value: molarity.toFixed(3), unit: 'mol/L' },
          ],
          explanation: `Com ${vals.massKg} kg (${massG} g) em ${vol} L, temos ${mols.toFixed(3)} mols resultando em ${molarity.toFixed(3)} M.`,
        };
      },
    },
  },
  {
    id: 2,
    number: 2,
    title: 'Cálculo de Mols e Massa de Soluto (K₂CrO₄)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Calcule o número de mols e a massa do soluto em 0,2500 L de 0,1135 M K₂CrO₄.',
    directAnswer: 'n = 0,02838 mol (ou 2,838 × 10⁻² mol) | m = 5,510 g',
    givenData: [
      { label: 'Volume (V)', value: '0,2500 L', symbol: 'V' },
      { label: 'Molaridade (M)', value: '0,1135 mol/L', symbol: 'M' },
      { label: 'Soluto', value: 'Cromato de potássio (K₂CrO₄)' },
      { label: 'Massas molares atômicas', value: 'K = 39,10; Cr = 52,00; O = 16,00 g/mol' },
    ],
    formulas: [
      'n = M × V',
      'M_M(K₂CrO₄) = (2 × 39,10) + 52,00 + (4 × 16,00)',
      'm = n × M_M',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Determinação do Número de Mols de Soluto (n)',
        formula: 'n = M × V',
        calculation: 'n = 0,1135 mol/L × 0,2500 L',
        result: '0,028375 mol (2,8375 × 10⁻² mol)',
        explanation: 'Multiplicando a concentração em mol/L pelo volume em L, as unidades de litro se cancelam e obtemos diretamente a quantidade em mols.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da Massa Molar do Cromato de Potássio',
        formula: 'M_M = 2 × M_M(K) + M_M(Cr) + 4 × M_M(O)',
        calculation: 'M_M = (2 × 39,10) + 52,00 + (4 × 16,00) = 78,20 + 52,00 + 64,00',
        result: '194,20 g/mol',
        explanation: 'Somatório das massas atômicas de cada átomo constituinte da fórmula do K₂CrO₄.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo da Massa do Soluto (m)',
        formula: 'm = n × M_M',
        calculation: 'm = 0,028375 mol × 194,20 g/mol',
        result: '5,5104 g ≈ 5,51 g',
        explanation: 'Multiplicamos a quantidade de matéria pela massa molar para obter a massa do sal em gramas.',
      },
    ],
    finalAnswerText: 'O número de mols do soluto é 0,02838 mol (ou 2,838 × 10⁻² mol) e a massa correspondente é 5,51 g (com 4 algarismos significativos: 5,510 g).',
    theoreticalTip: 'Note a precisão dos dados do enunciado: 0,2500 L possui 4 algarismos significativos, e 0,1135 M possui 4 algarismos significativos. A resposta final deve respeitar 4 algarismos significativos: 5,510 g.',
    simulation: {
      fields: [
        { id: 'volume', label: 'Volume (L)', unit: 'L', defaultValue: 0.25, min: 0.01, max: 2, step: 0.01 },
        { id: 'molarity', label: 'Molaridade (M)', unit: 'mol/L', defaultValue: 0.1135, min: 0.01, max: 2, step: 0.005 },
      ],
      calculate: (vals) => {
        const v = vals.volume || 0.25;
        const m = vals.molarity || 0.1135;
        const n = m * v;
        const mm = 194.2;
        const mass = n * mm;
        return {
          results: [
            { label: 'Número de mols (n)', value: n.toFixed(5), unit: 'mol' },
            { label: 'Massa de K₂CrO₄ (m)', value: mass.toFixed(4), unit: 'g' },
          ],
          explanation: `Para V = ${v} L e M = ${m} mol/L, temos n = ${n.toFixed(5)} mol e m = ${mass.toFixed(3)} g de cromato de potássio.`,
        };
      },
    },
  },
  {
    id: 3,
    number: 3,
    title: 'Molaridade de Íons Cálcio (Ca²⁺) no Leite',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Há cerca de 1,0 g de cálcio, como Ca²⁺, em 1,0 L de leite. Qual é a molaridade de Ca²⁺ no leite?',
    directAnswer: '0,025 mol/L (ou 2,5 × 10⁻² M)',
    givenData: [
      { label: 'Massa de cálcio (m)', value: '1,0 g', symbol: 'm' },
      { label: 'Volume de leite (V)', value: '1,0 L', symbol: 'V' },
      { label: 'Espécie química', value: 'Íon cálcio (Ca²⁺)' },
      { label: 'Massa atômica do Ca', value: '40,08 g/mol' },
    ],
    formulas: [
      'n(Ca²⁺) = m / M_M(Ca)',
      'M = n / V',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da Quantidade de Matéria de Íons Ca²⁺',
        formula: 'n = m / M_M',
        calculation: 'n = 1,0 g / 40,08 g/mol',
        result: '0,02495 mol ≈ 0,025 mol (ou 2,5 × 10⁻² mol)',
        explanation: 'A perda de 2 elétrons no íon Ca²⁺ tem massa desprezível em relação ao núcleo, de modo que a massa molar do íon é considerada igual à do átomo neutro (40,08 g/mol).',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da Concentração em Quantidade de Matéria (Molaridade)',
        formula: 'M = n / V',
        calculation: 'M = 0,02495 mol / 1,0 L',
        result: '0,02495 mol/L ≈ 0,025 mol/L (ou 2,5 × 10⁻² M)',
        explanation: 'Como o volume de leite é exatamente 1,0 L, a molaridade numérica é numericamente igual à quantidade de mols contida nesse litro.',
      },
    ],
    finalAnswerText: 'A molaridade de íons cálcio no leite é de aproximadamente 0,025 mol/L (2,5 × 10⁻² M ou 25 mmol/L).',
    theoreticalTip: 'Na área biológica e nutricional, 1,0 g/L de cálcio corresponde a 25 mmol/L. Na química, a massa dos elétrons perdidos pelo íon é desprezada no cálculo da massa molar do íon.',
    simulation: {
      fields: [
        { id: 'massCa', label: 'Massa de Cálcio (g)', unit: 'g', defaultValue: 1.0, min: 0.1, max: 5.0, step: 0.1 },
        { id: 'volMilk', label: 'Volume de leite (L)', unit: 'L', defaultValue: 1.0, min: 0.2, max: 5.0, step: 0.1 },
      ],
      calculate: (vals) => {
        const m = vals.massCa || 1.0;
        const v = vals.volMilk || 1.0;
        const n = m / 40.08;
        const M = n / v;
        return {
          results: [
            { label: 'Quantidade de Ca²⁺ (n)', value: n.toFixed(4), unit: 'mol' },
            { label: 'Molaridade [Ca²⁺]', value: M.toFixed(4), unit: 'mol/L' },
            { label: 'Em milimol por litro', value: (M * 1000).toFixed(1), unit: 'mmol/L' },
          ],
          explanation: `Para ${m} g de Ca em ${v} L de leite, a concentração molar é de ${M.toFixed(4)} mol/L (${(M * 1000).toFixed(1)} mmol/L).`,
        };
      },
    },
  },
  {
    id: 4,
    number: 4,
    title: 'Diluição de Solução de Sacarose (C₁₂H₂₂O₁₁)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Que volume de uma solução de 0,33 M C₁₂H₂₂O₁₁ pode ser diluído para preparar 25 mL de uma solução com concentração de 0,025 M ?',
    directAnswer: '1,89 mL (ou 1,9 mL)',
    givenData: [
      { label: 'Concentração inicial da solução concentrada (M₁)', value: '0,33 M = 0,33 mol/L', symbol: 'M₁' },
      { label: 'Concentração final da solução desejada (M₂)', value: '0,025 M = 0,025 mol/L', symbol: 'M₂' },
      { label: 'Volume final da solução desejada (V₂)', value: '25 mL = 0,025 L', symbol: 'V₂' },
      { label: 'Soluto', value: 'Sacarose (C₁₂H₂₂O₁₁)' },
    ],
    formulas: [
      'Conservação de matéria do soluto: n₁ = n₂',
      'Equação fundamental da diluição: M₁ × V₁ = M₂ × V₂',
      'V₁ = (M₂ × V₂) / M₁',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Aplicação da Relação Geral de Diluição',
        formula: 'M₁ × V₁ = M₂ × V₂',
        calculation: '0,33 M × V₁ = 0,025 M × 25 mL',
        result: '0,33 × V₁ = 0,625',
        explanation: 'Como as unidades de concentração são ambas em mol/L (M), podemos manter o volume em mL para obter diretamente a resposta em mL.',
      },
      {
        stepNumber: 2,
        title: 'Isolamento e Resolução de V₁',
        formula: 'V₁ = 0,625 / 0,33',
        calculation: 'V₁ = 0,625 / 0,33',
        result: '1,8939... mL ≈ 1,89 mL',
        explanation: 'Dividindo 0,625 por 0,33 obtemos aproximadamente 1,89 mL (ou 1,9 mL arredondado para dois algarismos significativos).',
      },
    ],
    finalAnswerText: 'Deve-se tomar 1,89 mL da solução concentrada de sacarose 0,33 M e completar com água até atingir a marca de 25 mL no balão volumétrico.',
    theoreticalTip: 'Na diluição, a quantidade de soluto não se altera (n₁ = n₂). O que muda é apenas o volume de solvente adicionado (V_água = V₂ - V₁ = 25 - 1,89 = 23,11 mL).',
    simulation: {
      fields: [
        { id: 'm1', label: 'Concentração Inicial M₁ (M)', unit: 'M', defaultValue: 0.33, min: 0.05, max: 2, step: 0.01 },
        { id: 'm2', label: 'Concentração Desejada M₂ (M)', unit: 'M', defaultValue: 0.025, min: 0.005, max: 0.5, step: 0.005 },
        { id: 'v2', label: 'Volume Final V₂ (mL)', unit: 'mL', defaultValue: 25, min: 5, max: 500, step: 5 },
      ],
      calculate: (vals) => {
        const m1 = vals.m1 || 0.33;
        const m2 = vals.m2 || 0.025;
        const v2 = vals.v2 || 25;
        const v1 = (m2 * v2) / m1;
        const vH2O = v2 - v1;
        return {
          results: [
            { label: 'Volume da solução estoque (V₁)', value: v1.toFixed(2), unit: 'mL' },
            { label: 'Volume de água a adicionar (V_água)', value: vH2O > 0 ? vH2O.toFixed(2) : '0', unit: 'mL' },
            { label: 'Fator de diluição (V₂/V₁)', value: (v2 / v1).toFixed(1), unit: '×' },
          ],
          explanation: `Para obter ${v2} mL a ${m2} M partindo de ${m1} M, pipete ${v1.toFixed(2)} mL e adicione solvente até ${v2} mL.`,
        };
      },
    },
  },
  {
    id: 5,
    number: 5,
    title: 'Concentração após Evaporação Parcial (NaCl)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Qual é a concentração da solução de NaCl resultante quando 0,150 L de uma solução de 0,556 M é evaporada até que o volume seja reduzido para 0,105 L?',
    directAnswer: '0,794 M (ou 0,794 mol/L)',
    givenData: [
      { label: 'Volume inicial (V₁)', value: '0,150 L', symbol: 'V₁' },
      { label: 'Concentração inicial (M₁)', value: '0,556 M', symbol: 'M₁' },
      { label: 'Volume final reduzido (V₂)', value: '0,105 L', symbol: 'V₂' },
      { label: 'Soluto', value: 'Cloreto de sódio (NaCl)' },
    ],
    formulas: [
      'Conservação da massa/mols do soluto: n₁ = n₂',
      'M₁ × V₁ = M₂ × V₂',
      'M₂ = (M₁ × V₁) / V₂',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo dos mols de NaCl presentes na solução',
        formula: 'n = M₁ × V₁',
        calculation: 'n = 0,556 mol/L × 0,150 L',
        result: '0,0834 mol de NaCl',
        explanation: 'A evaporação remove somente água (o solvente volátil); o soluto (NaCl) não é volátil e permanece integralmente na solução.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da Nova Concentração Molar',
        formula: 'M₂ = n / V₂ = (M₁ × V₁) / V₂',
        calculation: 'M₂ = 0,0834 mol / 0,105 L',
        result: '0,79428... mol/L ≈ 0,794 mol/L (ou 0,794 M)',
        explanation: 'Como o volume diminuiu de 0,150 L para 0,105 L, a concentração necessariamente aumenta de 0,556 M para 0,794 M.',
      },
    ],
    finalAnswerText: 'A concentração da solução resultante após a evaporação é de 0,794 mol/L (ou 0,794 M).',
    theoreticalTip: 'A evaporação é o oposto da diluição: enquanto a diluição adiciona solvente diminuindo a concentração, a evaporação remove solvente concentrando a solução. A mesma relação matemática (M₁V₁ = M₂V₂) se aplica perfeitamente.',
    simulation: {
      fields: [
        { id: 'v1', label: 'Volume Inicial (L)', unit: 'L', defaultValue: 0.15, min: 0.05, max: 2, step: 0.01 },
        { id: 'm1', label: 'Concentração Inicial (M)', unit: 'M', defaultValue: 0.556, min: 0.1, max: 3, step: 0.01 },
        { id: 'v2', label: 'Volume Final após Evaporação (L)', unit: 'L', defaultValue: 0.105, min: 0.01, max: 1.5, step: 0.005 },
      ],
      calculate: (vals) => {
        const v1 = vals.v1 || 0.15;
        const m1 = vals.m1 || 0.556;
        const v2 = vals.v2 || 0.105;
        const n = m1 * v1;
        const m2 = n / v2;
        const evaporatedL = v1 - v2;
        return {
          results: [
            { label: 'Mols de soluto preservados', value: n.toFixed(4), unit: 'mol' },
            { label: 'Nova Molaridade (M₂)', value: m2.toFixed(3), unit: 'mol/L' },
            { label: 'Água evaporada', value: (evaporatedL * 1000).toFixed(1), unit: 'mL' },
          ],
          explanation: `Ao evaporar ${(evaporatedL * 1000).toFixed(0)} mL de água, a concentração do NaCl sobe de ${m1} M para ${m2.toFixed(3)} M.`,
        };
      },
    },
  },
  {
    id: 6,
    number: 6,
    title: 'Molaridade de Frasco de Ácido Clorídrico (HCl) Concentrado',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Uma garrafa de 2,00 L de uma solução de HCl concentrado foi comprada para o laboratório de química geral. A solução continha 868,8 g de HCl. Qual é a molaridade da solução?',
    directAnswer: '11,9 mol/L (ou 11,91 M)',
    givenData: [
      { label: 'Volume da garrafa (V)', value: '2,00 L', symbol: 'V' },
      { label: 'Massa de HCl dissolvida (m)', value: '868,8 g', symbol: 'm' },
      { label: 'Massas molares atômicas', value: 'H = 1,008 g/mol; Cl = 35,453 g/mol' },
    ],
    formulas: [
      'M_M(HCl) = 1,008 + 35,453 = 36,461 g/mol',
      'n = m / M_M',
      'M = n / V',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Massa Molar do Ácido Clorídrico (HCl)',
        formula: 'M_M = M_M(H) + M_M(Cl)',
        calculation: 'M_M = 1,008 + 35,453 = 36,461 g/mol ≈ 36,46 g/mol',
        result: '36,461 g/mol',
        explanation: 'Soma das massas atômicas de hidrogênio e cloro.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo do Número de Mols de HCl (n)',
        formula: 'n = m / M_M',
        calculation: 'n = 868,8 g / 36,461 g/mol',
        result: '23,828 mol de HCl',
        explanation: 'Calculamos quantos mols de gás cloreto de hidrogênio foram dissolvidos na garrafa.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo da Molaridade (M)',
        formula: 'M = n / V',
        calculation: 'M = 23,828 mol / 2,00 L',
        result: '11,914 mol/L ≈ 11,9 mol/L (ou 11,91 M)',
        explanation: 'Dividimos pelo volume total de 2,00 L.',
      },
    ],
    finalAnswerText: 'A molaridade da solução concentrada de HCl é de aproximadamente 11,9 mol/L (11,91 M).',
    theoreticalTip: 'Soluções comerciais de HCl concentrado comumente apresentam concentração de ~37% em massa e molaridade ao redor de 12 mol/L, o que é plenamente condizente com este resultado.',
    simulation: {
      fields: [
        { id: 'massHcl', label: 'Massa de HCl (g)', unit: 'g', defaultValue: 868.8, min: 100, max: 2000, step: 10 },
        { id: 'volumeL', label: 'Volume da Garrafa (L)', unit: 'L', defaultValue: 2.0, min: 0.5, max: 10, step: 0.1 },
      ],
      calculate: (vals) => {
        const m = vals.massHcl || 868.8;
        const v = vals.volumeL || 2.0;
        const mm = 36.461;
        const n = m / mm;
        const M = n / v;
        return {
          results: [
            { label: 'Número de mols (n)', value: n.toFixed(2), unit: 'mol' },
            { label: 'Molaridade (M)', value: M.toFixed(2), unit: 'mol/L' },
          ],
          explanation: `Com ${m} g em ${v} L, a quantidade de HCl é ${n.toFixed(2)} mol e a molaridade é ${M.toFixed(2)} M.`,
        };
      },
    },
  },
  {
    id: 7,
    number: 7,
    title: 'Massa de Soluto a partir de Volume, Densidade e Título (HCl)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Que massa de HCl está contida em 45,0 mL de uma solução aquosa de HCl que tem uma densidade de 1,19 g cm⁻³ e contém 37,21% de HCl em massa?',
    directAnswer: '19,9 g de HCl (19,93 g)',
    givenData: [
      { label: 'Volume da alíquota (V)', value: '45,0 mL = 45,0 cm³', symbol: 'V' },
      { label: 'Densidade da solução (d)', value: '1,19 g/cm³ = 1,19 g/mL', symbol: 'd' },
      { label: 'Título percentual em massa (T%)', value: '37,21% = 0,3721', symbol: 'τ' },
    ],
    formulas: [
      'm_solução = d × V',
      'm_soluto = m_solução × τ',
      'm_soluto = d × V × (T% / 100)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da Massa Total da Solução',
        formula: 'm_solução = d × V',
        calculation: 'm_solução = 1,19 g/cm³ × 45,0 cm³',
        result: '53,55 g de solução',
        explanation: 'Como 1 mL = 1 cm³, multiplicamos o volume pela densidade para encontrar quanto pesa essa porção líquida inteira.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo da Massa de HCl Puro (Soluto)',
        formula: 'm_HCl = m_solução × (37,21 / 100)',
        calculation: 'm_HCl = 53,55 g × 0,3721',
        result: '19,9259 g ≈ 19,93 g ≈ 19,9 g de HCl',
        explanation: 'Aplicamos o teor em massa (37,21% de HCl puro presente na massa total da solução). Respeitando três algarismos significativos: 19,9 g.',
      },
    ],
    finalAnswerText: 'Estão contidos aproximadamente 19,9 g de HCl (19,93 g) nos 45,0 mL dessa solução aquosa.',
    theoreticalTip: 'Diferencie com clareza: a massa da solução (53,55 g) corresponde ao peso total da mistura líquida (água + HCl). A massa do soluto (19,93 g) é apenas a porção de HCl gasoso dissolvido.',
    simulation: {
      fields: [
        { id: 'volume', label: 'Volume da Solução (mL)', unit: 'mL', defaultValue: 45.0, min: 5, max: 500, step: 5 },
        { id: 'density', label: 'Densidade (g/mL)', unit: 'g/mL', defaultValue: 1.19, min: 1.0, max: 1.8, step: 0.01 },
        { id: 'percentage', label: 'Porcentagem em Massa (%)', unit: '%', defaultValue: 37.21, min: 1, max: 98, step: 0.5 },
      ],
      calculate: (vals) => {
        const v = vals.volume || 45;
        const d = vals.density || 1.19;
        const p = vals.percentage || 37.21;
        const mSol = v * d;
        const mSolute = mSol * (p / 100);
        return {
          results: [
            { label: 'Massa total da solução', value: mSol.toFixed(2), unit: 'g' },
            { label: 'Massa de soluto puro (HCl)', value: mSolute.toFixed(2), unit: 'g' },
            { label: 'Massa do solvente (H₂O)', value: (mSol - mSolute).toFixed(2), unit: 'g' },
          ],
          explanation: `Volume de ${v} mL a densidade ${d} g/mL gera ${mSol.toFixed(2)} g totais; com ${p}%, temos ${mSolute.toFixed(2)} g de soluto.`,
        };
      },
    },
  },
  {
    id: 8,
    number: 8,
    title: 'Frações Molares em Mistura Ternária (Metanol, Etanol e Água)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: 'Calcule as frações molares de metanol (CH₃OH); etanol (C₂H₅OH) e água em uma solução que é 40% metanol, 40% etanol e 20% água em massa.',
    directAnswer: 'X_metanol = 0,387 | X_etanol = 0,269 | X_água = 0,344',
    givenData: [
      { label: 'Metanol (CH₃OH)', value: '40% em massa (MM = 32,04 g/mol)' },
      { label: 'Etanol (C₂H₅OH)', value: '40% em massa (MM = 46,07 g/mol)' },
      { label: 'Água (H₂O)', value: '20% em massa (MM = 18,02 g/mol)' },
      { label: 'Base de cálculo adotada', value: '100 g de solução' },
    ],
    formulas: [
      'n_i = m_i / M_M,i',
      'n_total = n_metanol + n_etanol + n_água',
      'X_i = n_i / n_total',
      'Verificação: ∑ X_i = 1',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Adoção da Base de Cálculo (100 g de mistura)',
        formula: 'm_total = 100 g',
        calculation: 'm(metanol) = 40,0 g ; m(etanol) = 40,0 g ; m(água) = 20,0 g',
        result: 'Massas parciais definidas',
        explanation: 'Adotar 100 g de mistura facilita a conversão direta de porcentagem percentual para gramas.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo do Número de Mols de Cada Componente',
        formula: 'n_i = m_i / MM_i',
        calculation: 'n(CH₃OH) = 40,0 / 32,042 = 1,2483 mol\nn(C₂H₅OH) = 40,0 / 46,069 = 0,8683 mol\nn(H₂O) = 20,0 / 18,015 = 1,1102 mol',
        result: 'n_metanol = 1,248 mol | n_etanol = 0,868 mol | n_água = 1,110 mol',
        explanation: 'Dividimos a massa de cada componente pela sua respectiva massa molar.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo do Número Total de Mols',
        formula: 'n_total = 1,2483 + 0,8683 + 1,1102',
        calculation: 'n_total = 3,2268 mol',
        result: '3,227 mol totais',
        explanation: 'Soma de todas as quantidades de matéria presentes na mistura.',
      },
      {
        stepNumber: 4,
        title: 'Cálculo das Frações Molares (X_i)',
        formula: 'X_i = n_i / n_total',
        calculation: 'X_metanol = 1,2483 / 3,2268 = 0,3869 ≈ 0,387\nX_etanol = 0,8683 / 3,2268 = 0,2691 ≈ 0,269\nX_água = 1,1102 / 3,2268 = 0,3440 ≈ 0,344',
        result: 'X_metanol = 0,387 (38,7%) | X_etanol = 0,269 (26,9%) | X_água = 0,344 (34,4%)',
        explanation: 'Verificação: 0,387 + 0,269 + 0,344 = 1,000 (100%). Perfeito!',
      },
    ],
    finalAnswerText: 'As frações molares são: Metanol = 0,387; Etanol = 0,269; Água = 0,344.',
    theoreticalTip: 'Apesar de metanol e etanol terem a mesma porcentagem em massa (40%), o metanol tem uma fração molar significativamente maior (0,387 contra 0,269) porque sua molécula é mais leve (32 g/mol vs 46 g/mol), gerando mais mols para a mesma massa.',
    simulation: {
      fields: [
        { id: 'pctMetanol', label: '% Metanol', unit: '%', defaultValue: 40, min: 5, max: 90, step: 1 },
        { id: 'pctEtanol', label: '% Etanol', unit: '%', defaultValue: 40, min: 5, max: 90, step: 1 },
        { id: 'pctAgua', label: '% Água', unit: '%', defaultValue: 20, min: 5, max: 90, step: 1 },
      ],
      calculate: (vals) => {
        const pM = vals.pctMetanol || 40;
        const pE = vals.pctEtanol || 40;
        const pA = vals.pctAgua || 20;
        const sum = pM + pE + pA;
        const nM = (pM / sum) * 100 / 32.042;
        const nE = (pE / sum) * 100 / 46.069;
        const nA = (pA / sum) * 100 / 18.015;
        const nTot = nM + nE + nA;
        const xM = nM / nTot;
        const xE = nE / nTot;
        const xA = nA / nTot;
        return {
          results: [
            { label: 'Fração molar Metanol (X₁)', value: xM.toFixed(4), unit: `(${(xM * 100).toFixed(1)}%)` },
            { label: 'Fração molar Etanol (X₂)', value: xE.toFixed(4), unit: `(${(xE * 100).toFixed(1)}%)` },
            { label: 'Fração molar Água (X₃)', value: xA.toFixed(4), unit: `(${(xA * 100).toFixed(1)}%)` },
            { label: 'Soma das frações (∑X)', value: (xM + xE + xA).toFixed(4), unit: '' },
          ],
          explanation: `Com frações de massa normalizadas em ${pM}:${pE}:${pA}, o total de mols é ${nTot.toFixed(3)} em 100 g.`,
        };
      },
    },
  },
  {
    id: 9,
    number: 9,
    title: 'Análise Completa de Solução de Ácido Nítrico (HNO₃)',
    category: 'solucoes',
    categoryLabel: 'Soluções & Concentrações',
    statement: `Uma solução aquosa de ácido nítrico (HNO₃) de densidade 1,5 g/mL foi formada pela reunião de 50 g de ácido nítrico e 250 g de água. Pede-se:
a) a massa e o número de moles do soluto e do solvente
b) a massa e o número de moles total da solução.
c) o volume da solução.
d) a concentração da solução.
e) a molaridade da solução.
f) o título da solução.
g) a fração molar do soluto e do solvente
h) a molalidade da solução.`,
    directAnswer: '8 itens resolvidos (V = 200 mL, C = 250 g/L, M = 3,97 mol/L, τ = 0,167, W = 3,17 mol/kg)',
    givenData: [
      { label: 'Massa do soluto HNO₃ (m₁)', value: '50 g', symbol: 'm₁' },
      { label: 'Massa do solvente H₂O (m₂)', value: '250 g = 0,250 kg', symbol: 'm₂' },
      { label: 'Densidade da solução (d)', value: '1,5 g/mL', symbol: 'd' },
      { label: 'Massa molar do HNO₃', value: '1 + 14 + (3 × 16) = 63,0 g/mol' },
      { label: 'Massa molar da H₂O', value: '18,0 g/mol' },
    ],
    formulas: [
      'n₁ = m₁ / MM₁ ; n₂ = m₂ / MM₂',
      'm_total = m₁ + m₂ ; n_total = n₁ + n₂',
      'V = m_total / d',
      'C = m₁ / V',
      'M = n₁ / V',
      'τ = m₁ / m_total',
      'X₁ = n₁ / n_total ; X₂ = n₂ / n_total',
      'W = n₁ / m₂(kg)',
    ],
    subQuestions: [
      {
        letter: 'a',
        label: 'Massa e número de moles do soluto e do solvente',
        formula: 'n₁ = m₁ / 63,0  e  n₂ = m₂ / 18,0',
        calculation: 'Soluto (HNO₃): m₁ = 50 g, n₁ = 50 / 63,015 = 0,7935 mol ≈ 0,794 mol.\nSolvente (H₂O): m₂ = 250 g, n₂ = 250 / 18,015 = 13,877 mol ≈ 13,88 mol.',
        result: 'Soluto: 50 g e 0,794 mol | Solvente: 250 g e 13,88 mol',
      },
      {
        letter: 'b',
        label: 'Massa e número de moles total da solução',
        formula: 'm_total = m₁ + m₂  e  n_total = n₁ + n₂',
        calculation: 'm_total = 50 g + 250 g = 300 g.\nn_total = 0,7935 mol + 13,877 mol = 14,67 mol.',
        result: 'm_total = 300 g | n_total = 14,67 mol',
      },
      {
        letter: 'c',
        label: 'Volume da solução',
        formula: 'V = m_total / d',
        calculation: 'V = 300 g / 1,5 g/mL = 200 mL = 0,200 L',
        result: '200 mL (ou 0,200 L)',
      },
      {
        letter: 'd',
        label: 'Concentração comum da solução (g/L)',
        formula: 'C = m₁ / V',
        calculation: 'C = 50 g / 0,200 L = 250 g/L',
        result: '250 g/L',
      },
      {
        letter: 'e',
        label: 'Molaridade da solução (mol/L)',
        formula: 'M = n₁ / V',
        calculation: 'M = 0,7935 mol / 0,200 L = 3,9675 mol/L ≈ 3,97 mol/L (ou 3,97 M)',
        result: '3,97 mol/L (ou 3,97 M)',
      },
      {
        letter: 'f',
        label: 'Título da solução (em massa)',
        formula: 'τ = m₁ / m_total',
        calculation: 'τ = 50 g / 300 g = 1/6 ≈ 0,1667 (ou 16,67%)',
        result: '0,167 (ou 16,67%)',
      },
      {
        letter: 'g',
        label: 'Fração molar do soluto e do solvente',
        formula: 'X₁ = n₁ / n_total  e  X₂ = n₂ / n_total',
        calculation: 'X(HNO₃) = 0,7935 / 14,67 = 0,0541 ≈ 0,054 (5,41%)\nX(H₂O) = 13,877 / 14,67 = 0,9459 ≈ 0,946 (94,59%)',
        result: 'X_soluto = 0,054 | X_solvente = 0,946',
      },
      {
        letter: 'h',
        label: 'Molalidade da solução (mol/kg de solvente)',
        formula: 'W = n₁ / m₂(kg)',
        calculation: 'W = 0,7935 mol / 0,250 kg = 3,174 mol/kg ≈ 3,17 mol/kg (ou 3,18 mol/kg)',
        result: '3,17 mol/kg',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Massa e mols dos componentes individuais',
        formula: 'n = m / MM',
        calculation: 'n(HNO₃) = 50 / 63,0 = 0,794 mol | n(H₂O) = 250 / 18,0 = 13,88 mol',
        result: 'Respondido no item (a)',
        explanation: 'Calculamos as massas e mols individuais do soluto e do solvente.',
      },
      {
        stepNumber: 2,
        title: 'Massa total e Volume da solução através da densidade',
        formula: 'V = m_total / d',
        calculation: 'V = (50 + 250) / 1,5 = 300 / 1,5 = 200 mL = 0,200 L',
        result: 'Respondido nos itens (b) e (c)',
        explanation: 'Atenção: o volume é calculado dividindo a MASSA TOTAL pela densidade, não apenas a massa de soluto.',
      },
      {
        stepNumber: 3,
        title: 'Todas as grandezas de concentração',
        formula: 'C = m₁/V, M = n₁/V, τ = m₁/m_tot, X = n₁/n_tot, W = n₁/m₂_kg',
        calculation: 'C = 250 g/L | M = 3,97 mol/L | τ = 0,167 | X₁ = 0,054 | W = 3,17 mol/kg',
        result: 'Respondido nos itens (d) a (h)',
        explanation: 'Todas as definições clássicas de concentração reunidas em um único problema integrador.',
      },
    ],
    finalAnswerText: 'Todas as 8 propriedades foram determinadas com precisão a partir dos dados experimentais fornecidos.',
    theoreticalTip: 'Diferença crucial entre Molaridade (M) e Molalidade (W): Molaridade divide os mols de soluto pelo volume da SOLUÇÃO em litros (mol/L). Molalidade divide os mols de soluto pela massa de SOLVENTE em quilogramas (mol/kg). A molalidade não varia com a temperatura, pois massa não se dilata termicamente.',
    simulation: {
      fields: [
        { id: 'mHno3', label: 'Massa de HNO₃ (g)', unit: 'g', defaultValue: 50, min: 10, max: 200, step: 5 },
        { id: 'mH2O', label: 'Massa de H₂O (g)', unit: 'g', defaultValue: 250, min: 50, max: 1000, step: 25 },
        { id: 'dens', label: 'Densidade (g/mL)', unit: 'g/mL', defaultValue: 1.5, min: 1.05, max: 1.9, step: 0.05 },
      ],
      calculate: (vals) => {
        const m1 = vals.mHno3 || 50;
        const m2 = vals.mH2O || 250;
        const d = vals.dens || 1.5;
        const n1 = m1 / 63.015;
        const n2 = m2 / 18.015;
        const mTot = m1 + m2;
        const nTot = n1 + n2;
        const vL = (mTot / d) / 1000;
        const C = m1 / vL;
        const M = n1 / vL;
        const tau = m1 / mTot;
        const x1 = n1 / nTot;
        const W = n1 / (m2 / 1000);
        return {
          results: [
            { label: 'Volume da Solução', value: (vL * 1000).toFixed(1), unit: 'mL' },
            { label: 'Concentração comum (C)', value: C.toFixed(1), unit: 'g/L' },
            { label: 'Molaridade (M)', value: M.toFixed(2), unit: 'mol/L' },
            { label: 'Título em massa (τ)', value: (tau * 100).toFixed(2), unit: '%' },
            { label: 'Molalidade (W)', value: W.toFixed(2), unit: 'mol/kg' },
          ],
          explanation: `Para ${m1} g de HNO₃ e ${m2} g de H₂O a d = ${d} g/mL, o volume resultante é ${(vL * 1000).toFixed(1)} mL e M = ${M.toFixed(2)} M.`,
        };
      },
    },
  },
  {
    id: 10,
    number: 10,
    title: 'Calor Específico de Substância Desconhecida',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: 'Um pedaço de substância desconhecida pesa 44,7 g e requer 2110 J para aumentar sua temperatura de 23,2 °C para 89,6 °C. Qual é o calor específico da substância?',
    directAnswer: '0,711 J/(g·°C)',
    givenData: [
      { label: 'Massa da amostra (m)', value: '44,7 g', symbol: 'm' },
      { label: 'Calor absorvido (q)', value: '2.110 J', symbol: 'q' },
      { label: 'Temperatura inicial (T_i)', value: '23,2 °C', symbol: 'T_i' },
      { label: 'Temperatura final (T_f)', value: '89,6 °C', symbol: 'T_f' },
    ],
    formulas: [
      'ΔT = T_f - T_i',
      'q = m × c × ΔT',
      'c = q / (m × ΔT)',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo da Variação de Temperatura (ΔT)',
        formula: 'ΔT = T_f - T_i',
        calculation: 'ΔT = 89,6 °C - 23,2 °C',
        result: '66,4 °C',
        explanation: 'A amostra foi aquecida em 66,4 °C.',
      },
      {
        stepNumber: 2,
        title: 'Aplicação da Equação Fundamental da Calorimetria',
        formula: 'c = q / (m × ΔT)',
        calculation: 'c = 2110 J / (44,7 g × 66,4 °C) = 2110 J / 2968,08 (g·°C)',
        result: '0,71089... J/(g·°C) ≈ 0,711 J/(g·°C)',
        explanation: 'Dividimos o calor em Joules pelo produto da massa pelo aquecimento experimentado.',
      },
    ],
    finalAnswerText: 'O calor específico da substância é de aproximadamente 0,711 J/(g·°C) (ou 0,711 J·g⁻¹·K⁻¹).',
    theoreticalTip: 'Um calor específico de ~0,71 J/(g·°C) é característico de materiais inorgânicos sólidos como o quartzo/sílica (SiO₂ ≈ 0,70 J/g°C) ou certos silicatos minerais.',
    simulation: {
      fields: [
        { id: 'mass', label: 'Massa da substância (g)', unit: 'g', defaultValue: 44.7, min: 5, max: 200, step: 1 },
        { id: 'heatJ', label: 'Calor fornecido (J)', unit: 'J', defaultValue: 2110, min: 100, max: 10000, step: 50 },
        { id: 'tInit', label: 'Temp. Inicial (°C)', unit: '°C', defaultValue: 23.2, min: 0, max: 50, step: 0.5 },
        { id: 'tFinal', label: 'Temp. Final (°C)', unit: '°C', defaultValue: 89.6, min: 50, max: 150, step: 0.5 },
      ],
      calculate: (vals) => {
        const m = vals.mass || 44.7;
        const q = vals.heatJ || 2110;
        const ti = vals.tInit || 23.2;
        const tf = vals.tFinal || 89.6;
        const deltaT = tf - ti;
        const c = deltaT > 0 ? q / (m * deltaT) : 0;
        return {
          results: [
            { label: 'Variação de temperatura (ΔT)', value: deltaT.toFixed(1), unit: '°C' },
            { label: 'Calor específico (c)', value: c.toFixed(3), unit: 'J/(g·°C)' },
            { label: 'Capacidade térmica (C = m·c)', value: (m * c).toFixed(2), unit: 'J/°C' },
          ],
          explanation: `Com ΔT = ${deltaT.toFixed(1)} °C, são necessários ${(q / deltaT).toFixed(1)} J por grau de elevação, resultando em c = ${c.toFixed(3)} J/(g·°C).`,
        };
      },
    },
  },
  {
    id: 11,
    number: 11,
    title: 'Troca de Calor e Calor Específico em Calorímetro com Água',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: 'Uma peça de metal de 70,0 g a 80,0 °C é colocada em 100 g de água a 22,0 °C contida em um calorímetro. O metal e a água chegam à mesma temperatura de 24,6 °C. Quanto calor o metal cedeu para a água? Qual é o calor específico do metal? (c_H₂O = 4,18 J/g °C)',
    directAnswer: 'Calor cedido = 1.086,8 J (≈ 1,09 kJ) | c_metal = 0,280 J/(g·°C)',
    givenData: [
      { label: 'Peça de metal (m_m)', value: '70,0 g', symbol: 'm_m' },
      { label: 'Temperatura inicial do metal (T_i,m)', value: '80,0 °C', symbol: 'T_i,m' },
      { label: 'Massa de água (m_a)', value: '100 g', symbol: 'm_a' },
      { label: 'Temperatura inicial da água (T_i,a)', value: '22,0 °C', symbol: 'T_i,a' },
      { label: 'Temperatura de equilíbrio térmico (T_e)', value: '24,6 °C', symbol: 'T_e' },
      { label: 'Calor específico da água (c_água)', value: '4,18 J/(g·°C)' },
    ],
    formulas: [
      'q_água = m_a × c_a × (T_e - T_i,a)',
      'Conservação da energia: q_metal + q_água = 0 ⟹ q_metal = -q_água',
      'c_metal = -q_água / [ m_m × (T_e - T_i,m) ]',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo do Calor Absorvido pela Água',
        formula: 'q_água = m_a × c_a × ΔT_a',
        calculation: 'ΔT_a = 24,6 °C - 22,0 °C = 2,6 °C\nq_água = 100 g × 4,18 J/(g·°C) × 2,6 °C = 1086,8 J',
        result: 'q_água = 1086,8 J (ou ≈ 1,087 kJ)',
        explanation: 'A água aqueceu de 22,0 °C para 24,6 °C, absorvendo exatamente 1086,8 J de energia térmica.',
      },
      {
        stepNumber: 2,
        title: 'Calor Cedido pelo Metal',
        formula: 'q_cedido = q_absorvido',
        calculation: 'q_cedido = 1086,8 J (portanto, q_metal = -1086,8 J)',
        result: '1086,8 J cedidos',
        explanation: 'Pelo princípio da conservação de energia em sistema termicamente isolado, todo o calor absorvido pela água proveio do resfriamento do metal.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo do Calor Específico do Metal',
        formula: 'q_metal = m_m × c_m × (T_e - T_i,m)',
        calculation: 'ΔT_m = 24,6 °C - 80,0 °C = -55,4 °C\n-1086,8 J = 70,0 g × c_m × (-55,4 °C)\n-1086,8 = -3878 × c_m\nc_m = 1086,8 / 3878 = 0,28024... J/(g·°C)',
        result: '0,280 J/(g·°C)',
        explanation: 'Com 3 algarismos significativos: c_metal = 0,280 J/(g·°C).',
      },
    ],
    finalAnswerText: 'O metal cedeu 1.086,8 J (≈ 1,09 kJ) para a água, e o calor específico do metal é 0,280 J/(g·°C).',
    theoreticalTip: 'Um calor específico de 0,28 J/(g·°C) é muito próximo do estanho (Sn ≈ 0,227 J/g°C) ou de certas ligas metálicas com chumbo/zinco. Note como o calor específico dos metais é ordens de grandeza menor que o da água (4,18 J/g°C), razão pela qual o metal varia sua temperatura drasticamente (-55,4 °C) enquanto a água varia muito pouco (+2,6 °C).',
    simulation: {
      fields: [
        { id: 'mMetal', label: 'Massa do metal (g)', unit: 'g', defaultValue: 70, min: 10, max: 300, step: 5 },
        { id: 'tMetal', label: 'Temp. inicial do metal (°C)', unit: '°C', defaultValue: 80, min: 40, max: 120, step: 1 },
        { id: 'mAgua', label: 'Massa da água (g)', unit: 'g', defaultValue: 100, min: 50, max: 500, step: 10 },
        { id: 'tAgua', label: 'Temp. inicial da água (°C)', unit: '°C', defaultValue: 22, min: 10, max: 35, step: 0.5 },
        { id: 'tEq', label: 'Temp. equilíbrio (°C)', unit: '°C', defaultValue: 24.6, min: 22.1, max: 35, step: 0.1 },
      ],
      calculate: (vals) => {
        const mm = vals.mMetal || 70;
        const tm = vals.tMetal || 80;
        const ma = vals.mAgua || 100;
        const ta = vals.tAgua || 22;
        const te = vals.tEq || 24.6;
        const dTa = te - ta;
        const dTm = te - tm;
        const qAgua = ma * 4.18 * dTa;
        const cMetal = dTm !== 0 ? -qAgua / (mm * dTm) : 0;
        return {
          results: [
            { label: 'Calor absorvido pela água', value: qAgua.toFixed(1), unit: 'J' },
            { label: 'Calor específico do metal', value: cMetal.toFixed(3), unit: 'J/(g·°C)' },
            { label: 'Variação do metal (ΔT_m)', value: dTm.toFixed(1), unit: '°C' },
          ],
          explanation: `A água absorveu ${qAgua.toFixed(1)} J aquecendo +${dTa.toFixed(1)} °C; o metal perdeu igual valor ao esfriar ${dTm.toFixed(1)} °C.`,
        };
      },
    },
  },
  {
    id: 12,
    number: 12,
    title: 'Neutralização Ácido-Base e Proporcionalidade Térmica',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: 'Uma reação de 50 mL de ácido e 50 mL de base aumentou a temperatura da solução em 6,9 °C. Quanto teria aumentado a temperatura se 100 mL de ácido e 100 mL de base tivessem sido usados no mesmo calorímetro a partir da mesma temperatura de 22,0 °C?',
    directAnswer: 'O aumento de temperatura seria os mesmos 6,9 °C (atingindo 28,9 °C)',
    givenData: [
      { label: 'Ensaio 1 - Volumes', value: '50 mL de ácido + 50 mL de base = 100 mL de solução' },
      { label: 'Ensaio 1 - Aquecimento', value: 'ΔT₁ = 6,9 °C' },
      { label: 'Ensaio 2 - Volumes', value: '100 mL de ácido + 100 mL de base = 200 mL de solução' },
      { label: 'Temperatura inicial', value: '22,0 °C' },
    ],
    formulas: [
      'q = n_neutralizado × |ΔH_neutralização|',
      'ΔT = q / (m_solução × c_solução)',
      'Se n₂ = 2 × n₁  e  m₂ = 2 × m₁ ⟹ ΔT₂ = (2 × q₁) / (2 × m₁ × c) = ΔT₁',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Análise da Quantidade de Calor Liberado (q)',
        formula: 'q ∝ n (número de mols de água formada na neutralização)',
        calculation: 'n₂ = 2 × n₁ ⟹ q₂ = 2 × q₁',
        result: 'O calor liberado duplica (2×)',
        explanation: 'Ao dobrar o volume das soluções de ácido e base mantendo as mesmas concentrações, temos o dobro de mols de H⁺ e OH⁻ reagindo, liberando exatamente o dobro de calor.',
      },
      {
        stepNumber: 2,
        title: 'Análise da Massa de Solução a ser Aquecida (m)',
        formula: 'm_solução = V_total × densidade',
        calculation: 'V₁ = 50 + 50 = 100 mL ⟹ m₁ ≈ 100 g\nV₂ = 100 + 100 = 200 mL ⟹ m₂ ≈ 200 g',
        result: 'A massa de solução também duplica (2×)',
        explanation: 'O calorímetro agora contém 200 mL de solução líquida para absorver a energia gerada, ou seja, o dobro da massa de água.',
      },
      {
        stepNumber: 3,
        title: 'Determinação do Novo Aumento de Temperatura (ΔT₂)',
        formula: 'ΔT₂ = q₂ / (m₂ × c) = (2 × q₁) / (2 × m₁ × c) = q₁ / (m₁ × c)',
        calculation: 'ΔT₂ = ΔT₁ = 6,9 °C',
        result: 'ΔT₂ = 6,9 °C',
        explanation: 'O fator 2 no numerador (calor dobrado) cancela exatamente com o fator 2 no denominador (massa dobrada). Portanto, a variação de temperatura permanece rigorosamente a mesma.',
      },
    ],
    finalAnswerText: 'A temperatura teria aumentado exatamente os mesmos 6,9 °C (atingindo uma temperatura final de 22,0 + 6,9 = 28,9 °C), assumindo que a capacidade térmica das paredes do calorímetro seja desprezível em relação à massa da solução.',
    theoreticalTip: 'Questão clássica de vestibulares e concursos de química! A variação de temperatura (ΔT) é uma propriedade intensiva nessa escala porque a entalpia molar de neutralização é constante e a proporção calor/massa de líquido permanece idêntica.',
    simulation: {
      fields: [
        { id: 'vAcido', label: 'Volume de Ácido (mL)', unit: 'mL', defaultValue: 100, min: 10, max: 500, step: 10 },
        { id: 'vBase', label: 'Volume de Base (mL)', unit: 'mL', defaultValue: 100, min: 10, max: 500, step: 10 },
        { id: 'tBase', label: 'Temperatura Inicial (°C)', unit: '°C', defaultValue: 22.0, min: 15, max: 30, step: 0.5 },
      ],
      calculate: (vals) => {
        const va = vals.vAcido || 100;
        const vb = vals.vBase || 100;
        const ti = vals.tBase || 22.0;
        const vTot = va + vb;
        const deltaT = 6.9; // Propriedade invariante para proporções equimolares
        const tf = ti + deltaT;
        return {
          results: [
            { label: 'Volume Total da Mistura', value: vTot.toFixed(0), unit: 'mL' },
            { label: 'Variação de Temperatura (ΔT)', value: deltaT.toFixed(1), unit: '°C' },
            { label: 'Temperatura Final (T_f)', value: tf.toFixed(1), unit: '°C' },
          ],
          explanation: `Mesmo variando a escala para ${vTot} mL totais (proporção 1:1), a razão calor/massa é constante e o aquecimento é sempre de +${deltaT} °C.`,
        };
      },
    },
  },
  {
    id: 13,
    number: 13,
    title: 'Calor Produzido na Combustão do Acetileno (C₂H₂)',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: 'Quanto calor é produzido pela queima de 4,00 mol de acetileno em condições de estado padrão? (ΔHc° = -1301,1 kJ/mol)',
    directAnswer: '5.204,4 kJ (calor liberado)',
    givenData: [
      { label: 'Quantidade de acetileno queimada (n)', value: '4,00 mol', symbol: 'n' },
      { label: 'Entalpia padrão de combustão (ΔH_c°)', value: '-1301,1 kJ/mol', symbol: 'ΔH_c°' },
      { label: 'Equação termoquímica', value: 'C₂H₂(g) + 5/2 O₂(g) → 2 CO₂(g) + H₂O(l)   ΔH° = -1301,1 kJ' },
    ],
    formulas: [
      'ΔH = n × ΔH_c°',
      'Q_produzido = n × |ΔH_c°|',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Interpretação da Entalpia Padrão de Combustão',
        formula: '1 mol de C₂H₂ ⟹ libera 1301,1 kJ',
        calculation: 'O sinal negativo (-1301,1 kJ/mol) indica que a reação é exotérmica, ou seja, libera calor para a vizinhança.',
        result: '1301,1 kJ liberados por mol',
        explanation: 'A queima completa de 1 mol de acetileno produz dióxido de carbono gasoso e água líquida com liberação de 1301,1 kJ.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo para 4,00 Mols de Acetileno',
        formula: 'Q_produzido = 4,00 mol × 1301,1 kJ/mol',
        calculation: 'Q = 4,00 × 1301,1 = 5204,4 kJ',
        result: '5204,4 kJ',
        explanation: 'Multiplicamos a quantidade de matéria pelo calor liberado por mol.',
      },
    ],
    finalAnswerText: 'São produzidos (liberados) 5.204,4 kJ de calor na queima de 4,00 mol de acetileno (ΔH = -5.204,4 kJ).',
    theoreticalTip: 'Atente para a redação da pergunta: "Quanto calor é produzido?" O calor produzido é uma quantidade positiva de energia térmica cedida (5.204,4 kJ). Se a pergunta pedisse "Qual a variação de entalpia (ΔH)?", a resposta técnica seria -5.204,4 kJ.',
    simulation: {
      fields: [
        { id: 'mols', label: 'Quantidade de Acetileno (mol)', unit: 'mol', defaultValue: 4.0, min: 0.1, max: 20, step: 0.5 },
      ],
      calculate: (vals) => {
        const n = vals.mols || 4.0;
        const dh = -1301.1;
        const qProd = n * Math.abs(dh);
        const massC2H2 = n * 26.04;
        return {
          results: [
            { label: 'Calor produzido/liberado', value: qProd.toFixed(1), unit: 'kJ' },
            { label: 'Variação de entalpia (ΔH)', value: (-qProd).toFixed(1), unit: 'kJ' },
            { label: 'Massa de acetileno consumida', value: massC2H2.toFixed(1), unit: 'g' },
          ],
          explanation: `A queima de ${n} mols (${massC2H2.toFixed(1)} g de C₂H₂) libera ${qProd.toFixed(1)} kJ de calor.`,
        };
      },
    },
  },
  {
    id: 14,
    number: 14,
    title: 'Capacidade Calorífica de Calorímetro de Bomba com Carbono',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: 'Uma amostra de 0,562 g de carbono é queimada em oxigênio em um calorímetro de bomba, produzindo dióxido de carbono. Suponha que tanto os reagentes quanto os produtos estejam sob condições de estado padrão e que o calor liberado seja diretamente proporcional à entalpia de combustão do grafite. A temperatura do calorímetro aumenta de 26,74 °C para 27,93 °C. Qual é a capacidade de calor (C_cal) do calorímetro e seu conteúdo? (ΔH°c(C,grafite) = -393,5 kJ/mol)',
    directAnswer: '15,47 kJ/°C (ou 15.472 J/°C)',
    givenData: [
      { label: 'Massa de carbono grafite (m)', value: '0,562 g', symbol: 'm' },
      { label: 'Massa molar do carbono (MM)', value: '12,011 g/mol', symbol: 'MM' },
      { label: 'Entalpia de combustão do grafite (ΔH_c°)', value: '-393,5 kJ/mol', symbol: 'ΔH_c°' },
      { label: 'Temperatura inicial (T_i)', value: '26,74 °C', symbol: 'T_i' },
      { label: 'Temperatura final (T_f)', value: '27,93 °C', symbol: 'T_f' },
    ],
    formulas: [
      'n_C = m / MM_C',
      'q_liberado = n_C × |ΔH_c°|',
      'ΔT = T_f - T_i',
      'C_cal = q_liberado / ΔT',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Cálculo do Número de Mols de Carbono Queimado',
        formula: 'n_C = m / MM_C',
        calculation: 'n_C = 0,562 g / 12,011 g/mol',
        result: '0,046790 mol de C (≈ 0,0468 mol)',
        explanation: 'Determinamos a fração molar de carbono presente na pastilha.',
      },
      {
        stepNumber: 2,
        title: 'Cálculo do Calor Total Liberado pela Combustão',
        formula: 'q_liberado = n_C × 393,5 kJ/mol',
        calculation: 'q_liberado = 0,046790 mol × 393,5 kJ/mol',
        result: '18,412 kJ (ou 18.412 J)',
        explanation: 'Multiplicamos os mols queimados pela entalpia de combustão do carbono.',
      },
      {
        stepNumber: 3,
        title: 'Cálculo da Elevação de Temperatura (ΔT)',
        formula: 'ΔT = T_f - T_i',
        calculation: 'ΔT = 27,93 °C - 26,74 °C',
        result: '1,19 °C (ou 1,19 K)',
        explanation: 'A combustão elevou a temperatura de todo o conjunto calorimétrico em 1,19 °C.',
      },
      {
        stepNumber: 4,
        title: 'Determinação da Capacidade Térmica do Calorímetro (C_cal)',
        formula: 'C_cal = q_absorvido / ΔT',
        calculation: 'C_cal = 18,412 kJ / 1,19 °C = 15,472 kJ/°C',
        result: '15,47 kJ/°C (ou 15.472 J/°C)',
        explanation: 'Dividimos o calor absorvido pela variação de temperatura.',
      },
    ],
    finalAnswerText: 'A capacidade de calor do calorímetro e de seu conteúdo é de 15,47 kJ/°C (ou 15,47 kJ/K, equivalente a 15.472 J/°C).',
    theoreticalTip: 'A calibração de um calorímetro de bomba é o procedimento padrão em laboratórios de físico-química para determinar sua constante calorimétrica (C_cal) antes de usá-lo para medir a entalpia de combustão de combustíveis ou alimentos desconhecidos.',
    simulation: {
      fields: [
        { id: 'massC', label: 'Massa de Carbono (g)', unit: 'g', defaultValue: 0.562, min: 0.1, max: 2.0, step: 0.05 },
        { id: 'tInit', label: 'Temp. Inicial (°C)', unit: '°C', defaultValue: 26.74, min: 20, max: 30, step: 0.1 },
        { id: 'tFinal', label: 'Temp. Final (°C)', unit: '°C', defaultValue: 27.93, min: 25, max: 35, step: 0.1 },
      ],
      calculate: (vals) => {
        const m = vals.massC || 0.562;
        const ti = vals.tInit || 26.74;
        const tf = vals.tFinal || 27.93;
        const dT = tf - ti;
        const n = m / 12.011;
        const qKj = n * 393.5;
        const cCal = dT > 0 ? qKj / dT : 0;
        return {
          results: [
            { label: 'Calor liberado', value: qKj.toFixed(2), unit: 'kJ' },
            { label: 'Variação térmica (ΔT)', value: dT.toFixed(2), unit: '°C' },
            { label: 'Capacidade calorífica C_cal', value: cCal.toFixed(2), unit: 'kJ/°C' },
          ],
          explanation: `A queima de ${m} g liberou ${qKj.toFixed(2)} kJ; dividindo por ΔT = ${dT.toFixed(2)} °C, temos C_cal = ${cCal.toFixed(2)} kJ/°C.`,
        };
      },
    },
  },
  {
    id: 15,
    number: 15,
    title: 'Calor de Fermentação da Glicose por Lei de Hess',
    category: 'termoquimica',
    categoryLabel: 'Calorimetria & Termoquímica',
    statement: `Sabendo-se que a fermentação que produz o álcool das bebidas alcoólicas é uma reação exotérmica representada pela equação abaixo, calcule o valor de x em kJ/mol da glicose:
C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g) + x kJ
Considerando-se as equações que representam as combustões da glicose e do etanol:
C₆H₁₂O₆(s) + 6 O₂(g) → 6 CO₂(g) + 6 H₂O(l) + 2840 kJ
C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l) + 1350 kJ`,
    directAnswer: 'x = 140 kJ (a reação libera 140 kJ/mol de glicose)',
    givenData: [
      { label: 'Reação Alvo', value: 'C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g) + x kJ' },
      { label: 'Combustão da Glicose (Eq. 1)', value: 'C₆H₁₂O₆(s) + 6 O₂(g) → 6 CO₂(g) + 6 H₂O(l) + 2840 kJ (ΔH₁ = -2840 kJ)' },
      { label: 'Combustão do Etanol (Eq. 2)', value: 'C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l) + 1350 kJ (ΔH₂ = -1350 kJ)' },
    ],
    formulas: [
      'Lei de Hess: ΔH_reação = ∑ ΔH_etapas',
      'Equação Alvo = (Eq. 1) + 2 × [ - (Eq. 2) ]',
      'ΔH_fermentação = ΔH₁ - 2 × ΔH₂',
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Interpretação Termoquímica das Equações Fornecidas',
        formula: 'Reação com "+ Q kJ" nos produtos = Reação Exotérmica (ΔH < 0)',
        calculation: 'Eq. 1: C₆H₁₂O₆(s) + 6 O₂(g) → 6 CO₂(g) + 6 H₂O(l)   [ ΔH₁ = -2840 kJ ]\nEq. 2: C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l)   [ ΔH₂ = -1350 kJ ]',
        result: 'ΔH₁ = -2840 kJ | ΔH₂ = -1350 kJ',
        explanation: 'Quando a energia aparece como produto somado (+ 2840 kJ), significa que o calor foi liberado, portanto a variação de entalpia é negativa.',
      },
      {
        stepNumber: 2,
        title: 'Ajuste das Equações para a Lei de Hess',
        formula: 'Comparação com a Reação Alvo: C₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g)',
        calculation: '1) Precisamos de 1 mol de C₆H₁₂O₆ nos reagentes ⟹ Manter Eq. 1 multiplicada por 1:\n   C₆H₁₂O₆(s) + 6 O₂(g) → 6 CO₂(g) + 6 H₂O(l)   ΔH_A = -2840 kJ\n\n2) Precisamos de 2 mols de C₂H₅OH nos PRODUTOS ⟹ Inverter Eq. 2 e multiplicar por 2:\n   2 × [ 2 CO₂(g) + 3 H₂O(l) → C₂H₅OH(l) + 3 O₂(g) ]\n   = 4 CO₂(g) + 6 H₂O(l) → 2 C₂H₅OH(l) + 6 O₂(g)   ΔH_B = +2 × (+1350 kJ) = +2700 kJ',
        result: 'ΔH_A = -2840 kJ | ΔH_B = +2700 kJ',
        explanation: 'Ao inverter uma reação termoquímica, inverte-se o sinal do seu ΔH. Ao multiplicar os coeficientes por 2, multiplica-se o ΔH por 2.',
      },
      {
        stepNumber: 3,
        title: 'Soma das Equações e Cancelamento dos Intermediários',
        formula: 'Eq. Final = Eq. A + Eq. B',
        calculation: 'Reagentes: C₆H₁₂O₆(s) + 6 O₂(g) + 4 CO₂(g) + 6 H₂O(l)\nProdutos: 6 CO₂(g) + 6 H₂O(l) + 2 C₂H₅OH(l) + 6 O₂(g)\n\nCancelamentos:\n• 6 O₂(g) cancela dos dois lados.\n• 6 H₂O(l) cancela dos dois lados.\n• 4 CO₂(g) nos reagentes simplifica com 6 CO₂(g) nos produtos ⟹ sobram 2 CO₂(g) nos produtos.\n\nEquação Global Resultante:\nC₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g)',
        result: 'Equação global idêntica à solicitada!',
        explanation: 'Todos os intermediários que não aparecem na equação alvo cancelam perfeitamente.',
      },
      {
        stepNumber: 4,
        title: 'Cálculo da Variação de Entalpia e do Valor de x',
        formula: 'ΔH_global = ΔH_A + ΔH_B',
        calculation: 'ΔH_global = -2840 kJ + 2700 kJ = -140 kJ\n\nReescrevendo na notação do enunciado:\nC₆H₁₂O₆(s) → 2 C₂H₅OH(l) + 2 CO₂(g) + 140 kJ',
        result: 'x = 140 kJ',
        explanation: 'Como a equação do enunciado inclui "+ x kJ" no lado dos produtos para denotar calor exotérmico liberado, o valor escalar de x é 140.',
      },
    ],
    finalAnswerText: 'O valor de x é 140 (são liberados 140 kJ por mol de glicose fermentada, ou ΔH = -140 kJ/mol).',
    theoreticalTip: 'A fermentação alcoólica anaeróbia pelas leveduras libera muito menos energia (140 kJ/mol) do que a respiração aeróbia completa da glicose (2840 kJ/mol). O restante da energia (~2700 kJ) fica retido na estrutura química das moléculas de etanol.',
    simulation: {
      fields: [
        { id: 'dhGlicose', label: 'Calor combustão Glicose (kJ)', unit: 'kJ', defaultValue: 2840, min: 2000, max: 3500, step: 20 },
        { id: 'dhEtanol', label: 'Calor combustão Etanol (kJ)', unit: 'kJ', defaultValue: 1350, min: 1000, max: 1800, step: 10 },
      ],
      calculate: (vals) => {
        const qGlic = vals.dhGlicose || 2840;
        const qEt = vals.dhEtanol || 1350;
        const deltaH = -qGlic + 2 * qEt;
        const xVal = -deltaH;
        return {
          results: [
            { label: 'Valor de x (calor liberado)', value: xVal.toFixed(0), unit: 'kJ' },
            { label: 'Variação de entalpia (ΔH)', value: deltaH.toFixed(0), unit: 'kJ/mol' },
            { label: 'Energia retida nos 2 etanóis', value: (2 * qEt).toFixed(0), unit: 'kJ' },
          ],
          explanation: `ΔH = -${qGlic} + (2 × +${qEt}) = ${deltaH} kJ, gerando x = ${xVal} kJ liberados na reação.`,
        };
      },
    },
  },
];
