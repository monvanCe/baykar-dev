export interface Data {
  time?: number;
  questions?: Response[];
  answers?: number[];
  currentQuestion?: number;
}

export interface Response {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const InitialData: Data = {
  time: undefined,
  questions: undefined,
  answers: Array.from({ length: 10 }, () => 0),
  currentQuestion: undefined,
};
