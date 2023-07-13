export type TChoiceButton = {
  onClick: (id: number) => any;
  answerNumbering?: string;
  answerOption?: string;
  isCorrect?: boolean;
  id: number;
  disabled?: boolean;
};
