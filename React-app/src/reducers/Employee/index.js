import { GET_LIST_EMPLOYEE } from '../../actions/EmployeeAction';

const initialState = {
  getListEmployeeLoading: false,
  getListEmployeeData: false,
  getListEmployeeErr: false,
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
    default:
      return state;
  }
};

export default employee;
