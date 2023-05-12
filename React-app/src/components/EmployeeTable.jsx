import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListEmployee } from '../actions/EmployeeAction';

function EmployeeTable() {
  const { getListEmployeeLoading, getListEmployeeData, getListEmployeeErr } =
    useSelector((state) => state.employeeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('1. use effect component does mount');
    dispatch(getListEmployee());
  }, [dispatch]);

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: 'max-content',
          // padding: 1,
          margin: 'auto',
          mt: 2,
        }}
      >
        <Table
          sx={{ width: 650 }}
          aria-label="simple table"
          fixedHeader={false}
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '16%' }}>Nama</TableCell>
              <TableCell align="center" style={{ width: '16%' }}>
                Jalan
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                Provinsi
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                Kota/Kabupaten
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                Kecamatan
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                Kelurahan
              </TableCell>
              <TableCell align="center" style={{ width: '20%' }}>
                <b>Action</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getListEmployeeData ? (
              getListEmployeeData.map((employee) => {
                return (
                  <TableRow
                    key={employee.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {employee.nama}
                    </TableCell>
                    <TableCell align="left">{employee.jalan}</TableCell>
                    <TableCell align="center">{employee.provinsi}</TableCell>
                    <TableCell align="center">{employee.kabupaten}</TableCell>
                    <TableCell align="center">{employee.kecamatan}</TableCell>
                    <TableCell align="center">{employee.kelurahan}</TableCell>
                    <TableCell align="center">
                      <Box display="flex">
                        <IconButton aria-label="delete">
                          <ModeIcon color="success" />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : getListEmployeeLoading ? (
              <p>Loading...</p>
            ) : (
              <p>
                {getListEmployeeErr
                  ? getListEmployeeErr
                  : console.log(getListEmployeeErr)}
              </p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default EmployeeTable;
