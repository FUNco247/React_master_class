import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo, toDoSelector, typeState } from "../atoms";
import AddToDo from "../components/AddToDo";
import ListUpToDo from "../components/ListUpToDo";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const ToDoBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding: 0;
`;

function ToDoList() {
  /** these two line can be replaced below "useRecoilState hook"
   * const value = useRecoilValue(toDoState);  this hook get value from the atom
   * const setValue = useSetRecoilState(toDoState);  this hook set value in the atom
   * const [toDos, setToDos] = useRecoilState(toDoState);  this hook can be used like useState hook
   */
  //const toDos = useRecoilValue(toDoState); //this code get all data in atom
  const toDos = useRecoilValue(toDoSelector);
  const [type, setType] = useRecoilState(typeState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value as IToDo["type"]);
  };
  /** why use onInput event
   * onInput event occurs immediately after the value of an element has changed,
   * while onchange occurs when the element loses focus, after the content has been changed.
   */
  return (
    <Wrapper>
      <Container>
        <h1>오늘의 할 일</h1>
        <AddToDo />
        <select value={type} onInput={onInput}>
          <option value="TO_DO"> To do </option>
          <option value="DOING"> Doing </option>
          <option value="DONE"> Done </option>
        </select>
        <ToDoBox>
          {toDos.map((toDo) => (
            <ListUpToDo key={toDo.id} toDo={toDo} />
          ))}
        </ToDoBox>
      </Container>
    </Wrapper>
  );
}

export default ToDoList;
