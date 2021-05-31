import { createContext, useReducer } from "react";
import AuthReducer from "../reducers/auth_reducer";
import axios from "axios";
import cookies from "js-cookie";

const initialState = {
  message: "",
  is_error_register: false,
  is_error_login: false,
  token: cookies.get("jwtToken"),
  account_id: localStorage.getItem("account_id"),
};

const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const Register = async ({ ...payload }) => {
    try {
      const res = await axios.post(
        "https://quiet-island-64334.herokuapp.com/api/v1/auth/register",
        { ...payload }
      );

      dispatch({
        type: "REGISTER_ACCOUNT",
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: "REGISTER_ACCOUNT_FAIL",
        payload: err.response.data.message,
      });
    }
  };

  const Login = async (payload, redirect) => {
    try {
      const res = await axios.post(
        "https://quiet-island-64334.herokuapp.com/api/v1/auth/login",
        { ...payload }
      );

      cookies.set("token", res.data.token);

      localStorage.setItem("account_id", res.data ? res.data.data._id : "");

      dispatch({
        type: "LOGIN_ACCOUNT",
        payload: {
          message: res.data.message,
          token: res.data.token,
        },
      });

      redirect();
    } catch (err) {
      dispatch({
        type: "LOGIN_ACCOUNT_FAIL",
        payload: err.response.data.message,
      });
    }
  };

  const Reset = () => {
    return dispatch({
      type: "RESET_VALUES",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        message: state.message,
        is_error_register: state.is_error_register,
        account_id: state.account_id,
        register: Register,
        login: Login,
        reset: Reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
