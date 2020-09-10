import {
  RESET_ABSCENCE,
  ORDER_NOTES,
  INCREMENT,
  DECREMENT,
} from "../constants/actions";

export const resetAbscence = () => {
  return {
    type: RESET_ABSCENCE,
  };
};

export const orderNotes = () => {
  return {
    type: ORDER_NOTES,
  };
};

export const increment = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const decrement = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
