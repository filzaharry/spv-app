import { combineReducers } from 'redux'
import karyawan from './karyawan'
import departemen from './departemen'
import periode from './periode'

export default combineReducers({
    karyawan,
    departemen,
    periode,
})