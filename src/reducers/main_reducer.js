// Pembuatan fungsi main reducer untuk memproses aksi
// berdasarkan tipe yang telah ditentukan
const MainReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_MAIN_STATE_LOADING":
      return {
        ...state,
        is_fetching: true,
      };

    case "MAIN_STATE_LOADING":
      return {
        ...state,
        is_loading: true,
      };

    case "FETCH_SYMPTOMS_DATA":
      return {
        ...state,
        symptoms: action.payload,
        is_fetching: false,
      };

    case "POST_SYMPTOMS_DATA":
      return {
        ...state,
        is_fetching: false,
        result: action.payload,
        is_loading: false,
      };

    case "RESET_MAIN_VALUES":
      return {
        ...state,
        result: [],
        is_fetching: false,
        is_loading: false,
      };

    case "MAIN_REQUEST_ERROR":
      return {
        result: [],
        is_loading: false,
      };

    default:
      return state;
  }
};

export default MainReducer;
