import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Stack, Typography } from '@mui/material';
import EmployeeTable from '../components/EmployeeTable';
import AddEmployee from './AddEmployee';
import AddButton from '../components/AddButton';
import EditEmployee from './EditEmployee';

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
                    display="flex"
                  >
                    <Typography variant="h4" component="h5">
                      Employee List
                    </Typography>
                    <AddButton />
                  </Stack>
                  <EmployeeTable />
                </Stack>
              </Container>
            }
          />
          <Route path="/add" element={<AddEmployee />} />
          <Route path="/edit" element={<EditEmployee />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
