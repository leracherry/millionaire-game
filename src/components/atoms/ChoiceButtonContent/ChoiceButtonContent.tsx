import { FC } from "react";
import "./ChoiceButtonContent.style.scss";
import { TChoiceButtonText } from "./ChoiceButtonContent.types";

export const ChoiceButtonContent: FC<TChoiceButtonText> = ({
  answerNumbering,
  answerOption,
}) => {
  return (
    <span className="choice-button-text">
      <span className="answer-numbering">{answerNumbering}</span>
      <span className="answer-option">{answerOption}</span>
    </span>
  );
};
