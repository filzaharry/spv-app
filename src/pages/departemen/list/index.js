import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Jumbotron } from "../../../component";
import { setDataDepartemen } from '../../../config/redux/action/departemenAction';
import { API } from '../../../config/utils/constants';


const ListDepartemen = () => {
  const history = useHistory();
  const { dataDepartemen } = useSelector((state) => state.departemenReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataDepartemen());
  }, [dispatch]);

  return (
      <div className="text-center">
        <Jumbotron jumbotronTitle="Daftar Departemen PT. Aplus Pacific" />

        {dataDepartemen.map((getDepartemenList, index) => (
            <div className="mx-auto departemen" onClick={()=> history.push(`/departemen/${getDepartemenList._id}`)}>
              <div className="row">
                <div className="image-profile">
                  <img
                    src={`${API}${getDepartemenList.image}`}
                    alt={getDepartemenList.nama_dep}
                  />
                </div>
                <div className="col-name">
                  <p className="departemen-name">{getDepartemenList.nama_dep}</p>
                  <p className="departemen-supervisor">
                    {getDepartemenList.supervisor}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
  )
}

export default ListDepartemen