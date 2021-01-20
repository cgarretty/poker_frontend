import C from "./constants";

export const message = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_MESSAGE:
      return {
        message: action.message
      }
    default:
      return state;
  }
};

export const messages = (state = [], action) => {
  switch (action.type) {
    case C.ADD_MESSAGE:
      return [
        ...state,
        message({}, action)
      ];

    default:
      return state;
  }
};

export const chat = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_MESSAGE:
      return {...state,
        messages: messages(state.messages, action)
      };

    default:
      return state;
  }
};
