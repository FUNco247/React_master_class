import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo, toDoState, typesState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

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

const TypeBtn = styled.button<{ btnType: string }>`
  width: 60px;
  height: 20px;
  border-radius: 3%;
  border: none;
  margin: 0 5px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  background-color: ${(props) =>
    (props.btnType === "DONE" && "tomato") ||
    (props.btnType === "TO_DO" && "blue") ||
    (props.btnType === "DOING" && "green") ||
    "purple"};
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
      const newToDo = { text, id, type: newType };
      //console.log(targetToDo, newToDo);
      const partOne = current.slice(0, targetToDoIndex);
      const partTwo = current.slice(targetToDoIndex + 1);
      return [...partOne, newToDo as IToDo, ...partTwo];
    });
  };
  const types = useRecoilValue(typesState);
  const btnList = types.filter((type) => type !== toDo.type);
  return (
    <Wrapper>
      <List key={id}>{text}</List>
      <BtnBox>
        {btnList.map((type, index) => (
          <TypeBtn
            btnType={type}
            key={type + index}
            name={type}
            onClick={onClick}
          >
            {type}
          </TypeBtn>
        ))}
        {/*        {toDo.type !== "DONE" && (
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
    )} */}
      </BtnBox>
    </Wrapper>
  );
}

export default ListUpToDo;
