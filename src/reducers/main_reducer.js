const MainReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SYMPTOMS_DATA":
      return {
        ...state,
        symptoms: action.payload,
      };

    case "POST_SYMPTOMS_DATA":
      return {
        ...state,
        result: action.payload,
      };

    case "RESET_MAIN_VALUES":
      return {
        ...state,
        result: [],
      };

    default:
      return state;
  }
};

export default MainReducer;
