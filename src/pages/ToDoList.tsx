import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector, toDoState } from "../atoms";
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
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <Wrapper>
      <Container>
        <h1>오늘의 할 일</h1>
        <AddToDo />
        <ToDoBox>
          <div>
            <h2>TO DO</h2>
            {toDo.map((toDo) => (
              <ListUpToDo key={toDo.id} toDo={toDo} />
            ))}
          </div>
          <div>
            <h2>DOING</h2>
            {doing.map((toDo) => (
              <ListUpToDo key={toDo.id} toDo={toDo} />
            ))}
          </div>
          <div>
            <h2>DONE</h2>
            {done.map((toDo) => (
              <ListUpToDo key={toDo.id} toDo={toDo} />
            ))}
          </div>
        </ToDoBox>
      </Container>
    </Wrapper>
  );
}

export default ToDoList;
