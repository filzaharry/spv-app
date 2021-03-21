// import HasilKerja from "./hasilKerja";
// import Keterampilan from "./keterampilan";
// import TanggungJawab from "./tanggungJawab";
// import Kerjasama from "./kerjasama";
// import Kedisiplinan from "./kedisiplinan";
// import Kerajinan from "./kerajinan";
// import Ketelitian from "./ketelitian";
// import Kejujuran from "./kejujuran";
// import Loyalitas from "./loyalitas";
// import Inisiatif from "./inisiatif";

// export {
//   HasilKerja,
//   Keterampilan,
//   TanggungJawab,
//   Kerjasama,
//   Kedisiplinan,
//   Kerajinan,
//   Ketelitian,
//   Kejujuran,
//   Loyalitas,
//   Inisiatif,
// };
import React from 'react'
import { CheckBox } from '../../../atoms'

const KategoriCheckBox = (props) => {

  return (
    <div>
      <CheckBox kategori="Hasil Kerja" onChange={props.onChangeHK} value={props.valueHK}
      id1="1" id2="2" id3="3" id4="4" id5="5"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="1" htmlFor2="2" htmlFor3="3" htmlFor4="4" htmlFor5="5"
      />

      <CheckBox kategori="Keterampilan" onChange={props.onChangeKR} value={props.valueKR}
      id1="6" id2="7" id3="8" id4="9" id5="10"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="6" htmlFor2="7" htmlFor3="8" htmlFor4="9" htmlFor5="10"
      />

      <CheckBox kategori="Tanggung Jawab" onChange={props.onChangeTJ} value={props.valueTJ}
      id1="11" id2="12" id3="13" id4="14" id5="15"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="11" htmlFor2="12" htmlFor3="13" htmlFor4="14" htmlFor5="15"
      />

      <CheckBox kategori="Kerjasama" onChange={props.onChangeKS} value={props.valueKS}
      id1="16" id2="17" id3="18" id4="19" id5="20"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="16" htmlFor2="17" htmlFor3="18" htmlFor4="19" htmlFor5="20"
      />

      <CheckBox kategori="Kedisiplinan" onChange={props.onChangeDS} value={props.valueDS}
      id1="21" id2="22" id3="23" id4="24" id5="25"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="21" htmlFor2="22" htmlFor3="23" htmlFor4="24" htmlFor5="25"
      />

      <CheckBox kategori="Kerajinan" onChange={props.onChangeKI} value={props.valueKI}
      id1="26" id2="27" id3="28" id4="29" id5="30"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="26" htmlFor2="27" htmlFor3="28" htmlFor4="29" htmlFor5="30"
      />

      <CheckBox kategori="Ketelitian" onChange={props.onChangeKT} value={props.valueKT}
      id1="31" id2="32" id3="33" id4="34" id5="35"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="31" htmlFor2="32" htmlFor3="33" htmlFor4="34" htmlFor5="35"
      />

      <CheckBox kategori="Kejujuran" onChange={props.onChangeKJ} value={props.valueKJ}
      id1="36" id2="37" id3="38" id4="39" id5="40"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="36" htmlFor2="37" htmlFor3="38" htmlFor4="39" htmlFor5="40"
      />

      <CheckBox kategori="Loyalitas" onChange={props.onChangeLY} value={props.valueLY}
      id1="41" id2="42" id3="43" id4="44" id5="45"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="41" htmlFor2="42" htmlFor3="43" htmlFor4="44" htmlFor5="45"
      />

      <CheckBox kategori="Inisiatif" onChange={props.onChangeIN} value={props.valueIN}
      id1="46" id2="47" id3="48" id4="49" id5="50"
      value1="1" value2="2" value3="3" value4="4" value5="5"
      htmlFor1="46" htmlFor2="47" htmlFor3="48" htmlFor4="49" htmlFor5="50"
      />
    </div>
  )
}

export default KategoriCheckBox
