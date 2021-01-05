import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { periodeAction } from "../../config/actions/periode";
import Gap from "../../component/atoms/Gap";
import "./periode.scss";
import moment from "moment";

const mapStateToProps = (state) => {
  return {
    getPeriodeList: state.periode.getPeriodeList,
    errorPeriodeList: state.periode.errorPeriodeList,
  };
};

class SelectPeriode extends Component {
  componentDidMount() {
    this.props.dispatch(periodeAction());
  }
  render() {
    const periode = this.props.getPeriodeList.data;
    // console.log("data Input periode:", this.props.getPeriodeList.data);
    return (
      <div className="container-sm">
        <div className="col-sm-12">
          <Gap height={20} />
          <Link to="/profil" className="btn btn-info">
            Kembali
          </Link>
          <Gap height={20} />
          <h5 className="font-weight-bold">Pilih Periode</h5>

            {periode &&
              periode.map((getPeriodeList) => (
                <Link to={`/periode/${getPeriodeList._id}`}>
                <div className="periode">
                  <div className="row">
                    <div className="col-date">
                      <p className="period-text-1">Mulai : </p>
                      <p className="period-text-2 pb-2 text-secondary">{moment(getPeriodeList.tglMulai).subtract(10, 'days').format('LL')}</p>
                      <p className="period-text-1">Selesai : </p>
                      <p className="period-text-2 pb-2 text-secondary">{moment(getPeriodeList.tglSelesai).subtract(10, 'days').format('LL')}</p>
                    </div>
                    <div className="col-order ml-auto">
                      <p className="period-order">{getPeriodeList.periode}</p>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(SelectPeriode);
