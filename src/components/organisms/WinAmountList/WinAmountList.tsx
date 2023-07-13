import { FC } from "react";
import "./WinAmountList.style.scss";
import { WinAmount } from "../../molecules/WinAmount/WinAmount";
import { TQuestion } from "../AnswerList/AnswerList.types";

export type WinAmountListProps = {
  data: TQuestion[];
};

export const WinAmountList: FC<WinAmountListProps> = ({ data }) => {
  return (
    <div className="win-amount-list">
      {data.map((question: TQuestion, questionIndex: number) => (
        <WinAmount
          key={questionIndex}
          amount={question.money}
          questionIndex={questionIndex}
        />
      ))}
    </div>
  );
};
