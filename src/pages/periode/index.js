import React, { useEffect } from "react";
import Gap from "../../component/atoms/Gap";
import "./periode.scss";
import moment from "moment";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataPeriode } from "../../config/redux/action/periodeAction";
import { Spinner } from "react-bootstrap";
import { Back } from "../../component";

const Periode = (props) => {
  const history = useHistory();
  const { dataPeriode } = useSelector((state) => state.periodeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = props.match.params.id;
    dispatch(setDataPeriode(id));
  }, [props, dispatch]);

  const periode = dataPeriode.periodeId;
  if (periode) {
    return (
      <div className="container-sm">
        <div className="col-sm-12">
          <Gap height={20} />
          <Back onClick={()=> history.push(`/karyawan/${dataPeriode._id}`)} title="Periode" />
          <Gap height={20} />
          <div>
            {periode.map((infoPeriode) => (
              <div
                className="periode"
                onClick={() => history.push(`/karyawan/${dataPeriode._id}/periode/${infoPeriode._id}`)}
              >
                <div className="row">
                  <div className="col-date">
                    <p className="period-text-1">Mulai : </p>
                    <p className="period-text-2 pb-2 text-secondary">
                      {moment(infoPeriode.tglMulai)
                        .subtract(10, "days")
                        .format("LL")}
                    </p>
                    <p className="period-text-1">Selesai : </p>
                    <p className="period-text-2 pb-2 text-secondary">
                      {moment(infoPeriode.tglSelesai)
                        .subtract(10, "days")
                        .format("LL")}
                    </p>
                  </div>
                  <div className="col-order ml-auto">
                    <p className="period-order">{infoPeriode.periodeKe}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="text-center mt-4">
      <Spinner type="grow" variant="warning" />
    </div>
  );
};
export default withRouter(Periode);
