export interface GrammarPoint {
  id: string;
  title: string;
  explanation: string;
  examples: Example[];
  order: number;
}

export interface Example {
  sentence: string;
  type: 'simple' | 'complex';
}
