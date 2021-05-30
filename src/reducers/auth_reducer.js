const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_ACCOUNT":
      return {
        ...state,
        message: action.payload,
        is_error_register: false,
      };

    case "LOGIN_ACCOUNT":
      return {
        ...state,
        message: action.payload.message,
        is_error_login: false,
        token: action.payload.token,
      };

    case "RESET_VALUES":
      return {
        message: "",
        is_error_register: false,
        is_error_login: false,
      };

    case "REGISTER_ACCOUNT_FAIL":
      return {
        ...state,
        message: action.payload,
        is_error_register: true,
      };

    case "LOGIN_ACCOUNT_FAIL":
      return {
        ...state,
        message: action.payload,
        is_error_login: true,
      };

    default:
      return state;
  }
};

export default AuthReducer;
