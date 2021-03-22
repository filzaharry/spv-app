import React, { Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Gap } from "../../atoms";
import { useDispatch, useSelector } from "react-redux";
import { postToAPINilaiSPV, setCreateNilaiSPV } from "../../../config/redux/action/createNilaiSPV";
import Jumbotron from "../jumbotron";
import KategoriCheckBox from "./kategori";
import Saran from "./saran";
import swal from "sweetalert";



const FormPenilaian = (props) => {
  const { form } = useSelector((state) => state.createNilaiSPVReducer);
  const { 
    hasilKerja, 
    keterampilan, 
    tanggungJawab, 
    kerjasama,
    kerajinan, 
    disiplin, 
    ketelitian, 
    kejujuran, 
    loyalitas, 
    inisiatif,
    question1,
    question2,
    question3,
    question4,
    question5,
   } = form;
  const dispatch = useDispatch();
  const history = useHistory();
  const { karyawanId, periodeId } = useParams();

  const onSubmit = () => {
    swal({
      title: "Apakah Anda Yakin ?",
      text: "Dengan ini Anda akan mengirim nilai Karyawan Anda ke HRD",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        postToAPINilaiSPV(form, periodeId);
        history.push(`/karyawan/${karyawanId}/periode/${periodeId}/nilaispv/terkirim`)
        swal("Berhasil Terkirim!", {
          icon: "success",
        });
      } else {
        swal("Terimakasih telah melakukan penilaian");
      }
    });
    
  }

  const valueRekomendasi = () => {
    console.log('di klik');
    // const value = 3
  }


  return (
    <Fragment>
      <Jumbotron jumbotronTitle="Form Penilaian Karyawan" />
    <div className="container-sm mx-auto">
      <p className="font-weight-bold">KATEGORI</p>
      <div className="col-sm-12 pb-4">
        
        <KategoriCheckBox 
          onChangeHK={(e) => dispatch(setCreateNilaiSPV("hasilKerja", e.target.value))} valueHK={hasilKerja}
          onChangeKR={(e) => dispatch(setCreateNilaiSPV("keterampilan", e.target.value))} valueKR={keterampilan}  
          onChangeTJ={(e) => dispatch(setCreateNilaiSPV("tanggungJawab", e.target.value))} valueTJ={tanggungJawab}
          onChangeKS={(e) => dispatch(setCreateNilaiSPV("kerjasama", e.target.value))} valueKS={kerjasama}  
          onChangeDS={(e) => dispatch(setCreateNilaiSPV("disiplin", e.target.value))} valueDS={disiplin}  
          onChangeKI={(e) => dispatch(setCreateNilaiSPV("kerajinan", e.target.value))} valueKI={kerajinan} 
          onChangeKT={(e) => dispatch(setCreateNilaiSPV("ketelitian", e.target.value))} valueKT={ketelitian}  
          onChangeKJ={(e) => dispatch(setCreateNilaiSPV("kejujuran", e.target.value))} valueKJ={kejujuran}  
          onChangeLY={(e) => dispatch(setCreateNilaiSPV("loyalitas", e.target.value))} valueLY={loyalitas} 
          onChangeIN={(e) => dispatch(setCreateNilaiSPV("inisiatif", e.target.value))} valueIN={inisiatif} 
        />

      <hr className="bg-dark" />
      <p className="font-weight-bold">PERTANYAAN</p>
      <div className="col-sm-12">
        <Saran 
         onChangeQ1={(e) => dispatch(setCreateNilaiSPV("question1", e.target.value))} valueQ1={question1} saranQ1="Apakah Tugas dan Tanggung Jawab sekarang dirasakan terlalu banyak/berat ? Jelaskan" 
         onChangeQ2={(e) => dispatch(setCreateNilaiSPV("question2", e.target.value))} valueQ2={question2} saranQ2="Apakah Tugas dan Tanggung Jawab sekarang dapat ditambahkan atau ditingkatkan ? Jelaskan" 
         onChangeQ3={(e) => dispatch(setCreateNilaiSPV("question3", e.target.value))} valueQ3={question3} saranQ3="Ide dan saran untuk perbaikan departemen masing-masing agar efisian seperti mengurangi biaya rutin yang tidak perlu ?" 
         onChangeQ4={(e) => dispatch(setCreateNilaiSPV("question4", e.target.value))} valueQ4={question4} saranQ4="Bagaimana meningkatkan Koordinasi dan Komunikasi antar rekan kerja agar hasil kerja dapat optimal ?" 
         onChangeQ5={(e) => dispatch(setCreateNilaiSPV("question5", e.target.value))} valueQ5={question5} saranQ5="Saran dari Manager Departemen yang bersangkutan :" 
        />
      </div>
      </div>
      <div className="form-check ml-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="rekomendasi"
          onClick={valueRekomendasi}
          value={!valueRekomendasi ? 0 : 0.5 }
          onChange={(e) => dispatch(setCreateNilaiSPV("rekomendasi", e.target.value))}
        />
        <label className="form-check-label font-s" htmlFor="confirmAccount">
          <small>Rekomendasikan Karyawan untuk Perpanjang Masa Kontrak</small>
        </label>
        <Gap height={20} />
        <hr/>
        {/* <div className="row"> */}
          <button className="btn btn-secondary" onClick={()=> history.push(`/karyawan/${karyawanId}/periode/${periodeId}/nilaispv`)}>Kembali</button>
          <button className="btn btn-primary" style={{marginLeft: "70px"}}  onClick={onSubmit}>Kirim Nilai</button>
        {/* </div> */}
      </div>
    </div>
    </Fragment>
  );
};

export default FormPenilaian;
