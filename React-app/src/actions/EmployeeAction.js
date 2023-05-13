import axios from 'axios';

const URL = 'https://61601920faa03600179fb8d2.mockapi.io';

export const GET_LIST_EMPLOYEE = 'GET_LIST_EMPLOYEE';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DETAIL_EMPLOYEE = 'DETAIL_EMPLOYEE';

const dispatchers = (type, isLoading, data, isError) => {
  return {
    type: type,
    payload: {
      loading: isLoading,
      data: data,
      error: isError,
    },
  };
};

export const getListEmployee = () => {
  return (dispatch) => {
    // Loading dispatch
    dispatch({
      ...dispatchers(GET_LIST_EMPLOYEE, true, false, false),
    });
    // Getting Employee API
    axios({
      method: 'get',
      url: `${URL}/pegawai`,
      timeout: 12000,
    })
      .then((response) => {
        dispatch({
          ...dispatchers(GET_LIST_EMPLOYEE, false, response.data, false),
        });
      })
      .catch((err) => {
        dispatch({
          ...dispatchers(GET_LIST_EMPLOYEE, false, false, err.message),
        });
      });
  };
};

export const addEmployee = (employeeData) => {
  return (dispatch) => {
    dispatch({
      ...dispatchers(ADD_EMPLOYEE, true, false, false),
    });
    axios({
      method: 'post',
      url: `${URL}/pegawai`,
      timeout: 12000,
      data: employeeData,
    })
      .then((response) => {
        dispatch({
          ...dispatchers(ADD_EMPLOYEE, false, response.data, false),
        });
      })
      .catch((err) => {
        dispatch({
          ...dispatchers(ADD_EMPLOYEE, false, false, err.message),
        });
      });
  };
};

export const deleteEmployee = (id) => {
  return (dispatch) => {
    dispatch({
      ...dispatchers(DELETE_EMPLOYEE, true, false, false),
    });
    axios({
      method: 'delete',
      url: `${URL}/pegawai/` + id,
      timeout: 12000,
    })
      .then((response) => {
        console.log('Adding data', response.data);
        dispatch({
          ...dispatchers(DELETE_EMPLOYEE, false, response.data, false),
        });
      })
      .catch((err) => {
        dispatch({
          ...dispatchers(DELETE_EMPLOYEE, false, false, err.message),
        });
      });
  };
};

export const detailEmployee = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_EMPLOYEE,
      payload: {
        data: data,
      },
    });
  };
};

export const updateEmployee = (employee) => {
  return (dispatch) => {
    dispatch({
      ...dispatchers(UPDATE_EMPLOYEE, true, false, false),
    });
    axios({
      method: 'put',
      url: `${URL}/pegawai/` + employee.id,
      timeout: 12000,
      data: employee,
    })
      .then((response) => {
        dispatch({
          ...dispatchers(UPDATE_EMPLOYEE, false, response.data, false),
        });
      })
      .catch((err) => {
        dispatch({
          ...dispatchers(UPDATE_EMPLOYEE, false, false, err.message),
        });
      });
  };
};
