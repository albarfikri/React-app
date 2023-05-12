import { useState, useEffect } from 'react';
import { Card, Grid, CardContent, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const AddEmployee = () => {
  const [jsonResults, setJsonResults] = useState([]);

  useEffect(() => {
    axios
      .get('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
      .then((response) => response.data.provinsi)
      .then((json) => setJsonResults(json));
  }, []);

  console.log(jsonResults);
  return (
    <>
      <Typography variant="h4" component="h5" align="center">
        Add New Employee
      </Typography>
      <form>
        <Container maxWidth="sm" align="center" sx={{ mt: 2 }}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    id="standard-basic"
                    label="Nama"
                    variant="outlined"
                    placeholder="Masukan Nama anda"
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
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item sx={{ mt: 2 }}>
                  <Button variant="contained" endIcon={<AddIcon />} fullWidth>
                    Add Data
                  </Button>
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
