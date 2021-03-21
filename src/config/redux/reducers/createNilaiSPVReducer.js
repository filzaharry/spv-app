const initialState = {
    form: {
      hasilKerja: " ",
      rekomendasi: 0
    },
  };
  
  const createNilaiSPVReducer = (state = initialState, action) => {
    if (action.type === "SET_FORM_DATA") {
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue,
        },
      };
    }
    return state;
  }
  
  export default createNilaiSPVReducer
  