import { createContext, useReducer } from "react";
import MainReducer from "../reducers/main_reducer";
import axios from "axios";
import cookie from "js-cookie";

const initialState = {
  symptoms: [],
  result: [],
  is_loading: false,
  is_fetching: false,
};

// inisialisasi main state management menggunakan context pada react
const MainContext = createContext(initialState);

// fungsi main provider untuk share main data dan main fungsi ke semua component
const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, initialState);

  // fungsi index untuk mengambil data gejala dari server
  const index = async () => {
    try {
      dispatch({
        type: "FETCH_MAIN_STATE_LOADING",
      });

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

  // fungsi create untuk insert data gejala dari server dan memproses menjadi nilai cf dll
  const create = async (payload) => {
    try {
      dispatch({
        type: "MAIN_STATE_LOADING",
      });

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

  // Fungsi reset untuk reset value yang sudah diproses menjadi default kembali
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
        is_loading: state.is_loading,
        is_fetching: state.is_fetching,
        index,
        create,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
