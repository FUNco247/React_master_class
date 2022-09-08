import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import AddToDo from "./components/AddToDo";
import ListUpToDo from "./components/ListUpToDo";

function ToDoList() {
  /** these two line can be replaced below "useRecoilState hook"
   * const value = useRecoilValue(toDoState);  this hook get value from the atom
   * const setValue = useSetRecoilState(toDoState);  this hook set value in the atom
   * const [toDos, setToDos] = useRecoilState(toDoState);  this hook can be used like useState hook
   */
  const toDos = useRecoilValue(toDoState);

  return (
    <div>
      <h1>오늘의 할 일</h1>
      <hr />
      <AddToDo />
      <ul>
        {toDos.map((toDo) => (
          <ListUpToDo key={toDo.id} toDo={toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
