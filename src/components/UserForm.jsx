
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../features/user/userSlice';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const UserForm = ({ userToEdit, handleClose }) => {
  const [user, setUser] = useState({ fullname: '', email: '', age: '', phone: '', zipcode: '', birthdate: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToEdit) {
      setUser(userToEdit); 
    }
  }, [userToEdit]);

   const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      dispatch(updateUser(user));
    } else {
      dispatch(addUser({ ...user, id: Date.now() }));
    }
    setUser({ fullname: '', email: '', age: '', phone: '', zipcode: '', birthdate: '' });
   
    handleClose();
  };

  return (
    <Container  >
      <Typography variant="h4" gutterBottom  color='black'>
        {userToEdit ? 'Edit User '  : 'Add New User'}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Age"
              type="number"
              value={user.age}
              onChange={(e) => setUser({ ...user, age: e.target.value })}
              fullWidth
              margin="normal"
            />
          </Grid>
         
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              value={user.phone}
              
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="ZIP Code"
              value={user.zipcode}
              onChange={(e) => setUser({ ...user, zipcode: e.target.value })}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Birthdate"
              type="date"
              value={user.birthdate}
              onChange={(e) => setUser({ ...user, birthdate: e.target.value })}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth  sx={{ mt: 1, width: '200px' , mb: 3}}>
          {userToEdit ? 'Update' : 'Add'}
        </Button>
      </form>
    </Container>
  );
};

export default UserForm;
