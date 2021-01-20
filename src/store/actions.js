import C from "./constants";

export const addMessage = message => {
  return ({
    type: C.ADD_MESSAGE,
    message: message
  });
};
