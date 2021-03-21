import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataKaryawan = () => (dispatch, setMode) => {
  Axios.get(`${API_URL}karyawan`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log('karyawan',responseAPI);
      dispatch({ type: "UPDATE_DATA_KARYAWAN", payload: responseAPI.data });
      localStorage.setItem("karyawan", JSON.stringify(result))
    })
    .catch((err) => {
      console.log("error", err);
      // alert("Anda berada dalam Mode Offline")
      setMode('offline')
      let collection = localStorage.getItem('karyawan');
      dispatch(JSON.parse(collection));
    });
};
