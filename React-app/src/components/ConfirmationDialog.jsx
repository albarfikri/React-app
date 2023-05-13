import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../actions/EmployeeAction';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog = ({ openDialog, setOpenData, id }) => {
  console.log('dari button', openDialog);
  const { getListEmployeeLoading, getListEmployeeData, getListEmployeeErr } =
    useSelector((state) => state.employeeReducer);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Dialog
          open={openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => {
            setOpenData(false);
          }}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            {'Are you sure you want delete this file ?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              The file will be deleted permanently once you click Delete Button
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpenData(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteEmployee(id));
                setOpenData(false);
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default ConfirmationDialog;
