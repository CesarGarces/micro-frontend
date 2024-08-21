
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/userSlice";
import {
  Container,
  Title,
  UserListContainer,
  UserItem,
  UserName,
  UserEmail,
  NoData,
  Loading,
} from "./UserListStyles";
import DOMPurify from 'dompurify';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.user);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <Loading>Cargando...</Loading>;
  }

  if (status === "failed") {
    return <NoData>Error: {error}</NoData>;
  }

  return (
    <Container>
      <Title>Lista de usuarios</Title>
      {Array.isArray(users) && users.length > 0 ? (
        <UserListContainer>
          {users.map(user => (
            <UserItem key={user.id}>
              {/* Uso DOMPurify para limpiar el contenido HTML si es necesario */}
              <UserName
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    `${user.name.first} ${user.name.last}`
                  ),
                }}
              />
              <UserEmail>{DOMPurify.sanitize(user.email)}</UserEmail>
            </UserItem>
          ))}
        </UserListContainer>
      ) : (
        <NoData>No hay usuarios</NoData>
      )}
    </Container>
  );
};

export default UsersList;