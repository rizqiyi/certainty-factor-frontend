import { createContext, useReducer } from "react";
import MainReducer from "../reducers/main_reducer";
import axios from "axios";
import cookie from "js-cookie";

const initialState = {
  symptoms: [],
  result: [],
};

const MainContext = createContext(initialState);

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  const index = async () => {
    try {
      const res = await axios.get(
        "https://quiet-island-64334.herokuapp.com/api/v1/symptoms",
        {
          headers: {
            "Content-Type": "application/json",
            token: cookie.get("token"),
          },
        }
      );

      dispatch({
        type: "FETCH_SYMPTOMS_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "MAIN_REQUEST_ERROR",
        payload: err.response.data.message,
      });
    }
  };

  const create = async (payload) => {
    try {
      const res = await axios.post(
        "https://quiet-island-64334.herokuapp.com/api/v1/report/create",
        { ...payload },
        {
          headers: {
            "Content-Type": "application/json",
            token: cookie.get("token"),
          },
        }
      );

      dispatch({
        type: "POST_SYMPTOMS_DATA",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "MAIN_REQUEST_ERROR",
        payload: err.response.data.message,
      });
    }
  };

  const Reset = () => {
    return dispatch({
      type: "RESET_MAIN_VALUES",
    });
  };

  return (
    <MainContext.Provider
      value={{
        symptoms: state.symptoms,
        reset: Reset,
        result: state.result,
        index,
        create,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
