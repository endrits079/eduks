import * as actionTypes from "./actions";
const initialState = {
  showModal: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.SHOW_MODAL) {
    return {
      showModal: action.showModal,
    };
  }
  return state;
};

export default reducer;
