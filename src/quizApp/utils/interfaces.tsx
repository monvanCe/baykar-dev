export interface Question {
  question: string;
  text: string;
}

export interface Data {
  time?: number;
  questions?: Question[];
  answers?: number[];
  currentQuestion?: number;
}

export const initialData: Data = {
  time: undefined,
  questions: undefined,
  answers: undefined,
  currentQuestion: undefined,
};
