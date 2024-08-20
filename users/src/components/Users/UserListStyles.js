import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const UserListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const UserItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const UserName = styled.span`
  font-weight: bold;
`;

export const UserEmail = styled.span`
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const NoData = styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: #ff0707;
  display: flex;
  justify-content: center;
`;

export const Loading = styled.span`
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
`