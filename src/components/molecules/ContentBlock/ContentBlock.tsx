import { FC } from "react";
import "./ContentBlock.style.scss";
import { Button } from "../../atoms/Button/Button";
import { TContentBlock } from "./ContentBlock.types";

export const ContentBlock: FC<TContentBlock> = ({
  onClick,
  buttonText,
  paragraphText,
  scoreText,
}) => {
  return (
    <div className={scoreText ? "game-end-block" : "game-start-block"}>
      {scoreText ? <p className="total-score-paragraph">{scoreText}</p> : null}
      <p className="game-start-paragraph">{paragraphText}</p>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};
