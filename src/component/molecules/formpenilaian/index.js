import React, { Fragment, useState } from "react";
import Saran from "./saran";
import { Gap } from "../../atoms";
import { Link, useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import { HasilKerja, Inisiatif, Kedisiplinan, Kejujuran, Kerajinan, Kerjasama, Ketelitian, Keterampilan, Loyalitas, TanggungJawab } from "./kategori";
import { API_URL_SPV } from "../../../config/utils/constants";
import Jumbotron from "../jumbotron";




const FormPenilaian = () => {
  
  const [hasilKerja, setHasilKerja] = useState("");
  const [keterampilan, setKeterampilan] = useState("");
  const [tanggungJawab, setTanggungJawab] = useState("");
  const [kerjasama, setKerjasama] = useState("");
  const [disiplin, setDisiplin] = useState("");
  const [kerajinan, setKerajinan] = useState("");
  const [ketelitian, setKetelitian] = useState("");
  const [kejujuran, setKejujuran] = useState("");
  const [loyalitas, setLoyalitas] = useState("");
  const [inisiatif, setInisiatif] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [rekomendasi, setRekomendasi] = useState("");
  const [error, setError] = useState("");

  const changeHasilKerja = (e) => {
    const value = e.target.value;
    setHasilKerja(value);
    setError('')
  };
  const changeKeterampilan = (e) => {
    const value = e.target.value;
    setKeterampilan(value);
    setError('')
  };
  const changeTanggungJawab = (e) => {
    const value = e.target.value;
    setTanggungJawab(value);
    setError('')
  };
  const changeKerjasama = (e) => {
    const value = e.target.value;
    setKerjasama(value);
    setError('')
  };
  const changeDisiplin = (e) => {
    const value = e.target.value;
    setDisiplin(value);
    setError('')
  };
  const changeKerajinan = (e) => {
    const value = e.target.value;
    setKerajinan(value);
    setError('')
  };
  const changeKetelitian = (e) => {
    const value = e.target.value;
    setKetelitian(value);
    setError('')
  };
  const changeKejujuran = (e) => {
    const value = e.target.value;
    setKejujuran(value);
    setError('')
  };
  const changeLoyalitas = (e) => {
    const value = e.target.value;
    setLoyalitas(value);
    setError('')
  };
  const changeInisiatif = (e) => {
    const value = e.target.value;
    setInisiatif(value);
    setError('')
  };


  const changeQuestion1 = (e) => {
    const value = e.target.value;
    setQuestion1(value);
    setError('')
  };
  const changeQuestion2 = (e) => {
    const value = e.target.value;
    setQuestion2(value);
    setError('')
  };
  const changeQuestion3 = (e) => {
    const value = e.target.value;
    setQuestion3(value);
    setError('')
  };
  const changeQuestion4 = (e) => {
    const value = e.target.value;
    setQuestion4(value);
    setError('')
  };
  const changeQuestion5 = (e) => {
    const value = e.target.value;
    setQuestion5(value);
    setError('')
  };


  const changeRekomendasi = (e) => {
    const value = e.target.value;
    setRekomendasi(value);
    setError('')
  };


  const history = useHistory();
  const { id } = useParams();
  const submitNilai = () => {
    // console.log("id", id);
    const data = {
      hasilKerja: hasilKerja*20,
      keterampilan: keterampilan*20,
      tanggungJawab: tanggungJawab*20,
      kerjasama: kerjasama*20,
      disiplin: disiplin*20,
      kerajinan: kerajinan*20,
      ketelitian: ketelitian*20,
      kejujuran: kejujuran*20,
      loyalitas: loyalitas*20,
      inisiatif: inisiatif*20,
      question1: question1*20,
      question2: question2*20,
      question3: question3*20,
      question4: question4*20,
      question5: question5*20,
      rekomendasi: rekomendasi*20
    }

    // console.log(data)
    
    Axios
      .post(`${API_URL_SPV}periode/${id}`, data)
      .then((result) => {
        if (result) {
          if(result.data){
            history.push("nilai/terkirim");
            setHasilKerja("");
            setKeterampilan("");
            setTanggungJawab("");
            setKerjasama("");
            setDisiplin("");
            setKerajinan("");
            setKetelitian("");
            setKejujuran("");
            setLoyalitas("");
            setInisiatif("");
            setQuestion1("");
            setQuestion2("");
            setQuestion3("");
            setQuestion4("");
            setQuestion5("");
            setRekomendasi("");
          }
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
    
  };

  return (
    <Fragment>
      <Jumbotron jumbotronTitle="Form Penilaian Karyawan" />
    
    <div className="container-sm justify-content-center">
      <p className="font-weight-bold">KATEGORI</p>
      <div className="col-sm-12 pb-4">
        {error && (
            <div className="alert alert-danger">
            <p>{error}</p>
          </div>

          )}
        

        <HasilKerja  onChange={changeHasilKerja} kategori="Hasil Kerja / Kualitas Kerja" />
        <Keterampilan  onChange={changeKeterampilan} kategori="Keterampilan Kerja" />
        <TanggungJawab  onChange={changeTanggungJawab} kategori="Tanggung Jawab" />
        <Kerjasama  onChange={changeKerjasama} kategori="Kerjasama dengan Rekan Kerja" />
        <Kedisiplinan  onChange={changeDisiplin} kategori="Kedisiplinan" />
        <Kerajinan  onChange={changeKerajinan} kategori="Kerajinan" />
        <Ketelitian  onChange={changeKetelitian} kategori="Ketelitian" />
        <Kejujuran  onChange={changeKejujuran} kategori="Kejujuran" />
        <Loyalitas  onChange={changeLoyalitas} kategori="Loyalitas" />
        <Inisiatif  onChange={changeInisiatif} kategori="Inisiatif/Prakarsa & Kreatif" />
      </div>
      <hr className="bg-dark" />
      <p className="font-weight-bold">PERTANYAAN</p>
      <div className="col-sm-12">
        <Saran onChange={changeQuestion1} saran="Apakah Tugas dan Tanggung Jawab sekarang dirasakan terlalu banyak/berat ? Jelaskan" />
        <Saran onChange={changeQuestion2} saran="Apakah Tugas dan Tanggung Jawab sekarang dapat ditambahkan atau ditingkatkan ? Jelaskan" />
        <Saran onChange={changeQuestion3} saran="Ide dan saran untuk perbaikan departemen masing-masing agar efisian seperti mengurangi biaya rutin yang tidak perlu ?" />
        <Saran onChange={changeQuestion4} saran="Bagaimana meningkatkan Koordinasi dan Komunikasi antar rekan kerja agar hasil kerja dapat optimal ?" />
        <Saran onChange={changeQuestion5} saran="Saran dari Manager Departemen yang bersangkutan :" />
      </div>

      <div className="form-check ml-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="confirmAccount"
          value="3"
          onChange={changeRekomendasi}
        />
        <label className="form-check-label font-s" htmlFor="confirmAccount">
          <small>Rekomendasikan Karyawan untuk Perpanjang Masa Kontrak</small>
        </label>
      </div>
      <hr className="bg-dark" />
      <div className="form-check ml-3">
        <input className="form-check-input" type="checkbox" id="confirmValue" />
        <label className="form-check-label font-s" htmlFor="confirmValue">
          <small>
            Dengan ini saya membuat penilaian dengan sebenar-benarnya.
            <span className="text-primary">
              Periksa kembali penilaian Anda sebelum menekan tombol Kirim
            </span>
          </small>
        </label>
      </div>
      <div className="container row pt-4 mx-auto">
        <Link
          className="btn btn-secondary"
          style={{ width: "120px" }}
          to="/karyawan"
        >
          Batal
        </Link>
        <Link to="nilai/terkirim"
          onClick={submitNilai}
          className="btn btn-primary ml-auto"
          style={{ width: "120px" }}
        >
          Kirim
        </Link>
      </div>
      <Gap height={50} />
    </div>
    </Fragment>
  );
};

export default FormPenilaian;
