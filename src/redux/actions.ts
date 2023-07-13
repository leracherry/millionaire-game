import {
  NEXT_QUESTION,
  RESET_QUESTIONS,
  SHOW_WIN_AMOUNT,
  TOGGLE_BUTTON,
  TOGGLE_MENU,
} from "./types";

export function toggleMenu() {
  return {
    type: TOGGLE_MENU,
  };
}

export const toggleButton = () => {
  return {
    type: TOGGLE_BUTTON,
  };
};

export function handleNextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}

export function resetQuestions() {
  return {
    type: RESET_QUESTIONS,
  };
}

export function countWinAmount(winAmount: number) {
  return {
    type: SHOW_WIN_AMOUNT,
    payload: winAmount,
  };
}
