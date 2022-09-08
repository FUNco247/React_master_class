import styled from "styled-components";
import { IToDo } from "../atoms";

const List = styled.li`
  list-style-type: none;
  width: 100%;
  border-bottom: 1px solid white;
  padding-bottom: 3px;
  margin-bottom: 10px;
`;
interface IToDoProps {
  toDo: IToDo;
}

function ListUpToDo({ toDo }: IToDoProps) {
  return (
    <List key={toDo.id} className={toDo.type}>
      {toDo.text}
    </List>
  );
}

export default ListUpToDo;
