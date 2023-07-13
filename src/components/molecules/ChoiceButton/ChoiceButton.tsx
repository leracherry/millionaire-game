import "./ChoiceButton.style.scss";
import { ReactComponent as ChoiceButtonSVG } from "../../../assets/icons/choiceButton.svg";
import { TChoiceButton } from "./ChoiceButton.types";
import { ReactComponent as ChoiceButtonVektorSVG } from "../../../assets/icons/choiceButtonVektor.svg";
import { FC, useState, useEffect } from "react";
import { ChoiceButtonContent } from "../../atoms/ChoiceButtonContent/ChoiceButtonContent";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../../../redux/actions";

export const ChoiceButton: FC<TChoiceButton> = ({
  onClick,
  answerNumbering,
  answerOption,
  isCorrect,
  id,
}) => {
  const isButtonDisabled = useSelector(
    (state: any) => state.disableButton.isButtonDisabled
  );
  const dispatch = useDispatch();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (isButtonClicked) {
      setIsButtonClicked(isButtonDisabled);
    }
  }, [isButtonDisabled, isButtonClicked]);

  const handleOnClick = () => {
    if (!isButtonClicked && !isButtonDisabled) {
      setIsButtonClicked(true);
      dispatch(toggleButton());
      onClick(id);
    }
  };

  let className = "svg-button";
  if (isButtonClicked) {
    if (isCorrect) {
      className += " right-answer";
    } else {
      className += " wrong-answer";
    }
  }

  return (
    <div className="choice-button">
      <button className={className} onClick={handleOnClick}>
        <ChoiceButtonVektorSVG className="vektor" stroke="#D0D0D8" />
        <ChoiceButtonSVG className="svg-button" fill="white" stroke="#D0D0D8" />
        <ChoiceButtonContent
          answerNumbering={answerNumbering}
          answerOption={answerOption}
        />
        <ChoiceButtonVektorSVG className="vektor" stroke="#D0D0D8" />
      </button>
    </div>
  );
};
