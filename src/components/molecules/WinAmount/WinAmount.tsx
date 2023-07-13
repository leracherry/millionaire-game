import "./WinAmount.style.scss";
import { ReactComponent as WinAmountSVG } from "../../../assets/icons/winAmount.svg";
import { ReactComponent as ChoiceButtonVektorSVG } from "../../../assets/icons/choiceButtonVektor.svg";
import { FC } from "react";
import { useSelector } from "react-redux";
import { TWinAmount } from "./WinAmount.types";

export const WinAmount: FC<TWinAmount> = ({ amount, questionIndex }) => {
  const currentQuestion = useSelector((state: any) => state.question);

  let paragraph = "win-amount-paragraph";
  let winSVG = "win-amount-svg";
  let vektorSVG = "win-amount-vektor";

  if (questionIndex === currentQuestion.questionID) {
    winSVG += " current-amount";
    vektorSVG += " current-amount";
    paragraph += " current-amount";
  } else if (questionIndex < currentQuestion.questionID) {
    paragraph += " less-amount";
  }

  return (
    <div className="win-amount-container">
      <button className="win-amount-svg">
        <ChoiceButtonVektorSVG className={vektorSVG} stroke="#D0D0D8" />
        <WinAmountSVG className={winSVG} fill="white" stroke="#D0D0D8" />
        <p className={paragraph}>{`$${amount.toLocaleString("en-US")}`}</p>
        <ChoiceButtonVektorSVG className={vektorSVG} stroke="#D0D0D8" />
      </button>
    </div>
  );
};
