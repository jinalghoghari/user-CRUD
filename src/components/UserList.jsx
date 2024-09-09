
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/user/userSlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const UserList = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>ZIP Code</TableCell>
            <TableCell>Birthdate</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.zipcode}</TableCell>
              <TableCell>{user.birthdate}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(user)}>Edit</Button>
                <Button onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
