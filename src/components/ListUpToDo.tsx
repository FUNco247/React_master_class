import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState, Types } from "../atoms";

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
  const id = toDo.id;
  const text = toDo.text;
  const setToDo = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newType = event.currentTarget.name;
    setToDo((current) => {
      const targetToDoIndex = current.findIndex((toDo) => toDo.id === id);
      const targetToDo = current[targetToDoIndex];
      const newToDo = { text, id, type: newType };
      //console.log(targetToDo, newToDo);
      const partOne = current.slice(0, targetToDoIndex);
      const partTwo = current.slice(targetToDoIndex + 1);
      return [...partOne, newToDo as IToDo, ...partTwo];
    });
  };
  return (
    <List key={id}>
      {text}
      <BtnBox>
        {toDo.type !== "DONE" && (
          <button name={Types.DONE} onClick={onClick}>
            Done
          </button>
        )}
        {toDo.type !== "DOING" && (
          <button name={Types.DOING} onClick={onClick}>
            Doing
          </button>
        )}
        {toDo.type !== "TO_DO" && (
          <button name={Types.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
      </BtnBox>
    </List>
  );
}

export default ListUpToDo;
