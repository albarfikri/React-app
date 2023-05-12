import axios from 'axios';

const URL = 'https://61601920faa03600179fb8d2.mockapi.io';

export const GET_LIST_EMPLOYEE = 'GET_LIST_EMPLOYEE';

export const getListEmployee = () => {
  console.log('2. Entering Action');
  return (dispatch) => {
    // Loading dispatch
    dispatch({
      type: GET_LIST_EMPLOYEE,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });
    // Getting Employee API
    axios({
      method: 'get',
      url: `${URL}/pegawai`,
      timeout: 12000,
    })
      .then((response) => {
        console.log('3. Successfully getting data : ', response.data);
        dispatch({
          type: GET_LIST_EMPLOYEE,
          payload: {
            loading: false,
            data: response.data,
            error: false,
          },
        });
      })
      .catch((err) => {
        console.log('3. Failed getting data : ', err);
        dispatch({
          type: GET_LIST_EMPLOYEE,
          payload: {
            loading: false,
            data: false,
            error: err.message,
          },
        });
      });
  };
};

// function dispatchers(type, isLoading, data, isError) {
//   return {
//     type: type,
//     payload: {
//       loading: isLoading,
//       data: data,
//       error: isError,
//     },
//   };
// }
