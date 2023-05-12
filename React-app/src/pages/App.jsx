import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Stack, Typography } from '@mui/material';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployee from './AddEmployee';
import AddButton from '../components/AddButton';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container maxWidth="xl">
                <Stack
                  display="flex"
                  component="span"
                  marginLeft="auto"
                  marginRight="auto"
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-evenly"
                    alignItems="center"
                    component="span"
                    display="flex"
                  >
                    <Typography variant="h4" component="h5">
                      Employee List
                    </Typography>
                    <AddButton />
                  </Stack>
                  <EmployeeTable sx={{ mt: 2 }} />
                </Stack>
              </Container>
            }
          />
          <Route path="/add" element={<AddEmployee />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
