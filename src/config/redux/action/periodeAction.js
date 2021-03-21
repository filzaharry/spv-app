import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataPeriode = (id) => (dispatch) => {
  Axios.get(`${API_URL}karyawan/${id}`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log("woy periode", responseAPI);
      dispatch({ type: "UPDATE_DATA_PERIODE", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
