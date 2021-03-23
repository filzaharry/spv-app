import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataPeriode = (id) => (dispatch, setMode) => {
  Axios.get(`${API_URL}karyawan/${id}`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log("woy periode", responseAPI);
      dispatch({ type: "UPDATE_DATA_PERIODE", payload: responseAPI.data });
      localStorage.setItem("karyawan", JSON.stringify(result))
    })
    .catch((err) => {
      console.log("error", err);
      setMode('offline')
      let collection = localStorage.getItem('karyawan');
      dispatch(JSON.parse(collection));
    });
};
