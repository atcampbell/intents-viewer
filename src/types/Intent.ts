export interface Intent {
  id: string;
  name: string;
  description: string;
  trainingData: TrainingData;
  reply: Reply;
  selected?: boolean;
}

export interface TrainingData {
  expressionCount: number;
  expressions: Expression[];
}

export interface Expression {
  id: string;
  text: string;
}

export interface Reply {
  id: string;
  text: string;
}
