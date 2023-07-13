export type TQuestion = {
  question: string;
  answers: TAnswer[];
  money: number;
};

export type TAnswer = {
  option: string;
  correct: boolean;
  numbering: string;
};

export type TQuestionListProps = {
  data: TQuestionList;
};

export type TQuestionList = TQuestion[];
