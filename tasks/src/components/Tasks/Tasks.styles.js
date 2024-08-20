import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NoTasks = styled.div`
  padding: 20px;
  text-align: center;
  color: #999;
`;

export const ButtonStyles = {
  base: {
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  complete: {
    backgroundColor: "green",
  },
  incomplete: {
    backgroundColor: "blue",
  },
  remove: {
    backgroundColor: "red",
  },
};

export const ContainerAddTask = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;


export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 25px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: blue;
  }
`;
