import { FC } from "react";
import "./AnswerList.style.scss";
import { useNavigate } from "react-router-dom";
import { ChoiceButton } from "../../molecules/ChoiceButton/ChoiceButton";
import { useDispatch, useSelector } from "react-redux";
import {
  countWinAmount,
  handleNextQuestion,
  resetQuestions,
  toggleButton,
} from "../../../redux/actions";
import { TQuestion } from "./AnswerList.types";

type AnswerListProps = {
  questions: TQuestion[];
};

export const AnswerList: FC<AnswerListProps> = ({ questions }) => {
  const currentAnswer = useSelector((state: any) => state.question.questionID);
  useSelector((state: any) => state.disableButton.isButtonDisabled);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (currentAnswer >= questions?.length) {
    return null;
  }

  const currentQuestion = questions[currentAnswer];

  const nextQuestion = (answerIdx: number) => {
    const answer = currentQuestion.answers[answerIdx];

    setTimeout(() => {
      dispatch(toggleButton());

      if (answer.correct) {
        dispatch(handleNextQuestion());
        dispatch(countWinAmount(currentQuestion.money));
      } else {
        navigate("/millionaire-game/gameover");
        dispatch(resetQuestions());
      }
    }, 1500);
  };

  return (
    <div className="answer-list">
      <p className="question-text">{currentQuestion.question}</p>
      <div className="choice-button-list">
        {currentQuestion.answers.map((answer, answerIndex) => (
          <ChoiceButton
            key={answerIndex}
            answerNumbering={answer.numbering}
            answerOption={answer.option}
            onClick={() => nextQuestion(answerIndex)}
            isCorrect={answer.correct}
            id={answerIndex}
          />
        ))}
      </div>
    </div>
  );
};
