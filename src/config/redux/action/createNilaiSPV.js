import Axios from "axios";
import { API_URL_SPV } from "../../utils/constants";

export const setCreateNilaiSPV = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

//  CREATE AND UPDATE ACTION

export const postToAPINilaiSPV = (form, periodeId) => {
  const data = new FormData();
  data.append("hasilKerja", form.hasilKerja);
  data.append("keterampilan", form.keterampilan);
  data.append("tanggungJawab", form.tanggungJawab);
  data.append("kerjasama", form.kerjasama);
  data.append("disiplin", form.disiplin);
  data.append("kerajinan", form.kerajinan);
  data.append("ketelitian", form.ketelitian);
  data.append("kejujuran", form.kejujuran);
  data.append("loyalitas", form.loyalitas);
  data.append("inisiatif", form.inisiatif);
  data.append("question1", form.question1);
  data.append("question2", form.question2);
  data.append("question3", form.question3);
  data.append("question4", form.question4);
  data.append("question5", form.question5);
  data.append("rekomendasi", form.rekomendasi);

  Axios.post(`${API_URL_SPV}periode/${periodeId}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  })
    .then((res) => {
      console.log("tambah nilai dari Supervisor sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};

export const updateToAPINilaiSPV = (form, periodeId, spvId) => {
  const data = new FormData();
  data.append("hasilKerja", form.hasilKerja);
  data.append("keterampilan", form.keterampilan);
  data.append("tanggungJawab", form.tanggungJawab);
  data.append("kerjasama", form.kerjasama);
  data.append("disiplin", form.disiplin);
  data.append("kerajinan", form.kerajinan);
  data.append("ketelitian", form.ketelitian);
  data.append("kejujuran", form.kejujuran);
  data.append("loyalitas", form.loyalitas);
  data.append("inisiatif", form.inisiatif);
  data.append("question1", form.question1);
  data.append("question2", form.question2);
  data.append("question3", form.question3);
  data.append("question4", form.question4);
  data.append("question5", form.question5);
  data.append("rekomendasi", form.rekomendasi);

  Axios.put(`${API_URL_SPV}periode/${periodeId}/nilaispv/${spvId}`, data)
    .then((res) => {
      console.log("Ubah data nilai Supervisor sukses :", res);
    })
    .catch((err) => {
      console.log("err :", err);
    });
};
