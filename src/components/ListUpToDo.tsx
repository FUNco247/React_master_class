import styled from "styled-components";
import { IToDo } from "../atoms";

const List = styled.li`
  list-style-type: none;
  width: 100%;
  border-bottom: 1px solid white;
  padding-bottom: 3px;
  margin-bottom: 10px;
`;

const BtnBox = styled.div`
  float: right;
`;

interface IToDoProps {
  toDo: IToDo;
}

function ListUpToDo({ toDo }: IToDoProps) {
  return (
    <List key={toDo.id}>
      {toDo.text}
      <BtnBox>
        {toDo.type !== "DONE" && <button>Done</button>}
        {toDo.type !== "DOING" && <button>Doing</button>}
        {toDo.type !== "TO_DO" && <button>To Do</button>}
      </BtnBox>
    </List>
  );
}

export default ListUpToDo;
