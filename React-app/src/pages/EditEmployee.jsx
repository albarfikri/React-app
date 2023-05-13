import { useState, useEffect } from 'react';
import { Card, Grid, CardContent, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../actions/EmployeeAction';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const [jsonResults, setJsonResults] = useState([]);
  const [id, setId] = useState('');
  const [nama, setNama] = useState('');
  const [jalan, setJalan] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kelurahan, setKelurahan] = useState('');

  const dispatch = useDispatch();
  const { detailEmployeeData, updateEmployeeData, updateEmployeeLoading } =
    useSelector((state) => state.employeeReducer);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then((response) => response.data.provinsi)
      .then((json) => setJsonResults(json));
  }, []);

  useEffect(() => {
    if (detailEmployeeData) {
      setId(detailEmployeeData.id);
      setNama(detailEmployeeData.nama);
      setJalan(detailEmployeeData.jalan);
      setProvinsi(detailEmployeeData.provinsi);
      setKabupaten(detailEmployeeData.kabupaten);
      setKecamatan(detailEmployeeData.kecamatan);
      setKelurahan(detailEmployeeData.kelurahan);
    }
  }, [detailEmployeeData, dispatch]);

  const handleDataSubmit = (event) => {
    //removing reloading function
    event.preventDefault();
    dispatch(
      updateEmployee({
        id: id,
        nama: nama,
        jalan: jalan,
        provinsi: provinsi,
        kabupaten: kabupaten,
        kecamatan: kecamatan,
        kelurahan: kelurahan,
      })
    );
  };

  return (
    <>
      <Typography variant="h4" component="h5" align="center">
        Edit Employee
      </Typography>

      <form onSubmit={(event) => handleDataSubmit(event)}>
        <Container maxWidth="sm" align="center" sx={{ mt: 2 }}>
          <Card>
            {updateEmployeeData && open ? (
              <Alert
                action={
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => {
                      navigate('/');
                      setOpen(false);
                    }}
                  >
                    See Result
                  </Button>
                }
              >
                Data is edit Successfully, check this out !
              </Alert>
            ) : null}
            <CardContent>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Nama"
                    variant="outlined"
                    placeholder="Masukan Nama anda"
                    value={nama}
                    onChange={(event) => setNama(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Jalan"
                    variant="outlined"
                    placeholder="Masukan Jalan"
                    value={jalan}
                    onChange={(event) => setJalan(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Autocomplete
                    disablePortal
                    id="province_list"
                    getOptionLabel={(jsonResults) => `${jsonResults.nama}`}
                    options={jsonResults}
                    onChange={(event, value) => {
                      setProvinsi(value.nama);
                    }}
                    value={console.log(provinsi)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Provinsi"
                        placeholder="Masukan Provinsi"
                      />
                    )}
                    noOptionsText={'Provinsi tidak tersedia'}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Kabupaten"
                    variant="outlined"
                    placeholder="Masukan Kabupaten"
                    value={kabupaten}
                    onChange={(event) => setKabupaten(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Kecamatan"
                    variant="outlined"
                    placeholder="Masukan Kecamatan"
                    value={kecamatan}
                    onChange={(event) => setKecamatan(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Kelurahan"
                    variant="outlined"
                    placeholder="Masukan Kelurahan"
                    value={kelurahan}
                    onChange={(event) => setKelurahan(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item sx={{ mt: 2 }}>
                  {updateEmployeeLoading ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      variant="contained"
                      endIcon={<AddIcon />}
                      type="submit"
                      fullWidth
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      Edit Data
                    </Button>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </form>
    </>
  );
};
export default EditEmployee;
