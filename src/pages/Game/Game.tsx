import { useEffect, useState } from "react";
import "./Game.style.scss";
import { AnswerList } from "../../components/organisms/AnswerList/AnswerList";
import data from "../../data/data.json";
import MobileMenu from "../../components/atoms/MobileMenu/MobileMenu";
import { WinAmountList } from "../../components/organisms/WinAmountList/WinAmountList";

export const Game = () => {
  const { questions } = data;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="game-container">
      <div className="left-content">
        <AnswerList questions={questions} />
      </div>
      {windowWidth < 769 ? (
        <MobileMenu data={questions} />
      ) : (
        <div className="right-content">
          <WinAmountList data={questions} />
        </div>
      )}
    </div>
  );
};
