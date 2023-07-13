import { combineReducers } from "redux";
import {
  TOGGLE_MENU,
  NEXT_QUESTION,
  RESET_QUESTIONS,
  SHOW_WIN_AMOUNT,
  TOGGLE_BUTTON,
} from "./types";

const initialState = {
  isMenuVisible: false,
};

function menuReducer(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuVisible: !state.isMenuVisible,
      };
    default:
      return state;
  }
}

const initialButtonState = {
  isButtonDisabled: false,
};

function disableButton(state = initialButtonState, action: any) {
  switch (action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        isButtonDisabled: !state.isButtonDisabled,
      };
    default:
      return state;
  }
}

const initialStateWinAmount = {
  winAmount: 0,
  questionID: 0,
  currentQuestion: 0,
};

function questionReducer(state = initialStateWinAmount, action: any) {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        questionID: state.questionID + 1,
      };
    case RESET_QUESTIONS:
      return {
        ...state,
        questionID: (state.questionID = 0),
      };
    case SHOW_WIN_AMOUNT:
      return {
        ...state,
        winAmount: action.payload,
      };
  }
  return state;
}

export const rootReducer = combineReducers({
  menu: menuReducer,
  question: questionReducer,
  disableButton: disableButton,
});
