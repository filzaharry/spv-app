import axios from "axios";
import { API_URL } from "../../utils/constants";

export const GET_KARYAWAN_LIST = "GET_KARYAWAN_LIST";
export const GET_KARYAWAN_DETAIL = "GET_KARYAWAN_DETAIL";
export const POST_KARYAWAN_ADD = "POST_KARYAWAN_ADD";
export const PUT_KARYAWAN_EDIT = "PUT_KARYAWAN_EDIT";

export const GET_KARYAWAN_FILTER_DEPARTEMEN = "GET_KARYAWAN_FILTER_DEPARTEMEN";


export const karyawanAction = () => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}karyawan`)
      .then(function (response) {
        // handle success
        // console.log(response.data.data);
        dispatch({
          type: GET_KARYAWAN_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_KARYAWAN_LIST,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};

export const karyawanDetailAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(`${API_URL}karyawan/${id}`)
      .then(function (response) {
        // handle success
        // console.log("dari folder action bro",response);
        dispatch({
          type: GET_KARYAWAN_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: GET_KARYAWAN_DETAIL,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};

export const karyawanAddAction = (data) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .post(`${API_URL}karyawan`, data)
      .then(function (response) {
        // handle success
        dispatch({
          type: POST_KARYAWAN_ADD,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: POST_KARYAWAN_ADD,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};

export const karyawanUpdateAction = (data, id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .put(`${API_URL}karyawan/${id}`, data)
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: PUT_KARYAWAN_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        dispatch({
          type: PUT_KARYAWAN_EDIT,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};

export const karyawanDeleteAction = (id) => {
  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .delete(
        `${API_URL}karyawan/${id}`
      )
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
};


export const karyawanFilterDepartemenAction = () => {

  return (dispatch) => {
    // Make a request for a user with a given ID
    axios
      .get(
        `${API_URL}karyawan?departemen.nama_dep=Accounting`
      )
      .then(function (response) {
        // handle success
        console.log(response);
        dispatch({
          type: GET_KARYAWAN_FILTER_DEPARTEMEN,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_KARYAWAN_FILTER_DEPARTEMEN,
          payload: {
            data: false,
            errorMessage: false,
          },
        });
      });
  };
};
