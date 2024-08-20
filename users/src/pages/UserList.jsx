import React from 'react'
import UserList from '../components/Users/UserList'
import store from "../store/store";
import { Provider } from "react-redux";

const User = () => {
  return (
    <div>
      <Provider store={store}>
        <UserList />
      </Provider>
    </div>
  );
}

export default User