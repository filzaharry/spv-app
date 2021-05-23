import { faArrowUp, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { HeroImg } from "../../../assets";
import { Back, Gap } from "../../../component";
import { API_URL_SPV } from "../../../config/utils/constants";

const ScoreListDetail = (props) => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const { karyawanId, periodeId } = useParams();
  useEffect(() => {
    const id = props.match.params.id;
    // GET periode by ID
    Axios.get(`${API_URL_SPV}periode/${periodeId}/nilaispv/${id}`)
      .then((res) => {
        // console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  }, [props, periodeId]);

  const handleRemove = (nilaiSpv) => {
    console.log("yoi",nilaiSpv);
    swal({
      title: "Are you sure?",
      text: "Jika Nilai dihapus, maka seluruh data nilai terkait akan terhapus",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // console.log(spvId);
        Axios.delete(`${API_URL_SPV}nilaispv/${nilaiSpv}`)
          .then((res) => {
            setData(res.data.data);
            history.push(`/karyawan/${karyawanId}/periode/${periodeId}`)
          })
          .catch((err) => {
            console.log("err: ", err);
          });
        swal("Data Nilai telah di hapus!", {
          icon: "success",
        });
      } else {
        swal("Periksa kembali sebelum menghapus data");
      }
    });
  };

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return (
    <div className="container">
      <Gap height={20} />
      <div className="col col-sm-4">
      <Back
          title="Detail Nilai Supervisor"
          onClick={() =>
            history.push(`/karyawan/${karyawanId}/periode/${periodeId}`)
          }
        />
        <Gap height={20} />
        <div className="row">
        <img src={HeroImg} alt="value" height={150} />
        <div className="col pt-5">
        <p className="btn btn-success ">Nilai Bulan Ini : {Math.trunc(data.hasilAkhir)}</p>
        <p onClick={()=> history.push(`/karyawan/${karyawanId}/periode/${periodeId}/nilaispv/${data._id}/edit`)} className="btn btn-warning "><FontAwesomeIcon icon={faEdit}/> Ubah</p>
        <p onClick={()=> handleRemove(data._id)} className="btn btn-danger "><FontAwesomeIcon icon={faTrash}/> Hapus</p>
        </div>
        </div>
        <Gap height={20} />
        <table className="table table-responsive table-borderless">
          <tbody>
            <tr>
              <td className="font-weight-bold">Hasil Kerja</td>
              <td className="font-weight-bold text-info">{data.hasilKerja}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Disiplin</td>
              <td className="font-weight-bold text-info">{data.disiplin}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Inisiatif</td>
              <td className="font-weight-bold text-info">{data.inisiatif}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Kejujuran</td>
              <td className="font-weight-bold text-info">{data.kejujuran}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Kerajinan</td>
              <td className="font-weight-bold text-info">{data.kerajinan}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Kerjasama</td>
              <td className="font-weight-bold text-info">{data.kerjasama}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Ketelitian</td>
              <td className="font-weight-bold text-info">{data.ketelitian}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Keterampilan</td>
              <td className="font-weight-bold text-info">
                {data.keterampilan}
              </td>
            </tr>
            <tr>
              <td className="font-weight-bold">Loyalitas</td>
              <td className="font-weight-bold text-info">{data.loyalitas}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Tanggung Jawab</td>
              <td className="font-weight-bold text-info">
                {data.tanggungJawab}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="col text-justify">
        <p>
          Apakah Tugas dan Tanggung Jawab sekarang dirasakan terlalu
          banyak/berat ? Jelaskan
        </p>
        <p className="btn btn-outline-info disabled text-info">{data.question1}</p>

        <p>
          Apakah Tugas dan Tanggung Jawab sekarang dapat ditambahkan atau
          ditingkatkan ? Jelaskan
        </p>
        <p  className="btn btn-outline-info disabled text-info">{data.question2}</p>

        <p>
          Ide dan saran untuk perbaikan departemen masing-masing agar efisian
          seperti mengurangi biaya rutin yang tidak perlu ?
        </p>
        <p  className="btn btn-outline-info disabled text-info">{data.question2}</p>

        <p>
          Bagaimana meningkatkan Koordinasi dan Komunikasi antar rekan kerja
          agar hasil kerja dapat optimal ?
        </p>
        <p  className="btn btn-outline-info disabled text-info">{data.question3}</p>

        <p>Saran dari Manager Departemen yang bersangkutan :</p>
        <p  className="btn btn-outline-info disabled text-info">{data.question4}</p>

        <p>Apakah Karyawan ini Direkomendasikan ?</p>

        {( data.rekomendasi === 5   
                  ? <p  className="text-info">Ya</p>     
                  :  <p  className="text-danger">Tidak</p>
        )}
      </div>
      <p className="float-right btn btn-info" onClick={scrollTop}><FontAwesomeIcon icon={faArrowUp} /></p>
      </div>
      <Gap height={50} />
    </div>
  );
};

export default ScoreListDetail;
