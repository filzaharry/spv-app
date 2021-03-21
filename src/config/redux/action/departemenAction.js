import Axios from "axios";
import { API_URL } from "../../utils/constants";

export const setDataDepartemen = () => (dispatch) => {
  Axios.get(`${API_URL}departemen`)
    .then((result) => {
      const responseAPI = result.data;
      // console.log(responseAPI);
      dispatch({ type: "UPDATE_DATA_DEPARTEMEN", payload: responseAPI.data });
      localStorage.setItem("departemen", JSON.stringify(result))
    })
    .catch((err) => {
      console.log("error", err);
      let collection = localStorage.getItem('departemen');
      dispatch(JSON.parse(collection));
    });
};
