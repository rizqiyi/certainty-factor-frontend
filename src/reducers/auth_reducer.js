// Pembuatan fungsi auth reducer untuk memproses aksi
// berdasarkan tipe yang telah ditentukan
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_STATE_LOADING":
      return {
        ...state,
        is_loading: true,
      };

    case "REGISTER_ACCOUNT":
      return {
        ...state,
        message: action.payload,
        is_error_register: false,
        is_error_login: false,
        is_success_register: true,
        is_loading: false,
      };

    case "LOGIN_ACCOUNT":
      return {
        ...state,
        message: action.payload.message,
        is_error_login: false,
        is_error_register: false,
        is_success_register: false,
        is_loading: false,
        token: action.payload.token,
      };

    case "USER_LOGOUT":
    case "RESET_VALUES":
      return {
        message: "",
        is_error_register: false,
        is_success_register: false,
        is_error_login: false,
        is_loading: false,
      };

    case "REGISTER_ACCOUNT_FAIL":
      return {
        ...state,
        message: action.payload,
        is_error_register: true,
        is_error_login: false,
        is_success_register: false,
        is_loading: false,
      };

    case "LOGIN_ACCOUNT_FAIL":
      return {
        ...state,
        message: action.payload,
        is_error_login: true,
        is_error_register: false,
        is_success_register: false,
        is_loading: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
