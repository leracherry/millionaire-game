import "./GameStart.style.scss";
import { ContentBlock } from "../../components/molecules/ContentBlock/ContentBlock";
import HandImage from "../../assets/images/hand.png";
import { useNavigate } from "react-router-dom";

export const GameStart = () => {
  const navigate = useNavigate();

  function redirectToPlay() {
    navigate("/play");
  }

  return (
    <div className="game-start-container">
      <img src={HandImage} alt="hand" className="hand-image"></img>
      <ContentBlock
        buttonText="Start"
        paragraphText="Who wants to be a millionaire?"
        onClick={redirectToPlay}
      />
    </div>
  );
};
