
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [userToEdit, setUserToEdit] = useState(null);

  const handleEdit = (user) => {
    setUserToEdit(user);
  };

  const handleClose = () => {
    setUserToEdit(null);
  };

  return (
    <Provider store={store}>
      <div>
        <UserForm userToEdit={userToEdit} handleClose={handleClose} />
        <UserList handleEdit={handleEdit} />
      </div>
    </Provider>
  );
}

export default App;
