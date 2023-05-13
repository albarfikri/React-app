import { useState, useEffect } from 'react';
import { Card, Grid, CardContent, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from '../actions/EmployeeAction';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

const AddEmployee = () => {
  const [jsonResultsProvinsi, setJsonResultsProvinsi] = useState([]);
  const [jsonResultsKota, setJsonResultsKota] = useState([]);
  const [jsonResultsKecamatan, setJsonResultsKecamatan] = useState([]);
  const [nama, setNama] = useState('');
  const [jalan, setJalan] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const dispatch = useDispatch();
  const { addEmployeeLoading, addEmployeeData } = useSelector(
    (state) => state.employeeReducer
  );
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then((response) => response.data.provinsi)
      .then((json) => setJsonResultsProvinsi(json));
  }, []);

  useEffect(() => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32')
      .then((response) => response.data.kota_kabupaten)
      .then((json) => setJsonResultsKota(json));
  }, []);

  useEffect(() => {
    axios
      .get(
        'https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3214'
      )
      .then((response) => response.data.kecamatan)
      .then((json) => setJsonResultsKecamatan(json));
  }, []);

  const handleDataSubmit = (event) => {
    //removing reloading function
    event.preventDefault();
    dispatch(
      addEmployee({
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
        Add New Employee
      </Typography>

      <form onSubmit={(event) => handleDataSubmit(event)}>
        <Container maxWidth="sm" align="center" sx={{ mt: 2 }}>
          <Card>
            {addEmployeeData && open ? (
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
                Data is saved Successfully, check this out !
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
                    options={jsonResultsProvinsi}
                    onChange={(event, value) => {
                      setProvinsi(value.nama);
                    }}
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
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="outlined-select-currency"
                    select
                    align="center"
                    inputProps={{ style: { textAlign: 'center' } }}
                    label="Kabupaten"
                    variant="outlined"
                    placeholder="Masukan Kabupaten"
                    value={kabupaten}
                    onChange={(event) => setKabupaten(event.target.value)}
                    fullWidth
                    required
                  >
                    {console.log(jsonResultsKota)}
                    {jsonResultsKota.map((option) => (
                      <MenuItem key={option.id} value={option.nama}>
                        {option.nama}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    id="outlined-select-currency"
                    select
                    align="center"
                    inputProps={{ style: { textAlign: 'center' } }}
                    label="Kecamatan"
                    variant="outlined"
                    placeholder="Masukan Kabupaten"
                    value={kecamatan}
                    onChange={(event) => setKecamatan(event.target.value)}
                    fullWidth
                    required
                  >
                    {console.log(jsonResultsKecamatan)}
                    {jsonResultsKecamatan.map((option) => (
                      <MenuItem key={option.id} value={option.nama}>
                        {option.nama}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Kelurahan"
                    variant="outlined"
                    placeholder="Masukan Kelurahan"
                    onChange={(event) => setKelurahan(event.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item sx={{ mt: 2 }}>
                  {addEmployeeLoading ? (
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
                      Add Data
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
export default AddEmployee;
