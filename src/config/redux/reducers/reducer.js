import { combineReducers } from "redux";
import globalReducer from "./globalReducer";

import karyawanReducer from "./karyawanReducer";
import jabatanReducer from "./jabatanReducer";
import departemenReducer from "./departemenReducer";
import periodeReducer from "./periodeReducer";

import detailKaryawanReducer from "./detailKaryawanReducer"

import createNilaiSPVReducer from "./createNilaiSPVReducer"



const reducer = combineReducers({
  globalReducer,

  karyawanReducer,
  detailKaryawanReducer,

  jabatanReducer,

  departemenReducer,

  periodeReducer,

  createNilaiSPVReducer

});

export default reducer;
