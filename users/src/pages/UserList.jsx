import React from 'react'
import UsersList from '../components/Users/UserList'
import store from "../store/store";
import { Provider } from "react-redux";

const UserListPage = () => {
  return (
    <div>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </div>
  );
};

export default UserListPage;