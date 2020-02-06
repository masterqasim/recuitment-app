import adminStudentReducer from './adminStudentReducer'
import adminCompanyReducer from './adminCompanyReducer'
import adminPostReducer from './adminPostReducer'
import studentReducer from './student/studentReducer'
import studentJobReducer from './student/studentJobreducer'
import studentProfilsReducer from './company/studentProfileReducer'
import companyMyPostReducer from './company/companyMyPostReducer'
import applicantsReducer from './company/applicantsReducer'
import globalReducer from './globalReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    adminStudentReducer,
    adminCompanyReducer,
    adminPostReducer,
    studentReducer,
    studentJobReducer,
    studentProfilsReducer,
    companyMyPostReducer,
    applicantsReducer,
    globalReducer
  });
export default rootReducer

