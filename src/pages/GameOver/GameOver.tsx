import "./GameOver.style.scss";
import { ContentBlock } from "../../components/molecules/ContentBlock/ContentBlock";
import HandImage from "../../assets/images/hand.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const GameOver = () => {
  const navigate = useNavigate();
  const winAmount = useSelector((state: any) => state.question.winAmount);

  function redirectToPlay() {
    navigate("/millionaire-game");
  }

  return (
    <div className="game-over-container">
      <img src={HandImage} alt="hand" className="hand-image-game-over"></img>
      <ContentBlock
        buttonText="Try again"
        paragraphText={`$${winAmount.toLocaleString("en-US")}`}
        scoreText="Total score:"
        onClick={redirectToPlay}
      />
    </div>
  );
};
