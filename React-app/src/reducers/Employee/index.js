import {
  GET_LIST_EMPLOYEE,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  DETAIL_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from '../../actions/EmployeeAction';

const initialState = {
  getListEmployeeLoading: false,
  getListEmployeeData: false,
  getListEmployeeErr: false,

  addEmployeeLoading: false,
  addEmployeeData: false,
  addEmployeeErr: false,

  deletEmployeeLoading: false,
  deleteEmployeeData: false,
  deleteEmployeeErr: false,

  updateEmployeeLoading: false,
  updateEmployeeData: false,
  updateEmployeeErr: false,

  detailEmployee: false,
};

const employee = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_EMPLOYEE:
      return {
        ...state,
        getListEmployeeLoading: action.payload.loading,
        getListEmployeeData: action.payload.data,
        getListEmployeeErr: action.payload.error,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        addEmployeeLoading: action.payload.loading,
        addEmployeeData: action.payload.data,
        addEmployeeErr: action.payload.error,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        deletEmployeeLoading: action.payload.loading,
        deleteEmployeeData: action.payload.data,
        deleteEmployeeErr: action.payload.error,
      };
    case DETAIL_EMPLOYEE:
      return {
        ...state,
        detailEmployeeData: action.payload.data,
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        updateEmployeeLoading: action.payload.loading,
        updateEmployeeData: action.payload.data,
        updateEmployeeErr: action.payload.error,
      };
    default:
      return state;
  }
};

export default employee;
