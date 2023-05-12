import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate('/add')}
      variant="contained"
      startIcon={<AddIcon />}
    >
      Add Employee
    </Button>
  );
};

export default AddButton;
